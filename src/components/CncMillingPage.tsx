import { ArrowRight, Boxes, Check, ClipboardCheck, Gauge, Layers } from 'lucide-react'
import {
  millingAdvantages,
  millingApplications,
  millingCapabilities,
  millingClosing,
  millingExplain,
  millingFaqs,
  millingGlobal,
  millingHero,
  millingMaterialGroups,
  millingQuality,
  millingSpecs,
  millingWhy,
  type MillingAdvantage,
} from '../data/cncMilling'
import { useUI } from '../lib/ui'
import { Footer } from './Footer'
import { Button } from './primitives'
import {
  ApplicationsGallery,
  BreadcrumbBar,
  CapabilityGrid,
  DarkImageBanner,
  DetailContainer,
  ExplainerSection,
  FinishOptionsSection,
  MaterialsSelectorSection,
  ServiceBottomCta,
  ServiceFaqSection,
  ServiceHero,
  SpecsSection,
} from './ServiceDetailShared'

const advantageIcons: Record<MillingAdvantage['icon'], typeof Gauge> = {
  clipboard: ClipboardCheck,
  layers: Layers,
  gauge: Gauge,
  boxes: Boxes,
}

export function CncMillingPage() {
  const { openQuote } = useUI()
  const quote = () => openQuote({ service: 'CNC Machining', message: 'CNC milling project. ' })

  return (
    <div className="bg-white">
      <ServiceHero
        titleLines={millingHero.titleLines}
        description={millingHero.description}
        cta={millingHero.cta}
        image={millingHero.image}
        alt={millingHero.alt}
        onQuote={quote}
      />
      <BreadcrumbBar label="CNC Milling" />

      <CapabilityGrid
        title="Our CNC Milling Capabilities"
        subtitle="Three milling routes cover prismatic parts, multi-face work and sculpted geometry. The right machine is selected during DFM review based on tolerance, access and quantity."
        items={millingCapabilities}
      />

      <DarkImageBanner image={millingWhy.image} alt={millingWhy.alt} title={millingWhy.title}>
        <ul className="space-y-5">
          {millingAdvantages.map((item) => {
            const Icon = advantageIcons[item.icon]
            return (
              <li key={item.title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/5">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-[15.5px] font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-white/70">{item.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </DarkImageBanner>

      <MaterialsSelectorSection
        title="CNC Milling Materials"
        subtitle="Metals and engineering plastics, matched to the part’s load, environment and finish. Select a material family and grade to see machining notes and typical uses."
        groups={millingMaterialGroups}
      />

      <FinishOptionsSection
        title="CNC Milling Surface Finish Options"
        intro={
          <>
            Milling leaves a machined surface; finishing sets the final texture, protection and appearance. Compare 16
            routes below, or explore our{' '}
            <a
              href="#/services/finishing"
              className="font-semibold text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
            >
              parts finishing
            </a>{' '}
            services.
          </>
        }
        defaultKey="bead-blasting"
      />

      <ApplicationsGallery
        title="Applications of CNC Milled Parts"
        intro={
          <>
            Milled parts appear wherever structure, enclosure or mounting precision matters — from{' '}
            <span className="font-medium text-accent">aerospace brackets</span> to electronics housings and automation
            fixtures.
          </>
        }
        items={millingApplications}
      />

      <SpecsSection
        title="Standard Dimensions and Tolerances for CNC Milling"
        rows={millingSpecs}
        note="Dimensions, tolerances and lead times are confirmed against the drawing and inspection plan during review."
      />

      <QualityBannerSection />

      <GlobalSupportSection onQuote={quote} />

      <ExplainerSection
        data={{
          first: {
            title: millingExplain.what.title,
            text: millingExplain.what.text,
            points: millingExplain.what.points,
            image: millingExplain.what.image,
            alt: millingExplain.what.alt,
          },
          second: {
            title: millingExplain.how.title,
            text: millingExplain.how.text,
            cards: millingExplain.how.cards,
            image: millingExplain.how.image,
            alt: millingExplain.how.alt,
          },
        }}
      />

      <ServiceFaqSection title="CNC Milling FAQs" items={millingFaqs} />

      <ServiceBottomCta
        title={millingClosing.title}
        description={millingClosing.description}
        cta={millingClosing.cta}
        onQuote={quote}
      />

      <Footer />
    </div>
  )
}

function QualityBannerSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1118]">
      <img
        src={millingQuality.image}
        alt={millingQuality.alt}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#060b10]/78" aria-hidden />

      <DetailContainer className="py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-center lg:gap-14">
          <div>
            <span className="block h-1 w-16 bg-accent" aria-hidden />
            <h2 className="mt-5 max-w-[760px] text-[30px] leading-[1.12] font-bold tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]">
              {millingQuality.title}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {millingQuality.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[14px] leading-relaxed text-white/75">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/95 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)]">
            <p className="text-[10.5px] font-bold tracking-[0.18em] text-accent uppercase">Quality package</p>
            <ul className="mt-4 space-y-3">
              {millingQuality.package.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] leading-snug text-ink/80">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}

function GlobalSupportSection({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <span className="block h-1 w-16 bg-accent" aria-hidden />
            <h2 className="mt-5 text-[28px] leading-[1.16] font-bold tracking-[-0.02em] text-ink sm:text-[34px] lg:text-[38px]">
              {millingGlobal.title}
            </h2>
            <p className="mt-4 max-w-[560px] text-[14.5px] leading-relaxed text-muted">{millingGlobal.description}</p>
            <div className="mt-8">
              <Button variant="accent" size="lg" onClick={onQuote}>
                {millingGlobal.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-surface">
              <img
                src={millingGlobal.image}
                alt={millingGlobal.alt}
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <div className="absolute right-4 bottom-4 max-w-[270px] rounded-xl border border-line bg-white/95 p-4 shadow-[0_20px_50px_-25px_rgba(17,24,39,0.5)] backdrop-blur-sm">
              <p className="text-[10px] font-bold tracking-[0.16em] text-accent uppercase">
                {millingGlobal.cardTitle}
              </p>
              <ul className="mt-3 space-y-2">
                {millingGlobal.cardRows.map((row) => (
                  <li key={row} className="flex items-start gap-2 text-[12px] leading-snug text-ink/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {row}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}
