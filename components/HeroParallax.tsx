"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { ChevronDown, Waves, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroParallax() {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

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

    // Smooth exit parallax for mobile text container
    if (textContainerRef.current) {
      gsap.to(textContainerRef.current, {
        y: -50,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "center center",
          end: "bottom 30%",
          scrub: 1.5,
        },
      });
    }
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-[100dvh] md:h-screen md:min-h-[720px] flex flex-col items-center justify-between overflow-hidden bg-[#001228] select-none pt-28 sm:pt-32 md:pt-36 pb-6"
    >
      {/* ── LANDING BACKGROUND PICTURE (Responsive Focal Architecture) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          ref={imgRef}
          src="/images/master-bg.png"
          alt="Champion swimmer gliding cleanly under crystalline pool water"
          className="w-full h-full object-cover object-[52%_88%] sm:object-[45%_84%] md:object-[38%_80%] scale-[1.08] md:scale-[1.06] will-change-transform filter contrast-[1.05] saturate-[1.08]"
        />

        {/* ── MOBILE HIGH-CONTRAST VIGNETTE & ATMOSPHERIC GRADIENT ── */}
        {/* Deep architectural dark water fade on mobile ensures pristine text contrast without washing out */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000b1c]/85 via-[#000b1c]/25 to-[#001026]/90 md:from-[#000f24]/60 md:via-transparent md:to-[#001026]/40 pointer-events-none" />

        {/* ── WATERMARK ELIMINATION MASK (Bottom Right Corner) ── */}
        <div className="absolute -bottom-12 -right-12 w-80 h-64 bg-gradient-to-tl from-[#002e56] via-[#00467f]/95 to-transparent blur-md opacity-95 pointer-events-none" />
      </div>

      {/* ── TYPOGRAPHY IN UPPER WATER CLEAR ZONE ────────────────── */}
      <div
        ref={textContainerRef}
        className="relative z-10 text-center px-5 sm:px-8 max-w-[1500px] mx-auto mt-6 sm:mt-8 flex flex-col items-center"
      >
        {/* Top Script Accent Line */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial italic font-400 text-cyan-200 sm:text-white text-[24px] sm:text-[36px] md:text-[44px] lg:text-[48px] tracking-wide mb-1 sm:mb-2 drop-shadow-[0_4px_16px_rgba(0,8,22,0.95)]"
        >
          Dive into a
        </motion.p>

        {/* Main Serif Display Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial font-700 text-white text-[38px] leading-[1.05] sm:text-[50px] md:text-[62px] lg:text-[72px] xl:text-[80px] sm:whitespace-nowrap tracking-tight md:tracking-[0.01em] sm:leading-none drop-shadow-[0_6px_30px_rgba(0,10,28,0.98)] max-w-xl sm:max-w-none"
        >
          World of Swimming Excellence
        </motion.h1>

        {/* Mobile & Tablet Interactive Action Button Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto px-4 md:hidden pointer-events-auto"
        >
          <a
            href="#courses"
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#003EFF] hover:bg-white text-white hover:text-[#0B0B0C] font-body text-[12px] font-800 tracking-[0.18em] uppercase transition-all shadow-[0_10px_30px_rgba(0,62,255,0.45)] flex items-center justify-center gap-2 active:scale-95"
          >
            <span>Select Your Track</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </motion.div>
      </div>

      {/* ── DISCREET BOTTOM SCROLL INDICATOR (CENTER) ───────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative z-10 mt-auto hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-[#001026]/60 hover:bg-[#001026]/90 backdrop-blur-md border border-white/25 cursor-pointer pointer-events-auto transition-all shadow-[0_8px_25px_rgba(0,0,0,0.45)] group"
        onClick={() => {
          const nextSection = document.getElementById("courses");
          if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-body font-800 text-[11px] tracking-[0.22em] uppercase text-white/95 group-hover:text-white transition-colors">
          Explore Academy
        </span>
        <ChevronDown className="w-4 h-4 text-[#22bbee] stroke-[2.5] animate-bounce" />
      </motion.div>

      {/* ── STRATEGIC AQUATIC TELEMETRY BADGE (Responsive HUD Glass Bottom Bar) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.75 }}
        className="relative sm:absolute bottom-0 sm:bottom-6 left-auto sm:right-6 z-20 w-[calc(100%-2.5rem)] sm:w-auto mt-8 sm:mt-0 flex items-center gap-3.5 px-5 py-3 sm:py-3.5 rounded-2xl bg-[#00142c]/90 hover:bg-[#001c40]/95 backdrop-blur-xl border border-cyan-400/35 text-white shadow-[0_15px_45px_rgba(0,10,30,0.65)] select-none pointer-events-auto transition-transform hover:scale-102"
      >
        <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-500/20 text-[#22bbee] shrink-0 border border-cyan-400/30">
          <Waves className="w-4.5 h-4.5 text-[#22bbee] animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#22bbee] shadow-[0_0_8px_#22bbee]" />
        </div>
        <div className="text-left font-body pr-1.5 overflow-hidden">
          <div className="text-[10px] sm:text-[11px] font-800 tracking-[0.2em] text-[#22bbee] uppercase flex items-center gap-1.5 truncate">
            <span>Toronto Olympic Flume</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#22bbee] inline-block sm:hidden" />
          </div>
          <div className="text-[12px] sm:text-[13px] font-700 text-white truncate">
            Water Temp: <span className="text-cyan-300">27.4°C</span> · 120fps Telemetry
          </div>
        </div>
      </motion.div>

    </section>
  );
}
