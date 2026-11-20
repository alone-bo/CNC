import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type QuoteMode = 'quote' | 'contact'
export type QuotePrefill = { mode?: QuoteMode; service?: string; industry?: string; message?: string }

type UIState = {
  quote: (QuotePrefill & { open: boolean }) | null
  openQuote: (prefill?: QuotePrefill) => void
  closeQuote: () => void
  chatOpen: boolean
  setChatOpen: (open: boolean | ((v: boolean) => boolean)) => void
}

const UIContext = createContext<UIState | null>(null)

export function UIProvider({ children }: { children: ReactNode }) {
  const [quote, setQuote] = useState<UIState['quote']>(null)
  const [chatOpen, setChatOpen] = useState(false)

  const openQuote = useCallback((prefill: QuotePrefill = {}) => {
    setChatOpen(false)
    setQuote({ open: true, mode: 'quote', ...prefill })
  }, [])
  const closeQuote = useCallback(() => setQuote(null), [])

  const value = useMemo(
    () => ({ quote, openQuote, closeQuote, chatOpen, setChatOpen }),
    [quote, openQuote, closeQuote, chatOpen],
  )
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export function useUI() {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error('useUI must be used inside UIProvider')
  return ctx
}

/** Hash routes look like `#/news/slug`; plain anchors (`#services`) are in-page sections. */
export type Route =
  | { name: 'news-list' }
  | { name: 'news'; slug: string }
  | { name: 'industry'; slug: string }
  | { name: 'industries-overview' }
  | { name: 'service'; slug: string }
  | { name: 'services-overview' }
  | { name: 'solution'; slug: string }
  | { name: 'solutions-overview' }
  | { name: 'cases' }
  | { name: 'case'; slug: string }
  | { name: 'blogs' }
  | { name: 'videos' }
  | { name: 'about' }
  | { name: 'testimonials' }
  | { name: 'quality-assurance' }
  | { name: 'faq' }
  | { name: 'inquiry' }
  | { name: 'npi'; slug: string }
  | null

function parse(hash: string): Route {
  if (!hash.startsWith('#/')) return null
  const [section, slug] = hash.slice(2).split('/')
  if (section === 'news') return slug ? { name: 'news', slug } : { name: 'news-list' }
  if (section === 'industries') return slug ? { name: 'industry', slug } : { name: 'industries-overview' }
  if (section === 'services') return slug ? { name: 'service', slug } : { name: 'services-overview' }
  if (section === 'solutions') return slug ? { name: 'solution', slug } : { name: 'solutions-overview' }
  if (section === 'cases') return slug ? { name: 'case', slug } : { name: 'cases' }
  if (section === 'blogs') return slug ? { name: 'news', slug } : { name: 'blogs' }
  if (section === 'videos') return { name: 'videos' }
  if (section === 'about') return { name: 'about' }
  if (section === 'testimonials') return { name: 'testimonials' }
  if (section === 'quality-assurance') return { name: 'quality-assurance' }
  if (section === 'faq') return { name: 'faq' }
  if (section === 'inquiry') return { name: 'inquiry' }
  if (section === 'npi' && slug) return { name: 'npi', slug }
  return null
}

export function useHashRoute() {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash))
  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export function closeRoute() {
  history.pushState(null, '', window.location.pathname + window.location.search)
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

export function scrollToTop() {
  if (window.location.hash.startsWith('#/')) closeRoute()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/** Locks page scroll while any overlay is visible. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = prev
    }
  }, [locked])
}

export function useEscape(active: boolean, onEscape: () => void) {
  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onEscape()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, onEscape])
}
