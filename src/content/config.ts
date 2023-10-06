import { defineCollection, z } from "astro:content";

// turn tags into zod literals

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    modDate: z.coerce.date(),
    category: z.union([
      z.literal("programming"),
      z.literal("books"),
      z.literal("opinion"),
      z.literal("Marketing"),
    ]),
    tags: z.array(z.string()),
    summary: z.string().optional(), // restrict length?
    youtubeId: z.string().optional(),
    img: z.string(),
    img_alt: z.string().optional(),
    video: z.string().optional(),
    type: z.union([z.literal("blogPost"), z.literal("project")]),
  }),
});

export const collections = {
  posts: postCollection,
};
