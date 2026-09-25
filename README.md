# Usta Sigortacı — ustasigortaci.com

sigortam.net benzeri, uçtan uca çalışan sigorta teklif karşılaştırma platformu. **Next.js 16 (App Router) + Tailwind v4 + TypeScript**.

## Özellikler

- 14 sigorta ürünü (kasko, trafik, DASK, konut, TSS, özel sağlık, seyahat, hayat, ferdi kaza, evcil hayvan, cep telefonu, işyeri, İMM, yabancı sağlık) — her biri SEO odaklı ürün sayfasına sahip
- Ürüne özel çok adımlı teklif formu → 12 anlaşmalı şirketten teklif listesi → yan yana karşılaştırma → mock ödeme → poliçe
- Üyelik: kayıt, giriş, şifremi unuttum, hesabım (tekliflerim / poliçelerim / profil)
- Referans siteye ek: Hasar Anında rehberi, Sigorta Sözlüğü, WhatsApp destek, poliçe yenileme hatırlatıcısı
- SEO: metadata + canonical, Open Graph görselleri, JSON-LD (Organization, InsuranceAgency, Service, FAQPage, BreadcrumbList, Article, DefinedTerm), `sitemap.xml`, `robots.txt`, PWA manifest

## Çalıştırma

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build && npm start
```

**Demo hesap:** `demo@ustasigortaci.com` / `Demo1234`

## Deploy (Vercel)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1emrahbayram-creator%2Fusta-sigortaci&project-name=usta-sigortaci&repository-name=usta-sigortaci&env=AUTH_SECRET&envDescription=Oturum%20cerezini%20imzalayan%20gizli%20anahtar%20(rastgele%20uzun%20bir%20metin))

Ortam değişkenleri:

| Değişken | Açıklama |
|---|---|
| `AUTH_SECRET` | Oturum çerezini imzalayan gizli anahtar (zorunlu, rastgele uzun metin) |
| `DATA_DIR` | JSON veri deposunun yazılacağı dizin (opsiyonel; varsayılan `.data/`, Vercel'de geçici dizin) |

> Veri katmanı demo amaçlı dosya tabanlı bir JSON deposudur (`lib/db.ts`). Vercel gibi serverless ortamlarda veriler geçicidir; gerçek kullanım için Postgres/Prisma gibi bir veritabanına geçilmelidir.

## Yapı

```
app/            sayfalar, API route'ları (auth, quotes, purchase), sitemap/robots/manifest
components/     header, footer, teklif formu, teklif listesi, ödeme, auth formları, ikon seti
lib/            ürün içerikleri, form tanımları, sigorta şirketleri, fiyatlama, db, auth
```
