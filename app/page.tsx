import Link from "next/link";
import HamburgerMenu from "@/app/component/hamburger-menu";
import HeroSection from "@/app/sections/heroSection";
import WhoAmISection from "@/app/sections/who-am-i-section";
import FooterSection from "@/app/sections/footerSection";
import FilterComponent from "@/app/component/filter-component";
import { skill_gridList, skill_filter_list } from "@/app/data/data";

export default function Home() {
  return (
    <div className="bg-white w-full h-screen overflow-y-scroll overflow-x-hidden">
      <nav className="bg-black flex items-center justify-between p-6 lg:px-100 sticky top-0 h-[10vh] border-b border-gray-600 z-50">
        <Link href="/">
          <p className="text-4xl font-bold text-white">P.</p>
        </Link>
        <HamburgerMenu />
      </nav>
      <HeroSection />
      <WhoAmISection />
      <section
        id="portfolio"
        className="w-screen h-max bg-[#f2f2f2] p-8 pb-20 lg:px-100 scroll-mt-[10vh]"
      >
        <div className="text-black mt-9">
          <h1 className="border-b text-left font-black text-2xl pb-4 uppercase">
            Portfolio
          </h1>
          <FilterComponent
            gridList={skill_gridList}
            filterList={skill_filter_list}
          />
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
