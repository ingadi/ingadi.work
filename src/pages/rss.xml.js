import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "ingadi.work",
    description:
      "Web development, Software engineering, opinions, deep dark secrets.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${tagToroute[post.data.tags[0]]}/${post.slug}`,
    })),
  });
}

const tagToroute = {
  blogPost: "blog",
  project: "projects",
};
