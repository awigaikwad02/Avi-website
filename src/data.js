// All site content lives here so it can be updated without touching components.

export const profile = {
  name: "Avishkar Gaikwad",
  firstName: "Avishkar",
  title: "Data Analyst II",
  company: "Honeywell Building Technologies",
  location: "Atlanta, GA",
  roles: [
    "Data Analyst II @ Honeywell",
    "Commercial Intelligence",
    "Power BI & SQL Developer",
    "Applied AI & Automation",
    "Analytics Consultant",
  ],
  tagline:
    "I turn complex business problems into scalable analytics, automated workflows and AI-driven insight that move commercial outcomes.",
  email: "gaikwad.avi@northeastern.edu",
  phone: "+1 857 200 5017",
  phoneHref: "tel:+18572005017",
  linkedin: "https://www.linkedin.com/in/avishkar-gaikwad-/",
  resume:
    "https://drive.google.com/file/d/1gte6Iy175_b8LR86H0UsXNOvBCe25bPs/view?usp=sharing",
  calendly: "https://calendly.com/gaikwad-avi/introductory-call",
};

export const about = {
  paragraphs: [
    "I'm a Data Analyst II at Honeywell Building Technologies in Atlanta with 3+ years of experience across business analytics, commercial intelligence, consulting, data engineering, BI, automation and AI.",
    "I specialize in translating business requirements into analytics solutions people actually use — from executive Power BI dashboards and standardized KPIs to agentic AI workflows that remove hours of manual research.",
    "I've worked across building automation, industrial technology, healthcare, retail, consumer products and real estate, and I own the full lifecycle: requirements, data, modeling, visualization, stakeholder buy-in and production.",
  ],
  highlights: [
    { label: "Years of experience", value: "3+" },
    { label: "Industries", value: "6" },
    { label: "Based in", value: "Atlanta" },
  ],
  strengths: [
    "Hands-on SQL, Python & BI development",
    "Commercial operations & enterprise sales",
    "Large datasets & enterprise systems",
    "Cross-functional work with IT & leadership",
    "Requirements gathering & storytelling",
    "Automation & applied AI",
    "Consulting & strategic problem-solving",
    "End-to-end ownership of initiatives",
  ],
};

// `value` is animated from 0; prefix/suffix are rendered around it.
export const impact = [
  { value: 100, prefix: "$", suffix: "M+", label: "Sales pipeline", detail: "Executive visibility through Power BI dashboards" },
  { value: 1, prefix: "$", suffix: "M+", label: "Partner framework", detail: "Salesforce-backed channel lead sharing" },
  { value: 10000, suffix: "+", label: "Construction projects", detail: "Commercial intelligence & prioritization" },
  { value: 12, label: "Market verticals", detail: "Standardized metrics & reporting" },
  { value: 15, suffix: "%", label: "Profitability lift", detail: "Product margin & pricing analysis" },
  { value: 1, suffix: "M+", label: "Sales records", detail: "Cleaned, transformed & modeled" },
  { value: 60, suffix: "%", label: "Faster preprocessing", detail: "Streamlined analytics workflows" },
  { value: 12, label: "Product pairings", detail: "Found via association rules for cross-sell" },
];

export const experience = [
  {
    id: "honeywell",
    company: "Honeywell Building Technologies",
    short: "Honeywell",
    role: "Data Analyst II",
    period: "Jan 2025 – Present",
    location: "Atlanta, GA",
    summary:
      "Commercial analytics, sales intelligence, channel partner enablement, project intelligence and AI-driven automation for Honeywell's building technology businesses.",
    groups: [
      {
        title: "Commercial Analytics & BI",
        points: [
          "Build executive Power BI dashboards tracking pipeline, revenue, forecasts and commercial KPIs.",
          "Advanced DAX for YoY, AOP variance, forecasts and row-level security.",
          "Give leadership visibility into $100M+ of pipeline across business units.",
          "Standardize metrics, definitions and data quality across 12 market verticals.",
        ],
      },
      {
        title: "Channel Partner Enablement",
        points: [
          "Architected a $1M+ channel partner lead-sharing framework on new Salesforce infrastructure.",
          "Partnered with IT, business stakeholders and SMEs to roll it out across the Americas.",
          "Built processes to identify and route relevant opportunities to partners.",
        ],
      },
      {
        title: "Project & Market Intelligence",
        points: [
          "Lead analytics over 10,000+ active construction projects across the Americas.",
          "Enrich project records and surface high-priority prospects for regional sales teams.",
        ],
      },
      {
        title: "AI & Automation",
        points: [
          "Develop agentic AI workflows for web scraping, information gathering and lead enrichment.",
          "Identify processes ripe for GenAI and turn use cases into practical solutions.",
        ],
      },
    ],
    tags: ["Power BI", "DAX", "Snowflake", "SQL Server", "Salesforce", "AI Agents"],
  },
  {
    id: "thermo",
    company: "Thermo Fisher Scientific",
    short: "Thermo Fisher",
    role: "Data Analyst – Capstone",
    period: "Sep 2024 – Dec 2024",
    location: "Boston, MA",
    summary:
      "Sales analytics, customer behavior analysis, predictive modeling and data-driven marketing.",
    groups: [
      {
        title: "Highlights",
        points: [
          "Built an interactive Tableau dashboard giving stakeholders one view of sales performance.",
          "Used association rule mining to find 12 complementary product pairings for cross-selling.",
          "Built Python + Alteryx models predicting customers likely to purchase within 30 days.",
          "Cleaned, transformed and modeled 1M+ sales records, cutting preprocessing time by 60%.",
        ],
      },
    ],
    tags: ["Tableau", "Python", "Alteryx", "Predictive Modeling"],
  },
  {
    id: "honeywell-intern",
    company: "Honeywell Building Technologies",
    short: "Honeywell (Intern)",
    role: "Analytics Intern",
    period: "May 2024 – Aug 2024",
    location: "Atlanta, GA",
    summary:
      "Financial analytics, product profitability, cost optimization and business intelligence.",
    groups: [
      {
        title: "Highlights",
        points: [
          "Ran end-to-end product margin analysis using EDW data and Alteryx.",
          "Identified pricing inefficiencies that contributed to a 15% increase in product profitability.",
          "Integrated Salesforce data to analyze non-Honeywell product costs and find savings.",
          "Built reusable reporting views and documented logic, assumptions and refresh processes.",
        ],
      },
    ],
    tags: ["Alteryx", "Salesforce", "EDW", "Financial Analytics"],
  },
  {
    id: "kpmg",
    company: "KPMG India",
    short: "KPMG",
    role: "Analyst – Advisory",
    period: "Jun 2022 – Jul 2023",
    location: "India",
    summary:
      "Business advisory engagements across consumer products, retail, healthcare and real estate.",
    groups: [
      {
        title: "Highlights",
        points: [
          "Conducted market research and competitive landscape analysis.",
          "Supported a healthcare pricing strategy engagement, evaluating performance and proposing improvements.",
          "Performed financial due diligence for a real estate transaction.",
          "Prepared findings and recommendations for senior stakeholders.",
        ],
      },
    ],
    tags: ["Consulting", "Market Research", "Due Diligence"],
  },
];

// `icon` keys are resolved in Skills.jsx.
export const skillCategories = [
  {
    id: "bi",
    name: "Analytics & BI",
    skills: [
      { name: "Power BI", icon: "powerbi", detail: "Data modeling, Power Query, advanced DAX, RLS, bookmarks, forecasting & variance analysis" },
      { name: "Tableau", icon: "tableau", detail: "Interactive dashboards, performance reporting & visual analytics" },
      { name: "Excel", icon: "excel", detail: "Advanced formulas, pivots, VBA, Power Query & reporting automation" },
      { name: "Alteryx", icon: "alteryx", detail: "Data cleansing, transformation & automated analytical workflows" },
    ],
  },
  {
    id: "data",
    name: "Data Engineering",
    skills: [
      { name: "SQL", icon: "sql", detail: "T-SQL, complex joins, CTEs, window functions & analytical queries" },
      { name: "Snowflake", icon: "snowflake", detail: "Enterprise querying & analytical datasets" },
      { name: "SQL Server", icon: "sqlserver", detail: "Relational querying & reporting datasets" },
      { name: "Salesforce", icon: "salesforce", detail: "CRM data, SOQL, sales reporting & process analysis" },
      { name: "ETL / ELT", icon: "etl", detail: "Extraction, transformation, validation & pipeline design" },
      { name: "Data Modeling", icon: "model", detail: "Relational structures, reporting models & standardized metrics" },
    ],
  },
  {
    id: "ml",
    name: "Programming & ML",
    skills: [
      { name: "Python", icon: "python", detail: "pandas, NumPy, scikit-learn, openpyxl & analytical automation" },
      { name: "R", icon: "r", detail: "Statistical programming & data analysis" },
      { name: "Predictive Analytics", icon: "predict", detail: "Purchase propensity, forecasting & ML workflows" },
      { name: "Association Rules", icon: "rules", detail: "Product affinity & cross-selling analysis" },
    ],
  },
  {
    id: "ai",
    name: "GenAI & Agents",
    skills: [
      { name: "LLMs & OpenAI API", icon: "openai", detail: "Building LLM-powered applications and workflows" },
      { name: "LangChain", icon: "chain", detail: "Chains, tools and agent orchestration" },
      { name: "Ollama", icon: "local", detail: "Locally hosted open-source language models" },
      { name: "RAG", icon: "rag", detail: "Retrieval-augmented generation with FAISS & Chroma vector stores" },
      { name: "Fine-tuning (LoRA)", icon: "tune", detail: "Parameter-efficient model fine-tuning" },
      { name: "Agentic Workflows", icon: "agent", detail: "Automated research, web scraping & lead enrichment" },
    ],
  },
  {
    id: "tools",
    name: "Platforms",
    skills: [
      { name: "Azure", icon: "azure", detail: "Microsoft cloud platform" },
      { name: "Git", icon: "git", detail: "Version control" },
      { name: "Jira", icon: "jira", detail: "Agile project tracking" },
      { name: "Microsoft 365", icon: "m365", detail: "Productivity & collaboration suite" },
    ],
  },
];

export const expertise = [
  { title: "Commercial & Sales Analytics", text: "Pipelines, opportunity identification, revenue performance, forecasting and KPI reporting." },
  { title: "Building Technologies", text: "Construction project data, sales opportunities and channel partner ecosystems." },
  { title: "Channel & Partner Enablement", text: "Lead identification and Salesforce-supported opportunity sharing with external partners." },
  { title: "Financial & Profitability", text: "Product margins, pricing inefficiencies, cost analysis and profitability improvement." },
  { title: "Consulting & Strategy", text: "Market research, competitive analysis, due diligence and executive presentations." },
  { title: "Customer & Marketing", text: "Purchase propensity, product affinity and targeted cross-sell strategies." },
  { title: "Process Automation", text: "Spotting repetitive work and replacing it with analytics or AI solutions." },
];

export const education = [
  {
    school: "Northeastern University",
    degree: "M.S. Business Analytics",
    period: "Graduated Dec 2024",
    location: "Boston, MA",
  },
  {
    school: "Sydenham College of Commerce & Economics",
    degree: "Bachelor of Management Studies, Business Administration",
    period: "Graduated Apr 2022",
    location: "Mumbai, India",
  },
];

export const lookingFor = [
  "Senior Data Analytics",
  "Business Intelligence",
  "Commercial Analytics",
  "Analytics Engineering",
  "Analytics Consulting",
  "Applied AI",
];
