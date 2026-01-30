# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from models import PlanRequest

# app = FastAPI()

# # Allow frontend (React)
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173", "http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.get("/")
# def health_check():
#     return {"status": "Backend running 🚀"}

# @app.post("/plan")
# def create_plan(data: PlanRequest):
#     # For now we just return mock AI response
#     return {
#         "message": "Plan generated successfully",
#         "input": data,
#         "itinerary": [
#             {"day": 1, "activity": f"Arrival in {data.destination}"},
#             {"day": 2, "activity": "Local sightseeing"},
#             {"day": 3, "activity": "Leisure & shopping"},
#         ],
#     }
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 🔹 Allow frontend (React) to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # later we’ll restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔹 Data model coming from your Plan form
class PlanRequest(BaseModel):
    fromCity: str
    toCity: str
    startDate: str
    endDate: str
    budget: str
    travelClass: str
    companion: str
    interests: list[str]
    diet: str


@app.get("/")
def root():
    return {"status": "Backend running ✅"}


@app.post("/plan")
def create_plan(plan: PlanRequest):
    """
    This endpoint receives data from Plan page
    """
    return {
        "message": "Plan received successfully 🎉",
        "data": plan
    }

