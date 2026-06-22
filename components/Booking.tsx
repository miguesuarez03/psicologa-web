import { site } from "@/lib/config";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { CalendlyEmbed } from "./CalendlyEmbed";

export function Booking() {
  return (
    <section
      id="reservar"
      className="scroll-mt-24 py-28 lg:py-40"
      style={{ backgroundColor: "#181613" }}
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: copy */}
          <div className="flex flex-col justify-center lg:py-8">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/40">
                <span className="h-px w-4 bg-white/20" aria-hidden="true" />
                {site.booking.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 text-3xl font-medium leading-[1.08] tracking-tight text-white sm:text-[2.75rem] lg:text-[3.25rem]">
                {site.booking.title}
                <br />
                <span className="font-serif font-light italic text-white/60">Sin rodeos.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-[1.05rem] leading-relaxed text-white/55">
                {site.booking.text}
              </p>
            </Reveal>

            {/* Trust signals */}
            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-col gap-3">
                {[
                  "Primera sesión sin compromiso",
                  "Respuesta en menos de 24h",
                  "Cancelación gratuita",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[0.92rem] text-white/50">
                    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-accent" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2,8 6,12 14,4" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Fallback CTA */}
            <Reveal delay={0.2}>
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="mb-3 text-[0.8rem] uppercase tracking-[0.14em] text-white/30">¿Prefieres escribir?</p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-[0.95rem] text-white/60 transition-colors hover:text-white"
                >
                  {site.contact.email}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Calendly */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <CalendlyEmbed url={site.calendlyUrl} height={520} />
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
