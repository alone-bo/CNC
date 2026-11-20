import { useRef, useState } from 'react'
import { ArrowRight, Check, ChevronRight, Pause, Play } from 'lucide-react'
import type { ImageAsset } from '../data/companyPages'
import { Button, buttonClass } from './primitives'
import { DetailContainer, DetailHead } from './ServiceDetailShared'

/** Renders `[[highlighted]]` passages from data strings in the accent colour. */
export function Accented({ text }: { text: string }) {
  const parts = text.split(/\[\[(.*?)\]\]/g)
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className="font-semibold text-accent">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  )
}

export function PageBreadcrumb({ label }: { label: string }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-white">
      <DetailContainer>
        <ol className="flex flex-wrap items-center gap-2 py-4 text-sm">
          <li>
            <a href="#top" className="font-medium text-ink/80 transition-colors hover:text-brand">
              Home
            </a>
          </li>
          <li aria-hidden>
            <ChevronRight className="h-4 w-4 text-accent" strokeWidth={2.5} />
          </li>
          <li aria-current="page" className="text-muted/80">
            {label}
          </li>
        </ol>
      </DetailContainer>
    </nav>
  )
}

export function CompanyHero({
  eyebrow,
  titleLines,
  description,
  bullets,
  images,
  breadcrumb,
}: {
  eyebrow: string
  titleLines: string[]
  description: string
  bullets?: string[]
  images: ImageAsset[]
  breadcrumb: string
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0b1118]">
        <div className="absolute inset-0 -z-20 flex">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`h-full object-cover ${images.length > 1 ? 'w-1/2' : 'w-full'}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 -z-10 bg-[#070c12]/55" aria-hidden />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-r from-[#070c12]/95 via-[#070c12]/72 to-[#070c12]/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-t from-[#070c12]/55 via-transparent to-transparent"
          aria-hidden
        />

        <DetailContainer className="flex min-h-[540px] flex-col justify-center py-16 lg:min-h-[600px] lg:py-20">
          <div className="max-w-[760px]">
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white/75 uppercase">
              <span className="h-0.5 w-8 bg-accent" aria-hidden />
              {eyebrow}
            </p>
            <h1
              aria-label={titleLines.join(' ')}
              className="mt-5 text-[37px] leading-[1.06] font-bold tracking-[-0.03em] text-white sm:text-[48px] lg:text-[56px]"
            >
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-[660px] text-[15px] leading-[1.7] text-white/78 sm:text-base">{description}</p>
            {bullets && (
              <ul className="mt-7 space-y-2.5">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-[13.5px] leading-snug text-white/75">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </DetailContainer>
      </section>
      <PageBreadcrumb label={breadcrumb} />
    </>
  )
}

export function CompanyVideo({ poster, src, alt, label }: { poster: string; src: string; alt: string; label: string }) {
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
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {!playing && (
        <div className="absolute inset-0 grid place-items-center bg-black/25">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Play video: ${label}`}
            className="group flex cursor-pointer flex-col items-center gap-3 text-white"
          >
            <span className="grid h-18 w-18 place-items-center rounded-full bg-white/95 text-ink shadow-[0_16px_40px_-12px_rgba(0,0,0,0.65)] transition-transform duration-300 group-hover:scale-105">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
            <span className="rounded-full bg-black/50 px-3.5 py-1.5 text-[10.5px] font-bold tracking-[0.16em] uppercase backdrop-blur-sm">
              {label}
            </span>
          </button>
        </div>
      )}

      {playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label="Pause video"
          className="absolute right-3 bottom-3 grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65"
        >
          <Pause className="h-3.5 w-3.5" />
        </button>
      )}
    </>
  )
}

/** Full-bleed, slowly scrolling photo strip with clipped edges. */
export function GalleryMarquee({ title, subtitle, items }: { title: string; subtitle?: string; items: ImageAsset[] }) {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead title={title} subtitle={subtitle} />
      </DetailContainer>

      <div
        role="region"
        aria-label={title}
        className="group relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]"
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((loop) => (
            <ul key={loop} aria-hidden={loop === 1} className="flex shrink-0 gap-5 pr-5">
              {items.map((image) => (
                <li key={`${loop}-${image.src}`} className="w-[250px] shrink-0 sm:w-[290px] lg:w-[330px]">
                  <div className="overflow-hidden rounded-xl bg-surface">
                    <img
                      src={image.src}
                      alt={loop === 0 ? image.alt : ''}
                      loading="lazy"
                      className="aspect-[4/3] h-full w-full object-cover"
                    />
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LightBottomCta({
  title,
  description,
  cta,
  onClick,
  href,
}: {
  title: string
  description: string
  cta: string
  onClick?: () => void
  href?: string
}) {
  return (
    <section className="border-t border-line bg-[#F4F5F6] py-20 lg:py-24">
      <DetailContainer>
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-[30px] leading-[1.12] font-bold tracking-[-0.02em] text-ink sm:text-[36px] lg:text-[40px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[14.5px] leading-relaxed text-muted">{description}</p>
          <div className="mt-8 flex justify-center">
            {href ? (
              <a href={href} className={buttonClass('outline-dark', 'lg')}>
                {cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Button variant="outline-dark" size="lg" onClick={onClick}>
                {cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}

/** Small check bullet used in policy and team cards. */
export function CheckPoint({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted">
      <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-accent/12">
        <Check className="h-3 w-3 text-accent" strokeWidth={3} />
      </span>
      {children}
    </li>
  )
}
