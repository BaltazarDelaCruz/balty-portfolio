import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Design', value: 'design'},
          {title: 'Tools', value: 'tools'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'proficiency',
      title: 'Proficiency Level',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 3,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon',
      category: 'category',
      proficiency: 'proficiency',
    },
    prepare(selection) {
      const {title, media, category, proficiency} = selection
      return {
        title,
        subtitle: `${category} - Level ${proficiency}/5`,
        media,
      }
    },
  },
})
