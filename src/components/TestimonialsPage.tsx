import { ArrowRight, Mail, Quote, Star } from 'lucide-react'
import { testimonials, testimonialsHero } from '../data/companyPages'
import { company } from '../data/content'
import { CompanyHero } from './CompanyShared'
import { buttonClass } from './primitives'
import { DetailContainer, DetailHead } from './ServiceDetailShared'

export function TestimonialsPage() {
  return (
    <>
      <CompanyHero
        eyebrow={testimonialsHero.eyebrow}
        titleLines={testimonialsHero.titleLines}
        description={testimonialsHero.description}
        images={testimonialsHero.images}
        breadcrumb="Testimonials"
      />
      <FeedbackSection />
      <InquiryCta />
    </>
  )
}

function FeedbackSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <DetailContainer>
        <DetailHead
          title="Trusted by engineering teams worldwide"
          subtitle="Prototype reviews, production batches and long-running programs — the same expectations apply: clear communication, repeatable quality and no surprises at delivery."
        />

        <div className="mt-10 flex flex-wrap items-center gap-4 rounded-xl border border-line bg-[#F4F5F6] px-5 py-4">
          <span className="flex items-center gap-1 text-accent" aria-label="Average rating: 4.9 out of 5">
            {[0, 1, 2, 3, 4].map((star) => (
              <Star key={star} className="h-4 w-4 fill-current" aria-hidden />
            ))}
          </span>
          <p className="text-[13px] text-muted">
            <strong className="font-bold text-ink">4.9 / 5</strong> average across 120+ project reviews
          </p>
          <span className="hidden h-4 w-px bg-line sm:block" aria-hidden />
          <p className="text-[13px] text-muted">Medical, automotive, aerospace, energy and electronics teams</p>
        </div>

        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <li key={testimonial.name} className="h-full">
              <article className="flex h-full flex-col border border-line bg-white p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/12 text-accent">
                    <Quote className="h-4.5 w-4.5 fill-current" aria-hidden />
                  </span>
                  <span
                    className="flex items-center gap-0.5 text-accent"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, star) => (
                      <Star key={star} className="h-3.5 w-3.5 fill-current" aria-hidden />
                    ))}
                  </span>
                </div>

                <blockquote className="mt-5 flex-1 text-[14px] leading-[1.75] text-ink/80">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-[12px] font-bold ${
                      index % 2 === 0 ? 'bg-brand text-white' : 'bg-ink text-white'
                    }`}
                    aria-hidden
                  >
                    {testimonial.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13.5px] font-bold text-ink">{testimonial.name}</p>
                    <p className="mt-0.5 text-[12px] leading-snug text-muted">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="mt-1 text-[10.5px] font-semibold tracking-[0.08em] text-accent uppercase">
                      {testimonial.industry}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-muted">
          Representative customer feedback shown as sample content pending verification.
        </p>
      </DetailContainer>
    </section>
  )
}

function InquiryCta() {
  return (
    <section className="border-t border-line bg-[#F4F5F6] py-20 lg:py-24">
      <DetailContainer>
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[30px] leading-[1.12] font-bold tracking-[-0.02em] text-ink sm:text-[36px] lg:text-[40px]">
            Ready to Talk About Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[14.5px] leading-relaxed text-muted">
            Share your drawings, quantities and quality requirements. An engineer will review the details and reply
            within 12 business hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#/inquiry" className={buttonClass('accent', 'lg')}>
              Start an Inquiry <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`mailto:${company.email}`} className={buttonClass('outline-dark', 'lg')}>
              <Mail className="h-4 w-4" /> Email Our Team
            </a>
          </div>
        </div>
      </DetailContainer>
    </section>
  )
}
