"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import StaggeredText from "@/components/kinetic/StaggeredText";
import { Star, ShieldCheck, Award, Sparkles, Trophy, CheckCircle, MapPin, Quote } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const coaches = [
  {
    initials: "MV",
    name: "Marcus Vance",
    role: "Head Coach & Hydrodynamic Director",
    spec: "Olympic Trialist · Sprint Velocity Optimization",
    exp: "14 yrs National Faculty",
    bio: "Former Canadian National Team sprint representative. Specializes in biomechanical stroke efficiency, micro-turbulence hand entry analysis, and competitive race cadence for high-performance athletes.",
    acclaim: "Coached 42 Provincial Gold Medalists",
    watermark: "MARCUS V.",
    orbGradient: "from-[#003EFF] via-[#1E88E5] to-[#001026]",
    auraShadow: "shadow-[0_15px_80px_rgba(0,62,255,0.38)] hover:shadow-[0_0_95px_rgba(0,62,255,0.65)]",
    layoutDirection: "flex-col lg:flex-row",
    textAlign: "text-left",
    alignItems: "items-start",
  },
  {
    initials: "SJ",
    name: "Sarah Jenkins",
    role: "Director of Youth & Foundation Pedagogy",
    spec: "Certified Child Aquatics & Safety Specialist",
    exp: "10 yrs Youth Lead",
    bio: "Pioneered our zero-anxiety aquatic foundation method. Her scientifically structured drills systematically eliminate water fear, transforming hesitant beginners into fluent, podium-ready swimmers within months.",
    acclaim: "Red Cross National Safety Award",
    watermark: "SARAH J.",
    orbGradient: "from-[#00E5FF] via-[#003EFF] to-[#0B1D3A]",
    auraShadow: "shadow-[0_15px_80px_rgba(34,187,238,0.38)] hover:shadow-[0_0_95px_rgba(34,187,238,0.65)]",
    layoutDirection: "flex-col lg:flex-row-reverse",
    textAlign: "text-left lg:text-right",
    alignItems: "items-start lg:items-end",
  },
  {
    initials: "ER",
    name: "Elena Rostova",
    role: "Masters Endurance & Open-Water Director",
    spec: "3× Ironman Champion & Distance Specialist",
    exp: "12 yrs Endurance Lead",
    bio: "Three-time Ironman finisher and national distance swimming record holder. Her Total Immersion instruction unlocks frictionless glide mechanics, cutting oxygen consumption and eliminating open-water panic.",
    acclaim: "Ironman Open-Water Course Record Holder",
    watermark: "ELENA R.",
    orbGradient: "from-[#2563EB] via-[#60A5FA] to-[#001026]",
    auraShadow: "shadow-[0_15px_80px_rgba(37,99,235,0.38)] hover:shadow-[0_0_95px_rgba(37,99,235,0.65)]",
    layoutDirection: "flex-col lg:flex-row",
    textAlign: "text-left",
    alignItems: "items-start",
  },
];

const wheelReviews = [
  {
    initials: "DH",
    quote: "Within 6 months of Marcus's 4K 120fps video analysis, my 13-year-old daughter shaved 4.2 seconds off her 100m freestyle personal best and qualified directly for Ontario Provincials. The scientific precision here is incomparable.",
    name: "David Harrison & Family",
    sub: "Parent of Provincial Qualifier · Age 13",
    loc: "Toronto Olympic Chamber",
    stars: 5,
    cardTheme: "bg-gradient-to-b from-[#003EFF]/90 to-[#001c75]/90 backdrop-blur-2xl text-white border border-cyan-400/50 shadow-[0_30px_80px_rgba(0,62,255,0.45)] hover:shadow-[0_0_95px_rgba(0,229,255,0.6)]",
    avatarTheme: "bg-white text-[#0B0E11] shadow-[0_6px_20px_rgba(0,0,0,0.3)] font-900",
    starBadge: "bg-white/20 text-cyan-200 border border-white/30 backdrop-blur-md",
    subColor: "text-cyan-200",
    dividerColor: "border-white/20",
    locBadge: "bg-white/10 text-white border border-white/25",
    tiltDesktop: -3.5,
    tiltMobile: -2,
  },
  {
    initials: "RT",
    quote: "Coach Elena entirely solved my panic attacks around deep water turns. I swam my last half-Ironman distance with pristine heart rate control and passed 48 swimmers on the back stretch.",
    name: "Dr. Rachel Thorne",
    sub: "Masters Athlete · Half-Ironman Competitor",
    loc: "Toronto Harbourfront Studio",
    stars: 5,
    cardTheme: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.6)] hover:border-cyan-400/60 hover:shadow-[0_0_80px_rgba(0,229,255,0.3)]",
    avatarTheme: "bg-[#003EFF] text-white shadow-[0_0_20px_rgba(0,62,255,0.6)] font-900",
    starBadge: "bg-white/10 text-cyan-300 border border-white/20 backdrop-blur-md",
    subColor: "text-cyan-300",
    dividerColor: "border-white/15",
    locBadge: "bg-white/10 text-white/90 border border-white/20",
    tiltDesktop: 3.5,
    tiltMobile: 2,
  },
  {
    initials: "MK",
    quote: "At 44 years old, I was genuinely terrified of deep water. The private diagnostic sessions were empowering, calm, and deeply rooted in physics rather than brute shouting. Today I easily swim 1,500m continuously.",
    name: "Michael K.",
    sub: "Adult Foundation Learner · Age 44",
    loc: "Downtown Toronto Studio",
    stars: 5,
    cardTheme: "bg-white/[0.06] backdrop-blur-2xl text-white border border-cyan-400/40 shadow-[0_30px_90px_rgba(0,16,38,0.6)] hover:border-cyan-400 hover:shadow-[0_0_90px_rgba(0,229,255,0.45)]",
    avatarTheme: "bg-cyan-400 text-[#0B0E11] font-900 shadow-[0_0_25px_rgba(0,229,255,0.6)]",
    starBadge: "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 backdrop-blur-md",
    subColor: "text-cyan-300",
    dividerColor: "border-white/15",
    locBadge: "bg-cyan-400/10 text-white border border-cyan-400/30",
    tiltDesktop: -3,
    tiltMobile: -1.5,
  },
  {
    initials: "CL",
    quote: "The hydro-flume drag analysis spotted an elbow drop in my recovery stroke that three other clubs completely missed. Fixing that one movement gave me effortless sprint glide and zero shoulder fatigue.",
    name: "Claire Lin",
    sub: "University Varsity Sprinter",
    loc: "High Velocity Flume Lab",
    stars: 5,
    cardTheme: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.6)] hover:border-cyan-400/60 hover:shadow-[0_0_80px_rgba(0,229,255,0.3)]",
    avatarTheme: "bg-gradient-to-br from-cyan-400 to-[#003EFF] text-white shadow-lg font-900",
    starBadge: "bg-white/10 text-white/90 border border-white/20 shadow-sm",
    subColor: "text-white/80",
    dividerColor: "border-white/15",
    locBadge: "bg-white/10 text-white/90 border border-white/20",
    tiltDesktop: 3,
    tiltMobile: 2,
  },
  {
    initials: "BM",
    quote: "Enrolling our 6-year-old in the Youth Foundation track was the smartest decision we made this summer. Zero water anxiety after session two, and now he explains float mechanics to us at the beach.",
    name: "Brandon & Maya S.",
    sub: "Parents of Foundation Swimmer · Age 6",
    loc: "Toronto Olympic Chamber",
    stars: 5,
    cardTheme: "bg-gradient-to-b from-[#003EFF]/90 to-[#001c75]/90 backdrop-blur-2xl text-white border border-cyan-400/50 shadow-[0_30px_80px_rgba(0,62,255,0.45)] hover:shadow-[0_0_95px_rgba(0,229,255,0.6)]",
    avatarTheme: "bg-white text-[#0B0E11] shadow-[0_6px_20px_rgba(0,0,0,0.3)] font-900",
    starBadge: "bg-white/20 text-cyan-200 border border-white/30 backdrop-blur-md",
    subColor: "text-cyan-200",
    dividerColor: "border-white/20",
    locBadge: "bg-white/10 text-white border border-white/25",
    tiltDesktop: -2.5,
    tiltMobile: -1.5,
  },
];

export default function CoachesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wheelContainerRef = useRef<HTMLDivElement>(null);
  const reviewCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!wheelContainerRef.current) return;
    const cards = reviewCardRefs.current.filter((c): c is HTMLDivElement => c !== null);
    if (cards.length === 0) return;

    const mm = gsap.matchMedia();

    // Widescreen & Desktop Wheel Physics (>=1024px)
    mm.add("(min-width: 1024px)", () => {
      gsap.set(wheelContainerRef.current, { perspective: 1800 });

      cards.forEach((card, i) => {
        const targetTilt = wheelReviews[i]?.tiltDesktop || 0;
        gsap.set(card, {
          y: 130 + i * 25,
          rotateX: 25,
          rotateZ: i % 2 === 0 ? -12 : 12,
          opacity: i === 0 ? 0.35 : 0,
          scale: 0.88,
          transformOrigin: "center center",
        });

        gsap.to(card, {
          y: 0,
          rotateX: 0,
          rotateZ: targetTilt,
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 45%",
            scrub: 1.5,
          },
        });
      });
    });

    // Mobile & Tablet Wheel Dealing Physics (<1024px)
    mm.add("(max-width: 1023px)", () => {
      gsap.set(wheelContainerRef.current, { perspective: 1400 });

      cards.forEach((card, i) => {
        const targetTilt = wheelReviews[i]?.tiltMobile || 0;
        gsap.set(card, {
          y: 80,
          rotateX: 18,
          rotateZ: i % 2 === 0 ? -8 : 8,
          opacity: 0.15,
          scale: 0.9,
          transformOrigin: "center bottom",
        });

        gsap.to(card, {
          y: 0,
          rotateX: 0,
          rotateZ: targetTilt,
          opacity: 1,
          scale: 1,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            end: "top 55%",
            scrub: 1.4,
          },
        });
      });
    });

    ScrollTrigger.refresh();
    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="coaches" className="relative py-28 lg:py-40 z-10 border-t border-white/10 overflow-hidden bg-[#0A0D10] text-white">
      
      {/* ── ORGANIC FLUID ABOUT US & FACULTY SHOWCASE (ZERO BOXES) ───────── */}
      <div className="max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-16 mb-36 relative">
        
        {/* Ambient background glow sculptures without rigid borders */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#003EFF]/15 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-400/15 blur-[180px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 pb-12 border-b border-white/15 relative z-10">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#003EFF] text-white text-[11px] font-body font-800 tracking-[0.25em] uppercase shadow-[0_0_25px_rgba(0,62,255,0.55)] border border-cyan-300/30">
              <Award className="w-3.5 h-3.5 shrink-0 animate-pulse text-cyan-300" />
              <span>About Us & Championship Faculty</span>
            </div>
            
            <StaggeredText
              text="ARCHITECTS OF"
              as="h2"
              stagger={0.035}
              className="font-display-syne font-900 text-white leading-none tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            />
            
            <div className="font-editorial text-cyan-400 leading-none tracking-[-0.02em] text-[2.8rem] sm:text-[5rem] italic font-700 drop-shadow-[0_0_35px_rgba(0,229,255,0.45)]">
              Pure Fluid Velocity.
            </div>
          </div>

          <div className="max-w-md space-y-4 text-left">
            <p className="font-body font-500 text-white/90 text-[18px] leading-relaxed">
              We eliminated rigid swimming dogmas and outdated athletic training boxes to create Toronto&apos;s premier hydrodynamic sanctuary.
            </p>
            <p className="font-body font-500 text-white/65 text-[15px] leading-relaxed">
              Every director across our hydro-labs holds National Red Cross accreditation, Olympic meet pedigrees, and advanced degrees in biomechanical movement physics.
            </p>
          </div>
        </div>

        {/* Organic Fluid River Walkway (No Rectangular Cards or Rigid Boxes) */}
        <div className="space-y-28 sm:space-y-36 relative z-10">
          {coaches.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`flex ${c.layoutDirection} items-center gap-10 sm:gap-16 lg:gap-24 relative group select-none`}
            >
              {/* Giant Background Watermark Typography Floating in Open Air */}
              <div className={`absolute -top-12 ${i % 2 === 1 ? 'right-0 text-right' : 'left-0 text-left'} text-[58px] sm:text-[94px] lg:text-[135px] font-editorial italic font-800 text-cyan-400/10 tracking-tighter select-none pointer-events-none whitespace-nowrap z-0 transition-opacity duration-700 group-hover:opacity-30`}>
                {c.watermark}
              </div>

              {/* Liquid Morphing Hydro-Orb Portrait (No Squares or Boxes) */}
              <div className="relative shrink-0 z-10 flex items-center justify-center">
                <div
                  className={`w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-gradient-to-br ${c.orbGradient} text-white font-display-syne font-800 text-3xl sm:text-5xl lg:text-6xl flex items-center justify-center transition-all duration-1000 ease-out cursor-pointer ${c.auraShadow}`}
                  style={{
                    borderRadius: i === 0 ? "52% 48% 60% 40% / 45% 55% 45% 55%" : i === 1 ? "40% 60% 50% 50% / 55% 45% 60% 40%" : "60% 40% 45% 55% / 50% 50% 55% 45%",
                  }}
                  data-cursor-text="FACULTY BIO"
                >
                  <span className="relative z-10 drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)] tracking-tight">
                    {c.initials}
                  </span>
                  <div className="absolute inset-2 border border-white/25 rounded-full pointer-events-none animate-pulse" style={{ animationDuration: "4s" }} />
                </div>
              </div>

              {/* Open-Air Architectural Narrative (Zero Enclosing Walls or Card Borders) */}
              <div className={`flex flex-col ${c.alignItems} ${c.textAlign} max-w-3xl z-10 space-y-6`}>
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 font-body text-[12px] sm:text-[13px] font-800 tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(0,229,255,0.25)]">
                    <Trophy className="w-4 h-4 shrink-0 text-cyan-300" />
                    <span>{c.acclaim}</span>
                  </div>
                  
                  <h3 className="font-display-syne font-900 text-[32px] sm:text-[44px] lg:text-[52px] text-white tracking-tight leading-[1.05]">
                    {c.name}
                  </h3>
                  
                  <div className="font-editorial font-700 italic text-[20px] sm:text-[26px] text-cyan-400 mt-1.5 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                    {c.role}
                  </div>
                </div>

                <p className="font-body text-[16px] sm:text-[20px] text-white/75 font-500 leading-relaxed max-w-2xl">
                  &ldquo;{c.bio}&rdquo;
                </p>

                <div className={`flex flex-wrap items-center ${i % 2 === 1 ? 'justify-end' : 'justify-start'} gap-4 sm:gap-6 pt-2`}>
                  <span className="inline-flex items-center gap-2 font-body text-[12px] sm:text-[13px] font-800 tracking-wider uppercase text-white/90">
                    <ShieldCheck className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                    <span>Red Cross Biomechanical Vetted</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-body text-[11px] sm:text-[12px] font-800 uppercase tracking-widest shadow-md">
                    <span>{c.exp}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── 3D ROTATING REVIEWS WHEEL DECK SECTION ─────────────── */}
      <div id="testimonials" className="max-w-[1450px] mx-auto px-5 sm:px-10 lg:px-16 pt-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 sm:mb-20 pb-12 border-b border-white/15">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003EFF] text-white text-[11px] sm:text-[12px] font-body font-800 tracking-[0.22em] uppercase shadow-[0_0_25px_rgba(0,62,255,0.5)] border border-white/20">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-300" />
              <span>Verified Podium Logs</span>
            </div>
            
            <StaggeredText
              text="REAL REVIEWS &"
              as="h2"
              stagger={0.035}
              className="font-display-syne font-900 text-white leading-none tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.8rem)" }}
            />
            
            <div className="font-editorial text-cyan-400 leading-none tracking-[-0.02em] text-[2.5rem] sm:text-[4.5rem] italic font-700 drop-shadow-[0_0_35px_rgba(0,229,255,0.4)]">
              Stories of Aquatic Fluency.
            </div>
          </div>

          <div className="max-w-md space-y-3">
            <div className="flex items-center gap-2 text-white font-body text-[13px] font-800 uppercase tracking-wider">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>100% Authentic Athlete Evaluations</span>
            </div>
            <p className="font-body font-500 text-white/70 text-[15px] sm:text-[16px] leading-relaxed">
              Scroll through our rotating feed of athlete reviews from provincial podium qualifiers, Ironman triathletes, and Toronto families.
            </p>
          </div>
        </div>

        {/* Interactive Tilted Wheel Review Feed + Spring Physics */}
        <div
          ref={wheelContainerRef}
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10 py-6"
        >
          {wheelReviews.map((rev, idx) => (
            <motion.div
              key={idx}
              ref={(el) => { reviewCardRefs.current[idx] = el as HTMLDivElement; }}
              whileHover={{ scale: 1.025, transition: { type: "spring", stiffness: 220, damping: 16 } }}
              data-cursor-text="LOG ENTRY"
              className={`${rev.cardTheme} p-7 sm:p-10 lg:p-11 rounded-[2.2rem] sm:rounded-[2.8rem] transition-shadow duration-500 relative overflow-hidden group hover:z-20`}
            >
              {/* Top Bar: Athlete Avatar & Star Rating Pill */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 pb-6 border-b border-white/15">
                <div className="flex items-center gap-4">
                  <div className={`w-13 h-13 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-display-syne font-900 text-xl sm:text-2xl tracking-tight shrink-0 select-none ${rev.avatarTheme}`}>
                    {rev.initials}
                  </div>
                  <div>
                    <h3 className="font-display-syne font-800 text-white text-[20px] sm:text-[23px] tracking-tight leading-tight">
                      {rev.name}
                    </h3>
                    <div className={`font-body text-[12px] sm:text-[13px] font-700 mt-1 uppercase tracking-wide flex items-center gap-1.5 ${rev.subColor}`}>
                      <span>{rev.sub}</span>
                    </div>
                  </div>
                </div>

                <div className={`px-4 py-2 sm:py-2.5 rounded-full font-body font-800 text-[11px] sm:text-[12px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm ${rev.starBadge}`}>
                  <div className="flex gap-1">
                    {[...Array(rev.stars)].map((_, sIndex) => (
                      <Star key={sIndex} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-amber-300 stroke-0" />
                    ))}
                  </div>
                  <span className="ml-1 opacity-95 select-none">5.0 Rating</span>
                </div>
              </div>

              {/* Main Testimonial Quote */}
              <div className="relative mb-8 sm:mb-10">
                <Quote className="w-10 h-10 sm:w-14 sm:h-14 opacity-20 mb-3 text-cyan-300 select-none" />
                <p className="font-body text-[16px] sm:text-[19px] font-500 text-white/90 leading-relaxed sm:leading-relaxed tracking-tight -mt-4 sm:-mt-6 pl-1 sm:pl-2">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Footer Bar: Verification & Location Tag */}
              <div className={`pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${rev.dividerColor}`}>
                <div className="flex items-center gap-2 font-body text-[11px] sm:text-[12px] font-800 uppercase tracking-widest text-white/85">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Verified Bluefin Member Log</span>
                </div>

                <div className={`px-4 py-1.5 rounded-xl text-[11px] sm:text-[12px] font-body font-800 uppercase tracking-wider flex items-center gap-2 shadow-xs ${rev.locBadge}`}>
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                  <span className="truncate">{rev.loc}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
