import { useState } from 'react'

export default function AuthFlow() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [running, setRunning] = useState(false)
  const [result, setResult] = useState('')
  const [steps, setSteps] = useState({
    1: { status: '', code: '' },
    2: { status: '', code: '' },
    3: { status: '', code: '' },
    4: { status: '', code: '' },
    5: { status: '', code: '' }
  })

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  const updateStep = (step, status, code) => {
    setSteps(prev => ({
      ...prev,
      [step]: { status, code }
    }))
  }

  const runAuthFlow = async () => {
    if (!username || !password) {
      setResult('❌ Please enter both username and password')
      return
    }

    setRunning(true)
    setResult('')
    
    // Reset all steps
    for (let i = 1; i <= 5; i++) {
      updateStep(i, '', '')
    }

    // Step 1: Validate Input
    await delay(500)
    updateStep(1, '⏳', '')
    await delay(800)
    updateStep(1, '✓', `{
  username: "${username}",
  password: "${'*'.repeat(password.length)}"
}
✓ Input sanitized
✓ Fields validated`)

    // Step 2: Hash Password
    await delay(600)
    updateStep(2, '⏳', '')
    await delay(1000)
    const hash = `$2b$12$${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`
    updateStep(2, '✓', `bcrypt.hash(password, 12)
→ ${hash}
✓ Password hashed securely`)

    // Step 3: Query Database
    await delay(600)
    updateStep(3, '⏳', '')
    await delay(1200)
    updateStep(3, '✓', `SELECT * FROM users 
WHERE username = '${username}'
✓ User found
✓ Hash comparison: MATCH`)

    // Step 4: Sign JWT
    await delay(600)
    updateStep(4, '⏳', '')
    await delay(1000)
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${btoa(JSON.stringify({ sub: username, iat: Date.now() }))}.${Math.random().toString(36).substring(2, 15)}`
    updateStep(4, '✓', `jwt.sign({
  sub: "${username}",
  iat: ${Math.floor(Date.now() / 1000)}
}, SECRET, { expiresIn: '7d' })
→ ${token.substring(0, 50)}...
✓ Token signed`)

    // Step 5: Set Cookie & Redirect
    await delay(600)
    updateStep(5, '⏳', '')
    await delay(800)
    updateStep(5, '✓', `Set-Cookie: token=${token.substring(0, 30)}...
  HttpOnly; Secure; SameSite=Strict
✓ Cookie set
✓ Redirecting to /dashboard`)

    await delay(500)
    setResult('✓ Authentication successful!')
    setRunning(false)
  }

  return (
    <section id="auth-flow" className="section">
      <div className="container">
        <p className="eyebrow reveal">Fullstack Demo</p>
        <h2 className="sh reveal" style={{ transitionDelay: '.05s' }}>Auth Flow <em>Simulator</em></h2>
        <p className="reveal" style={{ transitionDelay: '.08s', color: 'var(--t2)', fontSize: '.85rem', maxWidth: '520px', marginBottom: '3rem' }}>
          Type any credentials and watch the full authentication pipeline execute in real time — from password hashing to JWT signing.
        </p>

        <div className="auth-wrap reveal" style={{ transitionDelay: '.1s' }}>
          {/* Login form panel */}
          <div className="auth-panel auth-form-panel">
            <div className="auth-panel-bar">
              <span className="auth-dot" style={{ background: '#ff5f57' }}></span>
              <span className="auth-dot" style={{ background: '#ffbd2e' }}></span>
              <span className="auth-dot" style={{ background: '#28c840' }}></span>
              <span className="auth-panel-title">POST /api/auth/login</span>
            </div>
            <div className="auth-form-body">
              <div className="auth-field">
                <label className="auth-label" htmlFor="af-user">Username</label>
                <input 
                  id="af-user" 
                  className="auth-input" 
                  type="text" 
                  placeholder="e.g. baltazar" 
                  autoComplete="off" 
                  spellCheck="false"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={running}
                />
              </div>
              <div className="auth-field">
                <label className="auth-label" htmlFor="af-pass">Password</label>
                <input 
                  id="af-pass" 
                  className="auth-input" 
                  type="password" 
                  placeholder="e.g. mypassword123" 
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={running}
                />
              </div>
              <button 
                className="auth-run-btn" 
                onClick={runAuthFlow}
                disabled={running}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                {running ? 'Running...' : 'Run Auth Flow'}
              </button>
              {result && <div className="auth-result">{result}</div>}
            </div>
          </div>

          {/* Pipeline steps */}
          <div className="auth-pipeline">
            {[1, 2, 3, 4, 5].map((stepNum) => {
              const stepInfo = {
                1: { name: 'Validate Input', sub: 'Sanitize & check fields', icon: 'M3 11h18M7 11V7a5 5 0 0110 0v4' },
                2: { name: 'Hash Password', sub: 'bcrypt · 12 salt rounds', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
                3: { name: 'Query Database', sub: 'Find user · verify hash', icon: 'M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3' },
                4: { name: 'Sign JWT', sub: 'HS256 · expires 7d', icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z' },
                5: { name: 'Set Cookie & Redirect', sub: 'HttpOnly · Secure · SameSite', icon: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' }
              }[stepNum]

              return (
                <div key={stepNum} className="auth-step" data-step={stepNum}>
                  <div className="auth-step-head">
                    <div className="auth-step-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        {stepNum === 1 && <><rect x="3" y="11" width="18" height="11" rx="2"/><path d={stepInfo.icon}/></>}
                        {stepNum !== 1 && <path d={stepInfo.icon}/>}
                        {stepNum === 3 && <ellipse cx="12" cy="5" rx="9" ry="3"/>}
                      </svg>
                    </div>
                    <div>
                      <div className="auth-step-name">{stepNum}. {stepInfo.name}</div>
                      <div className="auth-step-sub">{stepInfo.sub}</div>
                    </div>
                    <div className="auth-step-status">{steps[stepNum].status}</div>
                  </div>
                  {steps[stepNum].code && (
                    <pre className="auth-code">{steps[stepNum].code}</pre>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
