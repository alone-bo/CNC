import { Boxes, ClipboardCheck, Gauge, Layers, ShieldCheck, Target } from 'lucide-react'
import { cncFinishing } from '../data/cncMachining'
import { genericServices, type GenericAdvantageIcon } from '../data/genericServices'
import { useUI } from '../lib/ui'
import { Footer } from './Footer'
import {
  ApplicationsGallery,
  BreadcrumbBar,
  CapabilityCarousel,
  CapabilityGrid,
  DarkImageBanner,
  ExplainerSection,
  FinishOptionsSection,
  MaterialsSelectorSection,
  ServiceBottomCta,
  ServiceFaqSection,
  ServiceHero,
  SpecsSection,
  ProcessStepsSection,
} from './ServiceDetailShared'

const advantageIcons: Record<GenericAdvantageIcon, typeof Gauge> = {
  clipboard: ClipboardCheck,
  layers: Layers,
  gauge: Gauge,
  boxes: Boxes,
  shield: ShieldCheck,
  target: Target,
}

export function GenericServicePage({ slug }: { slug: string }) {
  const data = genericServices[slug]
  const { openQuote } = useUI()
  if (!data) return null

  const quote = () =>
    openQuote({
      service: data.quoteService,
      message: `${data.breadcrumb} project. `,
    })

  const finishItems = data.finish?.keys
    ? cncFinishing.filter((finish) => data.finish?.keys?.includes(finish.key))
    : cncFinishing

  return (
    <div className="bg-white">
      <ServiceHero
        titleLines={data.hero.titleLines}
        description={data.hero.description}
        cta={data.hero.cta}
        image={data.hero.image}
        alt={data.hero.alt}
        onQuote={quote}
      />
      <BreadcrumbBar label={data.breadcrumb} />

      {data.capabilities.layout === 'carousel' ? (
        <CapabilityCarousel
          title={data.capabilities.title}
          subtitle={data.capabilities.subtitle}
          items={data.capabilities.items}
        />
      ) : (
        <CapabilityGrid
          title={data.capabilities.title}
          subtitle={data.capabilities.subtitle}
          items={data.capabilities.items}
        />
      )}

      <DarkImageBanner image={data.advantages.image} alt={data.advantages.alt} title={data.advantages.title}>
        {data.advantages.mode === 'icons' && data.advantages.items ? (
          <ul className="space-y-5">
            {data.advantages.items.map((item) => {
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
        ) : (
          <div className="space-y-4">
            {data.advantages.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="text-[14px] leading-relaxed text-white/75">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </DarkImageBanner>

      <ProcessStepsSection
        title={data.process.title}
        subtitle={data.process.subtitle}
        steps={data.process.steps}
      />

      {data.materials && (
        <MaterialsSelectorSection
          title={data.materials.title}
          subtitle={data.materials.subtitle}
          groups={data.materials.groups}
        />
      )}

      {data.finish && (
        <FinishOptionsSection
          title={data.finish.title}
          intro={
            <>
              Choose a finish for protection, appearance or wear, then compare the options and expected surface. For
              multi-step treatments, explore our{' '}
              <a
                href="#/services/finishing"
                className="font-semibold text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
              >
                parts finishing
              </a>{' '}
              services.
            </>
          }
          defaultKey={data.finish.defaultKey}
          items={finishItems}
        />
      )}

      <ApplicationsGallery
        title={data.applications.title}
        intro={data.applications.intro}
        items={data.applications.items}
      />

      {data.specs && (
        <SpecsSection title={data.specs.title} subtitle={data.specs.subtitle} rows={data.specs.rows} />
      )}

      {data.explain && <ExplainerSection data={data.explain} />}

      <ServiceFaqSection title={`${data.breadcrumb} FAQs`} items={data.faqs} />

      <ServiceBottomCta
        title={data.closing.title}
        description={data.closing.description}
        cta={data.closing.cta}
        onQuote={quote}
      />

      <Footer />
    </div>
  )
}
