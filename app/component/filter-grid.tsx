import Image from "next/image";
import { gridListType } from "@/app/component/filter-component";

export default function FilterGrid({
  selectedFilter,
  gridList,
}: {
  selectedFilter?: string;
  gridList: gridListType[];
}) {
  let filteredList: gridListType[] = [];
  if (selectedFilter === "All" || selectedFilter === undefined) {
    filteredList = gridList;
  } else {
    filteredList = gridList.filter(
      (item) => selectedFilter === item.skill_category,
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-6">
      {filteredList.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col gap-2 border border-gray-300 w-full h-50 items-center justify-center rounded-xl relative shadow-md shadow-black-200"
          >
            <Image src={item.icon} alt="react icon" width={50} height={50} />
            <h1 className="text-lg font-mono">{item.name}</h1>
            <p
              className={`absolute right-2 top-3 border px-3 py-1 rounded-3xl uppercase text-xs ${item.level_tag_color === "green" ? "bg-green-200 text-green-950" : ""} ${item.level_tag_color === "red" ? "bg-red-200 text-red-950" : ""} ${item.level_tag_color === "orange" ? "bg-orange-200 text-orange-950" : ""} ${item.level_tag_color === "blue" ? "bg-blue-200 text-blue-950" : ""}`}
            >
              {item.level_tag}
            </p>
          </div>
        );
      })}
    </div>
  );
}
