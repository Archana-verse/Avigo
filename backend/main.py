from fastapi import FastAPI
from routers.plan_router import router as plan_router

app = FastAPI()

app.include_router(plan_router)
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
