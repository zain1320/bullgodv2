# Deploy Instructions

## Option 1: Create New GitHub Repo (Recommended)

1. **Create a new GitHub repository** (e.g., `bullgod-website`)

2. **Push this folder to the new repo:**
   ```bash
   cd static-deploy
   git remote add origin https://github.com/YOUR_USERNAME/bullgod-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your new GitHub repo
   - Vercel will auto-detect it as a static site
   - Deploy!

## Option 2: Deploy Directly from This Folder

You can also deploy directly without creating a new repo:

```bash
cd static-deploy
vercel
```

Follow the prompts to deploy.

## Option 3: Use Netlify

1. Drag and drop the `static-deploy` folder to https://app.netlify.com/drop
2. Your site will be live instantly!

