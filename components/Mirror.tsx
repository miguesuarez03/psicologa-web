import { site } from "@/lib/config";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function Mirror() {
  return (
    <section className="border-y border-hair bg-paper-alt py-14 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Left: eyebrow + items */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-soft">
                <span className="h-px w-4 bg-hair" aria-hidden="true" />
                {site.mirror.eyebrow}
              </span>
            </Reveal>
            <div className="mt-6 flex flex-col gap-3">
              {site.mirror.items.map((item, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" aria-hidden="true" />
                    <p className="font-serif text-[1.1rem] font-light italic leading-snug text-ink">
                      "{item}"
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: CTA line */}
          <Reveal delay={0.2}>
            <div className="lg:border-l lg:border-hair lg:pl-16">
              <p className="text-[1.2rem] font-medium leading-snug tracking-tight text-ink sm:text-[1.35rem]">
                {site.mirror.cta}
              </p>
              <a
                href="#reservar"
                className="mt-7 inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-[0.9rem] font-medium text-paper transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                Reservar primera sesión
              </a>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
