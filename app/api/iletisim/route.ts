import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { site } from "@/lib/site";

type Lead = {
  name: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
  createdAt: string;
  userAgent: string;
};

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

async function sendEmail(lead: Lead): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const from = process.env.CONTACT_FROM_EMAIL ?? `Usta Sigorta <iletisim@ustasigortaci.com>`;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const text = [
    `Yeni bilgi talebi — ${lead.topic}`,
    ``,
    `Ad Soyad : ${lead.name}`,
    `Telefon  : ${lead.phone}`,
    `E-posta  : ${lead.email || "-"}`,
    `Konu     : ${lead.topic}`,
    `Mesaj    : ${lead.message || "-"}`,
    ``,
    `Tarih    : ${new Date(lead.createdAt).toLocaleString("tr-TR")}`,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email || undefined,
        subject: `[Web] ${lead.topic} talebi — ${lead.name}`,
        text,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function storeLocally(lead: Lead): boolean {
  try {
    const dir = path.join(process.cwd(), ".data");
    const file = path.join(dir, "leads.json");
    fs.mkdirSync(dir, { recursive: true });
    const existing: Lead[] = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : [];
    existing.push(lead);
    fs.writeFileSync(file, JSON.stringify(existing, null, 2), "utf8");
    return true;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });

  // Bot tuzağı: gizli alan doluysa sessizce kabul et
  if (clean(body.website, 10)) return NextResponse.json({ ok: true });

  const lead: Lead = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 30),
    email: clean(body.email, 160),
    topic: clean(body.topic, 120),
    message: clean(body.message, 2000),
    createdAt: new Date().toISOString(),
    userAgent: req.headers.get("user-agent") ?? "",
  };

  if (lead.name.length < 2 || !/^0?5\d{9}$/.test(lead.phone.replace(/[\s()-]/g, "")) || !lead.topic) {
    return NextResponse.json({ error: "Eksik veya hatalı bilgi" }, { status: 422 });
  }

  const emailed = await sendEmail(lead);
  const stored = emailed ? true : storeLocally(lead);
  console.log(`[iletisim] yeni talep (${emailed ? "e-posta" : stored ? "yerel kayıt" : "yalnızca log"}):`, {
    name: lead.name,
    phone: lead.phone,
    topic: lead.topic,
  });

  return NextResponse.json({ ok: true, delivered: emailed ? "email" : "stored" });
}
