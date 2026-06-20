"use client";

import { useState } from "react";
import {
  ImageLightbox,
  RegionThumbnail,
  isWideBannerImage,
  type GalleryImage,
} from "@/components/campaign/region-image-gallery";
import {
  getRegionContentSections,
  getRegionImageByPlacement,
  getRegionImages,
  getRegionName,
  type Region,
  type RegionContentSection,
} from "@/data/regions";

function RegionPlaceholderImage({ name }: { name: string }) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-amber-900/30 bg-zinc-900/80"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,83,9,0.12),transparent_70%)]" />
      <div className="flex h-full items-center justify-center px-4">
        <span className="text-center text-sm font-medium uppercase tracking-widest text-zinc-600">
          {name}
        </span>
      </div>
    </div>
  );
}

function RegionSectionContent({ section }: { section: RegionContentSection }) {
  return (
    <div>
      {section.heading && (
        <h4 className="mb-3 font-serif text-lg font-medium text-amber-200/90">
          {section.heading}
        </h4>
      )}
      <div className="space-y-4 leading-relaxed text-zinc-300">
        {section.paragraphs.map((paragraph, index) => (
          <div key={index}>
            <p>{paragraph}</p>
            {section.bullets &&
              section.bullets.length > 0 &&
              (section.bulletsAfter ?? -1) === index && (
                <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-amber-600/70">
                  {section.bullets.map((item, bulletIndex) => (
                    <li key={bulletIndex}>{item}</li>
                  ))}
                </ul>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

function getSectionImagePlacement(
  section: RegionContentSection,
  sectionIndex: number,
): string | null {
  if (sectionIndex === 0) return "start";
  return section.anchorId ?? null;
}

type RegionArticleProps = {
  region: Region;
  locale: string;
};

export function RegionArticle({ region, locale }: RegionArticleProps) {
  const name = getRegionName(region, locale);
  const sections = getRegionContentSections(region, locale);
  const hasPositionedImages = region.images?.some((image) => image.placement);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => setLightboxImage(image);

  if (!hasPositionedImages) {
    const images = getRegionImages(region, locale);
    return (
      <article id={region.id} className="scroll-mt-[100px]">
        <div className="relative z-10 grid gap-8 md:grid-cols-[minmax(0,280px)_1fr] md:items-start">
          <div>
            {images.length > 0 ? (
              <div className="space-y-2">
                {images.map((image) => (
                  <RegionThumbnail
                    key={image.src}
                    image={image}
                    overlay
                    onOpen={() => openLightbox(image)}
                  />
                ))}
              </div>
            ) : (
              <RegionPlaceholderImage name={name} />
            )}
          </div>
          <div>
            <h3 className="font-serif text-2xl font-semibold text-amber-100/90">
              {name}
            </h3>
            <div className="mt-4 space-y-8">
              {sections.map((section, sectionIndex) => (
                <RegionSectionContent key={sectionIndex} section={section} />
              ))}
            </div>
          </div>
        </div>
        <ImageLightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      </article>
    );
  }

  return (
    <article id={region.id} className="scroll-mt-[100px]">
      <div className="relative z-10 space-y-8">
        {sections.map((section, sectionIndex) => {
          const placement = getSectionImagePlacement(section, sectionIndex);
          const image =
            placement !== null
              ? getRegionImageByPlacement(region, placement, locale)
              : null;
          const wideBanner = image !== null && isWideBannerImage(image);

          return (
            <div
              key={sectionIndex}
              className={
                image && !wideBanner
                  ? "grid gap-6 md:grid-cols-[minmax(0,280px)_1fr] md:items-start md:gap-8"
                  : "space-y-6"
              }
            >
              {image ? (
                <RegionThumbnail
                  image={image}
                  overlay
                  onOpen={() => openLightbox(image)}
                />
              ) : null}
              <div>
                {sectionIndex === 0 && (
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-amber-100/90">
                    {name}
                  </h3>
                )}
                <RegionSectionContent section={section} />
              </div>
            </div>
          );
        })}
      </div>
      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </article>
  );
}
