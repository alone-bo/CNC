import { useState } from 'react'
import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react'
import { company, footerGroups, media, unsplash } from '../data/content'
import { Container, Logo, SocialIcon } from './primitives'

export function Footer({ id }: { id?: string }) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <footer id={id} className="relative isolate scroll-mt-16 overflow-hidden bg-[#0a2a63] lg:scroll-mt-20">
      <img
        src={unsplash('1713371398484-cc4e4f6a262a', 1920)}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-30 mix-blend-luminosity"
      />
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-brand/90 via-[#0b3f99]/90 to-[#0a1630]/95" aria-hidden />
      {/* Fine engineering grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />
      {/* Bottom padding keeps footer content clear of the mobile sticky CTA */}
      <Container className="pt-16 pb-[calc(32px+68px+env(safe-area-inset-bottom))] lg:pt-20 xl:pb-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          <div className="max-w-[360px]">
            <a href="#top" aria-label="EZHONG home">
              <Logo tone="light" />
            </a>
            <p className="mt-5 text-sm leading-relaxed text-white/75">{company.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-white">
              <li>
                <a href={company.phoneHref} className="flex items-center gap-3 hover:text-accent">
                  <Phone className="h-4 w-4 shrink-0 text-accent" /> {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-accent">
                  <Mail className="h-4 w-4 shrink-0 text-accent" /> {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {company.address}
              </li>
            </ul>
            <ul className="mt-6 flex gap-2.5">
              {company.social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={`EZHONG on ${s.name}`}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/12 text-white ring-1 ring-white/20 transition-colors hover:bg-accent hover:ring-accent"
                  >
                    <SocialIcon name={s.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-3 md:gap-8 lg:contents">
            {footerGroups.map((g) => {
              const isOpen = open === g.title
              return (
                <div key={g.title} className="border-t border-white/15 md:border-0">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : g.title)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-[15px] font-bold text-white md:pointer-events-none md:cursor-default md:py-0"
                    >
                      {g.title}
                      <ChevronDown
                        className={`h-5 w-5 text-white/60 transition-transform md:hidden ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </h3>
                  <ul className={`space-y-3 pb-5 md:mt-5 md:block md:pb-0 ${isOpen ? 'block' : 'hidden'}`}>
                    {g.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-[13px] text-white/65 lg:flex-row lg:items-center lg:justify-between">
          <p>Copyright © 2026 EZHONG. All Rights Reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {['Privacy Policy', 'Cookie Policy', 'Terms & Conditions'].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-[11px] text-white/45">
          <a href={media.videoCredit.href} target="_blank" rel="noreferrer" className="hover:text-white">
            {media.videoCredit.text}
          </a>
          . Photography via Unsplash.
        </p>
      </Container>
    </footer>
  )
}
