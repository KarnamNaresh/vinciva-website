# Switch Git Account & Redeploy Guide

## Current Status
- ✅ Local git repository initialized
- ✅ 56 files committed locally  
- ❌ No remote added yet
- ❌ Git user needs to be updated to correct account

---

## Step 1: Gather Your GitHub Details

You'll need the following information:

### **Your Correct GitHub Account:**
- **GitHub Username**: (from github.com/YOUR_USERNAME)
- **GitHub Email**: (the email associated with your GitHub account)  
- **Authentication Method**: 
  - [ ] HTTPS (easier - uses Personal Access Token)
  - [ ] SSH (more secure - uses SSH keys)

---

## Step 2: Create NEW Repository on GitHub

If you haven't already created a new repository:

1. Go to https://github.com/new
2. Fill in:
   - **Repository name**: `vinciva-website`
   - **Description**: "Vinciva - Strategic Consulting & Capacity Building Website"
   - **Visibility**: Public or Private (your choice)
3. **IMPORTANT**: Do NOT check any initialization options
4. Click **"Create repository"**

### Copy Your Repository URL:
- **For HTTPS**: `https://github.com/YOUR_USERNAME/vinciva-website.git`
- **For SSH**: `git@github.com:YOUR_USERNAME/vinciva-website.git`

---

## Step 3: Update Git Configuration

Once you have your GitHub details, run these commands in terminal:

### Update Git User
```bash
# Set your name that appears in commits
git config --global user.name "Your Name"

# Set your email associated with GitHub account  
git config --global user.email "your-email@example.com"

# Verify the changes
git config --global user.name
git config --global user.email
```

### Add Remote (Choose ONE)

**If using HTTPS:**
```bash
cd /home/developer/Personal/Works/Lovable/vinciva
git remote add origin https://github.com/YOUR_USERNAME/vinciva-website.git
```

**If using SSH:**
```bash
cd /home/developer/Personal/Works/Lovable/vinciva
git remote add origin git@github.com:YOUR_USERNAME/vinciva-website.git
```

---

## Step 4: Push to Correct GitHub Account

After adding the remote, push your commits:

```bash
git push -u origin main
```

When prompted (HTTPS only):
- **Username**: Your GitHub username
- **Password**: Your Personal Access Token (NOT your GitHub password)

---

## Step 5: Verify Push Success

Check these to confirm:

```bash
# Verify commits were pushed
git log --oneline -n 2

# Verify remote is set correctly
git remote -v
```

Expected output:
```
origin  https://github.com/YOUR_USERNAME/vinciva-website.git (fetch)
origin  https://github.com/YOUR_USERNAME/vinciva-website.git (push)
```

Then visit: https://github.com/YOUR_USERNAME/vinciva-website ✅

---

## Step 6: Deploy to Vercel (Correct Account)

### Option A: Auto-Deploy (Recommended)
```bash
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Authorize Vercel with your GitHub account
4. Select "vinciva-website" repository
5. Review settings and click "Deploy"
```

### Option B: Vercel CLI
```bash
npm install -g vercel
cd /home/developer/Personal/Works/Lovable/vinciva
vercel
```

---

## 🚨 If Remote Already Exists (Wrong Account)

If you get "fatal: remote origin already exists", fix it:

```bash
# Remove the old remote
git remote remove origin

# Add correct remote (use commands from Step 3 above)
git remote add origin https://github.com/YOUR_USERNAME/vinciva-website.git

# Push again
git push -u origin main
```

---

## 🔑 Authentication Methods

### HTTPS (Recommended for Beginners)
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Click "Generate new token"
3. Select scope: `repo` (full control of private repositories)
4. Copy the token
5. When git prompts for password, paste the token

### SSH (More Secure)
1. Generate key: `ssh-keygen -t ed25519 -C "your-email@example.com"`
2. Add key: `ssh-add ~/.ssh/id_ed25519`  
3. Add public key to GitHub → Settings → SSH and GPG keys
4. Test: `ssh -T git@github.com`

---

## ✅ Ready?

**PROVIDE THE FOLLOWING** and I'll execute the commands for you:

1. Your GitHub **username**
2. Your GitHub **email**
3. Your full **name** (for commits)
4. **HTTPS** or **SSH** preference
5. Your **repository URL** (from the new repo you created)

---

## Example Commands (Replace with your values)

```bash
# Configure correct user
git config --global user.name "Karnam Naresh"
git config --global user.email "karnam@yourrealaccount.com"

# Add correct remote
git remote add origin https://github.com/yourname/vinciva-website.git

# Push to correct account
git push -u origin main
```

Once you provide your details, I'll execute these exact commands for you! 🚀
