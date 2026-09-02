import SiteHeader from "@/app/component/site-header";
import HeroSection from "@/app/sections/heroSection";
import WhoAmISection from "@/app/sections/who-am-i-section";
import FooterSection from "@/app/sections/footerSection";
import PortfolioSection from "@/app/sections/portfolio-section";

export default function Home() {
  return (
    <div className="bg-white w-full h-screen overflow-y-scroll overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
      <WhoAmISection />
      <PortfolioSection />
      <FooterSection />
    </div>
  );
}
