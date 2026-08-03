import { Cog, LifeBuoy, Settings2 } from 'lucide-react'
import { Reveal } from './reveal'

const items = [
  {
    icon: Cog,
    title: 'Linha Mecânica',
    desc: 'Adaptações completas nos sistemas de aceleração, frenagem, embreagem e demais comandos, permitindo que o motorista tenha total controle durante a condução.',
  },
  {
    icon: LifeBuoy,
    title: 'Linha de Direção',
    desc: 'Soluções para o sistema de direção que se adaptam ao nível de mobilidade de cada condutor — anéis aceleradores, pedais direcionais e outros dispositivos com movimentos precisos e seguros.',
  },
  {
    icon: Settings2,
    title: 'Projeto Personalizado',
    desc: 'Cada adaptação considera as necessidades, limitações e objetivos de cada motorista. Analisamos o veículo e definimos a melhor solução para conforto, segurança e autonomia.',
  },
]

export function Technology() {
  return (
    <section id="tecnologia" className="bg-surface-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Engenharia Personalizada
          </span>
          <h2 className="mt-4 text-balance text-2xl font-bold leading-tight text-ink md:text-4xl">
            Cada adaptação é desenvolvida para a sua necessidade.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-8 transition-colors hover:border-primary/30 md:p-10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="text-base leading-relaxed text-ink-muted">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
