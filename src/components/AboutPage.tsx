import { useState, type KeyboardEvent } from 'react'
import { ArrowRight, Calendar, Boxes, Globe2, Target } from 'lucide-react'
import {
  aboutGallery,
  aboutHero,
  aboutIntro,
  aboutServices,
  aboutStats,
  aboutTeam,
  aboutWhy,
  whoWeAre,
  type AboutStatIcon,
} from '../data/companyPages'
import { unsplash } from '../data/content'
import { useUI } from '../lib/ui'
import { Accented, CheckPoint, CompanyHero, CompanyVideo, GalleryMarquee, LightBottomCta } from './CompanyShared'
import { Button } from './primitives'
import { DetailContainer, DetailHead } from './ServiceDetailShared'

const statIcons: Record<AboutStatIcon, typeof Calendar> = {
  calendar: Calendar,
  projects: Boxes,
  target: Target,
  globe: Globe2,
}

export function AboutPage() {
  const { openQuote } = useUI()
  const contact = () => openQuote({ mode: 'contact', message: 'About EZHONG enquiry. ' })

  return (
    <>
      <CompanyHero
        eyebrow={aboutHero.eyebrow}
        titleLines={aboutHero.titleLines}
        description={aboutHero.description}
        images={aboutHero.images}
        breadcrumb="About EZHONG"
      />
      <PositioningSection />
      <WhoWeAreSection />
      <DarkCtaSection onContact={contact} />
      <ServicesSection />
      <TeamSection />
      <WhySection />
      <GalleryMarquee title="Into EZHONG" items={aboutGallery} />
      <LightBottomCta
        title="One-stop Service, Unlock Endless Possibilities"
        description="Share your drawing and production target. Our engineers will review the part, recommend the right process route and come back with a clear quotation."
        cta="Get in Touch"
        href="#/inquiry"
      />
    </>
  )
}

function PositioningSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={aboutIntro.title} />
        <div className="mt-6 max-w-[900px] space-y-4 text-[15px] leading-[1.7] text-muted">
          {aboutIntro.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <Accented text={paragraph} />
            </p>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutStats.map((stat) => {
              const Icon = statIcons[stat.icon]
              return (
                <div key={stat.label} className="flex flex-col border border-line bg-white p-6 sm:p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/12 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <p className="mt-7 text-[28px] leading-none font-bold tracking-[-0.02em] text-ink tabular-nums">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[13px] leading-snug font-semibold text-muted">{stat.label}</p>
                </div>
              )
            })}
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-2xl bg-surface lg:min-h-full">
            <CompanyVideo
              poster={aboutIntro.video.poster}
              src={aboutIntro.video.src}
              alt={aboutIntro.video.alt}
              label={aboutIntro.video.label}
            />
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}

function WhoWeAreSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={whoWeAre.title} />
        <div className="mt-12 grid gap-10 lg:grid-cols-[45fr_55fr] lg:gap-14">
          <img
            src={whoWeAre.image.src}
            alt={whoWeAre.image.alt}
            loading="lazy"
            className="aspect-square w-full rounded-2xl object-cover"
          />
          <div>
            <div className="space-y-4 text-[15px] leading-[1.7] text-muted">
              {whoWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <Accented text={paragraph} />
                </p>
              ))}
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {whoWeAre.cards.map((card) => (
                <article key={card.title} className="border border-line bg-white p-6">
                  <span className="block h-1 w-9 bg-accent" aria-hidden />
                  <h3 className="mt-4 text-[17px] font-bold text-ink">{card.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}

function DarkCtaSection({ onContact }: { onContact: () => void }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1118]">
      <img
        src={unsplash('1666634157070-6fd830fb5672', 2000)}
        alt="CNC lathe turning a precision metal shaft"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#070c12]/78" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-t from-[#070c12]/60 via-transparent to-[#070c12]/30"
        aria-hidden
      />

      <DetailContainer className="flex min-h-[400px] items-center justify-center py-20 text-center lg:min-h-[460px]">
        <div className="max-w-[780px]">
          <h2 className="text-[32px] leading-[1.1] font-bold tracking-[-0.025em] text-white sm:text-[40px] lg:text-[46px]">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-relaxed text-white/75">
            Send a drawing, a model or even a sketch. We will confirm the process route, the tolerances that matter and
            a lead time you can plan around.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="outline-light" size="lg" onClick={onContact}>
              Contact Us <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}

function ServicesSection() {
  const [activeKey, setActiveKey] = useState(aboutServices.tabs[0].key)
  const active = aboutServices.tabs.find((tab) => tab.key === activeKey) ?? aboutServices.tabs[0]

  const onTabKey = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    const index = aboutServices.tabs.findIndex((tab) => tab.key === activeKey)
    const next =
      event.key === 'ArrowRight'
        ? (index + 1) % aboutServices.tabs.length
        : (index - 1 + aboutServices.tabs.length) % aboutServices.tabs.length
    setActiveKey(aboutServices.tabs[next].key)
  }

  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={aboutServices.title} subtitle={aboutServices.intro} />

        <div
          role="tablist"
          aria-label="One-stop manufacturing services"
          className="mt-10 flex gap-8 overflow-x-auto border-b border-line [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {aboutServices.tabs.map((tab) => {
            const selected = tab.key === activeKey
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                id={`about-service-tab-${tab.key}`}
                aria-selected={selected}
                aria-controls="about-service-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveKey(tab.key)}
                onKeyDown={onTabKey}
                className={`relative shrink-0 cursor-pointer pb-4 text-[14px] font-semibold whitespace-nowrap transition-colors ${
                  selected ? 'text-accent' : 'text-ink/65 hover:text-ink'
                }`}
              >
                {tab.name}
                {selected && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-accent" aria-hidden />}
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id="about-service-panel"
          aria-labelledby={`about-service-tab-${active.key}`}
          className="mt-8 overflow-hidden rounded-2xl border border-line bg-white"
        >
          <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.05fr_1fr_1.1fr] lg:gap-10 lg:p-10">
            <div>
              <p className="text-[10.5px] font-bold tracking-[0.18em] text-accent uppercase">Selected service</p>
              <h3
                key={`${active.key}-title`}
                className="animate-fade-in mt-3 text-[24px] leading-tight font-bold text-ink"
              >
                {active.title}
              </h3>
              <p key={`${active.key}-copy`} className="animate-fade-in mt-4 text-[13.5px] leading-relaxed text-muted">
                {active.description}
              </p>
              <a
                href={active.href}
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent transition-colors hover:text-accent-dark"
              >
                Explore this service <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <ul key={`${active.key}-points`} className="animate-fade-in space-y-4 self-center">
              {active.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[13.5px] leading-snug text-ink/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>

            <div className="relative min-h-[240px] overflow-hidden rounded-xl bg-surface sm:min-h-[280px]">
              <img
                key={active.key}
                src={active.image}
                alt={active.alt}
                loading="lazy"
                className="animate-fade-in absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={aboutTeam.title} subtitle={aboutTeam.intro} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutTeam.roles.map((role) => (
            <article key={role.role} className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img src={role.image} alt={role.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[16.5px] leading-snug font-bold text-ink">{role.role}</h3>
                <ul className="mt-4 space-y-2.5">
                  {role.points.map((point) => (
                    <CheckPoint key={point}>{point}</CheckPoint>
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

function WhySection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={aboutWhy.title} align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {aboutWhy.cards.slice(0, 3).map((card) => (
            <WhyCard key={card.title} card={card} />
          ))}
        </div>
        <div className="mx-auto mt-6 grid max-w-[830px] gap-6 md:grid-cols-2">
          {aboutWhy.cards.slice(3).map((card) => (
            <WhyCard key={card.title} card={card} />
          ))}
        </div>
      </DetailContainer>
    </section>
  )
}

function WhyCard({ card }: { card: (typeof aboutWhy.cards)[number] }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white p-7">
      <h3 className="border-b border-line pb-4 text-[18px] font-bold text-ink">{card.title}</h3>
      <dl className="mt-5 space-y-5">
        {card.stats.map((stat, index) => (
          <div key={stat.label} className={index > 0 ? 'border-t border-line pt-5' : ''}>
            <dd className="text-[27px] leading-none font-bold tracking-[-0.02em] text-ink">{stat.value}</dd>
            <dt className="mt-2 text-[11.5px] font-semibold tracking-[0.04em] text-muted uppercase">{stat.label}</dt>
          </div>
        ))}
      </dl>
      <p className="mt-6 border-t border-line pt-5 text-[13px] leading-relaxed text-muted">{card.text}</p>
    </article>
  )
}
