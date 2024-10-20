from fastapi import FastAPI
from routers import user_router, profile_router, match_router, support_router
from db import Base, engine
from models.users import User
from models.profile import  Profile
from models.photo import Photo 
from models.match import Match 
from fastapi.middleware.cors import CORSMiddleware
import os

is_production = os.getenv("ENVIRONMENT") == "production"

#Initializes the app
app = FastAPI(
    root_path="/api",
    openapi_url=None if is_production else "/openapi.json",
    docs_url=None if is_production else "/docs",
    redoc_url=None if is_production else "/redoc"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "localhost:3000", "http://62.72.59.161", "https://62.72.59.161", "*.rishtajunction.com"],  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

# Create the database
#  tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(user_router.router,tags=["users"])
app.include_router(profile_router.router,tags=["profiles"])
app.include_router(match_router.router,tags=["matches"])
app.include_router(support_router.router,tags=["support_request"])

@app.get("/health_check")
def root():
    return {"message": "Welcome to Rishta Junction!"}
