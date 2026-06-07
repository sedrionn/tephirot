export const CAMPAIGN_SCROLL_OFFSET = 100;

export function scrollToCampaignTarget(
  id: string,
  behavior: ScrollBehavior = "smooth",
) {
  const el = document.getElementById(id);
  if (!el) return;

  const top =
    el.getBoundingClientRect().top +
    window.scrollY -
    CAMPAIGN_SCROLL_OFFSET;

  window.scrollTo({
    top: Math.max(0, top),
    behavior,
  });
}

export function getActiveCampaignSectionId<T extends string>(
  sectionIds: readonly T[],
  offset = CAMPAIGN_SCROLL_OFFSET,
): T {
  const readingLine = window.scrollY + offset;
  const sections = sectionIds
    .map((id) => {
      const el = document.getElementById(id);
      return el ? { id, el } : null;
    })
    .filter((item): item is { id: T; el: HTMLElement } => item !== null);

  if (sections.length === 0) {
    return sectionIds[0];
  }

  for (const { id, el } of sections) {
    const rect = el.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const bottom = top + rect.height;

    if (readingLine >= top && readingLine < bottom) {
      return id;
    }
  }

  const firstTop = sections[0].el.getBoundingClientRect().top + window.scrollY;
  if (readingLine < firstTop) {
    return sections[0].id;
  }

  return sections[sections.length - 1].id;
}
