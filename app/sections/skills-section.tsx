import Container from "@/app/component/container";
import Reveal from "@/app/component/reveal";
import SectionHeading from "@/app/component/section-heading";
import SkillsGrid from "@/app/component/skills-grid";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full scroll-mt-16 border-y border-gray-200 bg-surface py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Grouped by where they show up in my work. Each one links back to a shipped project rather than a self-assigned rating."
        />
        <Reveal delay={100}>
          <SkillsGrid />
        </Reveal>
      </Container>
    </section>
  );
}
