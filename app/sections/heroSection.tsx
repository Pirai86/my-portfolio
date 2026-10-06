import Image from "next/image";
import { MapPin } from "lucide-react";
import Container from "@/app/component/container";
import { PrimaryButton, ResumeButton } from "@/app/component/buttons";
import { SITE_LOCATION } from "@/app/lib/site";

const stats = [
  { value: "5+", label: "years shipping web products" },
  { value: "400+", label: "users on EchoDolphin" },
  { value: "100k+", label: "lines of C++ migrated" },
  { value: "50%", label: "ops time cut by the ERP" },
];

function delay(ms: number) {
  return { animationDelay: `${ms}ms` };
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full scroll-mt-16 bg-black text-white"
    >
      <Container>
        <div className="border-x border-rule">
          <div className="grid gap-12 px-6 pb-16 pt-16 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-24">
            <div>
              <p
                className="animate-fade-up flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent"
                style={delay(0)}
              >
                Full Stack Engineer
                <span className="text-gray-600">·</span>
                <span className="inline-flex items-center gap-1 text-gray-400">
                  <MapPin size={12} />
                  {SITE_LOCATION}
                </span>
              </p>
              <h1
                className="animate-fade-up mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
                style={delay(80)}
              >
                Piraisudan R
              </h1>
              <p
                className="animate-fade-up mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8"
                style={delay(160)}
              >
                I build customer-facing web products and internal tools, from
                React/TypeScript UIs to secure multi-tenant backends. Recent
                work includes an analytics portal used by 100+ scientists, a
                five-module ERP that cut a real-estate firm&apos;s operations
                time in half, and an e-commerce platform for a US
                medical-instrument seller.
              </p>
              <div
                className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
                style={delay(240)}
              >
                <PrimaryButton href="/#portfolio">View my work</PrimaryButton>
                <ResumeButton tone="dark" />
              </div>
            </div>

            <div
              className="animate-fade-up relative mx-auto w-full max-w-xs lg:max-w-sm"
              style={delay(200)}
            >
              <div className="absolute -inset-3 rounded-[2rem] border border-rule" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-900">
                <Image
                  src="/profile_photo.jpg"
                  alt="Portrait of Piraisudan R"
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, 320px"
                  className="object-cover object-[50%_20%]"
                />
              </div>
            </div>
          </div>

          <dl className="grid grid-cols-2 border-t border-rule md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`animate-fade-up flex flex-col px-6 py-6 sm:px-10 ${
                  index > 0 ? "border-l border-rule" : ""
                } ${index === 2 ? "border-l-0 md:border-l" : ""} ${
                  index >= 2 ? "border-t border-rule md:border-t-0" : ""
                }`}
                style={delay(320 + index * 60)}
              >
                <dt className="order-2 mt-1 text-xs uppercase tracking-wider text-gray-500">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
