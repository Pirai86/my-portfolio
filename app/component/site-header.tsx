import Link from "next/link";
import Container from "@/app/component/container";
import HamburgerMenu from "@/app/component/hamburger-menu";
import { NAV_LINKS, RESUME_URL } from "@/app/lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-black/90 backdrop-blur print:hidden supports-[backdrop-filter]:bg-black/80">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Piraisudan R, home"
          className="text-3xl font-bold text-white transition-colors hover:text-accent"
        >
          P.
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.filter((link) => link.id !== "home").map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={RESUME_URL ?? "/resume"}
                {...(RESUME_URL ? { download: true } : {})}
                className="rounded-full border border-gray-500 px-4 py-1.5 text-sm text-gray-200 transition-colors duration-200 hover:border-white hover:text-white"
              >
                Résumé
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Primary" className="md:hidden">
          <HamburgerMenu />
        </nav>
      </Container>
    </header>
  );
}
