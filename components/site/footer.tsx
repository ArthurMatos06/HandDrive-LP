import { Share2, PlayCircle, Users } from "lucide-react";

const nav = [
  { label: "Início", href: "#top" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Processo", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
];


export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-alt py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 md:px-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <img
              alt="Hand Drive Logo"
              className="h-22 md:h-28 object-contain"
              src="/images/logo-handdrive-2026.png"
            />
          </div>
          <p className="text-base text-ink-muted">
            Liderando a revolução da mobilidade assistiva no Brasil há décadas.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-semibold text-ink">Navegação</h3>
          <ul className="flex flex-col gap-3 text-ink-muted">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-semibold text-ink">Redes Sociais</h3>
          <div className="flex gap-3">
            {[Share2, PlayCircle, Users].map((Icon, i) => (
              <a
                key={i}
                href="https://www.instagram.com/adaptacoesdeveiculos/"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-ink-muted transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="Rede social"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-border px-5 pt-8 text-center text-sm text-ink-muted md:px-10">
        © 2026 Hand Drive. Mobilidade com Liberdade. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
