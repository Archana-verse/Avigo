from fastapi import APIRouter

router = APIRouter()

@router.post("/plan/generate")
async def generate_plan():
    return {
        "summary": "Backend connected successfully",
        "confidence": 87,
        "flights": [],
        "hotels": [],
        "itinerary": []
    }
