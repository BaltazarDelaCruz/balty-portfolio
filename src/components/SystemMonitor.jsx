import { useState, useEffect } from 'react'

export default function SystemMonitor() {
  const [githubStats, setGithubStats] = useState({
    repos: 0,
    commits: 0,
    stars: 0,
    followers: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch GitHub stats
    const fetchGitHubStats = async () => {
      try {
        const username = 'BaltazarDelaCruz'
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        
        setGithubStats({
          repos: data.public_repos || 0,
          commits: Math.floor(Math.random() * 500) + 200, // Simulated
          stars: Math.floor(Math.random() * 50) + 10, // Simulated
          followers: data.followers || 0
        })
        setLoading(false)
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
        setGithubStats({
          repos: 12,
          commits: 350,
          stars: 25,
          followers: 8
        })
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  return (
    <div className="sysmon-band">
      <div className="container">
        <div className="sysmon-header">
          <p className="eyebrow" style={{ marginBottom: '.4rem' }}>GitHub Activity</p>
          <div className="sysmon-live">
            <span className="sysmon-dot"></span>
            LIVE
          </div>
        </div>
        
        <div className="sysmon-grid" style={{ gridTemplateColumns: '1fr' }}>
          {/* GitHub Contribution Graph - Full Width */}
          <div className="sysmon-card">
            <div className="sysmon-card-top">
              <div className="sysmon-icon sysmon-icon-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div className="sysmon-label">GitHub Contribution Activity</div>
                <a 
                  href="https://github.com/BaltazarDelaCruz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '.75rem',
                    color: 'var(--cyan)',
                    textDecoration: 'none',
                    transition: 'color .2s',
                    display: 'inline-block',
                    marginTop: '.3rem'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--cyan2)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--cyan)'}
                >
                  github.com/BaltazarDelaCruz →
                </a>
              </div>
            </div>
            <div style={{ 
              marginTop: '1.5rem',
              padding: '1.5rem',
              background: 'var(--bg)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border)'
            }}>
              <img 
                src="https://ghchart.rshah.org/0d7490/BaltazarDelaCruz" 
                alt="GitHub Contribution Graph"
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  display: 'block',
                  borderRadius: '4px',
                  opacity: 0.85
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
