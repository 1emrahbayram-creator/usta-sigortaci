import Link from "next/link";
import { Icon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="container-x flex flex-col items-center py-24 text-center">
      <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-50 text-brand-600">
        <Icon name="compare" className="h-10 w-10" />
      </span>
      <h1 className="text-3xl font-bold text-navy-950 sm:text-4xl">Sayfa bulunamadı</h1>
      <p className="mt-3 max-w-md text-navy-900/60">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Sigorta teklifinizi almak için
        ana sayfadan devam edebilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary btn-lg">
          Ana Sayfaya Dön
        </Link>
        <Link href="/sigortalar" className="btn-outline btn-lg">
          Teklif Al
        </Link>
      </div>
    </div>
  );
}
