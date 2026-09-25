import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Icon } from "@/components/icons";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hesabım",
  robots: { index: false, follow: false },
};

const nav = [
  { href: "/hesabim", label: "Genel Bakış", icon: "user" },
  { href: "/hesabim/tekliflerim", label: "Tekliflerim", icon: "document" },
  { href: "/hesabim/policelerim", label: "Poliçelerim", icon: "shieldCheck" },
  { href: "/hesabim/profil", label: "Profil Bilgilerim", icon: "lock" },
];

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user) redirect("/giris?next=/hesabim");

  return (
    <div className="bg-cloud-50 min-h-screen">
      <div className="container-x grid gap-8 py-10 lg:grid-cols-[260px_1fr]">
        <aside>
          <div className="card mb-4 flex items-center gap-3 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-base font-bold text-white">
              {user.name[0]?.toUpperCase()}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-navy-950">{user.name}</p>
              <p className="truncate text-xs text-navy-900/50">{user.email}</p>
            </div>
          </div>
          <nav className="card space-y-1 p-2" aria-label="Hesap menüsü">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                <Icon name={item.icon} className="h-4.5 w-4.5 text-brand-600" />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
