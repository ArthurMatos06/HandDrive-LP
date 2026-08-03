import Image from "next/image";
import { Target, HeartHandshake, Award } from "lucide-react";
import { Reveal } from "./reveal";

const stats = [
  { value: "+15", label: "Anos de experiência" },
  { value: "+500", label: "Vidas transformadas" },
  { value: "100%", label: "Projetos homologados" },
];

const values = [
  {
    icon: Target,
    title: "Nossa Missão",
    desc: "Devolver a autonomia e a liberdade de dirigir para pessoas com deficiência ou mobilidade reduzida, com soluções seguras e personalizadas.",
  },
  {
    icon: HeartHandshake,
    title: "Nosso Compromisso",
    desc: "Um atendimento humano e próximo, que entende cada história e desenha a adaptação ideal para cada condutor.",
  },
  {
    icon: Award,
    title: "Nossa Qualidade",
    desc: "Equipe técnica especializada e equipamentos certificados, seguindo rigorosamente as normas de trânsito do país.",
  },
];

export function About() {
  return (
    <section id="quem-somos" className="bg-surface-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/sobre_nós.jpg"
                alt="Equipe técnica da Hand Drive instalando adaptações veiculares em um carro"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 flex w-[88%] -translate-x-1/2 justify-around gap-2 rounded-2xl bg-card p-4 shadow-lg ring-1 ring-border md:-bottom-8 md:p-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center"
                >
                  <span className="text-xl font-bold text-primary md:text-2xl">
                    {stat.value}
                  </span>
                  <span className="text-[11px] leading-tight text-ink-muted md:text-xs">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <Reveal className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Quem Somos
              </span>
              <h2 className="text-balance text-2xl font-bold leading-tight text-ink md:text-4xl">
                Especialistas em transformar limitações em liberdade.
              </h2>
              <p className="text-base leading-relaxed text-ink-muted md:text-lg">
                A Hand Drive é uma das empresas pioneiras do Brasil no
                desenvolvimento de equipamentos de adaptações veiculares com
                mais de 30 anos de experiência no ramo.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4">
              {values.map((value, i) => (
                <Reveal
                  key={value.title}
                  delay={i * 100}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-ink">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {value.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
