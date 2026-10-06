import SiteHeader from "@/app/component/site-header";
import HeroSection from "@/app/sections/heroSection";
import AboutSection from "@/app/sections/about-section";
import SkillsSection from "@/app/sections/skills-section";
import PortfolioSection from "@/app/sections/portfolio-section";
import FooterSection from "@/app/sections/footerSection";
import JsonLd from "@/app/component/json-ld";
import {
  getPersonJsonLd,
  getPortfolioItemListJsonLd,
  getWebsiteJsonLd,
} from "@/app/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={getPersonJsonLd()} />
      <JsonLd data={getWebsiteJsonLd()} />
      <JsonLd data={getPortfolioItemListJsonLd()} />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
      </main>
      <FooterSection />
    </>
  );
}
