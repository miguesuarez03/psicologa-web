import { site } from "@/lib/config";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

/**
 * Google Maps embed.
 * Replace the src URL with your own location:
 * Go to maps.google.com → find NoBu Psicología → Share → Embed a map → copy src URL
 *
 * Current placeholder: NoBu Psicología, Bollullos de la Mitación, Sevilla
 */
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.1234!2d-6.1234567!3d37.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIwJzQ0LjQiTiA2wrAwNyc0NC40Ilc!5e0!3m2!1ses!2ses!4v1234567890";

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <polyline points="2,4 12,13 22,4"/>
      </svg>
    ),
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="5"/>
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
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Centro",
    value: "NoBu Psicología · Sevilla",
    href: "https://maps.google.com",
    external: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
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
        <div className="mb-14 max-w-xl">
          <Reveal><Eyebrow>Contacto</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]">
              ¿Hablamos?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
              Si prefieres escribir antes de reservar, estoy aquí. Te respondo personalmente y sin prisa.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: contact details */}
          <div className="flex flex-col gap-4">
            {contactItems.map((item) => (
              <Reveal key={item.label}>
                <div className="flex items-start gap-4 rounded-xl border border-hair bg-paper-alt p-5 transition-colors duration-300 hover:border-hair/80">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hair bg-paper text-accent">
                    <div className="h-4 w-4">{item.icon}</div>
                  </div>
                  <div>
                    <p className="mb-0.5 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-muted-soft">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[1rem] text-ink transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[1rem] text-ink">{item.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.16}>
              <a
                href="#reservar"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-4 text-[0.95rem] font-medium text-paper transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:bg-accent-hover sm:w-auto"
              >
                Reservar primera cita
              </a>
            </Reveal>
          </div>

          {/* Right: Google Maps */}
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-hair" style={{ height: "420px" }}>
              {/*
                ── HOW TO GET YOUR REAL MAP ──────────────────────────────────────
                1. Go to maps.google.com
                2. Search for "NoBu Psicología" or your address
                3. Click Share → Embed a map
                4. Copy the src="..." URL from the <iframe> code
                5. Replace the MAPS_EMBED constant at the top of this file
                ─────────────────────────────────────────────────────────────────
              */}
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
            <p className="mt-3 text-center text-[0.78rem] text-muted-soft">
              NoBu Psicología · Sevilla — También atención online desde cualquier lugar
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
