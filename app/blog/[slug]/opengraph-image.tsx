import { ImageResponse } from "next/og";
import { getPost, posts } from "@/lib/blog";
import { OgCard, clampText, ogFonts, ogSize, ogContentType } from "@/lib/og";

export const alt = "Usta Sigorta blog yazısı tanıtım görseli";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  return new ImageResponse(
    (
      <OgCard
        kicker={post?.category ?? "Sigorta Rehberi"}
        title={post?.title ?? "Sigorta Rehberi"}
        desc={post ? clampText(post.excerpt, 120) : "Bilinçli sigortalı olmanız için rehber yazılar"}
      />
    ),
    { ...size, fonts: await ogFonts() }
  );
}
