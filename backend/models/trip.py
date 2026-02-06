from sqlalchemy import Column, Integer, JSON, String
from db import Base

class Trip(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)
    input_data = Column(JSON)
    ai_result = Column(JSON)
    status = Column(String)
