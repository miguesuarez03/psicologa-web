import { site } from "@/lib/config";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import { CalendlyEmbed } from "./CalendlyEmbed";

const MAPS_EMBED =
  "https://maps.google.com/maps?q=NÖBU+CENTRO+DE+PSICOLOGIA+Sevilla&output=embed&hl=es&z=16";

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
      </svg>
    ),
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    label: "Instagram",
    value: `@${site.contact.instagram}`,
    href: site.contact.instagramUrl,
    external: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Centro",
    value: "NoBu Psicología · C. Manuel Halcón 3, 41018 Sevilla",
    href: "https://www.google.com/maps/search/?api=1&query=NÖBU+CENTRO+DE+PSICOLOGIA+Sevilla",
    external: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    label: "Sesiones",
    value: site.contact.modes,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-paper py-28 lg:py-36">
      <Container>
        {/* Two columns aligned at the top — header lives inside the left column */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">

          {/* ── LEFT: header + contact cards ── */}
          <div className="flex flex-col gap-3">
            {/* Header inside the column so it aligns with Calendly top */}
            <div className="mb-6">
              <Reveal><Eyebrow>Reserva y contacto</Eyebrow></Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-5 text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">
                  Da el primer paso.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
                  Elige el día y la hora que mejor te vengan, o escríbeme directamente. Te respondo personalmente y sin prisa.
                </p>
              </Reveal>
            </div>

            {contactItems.map((item, i) => (
              <Reveal key={item.label} delay={0.04 * i}>
                <div className="flex items-center gap-4 rounded-xl border border-hair bg-paper-alt p-4 transition-colors duration-300 hover:border-hair/60">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hair bg-paper text-accent">
                    <div className="h-4 w-4">{item.icon}</div>
                  </div>
                  <div>
                    <p className="mb-0.5 text-[0.68rem] font-medium uppercase tracking-[0.15em] text-muted-soft">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[0.95rem] text-ink transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[0.95rem] text-ink">{item.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.18}>
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-4 text-[0.95rem] font-medium text-paper transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                Reservar primera cita
              </a>
            </Reveal>
          </div>

          {/* ── RIGHT: Calendly + Maps — start at the very top of the grid ── */}
          <Reveal delay={0.08} className="flex flex-col gap-4">

            <div id="reservar" className="scroll-mt-24" />
            <div className="overflow-hidden rounded-2xl border border-hair bg-paper-alt">
              <CalendlyEmbed url={site.calendlyUrl} height={420} />
            </div>

            <div className="overflow-hidden rounded-2xl border border-hair" style={{ height: "260px" }}>
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación NoBu Psicología"
                className="grayscale"
              />
            </div>

            <p className="text-center text-[0.75rem] text-muted-soft">
              NoBu Psicología · C. Manuel Halcón 3, Sevilla — También atención online desde cualquier lugar
            </p>

          </Reveal>
        </div>
      </Container>
    </section>
  );
}
