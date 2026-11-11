"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/#inicio", label: "Início" },
  { href: "/#historia", label: "Nossa história" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/presentes", label: "Presentes" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/85 shadow-[0_1px_0_rgba(198,161,91,0.25)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="/#inicio"
          className="font-display text-xl tracking-wide text-ivory"
          aria-label="Ithalo e Emilly — início"
        >
          Ithalo <span className="italic text-gold">&amp;</span> Emilly
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-ivory/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/presentes"
          className="rounded-full border border-gold/70 px-5 py-2 text-sm font-semibold tracking-wide text-gold transition-all hover:bg-gold hover:text-navy"
        >
          Presentear
        </a>
      </div>
    </header>
  );
}
