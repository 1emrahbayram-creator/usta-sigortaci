import type { Metadata, Viewport } from "next";
import { Sora, Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Sigorta Teklifi Karşılaştır, Online Satın Al`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "sigorta",
    "sigorta teklifi",
    "kasko",
    "trafik sigortası",
    "DASK",
    "sağlık sigortası",
    "sigorta karşılaştırma",
    "online sigorta",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Sigorta Teklifi Karşılaştır, Online Satın Al`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Sigorta Teklifi Karşılaştır`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0e2d6b",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: site.name,
  legalName: site.legalName,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}${site.logo}`,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Maslak Mah. Büyükdere Cad. No: 237",
    addressLocality: "Sarıyer",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  openingHours: ["Mo-Fr 08:30-20:00", "Sa 09:00-18:00"],
  sameAs: Object.values(site.social),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "tr-TR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${sora.variable} ${figtree.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />

        {/* WhatsApp sabit butonu */}
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile yazın"
          className="fixed right-5 bottom-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lift transition-transform hover:scale-110"
        >
          <Icon name="whatsapp" className="h-7 w-7" strokeWidth={1.6} />
        </a>
      </body>
    </html>
  );
}
