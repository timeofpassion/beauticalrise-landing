import type { MetadataRoute } from "next";

async function getBlogSlugs(): Promise<string[]> {
  try {
    const { getPublishedPosts } = await import("@/lib/notion");
    const posts = await getPublishedPosts();
    return posts.map((p) => p.slug);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getBlogSlugs();

  return [
    {
      url: "https://beauticalrise.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://beauticalrise.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...slugs.map((slug) => ({
      url: `https://beauticalrise.com/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
