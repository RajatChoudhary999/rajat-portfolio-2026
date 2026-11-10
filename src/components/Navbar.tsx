"use client";

import React, { useState } from "react";
import { DownloadIcon } from "@/components/Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Selected Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#174D38]/15 bg-[#F5EEDC]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-18">
        {/* Left: Brand / Monogram */}
        <div className="flex items-center gap-3">
          <a href="#home" className="group flex items-baseline gap-1.5">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#174D38] group-hover:text-[#0E3525] transition-colors">
              Rajat Choudhary
            </span>
            <span className="w-2 h-2 rounded-full bg-[#F45B91]" />
          </a>
          <span className="hidden sm:inline-block font-mono text-xs text-[#78816B] border-l border-[#174D38]/20 pl-3">
            Senior Full Stack Engineer
          </span>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 font-sans text-xs font-semibold tracking-wider uppercase text-[#174D38]/85">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#F45B91] transition-colors relative py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/resume/Rajat_Full_Stack_Engineer.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#174D38]/30 hover:border-[#174D38] bg-[#FAF6ED] hover:bg-[#FFFDF8] px-3.5 py-2 text-xs font-mono font-medium text-[#174D38] transition-colors shadow-sm"
          >
            <DownloadIcon className="w-3.5 h-3.5 text-[#F45B91]" />
            <span className="hidden sm:inline">Resume PDF</span>
            <span className="sm:hidden">PDF</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[#F45B91] hover:bg-[#E4477F] px-4 py-2 text-xs font-mono font-semibold text-[#FFFDF8] transition-all shadow-sm hover:shadow"
          >
            <span>Let&apos;s Talk</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg border border-[#174D38]/20 text-[#174D38] hover:bg-[#FAF6ED]"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#174D38]/15 bg-[#FAF6ED] px-4 py-5 space-y-3 font-mono text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#174D38] font-bold border-b border-[#174D38]/10"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg bg-[#F45B91] text-[#FFFDF8] font-bold"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
