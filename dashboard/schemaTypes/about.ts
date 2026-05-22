import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'About Me',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
    }),
    defineField({
      name: 'projectsCompleted',
      title: 'Projects Completed',
      type: 'number',
    }),
    defineField({
      name: 'happyClients',
      title: 'Happy Clients',
      type: 'number',
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume PDF',
      type: 'file',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'profileImage',
    },
  },
})
