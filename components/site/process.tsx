import { Trophy } from 'lucide-react'
import { Reveal } from './reveal'

const steps = [
  { n: '1', title: 'Contato', desc: 'Primeira conversa para entender suas necessidades.' },
  { n: '2', title: 'Avaliação', desc: 'Análise técnica detalhada da sua mobilidade.' },
  { n: '3', title: 'Projeto', desc: 'Desenvolvimento da adaptação exclusiva para seu veículo.' },
  { n: '4', title: 'Instalação', desc: 'Execução técnica de alta precisão na oficina.' },
  { n: '5', title: 'Testes', desc: 'Treinamento e calibração fina com o cliente.' },
]

export function Process() {
  return (
    <section id="processo" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-14 text-center md:mb-20">
          <h2 className="text-balance text-2xl font-bold leading-tight text-ink md:text-4xl">
            Sua jornada para a liberdade
          </h2>
          <p className="mt-4 text-base text-ink-muted md:text-lg">
            Um processo transparente e profissional em cada etapa.
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute left-8 right-8 top-8 hidden h-0.5 bg-border lg:block" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 100}
                className="relative flex flex-col items-center gap-3 text-center"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {step.n}
                </div>
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                <p className="text-sm text-ink-muted">{step.desc}</p>
              </Reveal>
            ))}
            <Reveal delay={500} className="relative flex flex-col items-center gap-3 text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground ring-8 ring-primary/20">
                <Trophy className="h-7 w-7" />
              </div>
              <h3 className="text-base font-bold text-primary">Independência</h3>
              <p className="text-sm text-ink-muted">Você pronto para ganhar as ruas sozinho.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
