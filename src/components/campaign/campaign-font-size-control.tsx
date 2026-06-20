"use client";

import { useTranslations } from "next-intl";
import type { CampaignFontSize } from "@/components/campaign/campaign-font-size";

const PRESETS: CampaignFontSize[] = ["normal", "large"];

type CampaignFontSizeControlProps = {
  fontSize: CampaignFontSize;
  onChange: (size: CampaignFontSize) => void;
  compact?: boolean;
};

export function CampaignFontSizeControl({
  fontSize,
  onChange,
  compact = false,
}: CampaignFontSizeControlProps) {
  const t = useTranslations("campaign.fontSize");

  return (
    <div className={compact ? "shrink-0" : "border-t border-zinc-800/60 pt-4 xl:pt-5"}>
      <p
        className={
          compact
            ? "sr-only"
            : "mb-3 pl-4 text-[10px] font-medium uppercase tracking-[0.28em] text-amber-500/80 xl:mb-3 xl:pl-5 xl:text-xs xl:tracking-[0.35em]"
        }
      >
        {t("label")}
      </p>
      <div
        className={compact ? "flex gap-1" : "mx-4 flex gap-1 xl:mx-5"}
        role="group"
        aria-label={t("label")}
      >
        {PRESETS.map((preset) => {
          const isActive = fontSize === preset;

          return (
            <button
              key={preset}
              type="button"
              onClick={() => onChange(preset)}
              aria-pressed={isActive}
              className={`flex-1 rounded-md border px-2 py-1.5 text-[10px] font-medium uppercase tracking-widest transition-colors xl:px-2.5 xl:py-2 xl:text-xs ${
                isActive
                  ? "border-amber-500/60 bg-amber-500/15 text-amber-300"
                  : "border-zinc-700/80 bg-zinc-900/50 text-zinc-400 hover:border-amber-900/50 hover:text-amber-200/90"
              }`}
            >
              {t(preset)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
