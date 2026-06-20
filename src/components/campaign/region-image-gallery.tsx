"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type GalleryImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

function isWideBannerImage(image: GalleryImage): boolean {
  if (!image.width || !image.height) return false;
  return image.width / image.height >= 2.2;
}

export { isWideBannerImage };

type RegionThumbnailProps = {
  image: GalleryImage;
  onOpen: () => void;
  overlay?: boolean;
};

export function RegionThumbnail({
  image,
  onOpen,
  overlay = false,
}: RegionThumbnailProps) {
  const wide = overlay && isWideBannerImage(image);
  const width = image.width ?? 560;
  const height = image.height ?? 420;

  return (
    <button
      type="button"
      onClick={onOpen}
      className={
        overlay
          ? `group relative z-10 block w-full bg-transparent transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/50 ${
              wide ? "max-w-full" : "mx-auto max-w-[280px]"
            }`
          : "group relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-amber-900/30 bg-zinc-900/80 transition-colors hover:border-amber-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
      }
      aria-label={image.alt}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={overlay ? width : undefined}
        height={overlay ? height : undefined}
        fill={!overlay}
        className={
          overlay
            ? "h-auto w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-[1.01]"
            : "object-cover transition-transform duration-200 group-hover:scale-105"
        }
        sizes={wide ? "(max-width: 1152px) 100vw, 1152px" : "(max-width: 768px) 100vw, 280px"}
      />
    </button>
  );
}

type ImageLightboxProps = {
  image: GalleryImage | null;
  onClose: () => void;
};

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!image) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [image, onClose]);

  if (!image || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <button
        type="button"
        className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
      />
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col items-end">
        <button
          type="button"
          onClick={onClose}
          className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/90 text-xl text-zinc-300 transition-colors hover:border-amber-500/50 hover:text-amber-300"
          aria-label="Close"
        >
          <span aria-hidden>×</span>
        </button>
        <div className="relative max-h-[calc(90vh-3rem)] w-full overflow-hidden rounded-lg border border-amber-900/30 shadow-[0_0_60px_rgba(180,83,9,0.15)]">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width ?? 1920}
            height={image.height ?? 1080}
            className="mx-auto max-h-[calc(90vh-3rem)] w-auto object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
