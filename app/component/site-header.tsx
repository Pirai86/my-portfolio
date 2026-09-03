import Link from "next/link";
import HamburgerMenu from "@/app/component/hamburger-menu";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-[10vh] items-center justify-between border-b border-gray-600 bg-black p-6 lg:px-100">
      <Link
        href="/"
        aria-label="Piraisudan R, home"
        className="text-4xl font-bold text-white"
      >
        P.
      </Link>
      <nav aria-label="Primary">
        <HamburgerMenu />
      </nav>
    </header>
  );
}
