# from fastapi import FastAPI, Depends, HTTPException
# from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
# from pydantic import BaseModel
# from sqlalchemy import create_engine, Column, Integer, String
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import sessionmaker

# DATABASE_URL = "sqlite:///./test.db" 

# engine = create_engine(DATABASE_URL)
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# Base = declarative_base()

# class User(Base):
#     __tablename__ = "users"
#     id = Column(Integer, primary_key=True, index=True)
#     username = Column(String, unique=True, index=True)
#     password = Column(String)

# Base.metadata.create_all(bind=engine)

# app = FastAPI()
# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# class UserInDB(User):
#     hashed_password: str

# class UserCreate(BaseModel):
#     username: str
#     password: str

# @app.post("/register/")
# async def register(user: UserCreate):
#     db = SessionLocal()
#     db_user = User(username=user.username, password=user.password)
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return {"username": db_user.username}

# @app.post("/token/")
# async def login(form_data: OAuth2PasswordRequestForm = Depends()):
#     db = SessionLocal()
#     user = db.query(User).filter(User.username == form_data.username).first()
#     if not user or user.password != form_data.password:
#         raise HTTPException(status_code=400, detail="Invalid credentials")
#     return {"access_token": user.username, "token_type": "bearer"}

# @app.get("/")
# async def read_root():
#     return {"Hello": "World"}


from fastapi import FastAPI
from routers import user_router, profile_router, match_router
from db import Base, engine
from models.users import User
from models.profile import  Profile
from models.photo import Photo 
from models.match import Match 


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

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)

