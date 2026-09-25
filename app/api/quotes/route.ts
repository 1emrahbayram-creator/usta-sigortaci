import { NextResponse } from "next/server";
import { addQuote, newId } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { generateOffers } from "@/lib/pricing";
import { getProduct } from "@/lib/products";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | {
        productSlug?: string;
        details?: Record<string, string>;
        contact?: { name?: string; email?: string; phone?: string };
      }
    | null;

  const product = body?.productSlug ? getProduct(body.productSlug) : undefined;
  if (!product) {
    return NextResponse.json({ error: "Geçersiz sigorta ürünü." }, { status: 400 });
  }

  const user = await getSessionUser();
  const id = newId();

  addQuote({
    id,
    productSlug: product.slug,
    userId: user?.id ?? null,
    contact: {
      name: body?.contact?.name ?? "",
      email: body?.contact?.email ?? "",
      phone: body?.contact?.phone ?? "",
    },
    details: body?.details ?? {},
    offers: generateOffers(product.slug),
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ id }, { status: 201 });
}
