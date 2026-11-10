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
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#F45B91]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F5EEDC]/25 bg-[#0E3525] px-4 py-1.5 text-xs font-mono font-medium text-[#F5EEDC]">
              <span className="w-2 h-2 rounded-full bg-[#F45B91]" />
              <span>Get in Touch • Direct Channel</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5EEDC] leading-[1.12]">
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
                <span>Send Email</span>
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

            {/* Clean, Simple Bottom Details */}
            <div className="pt-8 border-t border-[#F5EEDC]/15 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#F5EEDC]/80">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#F5EEDC]">Chandigarh, India</span>
                <span>•</span>
                <span className="text-[#F5EEDC]/70">+91 98764 11094</span>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href="https://linkedin.com/in/rajatchoudhary999"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F45B91] transition-colors font-semibold"
                >
                  LinkedIn ↗
                </a>
                <span>•</span>
                <a
                  href="https://github.com/RajatChoudhary999"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F45B91] transition-colors font-semibold"
                >
                  GitHub ↗
                </a>
                <span>•</span>
                <a
                  href="https://twitter.com/rajatchoudhary"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F45B91] transition-colors font-semibold"
                >
                  X (Twitter) ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
