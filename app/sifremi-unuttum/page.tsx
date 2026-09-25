"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/icons";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="hero-bg min-h-[70vh]">
      <div className="container-x flex justify-center py-16">
        <div className="card w-full max-w-md p-6 sm:p-8">
          {sent ? (
            <div className="text-center">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Icon name="mail" className="h-7 w-7" />
              </span>
              <h1 className="text-xl font-bold text-navy-950">E-postanızı kontrol edin</h1>
              <p className="mt-2 text-sm text-navy-900/60">
                <strong>{email}</strong> adresine şifre sıfırlama bağlantısı gönderdik.
                Birkaç dakika içinde ulaşmazsa spam klasörünü kontrol edin.
              </p>
              <Link href="/giris" className="btn-primary btn-md mt-6">
                Girişe Dön
              </Link>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
            >
              <h1 className="text-2xl font-bold text-navy-950">Şifremi Unuttum</h1>
              <p className="mt-1 mb-6 text-sm text-navy-900/60">
                Kayıtlı e-posta adresinizi girin; sıfırlama bağlantısı gönderelim.
              </p>
              <label className="label" htmlFor="email">E-posta</label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="ornek@eposta.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary btn-lg mt-6 w-full">
                Sıfırlama Bağlantısı Gönder
              </button>
              <p className="mt-6 text-center text-sm text-navy-900/60">
                <Link href="/giris" className="font-bold text-brand-700 hover:underline">
                  Girişe dön
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
