"use client";

import React, { useState } from "react";
import { CopyIcon, CheckIcon, DownloadIcon } from "@/components/Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rajrajatchoudhary4@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF6ED]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-2 border-[#174D38] bg-[#174D38] p-8 sm:p-12 lg:p-16 text-[#F5EEDC] shadow-2xl relative overflow-hidden">
          {/* Subtle warm accent glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F45B91]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1.35fr_0.65fr] gap-10 lg:gap-14 items-center">
            {/* Left Column: Main Narrative & Actions */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F5EEDC]/25 bg-[#0E3525] px-4 py-1.5 text-xs font-mono font-medium text-[#F5EEDC]">
                <span className="w-2 h-2 rounded-full bg-[#F45B91]" />
                <span>Get in Touch • Direct Channel</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5EEDC] leading-[1.1]">
                Interested in collaborating or discussing senior engineering roles?
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-[#F5EEDC]/85 leading-relaxed font-sans max-w-2xl">
                Currently engineering high-throughput full-stack logistics SaaS at NLD India Software. Open to technical
                conversations, architecture reviews, and senior full-stack opportunities.
              </p>

              {/* Email & Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:rajrajatchoudhary4@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F45B91] hover:bg-[#E4477F] px-6 py-3.5 font-mono text-xs font-bold text-[#FFFDF8] transition-all shadow-md hover:-translate-y-0.5"
                >
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#F5EEDC]/30 bg-[#0E3525] hover:bg-[#1E5C44] px-5 py-3.5 font-mono text-xs font-semibold text-[#F5EEDC] transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-4 h-4 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-4 h-4 text-[#F45B91]" />
                      <span>Copy: rajrajatchoudhary4@gmail.com</span>
                    </>
                  )}
                </button>

                <a
                  href="/resume/Rajat_Full_Stack_Engineer.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#F5EEDC]/30 bg-[#0E3525] hover:bg-[#1E5C44] px-5 py-3.5 font-mono text-xs font-semibold text-[#F5EEDC] transition-colors"
                >
                  <DownloadIcon className="w-4 h-4 text-[#F45B91]" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Info & Social Dispatch Card */}
            <div className="rounded-2xl border border-[#F5EEDC]/20 bg-[#0E3525]/80 backdrop-blur-sm p-6 sm:p-8 space-y-6 font-mono text-xs text-[#F5EEDC]">
              <div>
                <p className="text-[#F45B91] font-bold uppercase tracking-wider text-[11px] mb-1">
                  AVAILABILITY &amp; LOCATION
                </p>
                <p className="font-serif text-2xl font-bold text-[#F5EEDC]">Chandigarh, India</p>
                <p className="text-[11px] text-[#F5EEDC]/70 mt-1">Open to Remote &amp; Select Onsite Opportunities</p>
              </div>

              <div className="pt-4 border-t border-[#F5EEDC]/15 space-y-3">
                <p className="text-[#F45B91] font-bold uppercase tracking-wider text-[11px]">
                  DIRECT REACH
                </p>
                <div className="space-y-1.5 text-[12px]">
                  <p className="text-[#F5EEDC]/90">
                    <span className="text-[#F5EEDC]/60">Email: </span>
                    <a href="mailto:rajrajatchoudhary4@gmail.com" className="underline hover:text-[#F45B91]">
                      rajrajatchoudhary4@gmail.com
                    </a>
                  </p>
                  <p className="text-[#F5EEDC]/90">
                    <span className="text-[#F5EEDC]/60">Phone: </span>
                    <a href="tel:+919876411094" className="hover:text-[#F45B91]">
                      +91 98764 11094
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F5EEDC]/15 space-y-2.5">
                <p className="text-[#F45B91] font-bold uppercase tracking-wider text-[11px]">
                  NETWORKS &amp; PROFILES
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://linkedin.com/in/rajatchoudhary999"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg border border-[#F5EEDC]/25 bg-[#174D38] hover:bg-[#F45B91] hover:text-white transition-all font-semibold"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href="https://github.com/RajatChoudhary999"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg border border-[#F5EEDC]/25 bg-[#174D38] hover:bg-[#F45B91] hover:text-white transition-all font-semibold"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://twitter.com/rajatchoudhary"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg border border-[#F5EEDC]/25 bg-[#174D38] hover:bg-[#F45B91] hover:text-white transition-all font-semibold"
                  >
                    X (Twitter) ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
