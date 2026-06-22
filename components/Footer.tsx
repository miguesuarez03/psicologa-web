import { site } from "@/lib/config";
import { Container } from "./ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hair bg-paper py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-[0.95rem] font-medium tracking-tight text-ink">{site.name}</p>
            <p className="mt-1 text-[0.8rem] text-muted-soft">{site.tagline} · {site.price} por sesión</p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-[0.875rem] text-muted transition-colors hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-hair pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] text-muted-soft">
            © {year} {site.name} · NoBu Psicología. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[0.75rem] text-muted-soft transition-colors hover:text-ink">Aviso legal</a>
            <a href="#" className="text-[0.75rem] text-muted-soft transition-colors hover:text-ink">Privacidad</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
