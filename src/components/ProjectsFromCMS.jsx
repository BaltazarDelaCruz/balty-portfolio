import { useState, useEffect } from 'react'
import { fetchData, queries, urlFor } from '../lib/sanity'

/**
 * Example component showing how to fetch and display projects from Sanity CMS
 * 
 * To use this:
 * 1. Start Sanity Studio: cd dashboard && npm run dev
 * 2. Add some projects at http://localhost:3333
 * 3. Import this component in your App.jsx
 */
export default function ProjectsFromCMS() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true)
        const data = await fetchData(queries.allProjects)
        setProjects(data || [])
      } catch (err) {
        setError(err.message)
        console.error('Error loading projects:', err)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  if (loading) {
    return (
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <p>Loading projects from CMS...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--t3)' }}>
            Error loading projects: {error}
            <br />
            <small>Make sure Sanity Studio is running and you've added content</small>
          </p>
        </div>
      </section>
    )
  }

  if (projects.length === 0) {
    return (
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--t3)' }}>
            No projects found in CMS.
            <br />
            <small>Add projects at http://localhost:3333</small>
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="cms-projects" className="section">
      <div className="container">
        <div className="eyebrow">From CMS</div>
        <h2 className="sh">
          Projects from <em>Sanity</em>
        </h2>

        <div className="proj-grid2" style={{ marginTop: '3rem' }}>
          {projects.map((project) => (
            <article key={project._id} className="proj-card2">
              {project.image && (
                <div className="proj-img2">
                  <img
                    src={urlFor(project.image).width(600).height(400).url()}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
              )}
              
              <div className="proj-content2">
                {project.category && (
                  <span className="proj-cat2">{project.category}</span>
                )}
                
                <h3 className="proj-title2">{project.title}</h3>
                
                <p className="proj-desc2">{project.description}</p>
                
                {project.techStack && project.techStack.length > 0 && (
                  <div className="proj-stack2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="proj-links2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
