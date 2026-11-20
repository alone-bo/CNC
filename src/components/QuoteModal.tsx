import { useCallback, useEffect, useRef, useState, type DragEvent, type FormEvent } from 'react'
import { CircleCheck, FileUp, Lock, Paperclip, X } from 'lucide-react'
import { company, industries, services } from '../data/content'
import { useEscape, useScrollLock, useUI, type QuoteMode } from '../lib/ui'
import { Button } from './primitives'

const ACCEPT = '.step,.stp,.igs,.iges,.stl,.x_t,.dwg,.dxf,.pdf,.zip'
const MAX_FILES = 10

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const field =
  'h-11 w-full rounded-lg border border-line bg-white px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand focus:ring-3 focus:ring-brand/12'

function Label({ htmlFor, children, required }: { htmlFor: string; children: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-semibold text-ink">
      {children}
      {required && <span className="ml-0.5 text-accent">*</span>}
    </label>
  )
}

export function QuoteModal() {
  const { quote, closeQuote } = useUI()
  const open = !!quote?.open
  useEscape(open, closeQuote)
  useScrollLock(open)
  if (!quote) return null
  return (
    <QuoteDialog
      key={`${quote.mode}-${quote.industry}-${quote.service}-${quote.message}`}
      initial={quote}
      onClose={closeQuote}
    />
  )
}

function QuoteDialog({
  initial,
  onClose,
}: {
  initial: { mode?: QuoteMode; service?: string; industry?: string; message?: string }
  onClose: () => void
}) {
  const [mode, setMode] = useState<QuoteMode>(initial.mode ?? 'quote')
  const [files, setFiles] = useState<File[]>([])
  const [dragging, setDragging] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState<{ name: string; email: string } | null>(null)
  const firstField = useRef<HTMLInputElement>(null)
  const fileInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    firstField.current?.focus()
  }, [mode])

  const addFiles = useCallback((list: FileList | null) => {
    if (!list) return
    setFiles((prev) => {
      const names = new Set(prev.map((f) => f.name))
      return [...prev, ...Array.from(list).filter((f) => !names.has(f.name))].slice(0, MAX_FILES)
    })
  }, [])

  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    setDragging(false)
    addFiles(e.dataTransfer.files)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const next: Errors = {}
    if (!name) next.name = 'Please enter your name.'
    if (!email) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email address.'
    if (mode === 'contact' && !message) next.message = 'Please tell us how we can help.'
    if (mode === 'quote' && !message && files.length === 0)
      next.message = 'Attach CAD files or describe your project requirements.'
    setErrors(next)
    if (Object.keys(next).length) return
    setSubmitted({ name, email })
  }

  const isQuote = mode === 'quote'

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[70] flex items-end justify-center bg-night/60 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-up flex max-h-[94svh] w-full max-w-[720px] flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 pt-6 pb-5 sm:px-8">
          <div>
            <h2 id="quote-title" className="text-xl font-bold text-ink sm:text-2xl">
              {isQuote ? 'Request a Quote' : 'Contact Our Team'}
            </h2>
            <p className="mt-1 text-sm text-muted">
              {isQuote
                ? 'Share your drawings and requirements for an engineering review and quotation.'
                : 'Questions about materials, processes or a project? Send us a message.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mt-1 -mr-2 grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full text-muted hover:bg-surface hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center px-8 py-14 text-center">
            <CircleCheck className="h-14 w-14 text-accent" strokeWidth={1.5} />
            <h3 className="mt-5 text-xl font-bold text-ink">Thank you, {submitted.name.split(' ')[0]}.</h3>
            <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed text-muted">
              {isQuote
                ? `Your request${files.length ? ` and ${files.length} file${files.length > 1 ? 's' : ''}` : ''} has been prepared for our engineering team. We will reply to ${submitted.email} with DFM feedback and a quotation.`
                : `Your message is ready for our team. We will reply to ${submitted.email}.`}
            </p>
            <Button variant="brand" className="mt-8" onClick={onClose}>
              Back to homepage
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              <div role="tablist" aria-label="Request type" className="mb-6 inline-flex rounded-lg bg-surface p-1">
                {(['quote', 'contact'] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    role="tab"
                    aria-selected={mode === m}
                    onClick={() => {
                      setMode(m)
                      setErrors({})
                    }}
                    className={`h-9 cursor-pointer rounded-md px-4 text-sm font-semibold transition-colors ${
                      mode === m ? 'bg-white text-brand shadow-sm' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {m === 'quote' ? 'Quote & CAD Upload' : 'General Inquiry'}
                  </button>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="q-name" required>
                    Full name
                  </Label>
                  <input
                    ref={firstField}
                    id="q-name"
                    name="name"
                    autoComplete="name"
                    className={field}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'q-name-err' : undefined}
                  />
                  {errors.name && (
                    <p id="q-name-err" className="mt-1 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="q-email" required>
                    Business email
                  </Label>
                  <input
                    id="q-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={field}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'q-email-err' : undefined}
                  />
                  {errors.email && (
                    <p id="q-email-err" className="mt-1 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="q-company">Company</Label>
                  <input id="q-company" name="company" autoComplete="organization" className={field} />
                </div>
                <div>
                  <Label htmlFor="q-phone">Phone</Label>
                  <input id="q-phone" name="phone" type="tel" autoComplete="tel" className={field} />
                </div>

                {isQuote && (
                  <>
                    <div>
                      <Label htmlFor="q-service">Manufacturing process</Label>
                      <select id="q-service" name="service" defaultValue={initial.service ?? ''} className={field}>
                        <option value="">Not sure — recommend one</option>
                        {services.map((s) => (
                          <option key={s.slug}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="q-industry">Industry</Label>
                      <select id="q-industry" name="industry" defaultValue={initial.industry ?? ''} className={field}>
                        <option value="">Select industry</option>
                        {industries.map((i) => (
                          <option key={i.slug}>{i.name}</option>
                        ))}
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="q-qty">Quantity</Label>
                      <input id="q-qty" name="quantity" placeholder="e.g. 10 prototypes, then 1,000 pcs" className={field} />
                    </div>

                    <div className="sm:col-span-2">
                      <span className="mb-1.5 block text-[13px] font-semibold text-ink">CAD files &amp; drawings</span>
                      <div
                        onDragOver={(e) => {
                          e.preventDefault()
                          setDragging(true)
                        }}
                        onDragLeave={() => setDragging(false)}
                        onDrop={onDrop}
                        className={`flex flex-col items-center rounded-xl border-2 border-dashed px-6 py-7 text-center transition-colors ${
                          dragging ? 'border-brand bg-brand/5' : 'border-line bg-surface'
                        }`}
                      >
                        <FileUp className="h-8 w-8 text-brand" strokeWidth={1.5} />
                        <p className="mt-3 text-sm text-ink">
                          Drag &amp; drop files here, or{' '}
                          <button
                            type="button"
                            onClick={() => fileInput.current?.click()}
                            className="cursor-pointer font-semibold text-brand underline-offset-2 hover:underline"
                          >
                            browse
                          </button>
                        </p>
                        <p className="mt-1 text-xs text-muted">STEP, IGES, STL, X_T, DWG, DXF, PDF or ZIP · up to {MAX_FILES} files</p>
                        <input
                          ref={fileInput}
                          type="file"
                          multiple
                          accept={ACCEPT}
                          className="sr-only"
                          aria-label="Upload CAD files"
                          onChange={(e) => {
                            addFiles(e.target.files)
                            e.target.value = ''
                          }}
                        />
                      </div>
                      {files.length > 0 && (
                        <ul className="mt-3 space-y-2">
                          {files.map((f) => (
                            <li key={f.name} className="flex items-center gap-3 rounded-lg border border-line px-3 py-2 text-sm">
                              <Paperclip className="h-4 w-4 shrink-0 text-accent" />
                              <span className="min-w-0 flex-1 truncate text-ink">{f.name}</span>
                              <span className="shrink-0 text-xs text-muted">{(f.size / 1024 / 1024).toFixed(2)} MB</span>
                              <button
                                type="button"
                                aria-label={`Remove ${f.name}`}
                                onClick={() => setFiles((prev) => prev.filter((p) => p !== f))}
                                className="grid h-7 w-7 cursor-pointer place-items-center rounded-full text-muted hover:bg-surface hover:text-ink"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </>
                )}

                <div className="sm:col-span-2">
                  <Label htmlFor="q-message" required={!isQuote}>
                    {isQuote ? 'Project requirements' : 'Message'}
                  </Label>
                  <textarea
                    id="q-message"
                    name="message"
                    rows={4}
                    defaultValue={initial.message}
                    placeholder={isQuote ? 'Material, tolerances, surface finish, target dates…' : 'How can we help?'}
                    className={`${field} h-auto py-3`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'q-message-err' : undefined}
                  />
                  {errors.message && (
                    <p id="q-message-err" className="mt-1 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {isQuote && (
                  <label className="flex cursor-pointer items-start gap-3 text-sm text-muted sm:col-span-2">
                    <input type="checkbox" name="nda" className="mt-0.5 h-4 w-4 accent-brand" />
                    I would like to sign an NDA before sharing detailed drawings.
                  </label>
                )}
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-line bg-surface px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="flex items-center gap-2 text-xs text-muted">
                <Lock className="h-3.5 w-3.5" /> Files are handled confidentially. Or email {company.email}
              </p>
              <Button type="submit" variant="accent" className="sm:min-w-[160px]">
                {isQuote ? 'Submit Request' : 'Send Message'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
