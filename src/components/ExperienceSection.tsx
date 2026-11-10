"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckIcon } from "@/components/Icons";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "NLD India Software Pvt. Ltd.",
      role: "Senior Software Engineer",
      period: "May 2026 – Present",
      tenure: "Current Role",
      location: "Chandigarh, India",
      statusType: "active",
      statusLabel: "CURRENT DISPATCH • ACTIVE",
      summary:
        "Leading full-stack engineering of high-throughput maritime logistics SaaS products and event processing infrastructure.",
      checkpoints: [
        {
          title: "Webhook Ingestion Engine",
          desc: "Architected webhook ingestion pipelines connecting maritime logistics APIs with asymmetric cryptographic signature verification.",
        },
        {
          title: "Automated OCR Document Pipeline",
          desc: "Built automated document processing pipeline with OCR extraction and multi-page document compression, accelerating processing turnaround.",
        },
        {
          title: "Relational Query & Storage Optimization",
          desc: "Optimized relational database queries and composite indexing across high-volume container event history tables.",
        },
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Cryptographic Auth", "OCR", "Docker"],
    },
    {
      company: "Linear (Imparo Technologies Pvt. Ltd.)",
      role: "Senior Software Engineer",
      period: "March 2023 – April 2026",
      tenure: "3 Yrs 2 Mos",
      location: "Chennai, India",
      statusType: "completed",
      statusLabel: "DELIVERED • 3 YRS 2 MOS",
      summary:
        "Spearheaded core frontend, backend, and mobile engineering for enterprise training SaaS platform serving 4,000+ weekly active users.",
      checkpoints: [
        {
          title: "Shipped Standalone React Native App",
          desc: "Architected and shipped complete standalone React Native mobile application from scratch as sole developer, targeting Google Play Store release.",
        },
        {
          title: "Enterprise Administration & 3-Tier RBAC",
          desc: "Designed and built enterprise administration platform with 3-tier RBAC, bulk CSV onboarding, and MUI Data Grid reporting, reducing operational overhead by 73%.",
        },
        {
          title: "Client-Side Caching & Broadcast Channel",
          desc: "Engineered client-side caching with Service Workers and Broadcast Channel API, cutting fetch failures by 13% and initial load time by 7%.",
        },
      ],
      technologies: ["React", "TypeScript", "React Native", "Node.js", "PostgreSQL", "DynamoDB", "AWS (EC2, S3, SES, Cognito)", "Service Workers"],
    },
    {
      company: "Infino",
      role: "Software Engineer Intern",
      period: "July 2022 – December 2022",
      tenure: "6 Mos",
      location: "Bangalore, India (Remote)",
      statusType: "completed",
      statusLabel: "DELIVERED • 6 MOS",
      summary:
        "Contributed to full-stack fintech MVP development and multi-gateway payment integrations.",
      checkpoints: [
        {
          title: "Fintech MVP Core Architecture",
          desc: "Delivered full-stack fintech MVP using React, Node.js, Express, and MongoDB with 43% test coverage across critical payment paths.",
        },
        {
          title: "Payment Reconciliation Console",
          desc: "Constructed payment reconciliation dashboard with MUI Data Grid and multi-gateway support, reducing manual reconciliation time by 17%.",
        },
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "MUI Data Grid", "Payment Gateways"],
    },
    {
      company: "Nagarro",
      role: "Software Engineer Intern",
      period: "January 2022 – April 2022",
      tenure: "4 Mos",
      location: "Gurugram, India",
      statusType: "completed",
      statusLabel: "CAREER ORIGIN • 4 MOS",
      summary:
        "Contributed to Java Spring Boot enterprise enrollment platform, focusing on security authorization and query execution.",
      checkpoints: [
        {
          title: "Enterprise Enrollment Features",
          desc: "Built enterprise enrollment features using Java and Spring Boot.",
        },
        {
          title: "Spring Security Authorization",
          desc: "Implemented Spring Security controls and optimized query execution, improving response time by 5%.",
        },
      ],
      technologies: ["Java", "Spring Boot", "Spring Security", "SQL", "REST APIs"],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FAF6ED] border-b border-[#174D38]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-10 border-b border-[#174D38]/15 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#174D38]/25 bg-[#F5EEDC] px-3.5 py-1 text-xs font-mono font-medium text-[#174D38] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F45B91] animate-pulse" />
            <span>Career History • Timeline</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#174D38] tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#454D41] font-sans">
            Over four years of end-to-end software engineering across high-throughput logistics SaaS, enterprise B2B platforms,
            and production mobile applications.
          </p>
        </div>

        {/* Order Tracking / Workday Experience Timeline */}
        <div className="relative mt-14 sm:mt-18">
          {/* Continuous vertical tracking line centered at left-4 (mobile) and left-8 (sm) */}
          <div className="absolute left-4 sm:left-8 top-8 bottom-12 w-0.5 -translate-x-1/2 bg-[#174D38]/25" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, idx) => {
              const isActive = exp.statusType === "active";

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Milestone Node - Exactly centered on vertical track line */}
                  <div className="absolute left-4 sm:left-8 top-[36px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                    {isActive ? (
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-8 h-8 rounded-full bg-[#F45B91]/30 animate-ping" />
                        <div className="w-6 h-6 rounded-full bg-[#174D38] border-2 border-[#FAF6ED] flex items-center justify-center shadow-md">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#F45B91]" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-[#174D38] border-2 border-[#FAF6ED] flex items-center justify-center shadow-sm">
                        <CheckIcon className="w-3.5 h-3.5 text-[#F5EEDC]" />
                      </div>
                    )}
                  </div>

                  {/* Horizontal Connector Bridge from node to card */}
                  <div className="absolute left-4 sm:left-8 top-[36px] w-8 sm:w-12 h-0.5 bg-[#174D38]/20 -translate-y-1/2" />

                  {/* Main Workday / Order Tracking Content Card */}
                  <div className="rounded-2xl border-2 border-[#174D38] bg-[#FFFDF8] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                    {/* Top Order-Tracker Status Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#174D38]/12">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-bold ${
                            isActive
                              ? "bg-[#174D38] text-[#F5EEDC]"
                              : "bg-[#174D38]/10 text-[#174D38]"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isActive ? "bg-[#F45B91] animate-pulse" : "bg-[#174D38]"
                            }`}
                          />
                          {exp.statusLabel}
                        </span>
                        <span className="text-xs font-mono text-[#78816B]">
                          {exp.location}
                        </span>
                      </div>

                      <div className="font-mono text-xs font-bold text-[#174D38]">
                        {exp.period}
                      </div>
                    </div>

                    {/* Role & Company Header */}
                    <div className="mt-4">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#174D38]">
                        {exp.role}
                      </h3>
                      <p className="font-sans text-base sm:text-lg font-semibold text-[#20251F] mt-0.5">
                        {exp.company}
                      </p>
                      <p className="mt-2 text-sm sm:text-base text-[#454D41] leading-relaxed font-sans">
                        {exp.summary}
                      </p>
                    </div>

                    {/* Delivery Milestones / Checkpoints */}
                    <div className="mt-5 pt-4 border-t border-[#174D38]/10 space-y-3">
                      <p className="font-mono text-[11px] font-bold text-[#78816B] uppercase tracking-wider">
                        Key Milestones &amp; Impact
                      </p>
                      <div className="space-y-2.5">
                        {exp.checkpoints.map((cp, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF6ED]/70 border border-[#174D38]/10"
                          >
                            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#174D38]/15 text-[#174D38] flex items-center justify-center text-[10px] font-bold">
                              ✓
                            </span>
                            <div className="text-xs sm:text-sm text-[#20251F]">
                              <span className="font-bold text-[#174D38]">
                                {cp.title}:{" "}
                              </span>
                              <span className="text-[#454D41] leading-relaxed">
                                {cp.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Pills */}
                    <div className="mt-5 pt-4 border-t border-[#174D38]/10 flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg border border-[#174D38]/20 bg-[#FAF6ED] font-mono text-[11px] font-medium text-[#174D38]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
