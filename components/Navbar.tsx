"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const hero = document.getElementById("top");
      if (hero) {
        setPastHero(hero.getBoundingClientRect().bottom < 80);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onHero = !pastHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled
          ? "border-b border-hair/70 bg-paper/88 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Brand */}
        <a href="#top" className="flex flex-col leading-none">
          <span
            className={`text-[0.95rem] font-medium tracking-tight transition-colors duration-400 ${
              onHero ? "text-white/90" : "text-ink"
            }`}
          >
            {site.name}
          </span>
          <span
            className={`mt-px text-[0.6rem] uppercase tracking-[0.14em] transition-colors duration-400 ${
              onHero ? "text-white/50" : "text-muted-soft"
            }`}
          >
            {site.tagline}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {site.nav.slice(0, -1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[0.875rem] transition-colors duration-300 ${
                onHero ? "text-white/70 hover:text-white" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#reservar"
            className={`rounded-full px-5 py-2 text-[0.875rem] font-medium transition-all duration-500 ease-smooth ${
              onHero
                ? "border border-white/30 bg-white/15 text-white backdrop-blur-md hover:bg-white/25"
                : "bg-accent text-paper hover:bg-accent-hover"
            }`}
          >
            Reservar cita
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <div className="flex flex-col gap-[5px]">
            {[false, false].map((_, i) => (
              <span
                key={i}
                className={`h-px w-6 transition-all duration-300 ${
                  open
                    ? i === 0
                      ? "translate-y-[3px] rotate-45 bg-ink"
                      : "-translate-y-[3px] -rotate-45 bg-ink"
                    : onHero
                    ? "bg-white"
                    : "bg-ink"
                }`}
              />
            ))}
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-all duration-500 ease-smooth md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-2 px-8">
          {site.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-hair py-5 text-3xl font-light tracking-tight text-ink transition-opacity hover:opacity-50"
              style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
