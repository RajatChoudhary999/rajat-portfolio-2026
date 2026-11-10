"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowDownIcon, DownloadIcon } from "@/components/Icons";
import LottieAnimation from "@/components/LottieAnimation";
import { heroSystemAnimation } from "@/data/lottieAnimations";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center border-b border-[#174D38]/15 bg-[#F5EEDC] overflow-hidden pt-12 pb-20 md:py-24"
    >
      {/* Editorial paper grid backdrop */}
      <div className="absolute inset-0 bg-cream-grid opacity-70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left Column: Personal Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Top slug */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#174D38]/25 bg-[#FAF6ED] px-4 py-1.5 font-mono text-xs text-[#174D38]">
              <span className="w-2 h-2 rounded-full bg-[#F45B91] animate-pulse" />
              <span className="font-bold">Rajat Choudhary</span>
              <span className="text-[#78816B]">•</span>
              <span>Senior Full Stack Engineer</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-[#174D38] leading-[1.08]">
              I build resilient software that balances technical rigor with human clarity.
            </h1>

            {/* Concise narrative */}
            <p className="font-sans text-base sm:text-xl text-[#454D41] leading-relaxed max-w-2xl font-normal">
              Senior Full Stack Engineer with over 4 years of production experience crafting high-throughput logistics platforms,
              enterprise B2B SaaS, and cross-platform mobile applications across TypeScript, React, Node.js, and PostgreSQL.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl bg-[#174D38] hover:bg-[#0E3525] px-6 py-3.5 font-mono text-xs font-bold text-[#F5EEDC] transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>View Selected Work</span>
                <ArrowDownIcon className="w-4 h-4 text-[#F45B91]" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-xl border border-[#174D38]/30 hover:border-[#174D38] bg-[#FAF6ED] hover:bg-[#FFFDF8] px-5 py-3.5 font-mono text-xs font-bold text-[#174D38] transition-all shadow-sm"
              >
                <svg className="w-4 h-4 text-[#F45B91]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Experience Timeline</span>
              </a>

              <a
                href="/resume/Rajat_Full_Stack_Engineer.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F45B91] hover:bg-[#E4477F] px-5 py-3.5 font-mono text-xs font-bold text-white transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
              >
                <DownloadIcon className="w-4 h-4 text-white" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Four Key Pillars */}
            <div className="pt-6 border-t border-[#174D38]/15 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
              <div>
                <p className="font-serif text-2xl font-bold text-[#174D38]">4+ Years</p>
                <p className="text-[11px] text-[#78816B] mt-0.5">Full Stack Ownership</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#174D38]">Logistics</p>
                <p className="text-[11px] text-[#78816B] mt-0.5">Event Gateways &amp; OCR</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#174D38]">4,000+</p>
                <p className="text-[11px] text-[#78816B] mt-0.5">Enterprise WAU</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#174D38]">Google Play</p>
                <p className="text-[11px] text-[#78816B] mt-0.5">Published Mobile App</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Art-Directed Editorial Engineering Visual with Single Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[440px] rounded-3xl border-2 border-[#174D38] bg-[#FAF6ED] p-6 sm:p-7 shadow-2xl flex flex-col justify-between overflow-hidden">
              {/* Subtle architectural background rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-80 h-80 rounded-full border border-dashed border-[#174D38]/20 animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-56 h-56 rounded-full border border-[#174D38]/15" />
              </div>

              {/* Clean Top Bar (No switch bar) */}
              <div className="relative z-10 flex items-center justify-between font-mono text-xs pb-3.5 border-b border-[#174D38]/15">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#174D38]">ENGINEERING ARCHITECTURE</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-[#F45B91]">
                  <span className="w-2 h-2 rounded-full bg-[#F45B91] animate-ping" />
                  <span>ACTIVE</span>
                </div>
              </div>

              {/* Center Content: Single Clean Lottie Animation */}
              <div className="relative z-10 my-4 flex flex-col items-center justify-center min-h-[260px]">
                <div className="w-full flex flex-col items-center">
                  <div className="w-full h-56 sm:h-60 relative flex items-center justify-center">
                    <LottieAnimation
                      animationData={heroSystemAnimation}
                      className="w-full h-full max-h-[240px]"
                      loop={true}
                      autoplay={true}
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#174D38]/10 text-[#174D38] font-mono text-[11px] font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#F45B91]" />
                      Distributed Event Pipeline • 60 FPS
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Stack Indicators */}
              <div className="relative z-10 pt-3 border-t border-[#174D38]/15 flex items-center justify-between font-mono text-[11px] text-[#174D38]">
                <span>TypeScript • React</span>
                <span className="text-[#F45B91] font-bold">•</span>
                <span>Node • PostgreSQL</span>
                <span className="text-[#F45B91] font-bold">•</span>
                <span>AWS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
