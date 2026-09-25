import { NextResponse } from "next/server";
import { createUser, findUserByEmail } from "@/lib/db";
import { createToken, publicUser, sessionCookieOptions, SESSION_COOKIE } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { name?: string; email?: string; phone?: string; password?: string }
    | null;

  if (!body?.name?.trim() || !body?.email?.trim() || !body?.phone?.trim() || !body?.password) {
    return NextResponse.json({ error: "Tüm alanları doldurun." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: "Geçerli bir e-posta adresi girin." }, { status: 400 });
  }
  if (body.password.length < 8) {
    return NextResponse.json({ error: "Şifre en az 8 karakter olmalıdır." }, { status: 400 });
  }
  if (findUserByEmail(body.email)) {
    return NextResponse.json(
      { error: "Bu e-posta ile kayıtlı bir hesap zaten var. Giriş yapmayı deneyin." },
      { status: 409 }
    );
  }

  const user = createUser({
    name: body.name.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    password: body.password,
  });

  const res = NextResponse.json({ user: publicUser(user) }, { status: 201 });
  res.cookies.set(SESSION_COOKIE, createToken(user.id), sessionCookieOptions());
  return res;
}
