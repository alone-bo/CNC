import { ArrowRight, Award, Coins, Factory, PencilRuler, Truck } from 'lucide-react'
import { advantages, company, unsplash } from '../data/content'
import { useUI } from '../lib/ui'
import { Button, Eyebrow } from './primitives'

const icons = { quality: Award, engineering: PencilRuler, cost: Coins, resources: Factory, delivery: Truck }

export function WhyChoose() {
  const { openQuote } = useUI()

  return (
    <section
      id="about"
      aria-labelledby="why-title"
      className="relative isolate scroll-mt-16 overflow-hidden bg-[#1f2023] bg-cover bg-center lg:scroll-mt-20"
      style={{ backgroundImage: `url(${unsplash('1647427060118-4911c9821b82', 2400)})` }}
    >
      {/* Light neutral wash keeps the workshop visible but calm behind the panel */}
      <div className="absolute inset-0 -z-10 bg-[#1b1c1e]/25" aria-hidden />

      <div className="flex min-h-[760px] lg:min-h-[860px]">
        <div className="flex w-full flex-col justify-center bg-[#1c1d20]/85 px-5 py-16 backdrop-blur-[2px] sm:px-10 sm:py-20 md:w-[60%] lg:w-[45%] lg:py-24 xl:pr-16 xl:pl-[max(2.5rem,calc((100vw-1280px)/2))]">
          <Eyebrow tone="light">Why Choose EZHONG</Eyebrow>
          <h2
            id="why-title"
            className="mt-5 max-w-[560px] text-[30px] leading-[1.14] font-bold tracking-[-0.02em] text-white sm:text-[38px] lg:text-[42px]"
          >
            Why Choose EZHONG as Your Manufacturing Partner?
          </h2>

          <ul className="mt-10 max-w-[560px] space-y-7">
            {advantages.map((a) => {
              const Icon = icons[a.key]
              return (
                <li key={a.key} className="flex gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/5">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold text-white">{a.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/70">{a.text}</p>
                    {a.key === 'quality' && company.certifications.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {company.certifications.map((c) => (
                          <span key={c} className="rounded border border-white/20 px-2 py-0.5 text-xs font-semibold text-white/80">
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-12">
            <Button variant="accent" size="lg" className="w-full sm:w-auto" onClick={() => openQuote()}>
              Start Your Manufacturing Project <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
