import { Brain, Compass, Users, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";

const cards = [
  {
    icon: Brain,
    title: "Autoestima",
    desc: "O prazer de estar novamente no controle.",
    highlight: false,
  },
  {
    icon: Compass,
    title: "Liberdade",
    desc: "Vá aonde quiser, quando quiser, por conta própria.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Autonomia",
    desc: "Menos dependência, mais presença na família.",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    desc: "Sistemas testados e aprovados pelos órgãos.",
    highlight: false,
  },
];

export function Emotional() {
  return (
    <section className="bg-surface-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <h2 className="text-balance text-2xl font-bold leading-tight text-ink md:text-4xl">
              Você não perdeu apenas a capacidade de dirigir.
            </h2>
            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              Cada pessoa possui necessidades diferentes. Seja por{" "}
              <strong className="text-ink">
                uma deficiência física, mobilidade reduzida ou outra limitação
              </strong>
              , desenvolvemos{" "}
              <strong className="text-ink">
                adaptações veiculares totalmente personalizadas
              </strong>{" "}
              para que você volte a dirigir com{" "}
              <strong className="text-primary">
                segurança, autonomia e liberdade
              </strong>
              .
            </p>
            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              Nossa engenharia analisa cada caso individualmente para criar a
              solução mais adequada ao seu veículo e ao seu perfil. O objetivo é
              simples: devolver autonomia, confiança e qualidade de vida.
            </p>
            <blockquote className="rounded-2xl border-l-4 border-primary bg-card p-6 shadow-sm md:p-8">
              <p className="text-lg font-semibold italic leading-snug text-ink md:text-xl">
                &ldquo;Não adaptamos apenas veículos. Adaptamos a liberdade de quem deseja voltar a dirigir.&rdquo;
              </p>
            </blockquote>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {cards.map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 100}
                className={
                  card.highlight
                    ? "flex aspect-square flex-col justify-end gap-3 rounded-3xl bg-primary p-6 text-primary-foreground shadow-lg md:p-8"
                    : "flex aspect-square flex-col justify-end gap-3 rounded-3xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
                }
              >
                <card.icon
                  className={
                    card.highlight ? "h-9 w-9" : "h-9 w-9 text-primary"
                  }
                />
                <h3 className="text-xl font-semibold leading-none">
                  {card.title}
                </h3>
                <p
                  className={
                    card.highlight
                      ? "text-sm opacity-90"
                      : "text-sm text-ink-muted"
                  }
                >
                  {card.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
