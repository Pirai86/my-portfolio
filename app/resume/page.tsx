import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import SiteHeader from "@/app/component/site-header";
import FooterSection from "@/app/sections/footerSection";
import Container from "@/app/component/container";
import PrintButton from "@/app/component/print-button";
import { ResumeButton } from "@/app/component/buttons";
import {
  experience_list,
  portfolio_gridList,
  skill_filter_list,
  skill_gridList,
} from "@/app/data/data";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_JOB_TITLE,
  SITE_LOCATION,
  SITE_NAME,
} from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/resume" },
};

const skillGroups = skill_filter_list
  .filter((option) => option.value !== "all")
  .map((option) => ({
    label: option.label,
    items: skill_gridList
      .filter((skill) => skill.category === option.value)
      .map((skill) => skill.name),
  }));

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1 bg-white">
        <Container>
          <article className="mx-auto max-w-3xl py-12 lg:py-16">
            <div className="print:hidden flex flex-wrap items-center gap-3">
              <PrintButton />
              {RESUME_URL ? <ResumeButton tone="light" /> : null}
            </div>

            <header className="mt-8 border-b border-gray-200 pb-8 print:mt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                {SITE_JOB_TITLE}
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-black sm:text-5xl">
                {SITE_NAME}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
                {SITE_DESCRIPTION}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
                <li>{SITE_LOCATION}</li>
                <li>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="inline-flex items-center gap-1.5 hover:text-black"
                  >
                    <Mail size={14} />
                    {SITE_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </header>

            <section className="mt-10">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Experience
              </h2>
              <ol className="mt-6 space-y-8">
                {experience_list.map((job) => (
                  <li key={job.id}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-lg font-bold text-black">
                        {job.role}
                        <span className="font-normal text-gray-500">
                          {" "}
                          · {job.company}
                        </span>
                      </h3>
                      <p className="text-sm text-gray-500">{job.period}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {job.summary}
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      {job.stack.join(" · ")}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-12">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Selected work
              </h2>
              <ul className="mt-6 space-y-6">
                {portfolio_gridList.map((project) => (
                  <li key={project.id}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-semibold text-black">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="hover:underline print:no-underline"
                        >
                          {project.title}
                        </Link>
                        <span className="font-normal text-gray-500">
                          {" "}
                          · {project.company}
                        </span>
                      </h3>
                      {project.impact ? (
                        <p className="text-sm font-medium text-accent-strong">
                          {project.impact}
                        </p>
                      ) : (
                        <p className="text-sm text-gray-500">{project.period}</p>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {project.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Skills
              </h2>
              <dl className="mt-6 space-y-3">
                {skillGroups.map((group) => (
                  <div
                    key={group.label}
                    className="grid grid-cols-[7rem_1fr] gap-4 sm:grid-cols-[9rem_1fr]"
                  >
                    <dt className="text-sm font-semibold text-black">
                      {group.label}
                    </dt>
                    <dd className="text-sm text-gray-600">
                      {group.items.join(", ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </article>
        </Container>
      </main>
      <FooterSection />
    </>
  );
}
