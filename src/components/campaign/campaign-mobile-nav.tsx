"use client";

import { useTranslations } from "next-intl";
import { CampaignFontSizeControl } from "@/components/campaign/campaign-font-size-control";
import type { CampaignFontSize } from "@/components/campaign/campaign-font-size";

const SECTION_LINKS = [
  { id: "preface", titleKey: "preface" },
  { id: "campaign-overview", titleKey: "campaignOverview" },
  { id: "world-map", titleKey: "worldMap" },
  { id: "factions", titleKey: "factions" },
  { id: "desert", titleKey: "desert" },
] as const;

type SectionId = (typeof SECTION_LINKS)[number]["id"] | "players";

type CampaignMobileNavProps = {
  activeId: SectionId;
  onNavigate?: (id: SectionId) => void;
  fontSize: CampaignFontSize;
  onFontSizeChange: (size: CampaignFontSize) => void;
};

export function CampaignMobileNav({
  activeId,
  onNavigate,
  fontSize,
  onFontSizeChange,
}: CampaignMobileNavProps) {
  const t = useTranslations("campaign");

  return (
    <nav
      className="sticky top-[72px] z-20 -mx-2 mb-10 rounded-xl border border-zinc-800/60 bg-zinc-950/75 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:-mx-4 sm:px-6 lg:hidden"
      aria-label={t("sections.toc")}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-amber-500/80">
          {t("sections.toc")}
        </p>
        <CampaignFontSizeControl
          compact
          fontSize={fontSize}
          onChange={onFontSizeChange}
        />
      </div>
      <ul className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SECTION_LINKS.map(({ id, titleKey }) => {
          const isActive = activeId === id;

          return (
            <li key={id} className="shrink-0">
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.(id);
                }}
                className={`inline-block rounded-md border px-3 py-1.5 text-xs font-medium uppercase tracking-widest transition-colors ${
                  isActive
                    ? "border-amber-500/60 bg-amber-500/15 text-amber-300"
                    : "border-zinc-700 bg-zinc-900/70 text-zinc-400 hover:border-amber-900/50 hover:text-amber-300"
                }`}
                aria-current={isActive ? "location" : undefined}
              >
                {t(`sections.${titleKey}`)}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
