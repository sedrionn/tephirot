"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { GeneratedName } from "@/app/api/generate-names/route";

const RACES = [
  "Human",
  "Elf",
  "Dwarf",
  "Halfling",
  "Dragonborn",
  "Tiefling",
  "Orc",
  "Gnome",
  "Half-Elf",
  "Half-Orc",
  "Aasimar",
  "Genasi",
  "Goliath",
  "Tabaxi",
  "Firbolg",
] as const;

const GENDERS = ["Male", "Female", "Non-binary", "Any"] as const;

const TYPES = [
  "Player Character",
  "NPC",
  "Villain",
  "Ally",
  "Deity",
  "Location",
  "Organization",
] as const;

const ARCHETYPES = [
  "Warrior",
  "Rogue",
  "Mage",
  "Cleric",
  "Ranger",
  "Bard",
  "Paladin",
  "Warlock",
  "Monk",
  "Druid",
  "Noble",
  "Merchant",
  "Scholar",
  "Outcast",
  "Artificer",
] as const;

const selectClassName =
  "w-full rounded-sm border border-zinc-700 bg-zinc-900/80 px-3 py-2.5 text-sm text-zinc-100 outline-none transition-colors focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30";

const labelClassName =
  "mb-1.5 block text-xs font-medium uppercase tracking-widest text-amber-500/80";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="shrink-0 rounded-sm border border-zinc-700 bg-zinc-800/80 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-amber-400 transition-colors hover:border-amber-500/40 hover:bg-zinc-800 hover:text-amber-300"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function NameGeneratorForm() {
  const t = useTranslations("nameGenerator");
  const tButtons = useTranslations("buttons");

  const [race, setRace] = useState<string>(RACES[0]);
  const [gender, setGender] = useState<string>(GENDERS[0]);
  const [type, setType] = useState<string>(TYPES[0]);
  const [archetype, setArchetype] = useState<string>(ARCHETYPES[0]);
  const [count, setCount] = useState(4);
  const [results, setResults] = useState<GeneratedName[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/generate-names", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ race, gender, type, archetype, count }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Please try again.",
        );
        setResults([]);
        return;
      }

      setResults(data as GeneratedName[]);
    } catch {
      setError("Network error. Please try again.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-amber-500/80">
        Toolkit
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-zinc-50 sm:text-4xl">
        Name Generator
      </h1>
      <p className="mt-3 text-zinc-500">
        Forge names suited to race, role, and archetype for your table.
      </p>

      <form
        onSubmit={handleGenerate}
        className="mt-10 space-y-6 rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="race" className={labelClassName}>
              {t("race")}
            </label>
            <select
              id="race"
              value={race}
              onChange={(e) => setRace(e.target.value)}
              className={selectClassName}
            >
              {RACES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="gender" className={labelClassName}>
              {t("gender")}
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={selectClassName}
            >
              {GENDERS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="type" className={labelClassName}>
              {t("type")}
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={selectClassName}
            >
              {TYPES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="archetype" className={labelClassName}>
              {t("archetype")}
            </label>
            <select
              id="archetype"
              value={archetype}
              onChange={(e) => setArchetype(e.target.value)}
              className={selectClassName}
            >
              {ARCHETYPES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="count" className={labelClassName}>
              {t("count")}
            </label>
            <span className="font-serif text-lg text-amber-400">{count}</span>
          </div>
          <input
            id="count"
            type="range"
            min={1}
            max={8}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-zinc-800 accent-amber-500"
          />
          <div className="mt-1 flex justify-between text-xs text-zinc-600">
            <span>1</span>
            <span>8</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-12 w-full items-center justify-center rounded-sm border border-amber-500/50 bg-amber-600 px-8 text-sm font-semibold uppercase tracking-wider text-zinc-950 shadow-[0_0_24px_rgba(217,119,6,0.2)] transition-all hover:border-amber-400 hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Generating…" : tButtons("generateNames")}
        </button>
      </form>

      {error && (
        <p className="mt-6 rounded-sm border border-red-900/50 bg-red-950/30 px-4 py-3 text-center text-sm text-red-300">
          {error}
        </p>
      )}

      {results.length > 0 && (
        <ul className="mt-10 grid gap-4">
          {results.map((item, index) => (
            <li
              key={`${item.name}-${index}`}
              className="rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-xl font-medium text-amber-100/90">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.hint}
                  </p>
                </div>
                <CopyButton text={item.name} />
              </div>
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/tools"
        className="mt-10 inline-flex text-sm font-medium uppercase tracking-widest text-zinc-500 transition-colors hover:text-amber-400"
      >
        &larr; {tButtons("backToTools")}
      </Link>
    </section>
  );
}
