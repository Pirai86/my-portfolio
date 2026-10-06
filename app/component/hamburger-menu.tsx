"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, RESUME_URL } from "@/app/lib/site";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const bar =
    "absolute left-0 h-0.5 w-full rounded bg-white transition-all duration-300 ease-out";

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-menu"
        className="relative flex h-10 w-10 cursor-pointer items-center justify-center"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="relative block h-4 w-6">
          <span
            className={`${bar} ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
          />
          <span
            className={`${bar} top-1/2 -translate-y-1/2 ${open ? "scale-x-0 opacity-0" : ""}`}
          />
          <span
            className={`${bar} ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-full w-2/3"}`}
          />
        </span>
      </button>

      <ul
        id="site-menu"
        aria-hidden={!open}
        className={`absolute right-0 top-full z-50 mt-3 min-w-52 origin-top-right border border-rule bg-black py-2 shadow-2xl transition-all duration-200 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 text-sm text-gray-200 transition-colors duration-200 hover:bg-white/10 hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="mt-2 border-t border-rule pt-2">
          <Link
            href={RESUME_URL ?? "/resume"}
            {...(RESUME_URL ? { download: true } : {})}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="block px-5 py-2.5 text-sm text-gray-200 transition-colors duration-200 hover:bg-white/10 hover:text-accent"
          >
            {RESUME_URL ? "Download résumé" : "View résumé"}
          </Link>
        </li>
      </ul>
    </div>
  );
}
