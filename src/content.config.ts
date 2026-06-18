import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['published', 'draft']),
    order: z.number(),
    cover: z.string().optional(),
    links: z.object({
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
    }).optional(),
    tech: z.array(z.string()),
    hard_skills: z.array(z.string()),
    soft_skills: z.array(z.string()),
    context: z.string().optional(),
  }),
});

export const collections = { projects };
