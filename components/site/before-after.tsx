import { CircleX, CircleCheckBig } from 'lucide-react'
import { Reveal } from './reveal'

const before = [
  'Dependência total de familiares ou aplicativos.',
  'Limitação de horários e roteiros.',
  'Sentimento de isolamento e falta de controle.',
]

const after = [
  'Independência absoluta para ir onde quiser.',
  'Segurança máxima com sistemas homologados.',
  'Retomada da autoestima e prazer em dirigir.',
]

export function BeforeAfter() {
  return (
    <section className="bg-ink py-16 text-[color:var(--surface)] md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-12 text-center md:mb-16">
          <h2 className="text-balance text-2xl font-bold md:text-4xl">Transforme sua realidade</h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            A diferença entre depender e liderar.
          </p>
        </Reveal>

        <Reveal className="grid gap-1 overflow-hidden rounded-3xl shadow-2xl md:grid-cols-2">
          <div className="space-y-6 bg-white/5 p-8 backdrop-blur-md md:p-12">
            <h3 className="text-xl font-bold text-white md:text-2xl">Cenário Atual</h3>
            <ul className="space-y-5">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-4 text-white/70">
                  <CircleX className="mt-0.5 h-6 w-6 shrink-0 text-[color:var(--destructive)]" />
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 bg-primary p-8 text-primary-foreground md:p-12">
            <h3 className="text-xl font-bold md:text-2xl">Vida com Hand Drive</h3>
            <ul className="space-y-5">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CircleCheckBig className="mt-0.5 h-6 w-6 shrink-0" />
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
