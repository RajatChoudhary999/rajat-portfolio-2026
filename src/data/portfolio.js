export const profile = {
  name: "Rajat Choudhary",
  title: "Senior Full Stack Software Engineer",
  experienceYears: "4+",
  location: "Chandigarh, India",
  email: "rajrajatchoudhary4@gmail.com",
  phone: "+91 98764 11094",
  resumeHref: "/resume/Rajat_Full_Stack_Engineer.pdf",
  headline: "Engineering resilient logistics SaaS, enterprise platforms, and cross-platform mobile systems.",
  summary:
    "Senior Full Stack Engineer with 4+ years of end-to-end production ownership across TypeScript, React, Node.js, React Native, PostgreSQL, and AWS. Experienced in building high-throughput event ingestion pipelines, multi-tenant B2B platforms, automated document processing, and production mobile applications.",
  availability: "Open to senior full-stack, distributed systems, and technical leadership engagements.",
  currentRole: {
    company: "NLD India Software Pvt. Ltd.",
    title: "Senior Software Engineer",
    since: "May 2026",
  },
};

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/RajatChoudhary999",
    value: "github.com/RajatChoudhary999",
    handle: "@RajatChoudhary999",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajatchoudhary999/",
    value: "linkedin.com/in/rajatchoudhary999",
    handle: "in/rajatchoudhary999",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/RAJATCH57204033",
    value: "twitter.com/RAJATCH57204033",
    handle: "@RAJATCH57204033",
  },
];

export const heroMetrics = [
  {
    value: "4+",
    unit: "Years",
    label: "Production Engineering",
    detail: "Full-stack systems across web, mobile, and APIs",
  },
  {
    value: "4,000+",
    unit: "WAU",
    label: "Active Enterprise Users",
    detail: "B2B SaaS platform in continuous production use",
  },
  {
    value: "73%",
    unit: "Drop",
    label: "Operational Overhead",
    detail: "Automated onboarding, RBAC, and admin tooling",
  },
  {
    value: "7,000+",
    unit: "Jobs/mo",
    label: "Automated Deliveries",
    detail: "Report generation pipelines via AWS S3 and SES",
  },
];

export const liveTelemetry = {
  status: "Operational",
  uptime: "99.98%",
  lastVerified: "Real-time sync",
  integrations: [
    {
      name: "Logistics Event Gateway",
      protocol: "REST / Webhooks",
      security: "Cryptographic JWT Validation",
      status: "Active",
      latency: "112ms",
    },
    {
      name: "Client Caching Bus",
      protocol: "Broadcast Channel API",
      status: "Bi-directional",
      metric: "-13% fetch drops",
    },
    {
      name: "Document Processing Pipeline",
      protocol: "OCR + Compression",
      status: "Automated",
      target: "Cloud Storage",
    },
  ],
};

export const systems = [
  {
    id: "clearport",
    title: "Maritime Logistics Platform",
    badge: "Logistics SaaS & Event Ingestion",
    company: "NLD India Software Pvt. Ltd.",
    role: "Senior Software Engineer",
    period: "May 2026 – Present",
    tagline:
      "High-throughput container logistics platform integrating external maritime APIs for real-time terminal milestones, customs clearance status, and document automation.",
    challenge:
      "Supply chain operators face fragmented communication between port authorities, customs agencies, and container terminals. Manual status verification causes expensive demurrage penalties and transit delays.",
    solution:
      "Architected end-to-end logistics platform connecting to external maritime APIs and webhook streams, featuring cryptographic signature verification and automated document extraction pipelines.",
    architecture: [
      { layer: "Frontend", tech: "React, TypeScript, Tailwind CSS, Interactive tracking console" },
      { layer: "Backend", tech: "Node.js, Express, REST APIs, Webhook listener services" },
      { layer: "Database", tech: "PostgreSQL, Time-partitioned event tables, Optimized indexes" },
      { layer: "Security", tech: "Cryptographic asymmetric signature validation, Role-scoped access" },
      { layer: "Processing", tech: "Document OCR engine, Multi-page document compression queue" },
    ],
    highlights: [
      "Integrated external logistics APIs to ingest container discharge, customs clearance, and terminal release events in real time.",
      "Engineered cryptographic asymmetric signature verification on inbound webhooks to prevent payload tampering across multi-terminal integrations.",
      "Built automated document parsing and OCR pipeline to extract bill of lading data, compressing high-res documents before cloud storage.",
      "Optimized relational PostgreSQL queries across high-volume container event history tables, eliminating query bottlenecks.",
    ],
    stats: [
      { label: "Webhook Ingestion", value: "<120ms" },
      { label: "Auth Standard", value: "RS256 / JWT" },
      { label: "Data Integrity", value: "Verified" },
    ],
  },
  {
    id: "linear-web",
    title: "Linear Enterprise Platform",
    badge: "Enterprise B2B SaaS",
    company: "Linear (Imparo Technologies Pvt. Ltd.)",
    role: "Senior Software Engineer",
    period: "March 2023 – April 2026",
    tagline:
      "Enterprise training and challenge platform serving 4,000+ weekly active users with multi-tenant RBAC, service worker caching, and automated reporting.",
    challenge:
      "Scaling from early prototype to 4,000+ weekly active users caused operational bottlenecks in manual client onboarding, stale client caching, and manual cohort reporting.",
    solution:
      "Engineered an enterprise administration platform with 3-tier RBAC, built a bi-directional Service Worker caching architecture, and automated the challenge reporting lifecycle on AWS.",
    architecture: [
      { layer: "Frontend", tech: "React, TypeScript, Redux Toolkit, MUI Data Grid, PWA" },
      { layer: "Caching", tech: "Service Workers, Broadcast Channel API, PostMessage" },
      { layer: "Backend", tech: "Node.js, REST APIs, DynamoDB notifications, PostgreSQL" },
      { layer: "Cloud & Auth", tech: "AWS (EC2, S3, SES, Cognito), Google SSO, Entra ID" },
      { layer: "Billing", tech: "Razorpay payment links, Day-based license lifecycle" },
    ],
    highlights: [
      "Engineered enterprise admin panel with 3-tier RBAC (org admin, group admin, user) and bulk CSV onboarding, reducing manual operational tasks by 73%.",
      "Architected client caching with Service Workers and Broadcast Channel API, achieving a 7% reduction in load time and a 13% drop in data fetch failures.",
      "Automated end-to-end challenge review pipeline: aggregated cohort data, generated Word documents, uploaded to S3, and dispatched 7,000+ monthly emails via SES.",
      "Engineered subscription and billing lifecycle with Razorpay payment links, free trial grace periods, and license tier enforcement.",
    ],
    stats: [
      { label: "Active Cohort", value: "4,000+ WAU" },
      { label: "Ops Overhead", value: "-73%" },
      { label: "Fetch Failures", value: "-13%" },
      { label: "Monthly Reports", value: "7,000+" },
    ],
  },
  {
    id: "linear-mobile",
    title: "Linear Mobile Application",
    badge: "Cross-Platform Mobile Application",
    company: "Linear (Imparo Technologies Pvt. Ltd.)",
    role: "Sole Mobile Engineer",
    period: "March 2023 – April 2026",
    tagline:
      "Production React Native mobile application built from scratch as sole developer, targeting Google Play Store with interactive challenge engines and smooth animations.",
    challenge:
      "Enterprise clients required a dedicated mobile learning experience for on-the-go participants with diverse question types and responsive performance across varied Android devices.",
    solution:
      "Architected and delivered the standalone React Native app from an empty repository to Google Play release, managing authentication, challenge engines, leaderboards, and schedule tracks.",
    architecture: [
      { layer: "Core", tech: "React Native CLI, TypeScript, React Navigation" },
      { layer: "State", tech: "Redux Toolkit, Offline-tolerant local cache" },
      { layer: "UI & Motion", tech: "NativeWind, Lottie animations, 60fps gesture handling" },
      { layer: "Platform", tech: "Google Play Store deployment, App bundle packaging" },
    ],
    highlights: [
      "Sole developer with complete technical ownership: auth flows, program schedule, tracks system, leaderboards, and user profiles.",
      "Engineered interactive challenge engine handling 5 distinct assessment question types with instant client-side evaluation.",
      "Integrated lightweight animations for milestone celebrations maintaining consistent 60fps performance.",
      "Packaged and published production builds directly targeting Google Play Store release.",
    ],
    stats: [
      { label: "Ownership", value: "100% Sole Dev" },
      { label: "Challenge Engine", value: "5 Question Types" },
      { label: "Release", value: "Google Play" },
    ],
  },
  {
    id: "driver-app",
    title: "Driver Logistics Platform",
    badge: "Logistics Fleet & Dispatch",
    company: "NLD India Software Pvt. Ltd.",
    role: "Senior Software Engineer",
    period: "May 2026 – Present",
    tagline:
      "Mobile dispatch and consignment handover application ensuring container pickup, customs milestones, and terminal gate-in are reliably logged in port areas.",
    challenge:
      "Port terminals often experience erratic cellular connectivity, leading to dropped driver milestone updates, gate-pass verification delays, and container demurrage.",
    solution:
      "Developed an offline-first milestone tracking workflow with queued journal updates and rapid document capture for gate-in/gate-out verification.",
    architecture: [
      { layer: "Mobile", tech: "React Native, TypeScript, Offline storage journal" },
      { layer: "Backend", tech: "Node.js REST services, Webhook sync, Background queues" },
      { layer: "Data", tech: "PostgreSQL, Geospatial milestone checkpoints" },
    ],
    highlights: [
      "Constructed chronological container checkpoint tracker covering pickup, customs, transit, and terminal gate-in.",
      "Implemented resilient offline event journal that synchronizes instantly when entering network coverage.",
      "Added document capture and image compression for gate passes and inspection receipts.",
    ],
    stats: [
      { label: "Sync Engine", value: "Offline-first" },
      { label: "Domain", value: "Container Drayage" },
      { label: "Milestones", value: "End-to-end" },
    ],
  },
];

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "NLD India Software Pvt. Ltd.",
    location: "Chandigarh, India",
    period: "May 2026 – Present",
    type: "Full-Time",
    domain: "Logistics SaaS & Port Automation",
    overview:
      "Leading full-stack development of logistics SaaS products. Responsible for external maritime API integrations, webhook ingestion infrastructure, document processing pipelines, and database optimization.",
    bullets: [
      "Architected integrations with external maritime logistics APIs, consuming container tracking and customs status events via REST APIs and webhooks.",
      "Implemented asymmetric cryptographic signature verification on incoming webhook payloads to enforce tamper-proof communication.",
      "Designed automated document processing pipeline with OCR extraction and multi-page document compression, accelerating turnaround times.",
      "Optimized relational database queries and indexing across high-volume container event history tables.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs & Webhooks",
      "RS256 JWT",
      "OCR",
      "Docker",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Linear (Imparo Technologies Pvt. Ltd.)",
    location: "Chennai, India",
    period: "March 2023 – April 2026",
    type: "Full-Time",
    domain: "B2B SaaS | 4,000+ Weekly Active Users",
    overview:
      "Spearheaded core frontend, backend, and mobile engineering for enterprise SaaS platform. Shipped 290+ PRDs spanning schema design, APIs, service-worker caching, and a ground-up React Native app.",
    bullets: [
      "Architected and shipped complete React Native mobile application from scratch as sole developer, targeting Google Play Store release.",
      "Designed and built entire enterprise admin platform with 3-tier RBAC, bulk CSV onboarding, and MUI Data Grid reporting, slashing operational overhead by 73%.",
      "Engineered advanced caching architecture utilizing Service Workers and Broadcast Channel API, achieving 7% load reduction and 13% drop in data fetch failures.",
      "Built automated challenge review pipeline extracting data, generating Word documents, uploading to AWS S3, and dispatching 7,000+ monthly emails via AWS SES.",
    ],
    tech: [
      "React",
      "TypeScript",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "DynamoDB",
      "AWS (EC2, S3, SES, Cognito)",
      "Service Workers",
      "Razorpay",
      "Redux Toolkit",
    ],
  },
  {
    title: "Junior Software Engineer Intern",
    company: "Infino",
    location: "Bangalore, India (Remote)",
    period: "July 2022 – December 2022",
    type: "Internship",
    domain: "Fintech Startup | Payment Management Solutions",
    overview:
      "Contributed to full-stack fintech MVP development and payment gateway integrations for initial client release.",
    bullets: [
      "Delivered full-stack fintech MVP using React, Node.js, Express, and MongoDB with 43% test coverage across critical payment paths.",
      "Constructed payment reconciliation dashboard with MUI Data Grid and multi-gateway support, reducing reconciliation time by 17%.",
      "Automated transaction fee calculations via Razorpay and Cashfree SDK integrations.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "MUI Data Grid", "Razorpay SDK", "Cashfree SDK"],
  },
  {
    title: "Software Engineer Intern",
    company: "Nagarro",
    location: "Gurugram, India",
    period: "January 2022 – April 2022",
    type: "Internship",
    domain: "Global Enterprise Software Consultancy",
    overview:
      "Contributed to Java Spring Boot enterprise enrollment platform, focusing on security authorization and query optimization.",
    bullets: [
      "Built enterprise enrollment features using Java and Spring Boot.",
      "Implemented Spring Security controls and optimized query execution, improving response time by 5%.",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "SQL", "REST APIs"],
  },
];

export const technicalCapabilities = [
  {
    category: "Backend & Systems",
    items: [
      { name: "Node.js & TypeScript", context: "High-throughput APIs, modular services, asynchronous event loops" },
      { name: "REST APIs & Webhooks", context: "External logistics integrations, cryptographic payload validation" },
      { name: "Express.js & NestJS", context: "Modular service architecture, role-enforced middleware" },
      { name: "PostgreSQL & Modeling", context: "Relational schema design, time-partitioned tables, query tuning" },
      { name: "Java & Spring Boot", context: "Enterprise enrollment systems, Spring Security controls" },
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      { name: "React.js & TypeScript", context: "Enterprise administration platforms, complex state, component architecture" },
      { name: "React Native CLI", context: "Sole developer ownership, Google Play releases, native modules" },
      { name: "Service Worker Caching", context: "Broadcast Channel API, PostMessage, offline tolerance" },
      { name: "Redux Toolkit & State", context: "Predictable unidirectional flows, optimistic UI updates" },
      { name: "Tailwind CSS", context: "Design token implementation, responsive layouts, zero runtime overhead" },
    ],
  },
  {
    category: "Cloud, Infra & DevOps",
    items: [
      { name: "AWS Cloud Infrastructure", context: "EC2, S3, RDS PostgreSQL, DynamoDB, SES, Cognito" },
      { name: "Document Automation", context: "OCR processing, multi-page document compression, S3 archival" },
      { name: "Docker & Containerization", context: "Reproducible development and deployment environments" },
      { name: "CI/CD & GitHub Actions", context: "Automated linting, test suites, and deployment triggers" },
      { name: "Google Play Store", context: "Mobile app packaging, bundle signing, store releases" },
    ],
  },
  {
    category: "Security & Payments",
    items: [
      { name: "Enterprise Single Sign-On", context: "Microsoft Entra ID, Google SSO via AWS Cognito" },
      { name: "Role-Based Access Control", context: "3-tier hierarchical RBAC, middleware enforcement" },
      { name: "Webhook Security", context: "Cryptographic asymmetric signature validation" },
      { name: "Payment Architectures", context: "Razorpay payment link APIs, day-based trial lifecycles" },
    ],
  },
];

export const education = {
  institution: "Chitkara University",
  degree: "Bachelor of Engineering, Computer Science and Engineering",
  period: "2018 – 2022",
  location: "Punjab, India",
};

export const certifications = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    code: "AWS-CDA",
    verified: true,
  },
  {
    title: "Triplebyte Certified Engineer",
    issuer: "Triplebyte",
    code: "Generalist Software Engineer",
    verified: true,
  },
];

export const navigation = [
  { label: "Systems", href: "#systems" },
  { label: "Simulator", href: "#simulator" },
  { label: "Architecture", href: "#architecture" },
  { label: "Resume", href: "#resume" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
