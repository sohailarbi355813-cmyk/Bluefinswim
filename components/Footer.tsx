"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StaggeredText from "@/components/kinetic/StaggeredText";
import MagneticButton from "@/components/kinetic/MagneticButton";
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight, ShieldCheck, Waves, Sparkles } from "lucide-react";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", squad: "youth", pool: "Toronto Olympic Center", note: "" });
  const [sent, setSent] = useState(false);
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const fieldCls = "w-full bg-white border border-[#D8D5CF] rounded-2xl px-5 py-4 font-body text-[14px] font-600 text-[#0B0B0C] placeholder-[#0B0B0C]/40 focus:outline-none focus:border-[#003EFF] focus:ring-2 focus:ring-[#003EFF]/20 transition-all duration-200 shadow-xs";
  const labelCls = "block font-body text-[11px] font-800 tracking-[0.22em] uppercase text-[#3A3A3C] mb-2.5";

  return (
    <footer id="contact" className="relative z-10 border-t border-[#0B0B0C]/10">
      
      {/* ── DIAGNOSTIC BOOKING TERMINAL SPREAD ───────────────── */}
      <div className="max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-32">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 pb-12 border-b border-[#0B0B0C]/15">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#003EFF]/10 border border-[#003EFF]/25 text-[#003EFF] text-[11px] font-body font-800 tracking-[0.25em] uppercase">
              <Waves className="w-3.5 h-3.5 animate-pulse" />
              <span>Direct Coaching Dispatch</span>
            </div>
            
            <StaggeredText
              text="INITIATE YOUR AQUATIC"
              as="h2"
              stagger={0.04}
              className="font-display-syne font-900 text-[#0B0B0C] leading-none tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)" }}
            />
            
            <div className="font-editorial text-[#003EFF] leading-none tracking-[-0.02em] text-[2.5rem] sm:text-[4.5rem] italic font-700">
              Diagnostic Session.
            </div>
          </div>
          
          <p className="font-body font-500 text-[#3A3A3C] text-[16px] max-w-sm leading-relaxed">
            Complete our evaluation manifest and a senior coaching director will reach out within 4 business hours to organize your free poolside skill appraisal.
          </p>
        </div>

        {/* Modular Asymmetrical Terminal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT BENTO BLOCK (Span 5): Telemetry & Assurance */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-light-card p-8 sm:p-10 rounded-3xl space-y-8 bento-card">
              <div>
                <div className="font-body text-[11px] font-800 tracking-[0.28em] uppercase text-[#003EFF] mb-6 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#003EFF]" />
                  <span>Admissions Telemetry Hub</span>
                </div>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-[#0B0B0C]/10">
                    <div className="font-body text-[11px] font-800 tracking-[0.2em] uppercase text-[#737376] mb-1">Central Toronto Facilities</div>
                    <div className="font-display-syne font-800 text-[20px] text-[#0B0B0C]">Toronto Olympic · Harbourfront</div>
                  </div>

                  <div className="pb-6 border-b border-[#0B0B0C]/10">
                    <div className="font-body text-[11px] font-800 tracking-[0.2em] uppercase text-[#737376] mb-1">Direct Helpline &amp; Dispatch</div>
                    <div className="font-display-syne font-800 text-[22px] text-[#003EFF]">(416) 845-SWIM (7946)</div>
                  </div>

                  <div>
                    <div className="font-body text-[11px] font-800 tracking-[0.2em] uppercase text-[#737376] mb-1">Diagnostic Registry Mail</div>
                    <div className="font-body font-700 text-[16px] text-[#0B0B0C]">admissions@bluefinswim.ca</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F2EE] border border-[#D8D5CF] space-y-4 shadow-inner">
                <div className="font-body text-[11px] font-800 tracking-[0.24em] uppercase text-[#0B0B0C] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#003EFF]" />
                  <span>The Bluefin Assurance</span>
                </div>
                {[
                  "Red Cross & National Coaching accredited",
                  "Complimentary 30-min underwater diagnostic",
                  "Zero contracts, club fees, or financial locks",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 font-body text-[13px] font-600 text-[#3A3A3C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#003EFF] mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT BENTO BLOCK (Span 7): Fluid Application Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="confirmed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-light-card p-12 sm:p-16 rounded-3xl flex flex-col items-center text-center gap-6 shadow-[0_30px_90px_rgba(0,0,0,0.1)] border border-[#003EFF]"
                >
                  <div className="w-20 h-20 rounded-full bg-[#003EFF] flex items-center justify-center shadow-[0_10px_30px_rgba(0,62,255,0.35)]">
                    <CheckCircle2 className="w-10 h-10 text-white stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-display-syne font-900 text-[#0B0B0C] text-3xl tracking-tight mb-2 uppercase">
                      Diagnostic Reserved
                    </h3>
                    <p className="font-body text-[16px] text-[#3A3A3C] max-w-md mx-auto leading-relaxed font-500">
                      We have compiled your athletic profile for the <strong className="text-[#0B0B0C] font-bold">{form.pool}</strong> facility. A coaching director will dispatch confirmation details shortly.
                    </p>
                  </div>
                  <MagneticButton force={0.4} className="mt-4">
                    <button
                      onClick={() => setSent(false)}
                      className="px-9 py-4 rounded-2xl bg-[#0B0B0C] hover:bg-[#003EFF] text-white font-body text-[12px] font-800 tracking-[0.2em] uppercase transition-all shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                    >
                      Submit Another Profile
                    </button>
                  </MagneticButton>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="glass-light-card p-8 sm:p-14 rounded-3xl space-y-8 bento-card shadow-[0_25px_70px_rgba(0,0,0,0.07)]"
                >
                  <div className="flex items-center justify-between pb-6 border-b border-[#0B0B0C]/15">
                    <div className="font-display-syne font-800 text-[#0B0B0C] text-2xl tracking-tight uppercase flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#003EFF]" />
                      <span>Athlete Registry</span>
                    </div>
                    <span className="text-[10px] font-body font-800 tracking-widest uppercase text-[#003EFF] bg-[#003EFF]/10 px-3 py-1 rounded-full border border-[#003EFF]/20">
                      Encrypted Portal
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className={labelCls}>Swimmer or Guardian Name *</label>
                      <input required type="text" placeholder="e.g. Michael Harrison" value={form.name}
                        onChange={(e) => set("name", e.target.value)} className={fieldCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Email Address *</label>
                      <input required type="email" placeholder="michael@example.com" value={form.email}
                        onChange={(e) => set("email", e.target.value)} className={fieldCls} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className={labelCls}>Telephone Dispatch *</label>
                      <input required type="tel" placeholder="(416) 000-0000" value={form.phone}
                        onChange={(e) => set("phone", e.target.value)} className={fieldCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Program Squad Track</label>
                      <select value={form.squad} onChange={(e) => set("squad", e.target.value)}
                        className={fieldCls + " cursor-pointer"}>
                        <option value="youth">Youth — Hydro-Foundation (4–8)</option>
                        <option value="competitive">Competitive Velocity Squad (9–18)</option>
                        <option value="private">1-on-1 Underwater 4K Video Lab</option>
                        <option value="adult">Masters Endurance & Triathlon Glide (18+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Preferred Toronto Pool Facility</label>
                    <select value={form.pool} onChange={(e) => set("pool", e.target.value)}
                      className={fieldCls + " cursor-pointer"}>
                      <option value="Toronto Olympic Center">Toronto Olympic Center — Main 50m Chamber</option>
                      <option value="Toronto Harbourfront Studio">Toronto Harbourfront Hydro Studio</option>
                      <option value="Downtown Toronto Facility">Downtown Toronto Youth Aquatics</option>
                      <option value="Toronto West Velocity Lab">Toronto West Velocity Training Lab</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelCls}>Current PBs or Athletic Targets (Optional)</label>
                    <textarea rows={3} placeholder="Describe swimming fluency, meet qualification goals, or schedule constraints..."
                      value={form.note} onChange={(e) => set("note", e.target.value)}
                      className={fieldCls + " resize-none"} />
                  </div>

                  <div className="pt-4">
                    <MagneticButton force={0.45} className="w-full">
                      <button
                        type="submit"
                        data-cursor-text="TRANSMIT"
                        className="w-full py-5 rounded-2xl bg-[#003EFF] hover:bg-[#0B0B0C] text-white font-body font-800 text-[14px] tracking-[0.22em] uppercase transition-all flex items-center justify-center gap-3 shadow-[0_12px_35px_rgba(0,62,255,0.35)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.2)]"
                      >
                        <span>Transmit Diagnostic Booking Profile</span>
                        <ArrowRight className="w-5 h-5 text-white" />
                      </button>
                    </MagneticButton>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>

      {/* ── HIGH-DENSITY INK BLACK EXECUTIVE SITE DIRECTORY ───── */}
      <div className="bg-[#0B0B0C] text-[#F9F8F5] py-20 px-6 sm:px-10 lg:px-16 border-t border-[#0B0B0C]">
        <div className="max-w-[1450px] mx-auto">
          
          <div id="locations" className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/15">
            <div>
              <div className="font-display-syne font-800 tracking-[-0.03em] text-[26px] mb-3 text-white flex items-center gap-2">
                BLUEFIN <span className="text-[#003EFF] font-editorial italic font-600">Aqua</span>
              </div>
              <p className="font-body text-[13px] text-[#D8D5CF]/80 leading-relaxed font-500">
                Toronto&rsquo;s most scientifically engineered competitive swimming academy and hydrodynamic training federation since 2019.
              </p>
            </div>

            {[
              {
                title: "Olympic pool chambers",
                items: ["Toronto Olympic Facility", "Harbourfront Hydro Center"],
                sub: ["250 University Ave, Toronto ON", "333 Queens Quay W, Toronto ON"],
              },
              {
                title: "Regional velocity studios",
                items: ["Downtown Central Studio", "Toronto West Facility"],
                sub: ["Bay St & King St W, Toronto ON", "Bloor St W & Parkside Dr, Toronto ON"],
              },
              {
                title: "Federation directory",
                items: ["Overview & Telemetry", "Modular Bento Squads", "Championship Faculty", "Podium Winner Logs", "Poolside Assessment"],
                links: ["#home", "#courses", "#coaches", "#testimonials", "#contact"],
                isNav: true,
              },
            ].map((col, ci) => (
              <div key={ci}>
                <div className="font-body text-[11px] font-800 tracking-[0.28em] uppercase text-[#003EFF] mb-5">
                  {col.title}
                </div>
                <div className="space-y-4">
                  {col.items.map((item, ii) =>
                    col.isNav ? (
                      <MagneticButton key={ii} force={0.2} href={col.links![ii]}>
                        <span className="block font-body text-[13px] font-600 text-[#D8D5CF] hover:text-white transition-colors py-0.5">
                          {item}
                        </span>
                      </MagneticButton>
                    ) : (
                      <div key={ii}>
                        <div className="font-body text-[13px] font-700 text-white">{item}</div>
                        <div className="font-body text-[11px] text-[#737376] mt-0.5 font-600">{col.sub![ii]}</div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-body text-[12px] text-[#737376] font-600">
            <div>
              &copy; {new Date().getFullYear()} Bluefin Aquatics Federation Toronto. All rights reserved.
            </div>
            <div className="flex gap-8 text-[#D8D5CF]">
              <a href="#" className="hover:text-[#003EFF] transition-colors">Privacy Protocol</a>
              <a href="#" className="hover:text-[#003EFF] transition-colors">Hydrodynamic Terms</a>
              <a href="#" className="hover:text-[#003EFF] transition-colors">Red Cross Waiver</a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
