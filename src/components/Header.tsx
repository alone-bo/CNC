import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { company, megaMenu, navItems } from '../data/content'
import { useScrollLock, useUI } from '../lib/ui'
import { Button, Container, Logo } from './primitives'

export function Header({ forceSolid }: { forceSolid: boolean }) {
  const { openQuote } = useUI()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef<number | undefined>(undefined)
  const solid = scrolled || forceSolid || menuOpen || megaOpen

  const openMega = () => {
    window.clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }
  // Short delay so the pointer can travel from the nav item into the panel.
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 140)
  }

  useEffect(() => {
    const close = () => setMegaOpen(false)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('hashchange', close)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('hashchange', close)
      window.removeEventListener('keydown', onKey)
      window.clearTimeout(closeTimer.current)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const close = () => mq.matches && setMenuOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  useScrollLock(menuOpen)

  const linkTone = solid ? 'text-ink/80 hover:text-brand' : 'text-white/85 hover:text-white'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        solid
          ? 'border-b border-line bg-white shadow-[0_6px_24px_-12px_rgba(17,24,39,0.18)]'
          : 'border-b border-white/10 bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <a href="#top" aria-label="EZHONG home" onClick={() => setMenuOpen(false)}>
          <Logo tone={solid ? 'dark' : 'light'} />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navItems.map((item) =>
              item.mega ? (
                <li
                  key={item.label}
                  onMouseEnter={openMega}
                  onMouseLeave={scheduleClose}
                  onFocus={openMega}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMegaOpen(false)
                  }}
                >
                  <a
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={megaOpen}
                    aria-controls="services-mega-menu"
                    className={`relative flex items-center gap-1 py-2 text-[14.5px] font-medium transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-brand after:transition-transform hover:after:scale-x-100 ${
                      megaOpen ? 'text-brand after:scale-x-100' : `after:scale-x-0 ${linkTone}`
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
                  </a>
                  <MegaMenu open={megaOpen} onNavigate={() => setMegaOpen(false)} />
                </li>
              ) : (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`relative py-2 text-[14.5px] font-medium transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:after:scale-x-100 ${linkTone}`}
                  >
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button
            type="button"
            onClick={() => openQuote({ mode: 'contact' })}
            className={`cursor-pointer text-[14.5px] font-semibold transition-colors duration-300 ${linkTone}`}
          >
            Contact Us
          </button>
          <Button variant="accent" onClick={() => openQuote()}>
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className={`-mr-2 grid h-11 w-11 cursor-pointer place-items-center rounded-lg transition-colors lg:hidden ${
            solid ? 'text-ink hover:bg-surface' : 'text-white hover:bg-white/10'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="animate-fade-in fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <Container className="flex min-h-full flex-col py-4">
            <nav aria-label="Mobile">
              <ul>
                {navItems.map((item) =>
                  item.mega ? (
                    <li key={item.label} className="border-b border-line">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-expanded={mobileServicesOpen}
                        className="flex h-14 w-full cursor-pointer items-center justify-between text-[17px] font-semibold text-ink"
                      >
                        {item.label}
                        <ChevronDown className={`h-5 w-5 text-muted transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileServicesOpen && (
                        <div className="space-y-6 pb-6">
                          {megaMenu.map((group) => (
                            <div key={group.title}>
                              <p className="text-[13px] font-medium text-[#999]">{group.title}</p>
                              <ul className="mt-3 grid grid-cols-1 gap-y-3 min-[420px]:grid-cols-2 min-[420px]:gap-x-4">
                                {group.columns.flat().map((s) => (
                                  <li key={s.slug}>
                                    <a
                                      href={`#/services/${s.slug}`}
                                      onClick={() => setMenuOpen(false)}
                                      className="block py-1 text-[15px] font-bold text-ink hover:text-brand"
                                    >
                                      {s.menuLabel}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <a
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                          >
                            View all services <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      )}
                    </li>
                  ) : (
                    <li key={item.label} className="border-b border-line">
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex h-14 items-center text-[17px] font-semibold text-ink hover:text-brand"
                      >
                        {item.label}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </nav>
            <div className="mt-auto grid gap-3 pt-8 pb-6">
              <Button
                variant="accent"
                size="lg"
                onClick={() => {
                  setMenuOpen(false)
                  openQuote()
                }}
              >
                Get a Quote
              </Button>
              <Button
                variant="outline-dark"
                size="lg"
                onClick={() => {
                  setMenuOpen(false)
                  openQuote({ mode: 'contact' })
                }}
              >
                Contact Us
              </Button>
              <a href={company.phoneHref} className="mt-2 flex items-center justify-center gap-2 text-sm text-muted">
                <Phone className="h-4 w-4 text-accent" /> {company.phone}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}

/** Full-width Services dropdown, positioned against the fixed header. */
function MegaMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  return (
    <div
      id="services-mega-menu"
      className={`absolute inset-x-0 top-full border-t border-line bg-white shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)] transition-[opacity,visibility,transform] duration-200 ${
        open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
      }`}
    >
      <Container className="py-11">
        <div className="grid grid-cols-[1.15fr_1fr] gap-14">
          {megaMenu.map((group) => (
            <section key={group.title} aria-label={group.title}>
              <h2 className="text-[15px] font-medium text-[#999]">{group.title}</h2>
              <div className="mt-6 grid grid-cols-2 gap-x-10">
                {group.columns.map((col, i) => (
                  <ul key={i} className="space-y-5">
                    {col.map((s) => (
                      <li key={s.slug}>
                        <a
                          href={`#/services/${s.slug}`}
                          onClick={onNavigate}
                          tabIndex={open ? undefined : -1}
                          className="text-[15.5px] font-bold text-ink transition-colors hover:text-brand"
                        >
                          {s.menuLabel}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-10 border-t border-line pt-6">
          <a
            href="#/services"
            onClick={onNavigate}
            tabIndex={open ? undefined : -1}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            View all manufacturing services <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </div>
  )
}
