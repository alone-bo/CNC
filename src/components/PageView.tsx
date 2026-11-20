import { useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { AboutPage } from './AboutPage'
import { FaqPage } from './FaqPage'
import { InquiryPage } from './InquiryPage'
import { QualityAssurancePage } from './QualityAssurancePage'
import { TestimonialsPage } from './TestimonialsPage'
import { caseStudies, findService, formatDate, industries, news, processStages, serviceCatalog } from '../data/content'
import { industryDetails } from '../data/industryDetails'
import { closeRoute, useEscape, useScrollLock, useUI, type Route } from '../lib/ui'
import { Button, Container, Eyebrow, buttonClass } from './primitives'
import { CncAluminumPage } from './CncAluminumPage'
import { CncMachiningPage } from './CncMachiningPage'
import { CncMillingPage } from './CncMillingPage'
import { GenericServicePage } from './GenericServicePage'
import { genericServices } from '../data/genericServices'
import { Footer } from './Footer'
import { IndustryDetailPage } from './IndustryDetailPage'
import { IndustriesOverview } from './IndustriesOverview'
import { BlogsPage, CaseStudiesPage, NewsPage, VideosPage } from './ResourcePages'
import { ServicesOverview } from './ServicesOverview'
import { SolutionDetailPage } from './SolutionDetailPage'
import { SolutionsOverview } from './SolutionsOverview'

/** Lightweight detail pages for news, industries and services, layered over the homepage. */
export function PageView({ route }: { route: Route }) {
  const ref = useRef<HTMLDivElement>(null)
  const { quote, chatOpen } = useUI()
  useScrollLock(!!route)
  // Let the quote modal or chat handle Escape first instead of closing the page behind them.
  useEscape(!!route && !quote && !chatOpen, closeRoute)
  useEffect(() => {
    ref.current?.scrollTo({ top: 0 })
  }, [route])
  if (!route) return null

  if (route.name === 'industries-overview') {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <IndustriesOverview />
        <Footer />
      </div>
    )
  }

  if (route.name === 'industry' && industryDetails[route.slug]) {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <IndustryDetailPage slug={route.slug} />
      </div>
    )
  }

  if (route.name === 'solutions-overview') {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <SolutionsOverview />
        <Footer />
      </div>
    )
  }

  if (route.name === 'solution') {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <SolutionDetailPage slug={route.slug} />
      </div>
    )
  }

  if (route.name === 'services-overview') {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <ServicesOverview />
        <Footer />
      </div>
    )
  }

  if (route.name === 'about') {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <AboutPage />
        <Footer />
      </div>
    )
  }

  if (route.name === 'testimonials') {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <TestimonialsPage />
        <Footer />
      </div>
    )
  }

  if (route.name === 'quality-assurance') {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <QualityAssurancePage />
        <Footer />
      </div>
    )
  }

  if (route.name === 'faq') {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <FaqPage />
        <Footer />
      </div>
    )
  }

  if (route.name === 'inquiry') {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <InquiryPage />
        <Footer />
      </div>
    )
  }

  if (route.name === 'blogs' || route.name === 'news-list' || route.name === 'cases' || route.name === 'videos') {
    const Page =
      route.name === 'blogs'
        ? BlogsPage
        : route.name === 'news-list'
          ? NewsPage
          : route.name === 'cases'
            ? CaseStudiesPage
            : VideosPage
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <Page />
        <Footer />
      </div>
    )
  }

  if (route.name === 'service' && route.slug === 'cnc-machining') {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <CncMachiningPage />
      </div>
    )
  }

  if (route.name === 'service' && route.slug === 'cnc-aluminum') {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <CncAluminumPage />
      </div>
    )
  }

  if (route.name === 'service' && route.slug === 'cnc-milling') {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <CncMillingPage />
      </div>
    )
  }

  if (route.name === 'service' && genericServices[route.slug]) {
    return (
      <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
        <GenericServicePage slug={route.slug} />
      </div>
    )
  }

  return (
    <div ref={ref} className="animate-fade-in fixed inset-0 z-45 overflow-y-auto bg-white pt-16 lg:pt-20">
      <Container className="pt-8 lg:pt-10">
        <button
          type="button"
          onClick={closeRoute}
          className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-muted hover:text-brand"
        >
          <ArrowLeft className="h-4 w-4" /> Back to homepage
        </button>
      </Container>
      <div className="pb-28 lg:pb-24">
        {route.name === 'news' && <Article slug={route.slug} />}
        {route.name === 'industry' && <IndustryPage slug={route.slug} />}
        {route.name === 'service' && <ServicePage slug={route.slug} />}
        {route.name === 'case' && <CasePage slug={route.slug} />}
        {route.name === 'npi' && <NpiPage slug={route.slug} />}
      </div>
      <Footer />
    </div>
  )
}

function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-muted">This content may have moved.</p>
    </Container>
  )
}

function Article({ slug }: { slug: string }) {
  const item = news.find((n) => n.slug === slug)
  if (!item) return <NotFound />
  const others = news.filter((n) => n.slug !== slug)
  return (
    <article>
      <Container className="max-w-[880px] pt-10 xl:px-0">
        <p className="flex items-center gap-3 text-sm text-muted">
          <span className="font-semibold text-brand">{item.category}</span>
          <span className="h-1 w-1 rounded-full bg-muted/40" />
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </p>
        <h1 className="mt-4 text-[32px] leading-[1.15] font-bold tracking-[-0.02em] lg:text-[44px]">{item.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{item.summary}</p>
      </Container>
      <Container className="mt-10 max-w-[1080px] xl:px-0">
        <img src={item.image} alt={item.alt} className="aspect-[16/8] w-full rounded-2xl object-cover" />
      </Container>
      <Container className="mt-10 max-w-[720px] space-y-5 text-[17px] leading-[1.75] text-ink/85 xl:px-0">
        {item.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Container>
      <Container className="mt-16 max-w-[1080px] border-t border-line pt-10 xl:px-0">
        <h2 className="text-xl font-bold">More insights</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug}>
              <a href={`#/news/${o.slug}`} className="group flex items-center gap-4 rounded-xl bg-surface p-4 hover:ring-1 hover:ring-brand">
                <img src={o.image} alt="" className="h-20 w-28 shrink-0 rounded-lg object-cover" />
                <span className="text-[15px] leading-snug font-semibold group-hover:text-brand">{o.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </article>
  )
}

function IndustryPage({ slug }: { slug: string }) {
  const { openQuote } = useUI()
  const ind = industries.find((i) => i.slug === slug)
  if (!ind) return <NotFound />
  return (
    <Container className="pt-10">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Eyebrow>{ind.name} · Case Study</Eyebrow>
          <h1 className="mt-5 text-[32px] leading-[1.15] font-bold tracking-[-0.02em] lg:text-[44px]">{ind.caseTitle}</h1>
          <span className="mt-5 block h-1 w-12 rounded-full bg-accent" />
          <p className="mt-6 text-[17px] leading-relaxed text-muted">{ind.overview}</p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">{ind.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="accent" size="lg" onClick={() => openQuote({ industry: ind.name })}>
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Button>
            <a href="#/industries" className="inline-flex h-13 items-center px-2 text-[15px] font-semibold text-brand hover:underline">
              All industries
            </a>
          </div>
        </div>
        <img src={ind.image} alt={ind.alt} className="aspect-[4/3] w-full rounded-2xl object-cover" />
      </div>
      <div className="mt-14 rounded-2xl bg-surface p-6 sm:p-10">
        <h2 className="text-xl font-bold">Project specifications</h2>
        <dl className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {ind.specs.map((s) => (
            <div key={s.label} className="border-b border-line py-4">
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="mt-1 font-semibold">{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-xs text-muted">Representative specifications. Final values confirmed per project.</p>
      </div>
    </Container>
  )
}

function ServicePage({ slug }: { slug: string }) {
  const { openQuote } = useUI()
  const s = findService(slug)
  if (!s) return <NotFound />
  return (
    <Container className="pt-10">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Eyebrow>Manufacturing Service</Eyebrow>
          <h1 className="mt-5 text-[36px] leading-[1.1] font-bold tracking-[-0.02em] lg:text-[52px]">{s.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{s.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="accent" size="lg" onClick={() => openQuote({ service: s.title })}>
              Get a {s.title} Quote <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl bg-surface">
          <img src={s.image} alt={s.alt} className="aspect-[4/3] w-full object-cover" />
        </div>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {[
          { title: 'Capabilities', items: s.capabilities },
          { title: 'Common materials', items: s.materials },
        ].map((b) => (
          <div key={b.title} className="rounded-2xl border border-line p-7 sm:p-8">
            <h2 className="text-lg font-bold">{b.title}</h2>
            <ul className="mt-5 space-y-3">
              {b.items.map((it) => (
                <li key={it} className="flex items-center gap-3 text-[15px] text-ink/85">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/12">
                    <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-14">
        <h2 className="text-xl font-bold">Other services</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {serviceCatalog
            .filter((o) => o.slug !== slug)
            .map((o) => (
              <li key={o.slug}>
                <a href={`#/services/${o.slug}`} className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm font-medium hover:border-brand hover:text-brand">
                  {o.menuLabel}
                </a>
              </li>
            ))}
        </ul>
        <a href="#/services" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark">
          View all manufacturing services <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Container>
  )
}

function CasePage({ slug }: { slug: string }) {
  const { openQuote } = useUI()
  const c = caseStudies.find((x) => x.slug === slug)
  if (!c) return <NotFound />
  return (
    <Container className="pt-10">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Eyebrow>{c.industry} · Case Study</Eyebrow>
          <h1 className="mt-5 text-[32px] leading-[1.15] font-bold tracking-[-0.02em] lg:text-[44px]">{c.title}</h1>
          <span className="mt-5 block h-1 w-12 rounded-full bg-accent" />
          <p className="mt-6 text-[17px] leading-relaxed text-muted">{c.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="accent" size="lg" onClick={() => openQuote({ message: `Similar project to: ${c.title}. ` })}>
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Button>
            <a href="#/cases" className={buttonClass('outline-accent', 'lg')}>
              All case studies
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          <img src={c.image} alt={c.alt} className="aspect-[4/3] w-full object-cover" />
          <span className="absolute top-5 left-5 rounded-full bg-accent px-4 py-1.5 text-[13px] font-semibold text-white">{c.process}</span>
        </div>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-[1fr_1fr_2fr]">
        {[
          { v: c.quantity, l: 'Parts Produced' },
          { v: c.componentTypes, l: 'Component Types' },
        ].map((m) => (
          <div key={m.l} className="rounded-2xl bg-surface p-8">
            <p className="text-4xl font-bold text-ink tabular-nums">{m.v}</p>
            <p className="mt-2 text-sm text-muted">{m.l}</p>
          </div>
        ))}
        <div className="rounded-2xl border border-line p-8">
          <h2 className="text-lg font-bold">{c.valueTitle}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.valueText}</p>
        </div>
      </div>
      <p className="mt-5 text-xs text-muted">Sample project metrics, shown for illustration pending verification.</p>
    </Container>
  )
}

function NpiPage({ slug }: { slug: string }) {
  const { openQuote } = useUI()
  const stage = processStages.find((x) => x.slug === slug)
  if (!stage) return <NotFound />
  return (
    <Container className="pt-10">
      <Eyebrow>EZHONG NPI Solutions · Stage {stage.number}</Eyebrow>
      <h1 className="mt-5 text-[36px] leading-[1.1] font-bold tracking-[-0.02em] lg:text-[52px]">{stage.name}</h1>
      <p className="mt-5 max-w-[760px] text-lg leading-relaxed text-muted">{stage.description}</p>
      <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
        <img src={stage.image} alt={stage.alt} className="aspect-[4/3] w-full rounded-2xl border border-line object-cover lg:aspect-auto lg:h-full" />
        <ol className="grid gap-4 sm:grid-cols-2">
          {stage.items.map((it, i) => (
            <li key={it.title} className="rounded-2xl border border-line p-7">
              <span className="text-sm font-bold text-accent tabular-nums">0{i + 1}</span>
              <h2 className="mt-2 text-lg font-bold">{it.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{it.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Button variant="accent" size="lg" onClick={() => openQuote({ message: `New product introduction — ${stage.name} stage. ` })}>
          Start Your New Product Introduction Project
        </Button>
        <a href="#process" className={buttonClass('outline-accent', 'lg')}>
          View all stages
        </a>
      </div>
      <nav aria-label="NPI stages" className="mt-14 flex flex-wrap gap-2 border-t border-line pt-8">
        {processStages.map((p) => (
          <a
            key={p.slug}
            href={`#/npi/${p.slug}`}
            aria-current={p.slug === slug ? 'page' : undefined}
            className={`inline-flex h-10 items-center rounded-full border px-4 text-sm font-medium ${
              p.slug === slug ? 'border-accent bg-accent text-white' : 'border-line hover:border-accent hover:text-accent'
            }`}
          >
            {p.number} · {p.shortTitle}
          </a>
        ))}
      </nav>
    </Container>
  )
}
