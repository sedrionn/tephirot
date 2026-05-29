import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const campaignDescription =
  "The Golden Age of the Tulosarian Technocracy ended without warning. Once fertile lands scattered with oases and canyons, where magic and technology advanced side by side, vanished from the world. Over two hundred years ago, the catastrophe that consumed their nearest neighbor — the elven kingdom of Elandor — swallowed these lands whole. But now, the storms are beginning to recede. Forgotten cities, buried temples, and the ruins of the Technocracy are emerging from beneath the sands once more.";

export default function Home() {
  return (
    <PageShell>
        {/* Campaign preview */}
        <section id="campaign" aria-label="Campaign preview" className="pb-20">
          <div className="relative w-full overflow-hidden">
            <div className="absolute inset-0 min-h-[min(72vh,780px)]">
              <Image
                src="/campaign-hero.png"
                alt=""
                fill
                className="object-cover object-center scale-105"
                sizes="100vw"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-zinc-950/25"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_40%,transparent_20%,rgba(9,9,11,0.55)_100%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
                aria-hidden
              />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[min(72vh,780px)] max-w-3xl flex-col items-center px-6 pt-10 pb-16 sm:pt-14 md:pt-16">
              <img
                src="/Headliner.png"
                alt="Tephirot"
                className="h-auto w-[min(100%,400px)] max-w-[400px]"
              />

              <div className="mt-6 w-full">
                <p className="text-center font-serif text-lg leading-[1.9] text-zinc-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] sm:text-xl sm:leading-[1.85]">
                  {campaignDescription}
                </p>
                <div className="mt-10 flex justify-center">
                  <Link
                    href="/campaign"
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] transition-colors hover:text-amber-300"
                  >
                    Read the campaign
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 text-center sm:pt-20">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/campaign"
              className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-sm border border-amber-500/50 bg-amber-600 px-8 text-sm font-semibold uppercase tracking-wider text-zinc-950 shadow-[0_0_24px_rgba(217,119,6,0.25)] transition-all hover:border-amber-400 hover:bg-amber-500 hover:shadow-[0_0_32px_rgba(217,119,6,0.35)]"
            >
              Explore Campaign
            </Link>
            <Link
              href="/tools"
              className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-sm border border-zinc-700 bg-zinc-900/80 px-8 text-sm font-semibold uppercase tracking-wider text-amber-400 transition-all hover:border-amber-500/40 hover:bg-zinc-800/80 hover:text-amber-300"
            >
              Open Tools
            </Link>
          </div>
          <div
            className="mx-auto mt-20 h-px max-w-md bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"
            aria-hidden
          />
        </section>
    </PageShell>
  );
}
