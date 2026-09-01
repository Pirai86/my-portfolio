"use client";

import SkillCategories from "./skill-categories";
import SkillsGrid from "./skills-grid";
import { useState } from "react";

export default function SkillComponent() {
  const [selectedSkill, setSelectedSkill] = useState("All");
  return (
    <>
      <SkillCategories
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
      />
      <SkillsGrid selectedSkill={selectedSkill} />
    </>
  );
}
