import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { media, partners, type PartnerMark } from '../data/content'
import { useUI } from '../lib/ui'
import { Button, Container, Eyebrow, buttonClass } from './primitives'

export function Hero() {
  const { openQuote } = useUI()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) videoRef.current?.pause()
  }, [])

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#1b1c1e] pb-[calc(68px+env(safe-area-inset-bottom))] xl:pb-0">
      {videoFailed ? (
        <img
          src={media.heroPoster}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover saturate-[0.35]"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 -z-20 h-full w-full object-cover saturate-[0.35]"
          src={media.heroVideo}
          poster={media.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          onError={() => setVideoFailed(true)}
        />
      )}
      {/* Neutral charcoal overlay; kept light so the workshop footage stays visible */}
      {/* <div className="absolute inset-0 -z-10 " aria-hidden /> */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#161718]/60 via-[#161718]/20 to-transparent" aria-hidden />

      <div className="flex flex-1 items-center">
        <Container className="pt-28 pb-12 lg:pt-32">
          <div className="max-w-[720px]">
            <div className="animate-fade-up">
              <Eyebrow tone="light">Precision Manufacturing Partner</Eyebrow>
            </div>
            <h1 className="animate-fade-up mt-6 text-[40px] leading-[1.08] font-bold tracking-[-0.025em] text-white [animation-delay:80ms] sm:text-[52px] lg:text-[64px]">
              Precision CNC Machining &amp; Custom Manufacturing Services
            </h1>
            <p className="animate-fade-up mt-6 max-w-[600px] text-base leading-relaxed text-white/85 [animation-delay:160ms] sm:text-lg">
              From rapid prototyping to production, EZHONG delivers precision-engineered components with reliable
              quality, flexible manufacturing capabilities, and efficient production support.
            </p>
            <div className="animate-fade-up mt-10 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:gap-4">
              <Button variant="accent" size="lg" onClick={() => openQuote()}>
                Get an Instant Quote <ArrowRight className="h-4 w-4" />
              </Button>
              <a href="#services" className={buttonClass('outline-light', 'lg')}>
                Explore Our Capabilities
              </a>
            </div>
          </div>
        </Container>
      </div>

      <PartnerMarquee />
    </section>
  )
}

function PartnerMarquee() {
  // The list is rendered twice so translating by -50% loops seamlessly.
  const loop = [...partners, ...partners]
  return (
    <div
      className="group relative border-t border-white/10 bg-[#1b1c1e]/45 backdrop-blur-sm"
      aria-label="Customers and manufacturing partners"
      role="region"
    >
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] motion-reduce:overflow-x-auto">
        <ul className="animate-marquee flex w-max items-center group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((p, i) => (
            <li
              key={`${p.name}-${i}`}
              aria-hidden={i >= partners.length}
              className="flex h-20 shrink-0 items-center px-8 sm:h-24 sm:px-12"
            >
              <PartnerLogo name={p.name} mark={p.mark} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const markPaths: Record<PartnerMark, string> = {
  hex: 'M12 2 21 7v10l-9 5-9-5V7z',
  ring: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z',
  triangle: 'M12 3 22 20H2z',
  bars: 'M3 5h4v14H3zM10 9h4v10h-4zM17 3h4v16h-4z',
  square: 'M4 4h16v16H4zm4 4v8h8V8z',
  wave: 'M2 14c3-6 6-6 10 0s7 6 10 0v6H2z',
  diamond: 'M12 2 22 12 12 22 2 12z',
  arc: 'M2 18a10 10 0 0 1 20 0h-4a6 6 0 0 0-12 0z',
}

/** Monochrome placeholder wordmark — swap for approved partner SVG logos. */
function PartnerLogo({ name, mark }: { name: string; mark: PartnerMark }) {
  return (
    <span
      className="flex h-8 items-center gap-2.5 text-white/55 transition-colors duration-300 hover:text-white/95"
      title={`${name} (placeholder logo)`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" fillRule="evenodd" aria-hidden>
        <path d={markPaths[mark]} />
      </svg>
      <span className="text-[17px] font-bold tracking-[0.08em] whitespace-nowrap uppercase sm:text-lg">{name}</span>
    </span>
  )
}
