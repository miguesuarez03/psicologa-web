import { site } from "@/lib/config";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import { CalendlyEmbed } from "./CalendlyEmbed";

export function Booking() {
  return (
    <section id="reservar" className="scroll-mt-24 border-t border-hair bg-paper-alt py-28 lg:py-40">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>{site.booking.eyebrow}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.75rem]">
              {site.booking.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted">
              {site.booking.text}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <div className="mx-auto mt-14 max-w-3xl">
            <CalendlyEmbed url={site.calendlyUrl} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
