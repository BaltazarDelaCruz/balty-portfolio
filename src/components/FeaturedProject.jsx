export default function FeaturedProject() {
  return (
    <section id="featured-project" className="section">
      <div className="container">
        <p className="eyebrow reveal">Featured Project</p>
        <h2 className="sh reveal" style={{ transitionDelay: '.05s' }}>Capstone <em>Project</em></h2>
        
        <article className="featured-card reveal" style={{ transitionDelay: '.1s' }}>
          <div className="featured-content">
            <h3 className="featured-title">Reacture</h3>
            <p className="featured-desc">
              Master React step by step with interactive lessons, quizzes, and an AI tutor powered by Claude. 
              Built with Flutter and Firebase for a seamless cross-platform learning experience.
            </p>
            
            <div className="featured-highlights">
              <div className="featured-highlight">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span>33 Interactive Lessons</span>
              </div>
              <div className="featured-highlight">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                <span>AI-Powered Tutor</span>
              </div>
              <div className="featured-highlight">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Live Code Compiler</span>
              </div>
            </div>
            
            <div className="featured-tech">
              <span className="tech-badge">Flutter</span>
              <span className="tech-badge">Dart</span>
              <span className="tech-badge">Firebase</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Claude AI</span>
              <span className="tech-badge">React Compiler</span>
              <span className="tech-badge">Vercel</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
