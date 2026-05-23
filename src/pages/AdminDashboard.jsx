import { useState, useEffect } from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { fetchData, queries } from '../lib/sanity'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    blogPosts: 0,
    skills: 0,
    services: 0
  })
  const [recentActivity, setRecentActivity] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [])

  async function loadDashboardData() {
    try {
      const [projects, blogs, skills, services] = await Promise.all([
        fetchData(queries.allProjects),
        fetchData(queries.allBlogPosts),
        fetchData(queries.allSkills),
        fetchData(queries.allServices)
      ])

      setStats({
        projects: projects?.length || 0,
        blogPosts: blogs?.length || 0,
        skills: skills?.length || 0,
        services: services?.length || 0
      })

      // Mock activity data
      setRecentActivity([
        { date: 'Mon', views: 120 },
        { date: 'Tue', views: 180 },
        { date: 'Wed', views: 150 },
        { date: 'Thu', views: 220 },
        { date: 'Fri', views: 280 },
        { date: 'Sat', views: 190 },
        { date: 'Sun', views: 160 }
      ])
    } catch (error) {
      console.error('Error loading dashboard:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="spinner-large"></div>
        <p>Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Dashboard</h1>
          <p className="admin-subtitle">Welcome back, Baltazar!</p>
        </div>
        <div className="admin-header-actions">
          <button className="btn-admin-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Export Data
          </button>
          <button className="btn-admin-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            New Content
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: 'rgba(0, 212, 255, 0.1)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2">
              <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
            </svg>
          </div>
          <div className="admin-stat-content">
            <p className="admin-stat-label">Total Projects</p>
            <h3 className="admin-stat-value">{stats.projects}</h3>
            <p className="admin-stat-change positive">+2 this month</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: 'rgba(0, 255, 157, 0.1)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
            </svg>
          </div>
          <div className="admin-stat-content">
            <p className="admin-stat-label">Blog Posts</p>
            <h3 className="admin-stat-value">{stats.blogPosts}</h3>
            <p className="admin-stat-change positive">+5 this month</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: 'rgba(126, 238, 255, 0.1)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan2)" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <div className="admin-stat-content">
            <p className="admin-stat-label">Skills</p>
            <h3 className="admin-stat-value">{stats.skills}</h3>
            <p className="admin-stat-change neutral">No change</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: 'rgba(250, 204, 21, 0.1)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="admin-stat-content">
            <p className="admin-stat-label">Services</p>
            <h3 className="admin-stat-value">{stats.services}</h3>
            <p className="admin-stat-change positive">+1 this month</p>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="admin-charts-row">
        <div className="admin-chart-card">
          <div className="admin-chart-header">
            <h3>Portfolio Views</h3>
            <select className="admin-select">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={recentActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="date" stroke="var(--t3)" />
              <YAxis stroke="var(--t3)" />
              <Tooltip 
                contentStyle={{ 
                  background: 'var(--surface)', 
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="views" 
                stroke="var(--cyan)" 
                strokeWidth={2}
                dot={{ fill: 'var(--cyan)', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="admin-chart-card">
          <div className="admin-chart-header">
            <h3>Content Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={[
              { name: 'Projects', count: stats.projects },
              { name: 'Blogs', count: stats.blogPosts },
              { name: 'Skills', count: stats.skills },
              { name: 'Services', count: stats.services }
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--t3)" />
              <YAxis stroke="var(--t3)" />
              <Tooltip 
                contentStyle={{ 
                  background: 'var(--surface)', 
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="count" fill="var(--cyan)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="admin-quick-actions">
        <h3>Quick Actions</h3>
        <div className="admin-actions-grid">
          <button className="admin-action-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
            </svg>
            <span>Add Project</span>
          </button>
          <button className="admin-action-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
            </svg>
            <span>Write Blog Post</span>
          </button>
          <button className="admin-action-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span>Add Skill</span>
          </button>
          <button className="admin-action-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span>Add Service</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="admin-recent-activity">
        <h3>Recent Activity</h3>
        <div className="admin-activity-list">
          <div className="admin-activity-item">
            <div className="admin-activity-icon" style={{ background: 'rgba(0, 212, 255, 0.1)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
            <div className="admin-activity-content">
              <p className="admin-activity-title">New project added</p>
              <p className="admin-activity-time">2 hours ago</p>
            </div>
          </div>
          <div className="admin-activity-item">
            <div className="admin-activity-icon" style={{ background: 'rgba(0, 255, 157, 0.1)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </div>
            <div className="admin-activity-content">
              <p className="admin-activity-title">Blog post updated</p>
              <p className="admin-activity-time">5 hours ago</p>
            </div>
          </div>
          <div className="admin-activity-item">
            <div className="admin-activity-icon" style={{ background: 'rgba(126, 238, 255, 0.1)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan2)" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="admin-activity-content">
              <p className="admin-activity-title">Profile updated</p>
              <p className="admin-activity-time">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
