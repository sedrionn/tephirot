"use client";

import { useTranslations } from "next-intl";

const SECTION_LINKS = [
  { id: "preface", titleKey: "preface" },
  { id: "campaign-overview", titleKey: "campaignOverview" },
  { id: "world-map", titleKey: "worldMap" },
  { id: "desert", titleKey: "desert" },
  { id: "factions", titleKey: "factions" },
] as const;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function CampaignMobileNav() {
  const t = useTranslations("campaign");

  return (
    <nav
      className="sticky top-[72px] z-20 -mx-6 mb-10 border-b border-zinc-800/80 bg-zinc-950/95 px-6 py-3 backdrop-blur-md lg:hidden"
      aria-label={t("sections.toc")}
    >
      <ul className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SECTION_LINKS.map(({ id, titleKey }) => (
          <li key={id} className="shrink-0">
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              className="inline-block rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:border-amber-900/50 hover:text-amber-300"
            >
              {t(`sections.${titleKey}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
