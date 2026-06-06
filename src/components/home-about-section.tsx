import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const CARDS = [
  {
    href: "/campaign#preface",
    titleKey: "cardPreface",
    hintKey: "cardPrefaceHint",
  },
  {
    href: "/campaign#campaign-overview",
    titleKey: "cardOverview",
    hintKey: "cardOverviewHint",
  },
  {
    href: "/campaign#world-map",
    titleKey: "cardMap",
    hintKey: "cardMapHint",
  },
] as const;

export async function HomeAboutSection() {
  const t = await getTranslations("home");

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-zinc-800/60 bg-zinc-950 px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-amber-500/80">
          {t("aboutTitle")}
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
          {t("aboutLead")}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {CARDS.map(({ href, titleKey, hintKey }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-lg border border-amber-900/25 bg-zinc-900/40 p-5 transition-colors hover:border-amber-500/40 hover:bg-zinc-900/70"
            >
              <h2 className="font-serif text-lg font-semibold text-amber-100/90 group-hover:text-amber-300">
                {t(titleKey)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-400">
                {t(hintKey)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
