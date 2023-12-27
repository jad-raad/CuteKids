from fastapi import FastAPI
from supa.supa import Supabase

app = FastAPI()

supabase_instance = Supabase()

@app.get("/")
def root():
    return {"message": "Hello wosrld"}

@app.post("/login")
def login():
    # Use the pre-created supabase_instance instead of creating a new one
    return supabase_instance.login("test", "test")
