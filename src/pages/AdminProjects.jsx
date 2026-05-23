import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchData, queries, urlFor } from '../lib/sanity'

export default function AdminProjects() {
  const navigate = useNavigate()
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

  function openAddProject() {
    navigate('/admin/projects/new')
  }

  function openEditProject(projectId) {
    navigate(`/admin/projects/edit/${projectId}`)
  }

  async function handleDeleteProject(projectId, projectTitle) {
    if (!window.confirm(`Are you sure you want to delete "${projectTitle}"? This cannot be undone.`)) {
      return
    }

    try {
      const { client } = await import('../lib/sanity')
      await client.delete(projectId)
      
      // Refresh the projects list
      setProjects(projects.filter(p => p._id !== projectId))
      
      // Show success message
      if (window.Swal) {
        window.Swal.fire({
          title: 'Deleted!',
          text: 'Project has been deleted.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
          background: '#0b1020',
          color: '#e8edf8',
        })
      }
    } catch (error) {
      console.error('Error deleting project:', error)
      if (window.Swal) {
        window.Swal.fire({
          title: 'Error!',
          text: 'Failed to delete project. Please try again.',
          icon: 'error',
          background: '#0b1020',
          color: '#e8edf8',
        })
      } else {
        alert('Failed to delete project. Please try again.')
      }
    }
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
        <button className="btn-admin-primary" onClick={openAddProject}>
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
          <button className="btn-admin-primary" onClick={openAddProject}>
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
                        onClick={() => openEditProject(project._id)}
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
                      <button 
                        className="admin-icon-btn admin-icon-btn-danger"
                        onClick={() => handleDeleteProject(project._id, project.title)}
                        title="Delete"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                        </svg>
                      </button>
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
