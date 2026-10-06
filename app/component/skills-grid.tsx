"use client";

import { useMemo, useState } from "react";
import FilterBar from "@/app/component/filter-bar";
import { skill_filter_list, skill_gridList } from "@/app/data/data";

export default function SkillsGrid() {
  const [filter, setFilter] = useState(skill_filter_list[0].value);

  const skills = useMemo(() => {
    if (filter === "all") return skill_gridList;
    return skill_gridList.filter((skill) => skill.category === filter);
  }, [filter]);

  return (
    <>
      <FilterBar
        label="Filter skills by category"
        options={skill_filter_list}
        value={filter}
        onChange={setFilter}
      />

      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="group flex items-center gap-4 border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-900 hover:shadow-sm"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface">
              <img
                src={skill.icon}
                alt=""
                width={26}
                height={26}
                className="h-[26px] w-[26px] object-contain"
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-black">
                {skill.name}
              </span>
              <span className="mt-0.5 block truncate text-xs text-gray-500">
                {skill.note}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
