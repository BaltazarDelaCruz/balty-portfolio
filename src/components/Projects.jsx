export default function Projects() {
  const projects = [
    {
      title: 'Weather App + Map',
      description: 'React + Tailwind + Leaflet.js live weather dashboard with geolocation and real-time forecasts.',
      link: 'https://baltazardelacruz.github.io/weather/',
      image: '/images/weather.png',
      tags: ['React', 'API', 'Fullstack']
    },
    {
      title: 'Currency Converter',
      description: 'Real-time multi-currency converter with live exchange rates and clean, minimal UX.',
      link: 'https://baltazardelacruz.github.io/currency/',
      image: '/images/currency.jpg',
      tags: ['React', 'Finance']
    },
    {
      title: 'Number → Japanese',
      description: 'Interactive converter with quiz mode for active language learning. ES6 + vanilla JS.',
      link: 'https://baltazardelacruz.github.io/japanese/',
      image: '/images/japanese.png',
      tags: ['JS', 'Education']
    },
    {
      title: 'Blog. 3-Point King',
      description: 'Responsive editorial blog with clean typographic hierarchy, built with Bootstrap.',
      link: 'https://baltazardelacruz.github.io/blog/',
      image: '/images/blog.png',
      tags: ['Bootstrap', 'Editorial']
    },
    {
      title: 'Fashionable',
      description: 'Fashion-forward site featuring creative layouts, CSS animations, and smooth interactions.',
      link: 'https://baltazardelacruz.github.io/fashionable/',
      image: '/images/fashion.png',
      tags: ['CSS', 'Design']
    },
    {
      title: 'Gallery',
      description: 'Minimal photography & art gallery that emphasises the work over interface chrome.',
      link: 'https://baltazardelacruz.github.io/gallery/',
      image: '/images/art.png',
      tags: ['Gallery', 'CSS']
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <p className="eyebrow reveal">More Projects</p>
            <h2 className="sh reveal" style={{ transitionDelay: '0.05s', marginBottom: 0 }}>
              Other things I've <em>built.</em>
            </h2>
          </div>
          <p className="reveal" style={{ transitionDelay: '0.1s', fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--t3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
            Personal &amp; Academic
          </p>
        </div>
        <div className="proj-grid" role="list">
          {projects.map((project, index) => (
            <article
              key={index}
              className="proj-card reveal"
              style={{ transitionDelay: `${0.05 * index}s` }}
              role="listitem"
            >
              <div className="proj-thumb">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                  onError={(e) => { e.target.parentElement.style.background = 'var(--surface2)' }}
                />
                <div className="proj-thumb-ov" aria-hidden="true"></div>
              </div>
              <div className="proj-body">
                <div className="proj-tags2" role="list" aria-label="Project technologies">
                  {project.tags.map((tag) => (
                    <span key={tag} className="proj-tag2" role="listitem">{tag}</span>
                  ))}
                </div>
                <h3 className="proj-title2">{project.title}</h3>
                <p className="proj-desc2">{project.description}</p>
                <button
                  className="proj-link2"
                  onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                  aria-label={`Visit ${project.title} project (opens in new tab)`}
                >
                  Visit project
                  <svg className="proj-arrow" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
