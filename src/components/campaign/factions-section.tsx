"use client";

import { useTranslations } from "next-intl";

import { CampaignProse } from "@/components/campaign/campaign-text-panel";

type FactionEntry = {
  id: string;
  name: string;
  paragraphs: string[];
};

export function FactionsSection() {
  const t = useTranslations("campaign.factions");
  const entries = t.raw("entries") as FactionEntry[];

  return (
    <div className="relative z-10 space-y-10">
      {entries.map(({ id, name, paragraphs }) => (
        <article key={id} id={id} className="scroll-mt-[100px]">
          <CampaignProse className="space-y-4">
            <h3 className="campaign-heading-3 font-serif text-xl font-semibold text-amber-200/95">
              {name}
            </h3>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </CampaignProse>
        </article>
      ))}
    </div>
  );
}
