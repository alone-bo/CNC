import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { industries } from '../data/content'
import { useUI } from '../lib/ui'
import { Container, Eyebrow, buttonClass } from './primitives'

export function Industries() {
  const { openQuote } = useUI()
  const [active, setActive] = useState('medical-devices')
  const current = industries.find((i) => i.slug === active) ?? industries[0]

  return (
    <section id="industries" className="scroll-mt-16 py-20 lg:scroll-mt-20 lg:py-28">
      <Container>
        <div className="max-w-[760px]">
          <Eyebrow>Industry Solutions</Eyebrow>
          <h2 className="mt-5 text-[32px] leading-[1.12] font-bold tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[46px]">
            Custom Manufacturing Solutions for Every Industry
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted lg:text-[17px]">
            Precision-engineered components designed to meet the demands of diverse industrial applications.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[31fr_69fr] lg:gap-10">
          {/* Accordion */}
          <ul className="border-t border-line" role="list">
            {industries.map((ind) => {
              const isActive = ind.slug === active
              return (
                <li key={ind.slug} className="border-b border-line">
                  <button
                    type="button"
                    id={`ind-tab-${ind.slug}`}
                    aria-expanded={isActive}
                    aria-controls="industry-panel"
                    onClick={() => setActive(ind.slug)}
                    className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left lg:py-6"
                  >
                    <span
                      className={`text-lg font-semibold transition-colors duration-300 lg:text-xl ${
                        isActive ? 'text-accent' : 'text-ink/80 group-hover:text-ink'
                      }`}
                    >
                      {ind.name}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-accent transition-colors duration-300 ${
                        isActive ? 'bg-accent text-white' : 'text-accent group-hover:bg-accent/10'
                      }`}
                      aria-hidden
                    >
                      {isActive ? <Minus className="h-4 w-4" strokeWidth={3} /> : <Plus className="h-4 w-4" strokeWidth={3} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                      isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-12 pb-6 text-[15px] leading-relaxed text-muted">{ind.summary}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          {/* Case study panel */}
          <div
            id="industry-panel"
            role="region"
            aria-labelledby={`ind-tab-${current.slug}`}
            aria-live="polite"
            className="rounded-2xl bg-surface p-6 sm:p-8 lg:p-10"
          >
            <div key={current.slug} className="animate-fade-up">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                <div className="max-w-[560px]">
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Case Study · {current.name}
                  </p>
                  <h3 className="mt-3 text-[22px] leading-snug font-bold text-ink sm:text-2xl">{current.caseTitle}</h3>
                  <span className="mt-4 block h-1 w-12 rounded-full bg-accent" aria-hidden />
                </div>
                <div className="flex shrink-0 gap-3">
                  <a href={`#/industries/${current.slug}`} className={buttonClass('outline-accent')}>
                    Learn More
                  </a>
                  <button
                    type="button"
                    onClick={() => openQuote({ industry: current.name })}
                    className={buttonClass('accent')}
                  >
                    Get a Quote
                  </button>
                </div>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:mt-10">
                <div>
                  <p className="text-[15px] leading-relaxed text-muted">{current.overview}</p>
                  <dl className="mt-6 divide-y divide-line border-y border-line">
                    {current.specs.map((s) => (
                      <div key={s.label} className="flex items-start gap-3 py-3.5">
                        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent ring-4 ring-accent/15" aria-hidden />
                        <dt className="w-[46%] shrink-0 text-sm text-muted">{s.label}</dt>
                        <dd className="text-sm font-semibold text-ink">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-xs text-muted/80">Representative specifications. Final values confirmed per project.</p>
                </div>
                <div className="relative min-h-[280px] overflow-hidden rounded-xl bg-line sm:min-h-[360px]">
                  <img src={current.image} alt={current.alt} className="absolute inset-0 h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
