"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 45);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[5000] w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#001226]/95 backdrop-blur-md py-4 shadow-[0_10px_35px_rgba(0,10,30,0.3)] border-b border-white/10"
          : "bg-gradient-to-b from-[#000e20]/80 via-[#000e20]/40 to-transparent py-5 sm:py-6"
      }`}
    >
      <nav className="max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between">
        
        {/* ── LEFT: CLASSICAL INTEGRATED SWIMMER & WAVE LOGO ───────── */}
        <a href="#home" className="group flex items-center gap-3 no-underline select-none cursor-pointer">
          <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-9 overflow-visible">
              {/* Swimmer upper body curve */}
              <path
                d="M14 16C18 10 26 8 34 16C40 22 46 20 50 14"
                stroke="white"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Swimmer head circle */}
              <circle cx="42" cy="9" r="4.5" fill="white" />
              {/* Vibrant aquamarine lower water wave */}
              <path
                d="M8 28C16 36 28 32 38 22C46 14 54 18 60 22"
                stroke="#22bbee"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-display-syne font-800 text-[20px] text-white tracking-tight hidden sm:inline-block">
            Bluefin
          </span>
        </a>

        {/* ── CENTER: CLASSICAL NAV LINKS ───────────────────────────── */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-11">
          <a href="#courses" className="font-body font-500 text-[15px] text-white/90 hover:text-[#22bbee] transition-colors py-1 no-underline block cursor-pointer">
            Why Swimming?
          </a>

          <a href="#home" className="font-body font-600 text-[15px] text-white hover:text-[#22bbee] transition-colors py-1 no-underline block cursor-pointer">
            Home
          </a>

          {/* Resources Dropdown Item */}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="font-body font-500 text-[15px] text-white/90 hover:text-[#22bbee] transition-colors py-1 flex items-center gap-1.5 cursor-pointer bg-transparent border-none outline-none"
            >
              <span>Resources</span>
              <ChevronDown className={`w-4 h-4 text-[#22bbee] transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Box */}
            {resourcesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#001733] border border-cyan-400/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)] py-3 px-2 z-[6000]"
              >
                {[
                  { label: "Biomechanical 4K Labs", href: "#courses" },
                  { label: "Stroke Velocity Guide", href: "#coaches" },
                  { label: "Provincial Race Norms", href: "#testimonials" },
                ].map((sub, idx) => (
                  <a
                    key={idx}
                    href={sub.href}
                    onClick={() => setResourcesOpen(false)}
                    className="block px-4 py-2.5 rounded-xl font-body text-[13px] font-500 text-cyan-100 hover:text-white hover:bg-cyan-500/20 transition-all no-underline cursor-pointer"
                  >
                    {sub.label}
                  </a>
                ))}
              </motion.div>
            )}
          </div>

          <a href="#coaches" className="font-body font-500 text-[15px] text-white/90 hover:text-[#22bbee] transition-colors py-1 no-underline block cursor-pointer">
            About us
          </a>

          <a href="#testimonials" className="font-body font-500 text-[15px] text-white/90 hover:text-[#22bbee] transition-colors py-1 no-underline block cursor-pointer">
            Customers
          </a>
        </div>

        {/* ── RIGHT: VIBRANT AQUAMARINE LOGIN PILL BUTTON ────────────── */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="inline-block px-8 py-2.5 rounded-full bg-[#22bbee] hover:bg-[#3ce1ff] text-white hover:text-[#001026] font-body font-700 text-[15px] tracking-wide transition-all duration-300 shadow-[0_6px_22px_rgba(34,187,238,0.4)] hover:shadow-[0_8px_28px_rgba(60,225,255,0.7)] hover:scale-[1.03] no-underline cursor-pointer"
          >
            Login
          </a>
        </div>

      </nav>
    </header>
  );
}
