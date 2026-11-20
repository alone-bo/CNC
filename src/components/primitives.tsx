import type { ComponentProps, ReactNode } from 'react'

export function Container({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 xl:px-0 ${className}`}>{children}</div>
}

/** 2px brand-blue rule marking the transition between major homepage sections. */
export function SectionDivider({ full = false }: { full?: boolean }) {
  if (full) return <hr className="m-0 h-0.5 border-0 bg-brand" />
  return (
    <Container>
      <hr className="m-0 h-0.5 border-0 bg-brand" />
    </Container>
  )
}

export function Eyebrow({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase ${
        tone === 'light' ? 'text-white/80' : 'text-brand'
      }`}
    >
      <span className="h-0.5 w-8 bg-accent" aria-hidden />
      {children}
    </p>
  )
}

export function Logo({ tone = 'dark', className = '' }: { tone?: 'dark' | 'light'; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
        <rect width="40" height="40" rx="9" fill="#1175FC" />
        <path d="M11 10h18v4.5H16v3.25h11v4.5H16v3.25h13V30H11z" fill="#fff" />
        <rect x="29" y="17.75" width="4" height="4.5" rx="1" fill="#FF8A24" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[21px] font-extrabold tracking-[0.06em] transition-colors duration-300 ${
            tone === 'light' ? 'text-white' : 'text-ink'
          }`}
        >
          EZHONG
        </span>
        <span
          className={`mt-1 text-[9px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 ${
            tone === 'light' ? 'text-white/70' : 'text-muted'
          }`}
        >
          Precision Manufacturing
        </span>
      </span>
    </span>
  )
}

type BtnVariant = 'accent' | 'brand' | 'outline-light' | 'outline-accent' | 'outline-dark'

const variants: Record<BtnVariant, string> = {
  accent: 'bg-accent text-white hover:bg-accent-dark shadow-[0_6px_20px_-8px_rgba(255,138,36,0.7)]',
  brand: 'bg-brand text-white hover:bg-brand-dark',
  'outline-light': 'border border-white/50 text-white hover:bg-white hover:text-ink',
  'outline-accent': 'border border-accent bg-white text-accent hover:bg-accent hover:text-white',
  'outline-dark': 'border border-ink/80 text-ink hover:bg-ink hover:text-white',
}

export const buttonClass = (variant: BtnVariant, size: 'md' | 'lg' = 'md') =>
  `inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer ${
    size === 'lg' ? 'h-13 px-7 text-[15px]' : 'h-11 px-5 text-sm'
  } ${variants[variant]}`

export function Button({
  variant = 'accent',
  size = 'md',
  className = '',
  ...props
}: ComponentProps<'button'> & { variant?: BtnVariant; size?: 'md' | 'lg' }) {
  return <button type="button" className={`${buttonClass(variant, size)} ${className}`} {...props} />
}

const socialPaths: Record<string, string> = {
  LinkedIn:
    'M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.25 6.92 1.96 1.96 0 0 0 5.25 3ZM20.44 13.4c0-3.1-1.66-4.54-3.87-4.54a3.34 3.34 0 0 0-3.03 1.67V8.5h-3.37V20h3.37v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20h3.38z',
  YouTube:
    'M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3z',
  Facebook:
    'M13.5 21v-7.6h2.56l.38-2.97H13.5V8.54c0-.86.24-1.45 1.47-1.45h1.57V4.43A21 21 0 0 0 14.25 4.3c-2.27 0-3.82 1.38-3.82 3.93v2.2H7.86v2.97h2.57V21z',
  X: 'M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77zm-1.08 16.18h1.7L7.4 4.73H5.58z',
}

export function SocialIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d={socialPaths[name]} />
    </svg>
  )
}
