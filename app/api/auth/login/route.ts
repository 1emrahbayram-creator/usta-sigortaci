import { NextResponse } from "next/server";
import { findUserByEmail, verifyPassword } from "@/lib/db";
import { createToken, publicUser, sessionCookieOptions, SESSION_COOKIE } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { email?: string; password?: string }
    | null;

  if (!body?.email || !body?.password) {
    return NextResponse.json({ error: "E-posta ve şifre zorunludur." }, { status: 400 });
  }

  const user = findUserByEmail(body.email);
  if (!user || !verifyPassword(user, body.password)) {
    return NextResponse.json({ error: "E-posta veya şifre hatalı." }, { status: 401 });
  }

  const res = NextResponse.json({ user: publicUser(user) });
  res.cookies.set(SESSION_COOKIE, createToken(user.id), sessionCookieOptions());
  return res;
}
