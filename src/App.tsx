import { CaseStudies } from './components/CaseStudies'
import { ChatWidget, FloatingToolbar, MobileCTA } from './components/FloatingContact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Industries } from './components/Industries'
import { News } from './components/News'
import { PageView } from './components/PageView'
import { Process } from './components/Process'
import { QuoteModal } from './components/QuoteModal'
import { Services } from './components/Services'
import { WhyChoose } from './components/WhyChoose'
import { SectionDivider } from './components/primitives'
import { UIProvider, useHashRoute } from './lib/ui'

function Site() {
  const route = useHashRoute()
  return (
    <>
      <Header forceSolid={!!route} />
      <main>
        <Hero />
        <Services />
        <SectionDivider />
        <Industries />
        <SectionDivider full />
        <WhyChoose />
        <SectionDivider full />
        <Process />
        <SectionDivider />
        <CaseStudies />
        <SectionDivider />
        <News />
      </main>
      <Footer id="contact" />
      <PageView route={route} />
      <FloatingToolbar />
      <ChatWidget />
      <MobileCTA />
      <QuoteModal />
    </>
  )
}

export default function App() {
  return (
    <UIProvider>
      <Site />
    </UIProvider>
  )
}
