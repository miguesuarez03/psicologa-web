import { site } from "@/lib/config";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function Trust() {
  if (!site.trust.testimonials.length) return null;
  return (
    <section
      className="py-28 lg:py-36"
      style={{ backgroundColor: "#F0EBE3" }}
    >
      <Container>
        <Reveal>
          <span className="inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted-soft">
            <span className="h-px w-5 bg-hair" aria-hidden="true" />
            {site.trust.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 max-w-lg text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">
            {site.trust.title}{" "}
            <span className="font-serif font-light italic">{site.trust.titleAccent}</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {site.trust.testimonials.map((t, i) => (
            <Reveal key={i} delay={0.05 * (i % 3)} className="border-t border-hair/60 py-8 pr-8">
              <p className="font-serif text-[1.2rem] font-light italic leading-relaxed text-muted">
                "{t.quote}"
              </p>
              <div className="mt-5">
                <p className="text-[0.9rem] font-medium text-ink">{t.author}</p>
                <p className="mt-0.5 text-[0.72rem] uppercase tracking-[0.1em] text-muted-soft">{t.context}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
