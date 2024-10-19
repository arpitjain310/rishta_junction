from pydantic import BaseModel

class ProfileCreate(BaseModel):
    user_id: int

class ProfileOut(BaseModel):
    profile_id: int
    user_id: int

    class Config:
        orm_mode = True
