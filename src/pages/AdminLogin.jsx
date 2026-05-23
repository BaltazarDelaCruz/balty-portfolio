import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // IMPORTANT: Change this password!
  // For production, use environment variables
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Simulate a small delay for better UX
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        // Store auth token in sessionStorage (expires when browser closes)
        sessionStorage.setItem('adminAuth', 'true')
        navigate('/admin')
      } else {
        setError('Incorrect password')
        setPassword('')
      }
      setLoading(false)
    }, 500)
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <div className="admin-login-header">
          <div className="admin-login-logo">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h1>Admin Panel</h1>
          <p>Enter your password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              autoFocus
              required
              disabled={loading}
            />
          </div>

          {error && (
            <div className="admin-login-error">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4M12 16h.01"/>
              </svg>
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="btn-admin-primary admin-login-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="spinner-small"></div>
                Verifying...
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M13.8 12H3"/>
                </svg>
                Sign In
              </>
            )}
          </button>
        </form>

        <div className="admin-login-footer">
          <button 
            onClick={() => navigate('/')}
            className="admin-login-back"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Portfolio
          </button>
        </div>

        <div className="admin-login-info">
          <p>
            <strong>⚠️ For Development:</strong> Default password is <code>admin123</code>
          </p>
          <p>
            <strong>🔒 For Production:</strong> Set <code>VITE_ADMIN_PASSWORD</code> in your environment variables
          </p>
        </div>
      </div>
    </div>
  )
}
