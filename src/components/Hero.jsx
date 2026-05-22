export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading">
      <div className="hero-orb" aria-hidden="true"></div>
      <div className="hero-scan" aria-hidden="true"></div>
      
      <div className="hero-inner">
        <div>
          <div className="hero-status reveal" role="status" aria-live="polite">
            <span className="hero-dot" aria-hidden="true"></span>
            <span className="hero-status-txt">Available for work</span>
          </div>
          
          <h1 id="hero-heading" className="hero-h reveal" style={{ transitionDelay: '0.06s' }}>
            IT<br />
            <span className="line-cyan">SUPPORT</span><br />
            &amp; FULL<span className="line-ghost">STACK</span>
          </h1>
          
          <p className="hero-sub reveal" style={{ transitionDelay: '0.12s' }}>
            <strong>Baltazar Dela Cruz</strong> — I build resilient systems, craft clean interfaces, and keep infrastructure running at peak performance.
          </p>
          
          <div className="tag-row reveal" style={{ transitionDelay: '0.16s' }} role="list" aria-label="Technical skills">
            <span className="tag" role="listitem">React</span>
            <span className="tag" role="listitem">Node.js</span>
            <span className="tag" role="listitem">IT Infrastructure</span>
            <span className="tag" role="listitem">UI/UX</span>
            <span className="tag" role="listitem">DevOps</span>
          </div>
          
          <div className="hero-btns reveal" style={{ transitionDelay: '0.2s', marginTop: '1.5rem' }}>
            <a href="#projects" className="btn-primary" aria-label="View my portfolio projects">
              View My Work
            </a>
            <a href="#contact" className="btn-outline" aria-label="Contact me for collaboration">
              Let's Talk
            </a>
          </div>
        </div>
        
        <div className="hero-right reveal" style={{ transitionDelay: '0.1s' }}>
          <div style={{ 
            background: 'var(--surface2)', 
            border: '1px solid var(--border)', 
            borderRadius: 'var(--radius-md)', 
            padding: '1.4rem' 
          }} role="complementary" aria-labelledby="current-focus">
            <p id="current-focus" style={{ 
              fontFamily: 'var(--mono)', 
              fontSize: '.6rem', 
              color: 'var(--cyan)', 
              letterSpacing: '.16em', 
              textTransform: 'uppercase', 
              marginBottom: '.75rem' 
            }}>
              // Current Focus
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '.45rem' }} role="list">
              <li style={{ 
                fontFamily: 'var(--mono)', 
                fontSize: '.72rem', 
                color: 'var(--t2)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '.65rem' 
              }} role="listitem">
                <span style={{ color: 'var(--cyan)' }} aria-hidden="true">▹</span>
                Fullstack Web Applications
              </li>
              <li style={{ 
                fontFamily: 'var(--mono)', 
                fontSize: '.72rem', 
                color: 'var(--t2)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '.65rem' 
              }} role="listitem">
                <span style={{ color: 'var(--cyan)' }} aria-hidden="true">▹</span>
                IT Infrastructure & Networking
              </li>
              <li style={{ 
                fontFamily: 'var(--mono)', 
                fontSize: '.72rem', 
                color: 'var(--t2)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '.65rem' 
              }} role="listitem">
                <span style={{ color: 'var(--cyan)' }} aria-hidden="true">▹</span>
                UI/UX Design & Prototyping
              </li>
              <li style={{ 
                fontFamily: 'var(--mono)', 
                fontSize: '.72rem', 
                color: 'var(--t2)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '.65rem' 
              }} role="listitem">
                <span style={{ color: 'var(--green)' }} aria-hidden="true">▹</span>
                <span style={{ color: 'var(--green)' }}>Open to opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="scroll-cue" aria-label="Scroll down to see more content">
        <span className="scroll-cue-lbl">scroll</span>
        <div className="scroll-cue-line" aria-hidden="true"></div>
      </div>
    </section>
  )
}
