"use client";

import FilterCategories from "@/app/component/filter-categories";
import FilterGrid from "@/app/component/filter-grid";
import { useState } from "react";

export type gridListType = {
  id: number;
  name: string;
  level_tag: string;
  level_tag_color: string;
  icon: string;
  skill_category: string;
};

export default function FilterComponent({
  gridList,
  filterList,
}: {
  gridList: gridListType[];
  filterList: string[];
}) {
  const [selectedFilter, setSelectedFilter] = useState(filterList[0]);
  return (
    <>
      <FilterCategories
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <FilterGrid selectedFilter={selectedFilter} gridList={gridList} />
    </>
  );
}
