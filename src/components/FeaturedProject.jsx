import { useState, useEffect } from 'react'
import { fetchData, queries, urlFor } from '../lib/sanity'

export default function FeaturedProject() {
  const [featuredProject, setFeaturedProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadFeaturedProject()
  }, [])

  async function loadFeaturedProject() {
    try {
      const data = await fetchData(queries.featuredProjects)
      // Get the first featured project
      if (data && data.length > 0) {
        setFeaturedProject(data[0])
      }
    } catch (error) {
      console.error('Error loading featured project:', error)
    } finally {
      setLoading(false)
    }
  }

  // If no featured project, don't show the section
  if (!loading && !featuredProject) {
    return null
  }

  if (loading) {
    return (
      <section id="featured-project" className="section">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div className="spinner-large" style={{ margin: '0 auto' }}></div>
        </div>
      </section>
    )
  }

  return (
    <section id="featured-project" className="section">
      <div className="container">
        <p className="eyebrow reveal">Featured Project</p>
        <h2 className="sh reveal" style={{ transitionDelay: '.05s' }}>
          {featuredProject.category === 'webapp' ? 'Web' : featuredProject.category === 'mobile' ? 'Mobile' : 'Featured'} <em>Project</em>
        </h2>
        
        <article className="featured-card reveal" style={{ transitionDelay: '.1s' }}>
          {featuredProject.image && (
            <div className="featured-image">
              <img 
                src={urlFor(featuredProject.image).width(1200).height(600).url()} 
                alt={featuredProject.title}
                loading="lazy"
              />
            </div>
          )}
          
          <div className="featured-content">
            <h3 className="featured-title">{featuredProject.title}</h3>
            <p className="featured-desc">{featuredProject.description}</p>
            
            {featuredProject.techStack && featuredProject.techStack.length > 0 && (
              <div className="featured-tech">
                {featuredProject.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            )}
            
            {(featuredProject.liveUrl || featuredProject.githubUrl) && (
              <div className="featured-actions" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                {featuredProject.liveUrl && (
                  <button
                    className="btn-primary"
                    onClick={() => window.open(featuredProject.liveUrl, '_blank', 'noopener,noreferrer')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                    View Live
                  </button>
                )}
                {featuredProject.githubUrl && (
                  <button
                    className="btn-outline"
                    onClick={() => window.open(featuredProject.githubUrl, '_blank', 'noopener,noreferrer')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                    </svg>
                    View Code
                  </button>
                )}
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}
