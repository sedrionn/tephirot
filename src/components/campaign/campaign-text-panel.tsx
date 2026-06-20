import type { ReactNode } from "react";

/** Shared horizontal inset so headings and text align inside panels. */
export const CAMPAIGN_TEXT_PANEL_INSET = "px-5 sm:px-6";

type CampaignTextPanelProps = {
  children: ReactNode;
  className?: string;
};

/** Local backdrop for a whole campaign section (text, images on top). */
export function CampaignTextPanel({
  children,
  className = "",
}: CampaignTextPanelProps) {
  return (
    <div
      className={`relative w-full rounded-lg border border-zinc-700/40 bg-zinc-950/55 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_4px_16px_rgba(0,0,0,0.15)] sm:py-6 ${CAMPAIGN_TEXT_PANEL_INSET} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
