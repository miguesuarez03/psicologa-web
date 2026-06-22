import { site } from "@/lib/config";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

export function Process() {
  return (
    <section id="proceso" className="scroll-mt-24 bg-paper py-28 lg:py-40">
      <Container>
        <div className="max-w-xl">
          <Reveal><Eyebrow>{site.process.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">
              {site.process.title}
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {site.process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="border-t border-hair py-8 pr-8">
              <div className="mb-4 flex items-baseline gap-3.5">
                <span className="font-serif text-[1.75rem] font-light text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[1.1rem] font-medium tracking-tight text-ink">{step.title}</h3>
              </div>
              <p className="text-[1rem] leading-relaxed text-muted">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
