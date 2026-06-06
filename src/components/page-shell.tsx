import { SiteHeader } from "@/components/site-header";

type ActivePath = "/" | "/campaign" | "/tools";

type PageShellProps = {
  children: React.ReactNode;
  activePath?: ActivePath;
};

export function PageShell({ children, activePath }: PageShellProps) {
  return (
    <div className="relative flex min-h-full flex-col bg-zinc-950 font-sans text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(180,83,9,0.18),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(120,53,15,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,rgba(9,9,11,0.4)_100%)]"
        aria-hidden
      />

      <SiteHeader activePath={activePath} />

      <main className="relative z-10 flex-1 overflow-visible">{children}</main>

      <footer className="relative z-10 border-t border-zinc-800/60 py-8 text-center text-xs text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Tephirot. All rights reserved.</p>
      </footer>
    </div>
  );
}
