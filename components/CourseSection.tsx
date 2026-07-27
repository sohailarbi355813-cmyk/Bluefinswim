"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/kinetic/MagneticButton";
import { Check, CheckCircle2, ArrowRight, Sparkles, Trophy, Flame, Clock, MapPin, Waves, Camera, RefreshCw, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tracks = [
  { id: "youth", label: "Youth Foundation", desc: "Ages 4–8 · Zero Water Anxiety & Stroke Fundamentals" },
  { id: "development", label: "Stroke Velocity", desc: "Ages 7–12 · Multi-Stroke Cadence & Turn Efficiency" },
  { id: "competitive", label: "Provincial Squad", desc: "Ages 9–18 · Regional Race & Podium Preparation" },
  { id: "masters", label: "Adult & Masters", desc: "Ages 18+ · Open-Water Endurance & Triathlon Glide" },
];

const getWhatsAppUrl = (trackName: string) => {
  const text = encodeURIComponent(`Hello Bluefin Swim Academy, I am writing to Reserve Your Track for: ${trackName}`);
  return `https://wa.me/14168002444?text=${text}`;
};

const courses = [
  {
    id: "foundation", num: "01", category: "youth",
    badgeTitle: "Youth Foundation",
    tagline: "Optimized for water buoyancy & confidence",
    title: "Hydro-Foundation Academy",
    price: "$295", period: "10-wk training block",
    schedule: "Tue & Thu · 4:30 PM", pool: "Toronto Olympic Chamber",
    bullets: [
      "2 sessions / weekly sprint",
      "Maximum 1:4 instructor ratio",
      "Underwater safety certification",
      "Progressive breath mechanics",
      "Bi-weekly parent telemetry meeting",
      "Unlimited technique revisions",
      "Pause or transfer training anytime"
    ],
    cardBg: "bg-white text-[#0B0B0C] border border-[#D8D5CF]/70 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.16)]",
    badgeStyle: "bg-[#0B0B0C] text-white shadow-[0_4px_15px_rgba(0,0,0,0.2)]",
    taglineStyle: "text-[#737376]",
    dividerStyle: "border-[#0B0B0C]/10",
    checkStyle: "text-[#003EFF] bg-[#003EFF]/10",
    buttonStyle: "bg-[#0B0B0C] hover:bg-[#003EFF] text-white shadow-[0_12px_28px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_35px_rgba(0,62,255,0.4)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "development", num: "02", category: "development",
    badgeTitle: "Stroke Velocity",
    tagline: "Optimized for multi-stroke mastery & turns",
    title: "Stroke Development Lab",
    price: "$340", period: "10-wk training block",
    schedule: "Mon & Wed · 5:15 PM", pool: "Downtown Toronto Pool",
    bullets: [
      "2 sessions / weekly sprint",
      "Senior Technical Coach & Analyst",
      "Streamlined turn & kick propulsion",
      "Butterfly & bilateral breathing",
      "Weekly diagnostic telemetry meeting",
      "Unlimited stroke video feedback",
      "Pause or transfer training anytime"
    ],
    cardBg: "bg-white text-[#0B0B0C] border-2 border-[#003EFF]/45 shadow-[0_25px_70px_rgba(0,62,255,0.18)] hover:shadow-[0_30px_90px_rgba(0,62,255,0.28)] relative z-10",
    badgeStyle: "bg-[#003EFF] text-white shadow-[0_6px_20px_rgba(0,62,255,0.45)]",
    taglineStyle: "text-[#0B0B0C]/80 font-700",
    dividerStyle: "border-[#003EFF]/20",
    checkStyle: "text-[#003EFF] bg-[#003EFF]/15",
    buttonStyle: "bg-[#003EFF] hover:bg-[#0B0B0C] text-white shadow-[0_15px_35px_rgba(0,62,255,0.45)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)]",
    buttonText: "Reserve Your Track",
    popularTag: true,
  },
  {
    id: "competitive", num: "03", category: "competitive",
    badgeTitle: "Provincial Squad",
    tagline: "Optimized for podium qualifiers & speed",
    title: "Provincial Race Squad",
    price: "$420", period: "seasonal championship block",
    schedule: "Daily AM & PM Slots", pool: "Toronto 50m Olympic Facility",
    bullets: [
      "Custom intensive training sprints",
      "2 Dedicated Olympic Directors",
      "4K 120fps underwater camera feedback",
      "Dryland explosive mechanics & gym",
      "Custom race strategy meetings",
      "Unlimited diagnostic trials & revisions",
      "Pause or transfer training anytime"
    ],
    cardBg: "bg-[#0B0B0C] text-white border border-white/15 shadow-[0_30px_80px_rgba(0,10,35,0.35)] hover:shadow-[0_35px_95px_rgba(0,62,255,0.25)]",
    badgeStyle: "bg-white/15 text-white backdrop-blur-md border border-white/20 shadow-[0_6px_20px_rgba(0,0,0,0.4)]",
    taglineStyle: "text-[#EBE8E2]/80",
    dividerStyle: "border-white/15",
    checkStyle: "text-[#22bbee] bg-white/10",
    buttonStyle: "bg-[#003EFF] hover:bg-white text-white hover:text-[#0B0B0C] shadow-[0_15px_38px_rgba(0,62,255,0.5)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.4)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "masters", num: "04", category: "masters",
    badgeTitle: "Masters & Tri",
    tagline: "Optimized for open-water endurance & glide",
    title: "Endurance & Triathlon Glide",
    price: "$310", period: "10-wk endurance block",
    schedule: "Mon, Wed, Fri · 6:00 AM", pool: "Toronto Harbourfront Studio",
    bullets: [
      "3 morning sessions / weekly sprint",
      "Total Immersion glide mechanics",
      "Open-water sighting & drafting",
      "Shoulder preservation ergonomics",
      "Bi-weekly performance review meeting",
      "Unlimited pacing feedback & revisions",
      "Pause or transfer training anytime"
    ],
    cardBg: "bg-[#F5F4F0] text-[#0B0B0C] border border-[#D8D5CF] shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.16)]",
    badgeStyle: "bg-[#0B0B0C] text-white shadow-[0_4px_15px_rgba(0,0,0,0.2)]",
    taglineStyle: "text-[#737376]",
    dividerStyle: "border-[#0B0B0C]/10",
    checkStyle: "text-[#003EFF] bg-[#003EFF]/10",
    buttonStyle: "bg-[#0B0B0C] hover:bg-[#003EFF] text-white shadow-[0_12px_28px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_35px_rgba(0,62,255,0.4)]",
    buttonText: "Reserve Your Track",
  }
];

const diagnosticDeck = [
  {
    id: "telemetry",
    badge: "Custom Diagnostic Track",
    facility: "Toronto Olympic Flume",
    tagline: "Optimized for 4K 120fps hydro-optic telemetry",
    title: "Underwater Video Telemetry Lab",
    desc: "Step inside Toronto's computerized hydro-flume. Synchronized underwater multi-angle camera lenses capture your freestyle cadence, stroke mechanics, and pull efficiency down to the millisecond.",
    bullets: [
      "Synchronized 4K multi-angle lenses",
      "Millisecond pull & kick analysis",
      "Digital export of raw video footage"
    ],
    cardStyle: "bg-[#0B0B0C] text-white border border-white/15 shadow-[0_30px_90px_rgba(0,10,35,0.3)]",
    badgeStyle: "bg-white/15 text-white border border-white/20",
    taglineStyle: "text-[#EBE8E2]/80",
    checkStyle: "bg-white/10 text-[#22bbee]",
    dividerStyle: "border-white/15",
  },
  {
    id: "drag-lab",
    badge: "Hydro-Dynamic Drag Lab",
    facility: "High Velocity Diagnostics",
    tagline: "Optimized for zero drag & propulsion mastery",
    title: "Turn & Drag Reduction Sprint",
    desc: "Identify and eliminate active water friction. Our computerized sensors detect 0.02s latency spikes during your off-the-wall breakouts, flip turns, and bilateral breathing rotation.",
    bullets: [
      "0.02s turn & breakout drag detection",
      "Water turbulence & posture mapping",
      "Customized drag-coefficient deck"
    ],
    cardStyle: "bg-[#003EFF] text-white border border-white/20 shadow-[0_30px_90px_rgba(0,62,255,0.35)]",
    badgeStyle: "bg-white/20 text-white border border-white/30",
    taglineStyle: "text-white/90 font-700",
    checkStyle: "bg-white/20 text-white",
    dividerStyle: "border-white/25",
  },
  {
    id: "consultation",
    badge: "Private Dispatch",
    facility: "Immediate Reservation",
    tagline: "Optimized for tailored athletic roadmapping",
    title: "Executive Chief Consultation",
    desc: "Includes a 1-on-1 analytical review meeting with our Chief Biomechanist, customized technique prescriptions, and immediate training timeline scheduling.",
    bullets: [
      "1-on-1 analytical review meeting",
      "Custom drill & technique prescription",
      "Zero recurring membership needed"
    ],
    cardStyle: "bg-white text-[#0B0B0C] border border-[#D8D5CF] shadow-[0_25px_80px_rgba(0,0,0,0.12)]",
    badgeStyle: "bg-[#0B0B0C] text-white",
    taglineStyle: "text-[#737376]",
    checkStyle: "bg-[#003EFF]/10 text-[#003EFF]",
    dividerStyle: "border-[#0B0B0C]/10",
    price: "$480",
    period: "2-hour diagnostic sprint",
    cta: "Reserve Your Track",
    buttonStyle: "bg-[#003EFF] hover:bg-[#0B0B0C] text-white shadow-[0_15px_35px_rgba(0,62,255,0.45)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)]",
  }
];

export default function CourseSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPhoto, setCurrentPhoto] = useState<"/images/underwater-lanes.jpg" | "/images/velocity-track.jpg">("/images/underwater-lanes.jpg");

  const filteredCourses = activeTab === "all"
    ? courses
    : courses.filter((c) => c.category === activeTab);

  // Animation References
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const titleLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const tagRef = useRef<HTMLDivElement>(null);

  const cardsGridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const guaranteeRef = useRef<HTMLDivElement>(null);
  const vipGridRef = useRef<HTMLDivElement>(null);
  const vipCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!headerRef.current || !imageBoxRef.current || !textColRef.current) return;

    const mm = gsap.matchMedia();

    // ── 1. HEADER KINETICS ─────────────────────────────────────────────
    mm.add("(min-width: 1024px)", () => {
      gsap.set(tagRef.current, { opacity: 0, y: -40 });
      gsap.set(titleLinesRef.current, { opacity: 0, y: 100, x: -40, scale: 1.04 });
      gsap.set(imageBoxRef.current, { opacity: 0, x: "55%", scale: 0.88 });

      const enterTl = gsap.timeline({
        scrollTrigger: { trigger: headerRef.current, start: "top 95%", end: "top 20%", scrub: 2.8 },
      });
      enterTl.to(imageBoxRef.current, { x: "0%", opacity: 1, scale: 1, duration: 3.2, ease: "power2.out" }, 0);
      enterTl.to(tagRef.current, { y: 0, opacity: 1, duration: 1.8, ease: "power2.out" }, 0.5);
      enterTl.to(titleLinesRef.current, { y: 0, x: 0, opacity: 1, scale: 1, stagger: 0.45, duration: 2.4, ease: "power3.out" }, 0.7);

      const exitTl = gsap.timeline({
        scrollTrigger: { trigger: headerRef.current, start: "top 10%", end: "bottom 45%", scrub: 2.5 },
      });
      exitTl.to(titleLinesRef.current, { y: -65, opacity: 0, scale: 0.94, stagger: 0.1, duration: 2, ease: "power2.inOut" }, 0);
      exitTl.to([tagRef.current, imageBoxRef.current], { y: -65, opacity: 0, scale: 0.92, duration: 2, ease: "power2.inOut" }, 0.15);
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.set(tagRef.current, { opacity: 0, y: -25 });
      gsap.set(titleLinesRef.current, { opacity: 0, y: 50, x: -20 });
      gsap.set(imageBoxRef.current, { opacity: 0, x: "35%", scale: 0.9 });

      const mobileTextTl = gsap.timeline({
        scrollTrigger: { trigger: textColRef.current, start: "top 90%", end: "bottom 50%", scrub: 2 },
      });
      mobileTextTl.to(tagRef.current, { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }, 0);
      mobileTextTl.to(titleLinesRef.current, { y: 0, x: 0, opacity: 1, stagger: 0.3, duration: 2, ease: "power2.out" }, 0.2);
      mobileTextTl.to([tagRef.current, ...titleLinesRef.current], { y: -30, opacity: 0, stagger: 0.08, duration: 1.5, ease: "power2.in" }, 3);

      const mobilePhotoTl = gsap.timeline({
        scrollTrigger: { trigger: imageBoxRef.current, start: "top 88%", end: "bottom 30%", scrub: 2 },
      });
      mobilePhotoTl.to(imageBoxRef.current, { x: "0%", opacity: 1, scale: 1, duration: 2.5, ease: "power2.out" }, 0);
      mobilePhotoTl.to(imageBoxRef.current, { y: -40, opacity: 0, scale: 0.93, duration: 1.8, ease: "power2.in" }, 2.8);
    });

    // ── 2. PRICING DECK CHOREOGRAPHY (Stacked Dealing: Center on Desktop, Bottom on Mobile) ──
    const activeCards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);

    // Widescreen & Desktop (>=1280px): Horizontal center stack gathering & dealing
    mm.add("(min-width: 1280px)", () => {
      if (!cardsGridRef.current || activeCards.length === 0) return;
      gsap.set(cardsGridRef.current, { perspective: 2000 });

      activeCards.forEach((card, i) => {
        const isPopular = courses[i]?.popularTag;
        const targetScale = isPopular ? 1.03 : 1;
        card.dataset.targetScale = targetScale.toString();

        const centerOffset = i === 0 ? 160 : i === 1 ? 53 : i === 2 ? -53 : -160;
        const fannedTilt = i === 0 ? -12 : i === 1 ? -4 : i === 2 ? 4 : 12;
        const verticalSpread = i === 0 ? 30 : i === 1 ? 10 : i === 2 ? -10 : -30;

        gsap.set(card, {
          xPercent: centerOffset,
          y: verticalSpread + 80,
          rotateZ: fannedTilt,
          rotateX: 18,
          scale: 0.85,
          opacity: 0,
          transformOrigin: "center center",
          zIndex: 4 - i,
        });
      });

      const deckTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: cardsGridRef.current,
          start: "top 90%",
          end: "top 10%",
          scrub: 2,
        },
      });

      deckTimeline.to(activeCards, {
        opacity: 1, y: 0, scale: 0.95, duration: 1.5, ease: "power2.out",
      }, 0);

      activeCards.forEach((card, i) => {
        const tScale = parseFloat(card.dataset.targetScale || "1");
        deckTimeline.to(card, {
          xPercent: 0, y: 0, rotateZ: 0, rotateX: 0, scale: tScale, duration: 2, ease: "power3.out",
        }, 1.2 + i * 0.45);
      });
    });

    // Mobile & Tablet (<1280px): Bottom-Up Stacked Card Dealing (100% full view per card without top overlapping)
    mm.add("(max-width: 1279px)", () => {
      if (!cardsGridRef.current || activeCards.length === 0) return;
      gsap.set(cardsGridRef.current, { perspective: 1600 });

      activeCards.forEach((card, i) => {
        const isPopular = courses[i]?.popularTag;
        const targetScale = isPopular ? 1.02 : 1;
        card.dataset.targetScale = targetScale.toString();

        // Alternating fanned rotation mimicking a physical deck emerging from the bottom of the screen
        const fanTilt = i === 0 ? 0 : i === 1 ? -6 : i === 2 ? 5 : -8;
        // Shift downwards into the bottom deck space rather than upwards, preventing ANY clipping of the active card
        const emergeY = i === 0 ? 60 : 160 + i * 50;

        gsap.set(card, {
          y: emergeY,
          rotateZ: fanTilt,
          rotateX: 22,
          scale: 0.88 - i * 0.03,
          opacity: i === 0 ? 0.2 : 0,
          transformOrigin: "center bottom",
          zIndex: i + 1, // Ascending zIndex ensures cards emerge cleanly from underneath without hiding earlier content
        });
      });

      const mobileBottomDeckTl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsGridRef.current,
          start: "top 92%",
          end: "bottom 35%",
          scrub: 1.8,
        },
      });

      // Card 0 locks into complete alignment immediately upon arriving at the section
      const tScale0 = parseFloat(activeCards[0].dataset.targetScale || "1");
      mobileBottomDeckTl.to(activeCards[0], {
        opacity: 1, y: 0, rotateZ: 0, rotateX: 0, scale: tScale0, duration: 1.5, ease: "power2.out",
      }, 0);

      // Subsequent cards rise out of the bottom fanned deck one by one as the user scrolls down to them
      activeCards.slice(1).forEach((card, i) => {
        const tScale = parseFloat(card.dataset.targetScale || "1");
        mobileBottomDeckTl.to(card, {
          opacity: 1, y: 0, rotateZ: 0, rotateX: 0, scale: tScale, duration: 2.5, ease: "power3.out",
        }, 0.8 + i * 1.3); // Widened delay ensures user views each card in 100% full height before next one emerges from below
      });
    });

    // ── 3. GUARANTEE PILL BANNER KINETICS ─────────────────────────────
    if (guaranteeRef.current) {
      gsap.set(guaranteeRef.current, { opacity: 0, y: 80, scale: 0.9 });
      gsap.to(guaranteeRef.current, {
        opacity: 1, y: 0, scale: 1, ease: "power2.out",
        scrollTrigger: { trigger: guaranteeRef.current, start: "top 94%", end: "top 65%", scrub: 1.6 },
      });
    }

    // ── 4. VIP UNDERWATER TELEMETRY DECK (Stacked Dealing: Center on Desktop, Bottom on Mobile) ──
    const activeVipCards = vipCardRefs.current.filter((c): c is HTMLDivElement => c !== null);

    mm.add("(min-width: 1024px)", () => {
      if (!vipGridRef.current || activeVipCards.length === 0) return;
      gsap.set(vipGridRef.current, { perspective: 2000 });

      activeVipCards.forEach((card, i) => {
        const xCenterOffset = i === 0 ? 108 : i === 1 ? 0 : -108;
        const fanAngle = i === 0 ? -10 : i === 1 ? 0 : 10;
        const yElevate = i === 0 ? 25 : i === 1 ? -10 : 25;

        gsap.set(card, {
          xPercent: xCenterOffset,
          y: yElevate + 90,
          rotateZ: fanAngle,
          rotateX: 20,
          scale: 0.86,
          opacity: 0,
          transformOrigin: "center center",
          zIndex: 5 - i,
        });
      });

      const vipDeckTl = gsap.timeline({
        scrollTrigger: {
          trigger: vipGridRef.current,
          start: "top 88%",
          end: "top 18%",
          scrub: 2,
        },
      });

      vipDeckTl.to(activeVipCards, {
        opacity: 1, y: 0, scale: 0.95, duration: 1.4, ease: "power2.out",
      }, 0);

      activeVipCards.forEach((card, i) => {
        vipDeckTl.to(card, {
          xPercent: 0, y: 0, rotateZ: 0, rotateX: 0, scale: 1, duration: 2, ease: "power3.out",
        }, 1.0 + i * 0.5);
      });
    });

    // Mobile & Tablet (<1024px): Bottom-Up Stacked Telemetry Card Dealing
    mm.add("(max-width: 1023px)", () => {
      if (!vipGridRef.current || activeVipCards.length === 0) return;
      gsap.set(vipGridRef.current, { perspective: 1600 });

      activeVipCards.forEach((card, i) => {
        const fanAngle = i === 0 ? 0 : i === 1 ? 5 : -7;
        const emergeOffset = i === 0 ? 50 : 150 + i * 60;

        gsap.set(card, {
          y: emergeOffset,
          rotateZ: fanAngle,
          rotateX: 20,
          scale: 0.88 - i * 0.03,
          opacity: i === 0 ? 0.2 : 0,
          transformOrigin: "center bottom",
          zIndex: i + 1,
        });
      });

      const mobileVipBottomTl = gsap.timeline({
        scrollTrigger: {
          trigger: vipGridRef.current,
          start: "top 90%",
          end: "bottom 30%",
          scrub: 1.8,
        },
      });

      mobileVipBottomTl.to(activeVipCards[0], {
        opacity: 1, y: 0, rotateZ: 0, rotateX: 0, scale: 1, duration: 1.4, ease: "power2.out",
      }, 0);

      activeVipCards.slice(1).forEach((card, i) => {
        mobileVipBottomTl.to(card, {
          opacity: 1, y: 0, rotateZ: 0, rotateX: 0, scale: 1, duration: 2.5, ease: "power3.out",
        }, 0.9 + i * 1.4);
      });
    });

    ScrollTrigger.refresh();

    return () => mm.revert();
  }, { scope: sectionRef, dependencies: [activeTab] });

  return (
    <section ref={sectionRef} id="courses" className="relative py-20 sm:py-28 lg:py-40 z-10 border-t border-[#0B0B0C]/10 overflow-hidden bg-[#EBE8E2]">
      
      <div className="max-w-[1550px] mx-auto px-5 sm:px-10 lg:px-14">
        
        {/* ── HIGH-PERFORMANCE KINETIC HEADER ──────────────────── */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center mb-20 sm:mb-24 pb-16 border-b border-[#0B0B0C]/15 min-h-[500px]">
          
          <div ref={textColRef} className="lg:col-span-6 space-y-3 sm:space-y-4 lg:pr-4 z-10">
            <div
              ref={tagRef}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-md bg-[#003EFF]/10 border border-[#003EFF]/25 text-[#003EFF] text-[10px] sm:text-[11px] font-body font-800 tracking-[0.22em] uppercase w-fit opacity-0"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Architected Athletic Curriculars</span>
            </div>
            
            <div className="space-y-1 sm:space-y-2 pt-2">
              <div className="overflow-hidden p-1 -m-1">
                <div
                  ref={(el) => { titleLinesRef.current[0] = el; }}
                  className="font-display-syne font-900 text-[#0B0B0C] leading-[0.9] tracking-[-0.04em] text-[3.2rem] sm:text-[5.5rem] md:text-[6.3rem] select-none opacity-0"
                >
                  SELECT
                </div>
              </div>

              <div className="overflow-hidden p-1 -m-1">
                <div
                  ref={(el) => { titleLinesRef.current[1] = el; }}
                  className="font-display-syne font-900 text-[#0B0B0C] leading-[0.9] tracking-[-0.04em] text-[3.2rem] sm:text-[5.5rem] md:text-[6.3rem] select-none opacity-0"
                >
                  YOUR
                </div>
              </div>

              <div className="overflow-hidden p-1 -m-1">
                <div
                  ref={(el) => { titleLinesRef.current[2] = el; }}
                  className="font-display-syne font-900 text-[#0B0B0C] leading-[0.9] tracking-[-0.04em] text-[3.2rem] sm:text-[5.5rem] md:text-[6.3rem] select-none opacity-0"
                >
                  AQUATIC
                </div>
              </div>

              <div className="overflow-hidden p-1 -m-1 pt-1.5">
                <div
                  ref={(el) => { titleLinesRef.current[3] = el; }}
                  className="font-editorial text-[#003EFF] leading-[0.95] tracking-[-0.02em] text-[2.8rem] sm:text-[4.8rem] md:text-[5.6rem] italic font-700 select-none opacity-0"
                >
                  Velocity Track.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            <div
              ref={imageBoxRef}
              className="relative w-full h-[450px] sm:h-[600px] md:h-[660px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden glass-light-card p-3 sm:p-5 shadow-[0_30px_90px_rgba(0,10,35,0.18)] border border-[#003EFF]/25 flex flex-col justify-between group opacity-0"
            >
              <div className="absolute inset-3 sm:inset-5 rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden bg-[#00142c]">
                <img
                  src={currentPhoto}
                  alt="Toronto Olympic Swimming Lanes Velocity Track"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05] saturate-[1.05] select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000d20]/95 via-[#000d20]/35 to-transparent pointer-events-none" />
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4">
                <span className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/20 text-white font-body text-[10px] sm:text-[11px] font-800 tracking-[0.16em] uppercase shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#22bbee] animate-pulse shrink-0" />
                  <span className="truncate">Toronto Chamber · Lane 4</span>
                </span>

                <button
                  onClick={() => setCurrentPhoto((p) => (p === "/images/underwater-lanes.jpg" ? "/images/velocity-track.jpg" : "/images/underwater-lanes.jpg"))}
                  className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-[#003EFF] hover:bg-white text-white hover:text-[#0B0B0C] font-body text-[10px] sm:text-[11px] font-800 tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-lg active:scale-95 shrink-0"
                >
                  <RefreshCw className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span>Switch Cam</span>
                </button>
              </div>

              <div className="relative z-10 p-4 sm:p-7 text-white space-y-1.5 sm:space-y-2">
                <div className="text-[10px] sm:text-[11px] font-body font-800 uppercase tracking-[0.22em] text-[#22bbee] flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 shrink-0" />
                  <span>4K Hydro-Optic Perspective</span>
                </div>
                <p className="font-body font-500 text-white/95 text-[14px] sm:text-[17px] leading-relaxed max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                  Choose your swimming stage below. Every track operates in our light-flooded Toronto Olympic training pools with strict small-group athlete ratios.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ── KINETIC BENTO TAB SWITCHER (DIRECT SERVICE CARDS ANCHOR) ── */}
        <div id="service-cards" className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 sm:mb-16 justify-center md:justify-start scroll-mt-28">
          <button
            onClick={() => setActiveTab("all")}
            data-cursor-text="FILTER"
            className={`px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-body text-[11px] sm:text-[12px] font-800 tracking-[0.16em] uppercase transition-all relative ${
              activeTab === "all"
                ? "bg-[#0B0B0C] text-white shadow-[0_8px_25px_rgba(0,0,0,0.18)] scale-105"
                : "bg-white/80 border border-[#D8D5CF] text-[#3A3A3C] hover:text-[#003EFF] hover:border-[#003EFF]"
            }`}
          >
            All Tracks (04)
          </button>
          
          {tracks.map((t) => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                data-cursor-text="TRACK"
                className={`px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-body text-[11px] sm:text-[12px] font-800 tracking-[0.16em] uppercase transition-all relative flex items-center gap-2 ${
                  isActive
                    ? "bg-[#003EFF] text-white shadow-[0_10px_30px_rgba(0,62,255,0.35)] scale-105"
                    : "bg-white/80 border border-[#D8D5CF] text-[#3A3A3C] hover:text-[#003EFF] hover:border-[#003EFF]"
                }`}
              >
                <span>{t.label}</span>
                {isActive && <motion.span layoutId="dot" className="w-2 h-2 rounded-full bg-white" />}
              </button>
            );
          })}
        </div>

        {/* ── REFERENCE-STYLE INTERACTIVE PRICING DECK (Playing Card Stack Engine) ── */}
        <div ref={cardsGridRef} id="track-cards-grid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 sm:gap-8 items-stretch mb-16 [perspective:2000px] scroll-mt-28">
          {filteredCourses.map((c, i) => {
            return (
              <div
                key={c.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                data-cursor-text="SELECT"
                className={`${c.cardBg} p-7 sm:p-9 rounded-[2.2rem] sm:rounded-[2.6rem] flex flex-col justify-between relative overflow-hidden transition-shadow duration-300 opacity-0`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`${c.badgeStyle} px-5 py-2 sm:py-2.5 rounded-full font-body font-800 text-[13px] sm:text-[14px] tracking-wide inline-block select-none`}>
                      {c.badgeTitle}
                    </span>
                    {c.popularTag && (
                      <span className="text-[10px] font-body font-800 text-[#003EFF] bg-[#003EFF]/10 px-2.5 py-1 rounded-md uppercase tracking-widest border border-[#003EFF]/20 shrink-0">
                        High Velocity
                      </span>
                    )}
                  </div>

                  <div className={`text-[14px] sm:text-[15px] font-body font-600 tracking-tight flex items-center gap-2.5 mb-7 ${c.taglineStyle}`}>
                    <span className="w-1 h-4 bg-[#003EFF] rounded-full inline-block shrink-0" />
                    <span>{c.tagline}</span>
                  </div>

                  <div className={`pb-7 mb-8 border-b ${c.dividerStyle}`}>
                    <h3 className="font-display-syne font-800 text-[20px] sm:text-[22px] tracking-tight mb-3 leading-snug">
                      {c.title}
                    </h3>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display-syne font-900 text-[44px] sm:text-[52px] tracking-tight leading-none">
                        {c.price}
                      </span>
                      <span className="font-body text-[12px] sm:text-[13px] font-600 text-[#737376]">
                        / {c.period}
                      </span>
                    </div>
                    <div className="mt-3.5 flex items-center gap-2 font-body text-[12px] font-700 text-[#737376]">
                      <MapPin className="w-3.5 h-3.5 text-[#003EFF] shrink-0" />
                      <span className="truncate">{c.pool} · {c.schedule}</span>
                    </div>
                  </div>

                  <div className="space-y-3.5 mb-10">
                    {c.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-start gap-3 text-[14px] sm:text-[15px] font-body font-600 leading-snug">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${c.checkStyle}`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={getWhatsAppUrl(c.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 sm:py-4.5 px-6 rounded-[1.2rem] font-body font-800 text-[14px] uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2.5 select-none text-center active:scale-[0.97] ${c.buttonStyle}`}
                  >
                    <span>{c.buttonText}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── REFERENCE-STYLE BOTTOM GUARANTEE BANNER PILL ──────── */}
        <div
          ref={guaranteeRef}
          className="max-w-4xl mx-auto py-5 px-6 sm:px-10 rounded-full bg-white/95 border border-[#D8D5CF] shadow-[0_15px_45px_rgba(0,0,0,0.09)] backdrop-blur-md flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left mb-20 opacity-0"
        >
          <span className="w-8 h-8 rounded-full bg-[#003EFF]/15 text-[#003EFF] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-[#003EFF]" />
          </span>
          <p className="font-body font-600 text-[#0B0B0C] text-[13px] sm:text-[15px]">
            <span className="font-800 text-[#003EFF]">1st-Block Guarantee —</span> If your swimmer is not 100% satisfied with technique improvement and buoyancy after their initial training sprint, tuition is fully reimbursed!
          </p>
        </div>

        {/* ── 3-CARD VIP DIAGNOSTIC DECK ───────────────────────────── */}
        <div className="mb-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0B0C] text-white text-[11px] font-body font-800 uppercase tracking-[0.2em] mb-4">
              <Camera className="w-3.5 h-3.5 text-[#22bbee]" />
              <span>Toronto Hydraulic Telemetry</span>
            </div>
            <h2 className="font-display-syne font-800 text-[32px] sm:text-[46px] text-[#0B0B0C] tracking-tight leading-none">
              1-on-1 Underwater Video Telemetry
            </h2>
          </div>

          <div ref={vipGridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch [perspective:2000px]">
            {diagnosticDeck.map((card, i) => (
              <div
                key={card.id}
                ref={(el) => { vipCardRefs.current[i] = el; }}
                data-cursor-text="VIP LAB"
                className={`${card.cardStyle} p-8 sm:p-10 rounded-[2.4rem] sm:rounded-[2.8rem] flex flex-col justify-between relative overflow-hidden transition-shadow duration-300 opacity-0`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <span className={`${card.badgeStyle} px-5 py-2 sm:py-2.5 rounded-full font-body font-800 text-[13px] tracking-wide inline-block select-none shadow-[0_4px_15px_rgba(0,0,0,0.25)]`}>
                      {card.badge}
                    </span>
                    <span className="font-body font-800 text-[11px] uppercase tracking-widest opacity-80 px-3 py-1 rounded-full border border-current/20">
                      {card.facility}
                    </span>
                  </div>

                  <div className={`text-[14px] font-body font-600 tracking-tight flex items-center gap-2.5 mb-7 ${card.taglineStyle}`}>
                    <span className="w-1 h-4 bg-current opacity-60 rounded-full inline-block shrink-0" />
                    <span>{card.tagline}</span>
                  </div>

                  <div className={`pb-7 mb-8 border-b ${card.dividerStyle}`}>
                    <h3 className="font-display-syne font-800 text-[24px] sm:text-[28px] tracking-tight mb-4 leading-[1.1]">
                      {card.title}
                    </h3>
                    <p className="font-body text-[15px] sm:text-[16px] leading-relaxed font-500 opacity-90">
                      {card.desc}
                    </p>
                    
                    {card.price && (
                      <div className="mt-6 pt-6 border-t border-[#0B0B0C]/10 flex flex-wrap items-baseline gap-2">
                        <span className="font-display-syne font-900 text-[40px] sm:text-[48px] tracking-tight leading-none text-[#0B0B0C]">
                          {card.price}
                        </span>
                        <span className="font-body text-[13px] font-700 text-[#737376]">
                          / {card.period}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 mb-10">
                    {card.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-start gap-3.5 text-[15px] font-body font-600 leading-snug opacity-95">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${card.checkStyle}`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {card.cta ? (
                    <a
                      href={getWhatsAppUrl(card.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-5 px-8 rounded-[1.4rem] font-body font-800 text-[14px] uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-3 active:scale-[0.98] select-none ${card.buttonStyle}`}
                    >
                      <span>{card.cta}</span>
                      <ArrowRight className="w-4.5 h-4.5 shrink-0" />
                    </a>
                  ) : (
                    <div className="w-full py-4 px-6 rounded-[1.2rem] bg-current/5 border border-current/15 text-center font-body font-700 text-[12px] uppercase tracking-[0.15em] opacity-80 flex items-center justify-center gap-2 select-none">
                      <Clock className="w-4 h-4" />
                      <span>Available for all athletic skill tiers</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
