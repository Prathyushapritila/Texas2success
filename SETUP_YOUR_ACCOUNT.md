# Setup Instructions for Your GitHub Account

## Step 1: Create Repository on GitHub

1. Go to https://github.com and sign in with your account (pritila prathyusha)
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `Texas2success`
4. Description: "Modern website for Texas 2 Success"
5. Choose: **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have files)
7. Click **"Create repository"**

## Step 2: Update Remote URL

Once you have your repository URL, I'll update it. Your URL will be:
```
https://github.com/YOUR_USERNAME/Texas2success.git
```

Or if you prefer SSH:
```
git@github.com:YOUR_USERNAME/Texas2success.git
```

## Step 3: Authenticate and Push

After updating the remote, you'll need to authenticate:

### Using Personal Access Token (Recommended)

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name: "Texas2Success Project"
4. Select scope: ✅ **repo**
5. Click **"Generate token"**
6. **Copy the token**

Then run:
```bash
git push -u origin main
```

When prompted:
- **Username**: Your GitHub username
- **Password**: Paste your Personal Access Token

---

## Quick Command Reference

```bash
# Check current remote
git remote -v

# Update to your account (replace YOUR_USERNAME)
git remote set-url origin https://github.com/YOUR_USERNAME/Texas2success.git

# Push to your repository
git push -u origin main
```

---

## Need Help?

Share your GitHub username and I'll update the remote URL for you!

