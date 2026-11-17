# Smart Agriculture AI

## Project Overview
A full‑stack web application that provides AI‑powered tools for farmers:
- Crop disease detection
- Soil health analysis
- Crop recommendations
- Farm‑to‑market tracking

The repository is organized into a **frontend** (React + Vite) and a **backend** (Flask + SQLite).  This document explains how to set up, run, and test each part.

---

## Prerequisites
- **Node.js** (v26.13.0) – `node -v`
- **npm** (v11.20.0) – `npm -v`
- **Python** 3.x (ensure `python` is on your PATH) – `python --version`
- **Git** (optional, for version control)

---

## Folder Structure
```
SMART AGRICULTURE/
│
├── frontend/               # React + Vite UI
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── public/
│   │   └── index.html
│   └── package.json
│
├── backend/                # Flask API
│   ├── app/
│   │   ├── __init__.py
│   │   └── routes/
│   │        └── health.py
│   ├── database/            # SQLite DB will be created here
│   ├── uploads/             # For future image uploads
│   ├── app.py               # Entry point
│   └── requirements.txt
│
├── datasets/               # Raw data for ML models
├── ml_models/              # Trained model files (once added)
├── docs/                   # Design docs, diagrams, etc.
├── .gitignore
├── .env.example            # Sample environment variables
└── README.md               # You are reading it!
```
---

## Setup Instructions
### 1. Clone the repository (if using Git)
```bash
git clone <repo-url>
cd "SMART AGRICULTURE"
```

### 2. Frontend
```bash
cd frontend
npm install           # installs React, Vite, Tailwind, etc.
npm run dev            # starts Vite dev server (http://localhost:5173)
```
The UI should display a simple welcome screen.

### 3. Backend
```bash
cd ../backend
python -m venv venv   # create a virtual environment
venv\Scripts\activate # on Windows (use `source venv/bin/activate` on *nix)
pip install -r requirements.txt
# copy .env.example to .env and adjust if needed
copy .env.example .env
python app.py          # starts Flask on http://127.0.0.1:5000
```
A **health‑check** endpoint is available at `GET /api/health`.  It returns JSON:
```json
{ "status": "ok" }
```
---

## Testing
### Backend health‑check
```bash
curl http://127.0.0.1:5000/api/health
```
You should see `{"status":"ok"}`.

### Frontend
Open the URL printed by `npm run dev` (default http://localhost:5173).  You should see the *Smart Agriculture AI* heading.

---

## Next Steps (Phase 2)
- Implement AI model loading and inference endpoints.
- Add authentication and user management.
- Build the rest of the UI (pages, components, services).
- Connect the frontend to the backend APIs.

---

## License
MIT © 2026 Revant H.
