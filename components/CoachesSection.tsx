"use client";

import React from "react";
import { motion } from "framer-motion";
import StaggeredText from "@/components/kinetic/StaggeredText";
import MagneticButton from "@/components/kinetic/MagneticButton";
import { Star, ShieldCheck, Award, Sparkles, Trophy, CheckCircle } from "lucide-react";

const coaches = [
  {
    initials: "MV",
    name: "Marcus Vance",
    role: "Head Coach & Hydrodynamic Director",
    spec: "Olympic Trialist · Sprint Velocity Optimization",
    exp: "14 yrs National Faculty",
    bio: "Former Canadian National Team sprint representative. Specializes in biomechanical stroke efficiency, micro-turbulence hand entry analysis, and competitive race cadence for high-performance athletes.",
    span: "lg:col-span-6",
    acclaim: "Coached 42 Provincial Gold Medalists",
  },
  {
    initials: "SJ",
    name: "Sarah Jenkins",
    role: "Director of Youth & Foundation Pedagogy",
    spec: "Certified Child Aquatics & Safety Specialist",
    exp: "10 yrs Youth Lead",
    bio: "Pioneered our zero-anxiety aquatic foundation method. Her scientifically structured drills systematically eliminate water fear, transforming hesitant beginners into fluent, podium-ready swimmers within months.",
    span: "lg:col-span-6",
    acclaim: "Red Cross National Safety Award",
  },
  {
    initials: "ER",
    name: "Elena Rostova",
    role: "Masters Endurance & Open-Water Director",
    spec: "3× Ironman Champion & Distance Specialist",
    exp: "12 yrs Endurance Lead",
    bio: "Three-time Ironman finisher and national distance swimming record holder. Her Total Immersion instruction unlocks frictionless glide mechanics, cutting oxygen consumption and eliminating open-water panic.",
    span: "lg:col-span-12",
    acclaim: "Ironman Open-Water Course Record Holder",
  },
];

const testimonials = [
  {
    quote: "Within 6 months of Marcus's 4K 120fps video analysis, my 13-year-old daughter shaved 4.2 seconds off her 100m freestyle personal best and qualified directly for Ontario Provincials. The scientific precision here is incomparable.",
    name: "David Harrison & Family",
    sub: "Parent of Provincial Qualifier (Age 13)",
    loc: "Toronto Olympic Chamber",
    span: "lg:col-span-7",
    stars: 5,
  },
  {
    quote: "Coach Elena entirely solved my panic attacks around deep water turns. I swam my last half-Ironman distance with pristine heart rate control and passed 48 swimmers on the back stretch.",
    name: "Dr. Rachel Thorne",
    sub: "Masters Athlete · Half-Ironman Competitor",
    loc: "Toronto Harbourfront Studio",
    span: "lg:col-span-5",
    stars: 5,
  },
  {
    quote: "At 44 years old, I was genuinely terrified of deep water. The private diagnostic sessions were empowering, calm, and deeply rooted in physics rather than brute shouting. Today I easily swim 1,500m continuously.",
    name: "Michael K.",
    sub: "Adult Learner · Age 44",
    loc: "Downtown Toronto Studio",
    span: "lg:col-span-12",
    stars: 5,
  },
];

export default function CoachesSection() {
  return (
    <section id="coaches" className="relative py-28 lg:py-36 z-10 border-t border-[#0B0B0C]/10">
      
      {/* ── FACULTY MASTER SECTION ───────────────────────────── */}
      <div className="max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-16 mb-32">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 pb-12 border-b border-[#0B0B0C]/15">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#003EFF]/10 border border-[#003EFF]/25 text-[#003EFF] text-[11px] font-body font-800 tracking-[0.25em] uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>Vetted Championship Faculty</span>
            </div>
            
            <StaggeredText
              text="COACHED BY THE"
              as="h2"
              stagger={0.04}
              className="font-display-syne font-900 text-[#0B0B0C] leading-none tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)" }}
            />
            
            <div className="font-editorial text-[#003EFF] leading-none tracking-[-0.02em] text-[2.5rem] sm:text-[4.5rem] italic font-700">
              National Hydro-Masters.
            </div>
          </div>

          <p className="font-body font-500 text-[#3A3A3C] text-[16px] max-w-sm leading-relaxed">
            Every director across our Toronto training facilities holds National Red Cross accreditation, competitive meet pedigrees, and deep training in human biomechanics.
          </p>
        </div>

        {/* Modular Asymmetrical Faculty Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {coaches.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.15, type: "spring", stiffness: 130, damping: 18 }}
              whileHover={{ y: -6 }}
              data-cursor-text="INSPECT BIO"
              className={`${c.span} glass-light-card p-8 sm:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden bento-card group hover:border-[#003EFF] transition-all duration-300`}
            >
              <div>
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-[#0B0B0C]/10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#003EFF] text-white flex items-center justify-center font-display-syne font-800 text-2xl shadow-[0_10px_30px_rgba(0,62,255,0.25)] shrink-0">
                    {c.initials}
                  </div>
                  <div>
                    <div className="font-display-syne font-800 text-[24px] sm:text-[28px] text-[#0B0B0C] tracking-tight leading-tight">
                      {c.name}
                    </div>
                    <div className="font-body text-[12px] font-800 text-[#003EFF] tracking-wider uppercase mt-1">
                      {c.role}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D8D5CF] font-body text-[12px] font-700 text-[#0B0B0C] mb-6 shadow-xs">
                  <Trophy className="w-4 h-4 text-[#003EFF]" />
                  <span>{c.acclaim}</span>
                </div>

                <p className="font-body text-[15px] sm:text-[16px] text-[#3A3A3C] font-500 leading-relaxed mb-10">
                  &ldquo;{c.bio}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#0B0B0C]/10 flex flex-wrap items-center justify-between gap-4">
                <span className="flex items-center gap-2 font-body text-[11px] font-800 tracking-wider uppercase text-[#0B0B0C]">
                  <ShieldCheck className="w-4 h-4 text-[#003EFF]" />
                  <span>Red Cross Biomechanical Vetted</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#003EFF]/10 text-[#003EFF] font-body text-[11px] font-800 uppercase tracking-widest">
                  {c.exp}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── CHAMPIONSHIP STORIES BENTO SECTION ─────────────────── */}
      <div id="testimonials" className="max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 pb-12 border-b border-[#0B0B0C]/15">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#003EFF]/10 border border-[#003EFF]/25 text-[#003EFF] text-[11px] font-body font-800 tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Podium Logs</span>
            </div>
            
            <StaggeredText
              text="PROVINCIAL WINNERS &"
              as="h2"
              stagger={0.035}
              className="font-display-syne font-900 text-[#0B0B0C] leading-none tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.8rem)" }}
            />
            
            <div className="font-editorial text-[#003EFF] leading-none tracking-[-0.02em] text-[2.5rem] sm:text-[4.5rem] italic font-700">
              Stories of Aquatic Fluency.
            </div>
          </div>

          <p className="font-body font-500 text-[#3A3A3C] text-[16px] max-w-sm leading-relaxed">
            Read authentic evaluation logs from parents of provincial podium champions, competitive triathletes, and adult learners across Greater Toronto.
          </p>
        </div>

        {/* Testimonials Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.65, delay: idx * 0.12, type: "spring", stiffness: 130, damping: 18 }}
              whileHover={{ y: -6 }}
              data-cursor-text="LOG ENTRY"
              className={`${t.span} glass-light-card p-8 sm:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden bento-card group hover:border-[#003EFF] transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#0B0B0C]/10">
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, sIndex) => (
                      <Star key={sIndex} className="w-4 h-4 text-[#003EFF] fill-[#003EFF]" />
                    ))}
                  </div>
                  <span className="font-body text-[11px] font-800 text-[#0B0B0C] uppercase tracking-widest flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#003EFF]" />
                    Verified Athlete Log
                  </span>
                </div>

                <div className="font-editorial text-[#0B0B0C]/10 text-[85px] leading-none -mt-4 mb-2 select-none font-900">
                  &ldquo;
                </div>

                <p className="font-body text-[16px] sm:text-[18px] text-[#0B0B0C] font-600 leading-relaxed mb-10 -mt-8">
                  {t.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-[#0B0B0C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-display-syne font-800 text-[#0B0B0C] text-[18px] sm:text-[20px] tracking-tight">
                    {t.name}
                  </div>
                  <div className="font-body text-[12px] font-800 text-[#003EFF] mt-0.5 uppercase tracking-wider">
                    {t.sub}
                  </div>
                </div>
                
                <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#D8D5CF] text-[#0B0B0C] text-[11px] font-body font-700 shadow-xs">
                  📍 {t.loc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
