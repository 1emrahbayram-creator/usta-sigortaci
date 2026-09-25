import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/auth-forms";

export const metadata: Metadata = {
  title: "Giriş Yap",
  description:
    "Usta Sigortacı hesabınıza giriş yapın; tekliflerinizi ve poliçelerinizi tek yerden yönetin.",
  alternates: { canonical: "/giris" },
};

export default function LoginPage() {
  return (
    <div className="hero-bg min-h-[70vh]">
      <div className="container-x flex justify-center py-16">
        <div className="w-full max-w-md">
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
