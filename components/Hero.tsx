"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/config";
import { images } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

const up = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.95, ease, delay: 0.2 + i * 0.12 },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-end overflow-hidden lg:items-center"
      style={{ minHeight: "100svh", maxHeight: "960px" }}
    >
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Consulta de Carmen Aunión"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Mobile: gradient bottom-heavy so text is legible */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,8,6,0.08) 0%, rgba(10,8,6,0.18) 40%, rgba(10,8,6,0.72) 75%, rgba(10,8,6,0.85) 100%)",
          }}
        />
        {/* Desktop: gradient from left so right side (photo) stays visible */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, rgba(10,8,6,0.72) 0%, rgba(10,8,6,0.55) 45%, rgba(10,8,6,0.10) 70%, rgba(10,8,6,0.0) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-16 pt-28 sm:px-8 lg:px-12 lg:py-0">
        <div className="mx-auto max-w-content">

          {/* Desktop: left-aligned text block, photo visible right */}
          {/* Mobile: centered card-less layout */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease }}
            className="flex max-w-lg flex-col items-start gap-5 text-left"
          >
            <motion.span
              custom={0} variants={up} initial="hidden" animate="show"
              className="inline-flex items-center gap-2.5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/55"
            >
              <span className="h-px w-4 bg-white/30" aria-hidden="true" />
              {site.hero.eyebrow}
            </motion.span>

            <motion.h1
              custom={1} variants={up} initial="hidden" animate="show"
              className="text-[3rem] font-medium leading-[1.04] tracking-[-0.04em] text-white sm:text-[3.75rem] lg:text-[4.75rem]"
            >
              {site.hero.headlineLead}
              <br />
              <span className="font-serif font-light italic text-white/80">
                {site.hero.headlineAccent}
              </span>
            </motion.h1>

            <motion.p
              custom={2} variants={up} initial="hidden" animate="show"
              className="max-w-sm text-[1rem] leading-[1.75] text-white/70"
            >
              {site.hero.sub}
            </motion.p>

            <motion.div
              custom={3} variants={up} initial="hidden" animate="show"
              className="flex flex-wrap items-center gap-2"
            >
              <a
                href="#reservar"
                className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-[0.9rem] font-medium text-accent transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:bg-paper-alt"
              >
                Reservar cita
              </a>
              <a
                href="#proceso"
                className="group inline-flex items-center gap-1.5 rounded-full px-5 py-3.5 text-[0.9rem] font-medium text-white/75 transition-colors hover:text-white"
              >
                Cómo trabajo
                <span className="transition-transform duration-400 ease-smooth group-hover:translate-x-1">→</span>
              </a>
            </motion.div>

            <motion.div
              custom={4} variants={up} initial="hidden" animate="show"
              className="flex flex-wrap gap-2 border-t border-white/12 pt-2"
            >
              {site.hero.pillars.map((p) => (
                <div
                  key={p.label}
                  className="flex items-baseline gap-1.5 rounded-full border border-white/15 px-3 py-1.5"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  <span className="text-[0.85rem] font-medium text-white">{p.value}</span>
                  <span className="text-[0.68rem] text-white/50">{p.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
