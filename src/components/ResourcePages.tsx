import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ChevronRight, Play, X } from 'lucide-react'
import { caseStudies, formatDate } from '../data/content'
import {
  blogPosts,
  newsPosts,
  resourceHeroes,
  videoLibrary,
  type ResourceHero,
  type VideoItem,
} from '../data/resources'
import { Container } from './primitives'

/** Shared banner → breadcrumb → grid frame for the Resources pages. */
function ResourceLayout({
  hero,
  breadcrumb,
  children,
}: {
  hero: ResourceHero
  breadcrumb: string
  children: ReactNode
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#1b1c1e]">
        <img src={hero.image} alt={hero.alt} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[#151618]/55" aria-hidden />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-r from-[#151618]/90 via-[#151618]/60 to-[#151618]/20"
          aria-hidden
        />
        <Container className="flex min-h-[460px] items-center py-16 sm:min-h-[500px] lg:min-h-[540px] lg:py-20">
          <div className="max-w-[880px]">
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white/80 uppercase">
              <span className="h-0.5 w-8 bg-accent" aria-hidden />
              {hero.eyebrow}
            </p>
            <h1 className="mt-5 text-[34px] leading-[1.08] font-bold tracking-[-0.025em] text-white sm:text-[44px] lg:text-[54px]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-[780px] text-[15px] leading-[1.7] text-white/80 lg:text-base">
              {hero.description}
            </p>
          </div>
        </Container>
      </section>

      <nav aria-label="Breadcrumb" className="border-b border-line bg-white">
        <Container>
          <ol className="flex flex-wrap items-center gap-2 py-4 text-sm">
            <li>
              <a href="#top" className="font-medium text-ink/80 hover:text-brand">
                Home
              </a>
            </li>
            <li aria-hidden>
              <ChevronRight className="h-4 w-4 text-accent" strokeWidth={2.5} />
            </li>
            <li className="text-muted/80">Resources</li>
            <li aria-hidden>
              <ChevronRight className="h-4 w-4 text-accent" strokeWidth={2.5} />
            </li>
            <li aria-current="page" className="text-muted/80">
              {breadcrumb}
            </li>
          </ol>
        </Container>
      </nav>

      <section aria-label={breadcrumb} className="bg-white py-14 lg:py-20">
        <Container>{children}</Container>
      </section>
    </>
  )
}

function ContentCard({
  href,
  image,
  alt,
  eyebrow,
  meta,
  title,
  description,
  cta,
}: {
  href: string
  image: string
  alt: string
  eyebrow: string
  meta?: string
  title: string
  description: string
  cta: string
}) {
  return (
    <article className="group flex h-full flex-col">
      <a href={href} tabIndex={-1} className="block aspect-[16/10] overflow-hidden bg-surface">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </a>
      <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
        <span>{eyebrow}</span>
        {meta && (
          <>
            <span aria-hidden className="h-1 w-1 rounded-full bg-muted/40" />
            <span className="font-medium tracking-normal text-muted normal-case">{meta}</span>
          </>
        )}
      </p>
      <h2 className="mt-2 text-[22px] leading-snug font-bold text-ink">
        <a href={href} className="hover:text-brand">
          {title}
        </a>
      </h2>
      <p className="mt-3 line-clamp-3 text-[15px] leading-[1.65] text-muted">{description}</p>
      <div className="mt-auto pt-6">
        <a
          href={href}
          className="inline-flex min-h-12 items-center border border-ink bg-white px-5 py-3 text-[12px] leading-snug font-bold tracking-[0.05em] text-ink uppercase transition-colors hover:bg-ink hover:text-white"
        >
          {cta}
        </a>
      </div>
    </article>
  )
}

export function BlogsPage() {
  return (
    <ResourceLayout hero={resourceHeroes.blogs} breadcrumb="Blogs">
      <ul className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <ContentCard
              href={`#/blogs/${post.slug}`}
              image={post.image}
              alt={post.alt}
              eyebrow={post.category}
              meta={formatDate(post.date)}
              title={post.title}
              description={post.summary}
              cta="Read Article"
            />
          </li>
        ))}
      </ul>
    </ResourceLayout>
  )
}

export function NewsPage() {
  return (
    <ResourceLayout hero={resourceHeroes.news} breadcrumb="News">
      <ul className="grid gap-x-7 gap-y-12 md:grid-cols-2">
        {newsPosts.map((item) => (
          <li key={item.slug}>
            <ContentCard
              href={`#/news/${item.slug}`}
              image={item.image}
              alt={item.alt}
              eyebrow={item.category}
              meta={formatDate(item.date)}
              title={item.title}
              description={item.summary}
              cta="Read News"
            />
          </li>
        ))}
      </ul>
    </ResourceLayout>
  )
}

export function CaseStudiesPage() {
  return (
    <ResourceLayout hero={resourceHeroes.cases} breadcrumb="Case Study">
      <ul className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <ContentCard
              href={`#/cases/${study.slug}`}
              image={study.image}
              alt={study.alt}
              eyebrow={study.industry}
              meta={study.process}
              title={study.title}
              description={study.description}
              cta="Read Case Study"
            />
          </li>
        ))}
      </ul>
    </ResourceLayout>
  )
}

function VideoCard({ video, onPlay }: { video: VideoItem; onPlay: () => void }) {
  return (
    <article className="group flex h-full flex-col">
      <button
        type="button"
        onClick={onPlay}
        aria-label={`Play video: ${video.title}`}
        className="relative block aspect-video w-full cursor-pointer overflow-hidden bg-[#17181a] text-left"
      >
        <img
          src={video.poster}
          alt={video.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span
          className="absolute inset-0 bg-[#151618]/20 transition-colors duration-300 group-hover:bg-[#151618]/35"
          aria-hidden
        />
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-accent shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Play className="ml-1 h-6 w-6 fill-current" aria-hidden />
          </span>
        </span>
        <span className="absolute top-4 left-4 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-white uppercase backdrop-blur-sm">
          {video.category}
        </span>
        <span className="absolute right-4 bottom-4 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white tabular-nums">
          {video.duration}
        </span>
      </button>
      <h2 className="mt-6 text-[21px] leading-snug font-bold text-ink">
        <button type="button" onClick={onPlay} className="cursor-pointer text-left hover:text-brand">
          {video.title}
        </button>
      </h2>
      <p className="mt-3 text-[15px] leading-[1.65] text-muted">{video.description}</p>
      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={onPlay}
          className="inline-flex min-h-12 cursor-pointer items-center gap-2 border border-ink bg-white px-5 py-3 text-[12px] leading-snug font-bold tracking-[0.05em] text-ink uppercase transition-colors hover:bg-ink hover:text-white"
        >
          Watch Video
          <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
        </button>
      </div>
    </article>
  )
}

function VideoLightbox({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    // Stop Escape before the page-level handler closes the whole route.
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      event.stopPropagation()
      onClose()
    }
    document.addEventListener('keydown', onKey, true)
    return () => {
      document.removeEventListener('keydown', onKey, true)
      previous?.focus?.()
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/85 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-lightbox-title"
      onClick={onClose}
    >
      <div className="w-full max-w-[1040px]" onClick={(event) => event.stopPropagation()}>
        <div className="mb-4 flex items-start justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">{video.category}</p>
            <h2 id="video-lightbox-title" className="mt-2 text-xl leading-snug font-bold text-white sm:text-2xl">
              {video.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <video
          key={video.src}
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          className="aspect-video w-full bg-black shadow-2xl"
        />
        <p className="mt-4 max-w-[780px] text-sm leading-relaxed text-white/70">{video.description}</p>
      </div>
    </div>,
    document.body,
  )
}

export function VideosPage() {
  const [active, setActive] = useState<VideoItem | null>(null)

  return (
    <ResourceLayout hero={resourceHeroes.videos} breadcrumb="Videos">
      <ul className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {videoLibrary.map((video) => (
          <li key={video.slug}>
            <VideoCard video={video} onPlay={() => setActive(video)} />
          </li>
        ))}
      </ul>
      {active && <VideoLightbox video={active} onClose={() => setActive(null)} />}
    </ResourceLayout>
  )
}
