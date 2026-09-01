type SkillCategoriesType = {
  selectedSkill: string;
  setSelectedSkill: (value: string) => void;
};

export default function SkillCategories({
  selectedSkill,
  setSelectedSkill,
}: SkillCategoriesType) {
  return (
    <div className="mt-4 gap-2 flex shrink-0 flex-wrap">
      <button
        className={`border px-3 py-0.5 rounded-2xl cursor-pointer ${selectedSkill === "All" ? "bg-black text-white" : ""}`}
        onClick={() => setSelectedSkill("All")}
      >
        All
      </button>
      <button
        className={`border px-3 py-0.5 rounded-2xl cursor-pointer ${selectedSkill === "Frameworks" ? "bg-black text-white" : ""}`}
        onClick={() => setSelectedSkill("Frameworks")}
      >
        Frameworks
      </button>
      <button
        className={`border px-3 py-0.5 rounded-2xl cursor-pointer ${selectedSkill === "Prog_lang" ? "bg-black text-white" : ""}`}
        onClick={() => setSelectedSkill("Prog_lang")}
      >
        Programming Language
      </button>
      <button
        className={`border px-3 py-0.5 rounded-2xl cursor-pointer ${selectedSkill === "Cloud" ? "bg-black text-white" : ""}`}
        onClick={() => setSelectedSkill("Cloud")}
      >
        Cloud
      </button>
    </div>
  );
}
