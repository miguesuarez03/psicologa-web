import { site } from "@/lib/config";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

/** Premium SVG icons — one per service, thin stroke, no fills */
const icons = [
  // 01 Terapia individual — person in chair / dialogue
  <svg key="1" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="9" r="4"/>
    <path d="M8 28c0-5 3.6-8 8-8s8 3 8 8"/>
    <path d="M4 20h4M24 20h4"/>
  </svg>,
  // 02 Ansiedad y estrés — wave / calm water
  <svg key="2" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M4 16c2-4 4-6 6-6s4 8 6 8 4-10 6-10 4 4 4 8"/>
    <path d="M4 24c2-3 4-5 6-5s4 6 6 6 4-7 6-7 4 3 4 6"/>
  </svg>,
  // 03 Autoestima — mirror / star self
  <svg key="3" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="13" r="7"/>
    <path d="M16 20v8M11 28h10"/>
    <path d="M16 8l1 2.5 2.5 1-2.5 1L16 15l-1-2.5L12.5 11.5l2.5-1z"/>
  </svg>,
  // 04 Gestión emocional — heart with pulse
  <svg key="4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 27S4 20 4 12a6 6 0 0 1 12-1 6 6 0 0 1 12 1c0 8-12 15-12 15z"/>
    <path d="M9 16h3l2-4 2 8 2-4h5"/>
  </svg>,
  // 05 Relaciones personales — two circles overlapping
  <svg key="5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="12" cy="16" r="7"/>
    <circle cx="20" cy="16" r="7"/>
  </svg>,
  // 06 Talleres — group / three people
  <svg key="6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="3.5"/>
    <circle cx="22" cy="10" r="3.5"/>
    <circle cx="16" cy="9" r="3.5"/>
    <path d="M3 26c0-4 3-6 7-6M22 26c0-4-3-6-7-6M9 26c0-3 3-5 7-5s7 2 7 5"/>
  </svg>,
];

const cardAccents = [
  "rgba(185,168,145,0.14)",
  "rgba(155,168,178,0.12)",
  "rgba(195,172,165,0.14)",
  "rgba(155,172,155,0.12)",
  "rgba(185,162,148,0.14)",
  "rgba(168,158,178,0.12)",
];

export function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-24 border-y border-hair bg-paper-alt py-28 lg:py-40"
    >
      <Container>
        {/* Intro */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow>{site.services.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">
                {site.services.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7 lg:pb-1">
            <p className="max-w-lg text-[1.05rem] leading-relaxed text-muted">
              {site.services.intro}
            </p>
          </Reveal>
        </div>

        {/* Cards with icons */}
        <div className="mt-14 grid grid-cols-1 border-t border-hair sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {site.services.items.map((item, i) => (
            <Reveal key={item.label} delay={0.04 * (i % 3)}>
              <div
                className="group flex min-h-[240px] flex-col gap-4 border-b border-r border-hair p-7 transition-all duration-500 hover:bg-paper"
                style={{ backgroundColor: cardAccents[i] }}
              >
                {/* Icon */}
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-hair bg-paper/70 text-accent transition-all duration-500 group-hover:border-accent/20 group-hover:bg-accent group-hover:text-paper"
                >
                  <div className="h-5 w-5">
                    {icons[i]}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[1.1rem] font-medium leading-snug tracking-tight text-ink">
                    {item.label}
                  </h3>
                </div>

                <p className="flex-1 text-[0.93rem] leading-relaxed text-muted">
                  {item.text}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-hair/80 bg-paper/60 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.09em] text-muted-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
