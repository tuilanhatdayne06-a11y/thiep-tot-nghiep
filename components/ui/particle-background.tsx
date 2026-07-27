"use client";

import { useEffect, useState } from "react";
// 1. Chỉ lấy Particles, không import initParticlesEngine nữa
import Particles from "@tsparticles/react"; 
// 2. Import trực tiếp engine cốt lõi
import { tsParticles } from "@tsparticles/engine"; 
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // 3. Nạp thẳng loadSlim vào tsParticles (Bỏ qua hoàn toàn cái initParticlesEngine bị lỗi kia)
    loadSlim(tsParticles).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: { enable: false },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: false },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          number: {
            density: { enable: true },
            value: 150,
          },
          opacity: {
            value: { min: 0.1, max: 0.6 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      } as any}
    />
  );
}