import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Download, FileText } from "lucide-react";
import { RESUME_URL } from "@/app/lib/site";

const base =
  "group inline-flex w-max cursor-pointer items-center gap-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-200";

function isInternal(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className = `${base} bg-accent py-2 pl-6 pr-2 text-black hover:bg-amber-500`;
  const inner = (
    <>
      {children}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:scale-110">
        <ArrowRight size={18} />
      </span>
    </>
  );

  if (isInternal(href)) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      {...(href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {inner}
    </a>
  );
}

export function SecondaryButton({
  href,
  children,
  tone = "dark",
  download = false,
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  download?: boolean;
}) {
  const colors =
    tone === "dark"
      ? "border-gray-500 text-gray-200 hover:border-white hover:text-white"
      : "border-gray-400 text-gray-800 hover:border-black hover:text-black";
  const className = `${base} border px-6 py-3.5 ${colors}`;
  const external = href.startsWith("http");

  if (isInternal(href) && !download) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      download={download || undefined}
      target={external && !download ? "_blank" : undefined}
      rel={external && !download ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
    </a>
  );
}

/** Links to the on-site résumé. If a PDF is set in site.ts, that downloads instead. */
export function ResumeButton({ tone = "dark" }: { tone?: "dark" | "light" }) {
  if (RESUME_URL) {
    return (
      <SecondaryButton href={RESUME_URL} tone={tone} download>
        <Download size={14} />
        Download résumé
      </SecondaryButton>
    );
  }

  return (
    <SecondaryButton href="/resume" tone={tone}>
      <FileText size={14} />
      View résumé
    </SecondaryButton>
  );
}
