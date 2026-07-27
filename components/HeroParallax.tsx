"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { ChevronDown, Waves, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroParallax() {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!heroRef.current || !imgRef.current) return;

    // Subtle parallax depth on scroll without distorting initial alignment
    gsap.to(imgRef.current, {
      y: "7%",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-between overflow-hidden bg-[#00142c] select-none pt-24 sm:pt-28 md:pt-32 pb-5"
    >
      {/* ── LANDING BACKGROUND PICTURE (Optimized against Watermark) ── */}
      {/* Anchored at object-[38%_80%] with scale-[1.06] to push swimmer away from left edge and push bottom-right logo off-screen */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          ref={imgRef}
          src="/images/master-bg.png"
          alt="Champion swimmer gliding cleanly under crystalline pool water"
          className="w-full h-full object-cover object-[40%_78%] md:object-[38%_80%] scale-[1.06] will-change-transform filter contrast-[1.04] saturate-[1.06]"
        />
        {/* Soft top atmospheric gradient solely for navigation link contrast */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#000f24]/55 to-transparent pointer-events-none" />

        {/* ── WATERMARK ELIMination MASK (Bottom Right Corner) ── */}
        {/* Seamlessly dissolves any remnant of the corner logo into natural deep pool water */}
        <div className="absolute -bottom-10 -right-10 w-80 h-64 bg-gradient-to-tl from-[#003865] via-[#004e8c]/95 to-transparent blur-md opacity-95 pointer-events-none" />
      </div>

      {/* ── TYPOGRAPHY IN UPPER WATER CLEAR ZONE ────────────────── */}
      <div className="relative z-10 text-center px-4 max-w-[1600px] mx-auto mt-1 sm:mt-2">
        
        {/* Top Script Accent Line */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial italic font-400 text-white text-[26px] sm:text-[36px] md:text-[44px] lg:text-[48px] tracking-wide mb-1 sm:mb-2 drop-shadow-[0_2px_14px_rgba(0,12,32,0.85)]"
        >
          Dive into a
        </motion.p>
        
        {/* Main Serif Display Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial font-700 text-white text-[26px] sm:text-[44px] md:text-[56px] lg:text-[68px] xl:text-[76px] whitespace-nowrap tracking-[0.01em] leading-none drop-shadow-[0_4px_25px_rgba(0,15,40,0.95)]"
        >
          World of Swimming Excellence !
        </motion.h1>

      </div>

      {/* ── DISCREET BOTTOM SCROLL INDICATOR (CENTER) ───────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative z-10 mt-auto flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#001026]/50 hover:bg-[#001026]/80 backdrop-blur-md border border-white/25 cursor-pointer pointer-events-auto transition-all shadow-[0_5px_20px_rgba(0,0,0,0.4)] group"
        onClick={() => {
          const nextSection = document.getElementById("courses");
          if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-body font-700 text-[11px] tracking-[0.22em] uppercase text-white/95 group-hover:text-white transition-colors">
          Explore Academy
        </span>
        <ChevronDown className="w-4 h-4 text-[#22bbee] stroke-[2.5] animate-bounce" />
      </motion.div>

      {/* ── STRATEGIC AQUATIC TELEMETRY BADGE (Eclipses Bottom Right Corner) ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#001633]/85 hover:bg-[#001c40]/95 backdrop-blur-xl border border-cyan-400/30 text-white shadow-[0_15px_40px_rgba(0,10,30,0.6)] select-none pointer-events-auto transition-transform hover:scale-102"
      >
        <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-cyan-500/20 text-[#22bbee] shrink-0">
          <Waves className="w-4.5 h-4.5 w-4 h-4 text-[#22bbee] animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#22bbee] shadow-[0_0_8px_#22bbee]" />
        </div>
        <div className="text-left font-body pr-1">
          <div className="text-[10px] font-800 tracking-[0.22em] text-[#22bbee] uppercase flex items-center gap-1.5">
            <span>Toronto Olympic Chamber</span>
          </div>
          <div className="text-[12px] font-700 text-white sm:whitespace-nowrap">
            Water Temp: <span className="text-cyan-200">27.4°C</span> · Biomechanical Feed
          </div>
        </div>
      </motion.div>

    </section>
  );
}
