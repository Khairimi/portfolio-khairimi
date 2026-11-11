/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF CONTENT
 *  Edit this file to update anything on the site. No component
 *  changes needed.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Khairi Rahimi",
  fullName: "Khairi Rahimi Khyril Norrahim",
  handle: "khairimi",
  institution: "UiTM Cawangan Terengganu, Kampus Kuala Terengganu",
  institutionShort: "UiTMCTKKT",
  programme: "Bachelor of Computer Science (Hons.) Mobile Computing",
  programmeCode: "CDCS270",
  award: "Dean's List Awardee (2025)",
  role: "Elected Member, Majlis Perwakilan Pelajar (MPP) Sesi 2025/2026",
  portfolios: ["Exco Keusahawanan & Inovasi", "Exco Korporat"],
  target: "Technology Consultant / IT Project Coordinator",
  motto: "Meneraju Aspirasi, Membina Kecemerlangan",
  email: "Khairi.rahimi2112@gmail.com",
  github: "https://github.com/Khairimi",
  linkedin: "https://www.linkedin.com/in/khairi-rahimi-87a420315",
  location: "Kuala Terengganu, Malaysia",
};

export const dobiSutera = {
  title: "Dobi Sutera Facility Advocacy Campaign",
  reportUrl: "https://dobi-sutera-mpp.vercel.app/",
  responses: 185,
  target: 200,
  hygieneFlagged: 87,
  siswiShare: 34.5,
};

export type ProjectCategory = "mobile-ai" | "web-systems";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  highlights: string[];
  badge?: string;
  accent: "emerald" | "cyber" | "gold";
  links?: { label: string; href: string; kind: "github" | "live" }[];
};

export const projects: Project[] = [
  {
    slug: "studypilot",
    title: "StudyPilot",
    subtitle: "CSC661 Mobile App Upgrade",
    category: "mobile-ai",
    description:
      "A study planner that tells students what to work on next — and explains why. Built cross-platform with offline-first storage.",
    tech: ["Flutter", "Dart", "Firebase Firestore", "Hive", "Vercel Web Preview"],
    highlights: [
      "Explainable Smart Priority Scoring (0–100)",
      "Workload & capacity insights",
      "Multi-platform web + Android preview",
    ],
    accent: "emerald",
    links: [
      { label: "GitHub", href: "https://github.com/Khairimi/StudyPilot", kind: "github" },
      { label: "Live Web", href: "https://studypilot-csc661.vercel.app", kind: "live" },
    ],
  },
  {
    slug: "khazanah-pantun",
    title: "Khazanah Pantun",
    subtitle: "AI Malay Heritage App",
    category: "mobile-ai",
    description:
      "Digitising Malay oral heritage: search, scan and recite pantun with AI — designed around a Responsible AI framework.",
    tech: ["Flutter", "AI / OCR Search", "Semantic Recitation Engine", "Responsible AI"],
    highlights: [
      "19,137 pantun records across 15 books",
      "OCR + semantic search over classical texts",
      "Responsible AI framework for cultural content",
    ],
    badge: "National Silver · International Finalist — EXPO VOKASI 2026",
    accent: "gold",
  },
  {
    slug: "skill-exchange",
    title: "Community Skill Exchange",
    subtitle: "Final Year Project",
    category: "mobile-ai",
    description:
      "Two-sided matching for UiTM peer skill swapping — students list what they offer and what they want, and the system pairs them stably.",
    tech: ["Gale–Shapley Deferred Acceptance", "Stable Matching", "Multi-Criteria Ranking"],
    highlights: [
      "No blocking pairs: provably stable matches",
      "Preference lists from offered / wanted skills",
      "Multi-criteria ranking of candidates",
    ],
    accent: "cyber",
  },
  {
    slug: "benteng-siber",
    title: "Benteng Siber Arcade",
    subtitle: "Gamified Cyber Awareness",
    category: "web-systems",
    description:
      "An arcade-style experience that turns cyber-safety concepts into quick, replayable challenges.",
    tech: ["Web", "Game Design", "Cyber Awareness"],
    highlights: ["Arcade game loop", "Learn-by-playing format"],
    accent: "cyber",
  },
  {
    slug: "itt400",
    title: "ITT400 Network Design",
    subtitle: "Cisco Packet Tracer",
    category: "web-systems",
    description:
      "End-to-end network topology designed, configured and simulated in Cisco Packet Tracer for the ITT400 course.",
    tech: ["Cisco Packet Tracer", "Routing & Switching", "Network Topology"],
    highlights: ["Topology planning & addressing", "Device configuration & simulation"],
    accent: "emerald",
  },
];

export type GalleryItem = {
  slug: string; // drop a photo at /public/gallery/<slug>.jpg and it appears automatically
  title: string;
  caption: string;
  context: string;
  tag: string;
  accent: "emerald" | "cyber" | "gold";
};

export const gallery: GalleryItem[] = [
  {
    slug: "mpp-manifesto",
    title: "MPP Election Manifesto Poster",
    caption: "“Berjuang Demi Mahasiswa”",
    context:
      "Campaign manifesto focused on bridging students and campus management, with student welfare as the core agenda.",
    tag: "Election · 2025",
    accent: "emerald",
  },
  {
    slug: "breakfast-boost",
    title: "MPP Care — Breakfast Boost",
    caption: "100 free breakfast packs · Dataran Lestari",
    context:
      "Welfare programme distributing 100 breakfast packs to students at Dataran Lestari, sponsored by Terengganu Inc.",
    tag: "Welfare",
    accent: "gold",
  },
  {
    slug: "warna-warni-warisan",
    title: "Warna-Warni Warisan Terengganu",
    caption: "Cultural festival poster & closing management",
    context:
      "Directed the cultural festival — Pantai Timur forum, cultural games and Malam Tokoh Warisan — through to closing.",
    tag: "Culture",
    accent: "gold",
  },
  {
    slug: "masmed-seminar",
    title: "MASMED Eastern Region Seminar",
    caption: "Digital Product Marketing · UiTM Kelantan",
    context:
      "Led participation in the MASMED Eastern Region digital product marketing seminar hosted at UiTM Kelantan.",
    tag: "Entrepreneurship",
    accent: "cyber",
  },
  {
    slug: "welfare-walk",
    title: "Non-Resident Welfare Walk & Facility Inspection",
    caption: "Facility checks · Kampus Kuala Terengganu",
    context:
      "On-the-ground facility checks and college upkeep review for non-resident students at Kampus Kuala Terengganu.",
    tag: "Advocacy",
    accent: "emerald",
  },
];

export type Milestone = {
  period: string;
  title: string;
  place: string;
  note: string;
  status: "done" | "current" | "next" | "goal";
};

export const roadmap: Milestone[] = [
  {
    period: "Completed",
    title: "Diploma in Information Technology",
    place: "Politeknik PSP",
    note: "First Class",
    status: "done",
  },
  {
    period: "Now",
    title: "B.CS (Hons.) Mobile Computing",
    place: "UiTMCTKKT",
    note: "Dean's List · MPP 2025/2026",
    status: "current",
  },
  {
    period: "May 2027",
    title: "Final Year Project",
    place: "Community Skill Exchange",
    note: "Stable matching system",
    status: "next",
  },
  {
    period: "Sept 2027",
    title: "IT Internship",
    place: "Industry",
    note: "Target start",
    status: "next",
  },
  {
    period: "Goal",
    title: "Technology Consultant",
    place: "IT Project Coordinator",
    note: "Career goal",
    status: "goal",
  },
];

export const skills: { group: string; icon: "mobile" | "web" | "cloud" | "tools"; items: string[] }[] = [
  { group: "Mobile App Development", icon: "mobile", items: ["Flutter", "Dart", "Kotlin", "Java"] },
  { group: "Web & Frontend", icon: "web", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "Backend & Cloud", icon: "cloud", items: ["Firebase", "PHP", "Laravel", "Python"] },
  { group: "Tools", icon: "tools", items: ["Git", "VS Code", "Cisco Packet Tracer"] },
];

export const asciiBanner = [
  " _  __ _             _        _ ",
  "| |/ /| |__    __ _ (_) _ __ (_)",
  "| ' / | '_ \\  / _` || || '__|| |",
  "| . \\ | | | || (_| || || |   | |",
  "|_|\\_\\|_| |_| \\__,_||_||_|   |_|",
].join("\n");
