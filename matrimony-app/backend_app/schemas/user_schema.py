from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserOut(BaseModel):
    user_id: int
    username: str
    email: str
    # Add other fields as necessary

    class Config:
        orm_mode = True  
