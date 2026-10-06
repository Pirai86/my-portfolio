"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink, Play } from "lucide-react";
import FilterBar from "@/app/component/filter-bar";
import {
  portfolio_filter_list,
  portfolio_gridList,
  projectThumbnail,
} from "@/app/data/data";
import { mediaLabel } from "@/app/component/project-media";

export default function PortfolioGrid() {
  const [filter, setFilter] = useState(portfolio_filter_list[0].value);

  const projects = useMemo(() => {
    if (filter === "all") return portfolio_gridList;
    return portfolio_gridList.filter((project) => project.company === filter);
  }, [filter]);

  return (
    <>
      <FilterBar
        label="Filter projects by company"
        options={portfolio_filter_list}
        value={filter}
        onChange={setFilter}
      />

      <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const thumbnail = projectThumbnail(project);
          const label = mediaLabel(project.media);
          const href = `/portfolio/${project.slug}`;

          return (
            <li
              key={project.id}
            >
              <article className="group relative flex h-full flex-col border border-gray-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gray-900 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]">
                <Link
                  href={href}
                  className="relative block aspect-[16/9] overflow-hidden border-b border-gray-200 bg-gray-900"
                  aria-label={`${project.title} - read the case study`}
                >
                  {thumbnail ? (
                    <Image
                      src={thumbnail}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 480px, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#1f2937,#000)] px-8 text-center">
                      <span className="text-lg font-semibold tracking-tight text-gray-300">
                        {project.title}
                      </span>
                    </div>
                  )}
                  {label ? (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                      <Play size={10} fill="currentColor" />
                      {label}
                    </span>
                  ) : null}
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-4 text-xs">
                    <p className="font-semibold uppercase tracking-widest text-gray-500">
                      {project.company}
                    </p>
                    <p className="text-gray-500">{project.period}</p>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold leading-snug text-black">
                    <Link
                      href={href}
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>

                  {project.impact ? (
                    <p className="mt-4 text-sm font-semibold text-accent-strong">
                      {project.impact}
                    </p>
                  ) : null}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-gray-200 px-2.5 py-1 text-xs text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 text-sm">
                    <span className="inline-flex items-center gap-1 font-medium text-black">
                      Read case study
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                    {project.links ? (
                      <span className="relative z-10 flex items-center gap-3">
                        {project.links.live ? (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-gray-500 hover:text-black"
                          >
                            <ExternalLink size={14} />
                            Live
                          </a>
                        ) : null}
                        {project.links.source ? (
                          <a
                            href={project.links.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-gray-500 hover:text-black"
                          >
                            <Code2 size={14} />
                            Source
                          </a>
                        ) : null}
                      </span>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}
