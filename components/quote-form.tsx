"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormStep, FormField } from "@/lib/quote-forms";
import { Icon } from "./icons";

function validateField(field: FormField, value: string): string | null {
  const optional = field.label.toLowerCase().includes("opsiyonel");
  if (!value.trim()) return optional ? null : "Bu alan zorunludur";
  switch (field.type) {
    case "tckn":
      if (!/^\d{11}$/.test(value)) return "TC kimlik no 11 haneli olmalıdır";
      break;
    case "tel":
      if (!/^0?5\d{2}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(value.replaceAll(" ", "")))
        return "Geçerli bir cep telefonu girin (05xx...)";
      break;
    case "email":
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Geçerli bir e-posta girin";
      break;
    case "plate":
      if (!/^\d{2}\s?[A-ZÇĞİÖŞÜ]{1,3}\s?\d{2,4}$/i.test(value.trim()))
        return "Geçerli bir plaka girin (örn. 34 ABC 123)";
      break;
  }
  return null;
}

export function QuoteForm({ productSlug, steps }: { productSlug: string; steps: FormStep[] }) {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [kvkk, setKvkk] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const step = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;

  function setValue(name: string, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  }

  function validateStep(): boolean {
    const next: Record<string, string> = {};
    for (const field of step.fields) {
      const err = validateField(field, values[field.name] ?? "");
      if (err) next[field.name] = err;
    }
    if (isLast && !kvkk) next.__kvkk = "Devam etmek için aydınlatma metnini onaylayın";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleNext() {
    if (!validateStep()) return;
    if (!isLast) {
      setStepIndex((i) => i + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug,
          details: values,
          contact: {
            name: values.adSoyad ?? "",
            email: values.email ?? "",
            phone: values.telefon ?? "",
          },
        }),
      });
      if (!res.ok) throw new Error("Teklif oluşturulamadı");
      const data = (await res.json()) as { id: string };
      router.push(`/teklif/sonuc/${data.id}`);
    } catch {
      setSubmitError("Teklifleriniz hazırlanırken bir sorun oluştu. Lütfen tekrar deneyin.");
      setSubmitting(false);
    }
  }

  return (
    <div className="card p-6 sm:p-8">
      {/* Adım göstergesi */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-navy-900/60">
          <span>
            Adım {stepIndex + 1} / {steps.length} — {step.title}
          </span>
          <span>%{Math.round(((stepIndex + 1) / steps.length) * 100)}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-cloud-200">
          <div
            className="h-full rounded-full bg-brand-600 transition-all duration-500"
            style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="text-xl font-bold text-navy-950">{step.title}</h2>
      <p className="mt-1 mb-6 text-sm text-navy-900/60">{step.desc}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        {step.fields.map((field) => (
          <div key={field.name} className={field.type === "plate" ? "sm:col-span-2" : ""}>
            <label className="label" htmlFor={field.name}>
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                id={field.name}
                className="input"
                value={values[field.name] ?? ""}
                onChange={(e) => setValue(field.name, e.target.value)}
              >
                <option value="">Seçiniz</option>
                {field.options?.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                className={`input ${field.type === "plate" ? "uppercase tracking-widest" : ""}`}
                type={field.type === "date" ? "date" : field.type === "tel" ? "tel" : field.type === "email" ? "email" : "text"}
                inputMode={field.type === "tckn" ? "numeric" : undefined}
                maxLength={field.type === "tckn" ? 11 : undefined}
                placeholder={field.placeholder}
                value={values[field.name] ?? ""}
                onChange={(e) => setValue(field.name, e.target.value)}
              />
            )}
            {field.hint && !errors[field.name] && (
              <p className="mt-1 text-xs text-navy-900/50">{field.hint}</p>
            )}
            {errors[field.name] && (
              <p className="mt-1 text-xs font-semibold text-red-600" role="alert">{errors[field.name]}</p>
            )}
          </div>
        ))}
      </div>

      {isLast && (
        <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl bg-cloud-50 p-4 text-xs leading-5 text-navy-900/70">
          <input
            type="checkbox"
            checked={kvkk}
            onChange={(e) => setKvkk(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-brand-600"
          />
          <span>
            Kişisel verilerimin, teklif oluşturulması amacıyla KVKK Aydınlatma Metni kapsamında
            işlenmesini ve tarafıma ticari elektronik ileti gönderilmesini kabul ediyorum.
          </span>
        </label>
      )}
      {errors.__kvkk && (
        <p className="mt-2 text-xs font-semibold text-red-600" role="alert">{errors.__kvkk}</p>
      )}
      {submitError && (
        <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700" role="alert">
          {submitError}
        </p>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        {stepIndex > 0 ? (
          <button className="btn-outline btn-md" onClick={() => setStepIndex((i) => i - 1)} disabled={submitting}>
            Geri
          </button>
        ) : (
          <span />
        )}
        <button className="btn-accent btn-lg" onClick={handleNext} disabled={submitting}>
          {submitting ? (
            "Teklifler hazırlanıyor..."
          ) : isLast ? (
            <>
              Teklifleri Gör
              <Icon name="arrowRight" className="h-5 w-5" />
            </>
          ) : (
            <>
              Devam Et
              <Icon name="arrowRight" className="h-5 w-5" />
            </>
          )}
        </button>
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-navy-900/50">
        <Icon name="lock" className="h-4 w-4" />
        Bilgileriniz 256-bit SSL ile şifrelenir, üçüncü kişilerle paylaşılmaz.
      </p>
    </div>
  );
}
