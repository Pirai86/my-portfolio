import Reveal from "@/app/component/reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-black sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
