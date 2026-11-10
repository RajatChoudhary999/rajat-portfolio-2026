"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckIcon,
  ActivityIcon,
  ShieldCheckIcon,
  CpuIcon,
} from "@/components/Icons";

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: "clearport",
      title: "Maritime Logistics Platform",
      badge: "Logistics SaaS & Event Ingestion",
      company: "NLD India Software",
      period: "2024 – Present",
      role: "Senior Software Engineer",
      tagline:
        "High-throughput container logistics platform connecting external port APIs, secure event ingestion, and automated document extraction.",
      problem:
        "Supply chain operators face fragmented communication across maritime terminals, customs authorities, and freight forwarders. Manual status verification causes demurrage penalties and operational delays.",
      contribution:
        "Architected end-to-end event ingestion pipelines consuming container discharge and customs milestones via webhooks. Engineered asymmetric cryptographic signature verification to ensure payload integrity, designed automated document OCR extraction pipelines, and optimized relational database queries.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Cryptographic Auth", "OCR", "Docker"],
      visualType: "logistics-console",
    },
    {
      id: "linear-web",
      title: "Linear Enterprise Platform",
      badge: "Enterprise B2B SaaS",
      company: "Linear (Imparo Technologies)",
      period: "2023 – 2024",
      role: "Senior Software Engineer",
      tagline:
        "Enterprise challenge and learning platform serving 4,000+ weekly active users with multi-tenant RBAC and client-side caching.",
      problem:
        "Rapid enterprise adoption created operational bottlenecks in manual participant onboarding, client-side cache staleness, and manual cohort reporting.",
      contribution:
        "Designed and shipped an enterprise administration platform with 3-tier RBAC (org admin, group admin, participant) and bulk onboarding, reducing operational overhead by 73%. Built bi-directional Service Worker caching (-13% data fetch drops) and automated report generation dispatching 7,000+ monthly emails via AWS SES.",
      tech: ["React", "TypeScript", "Redux Toolkit", "Service Workers", "Node.js", "PostgreSQL", "AWS (S3, SES, Cognito)"],
      visualType: "rbac-matrix",
    },
    {
      id: "linear-mobile",
      title: "Linear Mobile Application",
      badge: "Cross-Platform Mobile App",
      company: "Linear (Imparo Technologies)",
      period: "2023 – 2024",
      role: "Sole Mobile Engineer",
      tagline:
        "Production React Native mobile application built from scratch as sole developer and published to Google Play.",
      problem:
        "Enterprise clients needed an on-the-go mobile experience supporting complex assessment interactions while maintaining smooth 60fps performance across diverse Android devices.",
      contribution:
        "Owned 100% of mobile development from empty repository to store release: authentication flows, offline-tolerant state management, 5-question challenge evaluation state machine, gesture navigation, and app bundle packaging.",
      tech: ["React Native CLI", "TypeScript", "Redux Toolkit", "NativeWind", "Lottie Animations", "Google Play Release"],
      visualType: "mobile-device",
    },
    {
      id: "driver-app",
      title: "Driver Logistics Platform",
      badge: "Mobile Dispatch & Drayage",
      company: "NLD India Software",
      period: "2024 – Present",
      role: "Senior Software Engineer",
      tagline:
        "Offline-first mobile dispatch application ensuring container pickup, customs milestones, and terminal gate-in are reliably logged.",
      problem:
        "Port terminals suffer from erratic cellular connectivity, leading to dropped driver milestone updates and gate-pass verification delays.",
      contribution:
        "Developed an offline-first event journal that queues checkpoint updates locally and synchronizes automatically upon reconnecting, complemented by rapid camera document capture for gate passes.",
      tech: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Offline Sync", "Image Compression"],
      visualType: "offline-sync",
    },
  ];

  const current = projects[activeProject];

  // --- ClearPort Dummy Product State ---
  const [selectedContainer, setSelectedContainer] = useState("CONT-7824-A");
  const [webhookTriggered, setWebhookTriggered] = useState(false);

  // --- Linear Enterprise Dummy Product State ---
  const [rbacRole, setRbacRole] = useState<"ORG_ADMIN" | "GROUP_ADMIN" | "PARTICIPANT">("ORG_ADMIN");
  const [permToggles, setPermToggles] = useState({
    manageCohorts: true,
    bulkCsv: true,
    sesDispatch: true,
  });

  // --- Linear Mobile Dummy Product State ---
  const [challengeStep, setChallengeStep] = useState(2);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [biometricUnlocked, setBiometricUnlocked] = useState(false);

  // --- Driver App Dummy Product State ---
  const [isOnline, setIsOnline] = useState(true);
  const [offlineEvents, setOfflineEvents] = useState(0);

  const containerData: Record<
    string,
    { route: string; status: string; progress: number; vessel: string }
  > = {
    "CONT-7824-A": {
      route: "Terminal Alpha West → Central Depot",
      status: "CLEARED & GATE RELEASED",
      progress: 90,
      vessel: "Maersk Horizon (Voyage 409)",
    },
    "CONT-9102-B": {
      route: "Deepwater Berth 03 → Customs Bay",
      status: "CUSTOMS INSPECTION",
      progress: 55,
      vessel: "MSC Antares (Voyage 112)",
    },
    "CONT-4419-C": {
      route: "Inland Depot → Gantry Crane 02",
      status: "DISCHARGED TO RAIL",
      progress: 35,
      vessel: "CMA CGM Palais (Voyage 88)",
    },
  };

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#F5EEDC] border-b border-[#174D38]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-10 border-b border-[#174D38]/15 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#174D38]/25 bg-[#FAF6ED] px-3.5 py-1 text-xs font-mono font-medium text-[#174D38] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F45B91]" />
              <span>Selected Work • Case Studies</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#174D38] tracking-tight">
              Selected Engineering Projects
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#454D41] font-sans">
              A curated selection of high-concurrency logistics systems, enterprise B2B SaaS platforms, and mobile
              applications engineered and maintained in production.
            </p>
          </div>

          {/* Project Switcher Navigation */}
          <div className="flex flex-wrap gap-2">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  setActiveProject(idx);
                  setWebhookTriggered(false);
                  setSelectedOption(null);
                  setBiometricUnlocked(false);
                }}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs transition-all ${
                  activeProject === idx
                    ? "bg-[#174D38] text-[#F5EEDC] font-bold shadow-md scale-[1.02]"
                    : "bg-[#FAF6ED] border border-[#174D38]/15 text-[#454D41] hover:bg-[#FFFDF8]"
                }`}
              >
                <span className="text-[#F45B91] mr-1.5 font-bold">0{idx + 1}.</span>
                <span>{p.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Project Editorial Spread */}
        <div className="mt-10 rounded-3xl border-2 border-[#174D38] bg-[#FFFDF8] p-6 sm:p-10 shadow-xl">
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#174D38]/15 font-mono text-xs">
            <div>
              <span className="text-[#F45B91] font-bold uppercase tracking-wider">{current.badge}</span>
              <h3 className="mt-1 font-serif text-3xl sm:text-4xl font-bold text-[#174D38]">
                {current.title}
              </h3>
            </div>
            <div className="sm:text-right font-sans">
              <p className="font-bold text-[#174D38]">{current.company}</p>
              <p className="text-xs text-[#78816B] font-mono">{current.role} • {current.period}</p>
            </div>
          </div>

          {/* Narrative Grid */}
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            {/* Left: Project Overview & Engineering Story */}
            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs font-bold text-[#F45B91] uppercase tracking-wider mb-2">
                  01. Project Overview
                </h4>
                <p className="text-base sm:text-lg text-[#20251F] leading-relaxed font-sans font-medium">
                  {current.tagline}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-[#174D38] uppercase tracking-wider mb-2">
                  02. The Engineering Problem
                </h4>
                <p className="text-sm sm:text-base text-[#454D41] leading-relaxed font-sans">
                  {current.problem}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-[#174D38] uppercase tracking-wider mb-2">
                  03. My Contribution
                </h4>
                <p className="text-sm sm:text-base text-[#454D41] leading-relaxed font-sans">
                  {current.contribution}
                </p>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-[#174D38]/15">
                <h4 className="font-mono text-xs font-bold text-[#78816B] uppercase tracking-wider mb-3">
                  04. Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {current.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg border border-[#174D38]/20 bg-[#FAF6ED] font-mono text-xs text-[#174D38] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Bespoke Working Mini Product Demonstration */}
            <div className="rounded-2xl border-2 border-[#174D38] bg-[#FAF6ED] p-5 sm:p-6 shadow-md overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-[#174D38]/15 font-mono text-xs text-[#78816B] mb-4">
                <span className="font-bold text-[#174D38]">05. LIVE PROTOTYPE CONSOLE</span>
                <span className="flex items-center gap-1.5 text-[#F45B91] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#F45B91] animate-pulse" />
                  INTERACTIVE PRODUCT
                </span>
              </div>

              <AnimatePresence mode="wait">
                {/* PRODUCT 1: ClearPort Maritime Logistics Console */}
                {current.visualType === "logistics-console" && (
                  <motion.div
                    key="clearport-console"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Consignment Switcher Bar */}
                    <div className="p-3 rounded-xl bg-[#FFFDF8] border border-[#174D38]/15 font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between text-[#78816B]">
                        <span className="font-bold text-[#174D38]">CONTAINER TRACKING CONSOLE</span>
                        <span className="text-emerald-700 font-bold">● 24/7 EVENT BUS</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        {["CONT-7824-A", "CONT-9102-B", "CONT-4419-C"].map((cId) => (
                          <button
                            key={cId}
                            onClick={() => {
                              setSelectedContainer(cId);
                              setWebhookTriggered(false);
                            }}
                            className={`p-1.5 rounded-lg text-center font-bold text-[11px] transition-all ${
                              selectedContainer === cId
                                ? "bg-[#174D38] text-[#F5EEDC]"
                                : "bg-[#FAF6ED] border border-[#174D38]/10 text-[#454D41] hover:bg-[#FFFDF8]"
                            }`}
                          >
                            {cId}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Active Shipment Detail & Waypoint Progress */}
                    <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#174D38]/15 font-mono text-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-[#174D38]">{selectedContainer}</p>
                          <p className="text-[10px] text-[#78816B]">{containerData[selectedContainer].vessel}</p>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#174D38]/10 text-[#174D38]">
                          {containerData[selectedContainer].status}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-[#78816B]">
                          <span>Vessel Berthed</span>
                          <span>Customs Cleared</span>
                          <span>Gate Released</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#174D38]/10 overflow-hidden">
                          <motion.div
                            className="h-full bg-[#174D38]"
                            initial={{ width: 0 }}
                            animate={{ width: `${containerData[selectedContainer].progress}%` }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Live Throughput Area Graph (Low-Noise SVG) */}
                    <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#174D38]/15 font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between text-[#78816B] text-[11px]">
                        <span>INGESTION THROUGHPUT (EVENTS / HR)</span>
                        <span className="text-[#174D38] font-bold">AVG 3,240 / HR</span>
                      </div>
                      <div className="h-16 w-full flex items-end">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="streamGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#174D38" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#174D38" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          {/* Area */}
                          <path
                            d="M0 50 Q 30 45, 60 25 T 120 30 T 180 15 T 240 20 T 300 8 L 300 60 L 0 60 Z"
                            fill="url(#streamGrad)"
                          />
                          {/* Line */}
                          <path
                            d="M0 50 Q 30 45, 60 25 T 120 30 T 180 15 T 240 20 T 300 8"
                            fill="none"
                            stroke="#174D38"
                            strokeWidth="2.5"
                          />
                          {/* Pulse Dot */}
                          <circle cx="300" cy="8" r="4" fill="#F45B91" className="animate-ping" />
                          <circle cx="300" cy="8" r="3.5" fill="#F45B91" />
                        </svg>
                      </div>
                    </div>

                    {/* Interactive Webhook Ingestion Trigger */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={() => setWebhookTriggered(true)}
                        className="flex-1 py-2 rounded-xl bg-[#174D38] hover:bg-[#0E3525] text-[#F5EEDC] font-mono text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                      >
                        <span>⚡ Ingest Webhook &amp; Verify RS256</span>
                      </button>
                    </div>

                    {webhookTriggered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 font-mono text-[11px] text-emerald-900 flex items-center justify-between"
                      >
                        <span>✓ RS256 Signature Validated</span>
                        <span className="font-bold">Latency 84ms • Parsed</span>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* PRODUCT 2: Linear Enterprise Platform Console */}
                {current.visualType === "rbac-matrix" && (
                  <motion.div
                    key="rbac-console"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 font-mono text-xs"
                  >
                    {/* Role Switcher */}
                    <div className="flex gap-1.5 p-1 rounded-xl bg-[#FFFDF8] border border-[#174D38]/15">
                      {(["ORG_ADMIN", "GROUP_ADMIN", "PARTICIPANT"] as const).map((role) => (
                        <button
                          key={role}
                          onClick={() => setRbacRole(role)}
                          className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                            rbacRole === role
                              ? "bg-[#174D38] text-[#F5EEDC] shadow-sm"
                              : "text-[#454D41] hover:bg-[#FAF6ED]"
                          }`}
                        >
                          {role.replace("_", " ")}
                        </button>
                      ))}
                    </div>

                    {/* 7-Day Cohort Engagement Mini Bar Graph */}
                    <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#174D38]/15 space-y-2">
                      <div className="flex justify-between items-center text-[#78816B] text-[11px]">
                        <span>ENTERPRISE COHORT ENGAGEMENT</span>
                        <span className="text-[#174D38] font-bold">4,000+ WAU</span>
                      </div>
                      <div className="h-16 flex items-end justify-between gap-2 pt-2 px-1">
                        {[
                          { day: "M", val: 65 },
                          { day: "T", val: 80 },
                          { day: "W", val: 95 },
                          { day: "T", val: 90 },
                          { day: "F", val: 100 },
                          { day: "S", val: 40 },
                          { day: "S", val: 45 },
                        ].map((b) => (
                          <div key={b.day} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full bg-[#174D38]/15 rounded-t h-12 flex items-end">
                              <motion.div
                                className="w-full rounded-t bg-[#174D38]"
                                initial={{ height: 0 }}
                                animate={{ height: `${b.val}%` }}
                                transition={{ duration: 0.5 }}
                              />
                            </div>
                            <span className="text-[9px] text-[#78816B]">{b.day}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Capabilities Checklist */}
                    <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#174D38]/15 space-y-2.5">
                      <div className="flex justify-between text-[#78816B] text-[11px]">
                        <span>ROLE CAPABILITY MATRIX</span>
                        <span className="text-[#F45B91] font-bold">{rbacRole}</span>
                      </div>
                      <div className="space-y-2 text-[11px]">
                        <div className="flex items-center justify-between">
                          <span>View Assigned Learning Tracks</span>
                          <span className="text-emerald-700 font-bold">✓ Enabled</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Manage Cohort Groups &amp; Dates</span>
                          {rbacRole !== "PARTICIPANT" ? (
                            <span className="text-emerald-700 font-bold">✓ Enabled</span>
                          ) : (
                            <span className="text-red-500 font-bold">✕ Restricted</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Bulk CSV Onboarding &amp; SES Dispatch</span>
                          {rbacRole === "ORG_ADMIN" ? (
                            <span className="text-emerald-700 font-bold">✓ Enabled</span>
                          ) : (
                            <span className="text-red-500 font-bold">✕ Restricted</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Cache & Service Worker Banner */}
                    <div className="p-2.5 rounded-xl bg-[#FFFDF8] border border-[#174D38]/15 flex items-center justify-between text-[11px]">
                      <span className="text-[#454D41]">Client Caching: Service Worker</span>
                      <span className="text-emerald-800 font-bold">99.4% Hit Rate</span>
                    </div>
                  </motion.div>
                )}

                {/* PRODUCT 3: Linear Mobile Interactive Simulator */}
                {current.visualType === "mobile-device" && (
                  <motion.div
                    key="mobile-simulator"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="mx-auto max-w-[280px] rounded-3xl border-4 border-[#174D38] bg-[#FFFDF8] p-4 shadow-lg text-center space-y-3">
                      {/* Mobile phone notch and status bar */}
                      <div className="flex justify-between items-center text-[9px] font-mono text-[#78816B] px-1">
                        <span>09:41</span>
                        <div className="w-12 h-1.5 rounded-full bg-[#174D38]/30" />
                        <span>5G 100%</span>
                      </div>

                      {/* Screen Header */}
                      <div className="pt-1">
                        <p className="font-mono text-[10px] text-[#F45B91] font-bold">CHALLENGE ENGINE</p>
                        <p className="font-serif text-sm font-bold text-[#174D38]">
                          Question 0{challengeStep} of 05
                        </p>
                      </div>

                      {/* Interactive Options */}
                      <div className="space-y-2 text-left font-mono text-[11px]">
                        {[
                          "Distributed Buffer Cache",
                          "Optimistic UI State Machine",
                          "Direct Network Stream",
                        ].map((opt, i) => {
                          const isPicked = selectedOption === i;
                          return (
                            <button
                              key={opt}
                              onClick={() => {
                                setSelectedOption(i);
                                setChallengeStep((s) => (s % 5) + 1);
                              }}
                              className={`w-full p-2.5 rounded-xl border text-left transition-all ${
                                isPicked
                                  ? "bg-[#174D38] text-[#F5EEDC] border-[#174D38] shadow-sm"
                                  : "bg-[#FAF6ED] border-[#174D38]/15 hover:border-[#174D38] text-[#20251F]"
                              }`}
                            >
                              <span className="font-bold mr-1.5">{String.fromCharCode(65 + i)}.</span>
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Biometric Auth Action */}
                      <button
                        onClick={() => setBiometricUnlocked(!biometricUnlocked)}
                        className={`w-full py-2 rounded-xl font-mono text-[10px] font-bold transition-all ${
                          biometricUnlocked
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                            : "bg-[#FAF6ED] border border-[#174D38]/20 text-[#174D38] hover:bg-[#FFFDF8]"
                        }`}
                      >
                        {biometricUnlocked ? "✓ Biometric Auth Verified" : "🔐 Test Biometric Sign-In"}
                      </button>

                      {/* Frame Rate Sparkline */}
                      <div className="pt-1 text-[9px] font-mono text-[#78816B] flex items-center justify-between">
                        <span>FPS Stability: 60 FPS</span>
                        <span className="text-emerald-700 font-bold">0 Dropped Frames</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* PRODUCT 4: Driver Logistics Offline-First Console */}
                {current.visualType === "offline-sync" && (
                  <motion.div
                    key="driver-console"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 font-mono text-xs"
                  >
                    {/* Network Connection Switch */}
                    <div className="p-3 rounded-xl bg-[#FFFDF8] border border-[#174D38]/15 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-[#174D38]">PORT NETWORK STATUS</p>
                        <p className="text-[10px] text-[#78816B]">Simulate terminal cellular signal</p>
                      </div>
                      <button
                        onClick={() => {
                          const nextState = !isOnline;
                          setIsOnline(nextState);
                          if (!nextState) {
                            setOfflineEvents((e) => e + 1);
                          }
                        }}
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
                          isOnline
                            ? "bg-emerald-700 text-white"
                            : "bg-[#F45B91] text-white animate-pulse"
                        }`}
                      >
                        {isOnline ? "● ONLINE" : "○ OFFLINE (SIMULATED)"}
                      </button>
                    </div>

                    {/* Local SQLite Buffer Status */}
                    <div className="p-3.5 rounded-xl bg-[#FFFDF8] border border-[#174D38]/15 space-y-2">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-[#78816B]">SQLITE OFFLINE QUEUE</span>
                        <span className={isOnline ? "text-emerald-700 font-bold" : "text-[#F45B91] font-bold"}>
                          {isOnline ? "0 PENDING (SYNCED)" : `${offlineEvents + 2} EVENTS QUEUED`}
                        </span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="p-2 rounded-lg bg-[#FAF6ED] flex justify-between items-center">
                          <span>Gate Check-In &bull; GPS Pinpoint</span>
                          <span className="text-emerald-700 font-bold">✓ Logged (Local)</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#FAF6ED] flex justify-between items-center">
                          <span>Container Seal Photo OCR</span>
                          <span className="text-emerald-700 font-bold">✓ Logged (Local)</span>
                        </div>
                      </div>
                    </div>

                    {/* Latency Graph */}
                    <div className="p-3 rounded-xl bg-[#FFFDF8] border border-[#174D38]/15 space-y-2">
                      <div className="flex justify-between text-[#78816B] text-[10px]">
                        <span>LOCAL PERSISTENCE LATENCY</span>
                        <span className="text-[#174D38] font-bold">&lt; 38ms</span>
                      </div>
                      <div className="h-10 flex items-center">
                        <svg className="w-full h-full" viewBox="0 0 200 40">
                          <path
                            d="M0 25 L 40 28 L 80 18 L 120 22 L 160 14 L 200 20"
                            fill="none"
                            stroke="#174D38"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
