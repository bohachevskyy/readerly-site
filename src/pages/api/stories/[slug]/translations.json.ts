import type { APIRoute, GetStaticPaths } from "astro";
import { allStories } from "../../../../data/stories";

export const getStaticPaths: GetStaticPaths = () => {
  const stories = allStories();
  return stories.map((story) => ({
    params: { slug: story.slug },
    props: { translations: story.translations, words: story.words || {} },
  }));
};

export const GET: APIRoute = ({ props }) => {
  const { translations, words } = props as {
    translations: Record<string, Record<string, string>>;
    words: Record<string, { pos?: string; example?: string }>;
  };

  return new Response(JSON.stringify({ translations, words }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
