'use client'

import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-surface/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#top" className="flex items-center gap-2 font-bold text-primary">
        <img
          alt="Hand Drive Logo"
          className="h-19 md:h-28 object-contain"
          src="/images/logo-handdrive-2026.png"
        />
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center lg:flex">
          <a
            href="#contato"
            className="flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
          >
            Solicitar Orçamento
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-ink lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          'overflow-hidden border-t border-border bg-surface transition-[max-height] duration-300 ease-out lg:hidden',
          open ? 'max-h-96' : 'max-h-0',
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-muted transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  )
}
