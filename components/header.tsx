"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { site } from "@/lib/site";
import { products, categoryLabels, type ProductCategory } from "@/lib/products";

type SessionUser = { id: string; name: string; email: string } | null;

const categories: ProductCategory[] = ["arac", "saglik", "konut", "yasam"];

export function Header() {
  const [user, setUser] = useState<SessionUser>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => setUser(d.user ?? null))
      .catch(() => setUser(null));
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setAccountOpen(false);
  }, [pathname]);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setAccountOpen(false);
    router.push("/");
    router.refresh();
  }

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
                      <p className="text-sm font-semibold text-navy-900">14 sigorta türünde anında teklif</p>
                      <Link href="/sigortalar" className="btn-primary btn-sm">
                        Tümünü Gör
                        <Icon name="arrowRight" className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href="/sigorta-sirketleri" className="btn-ghost btn-md">Sigorta Şirketleri</Link>
            <Link href="/hasar-aninda" className="btn-ghost btn-md">Hasar Anında</Link>
            <Link href="/blog" className="btn-ghost btn-md">Blog</Link>
            <Link href="/sss" className="btn-ghost btn-md">S.S.S</Link>
          </nav>

          <div className="flex items-center gap-2">
            {user ? (
              <div className="relative hidden sm:block">
                <button
                  className="btn-outline btn-sm"
                  onClick={() => setAccountOpen((v) => !v)}
                  aria-expanded={accountOpen}
                >
                  <Icon name="user" className="h-4 w-4" />
                  {user.name.split(" ")[0]}
                  <Icon name="chevronDown" className="h-3.5 w-3.5" />
                </button>
                {accountOpen && (
                  <div className="card absolute right-0 top-full mt-2 w-56 p-2 shadow-lift">
                    <Link href="/hesabim" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-cloud-100">
                      <Icon name="user" className="h-4 w-4 text-brand-600" /> Hesabım
                    </Link>
                    <Link href="/hesabim/tekliflerim" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-cloud-100">
                      <Icon name="document" className="h-4 w-4 text-brand-600" /> Tekliflerim
                    </Link>
                    <Link href="/hesabim/policelerim" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-cloud-100">
                      <Icon name="shieldCheck" className="h-4 w-4 text-brand-600" /> Poliçelerim
                    </Link>
                    <button onClick={logout} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50">
                      <Icon name="logout" className="h-4 w-4" /> Çıkış Yap
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/giris" className="btn-outline btn-sm hidden sm:inline-flex">
                <Icon name="user" className="h-4 w-4" />
                Giriş Yap
              </Link>
            )}
            <Link href="/sigortalar" className="btn-accent btn-sm hidden sm:inline-flex">
              Hemen Teklif Al
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
                <Link href="/sigorta-sirketleri" className="block rounded-lg px-2 py-2 text-sm font-semibold">Sigorta Şirketleri</Link>
                <Link href="/hasar-aninda" className="block rounded-lg px-2 py-2 text-sm font-semibold">Hasar Anında</Link>
                <Link href="/blog" className="block rounded-lg px-2 py-2 text-sm font-semibold">Blog</Link>
                <Link href="/sss" className="block rounded-lg px-2 py-2 text-sm font-semibold">Sık Sorulan Sorular</Link>
              </div>
              <div className="flex gap-2 border-t border-navy-900/8 pt-4">
                {user ? (
                  <>
                    <Link href="/hesabim" className="btn-outline btn-md flex-1">Hesabım</Link>
                    <button onClick={logout} className="btn-ghost btn-md text-red-600">Çıkış</button>
                  </>
                ) : (
                  <Link href="/giris" className="btn-outline btn-md flex-1">Giriş Yap</Link>
                )}
                <Link href="/sigortalar" className="btn-accent btn-md flex-1">Teklif Al</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
