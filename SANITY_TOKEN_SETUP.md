# 🔑 Sanity Write Token Setup

To add/edit projects directly in your admin panel, you need a Sanity write token.

## 📝 Step-by-Step Guide

### 1. Go to Sanity Dashboard
Visit: https://www.sanity.io/manage/personal/project/7bkfx0pl/api#tokens

### 2. Create New Token
- Click **"Add API token"** button
- Name: `Admin Panel Write Token`
- Permissions: Select **"Editor"**
- Click **"Add token"**

### 3. Copy the Token
⚠️ **Important**: Copy the token immediately! You won't see it again.

### 4. Add to Environment Variables

#### For Local Development:
Create `.env` file in project root:
```bash
VITE_SANITY_TOKEN=your_token_here
```

#### For Production (Vercel):
1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Add:
   - Name: `VITE_SANITY_TOKEN`
   - Value: Your token
   - Environment: All
5. Redeploy

### 5. Restart Dev Server
```bash
npm run dev
```

## ✅ Test It Works

1. Go to http://localhost:5173/admin
2. Login with password
3. Click "Projects" → "Add Project"
4. Fill form and submit
5. Should save successfully!

## 🔒 Security

- Never commit `.env` to git
- Keep token secret
- Use "Editor" permissions (not "Admin")
- Rotate token if compromised

## 🆘 Troubleshooting

**"Failed to save project"**
- Check token is correct
- Verify token has "Editor" permissions
- Restart dev server after adding token

**"Unauthorized"**
- Token might be expired
- Create new token in Sanity dashboard
