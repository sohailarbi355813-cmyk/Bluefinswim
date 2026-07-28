"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 45);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About us", href: "#coaches" },
  ];

  // Direct WhatsApp Reservation Link
  const whatsappReserveUrl = "https://wa.me/14168002444?text=Hello%20Bluefin%20Swim%20Academy,%20I%20would%20like%20to%20reserve%20a%20spot%20in%20your%20swimming%20track.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[5000] w-full transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-[#0B0E11]/90 backdrop-blur-2xl py-4 shadow-[0_15px_40px_rgba(0,0,0,0.7)] border-b border-white/10"
          : "bg-gradient-to-b from-[#0B0E11]/80 via-[#0B0E11]/40 to-transparent py-5 sm:py-6"
      }`}
    >
      <nav className="max-w-[1500px] mx-auto px-5 sm:px-10 md:px-16 flex items-center justify-between">
        
        {/* ── LEFT: CLASSICAL INTEGRATED SWIMMER & WAVE LOGO ───────── */}
        <a
          href="#home"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-center gap-3 no-underline select-none cursor-pointer z-50"
        >
          <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-9 overflow-visible">
              <path
                d="M14 16C18 10 26 8 34 16C40 22 46 20 50 14"
                stroke="white"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="42" cy="9" r="4.5" fill="white" />
              <path
                d="M8 28C16 36 28 32 38 22C46 14 54 18 60 22"
                stroke="#22bbee"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-display-syne font-800 text-[20px] text-white tracking-tight inline-block">
            Bluefin
          </span>
        </a>

        {/* ── CENTER: STREAMLINED DESKTOP NAV LINKS ────────────────── */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body font-600 text-[15px] lg:text-[16px] text-white/90 hover:text-[#22bbee] transition-colors py-1 no-underline block cursor-pointer select-none"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* ── RIGHT: VIBRANT RESERVATION PILL BUTTON (DESKTOP TO WHATSAPP) ─────── */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsappReserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-2.5 rounded-full bg-[#22bbee] hover:bg-[#3ce1ff] text-white hover:text-[#001026] font-body font-700 text-[15px] tracking-wide transition-all duration-300 shadow-[0_6px_22px_rgba(34,187,238,0.4)] hover:shadow-[0_8px_28px_rgba(60,225,255,0.7)] hover:scale-[1.03] no-underline cursor-pointer select-none active:scale-95"
          >
            <span>Reserve Your Spot</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* ── MOBILE HAMBURGER TOGGLE BUTTON ────────────────────────── */}
        <div className="flex items-center md:hidden z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all active:scale-95 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#22bbee]" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

      </nav>

      {/* ── KINETIC GLASS MOBILE HAMBURGER MENU ──────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#0B0E11]/98 backdrop-blur-2xl border-t border-white/10 px-6 pt-6 pb-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
          >
            <div className="flex flex-col gap-5 max-w-sm mx-auto">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  className="font-display-syne font-800 text-[24px] text-white/95 hover:text-[#22bbee] transition-colors py-2 border-b border-white/10 no-underline flex items-center justify-between cursor-pointer"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-5 h-5 text-[#22bbee]/70" />
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <a
                  href={whatsappReserveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 px-6 rounded-2xl bg-[#22bbee] hover:bg-[#3ce1ff] text-[#001026] font-body font-800 text-[15px] uppercase tracking-[0.15em] transition-all shadow-[0_10px_30px_rgba(34,187,238,0.45)] flex items-center justify-center gap-2.5 no-underline active:scale-95 cursor-pointer text-center"
                >
                  <span>Reserve Your Spot</span>
                  <ArrowRight className="w-5 h-5 shrink-0 text-[#001026]" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
