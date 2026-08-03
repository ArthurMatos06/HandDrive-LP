import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Emotional } from '@/components/site/emotional'
import { About } from '@/components/site/about'
import { Technology } from '@/components/site/technology'
import { BeforeAfter } from '@/components/site/before-after'
import { Process } from '@/components/site/process'
import { Testimonials } from '@/components/site/testimonials'
import { Faq } from '@/components/site/faq'
import { Cta } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'
import { WhatsappButton } from '@/components/site/whatsapp-button'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Emotional />
        <Technology />
        <About />
        <Testimonials />
        <BeforeAfter />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}
