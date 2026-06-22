import { site } from "@/lib/config";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

const stepIcons = [
  // Mensaje / primer contacto
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <path d="M8 10h.01M12 10h.01M16 10h.01"/>
  </svg>,
  // Persona / sesión inicial
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/>
    <path d="M16 3.5c1.5.8 2.5 2.3 2.5 4"/>
  </svg>,
  // Corazón / acompañamiento
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    <path d="M8 10h2l1.5 3 2-6 1.5 3H17"/>
  </svg>,
];

const stepColors = [
  { bg: "bg-[#F5EDE8]", border: "border-[#E8D5CB]", icon: "bg-[#7A3E28]/10 text-[#7A3E28]" },
  { bg: "bg-[#EEF0F5]", border: "border-[#D8DCE8]", icon: "bg-[#3D4E7A]/10 text-[#3D4E7A]" },
  { bg: "bg-[#EDF4EE]", border: "border-[#CDE0CE]", icon: "bg-[#2E6B32]/10 text-[#2E6B32]" },
];

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

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-14 lg:gap-5">
          {site.process.steps.map((step, i) => {
            const c = stepColors[i];
            return (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className={`relative flex h-full flex-col gap-4 rounded-2xl border p-6 ${c.bg} ${c.border}`}>
                  {/* Step number top-right */}
                  <span className="absolute right-5 top-5 font-serif text-[2rem] font-light leading-none text-ink/8 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.icon}`}>
                    <div className="h-5 w-5">{stepIcons[i]}</div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[1.05rem] font-medium tracking-tight text-ink">{step.title}</h3>
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={0.32}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
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
