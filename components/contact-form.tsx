"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import { Icon } from "./icons";

type Props = {
  defaultTopic?: string;
  compact?: boolean;
};

export function ContactForm({ defaultTopic, compact = false }: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    topic: defaultTopic ?? "",
    message: "",
    website: "",
  });
  const [kvkk, setKvkk] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const topicLabel = products.find((p) => p.slug === form.topic)?.name ?? form.topic;
  const waText = encodeURIComponent(
    `Merhaba, ${topicLabel ? topicLabel + " hakkında" : "sigorta hakkında"} bilgi almak istiyorum.${
      form.name ? ` Adım ${form.name}.` : ""
    }`
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (form.name.trim().length < 2) return setError("Lütfen adınızı ve soyadınızı yazın.");
    if (!/^0?5\d{9}$/.test(form.phone.replace(/[\s()-]/g, "")))
      return setError("Lütfen geçerli bir cep telefonu girin (05xx xxx xx xx).");
    if (!form.topic) return setError("Lütfen bir sigorta türü seçin.");
    if (!kvkk) return setError("Devam etmek için KVKK aydınlatma metnini onaylayın.");

    setSending(true);
    try {
      const res = await fetch("/api/iletisim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, topic: topicLabel }),
      });
      if (!res.ok) throw new Error();
      setDone(true);
    } catch {
      setError("Talebiniz iletilemedi. Lütfen tekrar deneyin veya bizi arayın.");
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="card p-8 text-center" role="status">
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Icon name="check" className="h-8 w-8" strokeWidth={2.5} />
        </span>
        <h3 className="text-xl font-bold text-navy-950">Talebiniz bize ulaştı</h3>
        <p className="mt-2 text-sm leading-6 text-navy-900/70">
          Danışmanımız 1 iş günü içinde <strong>{form.phone}</strong> numarasından sizi arayacak.
          Acele ediyorsanız hemen WhatsApp&apos;tan yazabilirsiniz.
        </p>
        <a
          href={`${site.whatsappHref}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-md mt-5"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          WhatsApp&apos;tan Yazın
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`card ${compact ? "p-5" : "p-6 sm:p-8"}`} noValidate>
      <h3 className={`font-bold text-navy-950 ${compact ? "text-lg" : "text-xl"}`}>
        {compact ? "Bilgi ve teklif isteyin" : "Bilgi Talep Formu"}
      </h3>
      <p className="mt-1 mb-5 text-sm text-navy-900/60">
        Bilgilerinizi bırakın, danışmanımız sizi arasın. Ücretsiz ve yükümlülük yok.
      </p>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label className="label" htmlFor="cf-name">Ad Soyad</label>
          <input
            id="cf-name"
            className="input"
            placeholder="Adınız ve soyadınız"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            autoComplete="name"
          />
        </div>
        <div>
          <label className="label" htmlFor="cf-phone">Cep Telefonu</label>
          <input
            id="cf-phone"
            type="tel"
            className="input"
            placeholder="05xx xxx xx xx"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            autoComplete="tel"
          />
        </div>
        <div>
          <label className="label" htmlFor="cf-email">E-posta (isteğe bağlı)</label>
          <input
            id="cf-email"
            type="email"
            className="input"
            placeholder="ornek@eposta.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            autoComplete="email"
          />
        </div>
        <div>
          <label className="label" htmlFor="cf-topic">Sigorta Türü</label>
          <select
            id="cf-topic"
            className="input"
            value={form.topic}
            onChange={(e) => setForm({ ...form, topic: e.target.value })}
          >
            <option value="">Seçiniz</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
            <option value="Diğer">Diğer / Birden fazla</option>
          </select>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className="label" htmlFor="cf-message">Mesajınız (isteğe bağlı)</label>
          <textarea
            id="cf-message"
            className="input min-h-24 resize-y"
            placeholder="Örn. 2021 model aracım için kasko yenilemesi, mevcut poliçem Mart'ta bitiyor."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={2000}
          />
        </div>
        {/* Bot tuzağı — kullanıcılar görmez */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
          className="hidden"
          aria-hidden="true"
        />
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-navy-900/70">
        <input
          type="checkbox"
          checked={kvkk}
          onChange={(e) => setKvkk(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-brand-600"
        />
        <span>
          Kişisel verilerimin, sigorta teklifi hazırlanması ve iletişim amacıyla KVKK Aydınlatma
          Metni kapsamında işlenmesini kabul ediyorum.
        </span>
      </label>

      {error && (
        <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700" role="alert">
          {error}
        </p>
      )}

      <div className={`mt-6 flex gap-3 ${compact ? "flex-col" : "flex-col sm:flex-row"}`}>
        <button type="submit" className="btn-accent btn-lg flex-1" disabled={sending}>
          {sending ? "Gönderiliyor..." : "Beni Arayın"}
          {!sending && <Icon name="arrowRight" className="h-5 w-5" />}
        </button>
        <a
          href={`${site.whatsappHref}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline btn-lg flex-1"
        >
          <Icon name="whatsapp" className="h-5 w-5 text-emerald-500" />
          WhatsApp
        </a>
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-navy-900/50">
        <Icon name="lock" className="h-3.5 w-3.5" />
        Bilgileriniz yalnızca sizinle iletişim için kullanılır, üçüncü kişilerle paylaşılmaz.
      </p>
    </form>
  );
}
