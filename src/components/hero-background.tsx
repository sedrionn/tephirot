"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const mediaClassName =
  "object-cover object-[50%_38%] scale-[1.08]";

export function HeroBackground() {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlayVideo(!mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <>
      <Image
        src="/campaign-hero.png"
        alt=""
        fill
        priority
        className={mediaClassName}
        sizes="100vw"
        aria-hidden
      />
      {playVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/campaign-hero.png"
          className={`absolute inset-0 h-full w-full ${mediaClassName}`}
          aria-hidden
        >
          <source src="/campaign-hero-video.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
