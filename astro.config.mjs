import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import addClasses from "rehype-add-classes";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "server",
  adapter: vercel(),
  markdown: {
    // Applied to .md and .mdx files
    // remarkPlugins: [remarkToc],
    rehypePlugins: [
      // rehypeAccessibleEmojis,
      [
        addClasses,
        {
          /**place classes */
          // p: "text-4xl",
        },
      ],
    ],
  },
  site: "https://ingadi.work",
});
