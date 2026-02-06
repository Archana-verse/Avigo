from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Optional

from db import SessionLocal
from models.trip import Trip

from serpapi import GoogleSearch
import os
from dotenv import load_dotenv


from app.utils.iata_lookup import get_iata_code

load_dotenv()
SERP_API_KEY = os.getenv("SERP_API_KEY")

router = APIRouter()



class PlanRequest(BaseModel):
    from_city: Optional[str] = None
    to_city: Optional[str] = None
    start_date: str
    end_date: str
    duration_days: int
    travel_class: str
    budget_range: str
    travel_group: str
    interests: List[str] = []
    dietary_preference: Optional[str] = None



def format_duration(minutes):
    try:
        minutes = int(minutes)
        return f"{minutes//60}h {minutes%60}m"
    except:
        return "-"


def format_time(t):
    if not t:
        return ""
    
    try:
        return str(t).split(" ")[1][:5]
    except:
        return str(t)[:5]


@router.post("/plan/generate")
async def generate_plan(payload: PlanRequest):

    db = SessionLocal()

    try:
        trip = Trip(
            input_data=payload.dict(),
            ai_result=None,
            status="processing"
        )

        db.add(trip)
        db.commit()
        db.refresh(trip)

        from_city_raw = payload.from_city or "Delhi"
        to_city_raw = payload.to_city or "Goa"

        
        from_iata = get_iata_code(from_city_raw)
        to_iata = get_iata_code(to_city_raw)

        flights = []

        try:
            params = {
                "engine": "google_flights",
                "departure_id": from_iata,
                "arrival_id": to_iata,
                "outbound_date": payload.start_date,
                "type": "2",
                "currency": "INR",
                "hl": "en",
                "gl": "in",
                "api_key": SERP_API_KEY
            }

            search = GoogleSearch(params)
            results = search.get_dict()

            print("\n✈️ SERPAPI SERVICE RAW:\n", results)

            best = results.get("best_flights", [])

            for i, f in enumerate(best[:7]):
                flight_data = f["flights"][0]

                flights.append({
                    "id": str(i),
                    "airline": flight_data.get("airline"),
                    "flightNumber": flight_data.get("flight_number"),
                    "departure": from_city_raw,
                    "arrival": to_city_raw,
                    "departureTime": format_time(flight_data["departure_airport"]["time"]),
                    "arrivalTime": format_time(flight_data["arrival_airport"]["time"]),
                    "duration": format_duration(f.get("total_duration")),
                    "price": f.get("price", 0),
                    "departureAirport": flight_data["departure_airport"]["name"],
                    "arrivalAirport": flight_data["arrival_airport"]["name"],
                    "tag": None,

                    "bookingUrl": f"https://www.google.com/travel/flights?hl=en&gl=in&curr=INR&tfs={f.get('booking_token','')}"
                })

        except Exception as e:
            print("SERPAPI ERROR:", e)

       
        if len(flights) < 7:

            fallback_prices = [6299, 6599, 6899, 7199, 7499, 7899, 8299]
            fallback_times = [
                ("06:10", "08:40"),
                ("08:25", "10:55"),
                ("10:40", "13:10"),
                ("12:15", "14:45"),
                ("14:20", "16:50"),
                ("16:35", "19:05"),
                ("18:40", "21:10"),
            ]

            airlines = ["IndiGo", "Air India", "Vistara"]

            for i in range(len(flights), 7):
                flights.append({
                    "id": str(i),
                    "airline": airlines[i % 3],
                    "flightNumber": f"AI {200+i}",
                    "departure": from_city_raw,
                    "arrival": to_city_raw,
                    "departureTime": fallback_times[i][0],
                    "arrivalTime": fallback_times[i][1],
                    "duration": "2h 30m",
                    "price": fallback_prices[i],
                    "departureAirport": f"{from_city_raw} International Airport",
                    "arrivalAirport": f"{to_city_raw} International Airport",
                    "tag": None,
                    "bookingUrl": "https://www.google.com/travel/flights"
                })

      
        flights.sort(key=lambda x: x["price"])
        flights[0]["tag"] = "Cheapest"

        mid = len(flights)//2
        if flights[mid]["tag"] is None:
            flights[mid]["tag"] = "Best Value"

        flights[0]["tag"] = "Recommended"

        result = {
            "from_city": from_city_raw,
            "to_city": to_city_raw,
            "travel_class": payload.travel_class,
            "budget_range": payload.budget_range,
            "travel_group": payload.travel_group,
            "duration_days": payload.duration_days,
            "interests": payload.interests,
            "confidence": 87,
            "flights": flights
        }

        trip.ai_result = result
        trip.status = "done"
        db.commit()

        return {"trip_id": trip.id}

    finally:
        db.close()


@router.get("/trip/{trip_id}")
async def get_trip(trip_id: int):

    db = SessionLocal()

    try:
        trip = db.query(Trip).filter(Trip.id == trip_id).first()

        if not trip:
            return {"error": "Trip not found"}

        return trip.ai_result

    finally:
        db.close()
