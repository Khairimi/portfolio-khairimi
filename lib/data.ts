// lib/data.ts
// Serializable data for Next.js server or client components.
// null means unavailable, not zero.
// Metrics describe specific activities; do not sum them as unique students.

export type Metric = {
  id: string;
  title: string;
  value: number | null;
  unit: string;
  description: string;
};

export type PortfolioEntry = {
  id: string;
  title: string;
  role: string;
  period: string | null;
  description: string;
  metrics: Metric[];
  badges: string[];
  initiatives?: string[];
  technologies?: string[];
  links?: { title: string; href: string }[];
  notes?: string[];
};

export const profileData = {
  id: "khairi-rahimi",
  title: "Khairi Rahimi Khyril Norrahim",
  role: "Mobile Computing Student & Student Leader",
  institution: "Universiti Teknologi MARA",
  campus: "UiTM Cawangan Terengganu, Kampus Kuala Terengganu",
  programmeCode: "CDCS270",
  programme: "Bachelor of Information Systems (Hons) Mobile Computing",
  description:
    "Menggabungkan kepimpinan mahasiswa, pembangunan aplikasi mudah alih dan penyelarasan projek untuk menyelesaikan keperluan komuniti.",
  interests: [
    "Technology Consulting",
    "IT Project Coordination",
    "Mobile Application Development",
    "Responsible AI",
    "Power BI",
    "Data Visualization",
  ],
  badges: ["MPP 2025/2026", "Mobile Computing", "Dean's List 2025", "JPK Exco Korporat", "PMDS"],
  // Site-level identity & contact (used by nav, hero, footer, terminal)
  name: "Khairi Rahimi",
  handle: "khairimi",
  institutionShort: "UiTMCTKKT",
  location: "Kuala Terengganu, Malaysia",
  motto: "Meneraju Aspirasi, Membina Kecemerlangan",
  email: "Khairi.rahimi2112@gmail.com",
  github: "https://github.com/Khairimi",
  linkedin: "https://www.linkedin.com/in/khairi-rahimi-87a420315",
  phone: "0149361720",
  whatsapp: "https://wa.me/60149361720",
  instagram: "https://www.instagram.com/kayrimi_",
};

export const projectMetrics = {
  culturalEventAttendance: {
    id: "cultural-event-attendance",
    title: "Peserta Warna-Warni Warisan Terengganu",
    value: 281,
    unit: "peserta",
    description:
      "Jumlah penyertaan program pada 12–13 Disember 2025; bukan jumlah pelajar unik yang menerima impak sepanjang penggal MPP.",
  },
  participantSatisfaction: {
    id: "participant-satisfaction",
    title: "Kepuasan Peserta",
    value: 99,
    unit: "%",
    description: "Keputusan penilaian peserta Warna-Warni Warisan Terengganu (WWWT).",
  },
  externalCollaborators: {
    id: "external-collaborators",
    title: "Rakan Kolaborasi Luar",
    value: 5,
    unit: "rakan",
    description:
      "Noor Arfa Batik, Lembaga Muzium, Persatuan Wau, Persatuan Gasing dan Extra Joss Malaysia.",
  },
  pantunTop3: {
    id: "pantun-top-3",
    title: "Padanan Tema Top-3",
    value: 79,
    unit: "%",
    description: "Prestasi klasifikasi tema pada 945 pantun ujian held-out.",
  },
  pantunTop1: {
    id: "pantun-top-1",
    title: "Padanan Tema Top-1",
    value: 50,
    unit: "%",
    description: "Prestasi pilihan tema pertama pada set ujian yang sama.",
  },
  pantunTestSet: {
    id: "pantun-test-set",
    title: "Pantun dalam Set Ujian",
    value: 945,
    unit: "pantun",
    description: "Set ujian held-out bagi penilaian klasifikasi tema.",
  },
  pantunMacroF1: {
    id: "pantun-macro-f1",
    title: "Macro-F1",
    value: 0.45,
    unit: "skor",
    description: "Skor Macro-F1 klasifikasi tema; bukan peratus kepuasan pengguna.",
  },
  pantunBackendTests: {
    id: "pantun-backend-tests",
    title: "Ujian Backend Lulus",
    value: 19,
    unit: "ujian",
    description: "Keputusan ujian automatik yang dilaporkan dalam projek.",
  },
  fundraising: {
    id: "fundraising",
    title: "Dana Berjaya Dikumpulkan",
    value: null,
    unit: "MYR",
    description: "Jumlah kutipan sebenar belum tersedia.",
  },
  surveyResponseRate: {
    id: "survey-response-rate",
    title: "Kadar Respons Tinjauan",
    value: null,
    unit: "%",
    description:
      "Memerlukan jumlah respons dan jumlah individu yang dijemput. Peratus jawapan kepada soalan bukan kadar respons.",
  },
} satisfies Record<string, Metric>;

export const leadershipData: PortfolioEntry[] = [
  {
    id: "mpp-2025-2026",
    title: "Majlis Perwakilan Pelajar Sesi 2025/2026",
    role: "Exco Keusahawanan",
    period: "2025/2026",
    description:
      "Menyelaras inisiatif keusahawanan mahasiswa, komunikasi pihak berkepentingan dan tugasan perwakilan pelajar.",
    initiatives: [
      "Penyelarasan bersama MASMED, JPK dan usahawan pelajar",
      "Perancangan Pasar Senja secara dua minggu sekali",
      "Pengambilan vendor Kerawang Town 2.0",
      "Perancangan jualan merchandise dan penjanaan dana",
      "Pembahagian tugasan sekretariat keusahawanan",
      "Perwakilan di PayNet Digital Campus Summit",
    ],
    metrics: [projectMetrics.fundraising],
    badges: ["MPP", "Keusahawanan", "Student Representation"],
  },
  {
    id: "jpk-exco-korporat",
    title: "Jawatankuasa Perwakilan Kolej (JPK) Kolej Kerawang",
    role: "Exco Korporat (Sesi 2024/2025 & 2025/2026)",
    period: "2024 — 2026",
    description:
      "Mengetuai hubungan korporat, jalinan kolaborasi luar, pengurusan pasar malam Laluan Malam Kerawang (~15 vendor/minggu), serta mengendalikan program kebudayaan flagship.",
    initiatives: [
      "Ketua Program Warna-Warni Warisan Terengganu (281 peserta, 5 kolaborasi luar, dicalonkan Anugerah Kebudayaan UiTMCTKKT)",
      "Pengarah Laluan Malam Kerawang (Pasar malam mingguan Kolej Kerawang)",
      "Pengacara Majlis (Emcee) & AJK Siar Raya Hi-Tea Apresiasi JPK",
      "Penyelarasan bersama Noor Arfa Batik, Persatuan Wau, Persatuan Gasing, Lembaga Muzium & Extra Joss Malaysia",
    ],
    metrics: [projectMetrics.culturalEventAttendance],
    badges: ["JPK 24/25", "JPK 25/26", "Exco Korporat", "Ketua Program", "Anugerah Kebudayaan Nominee"],
  },
  {
    id: "pmds",
    title: "Program Pembangunan Kepimpinan Student Leaders (PMDS)",
    role: "Student Leader / Participant",
    period: null,
    description:
      "Penyertaan dalam program pembangunan kepimpinan untuk pemimpin pelajar (Pemimpin Minggu Destini Siswa).",
    metrics: [],
    badges: ["PMDS", "Leadership Development", "Student Leaders"],
  },
  {
    id: "class-representative",
    title: "Perwakilan Kelas",
    role: "Wakil Kelas",
    period: null,
    description:
      "Berperanan sebagai penghubung komunikasi antara pelajar kelas dengan pensyarah.",
    metrics: [],
    badges: ["Communication", "Coordination"],
  },
  {
    id: "warna-warni-warisan",
    title: "Warna-Warni Warisan Terengganu",
    role: "Ketua Program (termasuk Penyediaan Cuesheet Penutup)",
    period: "12–13 Disember 2025",
    description:
      "Program JPK dengan kerjasama MPP yang memperkenalkan seni, permainan dan makanan tradisional melalui aktiviti budaya, rekreasi dan persembahan.",
    initiatives: [
      "Penyediaan cuesheet majlis penutup",
      "Aktiviti batik dan demonstrasi wau serta gasing",
      "Permainan tradisional",
      "Fun Run Kuih Kita",
      "Persembahan kebudayaan",
    ],
    metrics: [projectMetrics.culturalEventAttendance],
    badges: ["Cultural Heritage", "Event Coordination", "JPK × MPP"],
  },
  {
    id: "kerawang-town",
    title: "Kerawang Town 2.0",
    role: "Penyelaras Pengambilan Vendor",
    period: null,
    description:
      "Menyelaras penyertaan vendor bagi acara hujung semester dengan kemudahan booth percuma, khemah dan meja.",
    initiatives: [
      "Komunikasi dan pengambilan vendor",
      "Penyediaan makluman kemudahan booth",
      "Penyediaan penghargaan kepada vendor",
    ],
    metrics: [],
    badges: ["Entrepreneurship", "Vendor Coordination"],
  },
  {
    id: "pasar-senja",
    title: "Pasar Senja",
    role: "Perancangan & Penyelarasan Keusahawanan",
    period: null,
    description:
      "Merancang konsep pasar dua minggu sekali melalui tinjauan kelab, penyediaan surat MPP dan penyelarasan bersama MASMED.",
    metrics: [],
    badges: ["Programme Planning", "MASMED", "Entrepreneurship"],
    notes: ["Kekerapan ialah cadangan pelaksanaan, bukan jumlah acara selesai."],
  },
  {
    id: "dobi-sutera",
    title: "Inisiatif Aduan Dobi Sutera",
    role: "Pengumpulan Aduan & Penyediaan Laporan Digital",
    period: "November 2026",
    description:
      "Membantu menyusun aduan pelajar dan bukti sokongan untuk perhatian pengusaha dobi, dengan fokus kebersihan dan penyelenggaraan berkala.",
    metrics: [],
    badges: ["Student Welfare", "Digital Reporting", "MPP"],
    links: [
      {
        title: "Laporan Dobi Sutera",
        href: "https://dobi-sutera-mpp.vercel.app",
      },
    ],
  },
];

export const projectsData: PortfolioEntry[] = [
  {
    id: "studypilot",
    title: "StudyPilot",
    role: "Ahli Pasukan Pembangunan",
    period: "2026 — Dalam pembangunan",
    description:
      "Projek berkumpulan CSC661 yang menaik taraf StudyFlow untuk pengurusan tugasan dan ruang kerja. Skop merangkumi Dashboard, Tasks List/Board, Smart Priority dan Workload Insights.",
    technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Hive"],
    initiatives: [
      "Pembangunan aplikasi mudah alih dengan pratonton web",
      "Semakan konsistensi ruang kerja dan navigasi",
      "Semakan responsif desktop dan mudah alih",
      "Pengesahan penyegerakan subjek dan akses Firestore",
    ],
    metrics: [],
    badges: ["CSC661", "Group Project", "Mobile Development"],
    links: [
      {
        title: "GitHub",
        href: "https://github.com/Khairimi/StudyPilot",
      },
    ],
    notes: [
      "Semakan QA yang diminta tidak dianggap keputusan ujian lulus.",
      "Pembangunan dibantu Claude Code dan ChatGPT.",
    ],
  },
  {
    id: "khazanah-pantun",
    title: "Khazanah Pantun",
    role: "Ketua Pasukan Culture Care",
    period: "2026",
    description:
      "Repositori pantun Melayu berbantukan AI untuk penemuan dan pemeliharaan warisan. Mengutamakan sumber penerbitan, carian berasaskan makna dan semakan manusia.",
    technologies: [
      "Semantic Search",
      "Theme Classification",
      "OCR",
      "Text-to-Speech",
    ],
    initiatives: [
      "Penyelarasan pasukan bersama Aiman dan Hazeeq",
      "Reka bentuk persona dan perjalanan pengguna",
      "Carian semantik serta carian kata kunci",
      "Cadangan tema dengan penandaan ketidakpastian",
      "Paparan sumber dan saluran pelaporan",
      "Penyediaan poster, slaid dan pitching pertandingan",
    ],
    metrics: [
      projectMetrics.pantunTop3,
      projectMetrics.pantunTop1,
      projectMetrics.pantunTestSet,
      projectMetrics.pantunMacroF1,
      projectMetrics.pantunBackendTests,
    ],
    badges: ["Culture Care", "Responsible AI", "Malay Heritage"],
    links: [
      {
        title: "Demo Khazanah Pantun",
        href: "https://pantun-temp.reputely.my/",
      },
    ],
    notes: [
      "79% ialah padanan tema Top-3, bukan kadar kepuasan pengguna.",
      "34 undian reka bentuk ialah rekod ujian, bukan respons pengguna sebenar.",
      "Jumlah korpus tidak dipaparkan kerana angka 19,137 dan 4,332 mempunyai rekod skop yang bercanggah.",
    ],
  },
  {
    id: "community-skill-exchange",
    title: "Community Skill Exchange Mobile Application",
    role: "Penyelidik & Pembangun FYP",
    period: "Dalam pelaksanaan — Sasaran Mei 2027",
    description:
      "Aplikasi pertukaran kemahiran komuniti menggunakan algoritma Gale-Shapley untuk memadankan rakan berdasarkan kemahiran, ketersediaan, lokasi dan ranking keutamaan.",
    technologies: [
      "Gale-Shapley",
      "Stable Matching",
      "Multi-Criteria Preference Ranking",
    ],
    initiatives: [
      "Kajian literatur dan perbandingan algoritma pemadanan",
      "Pembinaan senarai keutamaan",
      "Analisis keserasian kemahiran dan kekangan pemadanan",
    ],
    metrics: [],
    badges: ["FYP", "Algorithm Design", "Peer Learning"],
    notes: ["Prestasi algoritma dan keputusan ujian pengguna belum dilaporkan."],
  },
  {
    id: "benteng-siber",
    title: "Benteng Siber Arcade",
    role: "Ahli Pasukan & Pembentang",
    period: "2026",
    description:
      "Projek permainan pendidikan keselamatan siber berasaskan pelayar. Menyumbang kepada kandungan slaid, penerangan impak dan skrip pitching.",
    metrics: [],
    badges: ["FIP 2026", "Cybersecurity Education", "Pitching"],
  },
  {
    id: "food-ordering-system",
    title: "Los Pollos Hermanos Food Ordering System",
    role: "Ahli Pasukan Projek",
    period: "April 2026",
    description:
      "Penyediaan cadangan sistem pesanan makanan untuk projek berkumpulan CSC577 Software Engineering.",
    metrics: [],
    badges: ["CSC577", "Software Engineering", "System Proposal"],
  },
  {
    id: "packet-tracer-lan",
    title: "Cisco Packet Tracer LAN",
    role: "Ahli Pasukan Projek Rangkaian",
    period: "2025",
    description:
      "Projek ITT400 melibatkan konfigurasi rangkaian, komunikasi e-mel dan demonstrasi tangkapan serta penapisan paket.",
    technologies: ["Cisco Packet Tracer", "Wireshark", "FTP", "SMTP", "POP3"],
    metrics: [],
    badges: ["ITT400", "Networking", "Packet Analysis"],
  },
];

export const achievementsData: PortfolioEntry[] = [
  {
    id: "expo-vokasi-2026",
    title: "EXPO VOKASI 2026 — International Finalist",
    role: "Ketua Pasukan Culture Care",
    period: "2026",
    description:
      "Pencapaian finalis antarabangsa menerusi projek Khazanah Pantun.",
    metrics: [],
    badges: ["Finalist", "International", "Khazanah Pantun"],
  },
  {
    id: "national-silver-2026",
    title: "Anugerah Perak Peringkat Kebangsaan",
    role: "Ketua Pasukan Culture Care",
    period: "2026",
    description:
      "Pencapaian projek Khazanah Pantun sebelum penyertaan antarabangsa.",
    metrics: [],
    badges: ["Silver", "National", "Khazanah Pantun"],
    notes: ["Nama kategori anugerah belum dinyatakan."],
  },
  {
    id: "deans-list-2025",
    title: "Dean's List 2025",
    role: "Pelajar CDCS270",
    period: "2025",
    description: "Menerima pengiktirafan Dean's List bagi satu semester.",
    metrics: [
      {
        id: "deans-list-semesters",
        title: "Semester Dean's List",
        value: 1,
        unit: "semester",
        description: "Nama semester dan GPA belum dinyatakan.",
      },
    ],
    badges: ["Academic Excellence", "Dean's List"],
  },
  {
    id: "power-bi-simplilearn-2026",
    title: "Power BI for Beginners — Simplilearn & Microsoft",
    role: "Certified Learner",
    period: "4 November 2026",
    description:
      "Pengiktirafan kemahiran analitik data, visualisasi data perniagaan, dan pembuatan papan pemuka (dashboard) interaktif.",
    metrics: [],
    badges: ["Power BI", "Data Analytics", "Microsoft", "Simplilearn"],
    notes: ["Certificate Code: 10982607"],
  },
  {
    id: "pride-showcase-12-jury",
    title: "Jury — PRIDE Showcase 12th Edition",
    role: "Innovation Evaluator",
    period: "4 Disember 2025",
    description: "Menilai projek inovasi pelajar di PRIDE Showcase ke-12, anjuran FSKM & MASMED UiTMCTKKT.",
    metrics: [],
    badges: ["Jury", "FSKM", "MASMED", "Innovation Evaluator"],
  },
  {
    id: "madani-mega-2026",
    title: "Seminar Usahawan MADANI Mega 2026",
    role: "Peserta",
    period: "23 Jun 2026",
    description: "Seminar keusahawanan di DATC UiTM Shah Alam, anjuran MASMED dan INSKEN.",
    metrics: [],
    badges: ["MASMED", "INSKEN", "Entrepreneurship Summit"],
  },
];

// Impak berangka yang sesuai dipaparkan sebagai kad portfolio.
export const statsData: Metric[] = [
  projectMetrics.culturalEventAttendance,
  projectMetrics.participantSatisfaction,
  projectMetrics.externalCollaborators,
  projectMetrics.pantunTop3,
  projectMetrics.pantunTestSet,
  projectMetrics.pantunBackendTests,
];

// Simpan berasingan supaya angka belum tersedia tidak dipaparkan sebagai 0.
export const pendingStatsData: Metric[] = [
  projectMetrics.fundraising,
  projectMetrics.surveyResponseRate,
];

/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — presentation content that is not a verified
 *  metric: gallery evidence, career roadmap, skills, ASCII art.
 * ─────────────────────────────────────────────────────────────
 */

export type GalleryItem = {
  slug: string; // image lives at /public/gallery/<slug>.jpg (lowercase extension)
  alt: string; // descriptive alt text for screen readers
  title: string;
  caption: string;
  context: string;
  tag: string;
  accent: "emerald" | "cyber" | "gold";
};

export const gallery: GalleryItem[] = [
  {
    slug: "mpp-manifesto",
    alt: "MPP 2025/2026 election manifesto poster for Khairi Rahimi Khyril Norrahim, Fakulti Sains Komputer Matematik (FSKM), UiTM Kuala Terengganu, with the slogan “Berjuang Demi Mahasiswa”",
    title: "MPP Election Manifesto Poster",
    caption: "“Berjuang Demi Mahasiswa”",
    context:
      "Campaign manifesto focused on bridging students and campus management, with student welfare as the core agenda.",
    tag: "Election · 2025",
    accent: "emerald",
  },
  {
    slug: "breakfast-boost",
    alt: "MPP Care Breakfast Boost booth at Dataran Lestari, UiTM Kuala Terengganu, with student representatives and free breakfast packs laid out on tables",
    title: "MPP Care — Breakfast Boost",
    caption: "Free breakfast for the first 100 students · Dataran Lestari",
    context:
      "MPP welfare programme at Dataran Lestari, UiTM Kuala Terengganu, sponsored by Terengganu Inc (per the programme poster).",
    tag: "Welfare",
    accent: "gold",
  },
  {
    slug: "warna-warni-warisan",
    alt: "Khairi holding the Warna-Warni Warisan Terengganu festival banner for the 12–13 December 2025 event at UiTM Kuala Terengganu",
    title: "Warna-Warni Warisan Terengganu",
    caption: "281 participants · 12–13 December 2025",
    context:
      "JPK × MPP cultural programme. Coordinated the programme and prepared the closing-ceremony cuesheet. 281 is programme participation, not unique students reached.",
    tag: "Culture",
    accent: "gold",
  },
  {
    slug: "masmed-seminar",
    alt: "Student leaders at the MASMED Eastern Region digital product marketing seminar, with the presentation projected behind them",
    title: "MASMED Eastern Region Seminar",
    caption: "Digital Product Marketing · UiTM Kelantan",
    context:
      "MASMED Eastern Region digital product marketing seminar, attended through the MPP entrepreneurship portfolio.",
    tag: "Entrepreneurship",
    accent: "cyber",
  },
  {
    slug: "welfare-walk",
    alt: "MPP representatives with the “Lawatan Muhibah” banner during the non-resident student welfare visit at Kampus Kuala Terengganu",
    title: "Lawatan Muhibah — Non-Resident Welfare Visit",
    caption: "Student welfare · Kampus Kuala Terengganu",
    context:
      "Welfare visit to non-resident students at Kampus Kuala Terengganu, carried out with URHP.",
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
    title: "B.IS (Hons) Mobile Computing",
    place: "UiTMCTKKT · CDCS270",
    note: "Dean's List 2025 · MPP 2025/2026",
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

export type SkillPillar = {
  group: string;
  icon: "mobile" | "data" | "leadership" | "systems";
  items: string[];
};

export const skills: SkillPillar[] = [
  {
    group: "Mobile Computing & App Development",
    icon: "mobile",
    items: ["Flutter", "Dart", "Firebase", "Android"],
  },
  {
    group: "Data Analytics & Business Intelligence",
    icon: "data",
    items: ["Power BI", "Data Visualization", "Semantic Search", "Theme Classification"],
  },
  {
    group: "Executive Leadership & Event Coordination",
    icon: "leadership",
    items: ["MPP Exco Keusahawanan", "JPK Exco Korporat", "MASMED", "PMDS"],
  },
  {
    group: "Systems Engineering & AI Integration",
    icon: "systems",
    items: ["Gale-Shapley Algorithm", "Responsible AI", "Network Packet Analysis"],
  },
];

export const asciiBanner = [
  " _  __ _             _        _ ",
  "| |/ /| |__    __ _ (_) _ __ (_)",
  "| ' / | '_ \\  / _` || || '__|| |",
  "| . \\ | | | || (_| || || |   | |",
  "|_|\\_\\|_| |_| \\__,_||_||_|   |_|",
].join("\n");
