// Migration script to import existing projects into Sanity CMS
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

const client = createClient({
  projectId: '7bkfx0pl',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.VITE_SANITY_TOKEN, // Make sure you have this in .env
})

const existingProjects = [
  {
    title: 'Weather App + Map',
    description: 'React + Tailwind + Leaflet.js live weather dashboard with geolocation and real-time forecasts.',
    liveUrl: 'https://baltazardelacruz.github.io/weather/',
    category: 'webapp',
    techStack: ['React', 'Tailwind', 'Leaflet.js', 'API'],
    featured: false,
    order: 1
  },
  {
    title: 'Currency Converter',
    description: 'Real-time multi-currency converter with live exchange rates and clean, minimal UX.',
    liveUrl: 'https://baltazardelacruz.github.io/currency/',
    category: 'webapp',
    techStack: ['React', 'Finance API'],
    featured: false,
    order: 2
  },
  {
    title: 'Number → Japanese',
    description: 'Interactive converter with quiz mode for active language learning. ES6 + vanilla JS.',
    liveUrl: 'https://baltazardelacruz.github.io/japanese/',
    category: 'webapp',
    techStack: ['JavaScript', 'ES6', 'Education'],
    featured: false,
    order: 3
  },
  {
    title: 'Blog - 3-Point King',
    description: 'Responsive editorial blog with clean typographic hierarchy, built with Bootstrap.',
    liveUrl: 'https://baltazardelacruz.github.io/blog/',
    category: 'webapp',
    techStack: ['Bootstrap', 'HTML', 'CSS'],
    featured: false,
    order: 4
  },
  {
    title: 'Fashionable',
    description: 'Fashion-forward site featuring creative layouts, CSS animations, and smooth interactions.',
    liveUrl: 'https://baltazardelacruz.github.io/fashionable/',
    category: 'design',
    techStack: ['CSS', 'Animations', 'Design'],
    featured: false,
    order: 5
  },
  {
    title: 'Gallery',
    description: 'Minimal photography & art gallery that emphasises the work over interface chrome.',
    liveUrl: 'https://baltazardelacruz.github.io/gallery/',
    category: 'design',
    techStack: ['HTML', 'CSS', 'Gallery'],
    featured: false,
    order: 6
  }
]

async function migrateProjects() {
  console.log('🚀 Starting migration...\n')

  for (const project of existingProjects) {
    try {
      const slug = project.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      const doc = {
        _type: 'project',
        title: project.title,
        slug: {
          _type: 'slug',
          current: slug
        },
        description: project.description,
        category: project.category,
        techStack: project.techStack,
        liveUrl: project.liveUrl,
        featured: project.featured,
        order: project.order
      }

      const result = await client.create(doc)
      console.log(`✅ Created: ${project.title}`)
    } catch (error) {
      console.error(`❌ Failed to create ${project.title}:`, error.message)
    }
  }

  console.log('\n🎉 Migration complete!')
  console.log('📝 Now you can manage these projects in your admin panel!')
}

migrateProjects()
