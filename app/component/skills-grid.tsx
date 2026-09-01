import Image from "next/image";

type gridListType = {
  id: number;
  name: string;
  level_tag: string;
  level_tag_color: string;
  icon: string;
  skill_category: string;
};

const gridList: gridListType[] = [
  {
    id: 1,
    name: "React",
    level_tag: "Proficient",
    level_tag_color: "green",
    icon: "/react.svg",
    skill_category: "Frameworks",
  },
  {
    id: 2,
    name: "Next JS",
    level_tag: "Proficient",
    level_tag_color: "green",
    icon: "/next-js.svg",
    skill_category: "Frameworks",
  },
  {
    id: 3,
    name: "FastAPI",
    level_tag: "Advanced",
    level_tag_color: "red",
    icon: "/FastAPI.svg",
    skill_category: "Frameworks",
  },
  {
    id: 4,
    name: "PostgreSQL",
    level_tag: "Intermediate",
    level_tag_color: "orange",
    icon: "/postgresql.svg",
    skill_category: "Frameworks",
  },
  {
    id: 5,
    name: "Python",
    level_tag: "Advanced",
    level_tag_color: "red",
    icon: "/python.svg",
    skill_category: "Prog_lang",
  },
  {
    id: 6,
    name: "TypeScript",
    level_tag: "Proficient",
    level_tag_color: "green",
    icon: "/typescript.svg",
    skill_category: "Prog_lang",
  },
  {
    id: 7,
    name: "JavaScript",
    level_tag: "Proficient",
    level_tag_color: "green",
    icon: "/javascript.svg",
    skill_category: "Prog_lang",
  },
  {
    id: 8,
    name: "Amazon Web Service",
    level_tag: "Basic",
    level_tag_color: "blue",
    icon: "/aws.svg",
    skill_category: "Cloud",
  },
];

export default function SkillsGrid({
  selectedSkill,
}: {
  selectedSkill: string;
}) {
  let filteredList: gridListType[] = [];
  if (selectedSkill === "All") {
    filteredList = gridList;
  } else {
    filteredList = gridList.filter(
      (item) => selectedSkill === item.skill_category,
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-6">
      {filteredList.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col gap-2 border border-gray-300 w-full h-50 items-center justify-center rounded-xl relative shadow-md shadow-black-200"
          >
            <Image src={item.icon} alt="react icon" width={60} height={60} />
            <h1 className="text-2xl font-mono">{item.name}</h1>
            <p
              className={`absolute right-2 top-3 border px-3 py-1 rounded-3xl uppercase text-xs ${item.level_tag_color === "green" ? "bg-green-200 text-green-950" : ""} ${item.level_tag_color === "red" ? "bg-red-200 text-red-950" : ""} ${item.level_tag_color === "orange" ? "bg-orange-200 text-orange-950" : ""}`}
            >
              {item.level_tag}
            </p>
          </div>
        );
      })}
    </div>
  );
}
