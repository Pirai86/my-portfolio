import { portfolio_gridList, skill_gridList } from "@/app/data/data";

export const SITE_NAME = "Piraisudan R";
export const SITE_JOB_TITLE = "Full Stack Engineer";
export const SITE_TITLE = `${SITE_NAME} | ${SITE_JOB_TITLE}`;
export const SITE_DESCRIPTION =
  "Full stack engineer building React, TypeScript, and Next.js products — e-commerce, ERP, analytics, and internal tools. 5+ years shipping production systems.";
export const SITE_EMAIL = "piraisudan590@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/pirai86/";
export const GITHUB_URL = "https://github.com/Pirai86";
export const SITE_KEYWORDS = [
  "Piraisudan R",
  "Full Stack Engineer",
  "React",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "FastAPI",
  "portfolio",
];

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  if (path === "/" || path === "") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    jobTitle: SITE_JOB_TITLE,
    url: getSiteUrl(),
    email: SITE_EMAIL,
    image: absoluteUrl("/profile_photo.jpg"),
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [LINKEDIN_URL, GITHUB_URL],
    knowsAbout: skill_gridList.map((skill) => skill.name),
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getSiteUrl(),
    description: SITE_DESCRIPTION,
    author: {
      "@type": "Person",
      name: SITE_NAME,
    },
  };
}

export function getPortfolioItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected work",
    itemListElement: portfolio_gridList.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/portfolio/${project.slug}`),
      name: project.title,
    })),
  };
}

export function getProjectJsonLd(slug: string) {
  const project = portfolio_gridList.find((item) => item.slug === slug);
  if (!project) return null;

  const url = absoluteUrl(`/portfolio/${slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url,
      author: {
        "@type": "Person",
        name: SITE_NAME,
        url: getSiteUrl(),
      },
      keywords: project.tags.join(", "),
      about: project.company,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: getSiteUrl(),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: project.title,
          item: url,
        },
      ],
    },
  ];
}
