import { ChevronRight } from 'lucide-react'
import { serviceCatalog, servicesHero } from '../data/content'
import { Container } from './primitives'

export function ServicesOverview() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative isolate overflow-hidden bg-[#1b1c1e]">
        <img src={servicesHero.image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[#151618]/55" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#151618]/80 via-[#151618]/45 to-transparent" aria-hidden />
        <Container className="flex min-h-[420px] items-center py-16 sm:min-h-[460px] lg:min-h-[520px] lg:py-20">
          <div className="lg:w-[55%]">
            <h1 className="text-[36px] leading-[1.1] font-bold tracking-[-0.02em] text-white sm:text-[48px] lg:text-[56px]">
              {servicesHero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-base leading-[1.6] text-white/85 lg:text-[17px]">{servicesHero.description}</p>
          </div>
        </Container>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-line bg-white">
        <Container>
          <ol className="flex flex-wrap items-center gap-2 py-4 text-sm">
            <li>
              <a href="#top" className="font-medium text-ink/80 hover:text-brand">
                Home
              </a>
            </li>
            <li aria-hidden>
              <ChevronRight className="h-4 w-4 text-accent" strokeWidth={2.5} />
            </li>
            <li aria-current="page" className="text-muted/80">
              Complete On-Demand Manufacturing Technologies
            </li>
          </ol>
        </Container>
      </nav>

      {/* Core services grid */}
      <section aria-label="Manufacturing services" className="bg-white py-14 lg:py-20">
        <Container>
          <ul className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {serviceCatalog.map((s) => (
              <li key={s.slug}>
                <article className="group flex h-full flex-col">
                  <a href={`#/services/${s.slug}`} tabIndex={-1} className="block aspect-[4/3] overflow-hidden bg-surface">
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </a>
                  <h2 className="mt-6 text-[21px] leading-snug font-bold text-ink">
                    <a href={`#/services/${s.slug}`} className="hover:text-brand">
                      {s.title}
                    </a>
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.6] text-muted">{s.description}</p>
                  <div className="mt-auto pt-6">
                    <a
                      href={`#/services/${s.slug}`}
                      className="inline-flex min-h-12 items-center border border-ink bg-white px-5 py-3 text-left text-[13px] leading-snug font-bold tracking-[0.06em] text-ink uppercase transition-colors hover:bg-ink hover:text-white"
                    >
                      {s.cta}
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
