"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { CampaignMobileNav } from "@/components/campaign/campaign-mobile-nav";
import { CampaignTextPanel } from "@/components/campaign/campaign-text-panel";
import {
  getActiveCampaignSectionId,
  scrollToCampaignTarget,
} from "@/components/campaign/campaign-section-nav";
import { FactionsSection } from "@/components/campaign/factions-section";
import { OverviewSection } from "@/components/campaign/overview-section";
import { PrefaceSection } from "@/components/campaign/preface-section";
import { WorldMap, WorldMapRegions } from "@/components/campaign/world-map";

const SECTIONS = [
  { id: "preface", titleKey: "preface" },
  { id: "campaign-overview", titleKey: "campaignOverview" },
  { id: "world-map", titleKey: "worldMap" },
  { id: "desert", titleKey: "desert" },
  { id: "factions", titleKey: "factions" },
] as const;

const LOCKED_SECTION = {
  id: "players",
  titleKey: "gmOnly",
} as const;

type SectionId = (typeof SECTIONS)[number]["id"] | typeof LOCKED_SECTION.id;

const SCROLL_SPY_SECTION_IDS = [
  ...SECTIONS.map((section) => section.id),
  LOCKED_SECTION.id,
] as const;

const SCROLL_END_DELAY_MS = 120;

const CONTENT_PANEL_CLASS =
  "rounded-xl border border-zinc-800/60 bg-zinc-950/75 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-sm";

function scrollToSection(id: SectionId) {
  scrollToCampaignTarget(id);
}

export function CampaignScrollLayout() {
  const t = useTranslations("campaign");
  const [activeId, setActiveId] = useState<SectionId>("preface");
  const scrollingToRef = useRef<SectionId | null>(null);
  const scrollEndTimerRef = useRef<number | null>(null);

  useEffect(() => {
    let rafId = 0;

    const syncActiveSection = () => {
      if (scrollingToRef.current) return;

      const next = getActiveCampaignSectionId(SCROLL_SPY_SECTION_IDS);
      setActiveId((current) => (current === next ? current : next));
    };

    const onScrollOrResize = () => {
      if (rafId !== 0) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        syncActiveSection();

        if (scrollEndTimerRef.current !== null) {
          window.clearTimeout(scrollEndTimerRef.current);
        }

        scrollEndTimerRef.current = window.setTimeout(() => {
          scrollingToRef.current = null;
          syncActiveSection();
        }, SCROLL_END_DELAY_MS);
      });
    };

    syncActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            syncActiveSection();
          })
        : null;

    SCROLL_SPY_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        resizeObserver?.observe(el);
      }
    });

    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
      if (scrollEndTimerRef.current !== null) {
        window.clearTimeout(scrollEndTimerRef.current);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      resizeObserver?.disconnect();
    };
  }, []);

  function navigateToSection(id: SectionId) {
    scrollingToRef.current = id;
    setActiveId(id);
    scrollToSection(id);
  }

  function navLinkClass(id: string, isActive: boolean) {
    return `relative block border-l-2 py-2.5 pl-5 pr-3 text-sm font-medium uppercase tracking-widest transition-colors ${
      isActive
        ? "border-amber-500 bg-amber-500/10 text-amber-400"
        : "border-zinc-700/80 text-zinc-400 hover:border-amber-900/60 hover:text-amber-300/90"
    }`;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12 lg:px-8 xl:grid-cols-[16rem_minmax(0,1fr)]">
      {/* Sidebar — desktop only; grid row stretches so inner nav can stick */}
      <aside className="hidden lg:block">
        <nav
          className={`sticky top-[100px] ${CONTENT_PANEL_CLASS} py-5`}
          aria-label="Campaign sections"
        >
          <p className="mb-6 pl-5 text-xs font-medium uppercase tracking-[0.35em] text-amber-500/80">
            {t("sections.toc")}
          </p>
          <ul className="space-y-0.5">
            {SECTIONS.map(({ id, titleKey }) => {
              const isActive = activeId === id;
              const label = t(`sections.${titleKey}`);
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToSection(id);
                    }}
                    className={navLinkClass(id, isActive)}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {isActive && (
                      <span
                        className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                        aria-hidden
                      />
                    )}
                    {label}
                  </a>
                </li>
              );
            })}
            <li>
              <span
                className="block border-l-2 border-zinc-700/80 py-2.5 pl-5 pr-3 text-sm font-medium uppercase tracking-widest text-zinc-500"
                title={t("sections.gmOnly")}
              >
                <span aria-hidden>🔒 </span>
                {t(`sections.${LOCKED_SECTION.titleKey}`)}
              </span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className={`min-w-0 ${CONTENT_PANEL_CLASS} px-6 py-16 sm:px-8 sm:py-20`}>
        <header className="mb-8 border-b border-amber-900/25 pb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-amber-500/80">
            {t("hub.eyebrow")}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-zinc-50 sm:text-5xl">
            {t("hub.title")}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-300">
            {t("hub.subtitle")}
          </p>
        </header>

        <CampaignMobileNav
          activeId={activeId}
          onNavigate={navigateToSection}
        />

        <div className="space-y-4">
          {SECTIONS.map(({ id, titleKey }) => {
            const label = t(`sections.${titleKey}`);
            return (
              <section
                key={id}
                id={id}
                className="scroll-mt-[100px] py-20"
              >
                <CampaignTextPanel>
                  <h2 className="relative z-10 mb-8 font-serif text-3xl font-semibold text-amber-100/90">
                    {label}
                  </h2>
                  {id === "preface" ? (
                    <PrefaceSection />
                  ) : id === "campaign-overview" ? (
                    <OverviewSection />
                  ) : id === "world-map" ? (
                    <WorldMap />
                  ) : id === "factions" ? (
                    <FactionsSection />
                  ) : (
                    <p className="relative z-10 leading-relaxed text-zinc-300">
                      {t("placeholder", { section: label })}
                    </p>
                  )}
                </CampaignTextPanel>
                {id === "world-map" ? <WorldMapRegions /> : null}
              </section>
            );
          })}

          <section
            id={LOCKED_SECTION.id}
            className="scroll-mt-[100px] py-20"
            aria-label={t(`sections.${LOCKED_SECTION.titleKey}`)}
          >
            <CampaignTextPanel>
              <h2 className="relative z-10 mb-8 flex items-center gap-3 font-serif text-3xl font-semibold text-zinc-500">
                <span aria-hidden>🔒</span>
                {t(`sections.${LOCKED_SECTION.titleKey}`)}
              </h2>
              <p className="relative z-10 leading-relaxed text-zinc-500">
                {t("gmLocked")}
              </p>
            </CampaignTextPanel>
          </section>
        </div>
      </main>
    </div>
  );
}
