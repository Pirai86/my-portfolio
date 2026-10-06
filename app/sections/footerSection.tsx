import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Container from "@/app/component/container";
import { PrimaryButton, ResumeButton } from "@/app/component/buttons";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  NAV_LINKS,
  SITE_EMAIL,
  SITE_LOCATION,
} from "@/app/lib/site";

export default function FooterSection() {
  const year = new Date().getFullYear();
  const mailto = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(
    "Hello from your portfolio",
  )}`;

  return (
    <footer
      id="contact"
      className="w-full scroll-mt-16 bg-black text-white print:hidden"
    >
      <Container>
        <div className="border-x border-rule px-6 py-16 sm:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Let&apos;s build something.
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-gray-400">
                I&apos;m open to full-time full stack roles. Email me, or
                find me on LinkedIn.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <PrimaryButton href={mailto}>Get in touch</PrimaryButton>
                <ResumeButton tone="dark" />
              </div>
              <a
                href={mailto}
                className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <Mail size={16} />
                {SITE_EMAIL}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <nav aria-label="Footer">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Navigate
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 transition-colors duration-200 hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Elsewhere
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  <li>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors duration-200 hover:text-accent"
                    >
                      <Image src="/linkedin.svg" alt="" width={18} height={18} />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors duration-200 hover:text-accent"
                    >
                      <Image
                        src="/github.svg"
                        alt=""
                        width={18}
                        height={18}
                        className="rounded-full bg-white"
                      />
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-2 border-t border-rule pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} Piraisudan R · Full Stack Engineer · {SITE_LOCATION}
            </p>
            {/* <p>Built with Next.js and Tailwind CSS.</p> */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
