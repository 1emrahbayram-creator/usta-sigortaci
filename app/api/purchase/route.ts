import { NextResponse } from "next/server";
import { addPolicy, attachQuoteToUser, getQuote, newId } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json(
      { error: "Poliçe satın almak için giriş yapmanız gerekir." },
      { status: 401 }
    );
  }

  const body = (await request.json().catch(() => null)) as
    | { quoteId?: string; offerId?: string }
    | null;

  const quote = body?.quoteId ? getQuote(body.quoteId) : undefined;
  const offer = quote?.offers.find((o) => o.id === body?.offerId);
  if (!quote || !offer) {
    return NextResponse.json({ error: "Teklif bulunamadı veya süresi doldu." }, { status: 404 });
  }

  attachQuoteToUser(quote.id, user.id);

  const start = new Date();
  const end = new Date(start);
  end.setFullYear(end.getFullYear() + 1);
  const policyNo = `UST-${start.getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

  addPolicy({
    id: newId(),
    no: policyNo,
    userId: user.id,
    productSlug: quote.productSlug,
    insurerId: offer.insurerId,
    price: offer.price,
    startDate: start.toISOString(),
    endDate: end.toISOString(),
    createdAt: start.toISOString(),
  });

  return NextResponse.json({ policyNo }, { status: 201 });
}
