import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { posts } from "@/lib/blog";
import { pageImage, productImage, postImage, type PageImageKey } from "@/lib/images";

const abs = (src: string) => `${site.url}${src}`;
const pageImg = (key: PageImageKey) => [abs(pageImage(key).src)];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "daily", priority: 1, images: pageImg("anasayfa") },
    { url: `${site.url}/sigortalar`, lastModified: now, changeFrequency: "weekly", priority: 0.9, images: pageImg("sigortalar") },
    { url: `${site.url}/sigorta-sirketleri`, lastModified: now, changeFrequency: "monthly", priority: 0.6, images: pageImg("sigorta-sirketleri") },
    { url: `${site.url}/hasar-aninda`, lastModified: now, changeFrequency: "monthly", priority: 0.7, images: pageImg("hasar-aninda") },
    { url: `${site.url}/sigorta-sozlugu`, lastModified: now, changeFrequency: "monthly", priority: 0.6, images: pageImg("sigorta-sozlugu") },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/sss`, lastModified: now, changeFrequency: "monthly", priority: 0.6, images: pageImg("sss") },
    { url: `${site.url}/hakkimizda`, lastModified: now, changeFrequency: "yearly", priority: 0.4, images: pageImg("hakkimizda") },
    { url: `${site.url}/iletisim`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${site.url}/sigorta/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
    images: [abs(productImage(p.slug).src)],
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [abs(postImage(post.slug).src)],
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
