"use client";

import React from "react";
import MagneticButton from "@/components/kinetic/MagneticButton";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10">
      {/* ── HIGH-DENSITY INK BLACK EXECUTIVE SITE DIRECTORY ───── */}
      <div className="bg-[#06080B] text-white py-20 sm:py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1450px] mx-auto">
          
          <div id="locations" className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/15">
            <div>
              <div className="mb-4 flex items-center select-none">
                <img src="/logo.svg" alt="Bluefin Logo" className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain" />
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
                items: ["Overview & Telemetry", "Modular Bento Squads", "Championship Faculty", "Real Athlete Reviews"],
                links: ["#home", "#courses", "#coaches", "#testimonials"],
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
                        <span className="block font-body text-[13px] font-600 text-[#D8D5CF] hover:text-white transition-colors py-0.5 select-none">
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

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-body text-[12px] text-[#737376] font-600 select-none">
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
