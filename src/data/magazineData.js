export const magazineIssue = {
  issueNumber: "ISSUE 01",
  volume: "VOL. 2026",
  title: "ANIRUDH K. NAMBOODIRI",
  subtitle: "PYTHON FULL STACK DEVELOPER / BUILDER",
  location: "KERALA, INDIA",
  degree: "BCA GRADUATE",
  year: "2026",
  editorialTagline: "A Contemporary Publication Documenting Python Full Stack Code & Design.",

  coverMetadata: [
    { label: "PUBLICATION", val: "ISSUE 01 — DIGITAL EDITION" },
    { label: "ROLE", val: "PYTHON FULL STACK DEVELOPER" },
    { label: "LOCATION", val: "KERALA, INDIA" },
    { label: "CURATED WORK", val: "04 FEATURED ARTICLES" }
  ],

  projects: [
    {
      id: "civicconnect",
      number: "01",
      title: "CIVICCONNECT",
      tagline: "A DIGITAL PLATFORM FOR CIVIC ENGAGEMENT",
      headline: "A simple way to submit issues in your locality and get them resolved faster.",
      quote: "Connecting citizens directly with local representatives through structured complaint submission and real-time tracking.",
      description: "CivicConnect was built to eliminate friction in local municipal issue reporting. Citizens can submit issues with location tagging, track real-time resolution status across departments, and engage in community-driven local governance.",
      role: "Full-Stack Design & Development",
      technology: ["React", "JavaScript", "Supabase", "Tailwind CSS", "REST APIs"],
      category: "Civic Technology",
      year: "2026",
      image: "/assets/CivicConnect 1.png",
      github: "https://github.com/Anirudh7240/CivicConnect",
      live: "https://civicconnect.com",
      highlights: [
        "Structured issue reporting with automated status pipelines",
        "Interactive locality map for real-time problem tracking",
        "Role-based authentication for citizens and local authorities",
        "Bilingual interface support (English & Malayalam)"
      ]
    },
    {
      id: "etranslator",
      number: "02",
      title: "E-TRANSLATOR",
      tagline: "LANGUAGE WITHOUT FRICTION",
      headline: "Document & Neural Language Translation Engine",
      quote: "Bridging linguistic barriers through neural document translation from English to Malayalam.",
      description: "E-Translator is an AI-assisted translation engine capable of handling complex document formats (PDF, PNG, JPG) with high linguistic fidelity. Features live audio waveform visualization, phonetic breakdown, and real-time document parsing.",
      role: "System Architecture & UI Engineering",
      technology: ["Python", "Neural Models v4.2", "React", "FastAPI / Node", "OCR Engines"],
      category: "AI & Natural Language Processing",
      year: "2026",
      imageMain: "/assets/E-translator.jpg",
      imageDetail: "/assets/etranslator_detail.jpg",
      github: "https://github.com/Anirudh7240/E-translator",
      highlights: [
        "Multi-format document drop zone (PDF, PNG, JPG up to 15MB)",
        "Real-time translation log terminal with neural model metrics",
        "Interactive phonetic dictionary & speech recognition graph",
        "English to Malayalam deep translation engine"
      ]
    },
    {
      id: "unishare",
      number: "03",
      title: "UNISHARE",
      tagline: "SHARE. LEARN. CONNECT.",
      headline: "Academic Knowledge & Student Resource Sharing Hub",
      quote: "Empowering university students to exchange notes, code snippets, and study guides seamlessly.",
      description: "UniShare is a dedicated student platform designed to streamline academic collaboration. Students can upload lecture notes, discover curated course materials, bookmark essential resources, and interact with AI-driven study assistants.",
      role: "Product Design & Frontend Development",
      technology: ["React", "JavaScript", "Firebase / Supabase", "Tailwind CSS"],
      category: "EdTech & Community Platform",
      year: "2026",
      image: "/assets/unishare.jpg",
      github: "https://github.com/Anirudh7240/UNISHARE",
      stats: [
        { label: "Shared Resources", value: "12+ Uploads" },
        { label: "Community Downloads", value: "48+ Downloads" },
        { label: "Student Rating", value: "4.8 / 5.0" }
      ],
      highlights: [
        "Curated academic feeds categorized by subject and course code",
        "Personalized user dashboards with activity history and saved notes",
        "Integrated AI Chat study assistant for instant assignment guidance"
      ]
    },
    {
      id: "bca1080p",
      number: "04",
      title: "BCA-1080P",
      tagline: "THE FINAL CHAPTER.",
      headline: "FROM STRANGERS TO FAMILY",
      quote: "Three years, countless memories, one unforgettable journey. This is our story.",
      description: "BCA-1080P is a bespoke digital archive created for the BCA graduation batch. Combining ambient audio tracks, high-definition photo galleries, and personal timelines, it preserves three years of shared academic life into a timeless visual experience.",
      role: "Creative Direction & Web Development",
      technology: ["React", "HTML5 Audio API", "Framer Motion", "Tailwind CSS"],
      category: "Digital Archive & Creative Web",
      year: "2026",
      image: "/assets/BCA-1080p.jpg",
      github: "https://github.com/Anirudh7240/BCA.1080p",
      live: "https://bca-1080p.vercel.app/",
      instagram: ["@bca.1080p", "@kann.bca"],
      highlights: [
        "Ambient background music player for nostalgic audio immersion",
        "Interactive batch profile gallery and graduation memories",
        "High-definition 1080p photo viewing modal with full-screen support"
      ]
    }
  ],

  about: {
    title: "ABOUT THE BUILDER",
    name: "ANIRUDH K. NAMBOODIRI",
    subtitle: "Python Full Stack Developer & BCA Graduate based in Kerala, India.",
    portrait: "/assets/Anirudh.jpeg",
    bio: [
      "I am a Python Full Stack Developer and Computer Applications (BCA) Graduate with a passion for building end-to-end web applications, neural language translation engines, and robust digital platforms.",
      "My work bridges Python backend architectures (FastAPI, REST APIs, Neural AI models) with clean, high-performance React frontends and real-time database integrations. I strive for clarity, reliability, and intentionality in every project."
    ],
    principles: [
      { num: "01", title: "INTENTIONAL UI", desc: "Design decisions should serve clarity and user agency rather than empty decoration." },
      { num: "02", title: "SOLID ARCHITECTURE", desc: "Robust Python backends, clean APIs, and fast execution matter above all." },
      { num: "03", title: "CONTINUOUS BUILDING", desc: "The best way to learn is by shipping real tools that solve actual problems." }
    ]
  },

  skills: [
    { num: "01", name: "PYTHON", level: "FastAPI, Backend Systems, Scripting, AI/NLP", category: "BACKEND" },
    { num: "02", name: "REACT / JS", level: "ES6+, React Hooks, State Management", category: "FRONTEND" },
    { num: "03", name: "SUPABASE / SQL", level: "PostgreSQL, Auth, Realtime DB, REST APIs", category: "DATABASE" },
    { num: "04", name: "HTML / CSS", level: "Modern Layouts, Tailwind, Editorial UI", category: "UI/UX" },
    { num: "05", name: "GIT / GITHUB", level: "Version Control, Deployment, CI/CD", category: "TOOLS" }
  ],

  contact: {
    title: "END OF ISSUE 01",
    subtitle: "BUT NOT THE END OF THE STORY.",
    heading: "LET'S BUILD SOMETHING.",
    email: "anirudhknamboodiri@gmail.com",
    github: "https://github.com/Anirudh7240",
    linkedin: "https://www.linkedin.com/in/anirudh-k-namboodiri-8a881a302",
    instagram: "https://instagram.com/kann.bca"
  }
};
