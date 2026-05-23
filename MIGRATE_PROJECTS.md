# 📦 Migrate Your Existing Projects to Admin Panel

Your existing projects (Weather App, Currency Converter, etc.) are currently hardcoded. Let's move them to your admin panel so you can edit/delete them!

## 🚀 Quick Migration (2 Options)

### **Option 1: Run Migration Script (Automatic)**

1. Make sure you have `.env` file with your Sanity token:
```bash
VITE_SANITY_TOKEN=your_token_here
```

2. Run the migration:
```bash
npm run migrate
```

3. Done! All 6 projects are now in your admin panel ✅

---

### **Option 2: Add Manually (Recommended)**

This gives you more control and lets you add images!

#### **Step 1: Go to Admin Panel**
```
http://localhost:5173/admin/login
```

#### **Step 2: Add Each Project**

Click **"Projects"** → **"Add Project"** and fill in:

---

**Project 1: Weather App + Map**
- Title: `Weather App + Map`
- Description: `React + Tailwind + Leaflet.js live weather dashboard with geolocation and real-time forecasts.`
- Category: `Web App`
- Tech Stack: `React`, `Tailwind`, `Leaflet.js`, `API`
- Live URL: `https://baltazardelacruz.github.io/weather/`
- Image: Upload `/images/weather.png`
- Order: `1`

---

**Project 2: Currency Converter**
- Title: `Currency Converter`
- Description: `Real-time multi-currency converter with live exchange rates and clean, minimal UX.`
- Category: `Web App`
- Tech Stack: `React`, `Finance API`
- Live URL: `https://baltazardelacruz.github.io/currency/`
- Image: Upload `/images/currency.jpg`
- Order: `2`

---

**Project 3: Number → Japanese**
- Title: `Number → Japanese`
- Description: `Interactive converter with quiz mode for active language learning. ES6 + vanilla JS.`
- Category: `Web App`
- Tech Stack: `JavaScript`, `ES6`, `Education`
- Live URL: `https://baltazardelacruz.github.io/japanese/`
- Image: Upload `/images/japanese.png`
- Order: `3`

---

**Project 4: Blog - 3-Point King**
- Title: `Blog - 3-Point King`
- Description: `Responsive editorial blog with clean typographic hierarchy, built with Bootstrap.`
- Category: `Web App`
- Tech Stack: `Bootstrap`, `HTML`, `CSS`
- Live URL: `https://baltazardelacruz.github.io/blog/`
- Image: Upload `/images/blog.png`
- Order: `4`

---

**Project 5: Fashionable**
- Title: `Fashionable`
- Description: `Fashion-forward site featuring creative layouts, CSS animations, and smooth interactions.`
- Category: `Design`
- Tech Stack: `CSS`, `Animations`, `Design`
- Live URL: `https://baltazardelacruz.github.io/fashionable/`
- Image: Upload `/images/fashion.png`
- Order: `5`

---

**Project 6: Gallery**
- Title: `Gallery`
- Description: `Minimal photography & art gallery that emphasises the work over interface chrome.`
- Category: `Design`
- Tech Stack: `HTML`, `CSS`, `Gallery`
- Live URL: `https://baltazardelacruz.github.io/gallery/`
- Image: Upload `/images/art.png`
- Order: `6`

---

## ✅ After Migration

Once projects are in the admin panel:

1. **View**: Go to `/admin/projects` to see all projects
2. **Edit**: Click edit button on any project
3. **Delete**: Click delete button (red trash icon)
4. **Add New**: Click "Add Project" button

Your portfolio will automatically show projects from the admin panel!

---

## 🎯 What Happens Next

- ✅ Projects appear in admin dashboard
- ✅ You can edit/delete them
- ✅ They automatically show on your portfolio
- ✅ No more hardcoded data!

---

## 📝 Notes

- Images are in `public/images/` folder
- Upload them when adding projects manually
- Order number controls display order (lower = first)
- Check "Featured" to show on featured section
