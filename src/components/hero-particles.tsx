"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

/** Hard cap on particle velocity (tsparticles speed units). */
const MAX_PARTICLE_SPEED = 2.75;

const particleOptions: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  detectRetina: true,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: { enable: false },
      onClick: { enable: false },
      resize: { enable: true },
    },
  },
  particles: {
    number: {
      value: 50,
      density: { enable: true, width: 900, height: 500 },
    },
    color: {
      value: ["#fbbf24", "#f59e0b", "#d97706", "#fcd34d"],
    },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.3, max: 0.5 },
      animation: {
        enable: true,
        speed: 0.35,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 2 },
    },
    move: {
      enable: true,
      angle: {
        value: 17,
        offset: { min: -10, max: 10 },
      },
      speed: { min: 0.35, max: MAX_PARTICLE_SPEED },
      random: true,
      straight: false,
      drift: { min: -0.55, max: 0.55 },
      decay: 0,
      vibrate: false,
      gravity: {
        enable: false,
        acceleration: 0,
        maxSpeed: MAX_PARTICLE_SPEED,
      },
      warp: false,
      outModes: {
        default: "destroy",
        right: "out",
        left: "destroy",
        top: "destroy",
        bottom: "destroy",
      },
    },
  },
};

function HeroParticlesCanvas({ id }: { id: string }) {
  return (
    <Particles
      id={id}
      className="absolute inset-0 h-full w-full"
      options={particleOptions}
    />
  );
}

type HeroParticlesProps = {
  className?: string;
  id?: string;
};

export function HeroParticles({
  className = "pointer-events-none absolute inset-0 z-[1] min-h-svh h-full w-full",
  id = "hero-embers",
}: HeroParticlesProps = {}) {
  return (
    <div className={className} aria-hidden>
      <ParticlesProvider init={loadSlim}>
        <HeroParticlesCanvas id={id} />
      </ParticlesProvider>
    </div>
  );
}
