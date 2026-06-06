"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";

type ActivePath = "/" | "/campaign" | "/tools";

type SiteHeaderProps = {
  activePath?: ActivePath;
};

function navLinkClass(isActive: boolean) {
  return isActive
    ? "text-sm font-medium uppercase tracking-widest text-amber-400"
    : "text-sm font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-amber-400";
}

export function SiteHeader({ activePath }: SiteHeaderProps) {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.campaign"), href: "/campaign" as const, matchPath: "/campaign" as const },
    { label: t("nav.tools"), href: "/tools" as const, matchPath: "/tools" as const },
    { label: t("nav.about"), href: "/#about" as const, matchPath: "/" as const },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-amber-900/20 bg-zinc-950/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <img
            src="/Headliner_logo.png"
            alt="Tephirot"
            className="h-10 w-auto"
          />
        </Link>
        <div className="flex items-center gap-6 sm:gap-8">
          <ul className="flex items-center gap-6 sm:gap-8">
            {navLinks.map(({ label, href, matchPath }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={navLinkClass(activePath === matchPath)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
