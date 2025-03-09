import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      alt: z.string(),
      platform: z.string(),
      stack: z.string(),
      website: z.string(),
      github: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
