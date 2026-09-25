"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";

type Me = { name: string; email: string; phone: string } | null;

export default function ProfilePage() {
  const [me, setMe] = useState<Me>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => {
        if (d.user) {
          setMe(d.user);
          setName(d.user.name);
          setPhone(d.user.phone ?? "");
        }
      });
  }, []);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    setError(null);
    try {
      const res = await fetch("/api/auth/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
      if (!res.ok) throw new Error();
      setSaved(true);
    } catch {
      setError("Bilgiler kaydedilemedi. Lütfen tekrar deneyin.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-navy-950">Profil Bilgilerim</h1>

      <form onSubmit={save} className="card max-w-lg p-6 sm:p-8">
        <div className="space-y-4">
          <div>
            <label className="label" htmlFor="name">Ad Soyad</label>
            <input
              id="name"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="email">E-posta</label>
            <input id="email" className="input bg-cloud-50" value={me?.email ?? ""} disabled />
            <p className="mt-1 text-xs text-navy-900/50">E-posta adresi değiştirilemez.</p>
          </div>
          <div>
            <label className="label" htmlFor="phone">Cep Telefonu</label>
            <input
              id="phone"
              type="tel"
              className="input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        {saved && (
          <p className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">
            <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
            Bilgileriniz güncellendi.
          </p>
        )}
        {error && (
          <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="btn-primary btn-md mt-6" disabled={saving || !me}>
          {saving ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
        </button>
      </form>
    </div>
  );
}
