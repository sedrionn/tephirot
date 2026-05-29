import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export default function CampaignPage() {
  return (
    <PageShell activePath="/campaign">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-amber-500/80">
          Campaign Hub
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-zinc-50 sm:text-5xl">
          Your Campaign
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Organize sessions, track story arcs, and keep your world consistent.
          Campaign management tools are on the way.
        </p>

        <div className="mt-12 rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-8">
          <h2 className="font-serif text-xl font-medium text-amber-100/90">
            Coming Soon
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-500">
            Session notes, plot threads, location maps, and party tracking will
            live here—everything you need to run a living campaign.
          </p>
          <Link
            href="/tools"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-sm border border-amber-500/50 bg-amber-600 px-6 text-sm font-semibold uppercase tracking-wider text-zinc-950 transition-all hover:border-amber-400 hover:bg-amber-500"
          >
            Browse Tools
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
