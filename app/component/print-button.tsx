"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-gray-800 transition-colors hover:border-black hover:text-black"
    >
      <Printer size={14} />
      Print / Save as PDF
    </button>
  );
}
