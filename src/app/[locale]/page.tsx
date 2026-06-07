import { getTranslations } from "next-intl/server";
import { HomeAboutSection } from "@/components/home-about-section";
import { HeroBackground } from "@/components/hero-background";
import { HeroParticles } from "@/components/hero-particles";
import { PageShell } from "@/components/page-shell";
import { Link } from "@/i18n/navigation";

export default async function Home() {
  const t = await getTranslations("buttons");
  const tCampaign = await getTranslations("campaign");

  return (
    <PageShell>
      <section
        id="campaign"
        aria-label="Campaign preview"
        className="relative min-h-svh overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <HeroBackground />
          <div
            className="pointer-events-none absolute inset-0 bg-zinc-950/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_20%,transparent_0%,rgba(9,9,11,0.35)_80%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent via-40% to-zinc-950/55"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-zinc-950/90 from-20% via-zinc-950/50 via-60% to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-zinc-950/25 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-zinc-950/25 to-transparent"
            aria-hidden
          />
        </div>

        <HeroParticles />

        {/* Foreground */}
        <div className="relative z-[2] flex min-h-svh flex-col">
          <div className="flex flex-1 flex-col items-center justify-center px-6 pt-28 pb-6 md:px-12 md:pt-32 lg:px-16">
            <img
              src="/Headliner.png"
              alt="Tephirot"
              className="h-auto w-[min(92vw,520px)] max-w-[520px] drop-shadow-[0_8px_48px_rgba(0,0,0,0.85)]"
            />
          </div>

          <div className="mx-auto w-full max-w-4xl px-6 pb-14 md:px-12 md:pb-20 lg:max-w-5xl lg:px-16">
            <div
              className="mx-auto mb-10 h-px max-w-xs bg-gradient-to-r from-transparent via-amber-500/60 to-transparent md:max-w-sm"
              aria-hidden
            />

            <p className="whitespace-pre-line text-center font-serif text-lg leading-[2.2] tracking-wide text-zinc-100/95 [text-shadow:0_2px_12px_rgb(0_0_0_/_0.9)] sm:text-xl sm:leading-[2.25] sm:tracking-[0.025em] md:text-[1.35rem] md:leading-[2.2] lg:text-[1.45rem]">
              {tCampaign("description")}
            </p>

            <div className="mt-14 flex flex-col items-stretch justify-center gap-4 sm:mt-16 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/campaign"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-amber-500/60 bg-amber-600 px-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-950 shadow-[0_0_32px_rgba(217,119,6,0.3)] transition-all hover:border-amber-300 hover:bg-amber-500 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] sm:min-w-[220px]"
              >
                {t("exploreCampaign")}
              </Link>
              <Link
                href="/tools"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-amber-900/50 bg-zinc-950/50 px-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/95 backdrop-blur-sm transition-all hover:border-amber-500/50 hover:bg-zinc-900/70 hover:text-amber-200 sm:min-w-[220px]"
              >
                {t("openTools")}
              </Link>
            </div>

            <div
              className="mx-auto mt-14 h-px w-full max-w-lg bg-gradient-to-r from-transparent via-amber-600/35 to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </section>

      <HomeAboutSection />
    </PageShell>
  );
}
