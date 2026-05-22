import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    from_email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState('')

  const validators = {
    name: (value) => {
      if (!value.trim()) return 'Name is required'
      if (value.trim().length < 2) return 'Name must be at least 2 characters'
      return null
    },
    from_email: (value) => {
      if (!value.trim()) return 'Email is required'
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) return 'Please enter a valid email address'
      return null
    },
    message: (value) => {
      if (!value.trim()) return 'Message is required'
      if (value.trim().length < 10) return 'Message must be at least 10 characters'
      return null
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Real-time validation
    const error = validators[name](value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const validateForm = () => {
    const newErrors = {}
    let isValid = true
    
    Object.keys(validators).forEach(field => {
      const error = validators[field](formData[field] || '')
      if (error) {
        newErrors[field] = error
        isValid = false
      }
    })
    
    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setStatus('Please fix the errors above')
      return
    }
    
    setSubmitting(true)
    setStatus('Sending your message...')
    
    try {
      // Check if emailjs is loaded
      if (typeof window.emailjs === 'undefined') {
        throw new Error('EmailJS not loaded')
      }

      // Initialize EmailJS
      window.emailjs.init('bu09a36P2Ax-8Siye')
      
      // Send email
      await window.emailjs.send('service_9pscmyo', 'template_nkk4o0d', formData)
      
      // Show success with SweetAlert2
      if (typeof window.Swal !== 'undefined') {
        await window.Swal.fire({
          title: 'Message sent!',
          text: "I'll reply within 24 hours.",
          icon: 'success',
          timer: 3000,
          showConfirmButton: false,
          background: '#0b1020',
          color: '#e8edf8',
          customClass: {
            popup: 'swal-popup'
          }
        })
      }
      
      // Reset form
      setFormData({ name: '', from_email: '', message: '' })
      setErrors({})
      setStatus('Message sent successfully!')
      
    } catch (err) {
      console.error('Form submission error:', err)
      
      if (typeof window.Swal !== 'undefined') {
        window.Swal.fire({
          title: 'Failed to send',
          text: 'Please email me directly at baltazardelacruz74@gmail.com',
          icon: 'error',
          confirmButtonText: 'OK',
          background: '#0b1020',
          color: '#e8edf8',
          customClass: {
            popup: 'swal-popup'
          }
        })
      }
      
      setStatus('Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="cta" className="section">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-eyebrow reveal">Let's Work Together</div>
          <h2 className="cta-h reveal" style={{ transitionDelay: '0.06s' }}>
            Let's <em>build</em><br/>something.
          </h2>
          <p className="cta-sub reveal" style={{ transitionDelay: '0.1s' }}>
            Open to collaborations, freelance, full-time roles, and IT support contracts. I'll get back to you within 24 hours.
          </p>
          
          {/* 2 Column Layout */}
          <div className="cta-two-col reveal" style={{ transitionDelay: '0.13s' }}>
            {/* Left Column - Contact Links */}
            <div className="cta-links-col">
              <a href="mailto:baltazardelacruz74@gmail.com" className="cta-row">
                <div className="cta-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="cta-lbl">Email</div>
                  <div className="cta-val">baltazardelacruz74@gmail.com</div>
                </div>
              </a>
              <a href="https://github.com/BaltazarDelaCruz" target="_blank" rel="noopener" className="cta-row">
                <div className="cta-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                  </svg>
                </div>
                <div>
                  <div className="cta-lbl">GitHub</div>
                  <div className="cta-val">github.com/BaltazarDelaCruz</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/baltazar-dela-cruz-0a4b392a1/" target="_blank" rel="noopener" className="cta-row">
                <div className="cta-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className="cta-lbl">LinkedIn</div>
                  <div className="cta-val">linkedin.com/in/baltazar-dela-cruz</div>
                </div>
              </a>
            </div>

            {/* Right Column - Contact Form */}
            <div className="form-shell hover-lift">
              <form id="cf" onSubmit={handleSubmit} noValidate aria-labelledby="contact-form-heading">
                <h3 id="contact-form-heading" className="sr-only">Contact Form</h3>
                <div className="f-grid">
                  <div className={`f-col form-field ${errors.name ? 'has-error' : formData.name && !errors.name ? 'has-success' : ''}`}>
                    <label className="f-label" htmlFor="fn">Name *</label>
                    <input 
                      id="fn" 
                      type="text" 
                      name="name" 
                      placeholder="Your name" 
                      required 
                      className="f-input"
                      value={formData.name}
                      onChange={handleChange}
                      aria-describedby="fn-error"
                      autoComplete="name"
                    />
                    <svg className="validation-icon success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <svg className="validation-icon error" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    {errors.name && <div id="fn-error" className="f-error" role="alert">{errors.name}</div>}
                  </div>
                  
                  <div className={`f-col form-field ${errors.from_email ? 'has-error' : formData.from_email && !errors.from_email ? 'has-success' : ''}`}>
                    <label className="f-label" htmlFor="fe">Email *</label>
                    <input 
                      id="fe" 
                      type="email" 
                      name="from_email" 
                      placeholder="you@example.com" 
                      required 
                      className="f-input"
                      value={formData.from_email}
                      onChange={handleChange}
                      aria-describedby="fe-error"
                      autoComplete="email"
                    />
                    <svg className="validation-icon success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <svg className="validation-icon error" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    {errors.from_email && <div id="fe-error" className="f-error" role="alert">{errors.from_email}</div>}
                  </div>
                  
                  <div className={`f-col f-full form-field ${errors.message ? 'has-error' : formData.message && !errors.message ? 'has-success' : ''}`}>
                    <label className="f-label" htmlFor="fm">Message *</label>
                    <textarea 
                      id="fm" 
                      name="message" 
                      rows="4" 
                      placeholder="Tell me about your project or IT need…" 
                      required 
                      className="f-input"
                      value={formData.message}
                      onChange={handleChange}
                      aria-describedby="fm-error"
                    ></textarea>
                    <svg className="validation-icon success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <svg className="validation-icon error" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    {errors.message && <div id="fm-error" className="f-error" role="alert">{errors.message}</div>}
                  </div>
                </div>
                
                <button type="submit" className="f-btn hover-glow" disabled={submitting} aria-describedby="form-status">
                  <span className="btn-text">{submitting ? 'Sending...' : 'Send Message'}</span>
                  <svg className="btn-icon" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                {status && <div id="form-status" className="sr-only" role="status" aria-live="polite">{status}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
