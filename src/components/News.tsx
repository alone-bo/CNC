import { ArrowRight, Calendar } from 'lucide-react'
import { formatDate, news, type NewsItem } from '../data/content'
import { Container, Eyebrow } from './primitives'

export function ReadMorePill({ href, label = 'Read More' }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      className="group/pill inline-flex h-11 w-fit shrink-0 items-center gap-3 rounded-full bg-brand pr-1.5 pl-5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
    >
      {label}
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand transition-transform group-hover/pill:translate-x-0.5">
        <ArrowRight className="h-4 w-4" />
      </span>
    </a>
  )
}

function Meta({ item }: { item: NewsItem }) {
  return (
    <p className="flex items-center gap-3 text-[13px] text-muted">
      <span className="flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5 text-accent" />
        <time dateTime={item.date}>{formatDate(item.date)}</time>
      </span>
      <span className="h-1 w-1 rounded-full bg-muted/40" aria-hidden />
      <span className="font-medium text-brand">{item.category}</span>
    </p>
  )
}

export function News() {
  const [featured, ...rest] = news.slice(0, 3)

  return (
    <section id="news" className="scroll-mt-16 py-20 lg:scroll-mt-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Resources</Eyebrow>
            <h2 className="mt-5 text-[32px] leading-[1.12] font-bold tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[46px]">
              News &amp; Insights
            </h2>
          </div>
          <ReadMorePill href="#/blogs" />
        </div>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[2fr_3fr]">
          {/* Featured */}
          <article className="group flex flex-col overflow-hidden rounded-2xl bg-surface">
            <a href={`#/news/${featured.slug}`} className="block aspect-[16/11] overflow-hidden" tabIndex={-1}>
              <img
                src={featured.image}
                alt={featured.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </a>
            <div className="flex flex-1 flex-col p-7 lg:p-8">
              <Meta item={featured} />
              <h3 className="mt-4 line-clamp-3 text-[22px] sm:line-clamp-2 leading-snug font-bold text-ink lg:text-2xl">
                <a href={`#/news/${featured.slug}`} className="hover:text-brand">
                  {featured.title}
                </a>
              </h3>
              <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-muted">{featured.summary}</p>
              <div className="mt-auto pt-7">
                <ReadMorePill href={`#/news/${featured.slug}`} />
              </div>
            </div>
          </article>

          {/* Secondary */}
          <div className="grid gap-6">
            {rest.map((item) => (
              <article key={item.slug} className="group grid overflow-hidden rounded-2xl bg-surface sm:grid-cols-[2fr_3fr]">
                <a href={`#/news/${item.slug}`} className="block aspect-[16/10] overflow-hidden sm:aspect-auto" tabIndex={-1}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </a>
                <div className="flex flex-col p-7 lg:p-8">
                  <Meta item={item} />
                  <h3 className="mt-4 line-clamp-3 text-xl sm:line-clamp-2 leading-snug font-bold text-ink">
                    <a href={`#/news/${item.slug}`} className="hover:text-brand">
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-muted">{item.summary}</p>
                  <div className="mt-auto pt-6">
                    <ReadMorePill href={`#/news/${item.slug}`} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
