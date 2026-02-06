from pydantic import BaseModel
from typing import List


class PlanRequest(BaseModel):
    from_: str            # Departure city (e.g., "DEL")
    to: str               # Destination city (e.g., "DXB")
    departureDate: str    # Format: YYYY-MM-DD
    returnDate: str       # Format: YYYY-MM-DD
    travelClass: str      # e.g., "economy", "business", "first"
    budget: str           # e.g., "low", "medium", "high"
    travelers: str        # e.g., "solo", "couple", "family"
    interests: List[str]  # e.g., ["culture", "nature", "shopping"]
    diet: str             # e.g., "vegetarian", "vegan", "non-veg"
