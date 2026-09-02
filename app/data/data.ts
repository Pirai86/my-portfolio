import { gridListType } from "@/app/component/filter-component";

export const skill_filter_list = [
  "All",
  "Frameworks",
  "Databases",
  "Programming Language",
  "Cloud",
  "Tools",
];

export const skill_gridList: gridListType[] = [
  {
    id: 1,
    name: "React",
    level_tag: "Proficient",
    level_tag_color: "green",
    icon: "/react.svg",
    skill_category: "Frameworks",
  },
  {
    id: 2,
    name: "Next JS",
    level_tag: "Proficient",
    level_tag_color: "green",
    icon: "/next-js.svg",
    skill_category: "Frameworks",
  },
  {
    id: 3,
    name: "FastAPI",
    level_tag: "Advanced",
    level_tag_color: "red",
    icon: "/FastAPI.svg",
    skill_category: "Frameworks",
  },
  {
    id: 4,
    name: "PostgreSQL",
    level_tag: "Intermediate",
    level_tag_color: "orange",
    icon: "/postgresql.svg",
    skill_category: "Databases",
  },
  {
    id: 5,
    name: "MongoDB",
    level_tag: "Intermediate",
    level_tag_color: "orange",
    icon: "/mongodb.svg",
    skill_category: "Databases",
  },
  {
    id: 6,
    name: "Python",
    level_tag: "Advanced",
    level_tag_color: "red",
    icon: "/python.svg",
    skill_category: "Prog_lang",
  },
  {
    id: 7,
    name: "TypeScript",
    level_tag: "Proficient",
    level_tag_color: "green",
    icon: "/typescript.svg",
    skill_category: "Prog_lang",
  },
  {
    id: 8,
    name: "JavaScript",
    level_tag: "Proficient",
    level_tag_color: "green",
    icon: "/javascript.svg",
    skill_category: "Prog_lang",
  },
  {
    id: 9,
    name: "Amazon Web Service",
    level_tag: "Basic",
    level_tag_color: "blue",
    icon: "/aws.svg",
    skill_category: "Cloud",
  },
  {
    id: 10,
    name: "Linux",
    level_tag: "Basic",
    level_tag_color: "blue",
    icon: "/linux-tux.svg",
    skill_category: "Tools",
  },
  {
    id: 11,
    name: "Docker",
    level_tag: "Basic",
    level_tag_color: "blue",
    icon: "/docker.svg",
    skill_category: "Tools",
  },
  {
    id: 12,
    name: "Github",
    level_tag: "Intermediate",
    level_tag_color: "orange",
    icon: "/github.svg",
    skill_category: "Tools",
  },
];

export type ProjectMedia =
  | { kind: "video"; src: string; mime: string }
  | { kind: "image"; src: string; alt: string }
  | { kind: "youtube"; videoId: string };

export type PortfolioProject = {
  id: number;
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  article?: string[];
  tags: string[];
  impact?: string;
  media?: ProjectMedia;
};

export const portfolio_filter_list = [
  "All",
  "AppGrape",
  "GrepBio",
  "Renault Nissan",
];

export const portfolio_gridList: PortfolioProject[] = [
  {
    id: 1,
    slug: "high-performance-e-commerce-platform",
    title: "High-performance e-commerce platform",
    company: "AppGrape",
    period: "Oct 2025 — Present",
    description:
      "Customer-facing store for a US B2B medical-instrument client, with inventory analytics, asset management, and payment checkout.",
    highlights: [
      "Built a customer-facing e-commerce application for a US-based B2B client selling specialised medical instruments.",
      "Designed a PostgreSQL schema to manage nested attributes and image assets in Supabase.",
      "Built an optimised Next.js frontend for page-load performance, integrated payment gateways, and a backstore dashboard for inventory and sales analytics.",
    ],
    article: [
      "When this client was smaller, their catalog lived in Airtable. That was enough until the company started to grow. Database cost rose quickly, and day-to-day management got painful, so they asked for a custom e-commerce platform built from scratch — a system they could run and extend without paying an exploding third-party data bill.",
      "I built the customer-facing store for this US B2B seller of specialised medical instruments, plus a backstore for inventory and sales analytics. Checkout uses PayPal because the company is US-based. The live catalog is 50+ products. Order size ranges from a few lines to bulk purchases in the hundreds, depending on the customer. Staff who add or edit products sign in with issued credentials; that backstore is protected with multi-factor authentication.",
      "The hardest part was the product schema itself. Each item has attributes, and variants are mapped from combinations of those attributes. Images are often mapped to color so the correct photo appears when a shopper selects a swatch. That model sits in PostgreSQL, with nested attributes and image assets in Supabase, behind a Next.js storefront tuned for page-load performance.",
    ],
    tags: ["Next.js", "PostgreSQL", "Supabase", "Payments"],
    media: {
      kind: "video",
      src: "/e-commerce.mov",
      mime: "video/quicktime",
    },
  },
  {
    id: 2,
    slug: "appgrape-business-erp",
    title: "AppGrape Business ERP",
    company: "AppGrape",
    period: "Oct 2025 — Present",
    description:
      "Five-module ERP — booking, CRM, inventory, accounts, and biometric payroll — that cut operations time by 50% for a real-estate developer.",
    highlights: [
      "Executed a unified, PostgreSQL-backed ERP suite with five interconnected modules (Booking, CRM, Inventory, Accounts, and Biometric Payroll) for a real-estate developer, accelerating operations time by 50%.",
      "Engineered an automated omnichannel CRM that aggregates leads from Housing.com, 99acres, and Instagram Ads, with automated messaging through WhatsApp Business API integration, reducing lead slippage by 30%.",
      "Key features included a management intelligence system, dynamic PDF agreement generation, and automated payroll from biometric data, eliminating 40 hours of manual data entry per week.",
    ],
    article: [
      "This ERP was built for a real-estate construction company that needed one place to manage customers and sales, and to automate work they had been doing by hand for years. It is a system for that builder, not a multi-builder marketplace. Every module is assembled from AppGrape UI, the component library I designed, so the product looks and behaves as one dashboard.",
      "The suite has five connected modules: Booking, CRM, Inventory, Accounts, and Biometric Payroll. Together they cut operations time by about 50%. CRM pulls leads from Housing.com, 99acres, and Instagram Ads, then follows up through the WhatsApp Business API, which cut lead slippage by about 30%.",
      "When a unit is booked, the app generates the customer agreement automatically. I wrote a Python base template and fill in the buyer name and the plot. That file used to be assembled manually; it now goes straight to the builder’s customers on WhatsApp, using an integration I built.",
      "Payroll starts from biometric data produced by a third-party application the company already owned. We take an Excel export, mark present and absent, and feed payroll. That removed about 40 hours of manual data entry each week.",
    ],
    tags: ["PostgreSQL", "CRM", "WhatsApp API", "Automation"],
    impact: "50% faster operations",
    media: { kind: "youtube", videoId: "beqTKKTOWZ0" },
  },
  {
    id: 3,
    slug: "geolocation-tracker",
    title: "Geolocation tracker",
    company: "AppGrape",
    period: "Oct 2025 — Present",
    description:
      "War-room dashboard that turns workforce GPS into a live heatmap, with PostgreSQL aggregates and Azure Functions for real-time queries.",
    highlights: [
      "Built a dynamic war-room dashboard that translates workers’ geolocation data into an interactive visual heatmap by connecting to Azure Functions.",
      "Set up aggregate functions and triggers in Supabase (PostgreSQL) for efficient querying, giving management a real-time spatial overview of workforce distribution.",
    ],
    article: [
      "The geolocation tracker was built for the Sun Valley Conference in Idaho, a seven-day event where attendees can bring children. The organisers hire sitters for that week and needed a live picture of where every sitter was at all times.",
      "A third-party tracking application supplied latitude and longitude through its APIs. An Azure edge function pulled those points every five minutes. We stored them in Airtable and kept Supabase as a backup. The pipeline only runs between 6am and 11pm, which is also enforced in Azure, so we are not collecting overnight.",
      "The war-room dashboard turns those points into an interactive heatmap so staff can see sitter distribution in real time. Writing rows to the database was straightforward. Building the heatmap was not — it was new ground and used Leaflet and Mapbox, both open source. Aggregate queries and triggers in Supabase (PostgreSQL) keep the map cheap to refresh while the conference is running.",
    ],
    tags: ["React", "Azure", "PostgreSQL", "Supabase"],
  },
  {
    id: 4,
    slug: "react-component-library-and-studio",
    title: "React component library and studio",
    company: "AppGrape",
    period: "Oct 2025 — Present",
    description:
      "Multi-tenant dashboard builder and React/TypeScript UI kit with row-level security and direct PostgreSQL access, no ORM in the middle.",
    highlights: [
      "Created a proprietary, multi-tenant dashboard builder and modular React/TypeScript UI library — tabs, containers, grids, charts, lists, cards, and metrics — offering enterprise clients customisable data views with strict data isolation.",
      "Engineered the library to connect directly to PostgreSQL via API keys without an intermediary ORM for maximum query performance.",
      "Delivered an instant admin dashboard with built-in security, offering clients differential policies and row-level security.",
    ],
    article: [
      "AppGrape Studio is a dashboard builder. Clients — and our own team — compose screens from AppGrape UI, the widget library I created. It is both an internal studio and a product clients log into to build their own views.",
      "The library is a modular React/TypeScript kit: tabs, containers, grids, charts, lists, cards, and metrics. The widgets used most in practice are tables, tab containers, pie charts, bar charts, and lists. It talks to PostgreSQL directly through API keys, with no ORM in the middle, so queries stay fast. Tenant isolation is enforced with Postgres row-level security. An instant admin dashboard ships with the kit so each client can keep different access policies on the same codebase.",
      "AppGrape Business ERP sits on this library because it is a dashboard. EchoDolphin does not — it is a macOS app with its own stack. The e-commerce site also has its own UI and does not use Studio.",
    ],
    tags: ["React", "TypeScript", "PostgreSQL", "Multi-tenant"],
    media: { kind: "youtube", videoId: "NPQ5I8WnZ5Y" },
  },
  {
    id: 5,
    slug: "echodolphin",
    title: "EchoDolphin",
    company: "AppGrape",
    period: "Oct 2024 — Sep 2025",
    description:
      "On-device macOS app for video transcription and subtitle styling, plus a React storefront with Razorpay and PayPal checkout.",
    highlights: [
      "Created a video transcription and subtitle styling macOS application using SwiftUI and Xcode that integrates the WhisperKit AI model to perform localised transcription directly on the user’s machine.",
      "Built motion graphics in Apple Motion for pre-styled fonts, enabling users to generate and spatially position custom styled subtitles.",
      "Designed and deployed the product website using React/TypeScript, integrating Razorpay and PayPal payment gateways.",
    ],
    article: [
      "EchoDolphin is a macOS plugin built exclusively for Final Cut Pro. FCP ships on the Mac and is what most macOS video editors already use, but it had no automated captions and no way to style them. Editors were jumping to a third-party tool, uploading video or audio, downloading an SRT, and importing that file back into FCP. We built a plugin so they never leave the editor.",
      "Transcription runs on-device through WhisperKit. There is no cloud API, so there is no token bill and no server to pay for — the model runs on the user’s machine. That also made a one-time download possible instead of a metered subscription. More than 400 people have used it, across continents. The product site is React/TypeScript with Razorpay and PayPal checkout.",
      "The UI asks the user to drag and drop a video or audio file and to pick caption styling up front, so they do not restyle after the transcript comes back. WhisperKit returns the text; we stylize it with Apple Motion presets and add it to the FCP project. A screen preview in the UI lets them place subtitles on the frame before they commit.",
    ],
    tags: ["SwiftUI", "WhisperKit", "React", "macOS"],
    impact: "400+ users",
    media: {
      kind: "image",
      src: "/echodolphin.avif",
      alt: "EchoDolphin macOS application",
    },
  },
  {
    id: 6,
    slug: "data-analysis-dashboard",
    title: "Data analysis dashboard",
    company: "GrepBio",
    period: "Oct 2024 — Sep 2025",
    description:
      "Customer portal for 20,000+ point plots and 50GB+ file transfers, with MFA, D3.js views, and on-demand report generation.",
    highlights: [
      "Architected a customer-facing web portal for heavy data analyses (more than 20,000 data points per plot) and large-file (more than 50 GB) transfers with multi-factor authentication, user authorisation, and on-demand report generation (Jinja2, LaTeX) using React/TypeScript, MongoDB, and FastAPI.",
      "Engineered dynamic cross-component UI interactions, where selecting a single data point in a volcano plot instantly updates dependent table, heatmap, and custom D3.js elastic network views.",
      "Achieved millisecond-range page load times by optimising frontend rendering with lazy loading, pagination, and image optimizations.",
    ],
    article: [
      "This portal is for RNA-seq. The people who log in are scientists, research scholars, and PhD students — more than 100 active users. A single biological input can be around 50GB, so the first problem was getting the file onto the server at all. We used an efficient file-transfer protocol to upload it, then built the visual dashboard on top of that data.",
      "Each point on the volcano plot is a gene. The table (and related views) hold the same gene set. Clicking a point highlights the matching row so the scientist can read a detailed description of that gene without hunting for it. Selecting a point also drives the heatmap and a custom D3.js elastic network, so one click keeps the whole screen in sync.",
      "Plots can exceed 20,000 points. After the first load we keep the dataset in memory with React’s useMemo so the UI does not refetch unless new data appears, which is rare. The stack is React/TypeScript, FastAPI, and MongoDB, with MFA on the way in and on-demand reports generated through Jinja2 and LaTeX.",
    ],
    tags: ["React", "FastAPI", "MongoDB", "D3.js"],
    impact: "100+ active users",
    media: {
      kind: "video",
      src: "/rBoard_demo.mp4",
      mime: "video/mp4",
    },
  },
  {
    id: 7,
    slug: "migration-automation-tool",
    title: "Migration automation tool",
    company: "Renault Nissan",
    period: "Solo initiative",
    description:
      "Python tool that flagged unhandled pointers, missing checks, and deprecated APIs, becoming a lasting team standard after I left.",
    highlights: [
      "Identified manual bottlenecks in the team’s code review process and independently designed a Best Practices Tool using Python and Excel to streamline the migration.",
      "Engineered the tool to perform search and filtering with automated recursive parsing of API documentation, to catch unhandled pointers, enforce boolean checks, and perform file I/O.",
      "Accelerated the team’s migration speed by 4×, reduced human error by suggesting alternates for deprecated APIs, and left a tool that remains actively deployed after my departure.",
    ],
    article: [
      "Before this tool existed I was on the team moving our C++ codebase from CATIA V6 to 3DEXPERIENCE. The new platform came with breaking changes: new APIs and a long list of deprecated ones. Dassault Systèmes published a large documentation set for the swap. Developers were finding deprecated calls by hand, searching that document for the replacement, and rewriting the code — slow, easy to miss, and easy to get wrong.",
      "I built a Best Practice Tool in Python to take over that hunt. It takes an Excel sheet of APIs and their alternatives as input, walks the project directory you point it at, and searches for those APIs. When it finds a match it writes the hit to an output file, including the suggested replacement. It also logs unhandled pointers in the same report.",
      "That turned a manual documentation crawl into a pass over the tree. Migration work sped up by about 4×, and the tool stayed in use after I left.",
    ],
    tags: ["Python", "Automation"],
    impact: "4× faster migration",
  },
  {
    id: 8,
    slug: "cpp-application-migration-to-3dexperience",
    title: "C++ codebase migration to 3DEXPERIENCE",
    company: "Renault Nissan",
    period: "Jan 2021 — Sep 2024",
    description:
      "Team of six migrating 100,000+ lines of C++ from CATIA V6 so the codebase would run correctly inside Dassault’s 3DEXPERIENCE platform.",
    highlights: [
      "Spearheaded the large-scale, mission-critical migration of an internal C++ application (100,000+ lines of code) from a legacy V6 environment to the modern 3DEXPERIENCE platform.",
      "Systematically refactored legacy code by identifying and replacing deprecated APIs, integrating newer platform features, and ensuring interoperability with dependent external applications.",
    ],
    article: [
      "This was not a product we shipped. It was a migration task. I was one of six engineers moving a 100,000+ line C++ codebase off CATIA V6 so it would run inside 3DEXPERIENCE, Dassault Systèmes’ third-party platform. The outcome was simple to state and hard to finish: the migrated code had to work in that application.",
      "3DEXPERIENCE was not a drop-in upgrade. It came with breaking changes — new APIs, deprecated APIs, and a large documentation set from Dassault. The team replaced calls, adjusted UI customisation for the new environment, wired in newer platform features, and kept dependent external applications talking to the same codebase. Developers were doing a lot of that lookup by hand until the Best Practice Tool (a separate write-up) started flagging deprecated APIs and unhandled pointers automatically.",
      "The work ran from 2021 through 2024. Success was not a new app with a login screen. Success was the existing engineering codebase compiling, behaving, and staying interoperable on the platform Renault Nissan had moved to.",
    ],
    tags: ["C++", "3DEXPERIENCE", "Migration"],
  },
];

export function getProjectBySlug(slug: string) {
  return portfolio_gridList.find((project) => project.slug === slug);
}
