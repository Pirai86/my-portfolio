import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/app/component/site-header";
import FooterSection from "@/app/sections/footerSection";
import Container from "@/app/component/container";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist on Piraisudan R’s portfolio.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1 bg-white">
        <Container className="flex min-h-[60vh] flex-col justify-center py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            404
          </p>
          <h1 className="mt-3 text-3xl font-black text-black lg:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
            That URL does not match a page on this site. Head back home to see
            selected work.
          </p>
          <Link
            href="/"
            className="mt-8 w-max text-sm font-semibold text-accent-strong hover:text-black"
          >
            Back to home
          </Link>
        </Container>
      </main>
      <FooterSection />
    </>
  );
}
