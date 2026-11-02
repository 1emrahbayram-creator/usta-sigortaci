import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Icon } from "@/components/icons";
import { posts } from "@/lib/blog";
import { postImage } from "@/lib/images";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Sigorta Rehberi ve Blog",
  description:
    "Kasko, trafik, DASK ve sağlık sigortası hakkında uzman rehberler. Bilinçli sigortalı olmak için ihtiyacınız olan her şey Usta Sigortacı Blog'da.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="container-x py-10">
      <Breadcrumbs items={[{ name: "Blog" }]} />
      <div className="mt-6 mb-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-navy-950 sm:text-4xl">Sigorta Rehberi</h1>
        <p className="mt-3 text-navy-900/60">
          Poliçenizi bilinçli seçmeniz için uzman ekibimizden rehberler, ipuçları ve güncel
          bilgiler.
        </p>
      </div>

      {/* Öne çıkan yazı */}
      <article className="card group relative mb-10 grid items-center gap-8 overflow-hidden transition-all hover:shadow-lift lg:grid-cols-[1fr_1.05fr]">
        <Image
          src={postImage(featured.slug).src}
          alt={postImage(featured.slug).alt}
          width={800}
          height={600}
          priority
          unoptimized
          sizes="(max-width: 1024px) 100vw, 520px"
          className="h-full w-full object-cover"
        />
        <div className="relative p-8 lg:py-10 lg:pr-10 lg:pl-0">
          <span className="badge mb-4 bg-accent-50 text-accent-600">
            <Icon name="sparkle" className="h-3 w-3" />
            Öne çıkan
          </span>
          <h2 className="text-2xl leading-tight font-bold text-navy-950 sm:text-3xl">
            <Link href={`/blog/${featured.slug}`} className="after:absolute after:inset-0">
              {featured.title}
            </Link>
          </h2>
          <p className="mt-3 text-navy-900/60">{featured.excerpt}</p>
          <p className="mt-5 flex items-center gap-2 text-xs text-navy-900/50">
            <Icon name="calendar" className="h-4 w-4" />
            {formatDate(featured.date)} · {featured.readMinutes} dk okuma · {featured.category}
          </p>
        </div>
      </article>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <article
            key={post.slug}
            className="card group relative flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <Image
              src={postImage(post.slug).src}
              alt={postImage(post.slug).alt}
              width={800}
              height={600}
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
              className="h-44 w-full border-b border-navy-900/8 object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="flex flex-1 flex-col p-6">
              <span className="badge mb-3 w-fit bg-brand-50 text-brand-700">{post.category}</span>
              <h2 className="text-base leading-6 font-bold text-navy-950">
                <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-navy-900/60">{post.excerpt}</p>
              <p className="mt-4 flex items-center gap-2 text-xs text-navy-900/50">
                <Icon name="calendar" className="h-3.5 w-3.5" />
                {formatDate(post.date)} · {post.readMinutes} dk
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
