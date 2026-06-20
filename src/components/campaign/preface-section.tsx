"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { CampaignProse } from "@/components/campaign/campaign-text-panel";

export function PrefaceSection() {
  const t = useTranslations("campaign.preface");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <>
      <figure className="relative z-10 overflow-hidden rounded-lg border border-amber-900/25 shadow-[0_0_40px_rgba(180,83,9,0.06)]">
        <Image
          src="/campaign/preface-ksianor.jpg"
          alt={t("imageAlt")}
          width={1024}
          height={682}
          className="h-auto w-full"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </figure>
      <CampaignProse className="relative z-10 mt-10 space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </CampaignProse>
    </>
  );
}
