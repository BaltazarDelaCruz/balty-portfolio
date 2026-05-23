import { useState, useEffect } from 'react'
import { fetchData, queries, urlFor } from '../lib/sanity'

export default function AdminProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProjects()
  }, [])

  async function loadProjects() {
    const data = await fetchData(queries.allProjects)
    setProjects(data || [])
    setLoading(false)
  }

  function openSanityStudio() {
    window.open('http://localhost:3333/structure/project', '_blank')
  }

  if (loading) {
    return <div className="admin-loading"><div className="spinner-large"></div></div>
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Projects</h1>
          <p className="admin-page-subtitle">Manage your portfolio projects</p>
        </div>
        <button className="btn-admin-primary" onClick={openSanityStudio}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          Add Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="admin-empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--t3)" strokeWidth="1">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
          </svg>
          <h3>No projects yet</h3>
          <p>Start by adding your first project</p>
          <button className="btn-admin-primary" onClick={openSanityStudio}>
            Add Your First Project
          </button>
        </div>
      ) : (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Category</th>
                <th>Tech Stack</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id}>
                  <td>
                    <div className="admin-table-cell-with-image">
                      {project.image && (
                        <img 
                          src={urlFor(project.image).width(60).height(60).url()} 
                          alt={project.title}
                          className="admin-table-thumbnail"
                        />
                      )}
                      <div>
                        <p className="admin-table-title">{project.title}</p>
                        <p className="admin-table-subtitle">{project.description?.substring(0, 50)}...</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="admin-badge">{project.category || 'N/A'}</span>
                  </td>
                  <td>
                    <div className="admin-tech-stack">
                      {project.techStack?.slice(0, 3).map((tech, i) => (
                        <span key={i} className="admin-tech-tag">{tech}</span>
                      ))}
                      {project.techStack?.length > 3 && (
                        <span className="admin-tech-tag">+{project.techStack.length - 3}</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <span className={`admin-status ${project.featured ? 'featured' : 'normal'}`}>
                      {project.featured ? 'Featured' : 'Published'}
                    </span>
                  </td>
                  <td>
                    <div className="admin-table-actions">
                      <button 
                        className="admin-icon-btn"
                        onClick={() => window.open(`http://localhost:3333/structure/project;${project._id}`, '_blank')}
                        title="Edit"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                      </button>
                      {project.liveUrl && (
                        <button 
                          className="admin-icon-btn"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          title="View Live"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                          </svg>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
