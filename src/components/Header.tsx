import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { company, megaMenu, navItems } from '../data/content'
import { industriesMenu } from '../data/industries'
import { aboutMenu, resourcesMenu, type ContentMenuItem } from '../data/navMenus'
import { solutionsMenu } from '../data/solutions'
import { useScrollLock, useUI } from '../lib/ui'
import { Button, Container, Logo } from './primitives'

export function Header({ forceSolid }: { forceSolid: boolean }) {
  const { openQuote } = useUI()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef<number | undefined>(undefined)
  const solutionsTimer = useRef<number | undefined>(undefined)
  const industriesTimer = useRef<number | undefined>(undefined)
  const resourcesTimer = useRef<number | undefined>(undefined)
  const aboutTimer = useRef<number | undefined>(undefined)
  const solid =
    scrolled ||
    forceSolid ||
    menuOpen ||
    megaOpen ||
    solutionsOpen ||
    industriesOpen ||
    resourcesOpen ||
    aboutOpen

  const closeOtherMenus = (keep?: string) => {
    if (keep !== 'services') setMegaOpen(false)
    if (keep !== 'solutions') setSolutionsOpen(false)
    if (keep !== 'industries') setIndustriesOpen(false)
    if (keep !== 'resources') setResourcesOpen(false)
    if (keep !== 'about') setAboutOpen(false)
  }

  const openMega = () => {
    window.clearTimeout(closeTimer.current)
    closeOtherMenus('services')
    setMegaOpen(true)
  }
  // Short delay so the pointer can travel from the nav item into the panel.
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 140)
  }

  const openSolutions = () => {
    window.clearTimeout(solutionsTimer.current)
    closeOtherMenus('solutions')
    setSolutionsOpen(true)
  }
  const scheduleCloseSolutions = () => {
    window.clearTimeout(solutionsTimer.current)
    solutionsTimer.current = window.setTimeout(() => setSolutionsOpen(false), 140)
  }

  const openIndustries = () => {
    window.clearTimeout(industriesTimer.current)
    closeOtherMenus('industries')
    setIndustriesOpen(true)
  }
  const scheduleCloseIndustries = () => {
    window.clearTimeout(industriesTimer.current)
    industriesTimer.current = window.setTimeout(() => setIndustriesOpen(false), 140)
  }

  const openResources = () => {
    window.clearTimeout(resourcesTimer.current)
    closeOtherMenus('resources')
    setResourcesOpen(true)
  }
  const scheduleCloseResources = () => {
    window.clearTimeout(resourcesTimer.current)
    resourcesTimer.current = window.setTimeout(() => setResourcesOpen(false), 140)
  }

  const openAbout = () => {
    window.clearTimeout(aboutTimer.current)
    closeOtherMenus('about')
    setAboutOpen(true)
  }
  const scheduleCloseAbout = () => {
    window.clearTimeout(aboutTimer.current)
    aboutTimer.current = window.setTimeout(() => setAboutOpen(false), 140)
  }

  useEffect(() => {
    const close = () => {
      setMegaOpen(false)
      setSolutionsOpen(false)
      setIndustriesOpen(false)
      setResourcesOpen(false)
      setAboutOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('hashchange', close)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('hashchange', close)
      window.removeEventListener('keydown', onKey)
      window.clearTimeout(closeTimer.current)
      window.clearTimeout(solutionsTimer.current)
      window.clearTimeout(industriesTimer.current)
      window.clearTimeout(resourcesTimer.current)
      window.clearTimeout(aboutTimer.current)
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
              item.solutions ? (
                <li
                  key={item.label}
                  onMouseEnter={openSolutions}
                  onMouseLeave={scheduleCloseSolutions}
                  onFocus={openSolutions}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setSolutionsOpen(false)
                  }}
                >
                  <a
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={solutionsOpen}
                    aria-controls="solutions-mega-menu"
                    className={`relative flex items-center gap-1 py-2 text-[14.5px] font-medium transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-brand after:transition-transform hover:after:scale-x-100 ${
                      solutionsOpen ? 'text-brand after:scale-x-100' : `after:scale-x-0 ${linkTone}`
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
                    />
                  </a>
                  <SolutionsMegaMenu
                    open={solutionsOpen}
                    onNavigate={() => setSolutionsOpen(false)}
                  />
                </li>
              ) : item.industries ? (
                <li
                  key={item.label}
                  onMouseEnter={openIndustries}
                  onMouseLeave={scheduleCloseIndustries}
                  onFocus={openIndustries}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setIndustriesOpen(false)
                  }}
                >
                  <a
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={industriesOpen}
                    aria-controls="industries-mega-menu"
                    className={`relative flex items-center gap-1 py-2 text-[14.5px] font-medium transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-brand after:transition-transform hover:after:scale-x-100 ${
                      industriesOpen ? 'text-brand after:scale-x-100' : `after:scale-x-0 ${linkTone}`
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`}
                    />
                  </a>
                  <IndustriesMegaMenu
                    open={industriesOpen}
                    onNavigate={() => setIndustriesOpen(false)}
                  />
                </li>
              ) : item.resources ? (
                <li
                  key={item.label}
                  onMouseEnter={openResources}
                  onMouseLeave={scheduleCloseResources}
                  onFocus={openResources}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setResourcesOpen(false)
                  }}
                >
                  <a
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={resourcesOpen}
                    aria-controls="resources-mega-menu"
                    className={`relative flex items-center gap-1 py-2 text-[14.5px] font-medium transition-colors duration-300 ${
                      resourcesOpen ? 'text-ink' : linkTone
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
                    />
                    {resourcesOpen && (
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-6 bg-accent" aria-hidden />
                    )}
                  </a>
                  <ContentMegaMenu
                    id="resources-mega-menu"
                    open={resourcesOpen}
                    onNavigate={() => setResourcesOpen(false)}
                    items={resourcesMenu.items}
                    image={resourcesMenu.image}
                    alt={resourcesMenu.alt}
                    copy={resourcesMenu.copy}
                    href={resourcesMenu.href}
                    linkLabel={resourcesMenu.linkLabel}
                  />
                </li>
              ) : item.about ? (
                <li
                  key={item.label}
                  onMouseEnter={openAbout}
                  onMouseLeave={scheduleCloseAbout}
                  onFocus={openAbout}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setAboutOpen(false)
                  }}
                >
                  <a
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={aboutOpen}
                    aria-controls="about-mega-menu"
                    className={`relative flex items-center gap-1 py-2 text-[14.5px] font-medium transition-colors duration-300 ${
                      aboutOpen ? 'text-ink' : linkTone
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
                    />
                    {aboutOpen && (
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-6 bg-accent" aria-hidden />
                    )}
                  </a>
                  <ContentMegaMenu
                    id="about-mega-menu"
                    open={aboutOpen}
                    onNavigate={() => setAboutOpen(false)}
                    items={aboutMenu.items}
                    image={aboutMenu.image}
                    alt={aboutMenu.alt}
                    copy={aboutMenu.copy}
                    href={aboutMenu.href}
                    linkLabel={aboutMenu.linkLabel}
                  />
                </li>
              ) : item.mega ? (
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
          {/* <button
            type="button"
            onClick={() => openQuote({ mode: 'contact' })}
            className={`cursor-pointer text-[14.5px] font-semibold transition-colors duration-300 ${linkTone}`}
          >
            Contact Us
          </button> */}
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
      <div className="flex min-h-[380px] w-full items-stretch">
        <div className="flex-1 px-5 py-9 sm:px-8 xl:pr-12 xl:pl-[max(2rem,calc((100vw-1280px)/2))]">
          <div className="grid grid-cols-[1.15fr_1fr] gap-10 xl:gap-14">
            {megaMenu.map((group) => (
              <section key={group.title} aria-label={group.title}>
                <h2 className="text-[13px] font-medium text-[#999]">{group.title}</h2>
                <div className="mt-5 grid grid-cols-2 gap-x-8 xl:gap-x-10">
                  {group.columns.map((col, i) => (
                    <ul key={i} className="space-y-4">
                      {col.map((s) => (
                        <li key={s.slug}>
                          <a
                            href={`#/services/${s.slug}`}
                            onClick={onNavigate}
                            tabIndex={open ? undefined : -1}
                            className="text-[14.5px] leading-snug font-bold text-ink transition-colors hover:text-brand"
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
        </div>

        <div className="relative hidden w-[300px] shrink-0 overflow-hidden md:block xl:w-[340px]">
          <img
            src="https://images.unsplash.com/photo-1740209475472-aa7d280f7452?auto=format&fit=crop&w=900&q=80"
            alt="CNC milling machine cutting a metal component with coolant"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/5" aria-hidden />
          <div className="absolute inset-x-6 bottom-6">
            <p className="text-[12px] leading-relaxed text-white/85">
              Complete CNC machining, fabrication, molding and finishing services — one partner from prototype to
              production.
            </p>
            <a
              href="#/services"
              onClick={onNavigate}
              tabIndex={open ? undefined : -1}
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-accent transition-colors hover:text-white"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Full-width Solutions dropdown: two text columns plus a full-height image panel. */
function SolutionsMegaMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  return (
    <div
      id="solutions-mega-menu"
      className={`absolute inset-x-0 top-full border-t border-line bg-white shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)] transition-[opacity,visibility,transform] duration-200 ${
        open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
      }`}
    >
      <div className="flex min-h-[360px] w-full items-stretch">
        <div className="flex-1 px-5 py-9 sm:px-8 xl:pr-12 xl:pl-[max(2rem,calc((100vw-1280px)/2))]">
          <div className="grid max-w-[1000px] grid-cols-2 gap-10">
            {solutionsMenu.groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-[13px] font-medium text-[#999]">{group.title}</h2>
                <ul className="mt-5 space-y-4">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={onNavigate}
                        tabIndex={open ? undefined : -1}
                        className="group block transition-transform duration-200 hover:translate-x-1"
                      >
                        <span className="block text-[15.5px] font-bold text-ink transition-colors group-hover:text-accent">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-[12px] leading-relaxed text-muted">{item.description}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden w-[300px] shrink-0 overflow-hidden md:block xl:w-[340px]">
          <img
            src={solutionsMenu.image}
            alt={solutionsMenu.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/5" aria-hidden />
          <div className="absolute inset-x-6 bottom-6">
            <p className="text-[12px] leading-relaxed text-white/85">{solutionsMenu.copy}</p>
            <a
              href={solutionsMenu.href}
              onClick={onNavigate}
              tabIndex={open ? undefined : -1}
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-accent transition-colors hover:text-white"
            >
              See Solutions <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Full-width Industries dropdown: 2 × 2 industry grid plus a full-height image panel. */
function IndustriesMegaMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  return (
    <div
      id="industries-mega-menu"
      className={`absolute inset-x-0 top-full border-t border-line bg-white shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)] transition-[opacity,visibility,transform] duration-200 ${
        open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
      }`}
    >
      <div className="flex min-h-[360px] w-full items-stretch">
        <div className="flex-1 px-5 py-9 sm:px-8 xl:pr-12 xl:pl-[max(2rem,calc((100vw-1280px)/2))]">
          <div className="grid max-w-[920px] grid-cols-2 gap-x-10 gap-y-10">
            {industriesMenu.items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={onNavigate}
                tabIndex={open ? undefined : -1}
                className="group block transition-transform duration-200 hover:translate-x-1"
              >
                <span className="block text-[15.5px] font-bold text-ink transition-colors group-hover:text-accent">
                  {item.title}
                </span>
                <span className="mt-1.5 block max-w-[360px] text-[12.5px] leading-relaxed text-muted">
                  {item.description}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative hidden w-[300px] shrink-0 overflow-hidden md:block xl:w-[340px]">
          <img
            src={industriesMenu.image}
            alt={industriesMenu.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/5" aria-hidden />
          <div className="absolute inset-x-6 bottom-6">
            <p className="text-[12px] leading-relaxed text-white/85">{industriesMenu.copy}</p>
            <a
              href={industriesMenu.href}
              onClick={onNavigate}
              tabIndex={open ? undefined : -1}
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-accent transition-colors hover:text-white"
            >
              Industries Served <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Shared 2 × 2 dropdown layout for the Resources and About menus. */
function ContentMegaMenu({
  id,
  open,
  onNavigate,
  items,
  image,
  alt,
  copy,
  href,
  linkLabel,
}: {
  id: string
  open: boolean
  onNavigate: () => void
  items: ContentMenuItem[]
  image: string
  alt: string
  copy: string
  href: string
  linkLabel: string
}) {
  return (
    <div
      id={id}
      className={`absolute inset-x-0 top-full border-t border-line bg-white shadow-[0_24px_48px_-24px_rgba(17,24,39,0.25)] transition-[opacity,visibility,transform] duration-200 ${
        open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
      }`}
    >
      <div className="flex min-h-[360px] w-full items-stretch">
        <div className="flex-1 px-5 py-9 sm:px-8 xl:pr-12 xl:pl-[max(2rem,calc((100vw-1280px)/2))]">
          <div className="grid max-w-[920px] grid-cols-2 gap-x-10 gap-y-10">
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={onNavigate}
                tabIndex={open ? undefined : -1}
                className="group block transition-transform duration-200 hover:translate-x-1"
              >
                <span className="block text-[15.5px] font-bold text-ink transition-colors group-hover:text-accent">
                  {item.title}
                </span>
                <span className="mt-1.5 block max-w-[360px] text-[12.5px] leading-relaxed text-muted">
                  {item.description}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative hidden w-[300px] shrink-0 overflow-hidden md:block xl:w-[340px]">
          <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/5" aria-hidden />
          <div className="absolute inset-x-6 bottom-6">
            <p className="text-[12px] leading-relaxed text-white/85">{copy}</p>
            <a
              href={href}
              onClick={onNavigate}
              tabIndex={open ? undefined : -1}
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-accent transition-colors hover:text-white"
            >
              {linkLabel} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
