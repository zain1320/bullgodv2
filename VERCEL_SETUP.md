# Vercel Deployment Instructions

## ✅ What I've Done:
1. Created a clean `static-site` branch with only your static HTML and assets
2. Removed all Next.js files
3. Pushed the branch to GitHub

## 🚀 What You Need to Do on Vercel:

### Step 1: Go to Vercel Dashboard
- Visit https://vercel.com/dashboard
- Find your project (`bullgodv2` or whatever it's called)

### Step 2: Change Production Branch
1. Go to **Settings** → **Git**
2. Under **Production Branch**, select `static-site` instead of `main`
3. Click **Save**

### Step 3: Configure Build Settings (IMPORTANT!)
1. Go to **Settings** → **General**
2. Scroll to **Build & Development Settings**
3. Set the following:
   - **Framework Preset**: `Other` or `Static Site`
   - **Build Command**: Leave empty or delete it
   - **Output Directory**: Leave empty (or set to `.` for root)
   - **Install Command**: Leave empty or delete it
4. Click **Save**

### Step 4: Redeploy
1. Go to **Deployments** tab
2. Find the latest deployment from `static-site` branch
3. If it doesn't exist yet, click **Redeploy** on the latest deployment
4. Or go to **Settings** → **Git** → **Production Branch** and it should auto-deploy

### Step 5: Verify
- Your site should now show the BullGod HTML at https://bullgodv2.vercel.app

## 🔄 Alternative: If Above Doesn't Work

### Option A: Create New Project
1. In Vercel dashboard, click **Add New Project**
2. Import your GitHub repo
3. Select the `static-site` branch
4. Set Framework to "Other"
5. Deploy!

### Option B: Use Vercel CLI
```bash
cd static-deploy  # or root directory with index.html
vercel
```
Follow prompts and deploy directly.

---

**Your static site is now live on the `static-site` branch!** 🎉

