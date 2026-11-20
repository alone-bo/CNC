import { useEffect, useRef, useState, type ComponentType, type CSSProperties } from 'react'
import {
  ArrowRight,
  Building2,
  CalendarClock,
  ClipboardList,
  Cog,
  Component,
  Factory,
  FileSearch,
  FlaskConical,
  Gauge,
  Layers,
  Lightbulb,
  ListChecks,
  Package,
  PencilRuler,
  Route,
  Ruler,
  ScanSearch,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { processStages, type StageIcon } from '../data/content'
import { useUI } from '../lib/ui'
import { Button, Container, Eyebrow, buttonClass } from './primitives'

type IconCmp = ComponentType<{ className?: string; strokeWidth?: number }>

/** Production box with a gear badge for the Mass Production stage. */
function ProductionIcon({ className = '', strokeWidth = 1.6 }: { className?: string; strokeWidth?: number }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <Package className="h-full w-full" strokeWidth={strokeWidth} />
      <Cog
        className="absolute -right-1.5 -bottom-1.5 h-[55%] w-[55%] rounded-full bg-(--stage-bg) transition-colors duration-300"
        strokeWidth={strokeWidth + 0.4}
      />
    </span>
  )
}

const stageIcons: Record<StageIcon, IconCmp> = {
  design: Lightbulb,
  prototype: Component,
  production: ProductionIcon,
  packaging: Package,
}

const itemIcons: Record<StageIcon, IconCmp[]> = {
  design: [ClipboardList, FileSearch, ScanSearch, Route],
  prototype: [PencilRuler, Cog, Ruler, ShieldCheck],
  production: [CalendarClock, Factory, Gauge, Workflow],
  packaging: [Layers, Building2, FlaskConical, ListChecks],
}

export function Process() {
  const { openQuote } = useUI()
  const [active, setActive] = useState('packaging')
  const stage = processStages.find((s) => s.slug === active) ?? processStages[3]
  const stripRef = useRef<HTMLDivElement>(null)

  // Keep the active stage visible when the strip scrolls horizontally on small screens.
  useEffect(() => {
    const strip = stripRef.current
    const tab = strip?.querySelector<HTMLElement>(`#stage-tab-${active}`)
    if (!strip || !tab || strip.scrollWidth <= strip.clientWidth) return
    strip.scrollTo({ left: tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' })
  }, [active])

  return (
    <section id="process" className="relative isolate scroll-mt-16 overflow-hidden bg-white py-20 lg:scroll-mt-20 lg:py-28">
      {/* Subtle diagonal geometry near the right edge */}
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[45%] overflow-hidden" aria-hidden>
        <div className="absolute top-[8%] -right-[18%] h-[70%] w-[70%] rotate-[28deg] rounded-[48px] bg-accent/[0.05]" />
        <div className="absolute top-[38%] -right-[8%] h-[55%] w-[40%] rotate-[28deg] rounded-[40px] bg-brand/[0.05]" />
        <div className="absolute -top-[10%] right-[22%] h-[30%] w-[18%] rotate-[28deg] rounded-[28px] bg-accent/[0.04]" />
      </div>

      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <div className="flex justify-center">
            <Eyebrow>How It Works</Eyebrow>
          </div>
          <h2 className="mt-5 text-[32px] leading-[1.12] font-bold tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[46px]">
            Get Your Custom Parts in Just 4 Simple Steps
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted lg:text-[17px]">
            Our streamlined manufacturing workflow helps you move from design and prototyping to production and
            worldwide delivery.
          </p>
        </div>

        {/* Stage navigation */}
        <div className="relative mt-12 lg:mt-16">
          <div
            ref={stripRef}
            role="tablist"
            aria-label="Manufacturing stages"
            className="relative -mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible sm:px-0"
          >
            {/* Connector line through the icon centres */}
            <span
              className="pointer-events-none absolute top-10 right-[12.5%] left-[12.5%] hidden h-px bg-line sm:block"
              aria-hidden
            />
            {processStages.map((s) => {
              const Icon = stageIcons[s.icon]
              const isActive = s.slug === active
              return (
                <button
                  key={s.slug}
                  type="button"
                  role="tab"
                  id={`stage-tab-${s.slug}`}
                  aria-selected={isActive}
                  aria-controls="stage-panel"
                  onClick={() => setActive(s.slug)}
                  className="group relative flex w-[42%] min-w-[150px] shrink-0 cursor-pointer snap-start flex-col items-center text-center sm:w-auto sm:min-w-0"
                >
                  <span
                    style={{ '--stage-bg': isActive ? 'var(--color-accent)' : '#fff' } as CSSProperties}
                    className={`relative grid h-20 w-20 place-items-center rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'scale-105 border-accent bg-accent text-white shadow-[0_14px_30px_-12px_rgba(17,117,252,0.8)]'
                        : 'border-line bg-white text-muted group-hover:border-accent/50 group-hover:text-accent'
                    }`}
                  >
                    <Icon className="h-8 w-8" strokeWidth={1.6} />
                  </span>
                  <span
                    className={`mt-2 text-xs font-bold tracking-[0.14em] tabular-nums transition-colors ${
                      isActive ? 'text-accent' : 'text-muted/80'
                    }`}
                  >
                    {s.number}
                  </span>
                  <span
                    className={`mt-1 max-w-[220px] text-[14.5px] leading-snug font-semibold transition-colors duration-300 lg:text-base ${
                      isActive ? 'text-accent' : 'text-ink/75 group-hover:text-ink'
                    }`}
                  >
                    {s.name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Stage content */}
        <div
          id="stage-panel"
          role="tabpanel"
          aria-labelledby={`stage-tab-${stage.slug}`}
          className="mt-12 border-t border-line pt-10 lg:mt-16 lg:pt-14"
        >
          <div key={stage.slug} className="animate-fade-up">
            <h3 className="text-[28px] leading-tight font-bold text-accent lg:text-[34px]">{stage.name}</h3>
            <p className="mt-3 max-w-[820px] text-base leading-relaxed text-ink/70 lg:text-[17px]">{stage.description}</p>

            <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1fr_2fr] lg:gap-12">
              <div className="relative min-h-[280px] overflow-hidden rounded-xl border border-line bg-surface sm:min-h-[380px]">
                <img src={stage.image} alt={stage.alt} className="absolute inset-0 h-full w-full object-cover" />
              </div>

              <div className="flex flex-col">
                <ol className="divide-y divide-line">
                  {stage.items.map((item, i) => {
                    const ItemIcon = itemIcons[stage.icon][i]
                    return (
                      <li key={item.title} className="flex gap-5 py-5 first:pt-0">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-accent/35 bg-accent/[0.07] text-accent">
                          <ItemIcon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <div>
                          <h4 className="text-[17px] font-bold text-ink">
                            {i + 1}. {item.title}
                          </h4>
                          <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{item.text}</p>
                        </div>
                      </li>
                    )
                  })}
                </ol>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    variant="accent"
                    size="lg"
                    onClick={() => openQuote({ message: `New product introduction — ${stage.name} stage. ` })}
                  >
                    Start Your New Product Introduction Project
                  </Button>
                  <a href={`#/npi/${stage.slug}`} className={buttonClass('outline-accent', 'lg')}>
                    Explore EZHONG NPI Solutions <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
