"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatTL } from "@/lib/format";
import { Icon } from "./icons";

export function CheckoutForm({
  quoteId,
  offerId,
  price,
}: {
  quoteId: string;
  offerId: string;
  price: number;
}) {
  const router = useRouter();
  const [card, setCard] = useState({ no: "", name: "", exp: "", cvv: "" });
  const [error, setError] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);
  const [done, setDone] = useState<string | null>(null);

  function formatCardNo(v: string) {
    return v.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
  }
  function formatExp(v: string) {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  }

  async function pay() {
    setError(null);
    if (card.no.replace(/\s/g, "").length !== 16) return setError("Kart numarası 16 haneli olmalıdır");
    if (!card.name.trim()) return setError("Kart üzerindeki adı girin");
    if (!/^\d{2}\/\d{2}$/.test(card.exp)) return setError("Son kullanma tarihini AA/YY formatında girin");
    if (!/^\d{3}$/.test(card.cvv)) return setError("CVV 3 haneli olmalıdır");

    setPaying(true);
    try {
      const res = await fetch("/api/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quoteId, offerId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Ödeme başarısız");
      setDone(data.policyNo as string);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Ödeme sırasında bir sorun oluştu");
      setPaying(false);
    }
  }

  if (done) {
    return (
      <div className="card p-8 text-center">
        <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Icon name="shieldCheck" className="h-9 w-9" strokeWidth={2} />
        </span>
        <h2 className="text-2xl font-bold text-navy-950">Poliçeniz Hazır! 🎉</h2>
        <p className="mt-2 text-sm text-navy-900/70">
          Poliçe numaranız: <strong className="text-navy-950">{done}</strong>
          <br />
          Poliçe belgeniz e-posta adresinize gönderildi.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button className="btn-primary btn-md" onClick={() => router.push("/hesabim/policelerim")}>
            Poliçelerime Git
          </button>
          <button className="btn-outline btn-md" onClick={() => router.push("/")}>
            Ana Sayfa
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8">
      <h2 className="mb-1 text-lg font-bold text-navy-950">Kart ile Öde</h2>
      <p className="mb-6 text-sm text-navy-900/60">
        Ödemeniz 3D Secure ile doğrulanır; kart bilgileriniz saklanmaz.
      </p>

      <div className="grid gap-4">
        <div>
          <label className="label" htmlFor="cardNo">Kart Numarası</label>
          <input
            id="cardNo"
            className="input tracking-widest"
            inputMode="numeric"
            placeholder="0000 0000 0000 0000"
            value={card.no}
            onChange={(e) => setCard({ ...card, no: formatCardNo(e.target.value) })}
          />
        </div>
        <div>
          <label className="label" htmlFor="cardName">Kart Üzerindeki Ad</label>
          <input
            id="cardName"
            className="input"
            placeholder="AD SOYAD"
            value={card.name}
            onChange={(e) => setCard({ ...card, name: e.target.value.toUpperCase() })}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label" htmlFor="exp">Son Kullanma</label>
            <input
              id="exp"
              className="input"
              inputMode="numeric"
              placeholder="AA/YY"
              value={card.exp}
              onChange={(e) => setCard({ ...card, exp: formatExp(e.target.value) })}
            />
          </div>
          <div>
            <label className="label" htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              className="input"
              inputMode="numeric"
              type="password"
              placeholder="•••"
              maxLength={3}
              value={card.cvv}
              onChange={(e) => setCard({ ...card, cvv: e.target.value.replace(/\D/g, "") })}
            />
          </div>
        </div>
      </div>

      {error && (
        <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700" role="alert">
          {error}
        </p>
      )}

      <button className="btn-accent btn-lg mt-6 w-full" onClick={pay} disabled={paying}>
        {paying ? "Ödeme işleniyor..." : (
          <>
            <Icon name="lock" className="h-5 w-5" />
            {formatTL(price)} Güvenli Öde
          </>
        )}
      </button>

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-navy-900/50">
        <Icon name="lock" className="h-3.5 w-3.5" />
        256-bit SSL ile şifrelenmiş güvenli ödeme — demo ortamında gerçek tahsilat yapılmaz
      </p>
    </div>
  );
}
