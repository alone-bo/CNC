import { ChevronRight } from 'lucide-react'
import { industriesHero, industryCards } from '../data/industries'
import { Container } from './primitives'

export function IndustriesOverview() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#1b1c1e]">
        <img
          src={industriesHero.image}
          alt={industriesHero.alt}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#151618]/55" aria-hidden />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-r from-[#151618]/88 via-[#151618]/55 to-[#151618]/20"
          aria-hidden
        />
        <Container className="flex min-h-[500px] items-center py-16 sm:min-h-[540px] lg:min-h-[580px] lg:py-20">
          <div className="max-w-[880px]">
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white/80 uppercase">
              <span className="h-0.5 w-8 bg-accent" aria-hidden />
              Industries We Serve
            </p>
            <h1 className="mt-5 text-[34px] leading-[1.08] font-bold tracking-[-0.025em] text-white sm:text-[44px] lg:text-[54px]">
              {industriesHero.title}
            </h1>
            <p className="mt-6 max-w-[780px] text-[15px] leading-[1.7] text-white/80 lg:text-base">
              {industriesHero.description}
            </p>
          </div>
        </Container>
      </section>

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
              {industriesHero.title}
            </li>
          </ol>
        </Container>
      </nav>

      <section aria-label="Industries we serve" className="bg-white py-14 lg:py-20">
        <Container>
          <ul className="grid gap-x-7 gap-y-12 md:grid-cols-2">
            {industryCards.map((card) => (
              <li key={card.slug}>
                <article className="group flex h-full flex-col">
                  <a
                    href={`#/industries/${card.slug}`}
                    tabIndex={-1}
                    className="block aspect-[16/9] overflow-hidden bg-surface"
                  >
                    <img
                      src={card.image}
                      alt={card.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </a>
                  <p className="mt-6 text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
                    {card.eyebrow}
                  </p>
                  <h2 className="mt-2 text-[22px] leading-snug font-bold text-ink">
                    <a href={`#/industries/${card.slug}`} className="hover:text-brand">
                      {card.title}
                    </a>
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.65] text-muted">{card.description}</p>
                  <div className="mt-auto pt-6">
                    <a
                      href={`#/industries/${card.slug}`}
                      className="inline-flex min-h-12 items-center border border-ink bg-white px-5 py-3 text-left text-[12px] leading-snug font-bold tracking-[0.05em] text-ink uppercase transition-colors hover:bg-ink hover:text-white"
                    >
                      {card.cta}
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
