import { ImageResponse } from "next/og";
import { getProduct, products } from "@/lib/products";
import { OgCard, ogFonts, ogSize, ogContentType } from "@/lib/og";

export const alt = "Usta Sigorta — sigorta branşı tanıtım görseli";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);

  return new ImageResponse(
    (
      <OgCard
        kicker={product ? "Sigorta Danışmanlığı" : "Usta Sigorta"}
        title={product?.name ?? "Sigorta Danışmanlığı"}
        desc={product?.tagline ?? "25+ şirket arasından size en uygun poliçe"}
      />
    ),
    { ...size, fonts: await ogFonts() }
  );
}
