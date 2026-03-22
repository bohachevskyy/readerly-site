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
    const dateA = a.createdAt ?? "9999-12-31";
    const dateB = b.createdAt ?? "9999-12-31";
    return dateB.localeCompare(dateA); // newest first
  });
}

function getStoryBySlug(slug: string): Story | undefined {
  return allStories().find((s) => s.slug === slug);
}

const BLOG_TAGS = new Set([
  "language-learning",
  "professional",
  "communication",
  "career",
  "business-english",
]);

function isBlogStory(story: Story): boolean {
  return (story.tags ?? []).some((tag) => BLOG_TAGS.has(tag));
}

function blogStories(): Story[] {
  return allStories().filter(isBlogStory);
}

function browseStories(): Story[] {
  return allStories().filter((s) => !isBlogStory(s));
}

export { allStories, getStoryBySlug, blogStories, browseStories, isBlogStory };
