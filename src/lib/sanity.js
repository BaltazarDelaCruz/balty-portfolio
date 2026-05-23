import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Get these values from your Sanity dashboard
export const client = createClient({
  projectId: '7bkfx0pl', // Your Sanity project ID
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-01-01', // use current date (YYYY-MM-DD) to target the latest API version
  token: import.meta.env.VITE_SANITY_TOKEN || undefined, // Only needed for write operations
})

// Helper function to generate image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Query helpers
export const queries = {
  // Get all projects
  allProjects: `*[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    image,
    category,
    techStack,
    liveUrl,
    githubUrl,
    featured
  }`,

  // Get featured projects
  featuredProjects: `*[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    image,
    category,
    techStack,
    liveUrl,
    githubUrl
  }`,

  // Get all blog posts
  allBlogPosts: `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    tags,
    publishedAt,
    featured
  }`,

  // Get all skills grouped by category
  allSkills: `*[_type == "skill"] | order(category asc, order asc) {
    _id,
    name,
    icon,
    category,
    proficiency
  }`,

  // Get about section
  about: `*[_type == "about"][0] {
    title,
    bio,
    profileImage,
    yearsOfExperience,
    projectsCompleted,
    happyClients,
    resumeFile
  }`,

  // Get all services
  allServices: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    tags
  }`,
}

// Fetch helper function
export async function fetchData(query) {
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching from Sanity:', error)
    return null
  }
}
