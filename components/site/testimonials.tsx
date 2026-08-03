import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { Reveal } from './reveal'

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'Condutor há 2 anos • São Paulo, SP',
    image: '/images/cliente-1.png',
    text: 'Voltei a dirigir depois de anos dependendo de outras pessoas. A equipe da Hand Drive entendeu exatamente o que eu precisava. Hoje levo meus filhos à escola sozinho.',
  },
  {
    name: 'Juliana Ferreira',
    role: 'Condutora há 1 ano • Curitiba, PR',
    image: '/images/cliente-2.png',
    text: 'O atendimento foi humano do início ao fim. O projeto foi feito sob medida para mim e a segurança é impecável. Recuperei minha independência e minha confiança.',
  },
  {
    name: 'Antônio Ribeiro',
    role: 'Condutor há 3 anos • Belo Horizonte, MG',
    image: '/images/cliente-3.png',
    text: 'Achei que nunca mais fosse dirigir. A adaptação mudou minha vida completamente. Profissionais sérios, equipamento certificado e um suporte que faz toda a diferença.',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-surface-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Depoimentos
          </span>
          <h2 className="mt-4 text-balance text-2xl font-bold leading-tight text-ink md:text-4xl">
            Histórias reais de quem retomou a liberdade.
          </h2>
          <p className="mt-4 text-base text-ink-muted md:text-lg">
            Centenas de clientes já recuperaram sua independência com a Hand Drive.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <div className="flex text-[color:var(--star)]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="flex-1 text-base leading-relaxed text-ink-muted">{t.text}</p>
              <div className="flex items-center gap-4 border-t border-border pt-5">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-secondary">
                  <Image
                    src={t.image || "/placeholder.svg"}
                    alt={`Foto de ${t.name}, cliente da Hand Drive`}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-ink">{t.name}</span>
                  <span className="text-xs text-ink-muted">{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
