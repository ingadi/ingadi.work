import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.union([
      z.literal("../../layouts/PostLayoutFullBleed.astro"),
      z.literal("../../layouts/PostLayoutTOC.astro"),
    ]),
    id: z.number(),
    title: z.string(),
    pubDate: z.coerce.date(),
    modDate: z.coerce.date(),
    description: z.string().refine((val) => val.length <= 100, {
      message: "Description can't be more than 100 characters",
    }),
    image: z.object({
      url: z.string(),
      alt: z.string().refine((val) => val.length <= 100, {
        message: "Image description can't be more than 10 characters",
      }),
    }),
    video: z
      .object({
        url: z.string(),
        youtubeId: z.string(),
        description: z.string().refine((val) => val.length <= 100, {
          message: "Video description can't be more than 20 characters",
        }),
      })
      .partial({
        url: true,
        youtubeId: true,
      })
      .refine(({ url, youtubeId }) => url || youtubeId, {
        message: "Video must have an url or a youtube id",
      })
      .optional(),
    summary: z
      .string()
      .refine((val) => val.length <= 500, {
        message: "Summary can't be more than 500 characters",
      })
      .optional(),
    tags: z
      .tuple([
        z.union([z.literal("blogPost"), z.literal("project")]),
        z.union([
          z.literal("programming"),
          z.literal("books"),
          z.literal("opinion"),
          z.literal("marketing"),
        ]),
      ])
      .rest(
        z.string().regex(/^[a-z]+$/g, { message: "Tags must be lowercase" }),
      ),
    isDraft: z.boolean(),
    // category: z.union([
    //   z.literal("programming"),
    //   z.literal("books"),
    //   z.literal("opinion"),
    //   z.literal("marketing"),
    // ]),
    // tags: z.array(
    //   z.union([
    //     z.literal("programming"),
    //     z.literal("books"),
    //     z.literal("opinion"),
    //     z.literal("marketing"),
    //   ]),
    //   z.string(),
    // ),
    // img: z.string(),
    // img_alt: z.string().optional(),
    // video: z.string().optional(),
    // type: z.union([z.literal("blogPost"), z.literal("project")]),
  }),
});

export const collections = {
  posts: postCollection,
};
