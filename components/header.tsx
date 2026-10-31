"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { site } from "@/lib/site";
import { products, categoryLabels, type ProductCategory } from "@/lib/products";

const categories: ProductCategory[] = ["arac", "saglik", "konut", "yasam"];

const navLinks = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/sigorta-sirketleri", label: "Sigorta Şirketleri" },
  { href: "/hasar-aninda", label: "Hasar Anında" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Üst bilgi çubuğu */}
      <div className="bg-navy-950 text-white/90">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <a href={site.phoneHref} className="flex items-center gap-1.5 font-semibold hover:text-white">
              <Icon name="phoneCall" className="h-3.5 w-3.5" />
              {site.phone}
            </a>
            <span className="hidden items-center gap-1.5 text-white/60 sm:flex">
              <Icon name="clock" className="h-3.5 w-3.5" />
              {site.workingHours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/hasar-aninda" className="hidden items-center gap-1.5 hover:text-white sm:flex">
              <Icon name="bell" className="h-3.5 w-3.5" />
              Hasar Anında
            </Link>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200"
            >
              <Icon name="whatsapp" className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Ana menü */}
      <div className="border-b border-navy-900/8 bg-white/95 backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} ana sayfa`}>
            <Image
              src="/brand/logo-horizontal-light.svg"
              alt={site.legalName}
              width={190}
              height={40}
              priority
              unoptimized
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                className="btn-ghost btn-md"
                aria-expanded={megaOpen}
                onClick={() => setMegaOpen((v) => !v)}
              >
                Sigortalar
                <Icon name="chevronDown" className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
              </button>
              {megaOpen && (
                <div className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-2">
                  <div className="card grid grid-cols-2 gap-6 p-6 shadow-lift md:grid-cols-4">
                    {categories.map((cat) => (
                      <div key={cat}>
                        <p className="mb-3 text-xs font-bold tracking-wide text-navy-900/50 uppercase">
                          {categoryLabels[cat]}
                        </p>
                        <ul className="space-y-1">
                          {products
                            .filter((p) => p.category === cat)
                            .map((p) => (
                              <li key={p.slug}>
                                <Link
                                  href={`/sigorta/${p.slug}`}
                                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-navy-900 hover:bg-brand-50 hover:text-brand-700"
                                >
                                  <Icon name={p.icon} className="h-4.5 w-4.5 text-brand-600" />
                                  {p.shortName}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-2 mt-2 flex items-center justify-between rounded-xl bg-cloud-100 px-4 py-3 md:col-span-4">
                      <p className="text-sm font-semibold text-navy-900">14 branşta sigorta danışmanlığı</p>
                      <Link href="/sigortalar" className="btn-primary btn-sm">
                        Tümünü Gör
                        <Icon name="arrowRight" className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="btn-ghost btn-md">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={site.phoneHref} className="btn-outline btn-sm hidden xl:inline-flex">
              <Icon name="phoneCall" className="h-4 w-4" />
              {site.phone}
            </a>
            <Link href="/iletisim" className="btn-accent btn-sm hidden sm:inline-flex">
              Bize Ulaşın
            </Link>
            <button
              className="btn-ghost btn-sm lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileOpen}
            >
              <Icon name={mobileOpen ? "x" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobil menü */}
        {mobileOpen && (
          <div className="border-t border-navy-900/8 bg-white lg:hidden">
            <div className="container-x max-h-[70vh] space-y-4 overflow-y-auto py-4">
              {categories.map((cat) => (
                <div key={cat}>
                  <p className="mb-2 text-xs font-bold tracking-wide text-navy-900/50 uppercase">
                    {categoryLabels[cat]}
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {products
                      .filter((p) => p.category === cat)
                      .map((p) => (
                        <Link
                          key={p.slug}
                          href={`/sigorta/${p.slug}`}
                          className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-navy-900 hover:bg-brand-50"
                        >
                          <Icon name={p.icon} className="h-4.5 w-4.5 text-brand-600" />
                          {p.shortName}
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
              <div className="space-y-1 border-t border-navy-900/8 pt-3">
                {navLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block rounded-lg px-2 py-2 text-sm font-semibold">
                    {l.label}
                  </Link>
                ))}
                <Link href="/sss" className="block rounded-lg px-2 py-2 text-sm font-semibold">Sık Sorulan Sorular</Link>
                <Link href="/iletisim" className="block rounded-lg px-2 py-2 text-sm font-semibold">İletişim</Link>
              </div>
              <div className="flex gap-2 border-t border-navy-900/8 pt-4">
                <a href={site.phoneHref} className="btn-outline btn-md flex-1">
                  <Icon name="phoneCall" className="h-4 w-4" />
                  Ara
                </a>
                <Link href="/iletisim" className="btn-accent btn-md flex-1">Bize Ulaşın</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
