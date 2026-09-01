type SkillCategoriesType = {
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
};

export default function FilterCategories({
  selectedFilter,
  setSelectedFilter,
}: SkillCategoriesType) {
  return (
    <div className="mt-4 gap-2 flex shrink-0 flex-wrap">
      <button
        className={`border px-3 py-0.5 rounded-2xl cursor-pointer ${selectedFilter === "All" ? "bg-black text-white" : ""}`}
        onClick={() => setSelectedFilter("All")}
      >
        All
      </button>
      <button
        className={`border px-3 py-0.5 rounded-2xl cursor-pointer ${selectedFilter === "Frameworks" ? "bg-black text-white" : ""}`}
        onClick={() => setSelectedFilter("Frameworks")}
      >
        Frameworks
      </button>
      <button
        className={`border px-3 py-0.5 rounded-2xl cursor-pointer ${selectedFilter === "Prog_lang" ? "bg-black text-white" : ""}`}
        onClick={() => setSelectedFilter("Prog_lang")}
      >
        Programming Language
      </button>
      <button
        className={`border px-3 py-0.5 rounded-2xl cursor-pointer ${selectedFilter === "Cloud" ? "bg-black text-white" : ""}`}
        onClick={() => setSelectedFilter("Cloud")}
      >
        Cloud
      </button>
    </div>
  );
}
