"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Atendemos clientes de todo o Brasil?",
    a: "Sim. Atendemos clientes de diversas regiões do Brasil. Entre em contato com nossa equipe para entendermos sua necessidade e orientarmos a melhor forma de realizar o atendimento e a adaptação do seu veículo.",
  },
  {
    q: "Meu carro pode ser adaptado?",
    a: "Na maioria dos casos, sim. Trabalhamos com veículos nacionais e importados de diferentes marcas e modelos. Nossa equipe avalia o veículo e indica a adaptação mais adequada para cada situação.",
  },
  {
    q: "A adaptação é feita para qualquer tipo de deficiência ou necessidade?",
    a: "Sim. Cada adaptação é desenvolvida de forma personalizada, de acordo com as necessidades e limitações de cada motorista. Antes da instalação, realizamos uma análise completa para identificar a solução mais adequada, garantindo conforto, segurança e autonomia durante a condução.",
  },
  {
    q: "Como faço para solicitar um orçamento?",
    a: "É simples. Entre em contato pelo WhatsApp ou pelo formulário do site, informe sua necessidade e nossa equipe fará uma avaliação para indicar a adaptação ideal para você e preparar um orçamento personalizado.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <h2 className="mb-12 text-center text-2xl font-bold text-ink md:mb-16 md:text-4xl">
          Dúvidas Frequentes
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink md:text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-base leading-relaxed text-ink-muted">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
