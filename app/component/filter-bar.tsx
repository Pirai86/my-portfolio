import type { FilterOption } from "@/app/data/data";

export default function FilterBar({
  options,
  value,
  onChange,
  label,
}: {
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="mt-6 flex flex-wrap gap-2"
    >
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
            className={`cursor-pointer rounded-full border px-3.5 py-1 text-sm transition-colors duration-200 ${
              isActive
                ? "border-black bg-black text-white"
                : "border-gray-300 bg-white text-gray-700 hover:border-black hover:text-black"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
