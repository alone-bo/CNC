import { useEffect, useRef, useState, type ComponentType, type FormEvent } from 'react'
import { ArrowUp, FileText, Headset, House, Mail, MessageCircle, Phone, Send, X } from 'lucide-react'
import { company } from '../data/content'
import { scrollToTop, useUI } from '../lib/ui'

type Tool = {
  label: string
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  href?: string
  onClick?: () => void
}

export function FloatingToolbar() {
  const { openQuote, setChatOpen } = useUI()
  const tools: Tool[] = [
    { label: 'Home', icon: House, onClick: scrollToTop },
    { label: `Call ${company.phone}`, icon: Phone, href: company.phoneHref },
    { label: 'Get a Quote', icon: FileText, onClick: () => openQuote() },
    { label: `Email ${company.email}`, icon: Mail, href: `mailto:${company.email}` },
    { label: 'Online Support', icon: Headset, onClick: () => setChatOpen(true) },
    { label: 'Back to Top', icon: ArrowUp, onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  ]
  const cls =
    'peer grid h-12 w-12 cursor-pointer place-items-center rounded-[10px] bg-navy text-white shadow-[0_8px_20px_-10px_rgba(11,35,80,0.7)] transition-colors duration-200 hover:bg-accent focus-visible:bg-accent'

  return (
    <nav aria-label="Quick contact" className="fixed top-1/2 right-4 z-[46] hidden -translate-y-1/2 xl:block">
      <ul className="flex flex-col gap-2">
        {tools.map(({ label, icon: Icon, href, onClick }) => (
          <li key={label} className="relative">
            {href ? (
              <a href={href} aria-label={label} className={cls}>
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </a>
            ) : (
              <button type="button" aria-label={label} onClick={onClick} className={cls}>
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </button>
            )}
            <span
              role="tooltip"
              className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 translate-x-1 rounded-md bg-ink px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 transition-all duration-200 peer-hover:translate-x-0 peer-hover:opacity-100 peer-focus-visible:translate-x-0 peer-focus-visible:opacity-100"
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

type Msg = { from: 'agent' | 'user'; text: string }

export function ChatWidget() {
  const { chatOpen, setChatOpen, openQuote } = useUI()
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: 'agent',
      text: 'Hello, welcome to EZHONG. How can our engineering team help with your project today?',
    },
  ])
  const [draft, setDraft] = useState('')
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])
  useEffect(() => {
    if (chatOpen) inputRef.current?.focus()
  }, [chatOpen])

  const send = (text: string) => {
    const t = text.trim()
    if (!t) return
    setMessages((m) => [...m, { from: 'user', text: t }])
    setDraft('')
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: 'agent',
          text: `Thanks for your message. Please share your email or attach drawings through the quote form so an engineer can follow up — or email ${company.email}.`,
        },
      ])
    }, 700)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    send(draft)
  }

  return (
    <>
      {/* Floating inquiry launcher; sits above the mobile sticky bar below xl */}
      <button
        type="button"
        onClick={() => setChatOpen((v) => !v)}
        aria-label={chatOpen ? 'Close online support' : 'Open online support chat'}
        aria-expanded={chatOpen}
        className="fixed right-4 bottom-[calc(80px+env(safe-area-inset-bottom))] z-[46] grid h-12 w-12 cursor-pointer place-items-center rounded-xl bg-accent text-white shadow-[0_12px_28px_-8px_rgba(255,138,36,0.75)] transition-transform hover:scale-105 hover:bg-accent-dark xl:bottom-6 xl:h-14 xl:w-14 xl:rounded-2xl"
      >
        {chatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" strokeWidth={1.9} />}
      </button>

      {chatOpen && (
        <div
          role="dialog"
          aria-label="EZHONG online support"
          className="animate-fade-up fixed inset-x-3 bottom-[144px] z-[55] flex max-h-[min(560px,calc(100svh-210px))] xl:max-h-[min(560px,calc(100svh-120px))] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_80px_-20px_rgba(17,24,39,0.35)] sm:inset-x-auto sm:right-4 sm:w-[370px] xl:right-22 xl:bottom-6"
        >
          <div className="flex items-center gap-3 bg-navy px-5 py-4 text-white">
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white/10">
              <Headset className="h-5 w-5" />
              <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-navy" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold">EZHONG Support</p>
              <p className="text-xs text-white/60">Engineering &amp; sales team</p>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-full hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-surface px-4 py-5">
            {messages.map((m, i) => (
              <p
                key={i}
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.from === 'agent' ? 'rounded-tl-sm bg-white text-ink shadow-sm' : 'ml-auto rounded-tr-sm bg-brand text-white'
                }`}
              >
                {m.text}
              </p>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => openQuote()}
                  className="cursor-pointer rounded-full border border-accent bg-white px-3 py-1.5 text-xs font-semibold text-accent hover:bg-accent hover:text-white"
                >
                  Request a quote
                </button>
                {['Material advice', 'Tolerance question'].map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="cursor-pointer rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink hover:border-brand hover:text-brand"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>
          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-line p-3">
            <label htmlFor="chat-input" className="sr-only">
              Message
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your message…"
              className="h-11 flex-1 rounded-lg border border-line px-3 text-sm outline-none focus:border-brand"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!draft.trim()}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-lg bg-accent text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export function MobileCTA() {
  const { openQuote, setChatOpen } = useUI()
  return (
    <div className="fixed inset-x-0 bottom-0 z-[46] border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md xl:hidden">
      <div className="mx-auto grid h-[68px] max-w-[640px] grid-cols-[1fr_1.4fr_1fr] items-center gap-2 px-3">
        <a href={company.phoneHref} className="flex h-12 flex-col items-center justify-center gap-0.5 text-[11px] font-semibold text-ink">
          <Phone className="h-5 w-5 text-brand" />
          Call Us
        </a>
        <button
          type="button"
          onClick={() => openQuote()}
          className="h-12 cursor-pointer rounded-lg bg-accent text-sm font-semibold text-white shadow-[0_6px_16px_-8px_rgba(255,138,36,0.8)]"
        >
          Get a Quote
        </button>
        <button
          type="button"
          onClick={() => setChatOpen((v) => !v)}
          className="flex h-12 cursor-pointer flex-col items-center justify-center gap-0.5 text-[11px] font-semibold text-ink"
        >
          <MessageCircle className="h-5 w-5 text-brand" />
          Chat
        </button>
      </div>
    </div>
  )
}
