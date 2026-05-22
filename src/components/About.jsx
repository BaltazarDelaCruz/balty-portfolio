export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <p className="eyebrow reveal">About Me</p>
        <div className="about-wrap">
          <div className="reveal" style={{ transitionDelay: '0.06s' }}>
            <div className="about-bignum" aria-hidden="true">01</div>
            <div className="about-photo-outer">
              <div className="about-photo-inner">
                <img
                  src="/images/21-11858-380.png"
                  alt="Professional headshot of Baltazar Dela Cruz"
                  className="about-photo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 id="about-heading" className="about-h reveal" style={{ transitionDelay: '0.08s' }}>
              Bridging<br />
              <em>IT & Dev.</em>
            </h2>
            <div className="about-bio reveal" style={{ transitionDelay: '0.13s' }}>
              <p>
                I'm <strong>Baltazar Dela Cruz</strong> — an IT professional turned full-stack developer with a background spanning systems administration and modern web development. This cross-disciplinary experience allows me to approach software projects with both a developer's eye for functionality and a sysadmin's instinct for reliability — delivering solutions that are well-architected at every layer of the stack.
              </p>
              <p>
                Throughout my career, I have worked across infrastructure management and application development, giving me a practical understanding of how systems behave in production environments and what it takes to build software that performs under real-world conditions.
              </p>
              <p>
                Based in the <strong>Philippines</strong>, I am available for remote and local engagements, including full-time roles, freelance projects, and IT contracts.
              </p>
            </div>
            <div className="cert-row reveal" style={{ transitionDelay: '0.17s' }} role="list" aria-label="Professional certifications">
              <div className="cert-b" role="listitem">
                <span className="cert-dot2" aria-hidden="true"></span>Google IT Support
              </div>
              <div className="cert-b" role="listitem">
                <span className="cert-dot2" aria-hidden="true"></span>CompTIA A+ (in progress)
              </div>
              <div className="cert-b" role="listitem">
                <span className="cert-dot2" aria-hidden="true"></span>Cisco Networking Basics
              </div>
              <div className="cert-b" role="listitem">
                <span className="cert-dot2" aria-hidden="true"></span>Microsoft 365 Fundamentals
              </div>
              <div className="cert-b" role="listitem">
                <span className="cert-dot2" aria-hidden="true"></span>Google UX Design
              </div>
            </div>
            <div className="hero-btns reveal" style={{ transitionDelay: '0.2s', marginTop: '2rem' }}>
              <a href="#cta" className="btn-primary" aria-label="Contact me to discuss working together">Work With Me</a>
              <a href="#projects" className="btn-outline" aria-label="View my portfolio projects">See My Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
