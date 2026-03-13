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

### Step 3 — Add your custom domain (Squarespace)

**In Vercel first:**
1. Open your project on Vercel → go to **Settings → Domains**
2. Type `cnam.yourdomain.com` (replace with your actual domain) and click **Add**
3. Vercel will display a CNAME record — copy these two values:
   - **Name:** `cnam`
   - **Value:** `cname.vercel-dns.com`

**Then in Squarespace:**
1. Log into Squarespace → go to **Domains** → click your domain
2. Click **DNS Settings**
3. Scroll down to **Custom Records**
4. Click **Add Record** and fill in:
   - **Type:** `CNAME`
   - **Host:** `cnam`
   - **Data:** `cname.vercel-dns.com`
   - **TTL:** leave as default
5. Click **Save**

DNS usually propagates within 15-30 minutes on Squarespace.
Once live, your team accesses the tool at: https://cnam.yourdomain.com

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
