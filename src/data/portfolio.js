export const profile = {
  name: "Rajat Choudhary",
  title: "Senior Full Stack Engineer",
  tagline:
    "End-to-end product ownership across React, Node.js, React Native, PostgreSQL, and AWS for production B2B SaaS systems.",
  summary:
    "Senior Full Stack Engineer with 4+ years of experience owning production B2B SaaS systems serving 4,000+ weekly active users. Expert in Node.js, TypeScript, React, React Native, PostgreSQL, and AWS, with proven delivery across architecture, backend systems, frontend applications, and deployment.",
  location: "Chandigarh, India",
  email: "rajrajatchoudhary4@gmail.com",
  phone: "+91 98764 11094",
  company: "Linear (Imparo Technologies Pvt Ltd)",
  resumeHref: "/resume/Rajat_Full_Stack_Engineer.pdf",
  availability:
    "Available for product builds, contract work, and engineering collaborations.",
  roles: [
    "Senior Full Stack Engineering",
    "Frontend Engineering",
    "Backend Engineering",
    "Mobile Development",
  ],
  highlights: [
    "Shipped 290+ PRDs across the product lifecycle, from schema design and REST APIs to React and React Native delivery.",
    "Built and owned a React Native mobile application from scratch as the sole developer, targeting Google Play Store release.",
    "Reduced operational workflows by 73% through a full enterprise admin platform with RBAC, bulk onboarding, and reporting.",
    "Engineered a service-worker caching architecture that reduced load time by 7% and cut data fetch failures by 13%.",
    "Automated 7,000+ monthly challenge review deliveries through AWS S3 and AWS SES workflows.",
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
    href: "https://www.linkedin.com/in/rajatchoudhary999/",
    value: "rajatchoudhary999",
  },
  {
    label: "X",
    href: "https://twitter.com/RAJATCH57204033",
    value: "@RAJATCH57204033",
  },
];

export const stats = [
  { value: "4+", label: "Years owning production software" },
  { value: "4,000+", label: "Weekly active users supported" },
  { value: "290+", label: "PRDs shipped across the product lifecycle" },
  { value: "7,000+", label: "Monthly automated deliveries" },
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
      "React Native",
      "Redux Toolkit",
      "MUI",
      "NativeWind",
      "PWA",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "Microservices",
      "Spring Boot",
    ],
  },
  {
    title: "Data & Cloud",
    items: [
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "Materialized Views",
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "AWS SES",
      "AWS Cognito",
      "Google Play Store",
    ],
  },
  {
    title: "Security & Systems",
    items: [
      "Microsoft SSO (Entra ID)",
      "Google SSO",
      "RBAC",
      "JWT",
      "System Design",
      "Service Workers",
      "Broadcast Channel API",
      "Data Modeling",
      "Bulk Processing",
    ],
  },
];

export const experience = [
  {
    title: "Software Development Engineer",
    company: "Linear (Imparo Technologies Pvt Ltd)",
    meta: "B2B SaaS | 4,000+ Weekly Active Users | Chennai, India",
    period: "March 2023 - Present",
    bullets: [
      "Architected and shipped a React Native mobile application from scratch as the sole developer, covering auth flows, challenge engine, leaderboard, program schedule, tracks system, and Lottie-powered interactions for Google Play Store release.",
      "Designed and built the entire enterprise admin panel from scratch with org, group, and user management, RBAC across three role levels, bulk CSV onboarding, role-enforced API middleware, and MUI Data Grid reporting, reducing operational workflows by 73%.",
      "Engineered an advanced caching architecture using Service Workers, Broadcast Channel API, and Post Message API, reducing load time by 7% and cutting data fetch failures by 13% while eliminating hard-refresh requirements.",
      "Built an automated challenge review pipeline that extracted challenge data, generated Word documents, uploaded them to AWS S3, and triggered delivery through AWS SES to group admins.",
      "Implemented a complete subscription and payments system from scratch, including free trial workflow, day-based expiry, enrollment restrictions, upgrade confirmation flow, and Razorpay payment link integration.",
      "Integrated Microsoft SSO (Entra ID) and Google SSO through AWS Cognito for multi-tenant authentication and published the web app as a PWA to Google Play Store using PWA Builder.",
      "Built an in-app notification system on AWS DynamoDB with custom data model, state transitions, read and dismiss APIs, relative timestamps, and analytics dashboards with charts, metrics, and user comparison reports.",
    ],
  },
  {
    title: "Junior Software Engineer Intern",
    company: "Infino",
    meta: "Fintech Startup | Payment Management Solutions | Bangalore, India (Remote)",
    period: "July 2022 - December 2022",
    bullets: [
      "Delivered a full-stack fintech MVP using React, Node.js, Express, and MongoDB with 43% test coverage across critical payment flows, shipped to the company’s first B2C client.",
      "Built a payment reconciliation dashboard with MUI Data Grid and multi-gateway support, reducing reconciliation time by 17%.",
      "Automated fee calculation through Razorpay and Cashfree SDK integrations across payment workflows.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Nagarro",
    meta: "Global Enterprise Software Consultancy | Gurugram, India",
    period: "January 2022 - April 2022",
    bullets: [
      "Built features for an internal enrollment platform using Java and Spring Boot.",
      "Implemented Spring Security controls and improved query performance, reducing response time by 5%.",
    ],
  },
];

export const featuredProjects = [
  {
    name: "nestjs-crud-microservices",
    label: "NestJS CRUD Microservices",
    stack: ["TypeScript", "NestJS", "Microservices"],
    summary:
      "Independently deployable CRUD microservices with inter-service message patterns and scalable service isolation.",
    repoUrl: "https://github.com/RajatChoudhary999/nestjs-crud-microservices",
  },
  {
    name: "chat_app",
    label: "Real-Time Chat Application",
    stack: ["Node.js", "WebSockets"],
    summary:
      "WebSocket-based real-time chat supporting concurrent connections, room messaging, and live event broadcasting.",
    repoUrl: "https://github.com/RajatChoudhary999/chat_app",
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
