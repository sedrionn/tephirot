"use client";

import { useCallback, useEffect, useState } from "react";

export type CampaignFontSize = "normal" | "large";

export const CAMPAIGN_FONT_SIZE_STORAGE_KEY = "tephirot-campaign-font-size";

export function isCampaignFontSize(value: string | null): value is CampaignFontSize {
  return value === "normal" || value === "large";
}

export function useCampaignFontSize() {
  const [fontSize, setFontSizeState] = useState<CampaignFontSize>("normal");

  useEffect(() => {
    const stored = localStorage.getItem(CAMPAIGN_FONT_SIZE_STORAGE_KEY);
    if (isCampaignFontSize(stored)) {
      setFontSizeState(stored);
    }
  }, []);

  const setFontSize = useCallback((size: CampaignFontSize) => {
    setFontSizeState(size);
    localStorage.setItem(CAMPAIGN_FONT_SIZE_STORAGE_KEY, size);
  }, []);

  return { fontSize, setFontSize };
}
