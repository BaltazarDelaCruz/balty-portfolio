# 🎛️ Admin Dashboard

Your portfolio now has a beautiful custom admin dashboard!

## 🚀 Access Your Admin Panel

### URL: http://localhost:5173/admin

Simply navigate to `/admin` to access your dashboard.

---

## 📊 Dashboard Features

### **Main Dashboard** (`/admin`)
- 📈 **Analytics Overview** - View portfolio statistics
- 📊 **Charts** - Portfolio views and content distribution
- ⚡ **Quick Actions** - Fast access to create content
- 📝 **Recent Activity** - Track your latest changes

### **Projects Management** (`/admin/projects`)
- View all your projects in a table
- See project thumbnails, tech stack, and status
- Quick edit buttons (opens Sanity Studio)
- Featured project indicators

### **Coming Soon**
- Blog Posts Management
- Skills Management
- Services Management
- About Section Editor
- Settings Panel

---

## 🎨 Admin Panel Design

- **Modern Dashboard UI** with stats cards
- **Interactive Charts** (Line & Bar charts)
- **Collapsible Sidebar** for more space
- **Responsive Design** works on mobile
- **Dark Theme** matching your portfolio
- **Quick Actions** for common tasks

---

## 🔗 How It Works

The admin panel is integrated with your Sanity CMS:

1. **View Content**: Admin panel displays your Sanity data
2. **Edit Content**: Click "Edit" buttons to open Sanity Studio
3. **Add Content**: "Add" buttons open Sanity Studio forms
4. **Real-time**: Changes in Sanity appear in your portfolio

---

## 🛠️ Tech Stack

- **React Router** - Navigation between admin pages
- **Recharts** - Beautiful analytics charts
- **Sanity Client** - Fetch CMS data
- **Custom CSS** - Matching your portfolio theme

---

## 📱 Navigation

### Sidebar Menu:
- 📊 **Dashboard** - Overview and analytics
- 📁 **Projects** - Manage portfolio projects
- 📝 **Blog Posts** - Write and edit articles
- 🎯 **Skills** - Update your tech skills
- 🛠️ **Services** - Edit services offered
- 👤 **About** - Update bio and profile
- ⚙️ **Settings** - Configure admin panel
- 🏠 **Back to Site** - Return to portfolio

---

## 🎯 Quick Start

### 1. Start Your Portfolio
```bash
npm run dev
```

### 2. Start Sanity Studio (in another terminal)
```bash
cd dashboard
npm run dev
```

### 3. Access Admin Panel
Open: http://localhost:5173/admin

### 4. Add Content
- Click any "Add" button in admin panel
- Sanity Studio opens in new tab
- Fill in the form and publish
- Return to admin panel to see it

---

## 🔐 Security Note

**Important**: This admin panel is currently accessible to anyone who visits `/admin`.

### For Production:
You should add authentication before deploying:

1. **Add Login Page** - Create `/admin/login` route
2. **Use Auth Service** - Firebase, Auth0, or Supabase
3. **Protect Routes** - Add authentication middleware
4. **Environment Variables** - Secure API keys

Example auth libraries:
- Firebase Authentication
- Auth0
- Supabase Auth
- NextAuth.js (if you switch to Next.js)

---

## 🎨 Customization

### Change Colors
Edit `src/admin.css` and update CSS variables:
```css
.admin-stat-icon {
  background: rgba(0, 212, 255, 0.1); /* Change this */
}
```

### Add New Pages
1. Create component in `src/pages/AdminYourPage.jsx`
2. Add route in `src/main.jsx`
3. Add menu item in `src/pages/AdminLayout.jsx`

### Modify Charts
Edit `src/pages/AdminDashboard.jsx` and customize Recharts components.

---

## 📊 Dashboard Stats

The dashboard shows:
- **Total Projects** - Count from Sanity
- **Blog Posts** - Count from Sanity
- **Skills** - Count from Sanity
- **Services** - Count from Sanity
- **Portfolio Views** - Mock data (integrate analytics)
- **Content Distribution** - Visual breakdown

---

## 🆘 Troubleshooting

**Admin panel shows no data?**
- Make sure Sanity Studio is running
- Check that you've added content in Sanity
- Verify dataset is set to "Public" in Sanity dashboard

**Charts not showing?**
- Check browser console for errors
- Ensure recharts is installed: `npm install recharts`

**Sidebar not working?**
- Clear browser cache
- Check that admin.css is imported in main.jsx

---

## 🚀 Next Steps

1. ✅ Add content via Sanity Studio
2. ✅ View stats in admin dashboard
3. ⏳ Add authentication (for production)
4. ⏳ Integrate real analytics (Google Analytics, Plausible)
5. ⏳ Add more admin pages (Blog, Skills, etc.)

---

## 📸 Screenshots

### Dashboard
- Stats cards with icons
- Line chart for views
- Bar chart for content distribution
- Quick action buttons
- Recent activity feed

### Projects Page
- Table view with thumbnails
- Tech stack tags
- Featured badges
- Edit and view buttons

---

**Admin URL**: http://localhost:5173/admin
**Portfolio URL**: http://localhost:5173
**Sanity Studio**: http://localhost:3333

Enjoy your new admin dashboard! 🎉
