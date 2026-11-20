import {
  ClipboardCheck,
  Cog,
  Download,
  FileCheck2,
  FileSearch,
  FileText,
  Gauge,
  PackageCheck,
  ScanLine,
  ShieldCheck,
} from 'lucide-react'
import {
  qualityCapabilities,
  qualityGallery,
  qualityHero,
  qualityIntro,
  qualityPolicy,
  qualityProcedures,
  qualityProcess,
  type QualityProcessIcon,
} from '../data/companyPages'
import { Accented, CheckPoint, CompanyHero, GalleryMarquee, LightBottomCta } from './CompanyShared'
import { DetailContainer, DetailHead } from './ServiceDetailShared'

const processIcons: Record<QualityProcessIcon, typeof ClipboardCheck> = {
  clipboard: ClipboardCheck,
  'file-search': FileSearch,
  scan: ScanLine,
  gauge: Gauge,
  cog: Cog,
  shield: ShieldCheck,
  'file-check': FileCheck2,
  package: PackageCheck,
}

export function QualityAssurancePage() {
  return (
    <>
      <CompanyHero
        eyebrow={qualityHero.eyebrow}
        titleLines={qualityHero.titleLines}
        description={qualityHero.description}
        bullets={qualityHero.bullets}
        images={qualityHero.images}
        breadcrumb="Quality Assurance"
      />
      <QmsSection />
      <PolicySection />
      <ProceduresSection />
      <ProcessSection />
      <CapabilitiesSection />
      <GalleryMarquee
        title="Our Quality Control Team"
        subtitle="Inspection is a hands-on function here — the people who measure the part are part of the production conversation."
        items={qualityGallery}
      />
      <LightBottomCta
        title="Start Your Quality-Controlled Manufacturing Project"
        description="Send your drawing and quality requirements. We will confirm the inspection plan, documentation package and production route before work begins."
        cta="Get in Touch"
        href="#/inquiry"
      />
    </>
  )
}

function QmsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={qualityIntro.title} />
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <div className="space-y-4 text-[15px] leading-[1.7] text-muted">
              {qualityIntro.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <Accented text={paragraph} />
                </p>
              ))}
            </div>

            <ul className="mt-8 border-t border-line">
              {qualityIntro.certifications.map((certificate) => (
                <li key={certificate.title}>
                  <a
                    href="#/inquiry"
                    className="group flex items-center justify-between gap-5 border-b border-line py-4 text-[13.5px] font-semibold text-ink transition-colors hover:text-accent"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <FileText className="h-4.5 w-4.5 shrink-0 text-accent" />
                      <span className="underline decoration-line underline-offset-4 group-hover:decoration-accent">
                        {certificate.title}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-2 text-[11px] font-medium text-muted">
                      <span className="hidden sm:inline">{certificate.note}</span>
                      <Download className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <img
            src={qualityIntro.image.src}
            alt={qualityIntro.image.alt}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
      </DetailContainer>
    </section>
  )
}

function PolicySection() {
  return (
    <section className="bg-[#F4F5F6] py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={qualityPolicy.title} subtitle={qualityPolicy.intro} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {qualityPolicy.cards.map((card) => (
            <article key={card.title} className="flex h-full flex-col border border-line bg-white p-7">
              <h3 className="border-b border-line pb-4 text-[17px] font-bold text-ink">{card.title}</h3>
              <ul className="mt-5 space-y-3">
                {card.points.map((point) => (
                  <CheckPoint key={point}>{point}</CheckPoint>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </DetailContainer>
    </section>
  )
}

function ProceduresSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={qualityProcedures.title} subtitle={qualityProcedures.intro} />
        <div className="mt-12 grid gap-10 lg:grid-cols-[45fr_55fr] lg:gap-14">
          <img
            src={qualityProcedures.image.src}
            alt={qualityProcedures.image.alt}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover sm:aspect-[4/3] lg:aspect-auto lg:h-full"
          />
          <ol>
            {qualityProcedures.steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-5 border-b border-line py-6 first:pt-0 last:border-b-0 last:pb-0"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-line text-[14px] font-bold text-accent tabular-nums">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-[15.5px] leading-snug font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </DetailContainer>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="bg-[#F4F5F6] py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={qualityProcess.title} subtitle={qualityProcess.intro} />
        <div className="mt-12 space-y-10 lg:space-y-14">
          {[0, 1].map((row) => (
            <div key={row} className="relative">
              <div className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-ink/15 lg:block" aria-hidden />
              <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {qualityProcess.steps.slice(row * 4, row * 4 + 4).map((step, index) => {
                  const Icon = processIcons[step.icon]
                  const overallIndex = row * 4 + index
                  const filled = overallIndex === 0 || overallIndex === qualityProcess.steps.length - 1
                  return (
                    <li key={step.title} className="flex flex-col items-center text-center">
                      <span
                        className={`relative z-10 grid h-14 w-14 place-items-center rounded-full border ${
                          filled ? 'border-accent bg-accent text-white' : 'border-line bg-white text-ink'
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <p className="mt-4 text-[11px] font-bold tracking-[0.18em] text-accent">
                        {String(overallIndex + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-2 text-[15px] leading-snug font-bold text-ink">{step.title}</h3>
                      <p className="mt-2 max-w-[250px] text-[12.5px] leading-relaxed text-muted">{step.text}</p>
                    </li>
                  )
                })}
              </ol>
            </div>
          ))}
        </div>
      </DetailContainer>
    </section>
  )
}

function CapabilitiesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={qualityCapabilities.title} subtitle={qualityCapabilities.intro} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualityCapabilities.cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface">
                <img src={card.image} alt={card.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[16.5px] leading-snug font-bold text-ink">{card.title}</h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-muted">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </DetailContainer>
    </section>
  )
}
