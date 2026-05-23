import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { client } from '../lib/sanity'

export default function AdminProjectForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEdit = !!id

  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'webapp',
    techStack: [],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    order: 0,
  })

  const [techInput, setTechInput] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState('')

  useEffect(() => {
    if (isEdit) {
      loadProject()
    }
  }, [id])

  async function loadProject() {
    setLoading(true)
    try {
      const project = await client.fetch(`*[_type == "project" && _id == $id][0]`, { id })
      if (project) {
        setFormData({
          title: project.title || '',
          description: project.description || '',
          category: project.category || 'webapp',
          techStack: project.techStack || [],
          liveUrl: project.liveUrl || '',
          githubUrl: project.githubUrl || '',
          featured: project.featured || false,
          order: project.order || 0,
        })
        if (project.image) {
          setImagePreview(`https://cdn.sanity.io/images/7bkfx0pl/production/${project.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`)
        }
      }
    } catch (err) {
      setError('Failed to load project')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function handleAddTech(e) {
    e.preventDefault()
    if (techInput.trim() && !formData.techStack.includes(techInput.trim())) {
      setFormData(prev => ({
        ...prev,
        techStack: [...prev.techStack, techInput.trim()]
      }))
      setTechInput('')
    }
  }

  function handleRemoveTech(tech) {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack.filter(t => t !== tech)
    }))
  }

  function handleImageChange(e) {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  async function uploadImage() {
    if (!imageFile) return null

    try {
      const uploadedImage = await client.assets.upload('image', imageFile, {
        filename: imageFile.name
      })
      return {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: uploadedImage._id
        }
      }
    } catch (err) {
      console.error('Image upload failed:', err)
      throw new Error('Failed to upload image')
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSuccess(false)

    try {
      // Upload image if new one selected
      let imageData = null
      if (imageFile) {
        imageData = await uploadImage()
      }

      // Create slug from title
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      const projectData = {
        _type: 'project',
        title: formData.title,
        slug: {
          _type: 'slug',
          current: slug
        },
        description: formData.description,
        category: formData.category,
        techStack: formData.techStack,
        liveUrl: formData.liveUrl || undefined,
        githubUrl: formData.githubUrl || undefined,
        featured: formData.featured,
        order: parseInt(formData.order) || 0,
      }

      if (imageData) {
        projectData.image = imageData
      }

      if (isEdit) {
        await client.patch(id).set(projectData).commit()
      } else {
        await client.create(projectData)
      }

      setSuccess(true)
      setTimeout(() => {
        navigate('/admin/projects')
      }, 1500)
    } catch (err) {
      setError(err.message || 'Failed to save project')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="admin-page">
        <div className="admin-loading">
          <div className="spinner-large"></div>
          <p>Loading project...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">{isEdit ? 'Edit Project' : 'Add New Project'}</h1>
          <p className="admin-page-subtitle">Fill in the project details below</p>
        </div>
        <button 
          className="btn-admin-secondary"
          onClick={() => navigate('/admin/projects')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Projects
        </button>
      </div>

      {error && (
        <div className="admin-alert admin-alert-error">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4M12 16h.01"/>
          </svg>
          {error}
        </div>
      )}

      {success && (
        <div className="admin-alert admin-alert-success">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <path d="M22 4L12 14.01l-3-3"/>
          </svg>
          Project saved successfully! Redirecting...
        </div>
      )}

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="admin-form-grid">
          {/* Left Column */}
          <div className="admin-form-section">
            <h3 className="admin-form-section-title">Basic Information</h3>

            <div className="admin-form-field">
              <label htmlFor="title">Project Title *</label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="My Awesome Project"
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Brief description of your project..."
                rows="4"
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="webapp">Web App</option>
                <option value="mobile">Mobile App</option>
                <option value="design">Design</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="admin-form-field">
              <label>Tech Stack</label>
              <div className="admin-tech-input-wrapper">
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="e.g., React, Node.js, MongoDB"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTech(e)}
                />
                <button 
                  type="button"
                  onClick={handleAddTech}
                  className="btn-admin-secondary"
                >
                  Add
                </button>
              </div>
              {formData.techStack.length > 0 && (
                <div className="admin-tech-tags">
                  {formData.techStack.map((tech, index) => (
                    <span key={index} className="admin-tech-tag-removable">
                      {tech}
                      <button
                        type="button"
                        onClick={() => handleRemoveTech(tech)}
                        aria-label={`Remove ${tech}`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="admin-form-section">
            <h3 className="admin-form-section-title">Links & Media</h3>

            <div className="admin-form-field">
              <label htmlFor="image">Project Image</label>
              <div className="admin-image-upload">
                {imagePreview && (
                  <div className="admin-image-preview">
                    <img src={imagePreview} alt="Preview" />
                  </div>
                )}
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="admin-file-input"
                />
                <label htmlFor="image" className="admin-file-label">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                  </svg>
                  {imagePreview ? 'Change Image' : 'Upload Image'}
                </label>
              </div>
            </div>

            <div className="admin-form-field">
              <label htmlFor="liveUrl">Live URL</label>
              <input
                id="liveUrl"
                name="liveUrl"
                type="url"
                value={formData.liveUrl}
                onChange={handleChange}
                placeholder="https://myproject.com"
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="githubUrl">GitHub URL</label>
              <input
                id="githubUrl"
                name="githubUrl"
                type="url"
                value={formData.githubUrl}
                onChange={handleChange}
                placeholder="https://github.com/username/repo"
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="order">Display Order</label>
              <input
                id="order"
                name="order"
                type="number"
                value={formData.order}
                onChange={handleChange}
                placeholder="0"
                min="0"
              />
              <small>Lower numbers appear first</small>
            </div>

            <div className="admin-form-field">
              <label className="admin-checkbox-label">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                />
                <span>Featured Project</span>
              </label>
              <small>Featured projects appear on the homepage</small>
            </div>
          </div>
        </div>

        <div className="admin-form-actions">
          <button
            type="button"
            className="btn-admin-secondary"
            onClick={() => navigate('/admin/projects')}
            disabled={saving}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-admin-primary"
            disabled={saving}
          >
            {saving ? (
              <>
                <div className="spinner-small"></div>
                Saving...
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
                  <path d="M17 21v-8H7v8M7 3v5h8"/>
                </svg>
                {isEdit ? 'Update Project' : 'Create Project'}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
