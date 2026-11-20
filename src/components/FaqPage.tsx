import { useState } from 'react'
import { ArrowRight, ChevronDown, Mail, MessageSquare, Phone } from 'lucide-react'
import { faqGroups, faqHero } from '../data/companyPages'
import { company } from '../data/content'
import { useUI } from '../lib/ui'
import { CompanyHero, LightBottomCta } from './CompanyShared'
import { DetailContainer, DetailHead } from './ServiceDetailShared'

const ALL = 'All Questions'

export function FaqPage() {
  const { openQuote } = useUI()
  const categories = [ALL, ...faqGroups.map((group) => group.category)]
  const [category, setCategory] = useState(ALL)
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqGroups[0].items[0].q)

  const questions =
    category === ALL
      ? faqGroups.flatMap((group) => group.items)
      : (faqGroups.find((group) => group.category === category)?.items ?? [])

  const selectCategory = (next: string) => {
    setCategory(next)
    setOpenQuestion(null)
  }

  return (
    <>
      <CompanyHero
        eyebrow={faqHero.eyebrow}
        titleLines={faqHero.titleLines}
        description={faqHero.description}
        images={faqHero.images}
        breadcrumb="FAQ"
      />

      <section className="bg-white py-20 lg:py-28">
        <DetailContainer>
          <DetailHead
            title="Answers to Common Manufacturing Questions"
            subtitle="Browse by topic or scan the full list. If your question is not covered, our engineering team is one message away."
          />

          <div
            role="group"
            aria-label="Filter FAQ by category"
            className="mt-9 flex gap-7 overflow-x-auto border-b border-line [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((item) => {
              const selected = item === category
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => selectCategory(item)}
                  className={`relative shrink-0 cursor-pointer pb-4 text-[13.5px] font-semibold whitespace-nowrap transition-colors ${
                    selected ? 'text-brand' : 'text-ink/60 hover:text-ink'
                  }`}
                >
                  {item}
                  {selected && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-brand" aria-hidden />}
                </button>
              )
            })}
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start lg:gap-14">
            <div className="overflow-hidden rounded-xl border border-line bg-white">
              {questions.map((faq, index) => {
                const isOpen = openQuestion === faq.q
                const panelId = `faq-panel-${category.replace(/\W+/g, '-').toLowerCase()}-${index}`
                return (
                  <div key={faq.q} className="border-b border-line last:border-b-0">
                    <h2>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenQuestion(isOpen ? null : faq.q)}
                        className="flex w-full cursor-pointer items-start justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-[#FAFBFC] sm:px-6"
                      >
                        <span className="text-[14.5px] leading-snug font-semibold text-ink">{faq.q}</span>
                        <span
                          className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                            isOpen ? 'rotate-180 border-brand text-brand' : 'border-line text-muted'
                          }`}
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    </h2>
                    {isOpen && (
                      <div
                        id={panelId}
                        className="animate-fade-in border-t border-line/70 bg-[#FBFCFD] px-5 py-5 sm:px-6"
                      >
                        <p className="max-w-[720px] text-[13.5px] leading-[1.75] text-muted">{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <aside className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-line bg-[#F4F5F6] p-7">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand/10 text-brand">
                  <MessageSquare className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h2 className="mt-5 text-[20px] leading-snug font-bold text-ink">Still have questions?</h2>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  Tell us what you are making and the standard it needs to meet. An engineer will answer with a clear,
                  practical response.
                </p>

                <button
                  type="button"
                  onClick={() => openQuote({ mode: 'contact', message: 'FAQ enquiry. ' })}
                  className="mt-6 inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Ask an Engineer <ArrowRight className="h-4 w-4" />
                </button>

                <div className="mt-6 space-y-3 border-t border-line pt-5">
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-3 text-[13px] font-medium text-ink transition-colors hover:text-brand"
                  >
                    <Mail className="h-4 w-4 text-brand" /> {company.email}
                  </a>
                  <a
                    href={company.phoneHref}
                    className="flex items-center gap-3 text-[13px] font-medium text-ink transition-colors hover:text-brand"
                  >
                    <Phone className="h-4 w-4 text-brand" /> {company.phone}
                  </a>
                </div>

                <a
                  href="#/inquiry"
                  className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                >
                  Upload drawings for a quote
                </a>
              </div>
            </aside>
          </div>
        </DetailContainer>
      </section>

      <LightBottomCta
        title="Prefer to Start With a Drawing?"
        description="Send your files through our inquiry form. An engineer will review the part, confirm the process route and reply within 12 business hours."
        cta="Start an Inquiry"
        href="#/inquiry"
      />
    </>
  )
}
