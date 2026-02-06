# from typing import List, Optional
# from pydantic import BaseModel


# class HotelRequest(BaseModel):
#     destination: str             # City name or IATA code (e.g., "DEL")
#     checkin_date: str            # Format: YYYY-MM-DD
#     checkout_date: str           # Format: YYYY-MM-DD
#     budget_range: str            # e.g., "low", "medium", "high"
#     travelers: str               # e.g., "solo", "couple", "family"
#     interests: List[str]         # e.g., ["nature", "luxury", "budget"]
#     dietary_pref: Optional[str]  # e.g., "vegetarian", "vegan", etc.


# class HotelRecommendation(BaseModel):
#     name: str
#     location: str
#     price_per_night: int
#     rating: float
#     amenities: List[str]
#     reason: str                   # AI-generated reason for recommendation


# class HotelResponse(BaseModel):
#     recommendations: List[HotelRecommendation]
