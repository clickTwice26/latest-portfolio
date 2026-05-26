interface SiteConfig {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  aboutMe: string;
  skills: string[];
  projects: {
    name: string;
    slug: string;
    description: string;
    longDescription?: string;
    link?: string;
    images?: string[];
    skills: string[];
    role?: string;
    year?: string;
    status?: string;
    features?: string[];
  }[];
  experience: {
    company: string;
    title: string;
    dateRange: string;
    bullets: string[];
  }[];
  education: {
    school: string;
    degree: string;
    dateRange: string;
    achievements: string[];
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Shagato Chowdhury",
  title: "Backend Developer",
  description: "Portfolio website of Shagato Chowdhury",
  accentColor: "#1d4ed8",
  social: {
    email: "shagato@example.com",
    linkedin: "https://linkedin.com/in/shagato",
    twitter: "https://x.com/shagato",
    github: "https://github.com/clickTwice26",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      slug: "ai-dev-roundup",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      longDescription:
        "Built and operated a weekly newsletter for developers who want to stay at the cutting edge of AI without drowning in noise. Each issue is hand-curated — covering the latest research breakthroughs, practical open-source tools, and production patterns you can apply immediately. Grew from zero to thousands of subscribers through organic search and developer community sharing.",
      link: "https://aidevroundup.com/?ref=devportfolio",
      images: [
        "https://picsum.photos/seed/aidev1/800/450",
        "https://picsum.photos/seed/aidev2/800/450",
        "https://picsum.photos/seed/aidev3/800/450",
      ],
      skills: ["React", "Node.js", "AWS", "SES", "PostgreSQL"],
      role: "Founder & Full Stack Developer",
      year: "2024",
      status: "Live",
      features: [
        "Automated content pipeline ingesting 50+ RSS feeds via AWS Lambda",
        "Custom email renderer built with React + MJML for pixel-perfect inbox display",
        "Subscriber analytics dashboard tracking open rates, clicks, and growth trends",
        "One-click unsubscribe with GDPR-compliant preference management",
        "SEO-optimised archive pages for every past issue, driving organic discovery",
      ],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      slug: "chrome-extension-mastery",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      longDescription:
        "A comprehensive course distilling years of Chrome extension development into a practical, project-based curriculum. Students learn to architect extensions that communicate with a Node.js backend, manage OAuth flows, handle complex content-script interactions, and ship to the Chrome Web Store — all following production-grade patterns used in real products.",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      images: [
        "https://picsum.photos/seed/chromeext1/800/450",
        "https://picsum.photos/seed/chromeext2/800/450",
        "https://picsum.photos/seed/chromeext3/800/450",
      ],
      skills: ["React", "Node.js", "AWS", "TypeScript", "Webpack"],
      role: "Course Author & Developer",
      year: "2023",
      status: "Live",
      features: [
        "12 hours of project-based video content covering Manifest V3 end-to-end",
        "Full-stack architecture with a Node.js REST API and JWT authentication",
        "OAuth 2.0 integration for Google and GitHub inside Chrome popup",
        "Background service worker patterns for persistent state and alarms",
        "CI/CD pipeline that auto-packages and uploads to Chrome Web Store via the Publish API",
      ],
    },
    {
      name: "ExtensionKit",
      slug: "extensionkit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      longDescription:
        "An open-source monorepo of Chrome extension starter templates, each targeting a specific use-case: content scripts, popup-only tools, full-stack extensions with a backend, and side-panel experiences. Every template is pre-configured with TypeScript, ESLint, Prettier, and a one-command build script so developers can skip the boilerplate and start shipping features on day one.",
      link: "https://extensionkit.io/?ref=devportfolio",
      images: [
        "https://picsum.photos/seed/extkit1/800/450",
        "https://picsum.photos/seed/extkit2/800/450",
        "https://picsum.photos/seed/extkit3/800/450",
      ],
      skills: ["TypeScript", "React", "Node.js", "Vite", "pnpm"],
      role: "Open Source Maintainer",
      year: "2023",
      status: "Live",
      features: [
        "6 production-ready starter templates covering every major extension architecture",
        "Vite-powered build system with hot-reload for rapid development",
        "Shared ESLint + Prettier config enforced across all templates via pnpm workspaces",
        "Automated Manifest V3 permission linting to catch missing permissions before publish",
        "GitHub Actions workflow for automated versioning and Chrome Web Store deployment",
      ],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
