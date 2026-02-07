export interface Story {
  title: string;
  slug: string;
  description: string;
  level: string;
  text: string;
  translations: Record<string, Record<string, string>>;
}

const storyModules = import.meta.glob<Story>("./*.json", { eager: true, import: "default" });

function allStories(): Story[] {
  return Object.values(storyModules);
}

function getStoryBySlug(slug: string): Story | undefined {
  return allStories().find((s) => s.slug === slug);
}

export { allStories, getStoryBySlug };
