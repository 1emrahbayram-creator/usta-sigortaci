import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Usta Sigortacı iletişim bilgileri: çağrı merkezi, WhatsApp destek hattı, e-posta ve ofis adresi. Hafta içi 08:30-20:00 hizmetinizdeyiz.",
  alternates: { canonical: "/iletisim" },
};

const channels = [
  {
    icon: "phoneCall",
    title: "Telefon",
    value: site.phone,
    href: site.phoneHref,
    desc: site.workingHours,
  },
  {
    icon: "whatsapp",
    title: "WhatsApp Destek",
    value: site.whatsapp,
    href: site.whatsappHref,
    desc: "Mesajınıza ortalama 5 dakikada dönüş",
  },
  {
    icon: "mail",
    title: "E-posta",
    value: site.email,
    href: `mailto:${site.email}`,
    desc: "24 saat içinde yanıtlanır",
  },
  {
    icon: "bell",
    title: "Hasar Hattı (7/24)",
    value: site.phone,
    href: site.phoneHref,
    desc: "Hasar ihbarı ve acil yol yardım",
  },
];

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `${site.name} İletişim`,
    url: `${site.url}/iletisim`,
    mainEntity: {
      "@type": "InsuranceAgency",
      name: site.name,
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.addressParts.street,
        addressLocality: site.addressParts.district,
        addressRegion: site.addressParts.city,
        postalCode: site.addressParts.postalCode,
        addressCountry: site.addressParts.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
      hasMap: site.mapsDirectionsUrl,
    },
  };

  return (
    <div className="container-x py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Breadcrumbs items={[{ name: "İletişim" }]} />

      <div className="mt-6 mb-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-navy-950 sm:text-4xl">Bize Ulaşın</h1>
        <p className="mt-3 text-navy-900/60">
          Teklif, poliçe veya hasar süreçleriyle ilgili tüm sorularınız için buradayız.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((c) => (
          <a
            key={c.title}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="card group p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <Icon name={c.icon} className="h-6 w-6" />
            </span>
            <h2 className="font-bold text-navy-950">{c.title}</h2>
            <p className="mt-1 text-sm font-semibold text-brand-700">{c.value}</p>
            <p className="mt-1 text-xs text-navy-900/50">{c.desc}</p>
          </a>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="mb-3 flex items-center gap-2 font-bold text-navy-950">
            <Icon name="mapPin" className="h-5 w-5 text-brand-600" />
            Merkez Ofis
          </h2>
          <p className="text-sm leading-6 text-navy-900/70">{site.address}</p>
          <a
            href={site.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline"
          >
            <Icon name="arrowRight" className="h-4 w-4" />
            Google Haritalar ile yol tarifi al
          </a>
          <div className="mt-4 flex items-center gap-4 rounded-xl bg-cloud-100 p-4">
            <Image
              src="/brand/qr.png"
              alt="ustasigortaci.com QR kodu"
              width={96}
              height={96}
              unoptimized
              className="h-24 w-24 shrink-0 rounded-lg bg-white p-1"
            />
            <p className="text-sm leading-6 text-navy-900/70">
              Telefonunuzla okutun; siteyi, WhatsApp hattımızı ve adresimizi cebinizde taşıyın.
            </p>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="mb-3 flex items-center gap-2 font-bold text-navy-950">
            <Icon name="clock" className="h-5 w-5 text-brand-600" />
            Çalışma Saatleri
          </h2>
          <ul className="space-y-3 text-sm text-navy-900/70">
            <li className="flex justify-between border-b border-navy-900/8 pb-3">
              <span>Hafta içi</span>
              <strong className="text-navy-950">08:30 – 20:00</strong>
            </li>
            <li className="flex justify-between border-b border-navy-900/8 pb-3">
              <span>Cumartesi</span>
              <strong className="text-navy-950">09:00 – 18:00</strong>
            </li>
            <li className="flex justify-between border-b border-navy-900/8 pb-3">
              <span>Pazar</span>
              <strong className="text-navy-950">Kapalı</strong>
            </li>
            <li className="flex justify-between">
              <span>Hasar Hattı</span>
              <strong className="text-emerald-600">7/24 Açık</strong>
            </li>
          </ul>
        </div>
      </div>

      <section className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.6fr]" aria-labelledby="ofis-harita">
        <div className="card flex flex-col p-6">
          <h2 className="mb-4 flex items-center gap-2 font-bold text-navy-950">
            <Icon name="user" className="h-5 w-5 text-brand-600" />
            Size Kim Yardımcı Olacak?
          </h2>
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy-900 font-display text-xl font-bold text-white">
              {site.founder.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <div>
              <p className="text-lg font-bold text-navy-950">{site.founder.name}</p>
              <p className="text-sm text-navy-900/60">{site.founder.title}</p>
            </div>
          </div>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <a href={site.founder.phoneHref} className="flex items-center gap-2 text-navy-900 hover:text-brand-700">
                <Icon name="phone" className="h-4 w-4 text-brand-600" /> {site.founder.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.founder.email}`} className="flex items-center gap-2 text-navy-900 hover:text-brand-700">
                <Icon name="mail" className="h-4 w-4 text-brand-600" /> {site.founder.email}
              </a>
            </li>
            <li>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-navy-900 hover:text-brand-700"
              >
                <Icon name="whatsapp" className="h-4 w-4 text-emerald-500" /> WhatsApp ile yazın
              </a>
            </li>
          </ul>
          <p className="mt-auto pt-5 text-xs leading-5 text-navy-900/50">
            Teklif, poliçe ve hasar süreçlerinizde doğrudan kurucu ortağımızla görüşürsünüz; aracı yok, bekleme yok.
          </p>
        </div>

        <div className="card overflow-hidden p-0">
          <div className="flex items-center justify-between gap-3 px-6 py-4">
            <h2 id="ofis-harita" className="flex items-center gap-2 font-bold text-navy-950">
              <Icon name="mapPin" className="h-5 w-5 text-brand-600" />
              Ofisimiz Haritada
            </h2>
            <a
              href={site.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-sm whitespace-nowrap"
            >
              Yol Tarifi
            </a>
          </div>
          <iframe
            title={`${site.legalName} ofis konumu — ${site.address}`}
            src={site.mapsEmbedUrl}
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block h-[360px] w-full border-0 border-t border-navy-900/8"
          />
        </div>
      </section>
    </div>
  );
}
