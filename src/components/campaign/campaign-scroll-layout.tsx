"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { CampaignMobileNav } from "@/components/campaign/campaign-mobile-nav";
import { CampaignFontSizeControl } from "@/components/campaign/campaign-font-size-control";
import { useCampaignFontSize } from "@/components/campaign/campaign-font-size";
import { CampaignTextPanel, CampaignProse } from "@/components/campaign/campaign-text-panel";
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
  { id: "factions", titleKey: "factions" },
  { id: "desert", titleKey: "desert" },
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
  const { fontSize, setFontSize } = useCampaignFontSize();
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
    return `relative block border-l-2 py-2 pl-4 pr-2 text-xs font-medium uppercase tracking-widest transition-colors xl:py-2.5 xl:pl-5 xl:pr-3 xl:text-sm ${
      isActive
        ? "border-amber-500 bg-amber-500/10 text-amber-400"
        : "border-zinc-700/80 text-zinc-400 hover:border-amber-900/60 hover:text-amber-300/90"
    }`;
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1fr)_min(44rem,calc(100%-2rem))_minmax(0,1fr)] lg:gap-x-6 lg:px-8 xl:grid-cols-[minmax(0,1fr)_min(64rem,calc(100%-2rem))_minmax(0,1fr)] xl:gap-x-10 2xl:grid-cols-[minmax(0,1fr)_min(72rem,calc(100%-2rem))_minmax(0,1fr)]">
      {/* Sidebar — sticky on the column; self-start + tall grid row = follows scroll */}
      <aside className="hidden lg:sticky lg:top-[88px] lg:col-start-1 lg:z-30 lg:block lg:w-full lg:max-w-[10.5rem] lg:justify-self-end lg:self-start xl:top-[100px] xl:max-w-[14rem] 2xl:max-w-[16rem]">
        <nav
          className={`${CONTENT_PANEL_CLASS} py-4 xl:py-5`}
          aria-label="Campaign sections"
        >
          <p className="mb-4 pl-4 text-[10px] font-medium uppercase tracking-[0.28em] text-amber-500/80 xl:mb-6 xl:pl-5 xl:text-xs xl:tracking-[0.35em]">
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
                className="block border-l-2 border-zinc-700/80 py-2 pl-4 pr-2 text-xs font-medium uppercase tracking-widest text-zinc-500 xl:py-2.5 xl:pl-5 xl:pr-3 xl:text-sm"
                title={t("sections.gmOnly")}
              >
                <span aria-hidden>🔒 </span>
                {t(`sections.${LOCKED_SECTION.titleKey}`)}
              </span>
            </li>
          </ul>
          <CampaignFontSizeControl fontSize={fontSize} onChange={setFontSize} />
        </nav>
      </aside>

      {/* Main — viewport-centered column on lg+ */}
      <main
        data-font-size={fontSize}
        className={`campaign-font-scope mx-auto min-w-0 w-full max-w-3xl lg:col-start-2 lg:mx-0 lg:max-w-none ${CONTENT_PANEL_CLASS} px-6 py-16 sm:px-8 sm:py-20`}
      >
        <header className="mb-8 border-b border-amber-900/25 pb-12 lg:mb-16">
          <p className="campaign-text-ui text-sm font-medium uppercase tracking-[0.35em] text-amber-500/80">
            {t("hub.eyebrow")}
          </p>
          <h1 className="campaign-heading-1 mt-4 font-serif text-4xl font-semibold text-zinc-50 sm:text-5xl">
            {t("hub.title")}
          </h1>
          <CampaignProse className="campaign-text-subtitle mt-4 text-lg">
            <p>{t("hub.subtitle")}</p>
          </CampaignProse>
        </header>

        <CampaignMobileNav
          activeId={activeId}
          onNavigate={navigateToSection}
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
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
                  <h2 className="campaign-heading-2 relative z-10 mb-8 font-serif text-3xl font-semibold text-amber-100/90">
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
                    <CampaignProse>
                      <p>{t("placeholder", { section: label })}</p>
                    </CampaignProse>
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
              <h2 className="campaign-heading-2 relative z-10 mb-8 flex items-center gap-3 font-serif text-3xl font-semibold text-zinc-500">
                <span aria-hidden>🔒</span>
                {t(`sections.${LOCKED_SECTION.titleKey}`)}
              </h2>
              <CampaignProse>
                <p className="text-zinc-500">{t("gmLocked")}</p>
              </CampaignProse>
            </CampaignTextPanel>
          </section>
        </div>
      </main>

      {/* Balances the sidebar so the center column stays viewport-centered */}
      <div className="hidden lg:block" aria-hidden />
    </div>
  );
}
