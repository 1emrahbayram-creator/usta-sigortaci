import Link from "next/link";
import { Icon } from "./icons";
import { site } from "@/lib/site";

export type Crumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Ana Sayfa", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${site.url}${c.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Sayfa yolu" className="text-xs text-navy-900/50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1">
        {all.map((c, i) => (
          <li key={c.name} className="flex items-center gap-1">
            {i > 0 && <Icon name="chevronRight" className="h-3 w-3" />}
            {c.href && i < all.length - 1 ? (
              <Link href={c.href} className="hover:text-brand-700">{c.name}</Link>
            ) : (
              <span className="font-semibold text-navy-900/80" aria-current="page">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
