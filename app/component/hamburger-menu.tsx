"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

const menuLinks = [
  { href: "/#home", id: "home", label: "Home" },
  { href: "/#who-am-i", id: "who-am-i", label: "Who am I" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#portfolio", id: "portfolio", label: "Portfolio" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export default function HamburgerMenu() {
  const [menuClicked, setMenuClicked] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuClicked) return;

    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuClicked(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuClicked(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuClicked]);

  function goToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
    setMenuClicked(false);
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        aria-label={menuClicked ? "Close menu" : "Open menu"}
        aria-expanded={menuClicked}
        aria-controls="site-menu"
        className={`flex w-6 cursor-pointer flex-col justify-between ${menuClicked ? "h-6" : "h-4"}`}
        onClick={() => setMenuClicked((open) => !open)}
      >
        <span
          className={`inline-block w-full! origin-left border border-white transition-transform duration-300 ease-in-out ${menuClicked ? "rotate-45 scale-x-[1.3]" : "rotate-0"}`}
        />
        <span
          className={`w-full border border-white transition-all duration-300 ease-in-out ${menuClicked ? "hidden" : "block"}`}
        />
        <span
          className={`inline-block origin-left border border-white transition-transform duration-300 ease-in-out ${menuClicked ? "w-full -rotate-45 scale-x-[1.3]" : "w-1/2 rotate-0"} `}
        />
      </button>

      {menuClicked ? (
        <ul
          id="site-menu"
          className="absolute right-0 top-full z-50 mt-4 min-w-48 border border-gray-600 bg-black py-2"
        >
          {menuLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(event) => goToSection(event, link.id)}
                className="block px-5 py-2.5 text-sm text-gray-200 transition-colors duration-200 hover:bg-white/10 hover:text-amber-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
