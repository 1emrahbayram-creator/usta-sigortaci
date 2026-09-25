import { NextResponse } from "next/server";
import { getSessionUser, publicUser } from "@/lib/auth";
import { updateUser } from "@/lib/db";

export async function PATCH(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Oturum bulunamadı." }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as
    | { name?: string; phone?: string }
    | null;

  if (!body?.name?.trim()) {
    return NextResponse.json({ error: "Ad soyad boş olamaz." }, { status: 400 });
  }

  const updated = updateUser(user.id, {
    name: body.name.trim(),
    phone: body.phone?.trim() ?? user.phone,
  });

  return NextResponse.json({ user: updated ? publicUser(updated) : publicUser(user) });
}
