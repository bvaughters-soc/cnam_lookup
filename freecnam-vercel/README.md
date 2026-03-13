# CNAM Lookup Tool — Vercel Deployment

A CNAM (Caller Name) lookup tool for voice technicians. Queries freecnam.org via a serverless proxy.

## Project Structure

```
freecnam-vercel/
├── api/
│   └── cnam.js        ← Serverless function (proxies freecnam.org)
├── public/
│   └── index.html     ← Frontend UI
├── vercel.json        ← Vercel routing config
└── README.md
```

## Deploy to Vercel (10 minutes)

### Step 1 — Create a GitHub repo
1. Go to https://github.com and sign in (create account if needed)
2. Click "New repository"
3. Name it `cnam-tool`, set to Private, click "Create repository"
4. Upload all files from this folder into the repo

### Step 2 — Deploy on Vercel
1. Go to https://vercel.com and sign in with your GitHub account
2. Click "Add New Project"
3. Select your `cnam-tool` repository
4. Click "Deploy" — no settings to change, Vercel auto-detects everything
5. In ~60 seconds you get a live URL like: `cnam-tool.vercel.app`

### Step 3 — Add your custom domain (optional)
1. In Vercel project settings → "Domains"
2. Add your domain (e.g. `cnam.yourdomain.com`)
3. Vercel gives you DNS records to add in your domain registrar

## Features
- Single number CNAM lookup
- Bulk lookup (paste multiple numbers, one per line)
- Session history with timestamps
- Fully responsive — works on mobile

## API Endpoint
```
GET /api/cnam?q=PHONENUMBER
```
Returns raw CNAM text or empty string if no data.
