from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from parser import process_chat
from models import SummaryResponse

app = FastAPI()

# CORS middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development purposes
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chat_data = {}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    content = await file.read()
    global chat_data
    chat_data = process_chat(content.decode("utf-8"))
    return {"message": "File processed"} 

@app.get("/summary", response_model=SummaryResponse)
def get_summary():
    return chat_data

