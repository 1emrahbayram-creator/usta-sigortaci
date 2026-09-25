import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth-forms";

export const metadata: Metadata = {
  title: "Üye Ol",
  description:
    "Ücretsiz üye olun; sigorta tekliflerinizi kaydedin, poliçelerinizi yönetin, yenileme hatırlatmaları alın.",
  alternates: { canonical: "/kayit" },
};

export default function RegisterPage() {
  return (
    <div className="hero-bg min-h-[70vh]">
      <div className="container-x flex justify-center py-16">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
