"use client";

import { useTranslations } from "next-intl";

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
          <h3 className="font-serif text-xl font-semibold text-amber-200/95">
            {name}
          </h3>
          <div className="mt-3 space-y-4 leading-relaxed text-zinc-300">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
