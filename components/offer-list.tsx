"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Offer } from "@/lib/db";
import { getInsurer } from "@/lib/insurers";
import { formatTL } from "@/lib/format";
import { Icon } from "./icons";

type SortKey = "price" | "rating";

export function OfferList({ quoteId, offers }: { quoteId: string; offers: Offer[] }) {
  const [sort, setSort] = useState<SortKey>("price");
  const [selected, setSelected] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);

  const sorted = useMemo(() => {
    const list = [...offers];
    if (sort === "price") list.sort((a, b) => a.price - b.price);
    else list.sort((a, b) => (getInsurer(b.insurerId)?.rating ?? 0) - (getInsurer(a.insurerId)?.rating ?? 0));
    return list;
  }, [offers, sort]);

  function toggleCompare(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length >= 3 ? prev : [...prev, id]
    );
  }

  const compared = offers.filter((o) => selected.includes(o.id));
  const cheapest = Math.min(...offers.map((o) => o.price));

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-navy-900/60">
          <strong className="text-navy-950">{offers.length} teklif</strong> bulundu — en uygun{" "}
          <strong className="text-emerald-600">{formatTL(cheapest)}</strong>
        </p>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-navy-900/50">Sırala:</span>
          <button
            className={`badge ${sort === "price" ? "bg-brand-600 text-white" : "bg-cloud-100 text-navy-900"}`}
            onClick={() => setSort("price")}
          >
            En uygun fiyat
          </button>
          <button
            className={`badge ${sort === "rating" ? "bg-brand-600 text-white" : "bg-cloud-100 text-navy-900"}`}
            onClick={() => setSort("rating")}
          >
            En yüksek puan
          </button>
        </div>
      </div>

      <ul className="space-y-4">
        {sorted.map((offer) => {
          const insurer = getInsurer(offer.insurerId);
          if (!insurer) return null;
          const isSelected = selected.includes(offer.id);
          return (
            <li
              key={offer.id}
              className={`card relative flex flex-col gap-4 p-5 transition-all hover:shadow-lift sm:flex-row sm:items-center ${
                offer.bestSeller ? "ring-2 ring-accent-500/60" : ""
              }`}
            >
              {offer.bestSeller && (
                <span className="badge absolute -top-3 left-5 bg-accent-500 text-white">
                  <Icon name="sparkle" className="h-3 w-3" /> En çok tercih edilen
                </span>
              )}

              <div className="flex items-center gap-3 sm:w-52">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: insurer.color }}
                >
                  {insurer.short}
                </span>
                <div>
                  <p className="font-bold text-navy-950">{insurer.name}</p>
                  <p className="flex items-center gap-1 text-xs text-navy-900/60">
                    <Icon name="star" className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {insurer.rating.toFixed(1)} / 5
                  </p>
                </div>
              </div>

              <ul className="flex-1 space-y-1.5">
                {offer.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-navy-900/70">
                    <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-emerald-500" strokeWidth={2.5} />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:justify-center">
                <div className="text-right">
                  <p className="text-2xl font-bold text-navy-950">{formatTL(offer.price)}</p>
                  <p className="text-xs text-navy-900/50">veya 12 x {formatTL(offer.monthly)}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Link href={`/satin-al/${quoteId}/${offer.id}`} className="btn-primary btn-md whitespace-nowrap">
                    Satın Al
                  </Link>
                  <label className="flex cursor-pointer items-center gap-1.5 text-xs text-navy-900/60">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleCompare(offer.id)}
                      className="h-3.5 w-3.5 accent-brand-600"
                    />
                    Karşılaştır
                  </label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Karşılaştırma çubuğu */}
      {selected.length >= 2 && !compareOpen && (
        <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
          <button
            className="btn-primary btn-lg shadow-lift"
            onClick={() => setCompareOpen(true)}
          >
            <Icon name="compare" className="h-5 w-5" />
            {selected.length} Teklifi Karşılaştır
          </button>
        </div>
      )}

      {/* Karşılaştırma paneli */}
      {compareOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-navy-950/50 p-4 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Teklif karşılaştırma"
          onClick={() => setCompareOpen(false)}
        >
          <div className="card max-h-[85vh] w-full max-w-3xl overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-navy-950">Teklif Karşılaştırma</h3>
              <button className="btn-ghost btn-sm" onClick={() => setCompareOpen(false)} aria-label="Kapat">
                <Icon name="x" className="h-5 w-5" />
              </button>
            </div>
            <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${compared.length}, minmax(0, 1fr))` }}>
              {compared.map((offer) => {
                const insurer = getInsurer(offer.insurerId);
                return (
                  <div key={offer.id} className="rounded-xl border border-navy-900/10 p-4">
                    <span
                      className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg text-xs font-bold text-white"
                      style={{ backgroundColor: insurer?.color }}
                    >
                      {insurer?.short}
                    </span>
                    <p className="text-sm font-bold text-navy-950">{insurer?.name}</p>
                    <p className="mb-1 flex items-center gap-1 text-xs text-navy-900/60">
                      <Icon name="star" className="h-3 w-3 text-amber-400" /> {insurer?.rating.toFixed(1)}
                    </p>
                    <p className="my-3 text-xl font-bold text-brand-700">{formatTL(offer.price)}</p>
                    <ul className="mb-4 space-y-1.5">
                      {offer.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-1.5 text-xs text-navy-900/70">
                          <Icon name="check" className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500" strokeWidth={2.5} />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/satin-al/${quoteId}/${offer.id}`} className="btn-primary btn-sm w-full">
                      Satın Al
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
