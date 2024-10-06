from fastapi import FastAPI
from routers import user_router, profile_router, match_router
from db import Base, engine
from models.users import User
from models.profile import  Profile
from models.photo import Photo 
from models.match import Match 
import uvicorn

# Initialize the app
app = FastAPI()

# Create the database tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(user_router.router)
app.include_router(profile_router.router)
app.include_router(match_router.router)

@app.get("/")
def root():
    return {"message": "Welcome to the Matrimonial App!"}

if __name__ == "__main__":
    
    uvicorn.run(app, host="127.0.0.1", port=8000)
