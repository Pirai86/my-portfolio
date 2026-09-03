import SiteHeader from "@/app/component/site-header";
import HeroSection from "@/app/sections/heroSection";
import WhoAmISection from "@/app/sections/who-am-i-section";
import FooterSection from "@/app/sections/footerSection";
import PortfolioSection from "@/app/sections/portfolio-section";
import JsonLd from "@/app/component/json-ld";
import {
  getPersonJsonLd,
  getPortfolioItemListJsonLd,
  getWebsiteJsonLd,
} from "@/app/lib/site";

export default function Home() {
  return (
    <div
      id="main-content"
      className="h-screen w-full overflow-x-hidden overflow-y-scroll bg-white"
    >
      <JsonLd data={getPersonJsonLd()} />
      <JsonLd data={getWebsiteJsonLd()} />
      <JsonLd data={getPortfolioItemListJsonLd()} />
      <SiteHeader />
      <HeroSection />
      <WhoAmISection />
      <PortfolioSection />
      <FooterSection />
    </div>
  );
}
