"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: (typeof routing.locales)[number]) {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div
      className="flex items-center gap-0.5 rounded-sm border border-zinc-700/80 bg-zinc-900/60 p-0.5 text-xs font-semibold uppercase tracking-wider"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={
          locale === "en"
            ? "rounded-sm bg-amber-600/90 px-2.5 py-1 text-zinc-950"
            : "px-2.5 py-1 text-zinc-500 transition-colors hover:text-amber-400"
        }
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchLocale("ru")}
        className={
          locale === "ru"
            ? "rounded-sm bg-amber-600/90 px-2.5 py-1 text-zinc-950"
            : "px-2.5 py-1 text-zinc-500 transition-colors hover:text-amber-400"
        }
        aria-pressed={locale === "ru"}
      >
        RU
      </button>
    </div>
  );
}
