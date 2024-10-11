from fastapi import FastAPI
from routers import user_router, profile_router, match_router
from db import Base, engine
from models.users import User
from models.profile import  Profile
from models.photo import Photo 
from models.match import Match 
from fastapi.middleware.cors import CORSMiddleware

# Initialize the app
app = FastAPI(root_path="/api")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://62.72.59.161","https://62.72.59.161","*.rishtajunction.com"],  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

# Create the database
#  tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(user_router.router)
app.include_router(profile_router.router)
app.include_router(match_router.router)

@app.get("/")
def root():
    return {"message": "Welcome to the Matrimonial App!"}
