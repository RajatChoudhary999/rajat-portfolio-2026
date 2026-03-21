export const profile = {
  name: "Rajat Choudhary",
  title: "Full Stack Software Engineer",
  tagline:
    "Production-grade web, backend, and mobile systems for teams that care about shipping fast without losing engineering rigor.",
  summary:
    "Full stack engineer with 3+ years of experience architecting and delivering production web and mobile applications. Strong in Node.js, TypeScript, React, React Native, PostgreSQL, AWS, and end-to-end ownership from schema design to polished delivery.",
  location: "Chandigarh, India",
  email: "rajrajatchoudhary4@gmail.com",
  phone: "+91 98764 11094",
  company: "Linear (Imparo Technologies Pvt Ltd)",
  resumeHref: "/resume/Rajat_Resume.pdf",
  availability:
    "Available for product builds, contract work, and engineering collaborations.",
  roles: [
    "Full Stack Development",
    "Frontend Engineering",
    "Backend Engineering",
    "Mobile Development",
  ],
  highlights: [
    "Built and shipped a React Native learning app from scratch for an enterprise platform serving 4,000+ weekly active users.",
    "Reduced manual operational workflows by 73% by owning backend APIs, PostgreSQL schema design, and admin tooling end to end.",
    "Improved platform reliability with a service worker caching strategy that cut load time by 7% and reduced fetch failures by 13%.",
    "Scaled automated certificate generation and AWS S3 delivery to support 7,000+ monthly downloads.",
    "Delivered fintech payment systems with automated fee calculation and reconciliation flows across Razorpay and Cashfree integrations.",
  ],
};

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/RajatChoudhary999",
    value: "@RajatChoudhary999",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajat-choudhary-299570175/",
    value: "rajat-choudhary-299570175",
  },
  {
    label: "X",
    href: "https://twitter.com/RAJATCH57204033",
    value: "@RAJATCH57204033",
  },
];

export const stats = [
  { value: "3+", label: "Years building production software" },
  { value: "4,000+", label: "Weekly active users supported" },
  { value: "7,000+", label: "Monthly document downloads automated" },
  { value: "34+", label: "Public GitHub repositories" },
];

export const certifications = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
  },
  {
    title: "Triplebyte Certified Engineer",
    issuer: "Triplebyte",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "React Native (Expo)",
      "Tailwind CSS",
      "MUI",
      "HTML5",
      "CSS3",
      "Service Workers",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Spring Boot",
      "Spring Security",
      "WebSockets",
    ],
  },
  {
    title: "Data & Cloud",
    items: [
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "AWS EC2",
      "AWS S3",
      "AWS Cognito",
      "RDS",
      "CI/CD",
    ],
  },
  {
    title: "Engineering Focus",
    items: [
      "System Design",
      "Authentication",
      "Caching",
      "Bulk Processing",
      "Automated Testing",
      "Payment Flows",
    ],
  },
];

export const experience = [
  {
    title: "Software Development Engineer",
    company: "Linear (Imparo Technologies Pvt Ltd)",
    meta: "B2B SaaS | Chennai, India",
    period: "March 2023 - Present",
    bullets: [
      "Architected and shipped a React Native (Expo) mobile application from scratch, defining the end-to-end data flow, API integrations, and secure authentication experience.",
      "Designed RESTful backend APIs with Node.js, TypeScript, Express.js, and PostgreSQL, powering an enterprise admin dashboard that reduced manual workflows by 73%.",
      "Implemented a network-first service worker caching strategy that cut load time by 7% and reduced data-fetch failures by 13%.",
      "Built an automated certificate generation system integrated with AWS S3 and bulk CSV onboarding flows for 7,000+ monthly downloads.",
      "Designed and delivered a full-stack in-app notification system using AWS DynamoDB, including data modeling and read-dismiss workflows.",
    ],
  },
  {
    title: "Junior Software Engineer Intern",
    company: "Infino",
    meta: "Fintech Startup | Bangalore, India (Remote)",
    period: "July 2022 - December 2022",
    bullets: [
      "Delivered a full-stack fintech MVP using React, Node.js, Express, and MongoDB, with 43% test coverage across payment-critical flows.",
      "Built a payment reconciliation dashboard with multi-gateway support that reduced reconciliation time by 17% for finance teams.",
      "Implemented automated fee calculation across UPI, cards, and net banking using Razorpay and Cashfree SDKs.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Nagarro",
    meta: "Global Enterprise Consultancy | Gurugram, India",
    period: "January 2022 - April 2022",
    bullets: [
      "Built features for an internal staff enrollment platform using Java and Spring Boot.",
      "Implemented Spring Security controls and optimized database queries for a 5% reduction in response time.",
    ],
  },
];

export const featuredProjects = [
  {
    name: "nestjs-crud-microservices",
    label: "NestJS CRUD Microservices",
    stack: ["TypeScript", "NestJS", "Microservices"],
    summary:
      "Production-style microservices system with independently deployable CRUD services, inter-service communication patterns, and scalable backend design.",
    repoUrl: "https://github.com/RajatChoudhary999/nestjs-crud-microservices",
  },
  {
    name: "chat_app",
    label: "Real-Time Chat Application",
    stack: ["Node.js", "JavaScript", "WebSockets"],
    summary:
      "Persistent real-time messaging with room-based communication, concurrent connections, and live event broadcasting.",
    repoUrl: "https://github.com/RajatChoudhary999/chat_app",
  },
  {
    name: "ecommerce-discount-api",
    label: "E-Commerce Discount API",
    stack: ["Node.js", "JavaScript", "REST API"],
    summary:
      "Flexible discount engine for cart-level calculations with clean API contracts ready for frontend integration.",
    repoUrl: "https://github.com/RajatChoudhary999/ecommerce-discount-api",
  },
  {
    name: "redux-toolkit-habit-tracker",
    label: "Redux Toolkit Habit Tracker",
    stack: ["TypeScript", "React", "Redux Toolkit"],
    summary:
      "Full-featured habit tracking app with streak logic, normalized state, and predictable global store architecture.",
    repoUrl: "https://github.com/RajatChoudhary999/redux-toolkit-habit-tracker",
  },
];

export const education = {
  school: "Chitkara University",
  degree: "Bachelor of Engineering, Computer Science and Engineering",
  period: "2018 - 2022",
  location: "Punjab, India",
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];
