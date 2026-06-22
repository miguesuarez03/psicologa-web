"use client";

import { useState } from "react";
import { site } from "@/lib/config";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={0.03 * index}>
      <div className="border-t border-hair">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start justify-between gap-6 py-6 text-left"
          aria-expanded={open}
        >
          <span className="text-[1rem] font-medium leading-snug tracking-tight text-ink sm:text-[1.05rem]">
            {q}
          </span>
          <span
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hair text-muted-soft transition-all duration-400"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5">
              <line x1="8" y1="2" x2="8" y2="14"/>
              <line x1="2" y1="8" x2="14" y2="8"/>
            </svg>
          </span>
        </button>

        <div
          className="overflow-hidden transition-all duration-500 ease-smooth"
          style={{ maxHeight: open ? "400px" : "0px", opacity: open ? 1 : 0 }}
        >
          <p className="pb-7 text-[0.97rem] leading-relaxed text-muted">{a}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-hair bg-paper-alt py-28 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: title */}
          <div className="lg:col-span-4">
            <Reveal><Eyebrow>Preguntas frecuentes</Eyebrow></Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">
                Todo lo que{" "}
                <span className="font-serif font-light italic">quizás te preguntas.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
                Si tienes alguna otra duda que no aparece aquí, escríbeme y te respondo personalmente.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-7 inline-flex items-center gap-2 text-[0.9rem] font-medium text-accent transition-opacity hover:opacity-70"
              >
                Escribir una duda →
              </a>
            </Reveal>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8">
            {site.faq.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
            <div className="border-t border-hair" />
          </div>
        </div>
      </Container>
    </section>
  );
}
