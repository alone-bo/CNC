import { useCallback, useRef, useState, type TouchEvent } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { caseStudies } from '../data/content'
import { useUI } from '../lib/ui'
import { Container, Eyebrow, buttonClass } from './primitives'

const n = caseStudies.length

export function CaseStudies() {
  const { openQuote } = useUI()
  const [index, setIndex] = useState(0)
  const touchX = useRef<number | null>(null)

  const go = useCallback((dir: 1 | -1) => setIndex((i) => (i + dir + n) % n), [])

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1)
  }

  const arrow =
    'grid h-12 w-12 shrink-0 cursor-pointer place-items-center rounded-full border-2 border-accent bg-white text-accent transition-colors hover:bg-accent hover:text-white'

  return (
    <section id="cases" aria-labelledby="cases-title" className="scroll-mt-16 bg-white py-20 lg:scroll-mt-20 lg:py-28">
      <Container>
        <h2 id="cases-title" className="sr-only">
          Customer Collaboration &amp; Case Studies
        </h2>
        <div className="max-w-[720px]">
          <Eyebrow>Customer Case Studies</Eyebrow>
          <a
            href="#/cases"
            className="group mt-5 inline-flex items-center gap-2 text-xl font-bold text-accent hover:text-accent-dark sm:text-2xl"
          >
            View All Case Studies
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-[15px] leading-relaxed text-muted lg:text-base">
            EZHONG works with customers across automotive, aerospace, medical, robotics, and other industrial sectors.
            Our case studies showcase real manufacturing projects, precision components, and practical engineering
            results.
          </p>
        </div>

        <div
          className="relative mt-10 lg:mt-14 lg:px-20"
          role="region"
          aria-roledescription="carousel"
          aria-label="Case studies"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') go(-1)
            if (e.key === 'ArrowRight') go(1)
          }}
        >
          <button type="button" onClick={() => go(-1)} aria-label="Previous case study" className={`${arrow} absolute top-1/2 left-0 hidden -translate-y-1/2 lg:grid`}>
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next case study" className={`${arrow} absolute top-1/2 right-0 hidden -translate-y-1/2 lg:grid`}>
            <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
          </button>

          <div
            className="touch-pan-y overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-24px_rgba(17,24,39,0.28)] ring-1 ring-line/70"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {caseStudies.map((c, i) => (
                <article
                  key={c.slug}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${n}: ${c.title}`}
                  aria-hidden={i !== index}
                  inert={i !== index}
                  className="grid w-full shrink-0 md:grid-cols-2"
                >
                  <div className="relative min-h-[300px] overflow-hidden bg-surface sm:min-h-[380px] md:min-h-[540px]">
                    <img
                      src={c.image}
                      alt={c.alt}
                      loading={i === 0 ? undefined : 'lazy'}
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <span className="absolute top-5 left-5 rounded-full bg-accent px-4 py-1.5 text-[13px] font-semibold text-white shadow-sm">
                      {c.process}
                    </span>
                    <dl className="absolute inset-x-0 bottom-0 grid grid-cols-2 divide-x divide-white/25 bg-[#17181a]/75 backdrop-blur-sm">
                      <div className="px-6 py-5 sm:px-8">
                        <dd className="text-[30px] leading-none font-bold text-white tabular-nums sm:text-[36px]">{c.quantity}</dd>
                        <dt className="mt-2 text-xs font-medium tracking-[0.12em] text-white/70 uppercase">Parts Produced</dt>
                      </div>
                      <div className="px-6 py-5 sm:px-8">
                        <dd className="text-[30px] leading-none font-bold text-white tabular-nums sm:text-[36px]">{c.componentTypes}</dd>
                        <dt className="mt-2 text-xs font-medium tracking-[0.12em] text-white/70 uppercase">Component Types</dt>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                    <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">{c.industry}</p>
                    <h3 className="mt-3 text-[24px] leading-snug font-bold text-ink lg:text-[28px]">{c.title}</h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted">{c.description}</p>
                    <hr className="my-7 border-line" />
                    <h4 className="text-[17px] font-bold text-ink">{c.valueTitle}</h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.valueText}</p>
                    <p className="mt-5 text-xs text-muted/80">Sample project metrics, shown for illustration pending verification.</p>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-auto md:grid-cols-1 md:pt-8 lg:grid-cols-2">
                      <a href={`#/cases/${c.slug}`} className={`${buttonClass('outline-accent', 'lg')} w-full`}>
                        Read Case Study
                      </a>
                      <button
                        type="button"
                        onClick={() => openQuote({ industry: c.industry.includes('Medical') ? 'Medical Devices' : c.industry.replace('Industrial ', '') })}
                        className={`${buttonClass('accent', 'lg')} w-full`}
                      >
                        Start Your Project
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Position + mobile controls */}
          <div className="mt-6 flex items-center justify-center gap-5">
            <button type="button" onClick={() => go(-1)} aria-label="Previous case study" className={`${arrow} lg:hidden`}>
              <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <p className="min-w-[64px] text-center text-sm font-semibold text-muted tabular-nums" aria-live="polite">
              <span className="text-ink">{String(index + 1).padStart(2, '0')}</span> / {String(n).padStart(2, '0')}
            </p>
            <button type="button" onClick={() => go(1)} aria-label="Next case study" className={`${arrow} lg:hidden`}>
              <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
