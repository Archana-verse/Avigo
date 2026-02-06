# # app/routes/hotel_images.py
# import os
# from fastapi import APIRouter, Query
# from serpapi import GoogleSearch
# from dotenv import load_dotenv

# load_dotenv()

# router = APIRouter()

# SERP_API_KEY = os.getenv("SERPAPI_API_KEY")

# @router.get("/hotel-image")
# def get_hotel_image(name: str = Query(...), location: str = Query(...)):
#     try:
#         query = f"{name} hotel in {location}"
#         search = GoogleSearch({
#             "q": query,
#             "tbm": "isch",
#             "api_key": SERP_API_KEY
#         })
#         results = search.get_dict()
#         images = results.get("images_results", [])

#         if not images:
#             return {"image": "https://via.placeholder.com/400x300?text=Hotel"}

#         return {"image": images[0].get("original")}

#     except Exception as e:
#         print("🔴 Error fetching image:", e)
#         return {"image": "https://via.placeholder.com/400x300?text=Hotel"}
