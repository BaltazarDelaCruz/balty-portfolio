import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './admin.css'
import App from './App.jsx'
import AdminLayout from './pages/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import AdminProjects from './pages/AdminProjects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Portfolio */}
        <Route path="/" element={<App />} />
        
        {/* Admin Panel */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="blog" element={<div className="admin-page"><h1 className="admin-page-title">Blog Posts</h1><p>Coming soon...</p></div>} />
          <Route path="skills" element={<div className="admin-page"><h1 className="admin-page-title">Skills</h1><p>Coming soon...</p></div>} />
          <Route path="services" element={<div className="admin-page"><h1 className="admin-page-title">Services</h1><p>Coming soon...</p></div>} />
          <Route path="about" element={<div className="admin-page"><h1 className="admin-page-title">About</h1><p>Coming soon...</p></div>} />
          <Route path="settings" element={<div className="admin-page"><h1 className="admin-page-title">Settings</h1><p>Coming soon...</p></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
