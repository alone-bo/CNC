import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import {
  aluminumApplications,
  aluminumBenefits,
  aluminumCapabilities,
  aluminumClosing,
  aluminumFaqs,
  aluminumGrades,
  aluminumHero,
  aluminumSolutions,
  aluminumStability,
  aluminumTeam,
  aluminumWhy,
} from '../data/cncAluminum'
import { useUI } from '../lib/ui'
import { Footer } from './Footer'
import {
  ApplicationsGallery,
  BreadcrumbBar,
  CapabilityCarousel,
  DarkImageBanner,
  DetailContainer,
  DetailHead,
  FinishOptionsSection,
  LIGHT,
  ServiceBottomCta,
  ServiceFaqSection,
  ServiceHero,
  TeamStagesSection,
} from './ServiceDetailShared'

const SUBTLE = '#F6F7F9'

export function CncAluminumPage() {
  const { openQuote } = useUI()
  const quote = (message = 'Aluminum CNC machining project. ') =>
    openQuote({ service: 'CNC Machining', message })

  return (
    <div className="bg-white">
      <ServiceHero
        titleLines={aluminumHero.titleLines}
        description={aluminumHero.description}
        cta={aluminumHero.cta}
        image={aluminumHero.image}
        alt={aluminumHero.alt}
        onQuote={() => quote()}
      />
      <BreadcrumbBar label="Aluminum CNC Machining" />

      <CapabilityCarousel
        title="Our CNC Aluminum Machining Capabilities"
        subtitle="Six routes for aluminum parts — matched to geometry, quantity and finish. Each card is a starting point; the final process plan is confirmed during DFM review."
        items={aluminumCapabilities}
      />

      <SolutionsSection />

      <DarkImageBanner image={aluminumWhy.image} alt={aluminumWhy.alt} title={aluminumWhy.title}>
        <div className="space-y-4">
          {aluminumWhy.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[14px] leading-relaxed text-white/75">
              {paragraph}
            </p>
          ))}
        </div>
      </DarkImageBanner>

      <TeamStagesSection
        title="Expert Team Supporting Every Stage of Your Project"
        subtitle="One engineering contact follows your aluminum project from the first RFQ through machining, finishing and final inspection."
        stages={aluminumTeam}
      />

      <StabilitySection />

      <ApplicationsGallery
        title="Core Applications of CNC Machined Aluminum Parts"
        intro={
          <>
            Aluminum parts serve industries where weight, corrosion resistance and finish matter — from{' '}
            <span className="font-medium text-accent">aerospace structures</span> to electronics enclosures and
            automation hardware.
          </>
        }
        items={aluminumApplications}
      />

      <MaterialGradesSection />

      <FinishOptionsSection
        title="Surface Finish Options for CNC Aluminum Parts"
        intro={
          <>
            Protect and finish aluminum with anodizing, bead blasting, polishing and more. Compare 16 routes below, or
            explore our{' '}
            <a
              href="#/services/finishing"
              className="font-semibold text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
            >
              surface finishing
            </a>{' '}
            services for multi-step treatments.
          </>
        }
        defaultKey="fine-machining"
      />

      <BenefitsSection />

      <ServiceFaqSection title="CNC Aluminum Machining FAQs" items={aluminumFaqs} />

      <ServiceBottomCta
        title={aluminumClosing.title}
        description={aluminumClosing.description}
        cta={aluminumClosing.cta}
        onQuote={() => quote()}
      />

      <Footer />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Solutions tabs                                                     */
/* ------------------------------------------------------------------ */

function SolutionsSection() {
  const [activeKey, setActiveKey] = useState(aluminumSolutions.tabs[0].key)
  const active = aluminumSolutions.tabs.find((tab) => tab.key === activeKey) ?? aluminumSolutions.tabs[0]

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: LIGHT }}>
      <DetailContainer>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <DetailHead
            title={aluminumSolutions.title}
            subtitle={aluminumSolutions.description}
            className="lg:max-w-[740px]"
          />
          <div
            role="tablist"
            aria-label="Aluminum machining routes"
            className="inline-flex shrink-0 self-start overflow-hidden rounded-lg border border-ink/12 bg-white lg:self-auto"
          >
            {aluminumSolutions.tabs.map((tab) => {
              const selected = tab.key === active.key
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveKey(tab.key)}
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

        <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-50px_rgba(17,24,39,0.45)]">
          <div className="grid lg:grid-cols-[45%_55%]">
            <div className="relative min-h-[280px] overflow-hidden bg-surface sm:min-h-[340px] lg:min-h-[430px]">
              <img
                key={active.image}
                src={active.image}
                alt={active.alt}
                loading="lazy"
                className="animate-fade-in absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-8 p-7 sm:p-10 lg:p-12">
              {active.blocks.map((block) => (
                <div key={block.title}>
                  <h3 className="text-[17px] font-bold text-ink">{block.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Dimensional stability accordion                                    */
/* ------------------------------------------------------------------ */

function StabilitySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead
          title="5 Ways to Improve Dimensional Stability in CNC Aluminum Machining"
          line
          subtitle="Aluminum moves when stress releases and heat builds. These five controls keep flatness, hole position and thin walls predictable from roughing to inspection."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white">
          {aluminumStability.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={item.number} className="border-b border-line last:border-b-0">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`aluminum-stability-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-surface/60 sm:px-8 sm:py-6"
                  >
                    <span className="flex items-start gap-4 sm:gap-6">
                      <span className="pt-0.5 font-mono text-[13px] font-bold text-accent tabular-nums">
                        {item.number}.
                      </span>
                      <span className="text-[15.5px] leading-snug font-bold text-ink sm:text-[17px]">{item.title}</span>
                    </span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-accent text-white">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                </h3>

                {open && (
                  <div
                    id={`aluminum-stability-${index}`}
                    className="animate-fade-in grid gap-8 px-5 pb-8 sm:px-8 sm:pb-10 lg:grid-cols-[1fr_1fr] lg:pl-[76px]"
                  >
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
                      <StabilityDiagram />
                    ) : (
                      <div className="flex flex-col justify-center rounded-xl border border-line bg-surface/70 p-6">
                        <p className="text-[10.5px] font-bold tracking-[0.18em] text-accent uppercase">
                          Process check
                        </p>
                        <ul className="mt-4 space-y-3">
                          {item.checks.map((check) => (
                            <li key={check} className="flex items-start gap-2.5 text-[13px] leading-snug text-ink/80">
                              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent text-white">
                                <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                              </span>
                              {check}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </DetailContainer>
    </section>
  )
}

/** Three-stage stress-relief diagram used in the first stability item. */
function StabilityDiagram() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#20362b] bg-[#08120d] p-3 sm:p-4">
      <svg
        viewBox="0 0 600 420"
        role="img"
        aria-label="Diagram showing rough machining, stress relief and finish machining of an aluminum plate"
        className="h-auto w-full"
      >
        <defs>
          <pattern id="al-stress-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0H0V30" fill="none" stroke="#15271e" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="600" height="420" fill="url(#al-stress-grid)" />

        <text x="30" y="30" fill="#8fa398" fontFamily="ui-monospace, monospace" fontSize="10">
          DIMENSIONAL STABILITY · ALUMINUM PLATE
        </text>

        {/* Stage labels */}
        {[
          { x: 110, label: '01 ROUGH', sub: 'leave stock' },
          { x: 300, label: '02 RELIEVE', sub: 'release stress' },
          { x: 490, label: '03 FINISH', sub: 'hold datum' },
        ].map((stage) => (
          <g key={stage.label}>
            <text x={stage.x} y="64" textAnchor="middle" fill="#5fe39b" fontFamily="ui-monospace, monospace" fontSize="9.5">
              {stage.label}
            </text>
            <text x={stage.x} y="80" textAnchor="middle" fill="#6b7f73" fontFamily="ui-monospace, monospace" fontSize="8">
              {stage.sub}
            </text>
          </g>
        ))}

        {/* 01 Rough */}
        <rect x="40" y="120" width="140" height="130" rx="8" fill="#0d1b14" stroke="#a9bdb0" strokeWidth="1.6" />
        <rect x="62" y="142" width="96" height="86" rx="6" fill="none" stroke="#5b7064" strokeWidth="1" strokeDasharray="6 4" />
        <rect x="78" y="158" width="64" height="54" rx="4" fill="#12251b" stroke="#c8d6cd" strokeWidth="1.2" />
        <path d="M52 186h28M52 206h28M52 226h28" stroke="#7fb0ff" strokeWidth="1.4" />
        <path d="M44 186h6M44 206h6M44 226h6" stroke="#7fb0ff" strokeWidth="1.4" />
        <text x="110" y="274" textAnchor="middle" fill="#7fb0ff" fontFamily="ui-monospace, monospace" fontSize="8.5">
          CLAMP + STOCK
        </text>

        {/* 02 Stress relief */}
        <rect x="230" y="120" width="140" height="130" rx="8" fill="#0d1b14" stroke="#a9bdb0" strokeWidth="1.6" />
        <rect x="252" y="142" width="96" height="86" rx="6" fill="none" stroke="#5fe39b" strokeWidth="1.2" />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M300 ${166 + i * 22} l-14 -8 M300 ${166 + i * 22} l14 -8 M300 ${166 + i * 22} l-14 8 M300 ${166 + i * 22} l14 8`}
            stroke="#5fe39b"
            strokeWidth="1"
          />
        ))}
        <path d="M252 142h-14v-14M348 142h14v-14M252 228h-14v14M348 228h14v14" stroke="#7fb0ff" strokeWidth="1.4" fill="none" />
        <text x="300" y="274" textAnchor="middle" fill="#5fe39b" fontFamily="ui-monospace, monospace" fontSize="8.5">
          RESIDUAL STRESS RELEASED
        </text>

        {/* 03 Finish */}
        <rect x="420" y="120" width="140" height="130" rx="8" fill="#0d1b14" stroke="#c8d6cd" strokeWidth="1.6" />
        <rect x="448" y="148" width="84" height="74" rx="5" fill="none" stroke="#c8d6cd" strokeWidth="1.2" />
        <path d="M448 148h84M448 222h84" stroke="#5fe39b" strokeWidth="2" />
        <path d="M420 104H560" stroke="#7d9387" strokeWidth="1" />
        <path d="M420 110V98M560 110V98" stroke="#7d9387" strokeWidth="1" />
        <rect x="466" y="92" width="48" height="16" rx="3" fill="#08120d" />
        <text x="490" y="104" textAnchor="middle" fill="#aebfb4" fontFamily="ui-monospace, monospace" fontSize="8">
          0.02 FLAT
        </text>
        <text x="490" y="274" textAnchor="middle" fill="#5fe39b" fontFamily="ui-monospace, monospace" fontSize="8.5">
          FINISH ON DATUM
        </text>

        {/* Legend / footer */}
        <g stroke="#2a3c33" strokeWidth="1">
          <path d="M30 320H570" />
        </g>
        <circle cx="40" cy="344" r="3" fill="#7fb0ff" />
        <text x="50" y="347" fill="#8fa398" fontFamily="ui-monospace, monospace" fontSize="8.5">
          Clamping / heat
        </text>
        <circle cx="170" cy="344" r="3" fill="#5fe39b" />
        <text x="180" y="347" fill="#8fa398" fontFamily="ui-monospace, monospace" fontSize="8.5">
          Stability control
        </text>
        <text x="570" y="347" textAnchor="end" fill="#6b7f73" fontFamily="ui-monospace, monospace" fontSize="8">
          EZHONG · AL-STRESS-01
        </text>
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Material grades                                                    */
/* ------------------------------------------------------------------ */

function MaterialGradesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = aluminumGrades[activeIndex]

  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead
          title="Aluminum Material Grades for CNC Machining"
          line
          subtitle="Choose the alloy and temper that match the load case, surface finish and production plan. Select a grade to see machining notes and typical applications."
        />

        <div className="mt-12 rounded-2xl border border-line p-4 sm:p-6" style={{ backgroundColor: SUBTLE }}>
          <div className="grid min-w-0 gap-4 lg:grid-cols-[30fr_70fr] lg:gap-6">
            <div
              role="tablist"
              aria-label="Aluminum material grades"
              aria-orientation="vertical"
              className="min-w-0 overflow-hidden rounded-xl border border-line bg-white"
            >
              {aluminumGrades.map((grade, index) => {
                const selected = index === activeIndex
                return (
                  <button
                    key={grade.key}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="aluminum-grade-panel"
                    onClick={() => setActiveIndex(index)}
                    className={`block w-full cursor-pointer border-b border-line px-5 py-4 text-left transition-colors last:border-b-0 ${
                      selected
                        ? 'border-t-2 border-t-accent bg-surface text-accent'
                        : 'bg-white text-ink hover:bg-surface/60'
                    }`}
                  >
                    <span className="block text-[15px] font-bold">{grade.name}</span>
                    <span className={`mt-1 block text-[11.5px] ${selected ? 'text-accent/75' : 'text-muted'}`}>
                      {grade.subtitle}
                    </span>
                  </button>
                )
              })}
            </div>

            <div
              id="aluminum-grade-panel"
              role="tabpanel"
              key={active.key}
              className="animate-fade-in min-w-0 rounded-xl bg-white p-6 sm:p-8"
            >
              <div className="grid gap-7 md:grid-cols-[1fr_0.9fr] md:items-center md:gap-10">
                <div>
                  <p className="text-[10.5px] font-bold tracking-[0.18em] text-accent uppercase">Aluminum grade</p>
                  <h3 className="mt-2 text-[24px] leading-tight font-bold text-ink">{active.name}</h3>
                  <p className="mt-1.5 text-[13px] text-muted">{active.subtitle}</p>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-muted">{active.properties}</p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{active.applications}</p>
                </div>
                <div className="overflow-hidden rounded-xl bg-surface">
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

/* ------------------------------------------------------------------ */
/* Benefits matrix                                                    */
/* ------------------------------------------------------------------ */

function BenefitsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead
          title="Benefits of Using Aluminum in CNC Machining"
          subtitle="Aluminum combines low weight, corrosion resistance and fast machining — a strong fit when parts need to move, shed heat or look good in service."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {aluminumBenefits.map((benefit, index) => (
            <article key={benefit.title} className="rounded-xl p-6" style={{ backgroundColor: SUBTLE }}>
              <div className="flex items-start gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-accent text-[10.5px] font-bold text-white tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[15.5px] leading-snug font-bold text-ink">{benefit.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{benefit.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </DetailContainer>
    </section>
  )
}
