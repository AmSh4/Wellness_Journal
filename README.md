# Wellness_Journal
A full-stack project (React + Tailwind frontend, Node.js + Express + MongoDB backend, and a small Python sentiment analysis training script) that lets users log daily moods and short journal notes, visualizes mood trends, and performs sentiment analysis on entries.

## Project structure
       wellness_journal/
       ├─ README.md
       ├─ .gitignore
       ├─ .env.example
       ├─ docker-compose.yml
       ├─ dataset/
       │  └─ mood_dataset.csv
       ├─ backend/
       │  ├─ package.json
       │  ├─ .env.example
       │  ├─ server.js
       │  ├─ models/
       │  │  ├─ User.js
       │  │  └─ Entry.js
       │  ├─ routes/
       │  │  ├─ auth.js
       │  │  └─ entries.js
       │  └─ middleware/
       │     └─ auth.js
       ├─ frontend/
       │  ├─ package.json
       │  ├─ index.html
       │  ├─ vite.config.js
       │  ├─ postcss.config.cjs
       │  ├─ tailwind.config.cjs
       │  └─ src/
       │     ├─ main.jsx
       │     ├─ App.jsx
       │     ├─ styles.css
       │     └─ components/
       │        ├─ JournalForm.jsx
       │        └─ MoodChart.jsx
       └─ ml/
          ├─ requirements.txt
          └─ train_sentiment.py

## Features
- User signup / login (JWT)
- Add / view / delete journal entries (date, mood score, text)
- Sentiment analysis script to train a simple model on the included dataset
- Charts and a modern responsive UI (React + Tailwind)
- Clear README, env examples, and many files to present as a production-like repo

## Quick start (local)

1. Clone or extract the project.
2. Install backend dependencies:

       cd backend
       npm install
       # create .env (see .env.example) and set MONGODB_URI and JWT_SECRET
       node server.js
   
4. Install frontend:

       cd ../frontend
       npm install
        npm run dev
       # open http://localhost:3000

4. (Optional) Train the sentiment model:

       cd ../ml
       python3 -m venv venv
       source venv/bin/activate
       pip install -r requirements.txt
       python train_sentiment.py

## Structure

backend/   -> Node.js + Express API

frontend/  -> React + Vite + Tailwind UI

ml/        -> Simple scikit-learn training script + dataset

dataset/   -> CSV used by ML script


## Notes

This is a starter project. It may expand features (OAuth, deployment, mobile app).

Make sure to fill *.env* values before running backend.
