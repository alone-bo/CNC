import { ArrowRight } from 'lucide-react'
import { services } from '../data/content'
import { Container, Eyebrow } from './primitives'

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-white py-20 lg:scroll-mt-20 lg:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <Eyebrow>Manufacturing Services</Eyebrow>
            <h2 className="mt-5 text-[32px] leading-[1.12] font-bold tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[46px]">
              EZHONG Manufacturing Services from Prototyping to Production
            </h2>
          </div>
          <p className="max-w-[560px] text-base leading-relaxed text-muted lg:justify-self-end lg:text-[17px]">
            EZHONG combines in-house CNC machining with an integrated network of fabrication, molding and casting
            resources. Our engineers review every drawing for manufacturability, coordinate materials and finishing,
            and support your project from rapid prototypes through low-volume and high-volume production.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {services.map((s) => (
            <li key={s.slug}>
              <a
                href={`#/services/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_40px_-18px_rgba(17,24,39,0.25)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-surface">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                  <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand opacity-100 transition-all duration-300 lg:-translate-x-1 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
