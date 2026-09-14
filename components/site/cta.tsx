import * as pixel from "@/lib/fpixel";
import { WhatsappCta } from "./whatsapp-cta";

export function Cta() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24"
    >
      <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
        <h2 className="text-balance text-2xl font-bold leading-tight md:text-4xl">
          Sua independência pode começar hoje.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base opacity-90 md:text-lg">
          Não adie mais o seu sonho de liberdade. Nossa equipe está pronta para
          desenhar o projeto ideal para a sua nova vida.
        </p>
        <div className="mt-10 flex justify-center">
          <WhatsappCta />
        </div>
        <p className="mt-10 text-xs opacity-70 md:text-sm">
          Atendimento em todo o Brasil • Consultoria Técnica Sem Compromisso
        </p>
      </div>
    </section>
  );
}
