import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { cncFinishing, type CncFinish } from '../data/cncMachining'
import { Button } from './primitives'

export const LIGHT = '#F4F5F6'

export function DetailContainer({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>
}

export function DetailHead({
  title,
  subtitle,
  line = false,
  align = 'left',
  className = '',
}: {
  title: ReactNode
  subtitle?: ReactNode
  line?: boolean
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-[820px] text-center' : 'max-w-[820px]'} ${className}`}
    >
      <h2 className="text-[28px] leading-[1.16] font-bold tracking-[-0.02em] text-ink sm:text-[34px] lg:text-[40px]">
        {title}
      </h2>
      {line && (
        <span
          className={`mt-4 block h-1 w-32 bg-accent ${align === 'center' ? 'mx-auto' : ''}`}
          aria-hidden
        />
      )}
      {subtitle && <p className="mt-4 text-[15px] leading-relaxed text-muted">{subtitle}</p>}
    </div>
  )
}

export function ServiceHero({
  titleLines,
  description,
  cta,
  image,
  alt,
  onQuote,
}: {
  titleLines: string[]
  description: string
  cta: string
  image: string
  alt: string
  onQuote: () => void
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1118]">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-[#070c12]/95 via-[#070c12]/75 to-[#070c12]/25"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#070c12]/50 via-transparent to-transparent" aria-hidden />

      <DetailContainer className="flex min-h-[540px] flex-col justify-center py-16 lg:min-h-[620px] lg:py-20">
        <div className="max-w-[620px]">
          <h1
            aria-label={titleLines.join(' ')}
            className="text-[37px] leading-[1.06] font-bold tracking-[-0.03em] text-white sm:text-[50px] lg:text-[58px]"
          >
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-[550px] text-[15px] leading-[1.65] text-white/78 sm:text-base">
            {description}
          </p>
          <div className="mt-9">
            <Button variant="accent" size="lg" onClick={onQuote}>
              {cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}

export function BreadcrumbBar({ label }: { label: string }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-white">
      <DetailContainer>
        <ol className="flex flex-wrap items-center gap-2 py-3.5 text-[13px] text-muted">
          <li>
            <a href="#top" className="transition-colors hover:text-accent">
              Home
            </a>
          </li>
          <li aria-hidden className="text-muted/50">
            /
          </li>
          <li>
            <a href="#/services" className="transition-colors hover:text-accent">
              Services
            </a>
          </li>
          <li aria-hidden className="text-muted/50">
            /
          </li>
          <li aria-current="page" className="font-medium text-ink/80">
            {label}
          </li>
        </ol>
      </DetailContainer>
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/* Capabilities                                                       */
/* ------------------------------------------------------------------ */

export type CapabilityItem = {
  title: string
  description: string
  image: string
  alt: string
  points: string[]
  href?: string
}

function CapabilityCard({
  item,
  className = '',
  boxedList = false,
}: {
  item: CapabilityItem
  className?: string
  boxedList?: boolean
}) {
  return (
    <article
      data-cap-card
      className={`group flex flex-col overflow-hidden rounded-xl border border-line bg-white ${className}`}
    >
      <div className="aspect-[16/11] overflow-hidden bg-surface">
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[19px] leading-snug font-bold text-ink">
          {item.href ? (
            <a href={item.href} className="transition-colors hover:text-accent">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h3>
        <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{item.description}</p>
        <ul
          className={
            boxedList
              ? 'mt-4 space-y-2.5 rounded-lg border border-line bg-surface/70 p-4'
              : 'mt-4 space-y-2'
          }
        >
          {item.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-[13px] leading-snug text-ink/80">
              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              {point}
            </li>
          ))}
        </ul>
        {item.href && (
          <a
            href={item.href}
            className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[13px] font-bold text-accent transition-colors hover:text-accent-dark"
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  )
}

const CAROUSEL_PAGES = 4

export function CapabilityCarousel({
  title,
  subtitle,
  items,
}: {
  title: string
  subtitle: string
  items: CapabilityItem[]
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-cap-card]')
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    const max = track.scrollWidth - track.clientWidth
    const ratio = max > 0 ? track.scrollLeft / max : 0
    setActive(Math.round(ratio * (CAROUSEL_PAGES - 1)))
  }

  const scrollToPage = (page: number) => {
    const track = trackRef.current
    if (!track) return
    const max = track.scrollWidth - track.clientWidth
    track.scrollTo({ left: (max * page) / (CAROUSEL_PAGES - 1), behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <DetailHead title={title} subtitle={subtitle} />
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous capabilities"
              onClick={() => scrollByCard(-1)}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink shadow-[0_12px_30px_-18px_rgba(17,24,39,0.45)] transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next capabilities"
              onClick={() => scrollByCard(1)}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink shadow-[0_12px_30px_-18px_rgba(17,24,39,0.45)] transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          tabIndex={0}
          aria-label="CNC machining capabilities"
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <CapabilityCard
              key={item.title}
              item={item}
              className="w-[86%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5" role="group" aria-label="Capability slides">
            {Array.from({ length: CAROUSEL_PAGES }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to capabilities page ${index + 1}`}
                aria-current={index === active}
                onClick={() => scrollToPage(index)}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                  index === active ? 'w-6 bg-accent' : 'w-1.5 bg-ink/20 hover:bg-ink/35'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2 sm:hidden">
            <button
              type="button"
              aria-label="Previous capabilities"
              onClick={() => scrollByCard(-1)}
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-ink hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next capabilities"
              onClick={() => scrollByCard(1)}
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-ink hover:border-accent hover:text-accent"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}

export function CapabilityGrid({
  title,
  subtitle,
  items,
}: {
  title: string
  subtitle: string
  items: CapabilityItem[]
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={title} subtitle={subtitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <CapabilityCard key={item.title} item={item} boxedList />
          ))}
        </div>
      </DetailContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Team                                                               */
/* ------------------------------------------------------------------ */

export type TeamStage = {
  stage: string
  title: string
  image: string
  alt: string
  points: string[]
}

export function TeamStagesSection({
  title,
  subtitle,
  stages,
}: {
  title: string
  subtitle: string
  stages: TeamStage[]
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={title} subtitle={subtitle} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage) => (
            <article
              key={stage.stage}
              className="flex flex-col overflow-hidden rounded-xl border border-line bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img src={stage.image} alt={stage.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10.5px] font-bold tracking-[0.18em] text-accent uppercase">Stage {stage.stage}</p>
                <h3 className="mt-2 text-[16px] leading-snug font-bold text-ink">{stage.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {stage.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[12.5px] leading-snug text-muted">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.5} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </DetailContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Surface finishing                                                  */
/* ------------------------------------------------------------------ */

export function FinishOptionsSection({
  title,
  intro,
  defaultKey = 'fine-machining',
  items = cncFinishing,
}: {
  title: string
  intro: ReactNode
  defaultKey?: string
  items?: CncFinish[]
}) {
  const [activeKey, setActiveKey] = useState(defaultKey)
  const active = items.find((finish) => finish.key === activeKey) ?? items[0]
  const half = Math.ceil(items.length / 2)
  const columns = [items.slice(0, half), items.slice(half)]

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: LIGHT }}>
      <DetailContainer>
        <DetailHead title={title} subtitle={intro} line />

        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-9 lg:p-10">
          <div className="grid gap-9 lg:grid-cols-[27fr_24fr_49fr] lg:gap-10">
            <div className="min-h-[170px] lg:min-h-[330px]">
              <p className="text-[10.5px] font-bold tracking-[0.18em] text-accent uppercase">Selected finish</p>
              <h3
                key={`${active.key}-title`}
                className="animate-fade-in mt-3 text-[23px] leading-tight font-bold text-ink"
              >
                {active.name}
              </h3>
              <p
                key={`${active.key}-copy`}
                className="animate-fade-in mt-4 text-[13.5px] leading-relaxed text-muted"
              >
                {active.description}
              </p>
            </div>

            <div className="relative min-h-[240px] overflow-hidden rounded-xl bg-surface sm:min-h-[300px] lg:min-h-[330px]">
              <img
                key={active.key}
                src={active.image}
                alt={active.alt}
                loading="lazy"
                className="animate-fade-in absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 text-[9.5px] font-bold tracking-[0.12em] text-white uppercase backdrop-blur-sm">
                {active.name}
              </span>
            </div>

            <div role="group" aria-label="Surface finishing options" className="grid grid-cols-2 gap-x-6">
              {columns.map((column, index) => (
                <ul key={index} className="min-w-0">
                  {column.map((finish) => {
                    const selected = finish.key === activeKey
                    return (
                      <li key={finish.key}>
                        <button
                          type="button"
                          aria-pressed={selected}
                          onClick={() => setActiveKey(finish.key)}
                          className={`w-full cursor-pointer border-b py-2.5 text-left text-[12.5px] leading-snug font-medium transition-colors ${
                            selected
                              ? 'border-accent text-accent'
                              : 'border-line text-ink/75 hover:border-accent/40 hover:text-accent'
                          }`}
                        >
                          {finish.name}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Process, specs, materials, explainer                               */
/* ------------------------------------------------------------------ */

export function ProcessStepsSection({
  title,
  subtitle,
  steps,
}: {
  title: string
  subtitle?: string
  steps: { title: string; text: string }[]
}) {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: LIGHT }}>
      <DetailContainer>
        <DetailHead title={title} subtitle={subtitle} line />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-line bg-white p-6">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-accent font-mono text-[12px] font-bold text-white tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-[15.5px] leading-snug font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </DetailContainer>
    </section>
  )
}

export function SpecsSection({
  title,
  subtitle,
  rows,
  note = 'Representative capabilities. Final values are confirmed against your drawing during review.',
}: {
  title: string
  subtitle?: string
  rows: { label: string; value: string }[]
  note?: string
}) {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: LIGHT }}>
      <DetailContainer>
        <DetailHead title={title} subtitle={subtitle} line />
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-9 lg:p-11">
          <dl>
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 border-b border-line py-5 last:border-b-0 sm:grid-cols-[3fr_7fr] sm:gap-10 sm:py-6"
              >
                <dt className="text-[14px] leading-snug font-bold text-ink">{row.label}</dt>
                <dd className="text-[13.5px] leading-relaxed text-muted">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 border-t border-line pt-5 text-[11.5px] text-muted">{note}</p>
        </div>
      </DetailContainer>
    </section>
  )
}

export type MaterialItem = {
  key: string
  name: string
  subtitle: string
  properties: string
  applications: string
  image: string
  alt: string
}

export type MaterialGroup = {
  key: string
  label: string
  items: MaterialItem[]
}

export function MaterialsSelectorSection({
  title,
  subtitle,
  groups,
}: {
  title: string
  subtitle: string
  groups: MaterialGroup[]
}) {
  const [groupKey, setGroupKey] = useState(groups[0].key)
  const group = groups.find((item) => item.key === groupKey) ?? groups[0]
  const [itemKey, setItemKey] = useState(group.items[0].key)
  const active = group.items.find((item) => item.key === itemKey) ?? group.items[0]

  const selectGroup = (key: string) => {
    const next = groups.find((item) => item.key === key) ?? groups[0]
    setGroupKey(key)
    setItemKey(next.items[0].key)
  }

  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={title} subtitle={subtitle} line />

        <div className="mt-12 rounded-2xl border border-line bg-white p-4 sm:p-6">
          <div className="grid min-w-0 gap-4 lg:grid-cols-[25fr_75fr] lg:gap-6">
            <div className="min-w-0">
              <div className="flex overflow-hidden rounded-t-lg border border-line">
                {groups.map((item) => {
                  const selected = item.key === group.key
                  return (
                    <button
                      key={item.key}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => selectGroup(item.key)}
                      className={`flex-1 cursor-pointer px-4 py-3 text-[12.5px] font-bold transition-colors ${
                        selected ? 'bg-accent text-white' : 'bg-white text-ink hover:bg-surface'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                })}
              </div>
              <div className="overflow-hidden rounded-b-lg border border-t-0 border-line bg-white">
                {group.items.map((item) => {
                  const selected = item.key === active.key
                  return (
                    <button
                      key={item.key}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setItemKey(item.key)}
                      className={`block w-full cursor-pointer border-b border-line px-4 py-3.5 text-left text-[13px] transition-colors last:border-b-0 ${
                        selected
                          ? 'border-l-2 border-l-accent bg-surface font-bold text-accent'
                          : 'text-ink/75 hover:bg-surface/60 hover:text-accent'
                      }`}
                    >
                      {item.name}
                    </button>
                  )
                })}
              </div>
            </div>

            <div
              key={`${group.key}-${active.key}`}
              className="animate-fade-in min-w-0 rounded-xl p-6 sm:p-8"
              style={{ backgroundColor: LIGHT }}
            >
              <div className="grid gap-7 md:grid-cols-[1fr_0.9fr] md:items-center md:gap-10">
                <div>
                  <p className="text-[10.5px] font-bold tracking-[0.18em] text-accent uppercase">{group.label}</p>
                  <h3 className="mt-2 text-[24px] leading-tight font-bold text-ink">{active.name}</h3>
                  <p className="mt-1.5 text-[13px] text-muted">{active.subtitle}</p>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-muted">{active.properties}</p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{active.applications}</p>
                </div>
                <div className="overflow-hidden rounded-xl bg-white">
                  <img
                    src={active.image}
                    alt={active.alt}
                    loading="lazy"
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}

export type ExplainerData = {
  first: { title: string; text: string; points: string[]; image: string; alt: string }
  second: {
    title: string
    text: string
    cards: { title: string; text: string }[]
    image: string
    alt: string
  }
}

export function ExplainerSection({ data }: { data: ExplainerData }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="overflow-hidden rounded-2xl bg-surface">
            <img src={data.first.image} alt={data.first.alt} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="text-[28px] leading-[1.16] font-bold tracking-[-0.02em] text-ink sm:text-[34px]">
              {data.first.title}
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-muted">{data.first.text}</p>
            <ul className="mt-6 space-y-3">
              {data.first.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[13.5px] leading-snug text-ink/80">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pt-16">
          <div className="lg:order-1">
            <h2 className="text-[28px] leading-[1.16] font-bold tracking-[-0.02em] text-ink sm:text-[34px]">
              {data.second.title}
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-muted">{data.second.text}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {data.second.cards.map((card) => (
                <div key={card.title} className="rounded-lg border border-line bg-white p-4">
                  <h3 className="text-[13.5px] font-bold text-ink">{card.title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-surface lg:order-2">
            <img src={data.second.image} alt={data.second.alt} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Applications gallery                                               */
/* ------------------------------------------------------------------ */

export type ApplicationItem = { name: string; image: string; alt: string }

export function ApplicationsGallery({
  title,
  intro,
  items,
}: {
  title: string
  intro: ReactNode
  items: ApplicationItem[]
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const center = () => {
    const el = scrollRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    if (max > 0) el.scrollLeft = max / 2
  }

  useEffect(() => {
    center()
    window.addEventListener('resize', center)
    return () => window.removeEventListener('resize', center)
  }, [])

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-app-card]')
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.7
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={title} subtitle={intro} line />
      </DetailContainer>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-white to-transparent sm:w-20" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-white to-transparent sm:w-20" aria-hidden />

        <button
          type="button"
          aria-label="Previous applications"
          onClick={() => scrollByCard(-1)}
          className="absolute top-[32%] left-3 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-white/95 text-ink shadow-[0_12px_30px_-14px_rgba(17,24,39,0.45)] transition-colors hover:border-accent hover:text-accent sm:grid"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next applications"
          onClick={() => scrollByCard(1)}
          className="absolute top-[32%] right-3 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-white/95 text-ink shadow-[0_12px_30px_-14px_rgba(17,24,39,0.45)] transition-colors hover:border-accent hover:text-accent sm:grid xl:right-20"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label="Application gallery"
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <article
              key={item.name}
              data-app-card
              className="w-[260px] shrink-0 snap-center sm:w-[280px] lg:w-[300px]"
            >
              <div className="overflow-hidden rounded-lg bg-surface">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-center text-[15px] leading-snug font-bold text-ink">{item.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                */
/* ------------------------------------------------------------------ */

export type FaqItem = { q: string; a: string }

export function ServiceFaqSection({ title, items }: { title: string; items: FaqItem[] }) {
  const [open, setOpen] = useState<string | null>(null)
  const half = Math.ceil(items.length / 2)
  const columns = [items.slice(0, half), items.slice(half)]

  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={title} line />

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:items-start">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((faq, index) => {
                const isOpen = open === faq.q
                const panelId = `faq-${columnIndex}-${index}-${title.replace(/\W+/g, '-').toLowerCase()}`
                return (
                  <div key={faq.q} className="rounded-lg border border-line bg-white">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : faq.q)}
                        className="flex w-full cursor-pointer items-start justify-between gap-5 px-5 py-4 text-left"
                      >
                        <span className="text-[14px] leading-snug font-bold text-ink">{faq.q}</span>
                        <ChevronDown
                          className={`mt-0.5 h-4 w-4 shrink-0 text-accent transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </h3>
                    {isOpen && (
                      <p
                        id={panelId}
                        className="animate-fade-in border-t border-line px-5 py-4 text-[13px] leading-[1.7] text-muted"
                      >
                        {faq.a}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </DetailContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Dark banner & bottom CTA                                           */
/* ------------------------------------------------------------------ */

export function DarkImageBanner({
  image,
  alt,
  title,
  children,
}: {
  image: string
  alt: string
  title: ReactNode
  children: ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1118]">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-[#060b10]/80 via-[#060b10]/65 to-[#060b10]/45"
        aria-hidden
      />

      <DetailContainer className="flex min-h-[480px] justify-end py-20 lg:min-h-[560px] lg:py-28">
        <div className="w-full md:w-[55%]">
          <span className="block h-1 w-16 bg-accent" aria-hidden />
          <h2 className="mt-5 text-[30px] leading-[1.12] font-bold tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]">
            {title}
          </h2>
          <div className="mt-6">{children}</div>
        </div>
      </DetailContainer>
    </section>
  )
}

export function ServiceBottomCta({
  title,
  description,
  cta,
  onQuote,
}: {
  title: string
  description: string
  cta: string
  onQuote: () => void
}) {
  return (
    <section className="border-t border-line py-20 lg:py-24" style={{ backgroundColor: LIGHT }}>
      <DetailContainer>
        <div className="mx-auto max-w-[780px] text-center">
          <h2 className="text-[30px] leading-[1.12] font-bold tracking-[-0.02em] text-ink sm:text-[36px] lg:text-[40px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[14.5px] leading-relaxed text-muted">{description}</p>
          <div className="mt-8 flex justify-center">
            <Button variant="accent" size="lg" onClick={onQuote}>
              {cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}
