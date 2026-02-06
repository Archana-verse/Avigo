import os
from serpapi import GoogleSearch
from dotenv import load_dotenv

load_dotenv()


SERP_API_KEY = os.getenv("SERP_API_KEY")

if not SERP_API_KEY:
    raise ValueError("❌ SERP_API_KEY not found in .env file.")


def search_flights(from_city, to_city, departure_date):

    params = {
        "engine": "google_flights",
        "departure_id": from_city,
        "arrival_id": to_city,
        "outbound_date": departure_date,
        "type": "2",
        "currency": "INR",
        "hl": "en",
        "gl": "in",
        "api_key": SERP_API_KEY,
    }

    search = GoogleSearch(params)
    results = search.get_dict()

    print("\n✈️ SERPAPI SERVICE RAW:\n", results)

    # 🔥 SERP sometimes returns other_flights instead
    flights = results.get("best_flights") or results.get("other_flights") or []

    normalized = []

    for f in flights:
        try:
            flight_data = f["flights"][0]

            normalized.append({
                "airline": flight_data.get("airline"),
                "flight_number": flight_data.get("flight_number"),
                "departure_time": flight_data["departure_airport"]["time"],
                "arrival_time": flight_data["arrival_airport"]["time"],
                "duration": f.get("total_duration"),
                "price": f.get("price"),
                "departure_airport": {
                    "iata": flight_data["departure_airport"]["id"],
                    "name": flight_data["departure_airport"]["name"],
                },
                "arrival_airport": {
                    "iata": flight_data["arrival_airport"]["id"],
                    "name": flight_data["arrival_airport"]["name"],
                },
            })
        except Exception as e:
            print("⚠️ Parse error:", e)

    return normalized
