"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/config";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function Trust() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = site.trust.testimonials.length;

  function scrollTo(i: number) {
    setActive(i);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement;
    if (card) track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
  }

  if (!total) return null;

  return (
    <section className="overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "#F0EBE3" }}>
      <Container>
        {/* Header */}
        <Reveal>
          <span className="inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-soft">
            <span className="h-px w-5 bg-hair" aria-hidden="true" />
            {site.trust.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-lg text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">
            {site.trust.title}{" "}
            <span className="font-serif font-light italic">{site.trust.titleAccent}</span>
          </h2>
        </Reveal>

        {/* Desktop grid */}
        <div className="mt-10 hidden lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-3">
          {site.trust.testimonials.map((t, i) => (
            <Reveal key={i} delay={0.05 * (i % 3)}>
              <div className="flex h-full flex-col justify-between rounded-xl bg-paper/60 p-5 ring-1 ring-hair">
                {/* Quote */}
                <div className="flex gap-3">
                  <span className="mt-0.5 h-full w-[2px] shrink-0 rounded-full bg-accent/30" aria-hidden="true" />
                  <p className="font-serif text-[1rem] font-light italic leading-relaxed text-muted">
                    {t.quote}
                  </p>
                </div>
                {/* Author */}
                <div className="mt-4 flex items-center gap-2 pl-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[0.65rem] font-semibold text-accent">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[0.82rem] font-medium leading-none text-ink">{t.author}</p>
                    <p className="mt-0.5 text-[0.68rem] uppercase tracking-[0.1em] text-muted-soft">{t.context}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-8 lg:hidden">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={(e) => {
              const track = e.currentTarget;
              const cardW = (track.children[0] as HTMLElement)?.offsetWidth ?? 1;
              const i = Math.round(track.scrollLeft / (cardW + 12));
              setActive(Math.min(Math.max(i, 0), total - 1));
            }}
          >
            {site.trust.testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[80vw] max-w-sm shrink-0 snap-start rounded-xl bg-paper/60 p-5 ring-1 ring-hair"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 w-[2px] shrink-0 rounded-full bg-accent/30" aria-hidden="true" />
                  <p className="font-serif text-[0.97rem] font-light italic leading-relaxed text-muted">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 pl-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[0.65rem] font-semibold text-accent">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[0.82rem] font-medium leading-none text-ink">{t.author}</p>
                    <p className="mt-0.5 text-[0.68rem] uppercase tracking-[0.1em] text-muted-soft">{t.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {site.trust.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: active === i ? "1.75rem" : "0.375rem",
                  backgroundColor: active === i ? "#7A3E28" : "#C4BDB5",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
