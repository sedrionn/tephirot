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
    <div className="mt-8 max-w-3xl">
      <p className="leading-relaxed text-zinc-400">{t("intro")}</p>
      <div className="mt-10 space-y-10">
        {pillars.map(({ title, text }) => (
          <div key={title}>
            <h3 className="font-serif text-xl font-semibold text-amber-200/95">
              {title}
            </h3>
            <p className="mt-3 leading-relaxed text-zinc-400">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
