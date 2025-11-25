import json
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Dict, List, Optional
from datetime import datetime
from pathlib import Path

app = FastAPI()
STATE_FILE = Path("state.json")

class Task(BaseModel):
    id: int
    description: str
    completed: bool
    timer: bool
    reminderDate: Optional[datetime] = None

class Note(BaseModel):
    id: int
    labels: List[str]
    title: str
    subtitle: str
    content: str
    links: Dict[str, str]
    tasks: Dict[str, Task]
    img: List[str]
    last_edited: datetime

class NotesState(BaseModel):
    deletedCount: int
    notes: Dict[str, Note]

state = NotesState(deletedCount=0, notes={})

def load_state() -> NotesState:

@app.get("/api/state")
def get_state():
    return state

@app.put("/api/state")
def update_state(new_state: NotesState):
    global state
    state = new_state
    return state

@app.put("/api/deletedCount/{value}")
def update_deleted_count(value: int):
    state.deletedCount = value
    return {"deletedCount": state.deletedCount}

@app.put("/api/notes/{note_id}")
def update_note(note_id: str, note: Note):
    state.notes[note_id] = note
    return state.notes[note_id]