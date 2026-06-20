"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useCallback, useState } from "react";
import { CampaignTextPanel } from "@/components/campaign/campaign-text-panel";
import { RegionArticle } from "@/components/campaign/region-article";
import { scrollToCampaignTarget } from "@/components/campaign/campaign-section-nav";
import {
  REGIONS,
  getRegionName,
  type RegionId,
} from "@/data/regions";

const MAP_VIEWBOX = "0 0 3584 4780";

/** Interactive map + mobile region chips (shared selection state). */
export function WorldMap() {
  const locale = useLocale();
  const [hoveredId, setHoveredId] = useState<RegionId | null>(null);
  const [focusedId, setFocusedId] = useState<RegionId | null>(null);

  const handleRegionSelect = useCallback((id: RegionId) => {
    setFocusedId(id);
    scrollToCampaignTarget(id);
  }, []);

  const activeId = hoveredId ?? focusedId;

  return (
    <>
      <div className="relative z-10 overflow-hidden rounded-lg border border-amber-900/25 bg-zinc-900/20 shadow-[0_0_40px_rgba(180,83,9,0.06)]">
        <div className="relative aspect-[3584/4780] w-full">
          <Image
            src="/World_Map.png"
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 1152px) 100vw, 1152px"
            priority
          />
          <svg
            viewBox={MAP_VIEWBOX}
            className="pointer-events-none absolute inset-0 h-full w-full lg:pointer-events-auto"
            preserveAspectRatio="xMidYMid meet"
            role="group"
            aria-label={
              locale === "en"
                ? "Interactive world map"
                : "Интерактивная карта мира"
            }
          >
            {REGIONS.map((region) => {
              const isActive = activeId === region.id;
              const name = getRegionName(region, locale);
              return (
                <path
                  key={region.id}
                  id={region.svgPathId}
                  d={region.pathD}
                  fill={
                    isActive
                      ? "rgba(251, 191, 36, 0.35)"
                      : "rgba(251, 191, 36, 0)"
                  }
                  stroke={isActive ? "rgba(251, 191, 36, 0.9)" : "transparent"}
                  strokeWidth={isActive ? 6 : 0}
                  fillRule="evenodd"
                  className="cursor-pointer transition-[fill,stroke] duration-200 hover:fill-amber-500/25"
                  onClick={() => handleRegionSelect(region.id)}
                  onMouseEnter={() => setHoveredId(region.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(region.id)}
                  onBlur={() => setHoveredId(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={name}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleRegionSelect(region.id);
                    }
                  }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      <nav
        className="relative z-10 mt-6 lg:hidden"
        aria-label={locale === "en" ? "Regions" : "Регионы"}
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-amber-500/70">
          {locale === "en" ? "Regions" : "Регионы"}
        </p>
        <ul className="flex flex-wrap gap-2">
          {REGIONS.map((region) => (
            <li key={region.id}>
              <button
                type="button"
                onClick={() => handleRegionSelect(region.id)}
                className={`campaign-text-ui rounded-md border px-3 py-1.5 text-sm transition-colors ${
                  focusedId === region.id
                    ? "border-amber-500/60 bg-amber-500/15 text-amber-300"
                    : "border-zinc-700 bg-zinc-900/60 text-zinc-400 hover:border-amber-900/50 hover:text-amber-200/90"
                }`}
              >
                {getRegionName(region, locale)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export function WorldMapRegions() {
  const locale = useLocale();

  return (
    <div className="mt-6 space-y-6">
      {REGIONS.map((region) => (
        <CampaignTextPanel key={region.id}>
          <RegionArticle region={region} locale={locale} />
        </CampaignTextPanel>
      ))}
    </div>
  );
}
