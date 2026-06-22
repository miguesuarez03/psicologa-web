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
    if (card) {
      track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    }
  }

  if (!total) return null;

  return (
    <section
      className="overflow-hidden py-28 lg:py-36"
      style={{ backgroundColor: "#F0EBE3" }}
    >
      <Container>
        {/* Header */}
        <Reveal>
          <span className="inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-soft">
            <span className="h-px w-5 bg-hair" aria-hidden="true" />
            {site.trust.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 max-w-lg text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">
            {site.trust.title}{" "}
            <span className="font-serif font-light italic">{site.trust.titleAccent}</span>
          </h2>
        </Reveal>

        {/* Desktop grid */}
        <div className="mt-14 hidden lg:mt-16 lg:grid lg:grid-cols-3">
          {site.trust.testimonials.map((t, i) => (
            <Reveal key={i} delay={0.05 * (i % 3)} className="border-t border-hair/60 py-8 pr-8">
              {/* Decorative quote mark */}
              <span
                className="mb-3 block font-serif text-[3rem] leading-none text-accent/20 select-none"
                aria-hidden="true"
              >
                "
              </span>
              <p className="font-serif text-[1.15rem] font-light italic leading-relaxed text-muted">
                {t.quote}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
                <div>
                  <p className="text-[0.9rem] font-medium text-ink">{t.author}</p>
                  <p className="mt-0.5 text-[0.72rem] uppercase tracking-[0.1em] text-muted-soft">{t.context}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-10 lg:hidden">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={(e) => {
              const track = e.currentTarget;
              const cardW = (track.children[0] as HTMLElement)?.offsetWidth ?? 1;
              const i = Math.round(track.scrollLeft / (cardW + 16));
              setActive(Math.min(Math.max(i, 0), total - 1));
            }}
          >
            {site.trust.testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[82vw] max-w-sm shrink-0 snap-start rounded-2xl border border-hair/60 bg-paper p-7"
              >
                <span
                  className="mb-3 block font-serif text-[3rem] leading-none text-accent/20 select-none"
                  aria-hidden="true"
                >
                  "
                </span>
                <p className="font-serif text-[1.08rem] font-light italic leading-relaxed text-muted">
                  {t.quote}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
                  <div>
                    <p className="text-[0.9rem] font-medium text-ink">{t.author}</p>
                    <p className="mt-0.5 text-[0.72rem] uppercase tracking-[0.1em] text-muted-soft">{t.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="mt-5 flex justify-center gap-2">
            {site.trust.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: active === i ? "1.75rem" : "0.375rem",
                  backgroundColor: active === i ? "var(--tw-color-accent, #7A3E28)" : "#C4BDB5",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
