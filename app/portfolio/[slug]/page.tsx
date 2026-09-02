import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/app/component/site-header";
import FooterSection from "@/app/sections/footerSection";
import ProjectMediaPlayer from "@/app/component/project-media";
import {
  getProjectBySlug,
  portfolio_gridList,
} from "@/app/data/data";

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
  if (!project) return { title: "Project · Piraisudan R" };
  return {
    title: `${project.title} · Piraisudan R`,
    description: project.description,
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

  return (
    <div className="h-screen w-full overflow-x-hidden overflow-y-scroll bg-[#f2f2f2]">
      <SiteHeader />
      <article className="mx-auto w-full max-w-3xl px-6 py-12 lg:px-0">
        <a
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-black"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </a>

        <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-gray-500">
          {project.company}
        </p>
        <p className="mt-2 text-sm text-gray-400">{project.period}</p>
        <h1 className="mt-3 text-3xl font-black text-black lg:text-4xl">
          {project.title}
        </h1>
        {project.impact ? (
          <p className="mt-4 text-sm font-medium text-amber-700">
            {project.impact}
          </p>
        ) : null}

        {project.media ? (
          <div className="mt-8 overflow-hidden border border-gray-200 bg-black">
            <ProjectMediaPlayer
              media={project.media}
              title={project.title}
              variant="article"
            />
          </div>
        ) : null}

        {project.article ? (
          <div className="mt-10 space-y-5">
            {project.article.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <>
            <p className="mt-10 text-base leading-7 text-gray-600">
              {project.description}
            </p>
            <div className="mt-8 space-y-5">
              {project.highlights.map((highlight) => (
                <p
                  key={highlight}
                  className="text-base leading-7 text-gray-700"
                >
                  {highlight}
                </p>
              ))}
            </div>
          </>
        )}

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-gray-300 bg-white px-2.5 py-1 text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
      <FooterSection />
    </div>
  );
}
