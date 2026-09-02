import Link from "next/link";
import HamburgerMenu from "@/app/component/hamburger-menu";

export default function SiteHeader() {
  return (
    <nav className="bg-black flex items-center justify-between p-6 lg:px-100 sticky top-0 h-[10vh] border-b border-gray-600 z-50">
      <Link href="/">
        <p className="text-4xl font-bold text-white">P.</p>
      </Link>
      <HamburgerMenu />
    </nav>
  );
}
