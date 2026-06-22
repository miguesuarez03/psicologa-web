import Image from "next/image";
import { site } from "@/lib/config";
import { images } from "@/lib/images";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 border-t border-hair bg-paper py-14 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-hair bg-paper-alt">
              <Image
                src={images.about}
                alt={`${site.name}, psicóloga`}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <div>
            <Reveal><Eyebrow>{site.about.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">
                {site.about.title}{" "}
                <span className="font-serif font-light italic">{site.about.titleAccent}</span>
              </h2>
            </Reveal>
            {site.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.06}>
                <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.22}>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {site.about.cards.map((card) => (
                  <div key={card.title} className="rounded-xl border border-hair bg-paper-alt p-4">
                    <p className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-accent">{card.title}</p>
                    <p className="text-[0.88rem] leading-relaxed text-muted">{card.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#reservar"
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-[0.9rem] font-medium text-paper transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:bg-accent-hover"
                >
                  Reservar primera sesión
                </a>
                <a
                  href={site.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[0.88rem] text-muted-soft transition-colors hover:text-ink"
                >
                  <svg className="h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                  @{site.contact.instagram}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
