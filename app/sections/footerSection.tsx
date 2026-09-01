"use client";

import type { MouseEvent } from "react";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EMAIL = "piraisudan590@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/pirai86/";
const GITHUB_URL = "https://github.com/Pirai86";

const navLinks = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#who-am-i", id: "who-am-i", label: "Who am I" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#portfolio", id: "portfolio", label: "Portfolio" },
];

function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function FooterSection() {
  return (
    <footer className="bg-black w-screen p-8 pb-10 lg:px-100 border-t border-gray-600">
      <div className="border-l border-r border-gray-600 px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div>
            <p className="text-4xl font-bold text-white">P.</p>
            <p className="mt-4 text-xl font-bold text-white">Piraisudan R</p>
            <p className="mt-1 text-gray-400">Full Stack Engineer · Chennai</p>
            <p className="mt-4 max-w-xs text-sm text-gray-500">
              Building web products from UI to production.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(event) => scrollToSection(event, link.id)}
                    className="text-gray-300 transition-colors duration-200 hover:text-amber-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Connect
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 flex items-center gap-2 text-gray-300 transition-colors duration-200 hover:text-amber-600"
            >
              <Mail size={16} />
              {EMAIL}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="group mt-6 inline-flex w-max cursor-pointer items-center justify-between gap-4 rounded-4xl bg-amber-600 p-2 px-6 pr-2 text-xs font-bold uppercase tracking-widest text-black"
            >
              Get in touch
              <span className="flex h-10! w-10! items-center justify-center rounded-4xl border border-white bg-white transition-transform duration-200 ease-in-out group-hover:scale-115">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-600 pt-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">© 2026 Piraisudan R</p>
          <div className="flex gap-3">
            <Link
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image src="/linkedin.svg" alt="" width={30} height={30} />
            </Link>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Image
                src="/github.svg"
                alt=""
                width={30}
                height={30}
                className="bg-white rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
