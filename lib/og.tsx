import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** Figtree (SIL OFL) — değişken fonttan türetilmiş sabit ağırlıklar; lisans: assets/OFL.txt */
export async function ogFonts() {
  const dir = join(process.cwd(), "assets");
  const [regular, bold] = await Promise.all([
    readFile(join(dir, "Figtree-Regular.ttf")),
    readFile(join(dir, "Figtree-Bold.ttf")),
  ]);
  return [
    { name: "Figtree", data: regular, style: "normal" as const, weight: 400 as const },
    { name: "Figtree", data: bold, style: "normal" as const, weight: 700 as const },
  ];
}

/** Metni kelime sınırında kırpar; OG kartında yarım kelime kalmasın. */
export function clampText(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const at = cut.lastIndexOf(" ");
  return (at > max * 0.6 ? cut.slice(0, at) : cut).replace(/[\s.,;:!?-]+$/, "") + "…";
}

export function OgCard({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        backgroundColor: "#0E2D6B",
        backgroundImage:
          "radial-gradient(circle at 88% 12%, #1749A5 0%, rgba(23,73,165,0) 55%), radial-gradient(circle at 6% 94%, #0B7FBF 0%, rgba(11,127,191,0) 48%)",
        fontFamily: "Figtree",
      }}
    >
      {/* Marka kilidi */}
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="18" fill="#1FA3D8" />
          <path
            d="M32 13 L47 18.5 V33 C47 42.5 40.5 48.8 32 51.5 C23.5 48.8 17 42.5 17 33 V18.5 Z"
            fill="#FFFFFF"
          />
          <path
            d="M25 32.5 L30 37.5 L40 26.5"
            stroke="#0E2D6B"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#FFFFFF", letterSpacing: -0.5 }}>
            USTA SİGORTA
          </div>
          <div style={{ fontSize: 17, fontWeight: 400, color: "#5CC4EC", letterSpacing: 4 }}>
            ARACILIK HİZMETLERİ
          </div>
        </div>
      </div>

      {/* Başlık bloğu */}
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            backgroundColor: "rgba(92,196,236,0.18)",
            border: "2px solid rgba(92,196,236,0.45)",
            color: "#5CC4EC",
            fontSize: 22,
            fontWeight: 700,
            padding: "8px 20px",
            borderRadius: 999,
            marginBottom: 24,
          }}
        >
          {kicker}
        </div>
        <div
          style={{
            fontSize: title.length > 46 ? 60 : 72,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
            letterSpacing: -1.5,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, fontWeight: 400, color: "#BFE0F5", marginTop: 20, lineHeight: 1.35 }}>
          {desc}
        </div>
      </div>

      {/* Alt bilgi */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "2px solid rgba(255,255,255,0.15)",
          paddingTop: 26,
        }}
      >
        <div style={{ fontSize: 28, color: "#FFFFFF" }}>ustasigortaci.com</div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ fontSize: 24, fontWeight: 400, color: "#5CC4EC" }}>Ataşehir / İstanbul</div>
          <div style={{ fontSize: 24, color: "rgba(255,255,255,0.35)" }}>•</div>
          <div style={{ fontSize: 28, color: "#FFFFFF" }}>{site.phone}</div>
        </div>
      </div>
    </div>
  );
}
