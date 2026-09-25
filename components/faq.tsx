import { Icon } from "./icons";

export type FaqItem = { q: string; a: string };

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.q} className="card group overflow-hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-navy-950 [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="shrink-0 rounded-full bg-cloud-100 p-1.5 text-brand-600 transition-transform group-open:rotate-180">
              <Icon name="chevronDown" className="h-4 w-4" />
            </span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-6 text-navy-900/75">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
