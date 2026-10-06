import Container from "@/app/component/container";
import Reveal from "@/app/component/reveal";
import SectionHeading from "@/app/component/section-heading";
import { experience_list } from "@/app/data/data";

const facts = [
  { label: "Based in", value: "India" },
  { label: "Experience", value: "5+ years" },
  { label: "Focus", value: "React · TypeScript · PostgreSQL" },
  { label: "Working style", value: "Full stack, end to end" },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full scroll-mt-16 bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="Who I am" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal delay={80}>
            <div className="space-y-5 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
              <p>
                I&apos;m a full stack engineer with 5+ years of professional
                experience. I started in C++ at Renault Nissan, migrating a
                100,000-line engineering codebase to a new platform, and
                moved into web products in 2024, where I now own features
                from the database schema to the deployed UI.
              </p>
              <p>
                Most of my recent work is for small teams that need one
                person to ship the whole thing: an e-commerce storefront with
                payments, a five-module ERP with WhatsApp automation, a
                multi-tenant dashboard builder, and a scientific data portal
                that renders 20,000-point plots without stuttering.
              </p>
              <p>
                I care about fast page loads, boring and reliable data
                models, and leaving behind tools other people keep using
                after I move on.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <dl className="divide-y divide-gray-200 border-y border-gray-200">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {fact.label}
                  </dt>
                  <dd className="text-right text-sm font-medium text-black">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div id="experience" className="mt-24 scroll-mt-16">
          <SectionHeading eyebrow="Experience" title="Where I've worked" />
          <ol className="mt-10 border-l border-gray-200">
            {experience_list.map((job, index) => (
              <li key={job.id} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
                <span
                  aria-hidden
                  className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${
                    index === 0 ? "bg-accent" : "bg-gray-300"
                  }`}
                />
                <Reveal delay={index * 80}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xl font-bold text-black">
                      {job.role}
                      <span className="font-normal text-gray-500">
                        {" "}
                        · {job.company}
                      </span>
                    </h3>
                    <p className="text-sm text-gray-500">{job.period}</p>
                  </div>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">
                    {job.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((item) => (
                      <li
                        key={item}
                        className="border border-gray-200 px-2.5 py-1 text-xs text-gray-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
