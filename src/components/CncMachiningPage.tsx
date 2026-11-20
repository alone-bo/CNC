import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import {
  ArrowRight,
  Boxes,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Gauge,
  Layers,
  Pause,
  Play,
  ShieldCheck,
} from 'lucide-react'
import {
  cncApplications,
  cncBenefitMedia,
  cncBenefits,
  cncCalculator,
  cncCalculatorSteps,
  cncCapabilities,
  cncCases,
  cncClosing,
  cncFaqs,
  cncFinishing,
  cncGuide,
  cncHero,
  cncMaterials,
  cncProcesses,
  cncTabs,
  cncTeam,
  type BenefitIcon,
} from '../data/cncMachining'
import { useUI } from '../lib/ui'
import { Footer } from './Footer'
import { Button } from './primitives'

const SURFACE = '#F6F7F9'

/** 1200px content column shared by every module on this page. */
function CncContainer({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>
}

function SectionHead({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-[780px] text-center">
      <h2 className="text-[28px] leading-[1.16] font-bold tracking-[-0.02em] text-ink sm:text-[34px] lg:text-[40px]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-[15px] leading-relaxed text-muted lg:text-base">{subtitle}</p>}
    </div>
  )
}

const benefitIcons: Record<BenefitIcon, typeof Gauge> = {
  gauge: Gauge,
  clipboard: ClipboardCheck,
  layers: Layers,
  boxes: Boxes,
}

const calculatorIcons: Record<'layers' | 'gauge' | 'clipboard' | 'shield', typeof Gauge> = {
  layers: Layers,
  gauge: Gauge,
  clipboard: ClipboardCheck,
  shield: ShieldCheck,
}

export function CncMachiningPage() {
  const { openQuote } = useUI()
  const quote = (message?: string) => openQuote({ service: 'CNC Machining', message })
  const contact = () => openQuote({ mode: 'contact' })

  return (
    <div className="bg-white">
      <CncHero onQuote={() => quote()} />
      <CustomMachiningSection />
      <TechnologiesSection />
      <ProcessesSection />
      <CalculatorSection onQuote={() => quote('I would like help choosing a CNC machining process.')} />
      <MaterialsSection />
      <CapabilitiesSection />
      <ApplicationsSection />
      <SurfaceFinishingSection />
      <DesignGuideSection />
      <TeamSection />
      <CaseStorySection onQuote={(title) => quote(`Similar project to: ${title}. `)} />
      <FaqAndClosing onQuote={quote} onContact={contact} />
      <Footer />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 01 — Hero                                                          */
/* ------------------------------------------------------------------ */

function CncHero({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a0f15]">
      <div className="absolute inset-0 -z-20">
        <img
          src={cncHero.imageLeft}
          alt={cncHero.altLeft}
          className="absolute inset-0 h-full w-full object-cover md:w-[58%]"
        />
        <img
          src={cncHero.imageRight}
          alt={cncHero.altRight}
          className="absolute inset-y-0 right-0 hidden h-full w-[42%] object-cover md:block"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-[#070c12]/95 via-[#070c12]/78 to-[#070c12]/30"
        aria-hidden
      />
      <div className="absolute inset-y-0 left-[58%] -z-10 hidden w-px bg-white/15 md:block" aria-hidden />

      <CncContainer className="flex min-h-[590px] flex-col justify-center py-14 lg:min-h-[660px] lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-[13px] text-white/55">
          <a href="#top" className="transition-colors hover:text-white">
            Home
          </a>
          <span aria-hidden>/</span>
          <a href="#/services" className="transition-colors hover:text-white">
            Services
          </a>
          <span aria-hidden>/</span>
          <span className="text-white/90">CNC Machining</span>
        </nav>

        <div className="max-w-[560px]">
          <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-white/75 uppercase">
            <span className="h-0.5 w-8 bg-accent" aria-hidden />
            {cncHero.eyebrow}
          </p>
          <h1 className="mt-5 text-[38px] leading-[1.06] font-bold tracking-[-0.03em] text-white sm:text-[50px] lg:text-[62px]">
            {cncHero.title}
          </h1>
          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.65] text-white/78 sm:text-base">
            {cncHero.description}
          </p>
          <div className="mt-9">
            <Button variant="accent" size="lg" onClick={onQuote}>
              {cncHero.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CncContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 02 — Custom CNC Machining Services                                 */
/* ------------------------------------------------------------------ */

function CustomMachiningSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <CncContainer>
        <SectionHead
          title="Custom CNC Machining Services"
          subtitle="From a single prototype to repeat production, our CNC service pairs tight-tolerance cutting with practical DFM feedback, documented inspection and finishing under one roof."
        />
        <p className="mx-auto mt-2 max-w-[760px] text-center text-[15px] leading-relaxed text-muted">
          Send a CAD model and drawing — we return a manufacturability review and a clear quote.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="grid content-center gap-x-10 gap-y-10 sm:grid-cols-2">
            {cncBenefits.map((benefit) => {
              const Icon = benefitIcons[benefit.icon]
              return (
                <div key={benefit.title}>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-white shadow-[0_10px_22px_-12px_rgba(255,138,36,0.9)]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-[16px] leading-snug font-bold text-ink">{benefit.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{benefit.text}</p>
                </div>
              )
            })}
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-surface sm:min-h-[420px] lg:min-h-full">
            <WorkshopVideo />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/45 via-transparent to-transparent" aria-hidden />
            <p className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/45 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-white/85 uppercase backdrop-blur-sm">
              {cncBenefitMedia.credit}
            </p>
          </div>
        </div>
      </CncContainer>
    </section>
  )
}

/** Workshop footage shown as a poster until the visitor chooses to play it. */
function WorkshopVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) void video.play().catch(() => {})
    else video.pause()
  }

  return (
    <>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full cursor-pointer object-cover"
        poster={cncBenefitMedia.poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={cncBenefitMedia.alt}
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={cncBenefitMedia.video} type="video/mp4" />
      </video>

      {!playing && (
        <div className="absolute inset-0 grid place-items-center bg-black/30">
          <button
            type="button"
            onClick={toggle}
            aria-label="Play workshop video"
            className="group flex cursor-pointer flex-col items-center gap-3 text-white"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-ink shadow-[0_16px_40px_-12px_rgba(0,0,0,0.65)] transition-transform duration-300 group-hover:scale-105">
              <Play className="ml-1 h-6 w-6 fill-current" />
            </span>
            <span className="rounded-full bg-black/45 px-3.5 py-1.5 text-[10.5px] font-bold tracking-[0.18em] uppercase backdrop-blur-sm">
              Play workshop footage
            </span>
          </button>
        </div>
      )}

      {playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label="Pause workshop video"
          className="absolute right-3 bottom-3 grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65"
        >
          <Pause className="h-3.5 w-3.5" />
        </button>
      )}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* 03 — Machining Technologies and CNC Machining Services             */
/* ------------------------------------------------------------------ */

function TechnologiesSection() {
  const [activeKey, setActiveKey] = useState(cncTabs[0].key)
  const active = cncTabs.find((tab) => tab.key === activeKey) ?? cncTabs[0]

  const onTabKey = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    const index = cncTabs.findIndex((tab) => tab.key === activeKey)
    const next = event.key === 'ArrowRight' ? (index + 1) % cncTabs.length : (index - 1 + cncTabs.length) % cncTabs.length
    setActiveKey(cncTabs[next].key)
  }

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: SURFACE }}>
      <CncContainer>
        <SectionHead
          title="Machining Technologies and CNC Machining Services"
          subtitle="Choose the route that fits your part. Both paths share the same engineering review, inspection standards and finishing options."
        />

        <div className="mt-9 flex justify-center">
          <div
            role="tablist"
            aria-label="CNC machining capability"
            className="inline-flex overflow-hidden rounded-lg border border-ink/12 bg-white"
          >
            {cncTabs.map((tab) => {
              const selected = tab.key === active.key
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  id={`cnc-tab-${tab.key}`}
                  aria-selected={selected}
                  aria-controls="cnc-tab-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveKey(tab.key)}
                  onKeyDown={onTabKey}
                  className={`h-12 cursor-pointer border-r border-ink/10 px-5 text-[13px] font-semibold transition-colors last:border-r-0 sm:px-7 sm:text-sm ${
                    selected ? 'bg-accent text-white' : 'bg-white text-ink hover:bg-surface'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        <div
          id="cnc-tab-panel"
          role="tabpanel"
          aria-labelledby={`cnc-tab-${active.key}`}
          className="mt-10 overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-50px_rgba(17,24,39,0.45)]"
        >
          <div className="grid lg:grid-cols-[45%_55%]">
            <div className="relative min-h-[280px] overflow-hidden bg-surface sm:min-h-[340px] lg:min-h-[440px]">
              <img
                key={active.image}
                src={active.image}
                alt={active.alt}
                loading="lazy"
                className="animate-fade-in absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-8 p-7 sm:p-10 lg:p-12">
              <p className="border-l-2 border-accent pl-4 text-[14px] leading-relaxed font-medium text-ink/80">
                {active.intro}
              </p>
              {active.blocks.map((block) => (
                <div key={block.title}>
                  <h3 className="text-[17px] font-bold text-ink">{block.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CncContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 04 — What We Are Good at: CNC Machining Processes                  */
/* ------------------------------------------------------------------ */

function ProcessesSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-process-card]')
    const gap = 24
    const step = card ? card.offsetWidth + gap : track.clientWidth * 0.8
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-20 lg:py-28">
      <CncContainer>
        <SectionHead
          title="What We Are Good at: CNC Machining Processes"
          subtitle="Turning, milling and five-axis work are planned around the geometry and tolerance that matter — with inspection built into the route, not added at the end."
        />

        <div className="relative mt-14">
          <button
            type="button"
            aria-label="Previous machining processes"
            onClick={() => scrollByCard(-1)}
            className="absolute top-1/2 -left-5 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink shadow-[0_12px_30px_-14px_rgba(17,24,39,0.4)] transition-colors hover:border-accent hover:text-accent lg:grid"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next machining processes"
            onClick={() => scrollByCard(1)}
            className="absolute top-1/2 -right-5 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink shadow-[0_12px_30px_-14px_rgba(17,24,39,0.4)] transition-colors hover:border-accent hover:text-accent lg:grid"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            tabIndex={0}
            aria-label="CNC machining processes"
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cncProcesses.map((process) => (
              <article
                key={process.title}
                data-process-card
                className="group flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-line bg-white sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <a href={process.href} tabIndex={-1} className="block aspect-[16/11] overflow-hidden bg-surface">
                  <img
                    src={process.image}
                    alt={process.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[19px] leading-snug font-bold text-ink">
                    <a href={process.href} className="transition-colors hover:text-accent">
                      {process.title}
                    </a>
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{process.description}</p>
                  <ul className="mt-4 space-y-2">
                    {process.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[13px] leading-snug text-ink/80">
                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={process.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[13px] font-bold text-accent transition-colors hover:text-accent-dark"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
            <button
              type="button"
              aria-label="Previous machining processes"
              onClick={() => scrollByCard(-1)}
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-ink hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs text-muted">Swipe to explore</span>
            <button
              type="button"
              aria-label="Next machining processes"
              onClick={() => scrollByCard(1)}
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-ink hover:border-accent hover:text-accent"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </CncContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 05 — CNC Machining Calculator                                      */
/* ------------------------------------------------------------------ */

function CalculatorSection({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d1319]">
      <img
        src={cncCalculator.background}
        alt={cncCalculator.backgroundAlt}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/60 md:hidden" aria-hidden />
      <div
        className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] border-l border-white/10 bg-black/55 backdrop-blur-[1px] md:block"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/20 via-transparent to-transparent" aria-hidden />

      <CncContainer className="flex justify-end py-20 lg:py-28">
        <div className="w-full md:w-[60%] md:pl-10">
          <h2 className="text-[30px] leading-[1.12] font-bold tracking-[-0.02em] text-white sm:text-[36px] lg:text-[38px]">
            {cncCalculator.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-[560px] text-[14px] leading-relaxed text-white/75">{cncCalculator.body}</p>

          <ul className="mt-8 max-w-[560px] space-y-5">
            {cncCalculatorSteps.map((step) => {
              const Icon = calculatorIcons[step.icon]
              return (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/5">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-[15.5px] font-bold text-white">{step.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/70">{step.text}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-8">
            <Button variant="accent" size="lg" className="w-full sm:w-auto" onClick={onQuote}>
              {cncCalculator.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-4 text-[11px] tracking-[0.06em] text-white/50 uppercase">{cncCalculator.note}</p>
        </div>
      </CncContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 06 — CNC Machining Materials                                       */
/* ------------------------------------------------------------------ */

function MaterialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = cncMaterials[activeIndex]

  return (
    <section className="bg-white py-20 lg:py-28">
      <CncContainer>
        <SectionHead
          title="CNC Machining Materials"
          subtitle="Metals and engineering plastics, stocked in sizes that keep prototypes moving. Select a material family to see machining notes and typical applications."
        />

        <div className="mt-14 grid min-w-0 gap-6 lg:grid-cols-[1fr_3fr]">
          <div className="min-w-0">
            <div className="rounded-t-lg bg-accent px-5 py-4 text-[12px] font-bold tracking-[0.14em] text-white uppercase">
              Material Families
            </div>
            <div
              role="tablist"
              aria-label="CNC machining materials"
              aria-orientation="vertical"
              className="flex w-full min-w-0 gap-2 overflow-x-auto rounded-b-lg border border-line bg-white p-2 lg:block lg:gap-0 lg:rounded-none lg:rounded-b-lg lg:border-t-0 lg:p-0"
            >
              {cncMaterials.map((material, index) => {
                const selected = index === activeIndex
                return (
                  <button
                    key={material.key}
                    type="button"
                    role="tab"
                    id={`cnc-material-tab-${material.key}`}
                    aria-controls="cnc-material-panel"
                    aria-selected={selected}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    className={`shrink-0 cursor-pointer px-4 py-3 text-left text-[13px] whitespace-nowrap transition-colors lg:w-full lg:border-b lg:border-line lg:px-5 lg:py-4 lg:whitespace-normal lg:last:border-b-0 ${
                      selected ? 'bg-surface font-bold text-accent' : 'bg-white text-ink/75 hover:text-accent'
                    }`}
                  >
                    <span className="mr-2 hidden font-mono text-[10px] text-muted tabular-nums lg:inline">
                      0{index + 1}
                    </span>
                    {material.name}
                  </button>
                )
              })}
            </div>
          </div>

          <div
            key={active.key}
            id="cnc-material-panel"
            role="tabpanel"
            aria-labelledby={`cnc-material-tab-${active.key}`}
            className="min-w-0 animate-fade-in rounded-2xl p-6 sm:p-9 lg:p-10"
            style={{ backgroundColor: SURFACE }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-ink/10 pb-5">
              <div>
                <h3 className="text-[24px] leading-tight font-bold text-accent sm:text-[28px]">{active.name}</h3>
                <p className="mt-1.5 text-[13.5px] text-muted">{active.subtitle}</p>
              </div>
              <span className="hidden text-5xl leading-none font-extrabold text-ink/[0.06] tabular-nums sm:block">
                0{activeIndex + 1}
              </span>
            </div>

            <div className="mt-7 grid gap-7 md:grid-cols-[1fr_0.95fr] md:gap-10">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.16em] text-ink uppercase">Machining notes</h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{active.notes}</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.16em] text-ink uppercase">Typical applications</h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{active.applications}</p>
                </div>
                <div className="flex items-center gap-2 text-[12px] font-semibold text-accent">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                  Material certificates available with every order
                </div>
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
      </CncContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 07 — CNC Machining Capabilities                                    */
/* ------------------------------------------------------------------ */

function CapabilitiesSection() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: SURFACE }}>
      <CncContainer>
        <SectionHead title="CNC Machining Capabilities" />

        <div className="mx-auto mt-12 max-w-[1040px] rounded-2xl bg-white p-6 sm:p-9 lg:p-11">
          <dl>
            {cncCapabilities.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 border-b border-line py-5 last:border-b-0 sm:grid-cols-[3fr_7fr] sm:gap-10 sm:py-6"
              >
                <dt className="text-[14px] leading-snug font-bold text-ink">{row.label}</dt>
                <dd className="text-[13.5px] leading-relaxed text-muted">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 border-t border-line pt-5 text-[11.5px] text-muted">
            Representative capabilities. Final tolerances, sizes and lead times are confirmed against your drawing
            during review.
          </p>
        </div>
      </CncContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 08 — Core Applications of CNC Machined Parts                       */
/* ------------------------------------------------------------------ */

function ApplicationsSection() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <CncContainer>
        <SectionHead title="Core Applications of CNC Machined Parts" />
        <p className="mx-auto mt-3 max-w-[820px] text-center text-[14.5px] font-medium text-accent">
          From implant-grade hardware to production fixtures — machined parts built for the application, not just the
          drawing.
        </p>
      </CncContainer>

      {/* Full-bleed image band */}
      <div
        role="region"
        aria-label="CNC machining application examples"
        className="group relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]"
      >
        <div
          className={`flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
            paused ? '[animation-play-state:paused]' : ''
          }`}
        >
          {[0, 1].map((loop) => (
            <ul key={loop} aria-hidden={loop === 1} className="flex shrink-0 gap-5 pr-5">
              {cncApplications.map((application) => (
                <li key={`${loop}-${application.name}`} className="w-[240px] shrink-0 sm:w-[260px] lg:w-[280px]">
                  <article className="group/card flex h-full flex-col">
                    <div className="overflow-hidden rounded-lg bg-surface">
                      <img
                        src={application.image}
                        alt={application.alt}
                        loading="eager"
                        decoding="async"
                        className="aspect-square h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.04]"
                      />
                    </div>
                    <h3 className="mt-4 text-[15px] leading-snug font-bold text-ink">{application.name}</h3>
                    <p className="mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-muted">{application.text}</p>
                  </article>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <CncContainer>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <p className="text-[10.5px] font-semibold tracking-[0.14em] text-muted uppercase">
            Auto-scrolling · Hover to pause
          </p>
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-pressed={paused}
            aria-label={paused ? 'Resume application carousel' : 'Pause application carousel'}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] text-ink/70 uppercase transition-colors hover:border-accent hover:text-accent"
          >
            {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
            {paused ? 'Play' : 'Pause'}
          </button>
        </div>
      </CncContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 09 — CNC Machining Surface Finishing                               */
/* ------------------------------------------------------------------ */

function SurfaceFinishingSection() {
  const [activeKey, setActiveKey] = useState('fine-machining')
  const active = cncFinishing.find((finish) => finish.key === activeKey) ?? cncFinishing[0]
  const columns = [cncFinishing.slice(0, 8), cncFinishing.slice(8)]

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#F4F5F6' }}>
      <CncContainer>
        <div className="max-w-[840px]">
          <h2 className="text-[28px] leading-[1.16] font-bold tracking-[-0.02em] text-ink sm:text-[34px] lg:text-[40px]">
            CNC Machining Surface Finishing
          </h2>
          <span className="mt-4 block h-1 w-36 bg-accent" aria-hidden />
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Machining sets the geometry — finishing sets how a part performs and looks. Choose from 16 finishing
            routes for protection, lubricity and appearance, or explore our{' '}
            <a
              href="#/services/finishing"
              className="font-semibold text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
            >
              surface finishing
            </a>{' '}
            services for multi-step treatments.
          </p>
        </div>

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
      </CncContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 10 — A Quick Guide to Designing CNC Machined Parts                 */
/* ------------------------------------------------------------------ */

function DesignGuideSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-20 lg:py-28">
      <CncContainer>
        <SectionHead
          title="A Quick Guide to Designing CNC Machined Parts"
          subtitle="Practical rules that keep machined parts accurate, affordable and easy to inspect."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white">
          {cncGuide.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={item.number} className="border-b border-line last:border-b-0">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`cnc-guide-panel-${index}`}
                    id={`cnc-guide-button-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-surface/60 sm:px-8 sm:py-6"
                  >
                    <span className="flex items-start gap-4 sm:gap-6">
                      <span className="pt-0.5 font-mono text-[12px] font-bold text-accent tabular-nums">
                        {item.number}
                      </span>
                      <span className="text-[15.5px] leading-snug font-bold text-ink sm:text-[17px]">
                        {item.title}
                      </span>
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-ink">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                </h3>

                {open && (
                  <div
                    id={`cnc-guide-panel-${index}`}
                    role="region"
                    aria-labelledby={`cnc-guide-button-${index}`}
                    className="animate-fade-in px-5 pb-8 sm:px-8 sm:pb-10 lg:pl-[76px]"
                  >
                    <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
                      <div className="space-y-4">
                        {item.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="text-[13.5px] leading-[1.75] text-muted">
                            {paragraph}
                          </p>
                        ))}
                        <ul className="grid gap-2 pt-2 sm:grid-cols-2">
                          {item.checks.map((check) => (
                            <li key={check} className="flex items-start gap-2 text-[12.5px] leading-snug text-ink/80">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.5} />
                              {check}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {item.diagram ? (
                        <DesignDiagram />
                      ) : (
                        <div className="flex flex-col justify-center rounded-xl border border-[#cfe5d5] bg-[#f1f8f2] p-6">
                          <p className="text-[10.5px] font-bold tracking-[0.18em] text-[#2f7d4a] uppercase">
                            Design check
                          </p>
                          <ul className="mt-4 space-y-3">
                            {item.checks.map((check) => (
                              <li key={check} className="flex items-start gap-2.5 text-[13px] leading-snug text-[#28553a]">
                                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#2f7d4a] text-white">
                                  <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                                </span>
                                {check}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </CncContainer>
    </section>
  )
}

/** Green-annotated CAD / process drawing shown in the first guide item. */
function DesignDiagram() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#20362b] bg-[#08120d] p-3 sm:p-4">
      <svg
        viewBox="0 0 600 440"
        role="img"
        aria-label="CAD drawing of a machined bracket with dimension and tolerance callouts highlighted in green"
        className="h-auto w-full"
      >
        <defs>
          <pattern id="cnc-cad-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0H0V30" fill="none" stroke="#15271e" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="600" height="440" fill="url(#cnc-cad-grid)" />

        {/* Part outline */}
        <path
          d="M150 110H450A26 26 0 0 1 476 136V300A26 26 0 0 1 450 326H150A26 26 0 0 1 124 300V136A26 26 0 0 1 150 110Z"
          fill="#0d1b14"
          stroke="#c8d6cd"
          strokeWidth="2"
        />
        {/* Pocket */}
        <rect x="214" y="162" width="172" height="112" rx="16" fill="none" stroke="#91a89a" strokeWidth="1.5" />
        {/* Bores */}
        <circle cx="258" cy="205" r="20" fill="none" stroke="#c8d6cd" strokeWidth="1.6" />
        <circle cx="350" cy="232" r="27" fill="none" stroke="#c8d6cd" strokeWidth="1.6" />
        {/* Holes */}
        {[
          [160, 146],
          [440, 146],
          [160, 290],
          [440, 290],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="8.5" fill="none" stroke="#c8d6cd" strokeWidth="1.4" />
            <path d={`M${cx - 14} ${cy}H${cx + 14}M${cx} ${cy - 14}V${cy + 14}`} stroke="#4f6558" strokeWidth="0.8" />
          </g>
        ))}
        {/* Center lines */}
        <path d="M214 218H386M300 162V274" stroke="#3f5449" strokeWidth="0.8" strokeDasharray="14 4 3 4" />

        {/* Green fillet highlights */}
        <path d="M450 110A26 26 0 0 1 476 136" fill="none" stroke="#5fe39b" strokeWidth="3" />
        <path d="M124 300A26 26 0 0 1 150 326" fill="none" stroke="#5fe39b" strokeWidth="3" />
        <path d="M300 110V126M300 310V326" stroke="#5fe39b" strokeWidth="3" opacity="0.75" />

        {/* Top dimension */}
        <g stroke="#7d9387" strokeWidth="1">
          <path d="M124 80V98M476 80V98M124 86H476" />
          <path d="M124 86l10 -4v8zM476 86l-10 -4v8z" fill="#7d9387" />
        </g>
        <rect x="272" y="68" width="56" height="18" rx="3" fill="#08120d" />
        <text x="300" y="81" textAnchor="middle" fill="#aebfb4" fontFamily="ui-monospace, monospace" fontSize="11">
          352.00
        </text>

        {/* Left dimension */}
        <g stroke="#7d9387" strokeWidth="1">
          <path d="M92 110H110M92 326H110M98 110V326" />
          <path d="M98 110l-4 10h8zM98 326l-4 -10h8z" fill="#7d9387" />
        </g>
        <text
          x="88"
          y="218"
          textAnchor="middle"
          fill="#aebfb4"
          fontFamily="ui-monospace, monospace"
          fontSize="11"
          transform="rotate(-90 88 218)"
        >
          216.00
        </text>

        {/* Hole callout */}
        <g stroke="#5fe39b" strokeWidth="1.2" fill="none">
          <path d="M440 146L506 92H570" />
        </g>
        <circle cx="440" cy="146" r="3" fill="#5fe39b" />
        <text x="570" y="84" textAnchor="end" fill="#5fe39b" fontFamily="ui-monospace, monospace" fontSize="10.5">
          4× Ø9.0 H7 THRU
        </text>

        {/* Surface finish callout */}
        <g stroke="#5fe39b" strokeWidth="1.2">
          <path d="M386 232H462" />
        </g>
        <circle cx="386" cy="232" r="3" fill="#5fe39b" />
        <text x="468" y="236" fill="#5fe39b" fontFamily="ui-monospace, monospace" fontSize="10.5">
          Ra 1.6
        </text>

        {/* Tolerance + datum callout */}
        <g stroke="#5fe39b" strokeWidth="1.2" fill="none">
          <path d="M198 326L176 374H128" />
        </g>
        <circle cx="198" cy="326" r="3" fill="#5fe39b" />
        <text x="124" y="388" textAnchor="middle" fill="#5fe39b" fontFamily="ui-monospace, monospace" fontSize="10.5">
          ±0.010 A|B
        </text>

        {/* Datum symbols */}
        {[
          ['A', 300],
          ['B', 352],
        ].map(([label, x]) => (
          <g key={label}>
            <path d={`M${Number(x) - 6} 344H${Number(x) + 6}L${x} 332Z`} fill="#5fe39b" />
            <rect x={Number(x) - 8} y="346" width="16" height="16" fill="none" stroke="#5fe39b" strokeWidth="1" />
            <text
              x={x}
              y="358"
              textAnchor="middle"
              fill="#5fe39b"
              fontFamily="ui-monospace, monospace"
              fontSize="9"
            >
              {label}
            </text>
          </g>
        ))}

        {/* Wall thickness marker */}
        <g stroke="#5fe39b" strokeWidth="1.2">
          <path d="M214 300L214 320M440 300L440 320M214 312H440" />
          <path d="M214 312l8 -3.5v7zM440 312l-8 -3.5v7z" fill="#5fe39b" />
        </g>
        <text x="327" y="306" textAnchor="middle" fill="#5fe39b" fontFamily="ui-monospace, monospace" fontSize="9.5">
          3.0 MIN WALL
        </text>

        {/* Title block */}
        <g stroke="#2a3c33" strokeWidth="1">
          <rect x="368" y="382" width="196" height="44" fill="#0a1510" />
          <path d="M368 404H564M470 382V426" />
        </g>
        <text x="380" y="397" fill="#8fa398" fontFamily="ui-monospace, monospace" fontSize="9">
          EZHONG · CNC
        </text>
        <text x="380" y="419" fill="#6b7f73" fontFamily="ui-monospace, monospace" fontSize="8">
          DWG 2405-018
        </text>
        <text x="480" y="397" fill="#6b7f73" fontFamily="ui-monospace, monospace" fontSize="8">
          SCALE 1:1
        </text>
        <text x="480" y="419" fill="#6b7f73" fontFamily="ui-monospace, monospace" fontSize="8">
          REV A
        </text>
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 11 — Expert Team Supporting Every Stage of Your Project            */
/* ------------------------------------------------------------------ */

function TeamSection() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: SURFACE }}>
      <CncContainer>
        <SectionHead
          title="Expert Team Supporting Every Stage of Your Project"
          subtitle="A single engineering contact follows your project from the first RFQ to the final inspection report."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cncTeam.map((member) => (
            <article
              key={member.stage}
              className="flex flex-col overflow-hidden rounded-xl border border-line bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={member.image}
                  alt={member.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10.5px] font-bold tracking-[0.18em] text-accent uppercase">Stage {member.stage}</p>
                <h3 className="mt-2 text-[16px] leading-snug font-bold text-ink">{member.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {member.points.map((point) => (
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
      </CncContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 12 — CNC Machining Case Story                                      */
/* ------------------------------------------------------------------ */

function CaseStorySection({ onQuote }: { onQuote: (title: string) => void }) {
  const [index, setIndex] = useState(0)
  const go = (direction: 1 | -1) => {
    setIndex((current) => (current + direction + cncCases.length) % cncCases.length)
  }

  return (
    <section className="bg-white py-20 lg:py-28">
      <CncContainer>
        <SectionHead title="CNC Machining Case Story" />

        <div className="relative mt-12">
          <button
            type="button"
            aria-label="Previous case study"
            onClick={() => go(-1)}
            className="absolute top-1/2 -left-5 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink shadow-[0_12px_30px_-14px_rgba(17,24,39,0.4)] transition-colors hover:border-accent hover:text-accent lg:grid"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next case study"
            onClick={() => go(1)}
            className="absolute top-1/2 -right-5 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink shadow-[0_12px_30px_-14px_rgba(17,24,39,0.4)] transition-colors hover:border-accent hover:text-accent lg:grid"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_80px_-60px_rgba(17,24,39,0.5)]">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {cncCases.map((item) => (
                <article key={item.title} className="grid w-full shrink-0 lg:grid-cols-[40%_60%]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface lg:aspect-auto lg:min-h-[430px]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-7 sm:p-9 lg:p-11">
                    <p className="text-[10.5px] font-bold tracking-[0.18em] text-accent uppercase">
                      Case study · CNC Machining
                    </p>
                    <h3 className="mt-3 text-[23px] leading-[1.2] font-bold tracking-[-0.01em] text-ink lg:text-[27px]">
                      {item.title}
                    </h3>
                    <div className="mt-5 space-y-3">
                      {item.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-[13.5px] leading-relaxed text-muted">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-[13px] font-bold text-ink transition-colors hover:text-accent"
                      >
                        Read the full case study
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                      <Button variant="accent" onClick={() => onQuote(item.title)}>
                        Discuss Your Project
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous case study"
              onClick={() => go(-1)}
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-1.5">
              {cncCases.map((item, dotIndex) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show case study ${dotIndex + 1}`}
                  aria-current={dotIndex === index}
                  onClick={() => setIndex(dotIndex)}
                  className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                    dotIndex === index ? 'w-6 bg-accent' : 'w-1.5 bg-ink/20 hover:bg-ink/35'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next case study"
              onClick={() => go(1)}
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </CncContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 13 — FAQ & Bottom CTA                                              */
/* ------------------------------------------------------------------ */

function FaqAndClosing({
  onQuote,
  onContact,
}: {
  onQuote: (message?: string) => void
  onContact: () => void
}) {
  const [openFaq, setOpenFaq] = useState<string | null>(cncFaqs[0].question)
  const columns = [cncFaqs.slice(0, 5), cncFaqs.slice(5)]

  return (
    <>
      <section className="bg-white pt-20 pb-20 lg:pt-28 lg:pb-24">
        <CncContainer>
          <SectionHead
            title="CNC Machining FAQ"
            subtitle="Answers to the questions engineering and sourcing teams ask most often."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 md:items-start">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                {column.map((faq) => {
                  const open = openFaq === faq.question
                  const panelId = `cnc-faq-${columnIndex}-${faq.question.replace(/\W+/g, '-').toLowerCase()}`
                  return (
                    <div key={faq.question} className="rounded-lg border border-line bg-white">
                      <h3>
                        <button
                          type="button"
                          aria-expanded={open}
                          aria-controls={panelId}
                          onClick={() => setOpenFaq(open ? null : faq.question)}
                          className="flex w-full cursor-pointer items-start justify-between gap-5 px-5 py-4 text-left"
                        >
                          <span className="text-[14px] leading-snug font-bold text-ink">{faq.question}</span>
                          <ChevronDown
                            className={`mt-0.5 h-4 w-4 shrink-0 text-accent transition-transform duration-300 ${
                              open ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </h3>
                      {open && (
                        <p
                          id={panelId}
                          className="animate-fade-in border-t border-line px-5 py-4 text-[13px] leading-[1.7] text-muted"
                        >
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </CncContainer>
      </section>

      <section className="border-t border-line pt-20 pb-20 lg:pt-24 lg:pb-24" style={{ backgroundColor: SURFACE }}>
        <CncContainer>
          <div className="mx-auto max-w-[780px] text-center">
            <p className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase">{cncClosing.eyebrow}</p>
            <h2 className="mt-4 text-[30px] leading-[1.12] font-bold tracking-[-0.02em] text-ink sm:text-[36px] lg:text-[40px]">
              {cncClosing.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[14.5px] leading-relaxed text-muted">
              {cncClosing.description}
            </p>
          </div>

          <ol className="mx-auto mt-10 grid max-w-[960px] gap-4 sm:grid-cols-3">
            {cncClosing.steps.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-line bg-white p-5">
                <p className="font-mono text-[11px] font-bold text-accent tabular-nums">STEP 0{index + 1}</p>
                <h3 className="mt-2 text-[14.5px] leading-snug font-bold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="accent" size="lg" onClick={() => onQuote()}>
              {cncClosing.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline-dark" size="lg" onClick={onContact}>
              {cncClosing.secondaryCta}
            </Button>
          </div>
        </CncContainer>
      </section>
    </>
  )
}
