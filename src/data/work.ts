export type LinkDef = {
  repoUrl: string | null;
  demoUrl: string | null;
};

export type WorkType = "Internship" | "Hackathon" | "Project";
export type WorkTier = "selected" | "archive";

export type WorkItem = {
  id: string;
  title: string;
  type: WorkType;
  category: string;
  tier: WorkTier;
  period: string;
  role: string;
  organization?: string;
  location?: string;
  problem: string;
  contribution: string;
  stack: string[];
  links: LinkDef;
  image: string;
};

const privateLinks: LinkDef = { repoUrl: null, demoUrl: null };
const repoLinks = {
  snmpSupervision: {
    repoUrl: "https://github.com/aya-jabbari/snmp-supervision",
    demoUrl: null,
  },
  insuranceDoc: {
    repoUrl: "https://github.com/aya-jabbari/insurance-doc",
    demoUrl: null,
  },
  swappify: {
    repoUrl: "https://github.com/aya-jabbari/swappify-learning-matcher",
    demoUrl: null,
  },
  technicalSupportChatbot: {
    repoUrl: "https://github.com/aya-jabbari/technical-support-chatbot",
    demoUrl: null,
  },
  miniCicdApi: {
    repoUrl: "https://github.com/aya-jabbari/mini-cicd-api",
    demoUrl: null,
  },
};

export const selectedWorkOrder = [
  "wed3v-ocr-pipeline",
  "onda-snmp-dashboard",
  "rallyia-financial-automation",
  "smart-assurance-validator",
  "cnss-ai-file-analysis",
  "hacknation-negotiation-agent",
  "roomy-housing-match",
  "swapify-learning-platform",
  "intelligent-chatbot",
  "cicd-pipeline",
  "kubeflask-local",
  "sncf-data-analysis-bi",
];

export const archiveWorkOrder = [
  "movie-recommendation",
  "ai-image-generation",
  "cafe-management",
];

export const workItems: WorkItem[] = [
  {
    id: "wed3v-ocr-pipeline",
    title: "OCR Data Extraction Pipeline",
    type: "Internship",
    category: "AI",
    tier: "selected",
    period: "Jul 2026 – Sep 2026",
    role: "Software & AI Intern",
    organization: "WED3V",
    location: "Fès, Morocco",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    stack: ["Python", "OCR", "Front-end", "Back-end"],
    problem:
      "Technical drawings and structured information had to be extracted and validated manually, which was slow and error-prone.",
    contribution:
      "Designed and integrated an OCR-based automated data extraction pipeline for technical drawings, implemented validation, consistency checks and traceability mechanisms, and contributed to front-end and back-end features and deployment infrastructure.",
  },
  {
    id: "onda-snmp-dashboard",
    title: "ONDA SNMP Network Monitoring Dashboard",
    type: "Internship",
    category: "Full-Stack",
    tier: "selected",
    period: "July 2025",
    role: "IT Intern",
    organization: "Office National Des Aéroports (ONDA)",
    location: "Fès, Morocco",
    links: repoLinks.snmpSupervision,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    stack: ["PHP", "SNMP", "JavaScript", "HTML", "CSS"],
    problem:
      "Manual switch checks for health and port status were slow and error-prone.",
    contribution:
      "Built a browser-based SNMP dashboard with real-time monitoring views, infrastructure health tracking, port state reporting, and alert visibility.",
  },
  {
    id: "smart-assurance-validator",
    title: "Smart Assurance Validator",
    type: "Hackathon",
    category: "AI",
    tier: "selected",
    period: "January 2026",
    role: "Built AI document workflow",
    organization: "Capgemini Hackathon",
    links: repoLinks.insuranceDoc,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    stack: ["Python", "PDF parsing", "Image analysis", "Anomaly detection"],
    problem:
      "Automatically validate insurance files from PDF and image documents.",
    contribution:
      "Designed a validation workflow that extracts data, checks cross-document consistency, flags anomalies, and routes uncertain cases to human review.",
  },
  {
    id: "rallyia-financial-automation",
    title: "RallyIA: Municipal Financial Report Automation",
    type: "Hackathon",
    category: "Data/BI",
    tier: "selected",
    period: "June 2026",
    role: "Built automated data-processing workflow",
    organization: "RallyIA · AI Hackathon",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    stack: ["Python", "Data Extraction", "Validation"],
    problem:
      "Analyzing municipal financial reports took up to 7 days, slowing down decision-making.",
    contribution:
      "Built an automated financial-document processing pipeline with extraction, consistency checks and structured reporting, reducing analysis time from 7 days to under 3 minutes.",
  },
  {
    id: "cnss-ai-file-analysis",
    title: "CNSS AI File Analysis System",
    type: "Hackathon",
    category: "AI",
    tier: "selected",
    period: "March 2026",
    role: "Built AI document workflow",
    organization: "Ramadan AI Hackathon · Ministry of Digital Transition",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    stack: ["Python", "OCR", "Document extraction", "Validation rules"],
    problem:
      "Automate CNSS file analysis and validation across structured, unstructured, scanned, and handwritten documents.",
    contribution:
      "Designed a document-processing workflow with date validation, anomaly detection, and intelligent extraction to reduce manual processing and improve reliability.",
  },
  {
    id: "hacknation-negotiation-agent",
    title: "AI Negotiation Agent",
    type: "Hackathon",
    category: "AI",
    tier: "selected",
    period: "July 2026",
    role: "Designed AI negotiation workflow",
    organization: "HackNation",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    stack: ["AI Agents", "Extraction", "Comparative Reporting"],
    problem:
      "Comparing suppliers manually slowed down sourcing and purchasing decisions.",
    contribution:
      "Designed an AI-driven supplier outreach, extraction, and negotiation workflow with comparative reporting to support faster decisions.",
  },
  {
    id: "roomy-housing-match",
    title: "Roomy: Student Housing Matching",
    type: "Hackathon",
    category: "Full-Stack",
    tier: "selected",
    period: "2026",
    role: "Finalist",
    organization: "CICSIC",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    stack: ["Python", "Matching Algorithm"],
    problem:
      "Students needed a reliable way to find compatible roommates based on real preferences.",
    contribution:
      "Developed an intelligent matching algorithm pairing students according to preferences, budget and lifestyle habits. Finalist at CICSIC 2026.",
  },
  {
    id: "swapify-learning-platform",
    title: "Swapify Learning Platform",
    type: "Project",
    category: "Full-Stack",
    tier: "selected",
    period: "2025",
    role: "Built peer-to-peer learning platform",
    links: repoLinks.swappify,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    stack: ["React", "Laravel", "REST APIs", "MySQL"],
    problem:
      "Learners needed a structured way to find peer educators with complementary skills.",
    contribution:
      "Connected learners through skill-based matching, profiles, requests, messaging, and rating flows for peer-to-peer education.",
  },
  {
    id: "intelligent-chatbot",
    title: "Intelligent Chatbot",
    type: "Project",
    category: "Backend",
    tier: "selected",
    period: "2025",
    role: "Built Spring Boot backend",
    links: repoLinks.technicalSupportChatbot,
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop",
    stack: ["Java", "Spring Boot", "JSON", "REST APIs"],
    problem:
      "Tech support agents spent too much time on repetitive triage flows.",
    contribution:
      "Turned repeated support decisions into structured Spring Boot flows backed by JSON troubleshooting logic.",
  },
  {
    id: "cicd-pipeline",
    title: "CI/CD Pipeline",
    type: "Project",
    category: "DevOps",
    tier: "selected",
    period: "2025",
    role: "Built CI/CD pipeline",
    links: repoLinks.miniCicdApi,
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
    stack: ["GitHub Actions", "Terraform", "Ansible"],
    problem:
      "Manual code delivery slowed down reliable testing and staging deployments.",
    contribution:
      "Automated the build, test, and deploy cycle with GitHub Actions, provisioned infrastructure with Terraform, and handled remote deployment with Ansible.",
  },
  {
    id: "kubeflask-local",
    title: "KubeFlask Local",
    type: "Project",
    category: "DevOps",
    tier: "selected",
    period: "2025",
    role: "Built Kubernetes deployment",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop",
    stack: ["Flask", "Docker", "Kubernetes", "Minikube", "YAML"],
    problem:
      "Needed a repeatable reference for running multi-container services locally.",
    contribution:
      "Created a local deployment reference for containerized Flask services, Kubernetes resources, and Minikube exposure.",
  },
  {
    id: "sncf-data-analysis-bi",
    title: "SNCF Data Analysis / BI",
    type: "Project",
    category: "Data/BI",
    tier: "selected",
    period: "2025",
    role: "Built ETL pipeline",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    stack: ["Talend ETL", "Power BI", "Data Modeling"],
    problem:
      "Raw transit data lacked clear reporting interfaces for business intelligence.",
    contribution:
      "Modeled and transformed operational datasets to support visual dashboards for rapid insights.",
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation",
    type: "Project",
    category: "Databases",
    tier: "archive",
    period: "2025",
    role: "Built graph-based recommender",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    stack: ["Python", "Collaborative Filtering", "scikit-learn"],
    problem:
      "Users needed personalized content suggestions based on past interactions.",
    contribution:
      "Built a recommendation script using collaborative filtering techniques to predict user ratings.",
  },
  {
    id: "ai-image-generation",
    title: "AI Image Generation",
    type: "Project",
    category: "AI",
    tier: "archive",
    period: "2025",
    role: "Built generative-image pipeline",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    stack: ["Python", "Stable Diffusion", "Hugging Face"],
    problem: "Exploration of prompt-based image generation workflows.",
    contribution:
      "Wrote inference scripts to generate assets using pre-trained diffusion models.",
  },
  {
    id: "cafe-management",
    title: "Café Management",
    type: "Project",
    category: "Desktop",
    tier: "archive",
    period: "2024",
    role: "Built WinForms desktop app",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop",
    stack: ["C#", "WinForms", "SQL Server"],
    problem: "Small shops relied on paper tracking for orders and billing.",
    contribution:
      "Developed a desktop client to handle active tables, simple menus, and receipt tracking.",
  },
];
