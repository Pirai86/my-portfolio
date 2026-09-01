import Link from "next/link";
import HamburgerMenu from "@/app/component/hamburger-menu";
import HeroSection from "@/app/sections/heroSection";
import WhoAmISection from "@/app/sections/who-am-i-section";

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
    </div>
  );
}
