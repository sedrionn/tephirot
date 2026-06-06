import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/page-shell";

const tools = [
  "Name Generator",
  "Encounter Builder",
  "Event Generator",
  "NPC Creator",
  "Loot Generator",
] as const;

export default function ToolsPage() {
  return (
    <PageShell activePath="/tools">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-semibold text-zinc-50 sm:text-4xl">
            Forge Your Session
          </h1>
          <p className="mt-3 text-zinc-500">
            Essential generators and builders for every stage of play.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((name) => {
            const href =
              name === "Name Generator"
                ? "/tools/name-generator"
                : undefined;

            const card = (
              <>
                <h2 className="font-serif text-lg font-medium text-amber-100/90">
                  {name}
                </h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-amber-600/80">
                  {href ? "Open tool" : "Coming soon"}
                </p>
              </>
            );

            return (
              <li key={name}>
                {href ? (
                  <Link
                    href={href}
                    className="block rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-6 py-5 transition-colors hover:border-amber-600/30 hover:bg-zinc-900/70"
                  >
                    {card}
                  </Link>
                ) : (
                  <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-6 py-5">
                    {card}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <Link
          href="/"
          className="mt-10 inline-flex text-sm font-medium uppercase tracking-widest text-zinc-500 transition-colors hover:text-amber-400"
        >
          &larr; Back to home
        </Link>
      </section>
    </PageShell>
  );
}
