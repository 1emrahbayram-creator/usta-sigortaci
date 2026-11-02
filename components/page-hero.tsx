import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteImage } from "@/lib/images";

/** Sayfa başlığı + yanında illüstrasyon. Görsel mobilde başlığın üstüne alınır. */
export function PageHero({
  title,
  desc,
  image,
  children,
}: {
  title: string;
  desc: ReactNode;
  image: SiteImage;
  children?: ReactNode;
}) {
  return (
    <div className="mt-6 mb-12 grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <h1 className="text-3xl font-bold text-navy-950 sm:text-4xl">{title}</h1>
        <div className="mt-3 max-w-xl text-navy-900/60">{desc}</div>
        {children}
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
        unoptimized
        sizes="(max-width: 1024px) 100vw, 480px"
        className="order-first w-full rounded-2xl border border-navy-900/8 lg:order-last"
      />
    </div>
  );
}
