from pydantic import BaseModel
from datetime import datetime

class SupportRequestCreate(BaseModel):
    name: str
    email: str
    mobile_number: int
    request_text: str

class SupportRequestOut(SupportRequestCreate):
    request_id: int
    created_at: datetime

    class Config:
        orm_mode = True
