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
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh", maxHeight: "960px" }}
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Consulta de Carmen Aunión"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,8,6,0.15) 0%, rgba(10,8,6,0.35) 50%, rgba(10,8,6,0.55) 100%)",
          }}
        />
      </div>

      {/* Frosted glass card — centered */}
      <div className="relative z-10 w-full px-6 py-24 sm:px-8 lg:px-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease }}
          className="flex w-full max-w-xl flex-col items-center gap-5 rounded-2xl border border-white/15 p-8 text-center sm:p-12"
          style={{
            background: "rgba(15,12,9,0.32)",
            backdropFilter: "blur(24px) saturate(1.6)",
            WebkitBackdropFilter: "blur(24px) saturate(1.6)",
          }}
        >
          <motion.span
            custom={0} variants={up} initial="hidden" animate="show"
            className="inline-flex items-center gap-2.5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/55"
          >
            <span className="h-px w-4 bg-white/30" aria-hidden="true" />
            {site.hero.eyebrow}
            <span className="h-px w-4 bg-white/30" aria-hidden="true" />
          </motion.span>

          <motion.h1
            custom={1} variants={up} initial="hidden" animate="show"
            className="text-[3rem] font-medium leading-[1.04] tracking-[-0.04em] text-white sm:text-[3.75rem] lg:text-[4.5rem]"
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
            className="flex flex-wrap items-center justify-center gap-2"
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
            className="flex flex-wrap justify-center gap-2 border-t border-white/12 pt-4"
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
    </section>
  );
}
