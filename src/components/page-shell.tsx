import Link from "next/link";

const navLinks = [
  { label: "Campaign", href: "/campaign" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/#about" },
] as const;

type ActivePath = "/" | "/campaign" | "/tools";

type PageShellProps = {
  children: React.ReactNode;
  activePath?: ActivePath;
};

function navLinkClass(isActive: boolean) {
  return isActive
    ? "text-sm font-medium uppercase tracking-widest text-amber-400"
    : "text-sm font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-amber-400";
}

export function PageShell({ children, activePath }: PageShellProps) {
  return (
    <div className="relative flex min-h-full flex-col overflow-hidden bg-zinc-950 font-sans text-zinc-100">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(180,83,9,0.18),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(120,53,15,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(9,9,11,0.4)_100%)]"
        aria-hidden
      />

      <header className="relative z-10 border-b border-amber-900/20 bg-zinc-950/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="transition-opacity hover:opacity-90">
            <img
              src="/Headliner_logo.png"
              alt="Tephirot"
              className="h-10 w-auto"
            />
          </Link>
          <ul className="flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={navLinkClass(activePath === href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative z-10 flex-1">{children}</main>

      <footer className="relative z-10 border-t border-zinc-800/60 py-8 text-center text-xs text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Tephirot. All rights reserved.</p>
      </footer>
    </div>
  );
}
