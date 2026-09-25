import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Icon } from "@/components/icons";
import { posts } from "@/lib/blog";
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
      <article className="card group relative mb-10 grid gap-6 overflow-hidden p-8 transition-all hover:shadow-lift lg:grid-cols-2 lg:p-10">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-brand-50 to-transparent lg:block" aria-hidden="true" />
        <div className="relative">
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
            className="card group relative flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="badge mb-4 w-fit bg-brand-50 text-brand-700">{post.category}</span>
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
          </article>
        ))}
      </div>
    </div>
  );
}
