import { defineCollection, z } from "astro:content";

// Work experience collection
const work = defineCollection({
  type: "content",
  schema: z.object({
    position: z.string(),
    company: z.string(),
    date: z.coerce.date(),
    endDate: z.union([z.coerce.date(), z.string()]).optional(),
    location: z.string(),
    shortSummary: z.string(),
    summary: z.array(z.string()),
    technologies: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

// Blog posts collection
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

// Projects collection
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    technologies: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, blog, projects };
