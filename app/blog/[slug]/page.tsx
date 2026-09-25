import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Icon } from "@/components/icons";
import { getPost, posts } from "@/lib/blog";
import { formatDate } from "@/lib/format";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      url: `${site.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "tr-TR",
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <div className="container-x py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: post.title }]} />

      <div className="mx-auto mt-8 max-w-3xl">
        <span className="badge bg-brand-50 text-brand-700">{post.category}</span>
        <h1 className="mt-4 text-3xl leading-tight font-bold text-navy-950 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 flex items-center gap-2 text-sm text-navy-900/50">
          <Icon name="calendar" className="h-4 w-4" />
          {formatDate(post.date)} · {post.readMinutes} dk okuma · {site.name} Editör Ekibi
        </p>

        <article className="prose-tr mt-10 border-t border-navy-900/8 pt-8">
          {post.sections.map((s, i) => (
            <div key={i}>
              {s.h && <h2>{s.h}</h2>}
              {s.p.map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          ))}
        </article>

        <div className="card mt-12 flex flex-col items-center gap-4 bg-navy-950 p-8 text-center text-white sm:flex-row sm:text-left">
          <Icon name="sparkle" className="h-10 w-10 shrink-0 text-accent-400" />
          <div className="flex-1">
            <p className="text-lg font-bold">Fiyatları kendiniz karşılaştırın</p>
            <p className="text-sm text-white/60">
              25+ sigorta şirketinden 2 dakikada gerçek teklifler alın.
            </p>
          </div>
          <Link href="/sigortalar" className="btn-accent btn-md whitespace-nowrap">
            Teklif Al
          </Link>
        </div>
      </div>

      <section className="mx-auto mt-16 max-w-5xl" aria-labelledby="ilgili-yazilar">
        <h2 id="ilgili-yazilar" className="mb-6 text-xl font-bold text-navy-950">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {related.map((p) => (
            <article key={p.slug} className="card group relative flex flex-col p-5 transition-all hover:-translate-y-1 hover:shadow-lift">
              <span className="badge mb-3 w-fit bg-brand-50 text-brand-700">{p.category}</span>
              <h3 className="flex-1 text-sm leading-5 font-bold text-navy-950">
                <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0">
                  {p.title}
                </Link>
              </h3>
              <p className="mt-3 text-xs text-navy-900/50">{p.readMinutes} dk okuma</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
