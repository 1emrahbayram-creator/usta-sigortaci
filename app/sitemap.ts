import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${site.url}/sigortalar`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/sigorta-sirketleri`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/hasar-aninda`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/sigorta-sozlugu`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/sss`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/hakkimizda`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${site.url}/iletisim`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const productPages: MetadataRoute.Sitemap = products.flatMap((p) => [
    {
      url: `${site.url}/sigorta/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${site.url}/teklif/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]);

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
