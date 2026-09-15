"use client";
import {
  BadgeCheck,
  MessageCircle,
  Star,
  Users,
  Wrench,
  PencilRuler,
  ShieldCheck,
} from "lucide-react";
import * as pixel from "@/lib/fpixel";

const badges = [
  { icon: Users, label: "Atendimento especializado" },
  { icon: Wrench, label: "Instalação profissional" },
  { icon: PencilRuler, label: "Projeto personalizado" },
  { icon: ShieldCheck, label: "Equipamentos certificados" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="hero-gradient relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Título e descrição */}
          <div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-1 lg:justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-primary">
              <BadgeCheck className="h-4 w-4" />
              Tecnologia Patenteada e Homologada
            </span>

            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-ink md:text-5xl md:leading-[1.1]">
              Volte a dirigir com{" "}
              <span className="text-primary">
                segurança, independência e liberdade,
              </span>{" "}
              independentemente da sua limitação.
            </h1>

            <p className="max-w-xl text-pretty text-base leading-relaxed text-ink-muted md:text-lg">
              Desenvolvemos adaptações veiculares personalizadas para pessoas
              com deficiência ou mobilidade reduzida, sempre de acordo com as
              suas necessidades e com total segurança.
            </p>
          </div>

          {/* Vídeo (fica logo abaixo do título/descrição no mobile, à direita no desktop) */}
          <div className="relative mx-auto w-full max-w-[420px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:self-center">
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[420px] overflow-hidden rounded-3xl bg-muted shadow-2xl ring-1 ring-black/5">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/0ygeXf9hR2A?rel=0&modestbranding=1"
                title="Hand Drive - Mobilidade com Liberdade"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 hidden h-32 w-32 rounded-full bg-primary/10 blur-3xl lg:block" />
            <div className="absolute -top-6 -left-6 -z-10 hidden h-32 w-32 rounded-full bg-primary/10 blur-3xl lg:block" />
          </div>

          {/* Botões, selos e avaliação */}
          <div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-2">
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="flex h-14 items-center justify-center gap-2 rounded-full border-2 border-primary bg-card px-8 font-semibold text-primary transition-colors hover:bg-secondary"
                onClick={(e) => {
                  e.preventDefault();

                  pixel.whatsappClick();

                  setTimeout(() => {
                    window.location.href =
                      "https://wa.me/5511984353950?text=Gostaria%20de%20solicitar%20um%20or%C3%A7amento";
                  }, 200);
                }}
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
              <a
                href="#quem-somos"
                className="flex h-14 items-center justify-center rounded-full bg-primary px-8 font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
              >
                Conhecer a Hand Drive
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-4">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col gap-2">
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium leading-tight text-ink-muted">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex text-[color:var(--star)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-ink-muted">
                Centenas de clientes recuperaram sua independência.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
