import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('Please enter a valid email address')
      return
    }

    setLoading(true)
    setStatus('Subscribing...')

    try {
      // TODO: Replace with your actual newsletter service (Mailchimp, ConvertKit, etc.)
      // For now, we'll simulate the subscription
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Example: Send to your backend or newsletter service
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // })

      setStatus('✓ Subscribed! You\'ll get updates on new projects.')
      setEmail('')
      
      // Show success with SweetAlert if available
      if (typeof window.Swal !== 'undefined') {
        window.Swal.fire({
          title: 'Subscribed!',
          text: 'You\'ll receive updates on new projects and announcements.',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false,
          background: '#0b1020',
          color: '#e8edf8',
          customClass: { popup: 'swal-popup' }
        })
      }
    } catch (error) {
      setStatus('Failed to subscribe. Please try again.')
      console.error('Subscription error:', error)
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(''), 5000)
    }
  }

  return (
    <footer role="contentinfo">
      <div className="footer-content">
        {/* Newsletter Subscription - 2 Column Layout */}
        <div className="footer-newsletter-two-col">
          <div className="newsletter-left">
            <div className="newsletter-header">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{ color: 'var(--cyan)' }}
              >
                <path d="M22 17H2a2 2 0 01-2-2V5a2 2 0 012-2h20a2 2 0 012 2v10a2 2 0 01-2 2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <div>
                <h3 className="newsletter-title">Stay Updated</h3>
                <p className="newsletter-subtitle">Get notified about new projects & updates</p>
              </div>
            </div>
          </div>
          
          <div className="newsletter-right">
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="newsletter-input-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="newsletter-input"
                  disabled={loading}
                  required
                />
                <button 
                  type="submit" 
                  className="newsletter-btn"
                  disabled={loading}
                  aria-label="Subscribe to newsletter"
                >
                  {loading ? (
                    <svg className="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  )}
                </button>
              </div>
              {status && (
                <div className={`newsletter-status ${status.includes('✓') ? 'success' : status.includes('Failed') ? 'error' : ''}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer Info */}
        <div className="footer-info">
          <span className="foot-copy">© {currentYear} Baltazar Dela Cruz</span>
          <span className="foot-badge">
            <span className="foot-dot" aria-hidden="true"></span>
            IT Support & Fullstack Dev — Philippines
          </span>
        </div>
      </div>
    </footer>
  )
}
