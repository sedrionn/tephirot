"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function PrefaceSection() {
  const t = useTranslations("campaign.preface");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <div className="mt-8">
      <figure className="overflow-hidden rounded-lg border border-amber-900/25 shadow-[0_0_40px_rgba(180,83,9,0.06)]">
        <Image
          src="/Dessert_moodpick.png"
          alt={t("imageAlt")}
          width={1920}
          height={1080}
          className="h-auto w-full"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </figure>
      <div className="mt-10 max-w-3xl space-y-6 leading-relaxed text-zinc-400">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
