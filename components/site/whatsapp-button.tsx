import { MessageCircle } from 'lucide-react'

export function WhatsappButton() {
  return (
    <a
      href="https://w.app/handdrive"
      className="group fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16"
      aria-label="Falar com um especialista no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap rounded-xl bg-card px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
        Falar com Especialista
      </span>
    </a>
  )
}
