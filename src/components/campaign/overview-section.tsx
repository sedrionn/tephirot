"use client";

import { useTranslations } from "next-intl";

import { CampaignProse } from "@/components/campaign/campaign-text-panel";

type OverviewPillar = {
  title: string;
  text: string;
};

export function OverviewSection() {
  const t = useTranslations("campaign.overview");
  const pillars = t.raw("pillars") as OverviewPillar[];

  return (
    <>
      <CampaignProse className="relative z-10">
        <p>{t("intro")}</p>
      </CampaignProse>
      <div className="relative z-10 mt-10 space-y-10">
        {pillars.map(({ title, text }) => (
          <CampaignProse key={title}>
            <h3 className="campaign-heading-3 font-serif text-xl font-semibold text-amber-200/95">
              {title}
            </h3>
            <p className="mt-3">{text}</p>
          </CampaignProse>
        ))}
      </div>
    </>
  );
}
