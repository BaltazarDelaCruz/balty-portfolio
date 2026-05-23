# 🔒 Security Guide - Admin Panel

## ✅ Your Admin Panel is Now Protected!

The admin panel now requires a password to access.

---

## 🔑 Default Password (Development)

**Password**: `admin123`

⚠️ **This is for local development only!**

---

## 🚀 Setting Up for Production (Vercel)

### Step 1: Create a Strong Password

Generate a strong password (use a password manager):
- Example: `MyStr0ng!P@ssw0rd2024`

### Step 2: Add to Vercel Environment Variables

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `VITE_ADMIN_PASSWORD`
   - **Value**: Your strong password
   - **Environment**: Production, Preview, Development
5. Click **Save**

### Step 3: Redeploy

After adding the environment variable, redeploy your site:
```bash
git push origin main
```

Or manually redeploy in Vercel dashboard.

---

## 🔐 How It Works

### Authentication Flow:
1. User visits `/admin`
2. Redirected to `/admin/login`
3. Enters password
4. If correct → Access granted (stored in sessionStorage)
5. If incorrect → Error message shown

### Session Management:
- **SessionStorage**: Auth token expires when browser closes
- **No cookies**: Simple and secure
- **No database**: Password-only authentication

---

## 🛡️ Security Features

✅ **Password Protection** - Admin panel requires password
✅ **Session-based** - Auth expires when browser closes
✅ **Environment Variables** - Password not in code
✅ **Protected Routes** - All admin pages require auth
✅ **Logout Button** - Clear session anytime

---

## ⚙️ Local Development

### Option 1: Use Default Password
Just use `admin123` (already set)

### Option 2: Set Custom Password
1. Create `.env` file in project root:
```bash
VITE_ADMIN_PASSWORD=my_local_password
```

2. Restart dev server:
```bash
npm run dev
```

---

## 🌐 Production Deployment

### Vercel (Recommended)

1. **Set Environment Variable**:
   ```
   VITE_ADMIN_PASSWORD=your_strong_password
   ```

2. **Deploy**:
   ```bash
   git push origin main
   ```

3. **Access**:
   - Portfolio: `https://your-site.vercel.app`
   - Admin: `https://your-site.vercel.app/admin`

### Netlify

1. Go to **Site Settings** → **Environment Variables**
2. Add `VITE_ADMIN_PASSWORD`
3. Redeploy

### Other Platforms

Add `VITE_ADMIN_PASSWORD` to your platform's environment variables.

---

## 🔒 Best Practices

### ✅ DO:
- Use a strong, unique password (20+ characters)
- Store password in environment variables
- Use a password manager
- Change password regularly
- Keep `.env` in `.gitignore`

### ❌ DON'T:
- Use `admin123` in production
- Commit passwords to git
- Share your password publicly
- Use the same password for multiple sites
- Store password in code

---

## 🆘 Troubleshooting

### "Incorrect password" but I'm sure it's right
- Check for extra spaces
- Verify environment variable is set correctly
- Restart dev server after changing `.env`
- Check Vercel dashboard for typos

### Forgot my password
- **Local**: Check your `.env` file
- **Production**: Check Vercel environment variables
- **Lost it**: Update environment variable and redeploy

### Admin panel not asking for password
- Clear browser cache and sessionStorage
- Check that ProtectedRoute is wrapping admin routes
- Verify you're accessing `/admin` not `/admin/login`

---

## 🔄 Changing Your Password

### Local Development:
1. Edit `.env` file
2. Update `VITE_ADMIN_PASSWORD`
3. Restart dev server

### Production (Vercel):
1. Go to Vercel dashboard
2. Settings → Environment Variables
3. Edit `VITE_ADMIN_PASSWORD`
4. Save and redeploy

---

## 🚨 If Your Password is Compromised

1. **Immediately** change password in Vercel
2. Redeploy your site
3. Clear all browser sessions (logout everywhere)
4. Review Sanity access logs

---

## 📊 What's Protected

✅ **Protected**:
- `/admin` - Dashboard
- `/admin/projects` - Projects management
- `/admin/blog` - Blog management
- `/admin/skills` - Skills management
- `/admin/services` - Services management
- `/admin/about` - About editor
- `/admin/settings` - Settings

✅ **Public**:
- `/` - Your portfolio (public)
- `/admin/login` - Login page (public)

---

## 🔮 Future Enhancements

For even better security, consider:
- **OAuth** - Google/GitHub login
- **2FA** - Two-factor authentication
- **Rate Limiting** - Prevent brute force
- **IP Whitelist** - Restrict by IP
- **Audit Logs** - Track admin actions

---

## 📝 Quick Reference

| Environment | Password Location | How to Change |
|------------|------------------|---------------|
| **Local** | `.env` file | Edit file, restart server |
| **Vercel** | Environment Variables | Dashboard → Settings → Env Vars |
| **Netlify** | Environment Variables | Site Settings → Env Vars |

---

## ✅ Checklist Before Deploying

- [ ] Set strong password in Vercel
- [ ] Test login on production
- [ ] Remove default password from code
- [ ] Add `.env` to `.gitignore`
- [ ] Document password in password manager
- [ ] Test logout functionality
- [ ] Verify protected routes work

---

**Your admin panel is now secure!** 🎉

Remember: **Never use `admin123` in production!**
