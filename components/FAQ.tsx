"use client";

import { useState } from "react";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

const faqs = [
  {
    q: "¿Es necesario haber ido al psicólogo antes para empezar?",
    a: "No. Puedes venir sin ninguna experiencia previa en terapia. La primera sesión está pensada precisamente para que conozcamos cómo te sientes, qué te trae, y si el proceso tiene sentido para ti. No hay ningún punto de partida mínimo.",
  },
  {
    q: "¿Qué pasa en la primera sesión?",
    a: "Es una toma de contacto. Me cuentas qué te ocurre y yo escucho sin juzgar. A partir de ahí, te explico cómo podría ser el proceso y resolvemos cualquier duda. No tienes ningún compromiso de continuar si no lo sientes.",
  },
  {
    q: "¿Por qué 35€? ¿Hay algo diferente en la calidad?",
    a: "No. El precio reducido es parte de la filosofía de NoBu Psicología: creer que el acceso a la salud mental no debería depender de tu economía. Las sesiones tienen la misma calidad y supervisión que en cualquier consulta, simplemente priorizamos el acceso.",
  },
  {
    q: "¿Con qué frecuencia se hacen las sesiones?",
    a: "Lo habitual es una sesión por semana, especialmente al principio. Según avanza el proceso, la frecuencia puede ajustarse a lo que necesites. Tú marcas el ritmo.",
  },
  {
    q: "¿Las sesiones son solo online?",
    a: "Actualmente las sesiones son online, lo que permite que puedas conectarte desde donde estés, sin desplazamientos y en un entorno que ya conoces. Solo necesitas un lugar tranquilo y conexión a internet.",
  },
  {
    q: "¿Cuánto tiempo dura un proceso terapéutico?",
    a: "Depende de cada persona y de lo que traes. Algunos procesos duran unos meses, otros más. No existe una duración estándar porque cada situación es diferente. Lo importante es que el proceso tenga sentido para ti en cada momento.",
  },
  {
    q: "¿Y si empiezo y no funciona?",
    a: "Es una pregunta completamente válida. Si en algún momento sientes que el proceso no está avanzando, lo hablamos. La terapia también se trabaja en sesión. Y si en algún punto tiene más sentido derivarte a otro profesional, te lo digo con transparencia.",
  },
];

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
                href={`mailto:${
                  // Access config directly since we can't import easily here
                  "nobuterapiabajocoste@gmail.com"
                }`}
                className="mt-7 inline-flex items-center gap-2 text-[0.9rem] font-medium text-accent transition-opacity hover:opacity-70"
              >
                Escribir una duda →
              </a>
            </Reveal>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
            <div className="border-t border-hair" />
          </div>
        </div>
      </Container>
    </section>
  );
}
