# 🎨 Sanity CMS Setup Guide

Your portfolio now has a professional CMS! Here's how to use it:

## 📁 What Was Created

### Sanity Studio (Admin Panel)
- Location: `dashboard/` folder
- Your admin interface to manage content

### Content Types (Schemas)
1. **Projects** - Manage your portfolio projects
2. **Blog Posts** - Write and publish blog articles
3. **Skills** - Add your technical skills with proficiency levels
4. **About** - Update your bio and stats
5. **Services** - List services you offer

### React Integration
- Location: `src/lib/sanity.js`
- Pre-configured queries for fetching content

---

## 🚀 How to Use Your CMS

### Step 1: Start the Sanity Studio

Open a new terminal and run:

```bash
cd dashboard
npm run dev
```

This will open your CMS admin panel at: **http://localhost:3333**

### Step 2: Add Content

1. Open http://localhost:3333 in your browser
2. You'll see your content types in the sidebar:
   - Projects
   - Blog Posts
   - Skills
   - About Section
   - Services

3. Click any type and start adding content!

---

## 📝 Example: Adding a Project

1. Click "Projects" in the sidebar
2. Click "Create new Project"
3. Fill in:
   - **Title**: "My Awesome App"
   - **Slug**: Click "Generate" button
   - **Description**: Brief description
   - **Image**: Upload project screenshot
   - **Category**: Select category
   - **Tech Stack**: Add technologies (React, Node.js, etc.)
   - **Live URL**: https://myapp.com
   - **GitHub URL**: https://github.com/...
   - **Featured**: Check if you want it on homepage
4. Click "Publish"

---

## 🔌 Using CMS Data in Your React App

### Example: Fetch Projects

```javascript
import { fetchData, queries } from './lib/sanity'

// In your component
useEffect(() => {
  async function loadProjects() {
    const projects = await fetchData(queries.allProjects)
    console.log(projects)
  }
  loadProjects()
}, [])
```

### Example: Display Project Images

```javascript
import { urlFor } from './lib/sanity'

// In your JSX
<img 
  src={urlFor(project.image).width(800).url()} 
  alt={project.title} 
/>
```

---

## 🌐 Deploy Your CMS

### Option 1: Sanity Cloud (Recommended)
Your CMS is already hosted! Access it at:
```
https://dashboard.sanity.studio/
```

### Option 2: Deploy Studio to Vercel/Netlify
```bash
cd dashboard
npm run build
# Deploy the 'dist' folder
```

---

## 🔑 Important Files

- `dashboard/schemaTypes/` - Content type definitions
- `src/lib/sanity.js` - React integration
- `dashboard/sanity.config.ts` - CMS configuration

---

## 📊 Your Project Details

- **Project ID**: `7bkfx0pl`
- **Dataset**: `production`
- **Studio URL**: http://localhost:3333 (local)

---

## 🎯 Next Steps

1. **Start the Studio**: `cd dashboard && npm run dev`
2. **Add sample content** to test
3. **Update your React components** to fetch from Sanity
4. **Make dataset public** in Sanity dashboard (Settings → API)

---

## 🆘 Need Help?

- Sanity Docs: https://www.sanity.io/docs
- Your Dashboard: https://www.sanity.io/manage/personal/project/7bkfx0pl

---

## 🔒 Security Note

To make your content publicly accessible:
1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to API settings
4. Set dataset to "Public" (read-only)

This allows your React app to fetch content without authentication.
