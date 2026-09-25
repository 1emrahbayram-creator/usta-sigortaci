import { insurers } from "./insurers";
import { getProduct } from "./products";
import { newId, type Offer } from "./db";

const highlightPool: Record<string, string[]> = {
  arac: [
    "7/24 yol yardım dahil",
    "Anlaşmalı serviste %100 onarım",
    "İkame araç 14 gün",
    "Mini onarım hasarsızlığı bozmaz",
    "Cam hasarında muafiyetsiz onarım",
    "Deprem ve sel teminatı dahil",
    "Anahtar kaybı teminatı",
    "Yeni değer klozu (0 km)",
  ],
  saglik: [
    "Geniş anlaşmalı hastane ağı",
    "Yılda 1 ücretsiz check-up",
    "7/24 online doktor danışmanlığı",
    "Doğum teminatı eklenebilir",
    "Yenileme garantisi imkânı",
    "Diş paketi hediye",
  ],
  konut: [
    "7/24 acil asistans (çilingir, tesisat)",
    "Eşya teminatı dahil",
    "Enflasyona karşı otomatik güncelleme",
    "Komşuluk sorumluluğu dahil",
    "Cam kırılması muafiyetsiz",
  ],
  yasam: [
    "Anında poliçeleşme",
    "İptalde koşulsuz iade",
    "7/24 çağrı merkezi desteği",
    "Aile indirimi imkânı",
    "Online hasar bildirimi",
  ],
};

function pick<T>(arr: T[], count: number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  while (out.length < count && copy.length > 0) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }
  return out;
}

export function generateOffers(productSlug: string): Offer[] {
  const product = getProduct(productSlug);
  const base = product?.priceFrom ?? 2000;
  const category = product?.category ?? "yasam";
  const pool = highlightPool[category] ?? highlightPool.yasam;

  const companies = pick(insurers, 6 + Math.floor(Math.random() * 4));
  const offers: Offer[] = companies.map((insurer) => {
    const factor = 1 + Math.random() * 0.55;
    const price = Math.round((base * factor) / 10) * 10;
    return {
      id: newId(),
      insurerId: insurer.id,
      price,
      monthly: Math.round(price / 12),
      highlights: pick(pool, 3),
    };
  });

  offers.sort((a, b) => a.price - b.price);
  if (offers.length > 1) offers[1].bestSeller = true;
  return offers;
}
