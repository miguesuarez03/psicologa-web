import { site } from "@/lib/config";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

export function Process() {
  return (
    <section id="proceso" className="scroll-mt-24 bg-paper py-16 lg:py-24">
      <Container>
        <div className="max-w-xl">
          <Reveal><Eyebrow>{site.process.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">
              {site.process.title}
            </h2>
          </Reveal>
        </div>

        {/* Steps — always 1 col on mobile, 3 cols on lg */}
        <div className="relative mt-14 lg:mt-16">
          {/* Horizontal connector line — desktop only */}
          <div
            className="absolute left-0 right-0 hidden lg:block"
            style={{ top: "2.6rem", height: "1px", background: "linear-gradient(to right, #E5E1D8 0%, #E5E1D8 100%)" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-0 lg:grid-cols-3">
            {site.process.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="relative border-t border-hair py-8 lg:pr-10">
                  <div className="mb-4 flex items-center gap-4">
                    {/* Number bubble */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hair bg-paper">
                      <span className="font-serif text-[1.1rem] font-light text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-[1.1rem] font-medium tracking-tight text-ink">{step.title}</h3>
                  </div>
                  <p className="pl-14 text-[1rem] leading-relaxed text-muted lg:pl-0 lg:pt-1">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal delay={0.32}>
          <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-hair pt-10">
            <a
              href="#reservar"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-[0.9rem] font-medium text-paper transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              Reservar primera sesión
            </a>
            <span className="text-[0.88rem] text-muted-soft">Sin compromiso · Primera sesión a 35€</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
