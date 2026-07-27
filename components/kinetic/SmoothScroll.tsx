"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Initialize Lenis smooth scroll engine with award-winning fluid viscosity
    const lenis = new Lenis({
      lerp: 0.075, // Silky liquid inertia
      wheelMultiplier: 1.05,
      smoothWheel: true,
    });

    // Pipe Lenis scrolling updates directly into GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Synchronize requestAnimationFrame loop between Lenis and GSAP ticker
    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time: number) => lenis.raf(time * 1000));
    };
  }, []);

  return <>{children}</>;
}
