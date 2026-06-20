"use client";

import { useTranslations } from "next-intl";

type OverviewPillar = {
  title: string;
  text: string;
};

export function OverviewSection() {
  const t = useTranslations("campaign.overview");
  const pillars = t.raw("pillars") as OverviewPillar[];

  return (
    <>
      <p className="relative z-10 leading-relaxed text-zinc-300">{t("intro")}</p>
      <div className="relative z-10 mt-10 space-y-10">
        {pillars.map(({ title, text }) => (
          <div key={title}>
            <h3 className="font-serif text-xl font-semibold text-amber-200/95">
              {title}
            </h3>
            <p className="mt-3 leading-relaxed text-zinc-300">{text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
