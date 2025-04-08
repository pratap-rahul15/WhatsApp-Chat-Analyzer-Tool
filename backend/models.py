from pydantic import BaseModel
from typing import List, Dict

class ChartDay(BaseModel):
    date: str
    new_users: int
    active_users: int


class SummaryResponse(BaseModel):
    chartData: List[ChartDay]
    active_4_days_users: List[str]
    