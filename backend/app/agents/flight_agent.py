from app.services.serpapi_service import search_flights
from app.services.gemini_service import generate_gemini_response
from app.utils.iata_lookup import get_iata_code

import json
import re


# ===============================
# Helpers
# ===============================

def clean_price(price_str):
    try:
        return int(str(price_str).replace("₹", "").replace(",", "").strip())
    except:
        return 999999


def format_time(t):
    """
    Fix time extraction from SERPAPI.
    Handles formats like:
    2026-04-10T10:35
    10:35
    """
    if not t:
        return ""

    t = str(t)

    # If ISO datetime
    if "T" in t:
        return t.split("T")[1][:5]

    # If already HH:MM
    if ":" in t:
        return t[:5]

    # fallback
    return ""


# ===============================
# MAIN AGENT
# ===============================

def get_flight_recommendations(from_city, to_city, departure_date, preferences):

    # 🔥 Convert city → IATA
    from_iata = get_iata_code(from_city)
    to_iata = get_iata_code(to_city)

    raw_flights = search_flights(from_iata, to_iata, departure_date)

    if not raw_flights:
        print("⚠️ No flights returned from SERPAPI")
        return []

    flights = []

    # ===============================
    # NORMALIZE SERP DATA
    # ===============================
    for idx, f in enumerate(raw_flights):
        try:
            flight_obj = {
                "id": str(idx),
                "airline": f.get("airline", "Airline"),
                "flightNumber": f.get("flight_number", "—"),
                "departure": from_city,
                "arrival": to_city,
                "departureTime": format_time(f.get("departure_time")),
                "arrivalTime": format_time(f.get("arrival_time")),
                "duration": f.get("duration", "—"),
                "price": clean_price(f.get("price")),
                "departureAirport": f.get("departure_airport", {}).get("name"),
                "arrivalAirport": f.get("arrival_airport", {}).get("name"),
                "tag": None,
            }
            flights.append(flight_obj)
        except Exception as e:
            print("⚠️ Flight normalize error:", e)

    if not flights:
        return []

    # ===============================
    # CHEAPEST TAG
    # ===============================
    flights.sort(key=lambda x: x["price"])
    flights[0]["tag"] = "Cheapest"

    # ===============================
    # GEMINI AI RECOMMENDATION (OPTIONAL)
    # ===============================
    try:
        prompt = f"""
You are an AI travel assistant.
User flying from {from_city} to {to_city} on {departure_date}.
Preferences: {preferences}

Flights:
{json.dumps(flights, indent=2)}

Return JSON:
{{ "recommended_id": "<flight_id>" }}
        """.strip()

        gemini_reply = generate_gemini_response(prompt)

        print("\n🧠 Gemini Raw Response:\n", gemini_reply)

        match = re.search(r"\{.*\}", gemini_reply or "", re.DOTALL)

        if match:
            parsed = json.loads(match.group())
            rec_id = parsed.get("recommended_id")

            for flight in flights:
                if flight["id"] == rec_id:
                    flight["tag"] = "Recommended"

    except Exception as e:
        print("⚠️ Gemini recommendation error:", e)

    # ===============================
    # BEST VALUE TAG
    # ===============================
    try:
        if len(flights) >= 3:
            mid_index = len(flights) // 2
            if flights[mid_index]["tag"] is None:
                flights[mid_index]["tag"] = "Best Value"
    except:
        pass

    return flights
