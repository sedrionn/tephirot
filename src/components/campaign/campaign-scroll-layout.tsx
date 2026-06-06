"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CampaignMobileNav } from "@/components/campaign/campaign-mobile-nav";
import { OverviewSection } from "@/components/campaign/overview-section";
import { PrefaceSection } from "@/components/campaign/preface-section";
import { WorldMap } from "@/components/campaign/world-map";

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

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function CampaignScrollLayout() {
  const t = useTranslations("campaign");
  const [activeId, setActiveId] = useState<SectionId>("preface");

  useEffect(() => {
    const sectionIds = [...SECTIONS.map((s) => s.id), LOCKED_SECTION.id];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const mostVisible = visible.reduce((best, entry) =>
          entry.intersectionRatio > best.intersectionRatio ? entry : best,
        );
        setActiveId(mostVisible.target.id as SectionId);
      },
      {
        rootMargin: "-15% 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function navLinkClass(id: string, isActive: boolean) {
    return `relative block border-l-2 py-2.5 pl-5 pr-3 text-sm font-medium uppercase tracking-widest transition-colors ${
      isActive
        ? "border-amber-500 bg-amber-500/10 text-amber-400"
        : "border-zinc-800 text-zinc-500 hover:border-amber-900/60 hover:text-amber-300/90"
    }`;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12 lg:px-8 xl:grid-cols-[16rem_minmax(0,1fr)]">
      {/* Sidebar — desktop only; grid row stretches so inner nav can stick */}
      <aside className="hidden lg:block">
        <nav
          className="sticky top-[100px]"
          aria-label="Campaign sections"
        >
          <p className="mb-6 pl-5 text-xs font-medium uppercase tracking-[0.35em] text-amber-500/70">
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
                      scrollToSection(id);
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
                className="block border-l-2 border-zinc-800 py-2.5 pl-5 pr-3 text-sm font-medium uppercase tracking-widest text-zinc-600"
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
      <main className="min-w-0 py-16 sm:py-20 lg:pr-4">
        <header className="mb-8 border-b border-amber-900/25 pb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-amber-500/80">
            {t("hub.eyebrow")}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-zinc-50 sm:text-5xl">
            {t("hub.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {t("hub.subtitle")}
          </p>
        </header>

        <CampaignMobileNav />

        <div className="space-y-4">
          {SECTIONS.map(({ id, titleKey }) => {
            const label = t(`sections.${titleKey}`);
            return (
              <section
                key={id}
                id={id}
                className="scroll-mt-[100px] border-b border-zinc-800/60 py-20 last:border-b-0"
              >
                <h2 className="font-serif text-3xl font-semibold text-amber-100/90">
                  {label}
                </h2>
                {id === "preface" ? (
                  <PrefaceSection />
                ) : id === "campaign-overview" ? (
                  <OverviewSection />
                ) : id === "world-map" ? (
                  <WorldMap />
                ) : (
                  <p className="mt-6 max-w-3xl leading-relaxed text-zinc-400">
                    {t("placeholder", { section: label })}
                  </p>
                )}
              </section>
            );
          })}

          <section
            id={LOCKED_SECTION.id}
            className="scroll-mt-[100px] py-20"
            aria-label={t(`sections.${LOCKED_SECTION.titleKey}`)}
          >
            <h2 className="flex items-center gap-3 font-serif text-3xl font-semibold text-zinc-600">
              <span aria-hidden>🔒</span>
              {t(`sections.${LOCKED_SECTION.titleKey}`)}
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-zinc-600">
              {t("gmLocked")}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
