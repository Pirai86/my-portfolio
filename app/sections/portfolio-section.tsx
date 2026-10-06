import Container from "@/app/component/container";
import Reveal from "@/app/component/reveal";
import SectionHeading from "@/app/component/section-heading";
import PortfolioGrid from "@/app/component/portfolio-grid";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="w-full scroll-mt-16 bg-white py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Work"
          title="Selected projects"
          description="Eight projects across e-commerce, ERP, scientific analytics, and a large C++ migration. Each one has a short write-up on what was built, why, and what was hard."
        />
        <Reveal delay={100}>
          <PortfolioGrid />
        </Reveal>
      </Container>
    </section>
  );
}
