"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Icon } from "./icons";

export function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") ?? "/hesabim";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Giriş başarısız");
      router.push(next);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Giriş başarısız");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="card p-6 sm:p-8">
      <h1 className="text-2xl font-bold text-navy-950">Giriş Yap</h1>
      <p className="mt-1 mb-6 text-sm text-navy-900/60">
        Tekliflerinizi ve poliçelerinizi görüntülemek için giriş yapın.
      </p>

      <div className="space-y-4">
        <div>
          <label className="label" htmlFor="email">E-posta</label>
          <input
            id="email"
            type="email"
            className="input"
            placeholder="ornek@eposta.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label className="label" htmlFor="password">Şifre</label>
          <input
            id="password"
            type="password"
            className="input"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
      </div>

      <div className="mt-3 text-right">
        <Link href="/sifremi-unuttum" className="text-xs font-semibold text-brand-700 hover:underline">
          Şifremi unuttum
        </Link>
      </div>

      {error && (
        <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary btn-lg mt-6 w-full" disabled={loading}>
        {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
      </button>

      <div className="mt-4 rounded-xl bg-cloud-50 p-3 text-center text-xs text-navy-900/60">
        <Icon name="sparkle" className="mr-1 inline h-3.5 w-3.5 text-accent-500" />
        Demo hesap: <strong>demo@ustasigortaci.com</strong> / <strong>Demo1234</strong>
      </div>

      <p className="mt-6 text-center text-sm text-navy-900/60">
        Hesabınız yok mu?{" "}
        <Link href="/kayit" className="font-bold text-brand-700 hover:underline">
          Üye Olun
        </Link>
      </p>
    </form>
  );
}

export function RegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [kvkk, setKvkk] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!kvkk) {
      setError("Üyelik sözleşmesini ve KVKK metnini onaylamanız gerekir.");
      return;
    }
    if (form.password.length < 8) {
      setError("Şifreniz en az 8 karakter olmalıdır.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Kayıt başarısız");
      router.push("/hesabim");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Kayıt başarısız");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="card p-6 sm:p-8">
      <h1 className="text-2xl font-bold text-navy-950">Üye Ol</h1>
      <p className="mt-1 mb-6 text-sm text-navy-900/60">
        Tekliflerinizi kaydedin, poliçelerinizi tek yerden yönetin.
      </p>

      <div className="space-y-4">
        <div>
          <label className="label" htmlFor="name">Ad Soyad</label>
          <input
            id="name"
            className="input"
            placeholder="Adınız ve soyadınız"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            autoComplete="name"
          />
        </div>
        <div>
          <label className="label" htmlFor="regEmail">E-posta</label>
          <input
            id="regEmail"
            type="email"
            className="input"
            placeholder="ornek@eposta.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label className="label" htmlFor="phone">Cep Telefonu</label>
          <input
            id="phone"
            type="tel"
            className="input"
            placeholder="05xx xxx xx xx"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            autoComplete="tel"
          />
        </div>
        <div>
          <label className="label" htmlFor="regPassword">Şifre</label>
          <input
            id="regPassword"
            type="password"
            className="input"
            placeholder="En az 8 karakter"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            autoComplete="new-password"
          />
        </div>
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-navy-900/70">
        <input
          type="checkbox"
          checked={kvkk}
          onChange={(e) => setKvkk(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-brand-600"
        />
        <span>
          Üyelik Sözleşmesi ile KVKK Aydınlatma Metni&apos;ni okudum, kabul ediyorum.
        </span>
      </label>

      {error && (
        <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary btn-lg mt-6 w-full" disabled={loading}>
        {loading ? "Hesap oluşturuluyor..." : "Üye Ol"}
      </button>

      <p className="mt-6 text-center text-sm text-navy-900/60">
        Zaten üye misiniz?{" "}
        <Link href="/giris" className="font-bold text-brand-700 hover:underline">
          Giriş Yapın
        </Link>
      </p>
    </form>
  );
}
