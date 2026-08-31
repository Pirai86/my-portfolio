"use client";

import { useState } from "react";

export default function HamburgerMenu() {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div
      className={`w-6  ${menuClicked ? "h-6" : "h-4"} flex flex-col cursor-pointer relative justify-between`}
      onClick={() => setMenuClicked(!menuClicked)}
    >
      <span
        className={`inline-block origin-left w-full! border border-white transition-transform duration-300 ease-in-out ${menuClicked ? "rotate-45 scale-x-[1.3]" : "rotate-0"}`}
      ></span>
      <span
        className={`border border-white transition-all duration-300 ease-in-out w-full ${menuClicked ? "hidden" : "block"}`}
      ></span>
      <span
        className={`inline-block origin-left w-1/2 border border-white transition-transform duration-300 ease-in-out ${menuClicked ? "-rotate-45 scale-x-[1.3] w-full" : "rotate-0"} `}
      ></span>
    </div>
  );
}
