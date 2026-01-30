from pydantic import BaseModel
from typing import List

class PlanRequest(BaseModel):
    from_city: str
    to_city: str
    start_date: str
    end_date: str
    travel_class: str
    budget: str
    companion: str
    interests: List[str]
    diet: str
