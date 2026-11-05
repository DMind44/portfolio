import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    project: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        link: z.string().optional(),
      }),
    }),
  },
})
