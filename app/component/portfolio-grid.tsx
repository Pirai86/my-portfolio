"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ImageIcon, Play } from "lucide-react";
import { portfolio_filter_list, portfolio_gridList } from "@/app/data/data";
import { mediaLabel } from "@/app/component/project-media";

export default function PortfolioGrid() {
  const [selectedFilter, setSelectedFilter] = useState(
    portfolio_filter_list[0],
  );

  const projects = useMemo(() => {
    if (selectedFilter === "All") return portfolio_gridList;
    return portfolio_gridList.filter(
      (project) => project.company === selectedFilter,
    );
  }, [selectedFilter]);

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2">
        {portfolio_filter_list.map((filter) => {
          const isActive = selectedFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`cursor-pointer rounded-2xl border px-3 py-0.5 text-sm transition-colors duration-200 ${
                isActive
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-black"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => {
          const label = mediaLabel(project.media);
          return (
            <article key={project.id} className="group relative">
              <Link
                href={`/portfolio/${project.slug}`}
                className="flex h-full flex-col border border-gray-200 bg-white p-6 transition-colors duration-200 hover:border-gray-900"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {project.company}
                  </p>
                  <div className="flex shrink-0 items-center gap-2">
                    {label ? (
                      <span className="inline-flex items-center gap-1 border border-gray-200 px-2 py-0.5 text-[10px] uppercase tracking-wider text-gray-500">
                        {project.media?.kind === "image" ? (
                          <ImageIcon size={11} />
                        ) : (
                          <Play size={11} />
                        )}
                        {label}
                      </span>
                    ) : null}
                    <p className="text-xs text-gray-400">{project.period}</p>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-black">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
                  {project.description}
                </p>
                {project.impact ? (
                  <p className="mt-4 text-sm font-medium text-amber-700">
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
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
}
