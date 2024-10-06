from pydantic import BaseModel

class ProfileCreate(BaseModel):
    age: int
    gender: str
    bio: str

class ProfileOut(BaseModel):
    profile_id: int
    age: int
    gender: str
    bio: str

    class Config:
        orm_mode = True
