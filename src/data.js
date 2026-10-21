// All site content lives here so it can be updated without touching components.

export const profile = {
  name: "Avishkar Gaikwad",
  firstName: "Avishkar",
  title: "Data Analyst II",
  company: "Honeywell Building Technologies",
  location: "Atlanta, GA",
  headline: "Data & AI, built for growth.",
  roles: [
    "Technical Analytics",
    "Go-to-Market Strategy",
    "Commercial Intelligence",
    "AI Automation",
  ],
  tagline:
    "I connect data, AI and technology with commercial strategy - building the systems that help organizations find opportunities, sell smarter and grow.",
  email: "gaikwad.avi@northeastern.edu",
  linkedin: "https://www.linkedin.com/in/avishkar-gaikwad-/",
  calendly: "https://calendly.com/gaikwad-avi/introductory-call",
};

export const about = {
  paragraphs: [
    "I'm a technology-driven analytics and go-to-market professional with 3+ years of experience at the intersection of data, artificial intelligence, business strategy and commercial growth.",
    "As a Data Analyst II at Honeywell Building Technologies, I build technical solutions and commercial intelligence capabilities that help teams identify market opportunities, optimize sales processes, strengthen partner ecosystems and make data-driven decisions.",
    "Across Honeywell, KPMG and Thermo Fisher Scientific, I've combined enterprise analytics, AI engineering, business intelligence, consulting and GTM execution - and I'm most interested in how emerging technology and market intelligence can build scalable revenue engines.",
  ],
  highlights: [
    { label: "Years of experience", value: "3+" },
    { label: "Based in", value: "Atlanta" },
  ],
  differentiator:
    "I bring technical execution and commercial understanding together. I can work with enterprise data, build analytical systems and automate workflows - then translate those capabilities into market planning, sales effectiveness, partner enablement and business performance.",
};

// The two complementary disciplines the profile is built around.
export const disciplines = [
  {
    id: "tech",
    eyebrow: "Build",
    title: "Technical Expertise",
    text: "Enterprise data platforms, analytics engineering and AI that turn complex data into intelligence.",
    groups: [
      {
        title: "Data Engineering & Analytics",
        items: [
          "SQL, Snowflake, SQL Server & enterprise data warehouses",
          "Python, pandas, NumPy & scikit-learn",
          "ETL/ELT workflows & data transformation",
          "Data modeling, metric standardization & quality validation",
          "Power BI (advanced DAX, Power Query) & Tableau",
          "Salesforce CRM, SOQL & commercial data integration",
        ],
      },
      {
        title: "AI & Automation",
        items: [
          "Agentic AI workflows for web research & lead enrichment",
          "LLMs, OpenAI API, LangChain & Ollama",
          "RAG with FAISS & Chroma vector databases",
          "Prompt engineering & LoRA fine-tuning",
          "AI agents & workflow orchestration",
        ],
      },
    ],
  },
  {
    id: "gtm",
    eyebrow: "Grow",
    title: "Go-to-Market Strategy",
    text: "Using those systems to sharpen GTM planning, partner ecosystems and revenue performance in enterprise B2B.",
    groups: [
      {
        title: "GTM Planning & Market Intelligence",
        items: [
          "Market & vertical intelligence",
          "Opportunity identification & prioritization",
          "Account, project & capital project intelligence",
          "Competitive research & data-driven sales planning",
        ],
      },
      {
        title: "Channel Partners & Enablement",
        items: [
          "B2B channel ecosystems & partner-led GTM",
          "Lead qualification & opportunity distribution",
          "Sales enablement through commercial intelligence",
        ],
      },
      {
        title: "Revenue Intelligence",
        items: [
          "Pipeline visibility, forecasting & commercial KPIs",
          "AOP variance, revenue & growth analytics",
          "Margin, pricing & cost optimization",
        ],
      },
    ],
  },
];

// `value` is animated from 0; prefix/suffix are rendered around it.
export const impact = [
  { value: 100, prefix: "$", suffix: "M+", label: "Commercial pipeline", detail: "Made visible to executives through Power BI.", size: "wide" },
  { value: 10000, suffix: "+", label: "Construction projects", detail: "Analyzed to prioritize high-value opportunities.", size: "wide" },
  { value: 1, prefix: "$", suffix: "M+", label: "Partner framework", detail: "Salesforce-backed channel lead sharing." },
  { value: 12, label: "Market verticals", detail: "Metrics & definitions standardized." },
  { value: 15, suffix: "%", label: "Profitability lift", detail: "From margin & pricing analysis." },
  { value: 60, suffix: "%", label: "Faster preprocessing", detail: "Across 1M+ sales records." },
];

export const experience = [
  {
    id: "honeywell",
    company: "Honeywell Building Technologies",
    short: "Honeywell",
    role: "Data Analyst II",
    period: "Jan 2025 - Present",
    location: "Atlanta, GA",
    summary:
      "Commercial analytics, GTM intelligence, partner enablement and technical automation for an enterprise building technologies organization.",
    points: [
      "Architecting a $1M+ Salesforce-backed channel partner lead-sharing framework for deployment across the Americas.",
      "Leading project intelligence analytics across 10,000+ active construction projects to surface high-priority commercial opportunities.",
      "Building executive-facing Power BI dashboards with visibility into a commercial pipeline exceeding $100M.",
      "Developing AI-powered workflows that automate information discovery and lead enrichment.",
      "Standardizing metrics and reporting definitions across 12 market verticals.",
    ],
    tags: ["GTM Intelligence", "Salesforce", "Power BI", "Snowflake", "AI Agents"],
  },
  {
    id: "thermo",
    company: "Thermo Fisher Scientific",
    short: "Thermo Fisher",
    role: "Data Analyst - Capstone",
    period: "Sep 2024 - Dec 2024",
    location: "Boston, MA",
    summary:
      "Customer analytics, product affinity, predictive modeling and commercial decision support.",
    points: [
      "Identified 12 complementary product pairings to inform cross-selling strategy.",
      "Built models identifying customers with a high likelihood of purchasing within 30 days.",
      "Processed 1M+ sales records and reduced preprocessing time by 60%.",
      "Developed Tableau dashboards to support business decisions.",
    ],
    tags: ["Python", "Alteryx", "Tableau", "Predictive Modeling"],
  },
  {
    id: "honeywell-intern",
    company: "Honeywell Building Technologies",
    short: "Honeywell Intern",
    role: "Analytics Intern",
    period: "May 2024 - Aug 2024",
    location: "Atlanta, GA",
    summary:
      "Commercial profitability, financial analytics and reporting solutions.",
    points: [
      "Analyzed product margins and pricing inefficiencies, contributing to a 15% improvement in product profitability.",
      "Identified cost optimization opportunities through enterprise data analysis.",
      "Developed reporting assets to support business teams and leadership.",
    ],
    tags: ["Alteryx", "Salesforce", "EDW", "Pricing"],
  },
  {
    id: "kpmg",
    company: "KPMG India",
    short: "KPMG",
    role: "Analyst - Advisory",
    period: "Jun 2022 - Jul 2023",
    location: "India",
    summary:
      "Strategic consulting engagements across consumer, retail, healthcare and real estate.",
    points: [
      "Conducted market research and competitive analysis to support strategic recommendations.",
      "Contributed to healthcare pricing strategy and performance analysis.",
      "Supported financial due diligence for real estate transactions.",
      "Developed business insights and recommendations for senior stakeholders.",
    ],
    tags: ["Strategy", "Market Research", "Due Diligence"],
  },
  {
    id: "ifortis",
    company: "IFortis Corporate",
    short: "IFortis",
    role: "Marketing Intern",
    period: "Jun 2021 - Jul 2021",
    location: "Remote",
    summary:
      "Marketing internship focused on customer engagement and communication.",
    points: [],
    tags: ["Customer Service", "Oral Communication"],
  },
  {
    id: "astral",
    company: "Astral Advertising and Marketing UK Ltd",
    short: "Astral",
    role: "Consulting Intern",
    period: "Sep 2020 - Feb 2021",
    location: "On-site",
    summary:
      "Client-facing consulting internship working alongside the marketing team.",
    points: [
      "Worked to understand each client's needs and objectives.",
      "Partnered with the marketing team to deliver daily progress updates to clients.",
      "Helped bridge client expectations and the services delivered, strengthening client relationships.",
    ],
    tags: ["Customer Service", "Microsoft Excel"],
  },
];

// `icon` keys are resolved in Skills.jsx.
export const skillCategories = [
  {
    id: "data",
    name: "Data",
    skills: [
      { name: "SQL", icon: "sql", detail: "T-SQL, CTEs, window functions" },
      { name: "Snowflake", icon: "snowflake", detail: "Enterprise analytical datasets" },
      { name: "SQL Server", icon: "sqlserver", detail: "Reporting datasets" },
      { name: "ETL / ELT", icon: "etl", detail: "Pipelines & validation" },
      { name: "Data Modeling", icon: "model", detail: "Metrics & reporting models" },
      { name: "Salesforce", icon: "salesforce", detail: "CRM data & SOQL" },
    ],
  },
  {
    id: "bi",
    name: "BI",
    skills: [
      { name: "Power BI", icon: "powerbi", detail: "DAX, Power Query, RLS" },
      { name: "Tableau", icon: "tableau", detail: "Interactive dashboards" },
      { name: "Excel", icon: "excel", detail: "VBA & Power Query" },
      { name: "Alteryx", icon: "alteryx", detail: "Workflow automation" },
    ],
  },
  {
    id: "ml",
    name: "Code & ML",
    skills: [
      { name: "Python", icon: "python", detail: "pandas, NumPy, scikit-learn" },
      { name: "R", icon: "r", detail: "Statistical analysis" },
      { name: "Predictive Models", icon: "predict", detail: "Propensity & forecasting" },
      { name: "Association Rules", icon: "rules", detail: "Product affinity" },
    ],
  },
  {
    id: "ai",
    name: "AI",
    skills: [
      { name: "OpenAI API", icon: "openai", detail: "LLM applications" },
      { name: "LangChain", icon: "chain", detail: "Chains & agents" },
      { name: "Ollama", icon: "local", detail: "Local open-source LLMs" },
      { name: "RAG", icon: "rag", detail: "FAISS & Chroma" },
      { name: "LoRA", icon: "tune", detail: "Fine-tuning" },
      { name: "AI Agents", icon: "agent", detail: "Agentic workflows" },
    ],
  },
  {
    id: "gtm",
    name: "GTM",
    skills: [
      { name: "Market Intelligence", icon: "market", detail: "Vertical & project intel" },
      { name: "Channel Strategy", icon: "partner", detail: "Partner-led GTM" },
      { name: "Pipeline Analytics", icon: "predict", detail: "Forecasts & KPIs" },
      { name: "Pricing & Margin", icon: "pricing", detail: "Profitability analysis" },
      { name: "Sales Enablement", icon: "target", detail: "Lead qualification" },
    ],
  },
  {
    id: "tools",
    name: "Platforms",
    skills: [
      { name: "Azure", icon: "azure", detail: "Cloud" },
      { name: "Git", icon: "git", detail: "Version control" },
      { name: "Jira", icon: "jira", detail: "Agile delivery" },
      { name: "Microsoft 365", icon: "m365", detail: "Collaboration" },
    ],
  },
];

export const focus = [
  {
    title: "Technical & Engineering",
    items: [
      "Data & Analytics Engineering",
      "AI Engineering & Automation",
      "Enterprise Business Intelligence",
      "Applied Machine Learning",
    ],
  },
  {
    title: "GTM & Strategy",
    items: [
      "Go-to-Market Strategy & Operations",
      "Revenue & Sales Strategy",
      "Commercial Analytics",
      "Partner & Channel Strategy",
      "Market Intelligence",
      "Revenue Operations & GTM Analytics",
    ],
  },
];

export const education = [
  {
    school: "Northeastern University",
    degree: "M.S. Business Analytics",
    period: "December 2024",
    location: "Boston, MA",
  },
  {
    school: "Sydenham College of Commerce & Economics",
    degree: "Bachelor of Management Studies",
    period: "April 2022",
    location: "Mumbai, India",
  },
];

// Featured portfolio projects. Live demos are served from public/projects/<slug>/.
export const projects = [
  {
    id: "rack-report",
    name: "The Rack Report",
    eyebrow: "Data Center Intelligence",
    tagline: "The U.S. data center buildout, tracked in one place.",
    description:
      "A live news and project intelligence site for U.S. data centers. It pulls public news every three hours and turns it into a searchable newsroom, a map of curated and detected project sites, and a company tracker, covering new campuses, construction, power deals, land buys and local votes.",
    features: [
      "Newsroom of headlines from 500+ outlets, refreshed every three hours",
      "Project Atlas: map of curated and detected data center sites",
      "Company tracker ranked by headline mentions",
      "Live KPIs: weekly headlines, new projects, active states, MW announced",
      "Ten-module learning track on power, cooling and GPU infrastructure",
    ],
    tech: ["Automated news pipeline", "Project detection", "Interactive mapping", "Data visualization", "GitHub Pages"],
    badge: "Live product",
    demo: "https://therackreport.org/",
    github: null,
    image: "rackreport",
  },
  {
    id: "buildsignal",
    name: "BuildSignal",
    eyebrow: "Construction Intelligence",
    tagline: "Turning public building permits into commercial insight.",
    description:
      "An interactive construction intelligence dashboard built on 300 real building permits from Chicago and NYC open data. A Python pipeline normalises the raw records, and a documented scoring model ranks each permit by its potential relevance to building-system suppliers.",
    features: [
      "Executive dashboard with KPIs, area, category and score-distribution charts",
      "Searchable, sortable permit explorer with filters and CSV export",
      "Rule-based opportunity score (0–100) with a per-factor explanation",
      "Company directory taken from permit records; personal names withheld",
      "Bookmarked watchlist, deep links and a dark/light theme",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "Python", "Socrata Open Data"],
    badge: "Real public data",
    demo: "/projects/buildsignal/",
    github: null, // set to "https://github.com/awigaikwad02/buildsignal" once the repo is public
    image: "buildsignal",
  },
  {
    id: "notecraft-ai",
    name: "NoteCraft AI",
    eyebrow: "AI Study Notes",
    tagline: "Turn complex study material into notes you'll actually understand.",
    description:
      "A learning app that organises PDFs and photos of printed pages into structured notes, flashcards and quizzes. PDF.js and Tesseract OCR run entirely in the browser with no API or backend, and the sample files open prepared demo notes instantly.",
    features: [
      "PDF text extraction and on-device OCR for JPG/PNG pages",
      "Source-based organiser: headings, key terms, definitions and passages with page references",
      "Notes reader with three note styles, reading progress and a chapter sidebar",
      "3D flip flashcards (Known / Needs review) and scored quizzes",
      "Formatted PDF and Markdown export",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "PDF.js", "Tesseract.js", "jsPDF"],
    badge: "Runs in your browser",
    demo: "/projects/notecraft-ai/",
    github: null, // set to "https://github.com/awigaikwad02/notecraft-ai" once the repo is public
    image: "notecraft",
  },
];
