# GitHub Authentication Setup Guide

## Option 1: Using Personal Access Token (Recommended)

### Step 1: Create a Personal Access Token

1. Go to GitHub.com and sign in
2. Click your profile picture → **Settings**
3. Scroll down to **Developer settings** (left sidebar)
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token** → **Generate new token (classic)**
6. Give it a name (e.g., "Texas2Success Project")
7. Select scopes:
   - ✅ **repo** (Full control of private repositories)
8. Click **Generate token**
9. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Use Token to Push

When you push, use the token as your password:

```bash
git push -u origin main
```

**Username**: Your GitHub username (Prathyushapritila)
**Password**: Paste your Personal Access Token (not your GitHub password)

---

## Option 2: Using GitHub CLI (gh)

### Install GitHub CLI

```bash
# macOS
brew install gh

# Or download from: https://cli.github.com/
```

### Authenticate

```bash
gh auth login
```

Follow the prompts:
- Choose **GitHub.com**
- Choose **HTTPS**
- Authenticate via web browser
- Select scopes: **repo**

### Push

```bash
git push -u origin main
```

---

## Option 3: Configure Git Credential Helper

### macOS (Keychain)

```bash
# Configure Git to use macOS Keychain
git config --global credential.helper osxkeychain

# Now push (will prompt for credentials once)
git push -u origin main
```

Enter:
- **Username**: Prathyushapritila
- **Password**: Your Personal Access Token

---

## Option 4: Update Remote URL with Token

### Direct Method (Less Secure)

```bash
# Replace YOUR_TOKEN with your actual token
git remote set-url origin https://YOUR_TOKEN@github.com/Prathyushapritila/Texas2success.git

# Then push
git push -u origin main
```

⚠️ **Warning**: This stores token in git config. Use Option 1 or 2 for better security.

---

## Option 5: SSH Keys (Most Secure)

### Generate SSH Key

```bash
# Generate new SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Press Enter to accept default location
# Enter a passphrase (optional but recommended)
```

### Add SSH Key to GitHub

```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub
# Copy the entire output
```

1. Go to GitHub.com → Settings → **SSH and GPG keys**
2. Click **New SSH key**
3. Paste your public key
4. Click **Add SSH key**

### Update Remote URL

```bash
git remote set-url origin git@github.com:Prathyushapritila/Texas2success.git
git push -u origin main
```

---

## Quick Fix: Check Current Remote

```bash
# Check current remote URL
git remote -v

# If it's HTTPS, you'll need to authenticate
# If it's SSH, make sure your SSH key is added to GitHub
```

---

## Troubleshooting

### "Permission denied" Error

- Make sure you have write access to the repository
- Verify you're using the correct GitHub account
- Check if the repository exists and you have access

### "Repository not found" Error

- Verify the repository URL is correct
- Make sure the repository exists on GitHub
- Check if you have access to the repository

### "Authentication failed" Error

- Your GitHub password won't work - you need a Personal Access Token
- Make sure the token has `repo` scope
- Token might have expired - generate a new one

---

## Recommended Approach

**For beginners**: Use **Option 1 (Personal Access Token)** with **Option 3 (Credential Helper)**

1. Create a Personal Access Token
2. Configure credential helper: `git config --global credential.helper osxkeychain`
3. Push: `git push -u origin main`
4. Enter username and token when prompted
5. macOS will save it in Keychain for future use

---

## Verify Setup

After successful push, verify:

```bash
# Check remote
git remote -v

# Check last commit
git log --oneline -1

# Visit repository on GitHub
# https://github.com/Prathyushapritila/Texas2success
```

