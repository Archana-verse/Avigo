import os
from dotenv import load_dotenv

load_dotenv()

GEMINIAPI_KEY = os.getenv("GEMINIAPI_KEY")

if not GEMINIAPI_KEY:
    print("⚠️ GEMINIAPI_KEY missing — AI recommendation disabled.")


def generate_gemini_response(prompt: str):


    if not GEMINIAPI_KEY:
        return ""

    try:
        import google.generativeai as genai

        genai.configure(api_key=GEMINIAPI_KEY)

        model = genai.GenerativeModel("gemini-1.5-flash")

        response = model.generate_content(prompt)

        return response.text or ""

    except Exception as e:
        print("⚠️ Gemini API error:", e)
        return ""
