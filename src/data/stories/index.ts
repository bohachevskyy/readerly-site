export interface WordInfo {
  word: string;
  pos?: string;
  example?: string;
}

export interface Story {
  title: string;
  slug: string;
  description: string;
  cardDescription?: string;
  level: string;
  tags?: string[];
  appUrl?: string;
  text: string;
  words?: Record<string, WordInfo>;
  translations: Record<string, Record<string, string>>;
  createdAt?: string;
}

const storyModules = import.meta.glob<Story>("./*.json", { eager: true, import: "default" });

function allStories(): Story[] {
  return Object.values(storyModules).sort((a, b) => {
    const dateA = a.createdAt ?? "";
    const dateB = b.createdAt ?? "";
    return dateB.localeCompare(dateA); // newest first
  });
}

function getStoryBySlug(slug: string): Story | undefined {
  return allStories().find((s) => s.slug === slug);
}

export { allStories, getStoryBySlug };
