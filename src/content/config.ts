import { defineCollection, z } from 'astro:content';

// Schema pour les articles de blog
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Bérangère Gallais'),
    category: z.enum(['API Documentation', 'AI Compliance', 'Ghostwriting', 'Documentation Strategy', 'Tools & Workflows']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    translationKey: z.string().optional(),
    language: z.enum(['en', 'fr'])
  })
});

// Schema pour les projets portfolio
const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    industry: z.string(),
    projectDate: z.date(),
    challenge: z.string(),
    solution: z.string(),
    deliverables: z.array(z.string()),
    technologies: z.array(z.string()),
    results: z.string(),
    image: z.string(),
    imageAlt: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    demoUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    category: z.array(z.string()).default([]),
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
      company: z.string()
    }).optional(),
    tags: z.array(z.string()).default([]),
    language: z.enum(['en', 'fr']),
    translationKey: z.string().optional(),
    slug: z.string().optional()
  })
});

export const collections = {
  'blog': blogCollection,
  'portfolio': portfolioCollection
};