"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/kinetic/MagneticButton";
import StaggeredText from "@/components/kinetic/StaggeredText";
import { Check, CheckCircle2, ArrowRight, Sparkles, Trophy, Flame, Clock, MapPin, Waves, Camera, RefreshCw, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tracks = [
  { id: "youth", label: "Youth & Kids", desc: "Ages 3 mo-12 yrs · Zero Water Anxiety & Swim Fundamentals" },
  { id: "development", label: "Stroke Velocity", desc: "Adaptive & Competitive Coaching · Technique Optimization" },
  { id: "masters", label: "Adult & Wellness", desc: "Ages 13+ · Private Lessons, Aqua Fitness & Hydrotherapy" },
  { id: "family", label: "Private Family", desc: "2-4 Swimmers · Exclusive Group Dynamic Training" },
];

const getWhatsAppUrl = (trackName: string) => {
  const text = encodeURIComponent(`Hello Bluefin Swim Academy, I am writing to Reserve Your Track for: ${trackName}`);
  return `https://wa.me/14168002444?text=${text}`;
};

const courses = [
  {
    id: "infant-swim", num: "01", category: "youth",
    badgeTitle: "", tagline: "",
    title: "Infant Swim (3-12m)", price: "$493", period: "8 classes",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "toddler-swim", num: "02", category: "youth",
    badgeTitle: "", tagline: "",
    title: "Toddler Swim (1-3y)", price: "$548", period: "8 classes",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-gradient-to-b from-white/[0.09] to-white/[0.03] backdrop-blur-2xl text-white border border-cyan-400/50 shadow-[0_30px_90px_rgba(0,229,255,0.18)] hover:border-cyan-400 hover:shadow-[0_0_95px_rgba(0,229,255,0.4)] relative z-10", badgeStyle: "bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 backdrop-blur-md shadow-[0_0_25px_rgba(0,229,255,0.35)]", taglineStyle: "text-white/90 font-700",
    dividerStyle: "border-cyan-400/30", checkStyle: "text-cyan-300 bg-cyan-400/20", buttonStyle: "bg-cyan-400 hover:bg-white text-[#0B0E11] font-900 shadow-[0_15px_40px_rgba(0,229,255,0.5)] hover:shadow-[0_0_60px_rgba(255,255,255,0.8)]",
    buttonText: "Reserve Your Track", popularTag: true,
  },
  {
    id: "preschool-swim", num: "03", category: "youth",
    badgeTitle: "", tagline: "",
    title: "Preschool Swim (3-5y)", price: "$548", period: "8 classes",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "parent-tot", num: "04", category: "youth",
    badgeTitle: "", tagline: "",
    title: "Parent & Tot", price: "$493", period: "8 classes",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "kids-private", num: "05", category: "youth",
    badgeTitle: "", tagline: "",
    title: "Kids Private Lessons", price: "$839", period: "12 × 45 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-gradient-to-b from-white/[0.09] to-white/[0.03] backdrop-blur-2xl text-white border border-cyan-400/50 shadow-[0_30px_90px_rgba(0,229,255,0.18)] hover:border-cyan-400 hover:shadow-[0_0_95px_rgba(0,229,255,0.4)] relative z-10", badgeStyle: "bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 backdrop-blur-md shadow-[0_0_25px_rgba(0,229,255,0.35)]", taglineStyle: "text-white/90 font-700",
    dividerStyle: "border-cyan-400/30", checkStyle: "text-cyan-300 bg-cyan-400/20", buttonStyle: "bg-cyan-400 hover:bg-white text-[#0B0E11] font-900 shadow-[0_15px_40px_rgba(0,229,255,0.5)] hover:shadow-[0_0_60px_rgba(255,255,255,0.8)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "mermaid-swim", num: "06", category: "youth",
    badgeTitle: "", tagline: "",
    title: "Mermaid Experience", price: "$599", period: "8 × 45 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },

  {
    id: "stroke-improve", num: "07", category: "development",
    badgeTitle: "", tagline: "",
    title: "Stroke Improvement", price: "$548", period: "8 × 45 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "competitive-coach", num: "08", category: "development",
    badgeTitle: "", tagline: "",
    title: "Competitive Coaching", price: "$699", period: "8 × 60 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-gradient-to-b from-white/[0.09] to-white/[0.03] backdrop-blur-2xl text-white border border-cyan-400/50 shadow-[0_30px_90px_rgba(0,229,255,0.18)] hover:border-cyan-400 hover:shadow-[0_0_95px_rgba(0,229,255,0.4)] relative z-10", badgeStyle: "bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 backdrop-blur-md shadow-[0_0_25px_rgba(0,229,255,0.35)]", taglineStyle: "text-white/90 font-700",
    dividerStyle: "border-cyan-400/30", checkStyle: "text-cyan-300 bg-cyan-400/20", buttonStyle: "bg-cyan-400 hover:bg-white text-[#0B0E11] font-900 shadow-[0_15px_40px_rgba(0,229,255,0.5)] hover:shadow-[0_0_60px_rgba(255,255,255,0.8)]",
    buttonText: "Reserve Your Track", popularTag: true,
  },
  {
    id: "lifeguard-prep", num: "09", category: "development",
    badgeTitle: "", tagline: "",
    title: "Pre-Lifeguard Prep", price: "$699", period: "8 × 60 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "special-needs", num: "10", category: "development",
    badgeTitle: "", tagline: "",
    title: "Adaptive Swimming", price: "$599", period: "8 × 45 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },

  {
    id: "adult-private", num: "11", category: "masters",
    badgeTitle: "", tagline: "",
    title: "Adult Private Lessons", price: "$548", period: "8 × 45 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-gradient-to-b from-white/[0.09] to-white/[0.03] backdrop-blur-2xl text-white border border-cyan-400/50 shadow-[0_30px_90px_rgba(0,229,255,0.18)] hover:border-cyan-400 hover:shadow-[0_0_95px_rgba(0,229,255,0.4)] relative z-10", badgeStyle: "bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 backdrop-blur-md shadow-[0_0_25px_rgba(0,229,255,0.35)]", taglineStyle: "text-white/90 font-700",
    dividerStyle: "border-cyan-400/30", checkStyle: "text-cyan-300 bg-cyan-400/20", buttonStyle: "bg-cyan-400 hover:bg-white text-[#0B0E11] font-900 shadow-[0_15px_40px_rgba(0,229,255,0.5)] hover:shadow-[0_0_60px_rgba(255,255,255,0.8)]",
    buttonText: "Reserve Your Track", popularTag: true,
  },
  {
    id: "teen-private", num: "12", category: "masters",
    badgeTitle: "", tagline: "",
    title: "Teen Private Lessons", price: "$548", period: "8 × 45 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "adult-beginner", num: "13", category: "masters",
    badgeTitle: "", tagline: "",
    title: "Adult Beginner", price: "$548", period: "8 × 45 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "senior-wellness", num: "14", category: "masters",
    badgeTitle: "", tagline: "",
    title: "Senior Wellness", price: "$548", period: "8 × 45 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "aqua-fitness", num: "15", category: "masters",
    badgeTitle: "", tagline: "",
    title: "Aqua Fitness", price: "$548", period: "8 × 45 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "hydrotherapy", num: "16", category: "masters",
    badgeTitle: "", tagline: "",
    title: "Hydrotherapy", price: "$493", period: "10 sessions",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },

  {
    id: "family-2", num: "17", category: "family",
    badgeTitle: "", tagline: "",
    title: "Private Family (2)", price: "$1,099", period: "8 × 45 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  },
  {
    id: "family-3", num: "18", category: "family",
    badgeTitle: "", tagline: "",
    title: "Private Family (3)", price: "$1,499", period: "8 × 60 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-gradient-to-b from-white/[0.09] to-white/[0.03] backdrop-blur-2xl text-white border border-cyan-400/50 shadow-[0_30px_90px_rgba(0,229,255,0.18)] hover:border-cyan-400 hover:shadow-[0_0_95px_rgba(0,229,255,0.4)] relative z-10", badgeStyle: "bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 backdrop-blur-md shadow-[0_0_25px_rgba(0,229,255,0.35)]", taglineStyle: "text-white/90 font-700",
    dividerStyle: "border-cyan-400/30", checkStyle: "text-cyan-300 bg-cyan-400/20", buttonStyle: "bg-cyan-400 hover:bg-white text-[#0B0E11] font-900 shadow-[0_15px_40px_rgba(0,229,255,0.5)] hover:shadow-[0_0_60px_rgba(255,255,255,0.8)]",
    buttonText: "Reserve Your Track", popularTag: true,
  },
  {
    id: "family-4", num: "19", category: "family",
    badgeTitle: "", tagline: "",
    title: "Private Family (4)", price: "$1,799", period: "8 × 60 min",
    schedule: "", pool: "", bullets: [],
    cardBg: "bg-white/[0.04] backdrop-blur-xl text-white border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:bg-white/[0.07] hover:shadow-[0_0_70px_rgba(0,229,255,0.25)]", badgeStyle: "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]", taglineStyle: "text-white/70",
    dividerStyle: "border-white/15", checkStyle: "text-cyan-400 bg-white/10", buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
    buttonText: "Reserve Your Track",
  }
];

const diagnosticDeck = [
  {
    id: "assessment",
    badge: "", facility: "", tagline: "",
    title: "Swim Assessment", desc: "",
    bullets: [],
    cardStyle: "bg-white/[0.05] backdrop-blur-xl text-white border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.6)] hover:border-cyan-400/60 hover:shadow-[0_0_80px_rgba(0,229,255,0.3)]",
    badgeStyle: "bg-white/15 text-white border border-white/25 backdrop-blur-md",
    taglineStyle: "text-white/70", checkStyle: "bg-white/10 text-cyan-300", dividerStyle: "border-white/15",
    price: "$50", period: "30 min (waived upon registration)", cta: "Reserve Assessment",
    buttonStyle: "bg-white/[0.08] hover:bg-cyan-400 text-white hover:text-[#0B0E11] font-800 border border-white/20 hover:border-cyan-400 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)]",
  },
  {
    id: "addons",
    badge: "", facility: "", tagline: "",
    title: "Optional Add-ons", desc: "",
    bullets: ["Registration Fee: $50", "Home/Condo Travel Fee: Included within the GTA", "Additional Private Lesson: $75 (45 min)", "Gift Certificate: Any amount"],
    cardStyle: "bg-gradient-to-b from-[#003EFF]/80 to-white/[0.05] backdrop-blur-2xl text-white border border-cyan-400/40 shadow-[0_30px_90px_rgba(0,62,255,0.45)] hover:border-cyan-300 hover:shadow-[0_0_95px_rgba(0,229,255,0.5)]",
    badgeStyle: "bg-cyan-400/20 text-cyan-200 border border-cyan-300/40 backdrop-blur-md",
    taglineStyle: "text-white/90 font-700", checkStyle: "bg-cyan-400/20 text-cyan-200", dividerStyle: "border-white/20",
    price: "", period: "", cta: "Inquire Now",
    buttonStyle: "bg-[#003EFF] hover:bg-cyan-400 text-white hover:text-[#0B0E11] font-900 shadow-[0_15px_35px_rgba(0,62,255,0.45)] hover:shadow-[0_0_50px_rgba(0,229,255,0.7)]",
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
  const secondImageBoxRef = useRef<HTMLDivElement>(null);
  const titleLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const tagRef = useRef<HTMLDivElement>(null);

  const cardsGridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const guaranteeRef = useRef<HTMLDivElement>(null);
  const vipGridRef = useRef<HTMLDivElement>(null);
  const vipCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!headerRef.current || !imageBoxRef.current || !textColRef.current || !secondImageBoxRef.current) return;

    const mm = gsap.matchMedia();

    // ── 1. 3-STEP SEQUENTIAL SCROLL-DRIVEN CHOREOGRAPHY ──────────────
    if (!headerRef.current || !imageBoxRef.current || !secondImageBoxRef.current || !textColRef.current) return;
    gsap.set(headerRef.current, { perspective: 2200 });

    mm.add("(min-width: 1024px)", () => {
      // Step 1: Image 1 comes from Left (Arrow 1)
      gsap.set(imageBoxRef.current, { x: "-80%", rotateY: -15, opacity: 0, scale: 0.88 });
      // Step 2: Image 2 comes from Right (Arrow 2)
      gsap.set(secondImageBoxRef.current, { x: "80%", rotateY: 15, opacity: 0, scale: 0.88 });
      // Step 3: Text lands down from Above (Arrow 3)
      gsap.set(textColRef.current, { y: "-130%", opacity: 0, scale: 0.88 });
      gsap.set([tagRef.current, ...titleLinesRef.current], { opacity: 0, y: -20 });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 92%",
          end: "center 55%",
          scrub: 0.4,
        },
      });

      scrollTl.to(imageBoxRef.current, { x: "0%", rotateY: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, 0);
      scrollTl.to(secondImageBoxRef.current, { x: "0%", rotateY: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, 0.35);
      scrollTl.to(textColRef.current, { y: "0%", opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, 0.7);
      scrollTl.to([tagRef.current, ...titleLinesRef.current], { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out" }, 0.85);
    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile sequential flow: Left -> Right -> Top Drop
      gsap.set(imageBoxRef.current, { x: "-65%", rotateY: -12, opacity: 0, scale: 0.9 });
      gsap.set(secondImageBoxRef.current, { x: "65%", rotateY: 12, opacity: 0, scale: 0.9 });
      gsap.set(textColRef.current, { y: "-90%", opacity: 0, scale: 0.9 });
      gsap.set([tagRef.current, ...titleLinesRef.current], { opacity: 0, y: -15 });

      const mobileScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 92%",
          end: "center 60%",
          scrub: 0.4,
        },
      });

      mobileScrollTl.to(imageBoxRef.current, { x: "0%", rotateY: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" }, 0);
      mobileScrollTl.to(secondImageBoxRef.current, { x: "0%", rotateY: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" }, 0.3);
      mobileScrollTl.to(textColRef.current, { y: "0%", opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" }, 0.6);
      mobileScrollTl.to([tagRef.current, ...titleLinesRef.current], { opacity: 1, y: 0, stagger: 0.08, duration: 0.7, ease: "power2.out" }, 0.75);
    });

    // Perpetual holographic floating levitation
    gsap.to(imageBoxRef.current, { y: -12, duration: 3.4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
    gsap.to(secondImageBoxRef.current, { y: 12, duration: 3.8, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });

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
    <section ref={sectionRef} id="courses" className="relative py-20 sm:py-28 lg:py-36 z-10 border-t border-white/10 overflow-hidden bg-[#0B0E11] text-white">
      
      <div className="max-w-[1550px] mx-auto px-5 sm:px-10 lg:px-14">
        
        {/* ── 3-STEP SEQUENTIAL DIAGONAL INTERLOCK SHOWCASE ────────── */}
        <div ref={headerRef} className="space-y-6 sm:space-y-8 mb-24 sm:mb-32 pb-16 border-b border-white/15 relative">
          
          {/* STEP 1: Top-Left Widescreen Photo 01 (Arrives from Left - Arrow 1) */}
          <div className="w-full lg:w-[60%] mr-auto z-10 relative">
            <div
              ref={imageBoxRef}
              className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-[2.8rem] overflow-hidden bg-[#001228] shadow-[0_25px_80px_rgba(0,0,0,0.6)] hover:shadow-[0_0_85px_rgba(0,229,255,0.45)] border border-cyan-400/50 hover:border-cyan-300 flex flex-col justify-between p-7 sm:p-10 group transition-all duration-500 select-none cursor-pointer"
            >
              <div className="absolute inset-0">
                <img
                  src="/images/underwater-lanes.jpg"
                  alt="Toronto Olympic Underwater Telemetry Lanes"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 filter contrast-[1.15] saturate-[1.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E11]/95 via-[#0B0E11]/35 to-[#0B0E11]/15 pointer-events-none" />
              </div>

              <div className="relative z-10 font-editorial italic bg-gradient-to-r from-white via-cyan-300 to-white/80 bg-clip-text text-transparent font-800 text-[85px] sm:text-[118px] leading-none tracking-tight filter drop-shadow-[0_8px_30px_rgba(0,229,255,0.5)]">
                01
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-white">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-cyan-400/50 text-[11px] sm:text-[12px] font-body font-800 uppercase tracking-widest shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
                  <span>4K Hydro-Optic Chamber</span>
                </span>
                <span className="font-body font-700 text-[13px] sm:text-[15px] text-white/95 drop-shadow-md">
                  Synchronized 120fps Telemetry · Lane 4
                </span>
              </div>
            </div>
          </div>

          {/* STEP 3: Centered Core Text & Badges (Arrives from Above - Arrow 3) */}
          <div
            ref={textColRef}
            className="w-full max-w-[920px] mx-auto text-center my-8 sm:my-4 lg:-my-20 z-30 relative px-6 sm:px-12 py-10 sm:py-14 rounded-[3.2rem] bg-white/[0.04] backdrop-blur-2xl border border-white/15 shadow-[0_35px_110px_rgba(0,0,0,0.7)] hover:border-cyan-400/40 flex flex-col items-center space-y-6 sm:space-y-7 transition-colors duration-500"
          >
            <div
              ref={tagRef}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#003EFF] text-white text-[11px] sm:text-[13px] font-body font-800 tracking-[0.22em] uppercase shadow-[0_0_30px_rgba(0,62,255,0.55)] border border-cyan-300/40"
            >
              <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 animate-spin" style={{ animationDuration: "6s" }} />
              <span>Architected Athletic Curriculars</span>
            </div>

            <div className="space-y-1 w-full">
              <div ref={(el) => { titleLinesRef.current[0] = el; }} className="overflow-hidden">
                <StaggeredText
                  text="SELECT YOUR AQUATIC"
                  as="h2"
                  stagger={0.035}
                  className="font-display-syne font-900 text-white leading-[1.02] tracking-[-0.03em] text-[38px] sm:text-[58px] lg:text-[68px] drop-shadow-sm select-none"
                />
              </div>
              <div ref={(el) => { titleLinesRef.current[1] = el; }} className="overflow-hidden">
                <StaggeredText
                  text="VELOCITY TRACK."
                  as="div"
                  stagger={0.04}
                  className="font-editorial font-700 italic text-cyan-400 leading-[1] tracking-[-0.02em] text-[42px] sm:text-[64px] lg:text-[74px] drop-shadow-[0_0_35px_rgba(0,229,255,0.45)] select-none"
                />
              </div>
            </div>

            <div className="overflow-hidden max-w-[760px]">
              <p
                ref={(el) => { titleLinesRef.current[2] = el as unknown as HTMLDivElement; }}
                className="font-body font-500 text-white/70 text-[16px] sm:text-[19px] leading-relaxed select-none"
              >
                Designed for champion cadences and complete water confidence. Every program operates within Toronto&apos;s Olympic hydro-chambers under rigorous small-group athletic ratios.
              </p>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4 select-none w-full">
              <span className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-white/90 font-body font-800 text-[12px] sm:text-[14px] shadow-md hover:border-cyan-400/80 hover:bg-white/[0.1] hover:shadow-[0_0_25px_rgba(0,229,255,0.25)] transition-all duration-300">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                <span>1:4 Max Coach Ratio</span>
              </span>
              <span className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-white/90 font-body font-800 text-[12px] sm:text-[14px] shadow-md hover:border-[#003EFF] hover:bg-white/[0.1] hover:shadow-[0_0_25px_rgba(0,62,255,0.4)] transition-all duration-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#003EFF] animate-pulse shrink-0" />
                <span>120fps Telemetry Labs</span>
              </span>
              <span className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-white/90 font-body font-800 text-[12px] sm:text-[14px] shadow-md hover:border-cyan-300 hover:bg-white/[0.1] transition-all duration-300">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 shrink-0" />
                <span>100% Tuition Guarantee</span>
              </span>
            </div>
          </div>

          {/* STEP 2: Bottom-Right Widescreen Photo 02 (Arrives from Right - Arrow 2) */}
          <div className="w-full lg:w-[60%] ml-auto z-10 relative pt-4 sm:pt-0">
            <div
              ref={secondImageBoxRef}
              className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-[2.8rem] overflow-hidden bg-[#001228] shadow-[0_25px_80px_rgba(0,16,38,0.38)] hover:shadow-[0_0_85px_rgba(0,62,255,0.65)] active:shadow-[0_0_75px_rgba(0,62,255,0.7)] border border-[#003EFF]/50 hover:border-cyan-300/90 active:border-cyan-300 flex flex-col justify-between p-7 sm:p-10 group transition-all duration-500 select-none cursor-pointer"
            >
              <div className="absolute inset-0">
                <img
                  src="/images/velocity-track.jpg"
                  alt="Toronto Olympic Velocity Track Facility"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 filter contrast-[1.1] saturate-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000d20]/95 via-[#000d20]/30 to-[#000d20]/15 pointer-events-none" />
              </div>

              <div className="relative z-10 font-editorial italic bg-gradient-to-r from-white via-[#70a5ff] to-white/80 bg-clip-text text-transparent font-800 text-[85px] sm:text-[118px] leading-none tracking-tight filter drop-shadow-[0_8px_30px_rgba(0,62,255,0.55)]">
                02
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-white">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#003EFF]/90 backdrop-blur-md border border-white/30 text-[11px] sm:text-[12px] font-body font-800 uppercase tracking-widest shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shrink-0" />
                  <span>Olympic Velocity Flume</span>
                </span>
                <span className="font-body font-700 text-[13px] sm:text-[15px] text-white/95 drop-shadow-md">
                  Toronto 50m Olympic Facility
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ── KINETIC BENTO TAB SWITCHER (DIRECT SERVICE CARDS ANCHOR) ── */}
        <div id="service-cards" className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-12 sm:mb-16 justify-center md:justify-start scroll-mt-28">
          <button
            onClick={() => setActiveTab("all")}
            data-cursor-text="FILTER"
            className={`px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-body text-[11px] sm:text-[12px] font-800 tracking-[0.16em] uppercase transition-all relative ${
              activeTab === "all"
                ? "bg-gradient-to-r from-[#003EFF] to-cyan-500 text-white shadow-[0_0_30px_rgba(0,229,255,0.45)] scale-105 border border-cyan-300/40"
                : "bg-white/[0.05] backdrop-blur-md border border-white/15 text-white/70 hover:text-cyan-300 hover:border-cyan-400/60"
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
                    ? "bg-[#003EFF] text-white shadow-[0_0_25px_rgba(0,62,255,0.5)] scale-105 border border-white/20"
                    : "bg-white/[0.05] backdrop-blur-md border border-white/15 text-white/70 hover:text-cyan-300 hover:border-cyan-400/60"
                }`}
              >
                <span>{t.label}</span>
                {isActive && <motion.span layoutId="dot" className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />}
              </button>
            );
          })}
        </div>

        {/* ── REFERENCE-STYLE INTERACTIVE PRICING DECK (Playing Card Stack Engine + Spring Physics) ── */}
        <div ref={cardsGridRef} id="track-cards-grid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 sm:gap-8 items-stretch mb-20 [perspective:2000px] scroll-mt-28">
          {filteredCourses.map((c, i) => {
            return (
              <motion.div
                key={c.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                whileHover={{ y: -10, scale: 1.02, transition: { type: "spring", stiffness: 220, damping: 15 } }}
                data-cursor-text="SELECT"
                className={`${c.cardBg} p-7 sm:p-9 rounded-[2.2rem] sm:rounded-[2.6rem] flex flex-col justify-between relative overflow-hidden transition-shadow duration-300 opacity-0`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {c.badgeTitle && (
                      <span className={`${c.badgeStyle} px-5 py-2 sm:py-2.5 rounded-full font-body font-800 text-[13px] sm:text-[14px] tracking-wide inline-block select-none`}>
                        {c.badgeTitle}
                      </span>
                    )}
                    {c.popularTag && (
                      <span className="text-[10px] font-body font-800 text-cyan-300 bg-cyan-400/20 px-2.5 py-1 rounded-md uppercase tracking-widest border border-cyan-400/40 shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                        High Velocity
                      </span>
                    )}
                  </div>

                  {c.tagline && (
                    <div className={`text-[14px] sm:text-[15px] font-body font-600 tracking-tight flex items-center gap-2.5 mb-7 ${c.taglineStyle}`}>
                      <span className="w-1.5 h-4 bg-cyan-400 rounded-full inline-block shrink-0 animate-pulse" />
                      <span>{c.tagline}</span>
                    </div>
                  )}

                  <div className={`pb-7 mb-8 border-b ${c.dividerStyle}`}>
                    <h3 className="font-display-syne font-800 text-white text-[20px] sm:text-[22px] tracking-tight mb-3 leading-snug">
                      {c.title}
                    </h3>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display-syne font-900 text-white text-[44px] sm:text-[52px] tracking-tight leading-none drop-shadow-xs">
                        {c.price}
                      </span>
                      <span className="font-body text-[12px] sm:text-[13px] font-600 text-white/60">
                        / {c.period}
                      </span>
                    </div>
                    {(c.pool || c.schedule) && (
                      <div className="mt-3.5 flex items-center gap-2 font-body text-[12px] font-700 text-cyan-300/90">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{c.pool} {c.pool && c.schedule ? '·' : ''} {c.schedule}</span>
                      </div>
                    )}
                  </div>

                  {c.bullets && c.bullets.length > 0 && (
                    <div className="space-y-3.5 mb-10 mt-6">
                      {c.bullets.map((b, bi) => (
                        <div key={bi} className="flex items-start gap-3 text-[14px] sm:text-[15px] font-body font-500 text-white/85 leading-snug">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${c.checkStyle}`}>
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
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
              </motion.div>
            );
          })}
        </div>

        {/* ── REFERENCE-STYLE BOTTOM GUARANTEE BANNER PILL ──────── */}
        <div
          ref={guaranteeRef}
          className="max-w-4xl mx-auto py-5 px-6 sm:px-10 rounded-full bg-white/[0.06] border border-cyan-400/40 shadow-[0_15px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-center gap-3.5 text-center sm:text-left mb-24 opacity-0 hover:border-cyan-400/80 hover:shadow-[0_0_50px_rgba(0,229,255,0.25)] transition-all duration-500"
        >
          <span className="w-8 h-8 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            <ShieldCheck className="w-5 h-5 text-cyan-300" />
          </span>
          <p className="font-body font-500 text-white/90 text-[13px] sm:text-[15px]">
            <span className="font-800 text-cyan-300">1st-Block Guarantee —</span> If your swimmer is not 100% satisfied with technique improvement and buoyancy after their initial training sprint, tuition is fully reimbursed!
          </p>
        </div>

        {/* ── 3-CARD VIP DIAGNOSTIC DECK WITH SPRING PHYSICS ───────────────────────────── */}
        <div className="mb-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/20 text-cyan-300 text-[11px] font-body font-800 uppercase tracking-[0.22em] mb-4 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
              <Camera className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
              <span>Toronto Hydraulic Telemetry</span>
            </div>
            <h2 className="font-display-syne font-900 text-[32px] sm:text-[46px] text-white tracking-tight leading-none drop-shadow-sm">
              1-on-1 Underwater Video Telemetry
            </h2>
          </div>

          <div ref={vipGridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch [perspective:2000px]">
            {diagnosticDeck.map((card, i) => (
              <motion.div
                key={card.id}
                ref={(el) => { vipCardRefs.current[i] = el; }}
                whileHover={{ y: -12, scale: 1.025, transition: { type: "spring", stiffness: 220, damping: 16 } }}
                data-cursor-text="VIP LAB"
                className={`${card.cardStyle} p-8 sm:p-10 rounded-[2.4rem] sm:rounded-[2.8rem] flex flex-col justify-between relative overflow-hidden transition-shadow duration-300 opacity-0`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <span className={`${card.badgeStyle} px-5 py-2 sm:py-2.5 rounded-full font-body font-800 text-[13px] tracking-wide inline-block select-none shadow-[0_4px_15px_rgba(0,0,0,0.35)]`}>
                      {card.badge}
                    </span>
                    <span className="font-body font-800 text-[11px] uppercase tracking-widest text-cyan-300/90 px-3 py-1 rounded-full border border-cyan-400/30 bg-white/[0.04]">
                      {card.facility}
                    </span>
                  </div>

                  <div className={`text-[14px] font-body font-600 tracking-tight flex items-center gap-2.5 mb-7 ${card.taglineStyle}`}>
                    <span className="w-1.5 h-4 bg-cyan-400 rounded-full inline-block shrink-0 animate-pulse" />
                    <span>{card.tagline}</span>
                  </div>

                  <div className={`pb-7 mb-8 border-b ${card.dividerStyle}`}>
                    <h3 className="font-display-syne font-800 text-white text-[24px] sm:text-[28px] tracking-tight mb-4 leading-[1.1]">
                      {card.title}
                    </h3>
                    {card.desc && (
                      <p className="font-body text-[15px] sm:text-[16px] leading-relaxed font-500 text-white/75">
                        {card.desc}
                      </p>
                    )}
                    
                    {card.price && (
                      <div className="mt-6 pt-6 border-t border-white/15 flex flex-wrap items-baseline gap-2">
                        <span className="font-display-syne font-900 text-[40px] sm:text-[48px] tracking-tight leading-none text-white drop-shadow-xs">
                          {card.price}
                        </span>
                        <span className="font-body text-[13px] font-700 text-white/60">
                          / {card.period}
                        </span>
                      </div>
                    )}
                  </div>

                  {card.bullets && card.bullets.length > 0 && (
                    <div className="space-y-4 mb-10 mt-6">
                      {card.bullets.map((b, bi) => (
                        <div key={bi} className="flex items-start gap-3.5 text-[15px] font-body font-500 text-white/85 leading-snug">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${card.checkStyle}`}>
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
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
                    <div className="w-full py-4 px-6 rounded-[1.2rem] bg-white/[0.04] border border-white/15 text-center font-body font-700 text-[12px] uppercase tracking-[0.15em] text-white/70 flex items-center justify-center gap-2 select-none">
                      <Clock className="w-4 h-4 text-cyan-300" />
                      <span>Available for all athletic skill tiers</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
