import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Isso é novo!

const artigos = defineCollection({
  // O loader diz ao Astro onde buscar os arquivos .md
  loader: glob({ pattern: "**/*.md", base: "./src/content/artigos" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // O coerce ajuda a tratar a data corretamente
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { artigos };