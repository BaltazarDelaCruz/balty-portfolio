# 🚀 Quick Start - Sanity CMS

## ✅ Your CMS is Ready!

### 🎯 To Start Using Your CMS:

#### 1️⃣ Open Terminal #1 - Start Your Portfolio
```bash
npm run dev
```
Your portfolio runs at: http://localhost:5173

#### 2️⃣ Open Terminal #2 - Start CMS Admin Panel
```bash
cd dashboard
npm run dev
```
Your CMS admin runs at: http://localhost:3333

---

## 📝 Add Your First Project

1. Go to http://localhost:3333
2. Click "Projects" in sidebar
3. Click "+ Create" button
4. Fill in the form:
   - Title: "My Portfolio Website"
   - Click "Generate" next to Slug
   - Description: "A modern portfolio built with React"
   - Upload an image
   - Category: "webapp"
   - Tech Stack: Add "React", "Vite", "Sanity"
   - Add your URLs
   - Check "Featured" if you want
5. Click "Publish" ✅

---

## 🔌 Connect CMS to Your Portfolio

### Option 1: Replace Existing Projects Component

In `src/App.jsx`, replace the current `<Projects />` with:

```javascript
import ProjectsFromCMS from './components/ProjectsFromCMS'

// In your JSX, replace:
<Projects />

// With:
<ProjectsFromCMS />
```

### Option 2: Add as New Section

```javascript
import ProjectsFromCMS from './components/ProjectsFromCMS'

// Add anywhere in your App.jsx:
<ProjectsFromCMS />
```

---

## 🌐 Make Content Public

For your React app to fetch content:

1. Go to https://www.sanity.io/manage
2. Click your project "Dashboard"
3. Go to "API" tab
4. Under "Datasets", click "production"
5. Set to "Public" (read-only)
6. Save changes

---

## 📚 What You Can Manage

- ✅ **Projects** - Portfolio projects with images, links, tech stack
- ✅ **Blog Posts** - Write articles with rich text
- ✅ **Skills** - Your technical skills with proficiency levels
- ✅ **About** - Bio, stats, profile image
- ✅ **Services** - Services you offer

---

## 🎨 CMS Features

- 📸 Image uploads with automatic optimization
- 📝 Rich text editor for blog posts
- 🔄 Real-time preview
- 📱 Mobile-friendly admin panel
- 🔒 Secure authentication
- ☁️ Cloud-hosted (no server needed)

---

## 💡 Pro Tips

1. **Featured Projects**: Check "Featured" to show on homepage
2. **Display Order**: Use the "order" field to control sorting
3. **Image Optimization**: Images are automatically optimized by Sanity
4. **Draft Mode**: Save as draft before publishing

---

## 🆘 Troubleshooting

**CMS won't start?**
```bash
cd dashboard
npm install
npm run dev
```

**Can't fetch data?**
- Make sure dataset is set to "Public" in Sanity dashboard
- Check browser console for errors

**Need to reset?**
- Delete content in CMS admin panel
- Or delete dataset in Sanity dashboard

---

## 📖 Full Documentation

See `CMS_SETUP.md` for detailed instructions and examples.

---

**Your Project ID**: `7bkfx0pl`
**Dataset**: `production`
**Studio**: http://localhost:3333
