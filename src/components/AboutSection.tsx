"use client";

import React from "react";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF6ED] border-b border-[#174D38]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left Column: Heading & Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#174D38]/25 bg-[#F5EEDC] px-3.5 py-1 text-xs font-mono font-medium text-[#174D38]">
              <span className="w-2 h-2 rounded-full bg-[#F45B91]" />
              <span>About • Approach</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#174D38] tracking-tight leading-[1.12]">
              Software engineering is at its best when complex systems feel effortless to use.
            </h2>

            <div className="pt-4 font-mono text-xs text-[#78816B] space-y-1">
              <p>Based in Chandigarh, India</p>
              <p>Senior Full Stack Engineer @ NLD India Software</p>
              <p>Previously @ Linear (Imparo Technologies)</p>
            </div>
          </motion.div>

          {/* Right Column: Natural Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6 text-[#454D41] text-base sm:text-lg leading-relaxed font-sans"
          >
            <p>
              Over the past four years, I have owned software systems across their entire lifecycle — from initial database
              modeling to high-concurrency production deployments. My work has focused on three core areas: mission-critical
              logistics SaaS platforms, multi-tenant B2B enterprise applications, and standalone mobile products.
            </p>

            <p>
              I spend most of my time working in typed, modular ecosystems. My preferred foundation is{" "}
              <strong className="text-[#174D38] font-semibold">TypeScript, React, Node.js, and PostgreSQL</strong>, complemented
              by <strong className="text-[#174D38] font-semibold">React Native</strong> for cross-platform mobile and{" "}
              <strong className="text-[#174D38] font-semibold">AWS</strong> for infrastructure. I treat schema design, query
              optimization, and API ergonomics with the same deliberate care as frontend animations and responsive layout.
            </p>

            <p>
              My approach avoids the artificial wall between frontend and backend. I build end-to-end: designing relational
              schemas that anticipate growth, securing webhook streams with cryptographic validation, optimizing background
              worker queues, and delivering interfaces that remain fast and intuitive under heavy daily operations.
            </p>

            {/* Quick Principles Strip */}
            <div className="pt-6 border-t border-[#174D38]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-3.5 rounded-xl border border-[#174D38]/15 bg-[#FFFDF8]">
                <p className="font-bold text-[#174D38]">Full Ownership</p>
                <p className="text-[11px] text-[#78816B] mt-1 font-sans">
                  From schema migration to store release.
                </p>
              </div>
              <div className="p-3.5 rounded-xl border border-[#174D38]/15 bg-[#FFFDF8]">
                <p className="font-bold text-[#174D38]">Pragmatic Scale</p>
                <p className="text-[11px] text-[#78816B] mt-1 font-sans">
                  Clean architecture without over-engineering.
                </p>
              </div>
              <div className="p-3.5 rounded-xl border border-[#174D38]/15 bg-[#FFFDF8]">
                <p className="font-bold text-[#174D38]">User Empathy</p>
                <p className="text-[11px] text-[#78816B] mt-1 font-sans">
                  Speed, predictability, and polished details.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
