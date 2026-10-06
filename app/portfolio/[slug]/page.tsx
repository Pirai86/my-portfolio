import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Code2, ExternalLink } from "lucide-react";
import SiteHeader from "@/app/component/site-header";
import FooterSection from "@/app/sections/footerSection";
import ProjectMediaPlayer from "@/app/component/project-media";
import JsonLd from "@/app/component/json-ld";
import Container from "@/app/component/container";
import { getProjectBySlug, portfolio_gridList } from "@/app/data/data";
import { SITE_NAME, getProjectJsonLd } from "@/app/lib/site";

export function generateStaticParams() {
  return portfolio_gridList.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found", robots: { index: false } };
  }

  const url = `/portfolio/${slug}`;
  const ogImages =
    project.media?.kind === "youtube"
      ? [
          {
            url: `https://img.youtube.com/vi/${project.media.videoId}/maxresdefault.jpg`,
            alt: project.title,
          },
        ]
      : project.media?.kind === "image"
        ? [{ url: project.media.src, alt: project.media.alt }]
        : project.media?.kind === "video" && project.media.poster
          ? [{ url: project.media.poster, alt: project.title }]
          : undefined;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: project.title,
      description: project.description,
      authors: [SITE_NAME],
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = portfolio_gridList.findIndex((item) => item.slug === slug);
  const previous = index > 0 ? portfolio_gridList[index - 1] : null;
  const next =
    index < portfolio_gridList.length - 1
      ? portfolio_gridList[index + 1]
      : null;

  const jsonLd = getProjectJsonLd(slug);

  const facts = [
    { label: "Company", value: project.company },
    { label: "Timeline", value: project.period },
    project.role ? { label: "Role", value: project.role } : null,
    project.team ? { label: "Team", value: project.team } : null,
    project.impact ? { label: "Impact", value: project.impact } : null,
  ].filter((fact): fact is { label: string; value: string } => fact !== null);

  return (
    <>
      {jsonLd ? <JsonLd data={jsonLd} /> : null}
      <SiteHeader />
      <main id="main-content" className="flex-1 bg-white">
        <Container>
          <article className="mx-auto max-w-3xl py-12 lg:py-16">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-black"
            >
              <ArrowLeft size={16} />
              Back to all work
            </Link>

            <header className="animate-fade-up mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                {project.company}
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-black sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                {project.description}
              </p>

              {project.links ? (
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-black underline-offset-4 hover:underline"
                    >
                      <ExternalLink size={15} />
                      View live site
                    </a>
                  ) : null}
                  {project.links.source ? (
                    <a
                      href={project.links.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-black underline-offset-4 hover:underline"
                    >
                      <Code2 size={15} />
                      Source code
                    </a>
                  ) : null}
                </div>
              ) : null}
            </header>

            <dl className="animate-fade-up mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-gray-200 py-6 sm:grid-cols-3 [animation-delay:80ms]">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {fact.label}
                  </dt>
                  <dd
                    className={`mt-1 text-sm font-medium ${
                      fact.label === "Impact"
                        ? "text-accent-strong"
                        : "text-black"
                    }`}
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
              <div className="col-span-2 sm:col-span-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Stack
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-gray-200 px-2.5 py-1 text-xs text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            {project.media ? (
              <div className="animate-fade-up mt-10 overflow-hidden border border-gray-200 bg-black [animation-delay:160ms]">
                <ProjectMediaPlayer
                  media={project.media}
                  title={project.title}
                  variant="article"
                />
              </div>
            ) : null}

            <div className="animate-fade-up mt-12 [animation-delay:220ms]">
              {project.article ? (
                <div className="space-y-6">
                  {project.article.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-gray-700 sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <ul className="space-y-5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="border-l-2 border-accent pl-5 text-base leading-8 text-gray-700 sm:text-lg"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <nav
              aria-label="More projects"
              className="mt-16 grid gap-4 border-t border-gray-200 pt-8 sm:grid-cols-2"
            >
              {previous ? (
                <Link
                  href={`/portfolio/${previous.slug}`}
                  className="group flex flex-col gap-1 border border-gray-200 p-5 transition-colors hover:border-gray-900"
                >
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-gray-500">
                    <ArrowLeft
                      size={12}
                      className="transition-transform group-hover:-translate-x-0.5"
                    />
                    Previous
                  </span>
                  <span className="font-semibold text-black">
                    {previous.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/portfolio/${next.slug}`}
                  className="group flex flex-col gap-1 border border-gray-200 p-5 text-right transition-colors hover:border-gray-900 sm:items-end"
                >
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-gray-500">
                    Next
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                  <span className="font-semibold text-black">{next.title}</span>
                </Link>
              ) : null}
            </nav>
          </article>
        </Container>
      </main>
      <FooterSection />
    </>
  );
}
