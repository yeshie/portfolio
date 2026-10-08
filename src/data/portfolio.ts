// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the
//  portfolio — no component changes needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Yeshara Amunugama",
  shortName: "Yeshara",
  roles: [
    "Full-Stack Developer",
    "AI-Integrated Apps",
    "Mobile Developer",
    "QA-Minded Engineer",
  ],
  tagline:
    "First Class Computer Science graduate building full-stack web, mobile and AI-powered applications — from idea to tested, shipped product.",
  location: "Gampaha, Sri Lanka",
  email: "yeshara9044@gmail.com",
  available: true,
  year: 2026, // footer copyright year
  cvUrl: "/cv.pdf", // public/cv.pdf
  about: [
    "I'm a full-stack developer with a First Class BSc (Hons) in Computer Science from the University of Bedfordshire, backed by a Higher National Diploma in Software Engineering and a Diploma in Computer System Design (Distinction) from NIBM.",
    "I've delivered end-to-end projects across mobile, web and AI — from a RAG-powered culinary assistant with a fine-tuned LLM, to desktop games, donor platforms and a group AI chatbot project where I was project manager.",
    "I care about the parts users never see: clean architecture, solid testing and clear documentation. I'm looking for a junior developer, QA or graduate technology role where I can contribute to impactful products.",
  ],
  stats: [
    { value: "1st", label: "Class Honours, BSc CS" },
    { value: "12+", label: "Projects built" },
    { value: "3+", label: "Years building software" },
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/yeshie", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yesharaamunugama", icon: "linkedin" },
  { label: "Email", href: "mailto:yeshara9044@gmail.com", icon: "mail" },
] as const;

export const skills = {
  Languages: ["Java", "JavaScript", "TypeScript", "Python", "C#", "C++", "SQL", "Dart", "R"],
  "Frontend & Mobile": ["React", "Next.js", "React Native", "Expo", "Flutter", "Tailwind CSS", "Vite"],
  "Backend & Data": ["Node.js", "Express.js", "FastAPI", "Spring Boot", "REST APIs", "PostgreSQL", "MySQL", "SQLite", "Firebase", "Supabase"],
  "AI / ML": ["RAG", "FAISS", "TinyLlama / LLaMA", "LoRA fine-tuning", "Ollama", "OpenAI API"],
  "Testing & QA": ["Functional", "Integration", "UAT", "API testing", "Regression", "Postman"],
  "Tools & Process": ["Git / GitHub", "Figma", "ClickUp", "Agile Scrum", "PRINCE2 Agile", "UML"],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

// Timeline: education
export const experience: Experience[] = [
  {
    role: "BSc (Hons) Computer Science — First Class",
    company: "University of Bedfordshire (with SLIIT City University)",
    period: "2025 — 2026",
    points: [
      "Graduated with First Class Honours.",
      "Final-year thesis: FlavorMind, an AI-powered culinary assistant using RAG, FAISS and a LoRA fine-tuned TinyLlama model.",
    ],
  },
  {
    role: "Higher National Diploma in Software Engineering",
    company: "NIBM",
    period: "2024 — 2025",
    points: ["GPA 3.5 / 4.0 — Merit Pass."],
  },
  {
    role: "Diploma in Computer System Design",
    company: "NIBM",
    period: "2022 — 2023",
    points: ["GPA 3.85 / 4.0 — Distinction."],
  },
  {
    role: "Certificate Course in Computer Science",
    company: "NIBM",
    period: "2022 — 2023",
    points: ["Grade: A Pass."],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights?: string[]; // bullet points, shown on the card
  image?: string; // e.g. "/projects/flavormind.png" in public/projects
  live?: string;
  repos?: { label: string; href: string }[]; // GitHub links, e.g. app / backend
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "FlavorMind — AI Culinary Assistant",
    description:
      "Final-year thesis (First Class). A mobile app that recreates dishes from fragments of sensory memory — taste, smell, texture — and adapts global recipes to ingredients available in Sri Lanka. Built with Agile and CRISP-DM across a React Native app, a Node.js API and a Python FastAPI AI service.",
    highlights: [
      "Fine-tuned TinyLlama 1.1B with LoRA on a custom 1,031-entry recipe dataset (training loss 1.70 → 0.91)",
      "RAG pipeline with FAISS + MiniLM embeddings: 95% semantic match accuracy, under 1.2 ms search latency",
      "Global-to-local ingredient engine, smart serving-size scaling, cookbooks and community sharing",
      "89/89 functional tests passed; 21 beta testers rated it 5.0/5 for satisfaction and 95% would recommend it",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "FastAPI", "FAISS", "TinyLlama", "LoRA", "Firebase"],
    image: "/projects/flavormind.png",
    repos: [
      { label: "Mobile app", href: "https://github.com/yeshie/FlavorMind" },
      { label: "Backend", href: "https://github.com/yeshie/FlavorMind-Backend" },
      { label: "Admin panel", href: "https://github.com/yeshie/FlavorMindAdmin" },
    ],
    featured: true,
  },
  {
    title: "Custom AI Chatbot — Group Project",
    description:
      "Full-stack AI chatbot with an embeddable website widget, Express API, OpenAI integration and admin dashboard with Supabase auth and conversation history. University group project for a client brief (Sinofetch); I was the project manager, running four Agile Scrum sprints.",
    image: "/projects/chatbot.svg",
    tech: ["Node.js", "Express", "Next.js", "Supabase", "PostgreSQL", "OpenAI API"],
  },
  {
    title: "SpellBeat — JavaFX Word Game",
    description:
      "Desktop word game with 12 difficulty levels and a heart mini-game energy system. Salted SHA-256 auth with rate limiting and lockout, multiple external word APIs, and SQLite-backed game state in a clean MVC-style architecture.",
    image: "/projects/spellbeat.png",
    tech: ["Java 21", "JavaFX", "SQLite", "JDBC", "REST APIs"],
    repos: [{ label: "Code", href: "https://github.com/yeshie/SpellBeat" }],
  },
  {
    title: "Hope — Donation & Volunteer Platform",
    description:
      "HND final group project (NIBM). A public website and admin web app connecting donors with patients, children and elders: aid requests with admin approval, donation tracking with OTP confirmation, volunteer events, and income and user analytics. JWT auth with role-based access, Sequelize ORM and Cloudinary media storage.",
    image: "/projects/hope.png",
    tech: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Sequelize", "JWT", "Cloudinary"],
  },
  {
    title: "Flavor Fiesta — Food Ordering App",
    description:
      "Mobile food ordering app with user and admin roles, real-time order updates, Google Maps location tracking, image uploads and promotions.",
    image: "/projects/flavor-fiesta.png",
    tech: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Construction Employee Management System",
    description:
      "HR system covering employee registration, attendance, leave, KPI measurement, trainee supervision, safety protocols, promotion workflows and strategic reporting.",
    image: "/projects/construction-ems.png",
    tech: ["Web Application", "HR"],
  },
  {
    title: "ABI Fitness — Gym Management System",
    description:
      "Web system for gym operations: member registration, subscription handling, trainer allocation, class scheduling and member progress targets. Layered Spring Boot REST API (controllers, services, repositories) secured with Spring Security, with a React front end.",
    image: "/projects/abi-fitness.png",
    tech: ["Java", "Spring Boot", "Spring Security", "JPA / Hibernate", "MySQL", "React"],
    repos: [{ label: "Backend", href: "https://github.com/yeshie/Gym-Management" }],
  },
];
