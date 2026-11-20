import { useRef, useState, type DragEvent, type FormEvent } from 'react'
import { ChevronDown, CircleCheck, FileUp, Mail, Phone, X } from 'lucide-react'
import { company, industries } from '../data/content'
import { useUI } from '../lib/ui'
import { Button } from './primitives'
import { DetailContainer } from './ServiceDetailShared'

const MAX_FILES = 10
const MAX_BYTES = 130 * 1024 * 1024
const ACCEPT = '.step,.stp,.igs,.iges,.stl,.x_t,.dwg,.dxf,.pdf,.zip,.sldprt,.prt'

const field =
  'h-11 w-full rounded-lg border border-line bg-white px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand focus:ring-3 focus:ring-brand/12'
const labelClass = 'mb-1.5 block text-[13px] font-semibold text-ink'

type Errors = Partial<Record<'name' | 'company' | 'email' | 'industry' | 'files', string>>

const formatSize = (bytes: number) =>
  bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`

export function InquiryPage() {
  const { openQuote } = useUI()
  const fileInput = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])
  const [dragging, setDragging] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState<{ name: string; email: string } | null>(null)

  const totalBytes = files.reduce((sum, file) => sum + file.size, 0)

  const addFiles = (list: FileList | null) => {
    if (!list?.length) return
    const incoming = Array.from(list)
    const merged = [
      ...files,
      ...incoming.filter(
        (file) => !files.some((existing) => existing.name === file.name && existing.size === file.size),
      ),
    ]
    if (merged.length > MAX_FILES) {
      setErrors((prev) => ({ ...prev, files: `You can upload up to ${MAX_FILES} files.` }))
      setFiles(merged.slice(0, MAX_FILES))
      return
    }
    if (merged.reduce((sum, file) => sum + file.size, 0) > MAX_BYTES) {
      setErrors((prev) => ({ ...prev, files: 'Total upload size must be under 130 MB.' }))
      return
    }
    setErrors((prev) => ({ ...prev, files: undefined }))
    setFiles(merged)
  }

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDragging(false)
    addFiles(event.dataTransfer.files)
  }

  const removeFile = (file: File) => {
    setFiles((prev) => prev.filter((item) => !(item.name === file.name && item.size === file.size)))
    setErrors((prev) => ({ ...prev, files: undefined }))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const companyName = String(data.get('company') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const industry = String(data.get('industry') ?? '').trim()
    const next: Errors = {}

    if (!name) next.name = 'Please enter your name.'
    if (!companyName) next.company = 'Please enter your company name.'
    if (!email) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email address.'
    if (!industry) next.industry = 'Please select your industry.'
    if (totalBytes > MAX_BYTES) next.files = 'Total upload size must be under 130 MB.'

    setErrors(next)
    if (Object.keys(next).length) return
    setSubmitted({ name, email })
  }

  const reset = () => {
    setSubmitted(null)
    setFiles([])
    setErrors({})
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0b1118]">
        <img
          src="/images/about/typing-hero.jpg"
          alt="Hands typing a request on a laptop keyboard"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#070c12]/62" aria-hidden />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-r from-[#070c12]/88 via-[#070c12]/55 to-[#070c12]/15"
          aria-hidden
        />
        <DetailContainer className="flex min-h-[500px] items-center py-16 lg:min-h-[560px] lg:py-20">
          <div className="max-w-[640px] lg:w-[46%] lg:max-w-none">
            <h1 className="text-[38px] leading-[1.06] font-bold tracking-[-0.03em] text-white sm:text-[50px] lg:text-[56px]">
              Let&apos;s Get In Touch
            </h1>
            <p className="mt-6 text-[15px] leading-[1.7] text-white/80 sm:text-base">
              Please fill out this form to submit a request for a quote. One of our team members will review the details
              and be in touch within 12 business hours.
            </p>
          </div>
        </DetailContainer>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <DetailContainer>
          <div className="grid gap-10 lg:grid-cols-[55fr_45fr] lg:items-start lg:gap-16">
            <div>
              <div className="border border-line bg-white p-6 sm:p-8 lg:p-9">
                {submitted ? (
                  <div className="flex min-h-[520px] flex-col items-center justify-center text-center" role="status">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-brand/10">
                      <CircleCheck className="h-8 w-8 text-brand" />
                    </span>
                    <h2 className="mt-6 text-[26px] font-bold text-ink">Request received, {submitted.name}.</h2>
                    <p className="mt-3 max-w-[420px] text-[14px] leading-relaxed text-muted">
                      Thank you. Our engineering team will review your details and reply to{' '}
                      <strong className="font-semibold text-ink">{submitted.email}</strong> within 12 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-7 cursor-pointer text-[13px] font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="inq-name" className={labelClass}>
                          Name<span className="ml-0.5 text-brand">*</span>
                        </label>
                        <input
                          id="inq-name"
                          name="name"
                          autoComplete="name"
                          className={field}
                          placeholder="Your full name"
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="inq-company" className={labelClass}>
                          Company<span className="ml-0.5 text-brand">*</span>
                        </label>
                        <input
                          id="inq-company"
                          name="company"
                          autoComplete="organization"
                          className={field}
                          placeholder="Company name"
                          aria-invalid={!!errors.company}
                        />
                        {errors.company && <p className="mt-1.5 text-xs text-red-600">{errors.company}</p>}
                      </div>

                      <div>
                        <label htmlFor="inq-email" className={labelClass}>
                          Email<span className="ml-0.5 text-brand">*</span>
                        </label>
                        <input
                          id="inq-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className={field}
                          placeholder="you@company.com"
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="inq-phone" className={labelClass}>
                          Phone
                        </label>
                        <input
                          id="inq-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          className={field}
                          placeholder="+86 000 0000 0000"
                        />
                      </div>

                      <div>
                        <label htmlFor="inq-country" className={labelClass}>
                          Country
                        </label>
                        <input
                          id="inq-country"
                          name="country"
                          autoComplete="country-name"
                          className={field}
                          placeholder="Country"
                        />
                      </div>

                      <div>
                        <label htmlFor="inq-city" className={labelClass}>
                          City
                        </label>
                        <input
                          id="inq-city"
                          name="city"
                          autoComplete="address-level2"
                          className={field}
                          placeholder="City"
                        />
                      </div>

                      <div>
                        <label htmlFor="inq-industry" className={labelClass}>
                          Your Industry<span className="ml-0.5 text-brand">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="inq-industry"
                            name="industry"
                            defaultValue=""
                            className={`${field} appearance-none pr-10 ${errors.industry ? 'border-red-400' : ''}`}
                            aria-invalid={!!errors.industry}
                          >
                            <option value="" disabled>
                              Your Industry --*
                            </option>
                            {industries.map((industry) => (
                              <option key={industry.slug} value={industry.name}>
                                {industry.name}
                              </option>
                            ))}
                            <option value="Industrial Equipment">Industrial Equipment</option>
                            <option value="Other">Other</option>
                          </select>
                          <ChevronDown
                            className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-muted"
                            aria-hidden
                          />
                        </div>
                        {errors.industry && <p className="mt-1.5 text-xs text-red-600">{errors.industry}</p>}
                      </div>

                      <div>
                        <label htmlFor="inq-details" className={labelClass}>
                          Project Details (Please Include: Part Name / Quantity / Material / Color / Surface Finish)
                        </label>
                        <textarea
                          id="inq-details"
                          name="details"
                          rows={5}
                          className={`${field} h-auto resize-y py-3`}
                          placeholder="Description"
                        />
                      </div>

                      <div>
                        <p className={labelClass}>Upload Your Files to Get Instant Quote and DFM Feedback</p>
                        <p className="mb-2 text-[11.5px] leading-relaxed text-muted">
                          STEP, STP, IGES, IGS, DWG, DXF, STL, PDF or ZIP. Up to {MAX_FILES} files, total upload size
                          under 130 MB.
                        </p>
                        <div
                          onDragOver={(event) => {
                            event.preventDefault()
                            setDragging(true)
                          }}
                          onDragLeave={() => setDragging(false)}
                          onDrop={onDrop}
                          className={`relative flex min-h-[175px] flex-col items-center justify-center border border-dashed px-4 py-8 text-center transition-colors ${
                            dragging ? 'border-brand bg-brand/5' : 'border-line bg-[#F7F8FA]'
                          }`}
                        >
                          <FileUp className="h-8 w-8 text-brand" strokeWidth={1.6} />
                          <p className="mt-3 text-[13.5px] font-semibold text-ink">Drag &amp; Drop Files Here</p>
                          <p className="mt-1 text-[11.5px] text-muted">or</p>
                          <button
                            type="button"
                            onClick={() => fileInput.current?.click()}
                            className="mt-2 cursor-pointer border border-ink bg-white px-4 py-2 text-[11px] font-bold tracking-[0.06em] text-ink uppercase transition-colors hover:bg-ink hover:text-white"
                          >
                            Browse Files
                          </button>
                          <input
                            ref={fileInput}
                            type="file"
                            multiple
                            accept={ACCEPT}
                            className="sr-only"
                            onChange={(event) => {
                              addFiles(event.currentTarget.files)
                              event.currentTarget.value = ''
                            }}
                          />
                          <span className="absolute right-4 bottom-3 text-[11px] font-medium text-muted tabular-nums">
                            {files.length} of {MAX_FILES}
                          </span>
                        </div>
                        {errors.files && <p className="mt-1.5 text-xs text-red-600">{errors.files}</p>}
                        {files.length > 0 && (
                          <ul className="mt-3 space-y-2">
                            {files.map((file) => (
                              <li
                                key={`${file.name}-${file.size}`}
                                className="flex items-center justify-between gap-3 rounded-lg border border-line bg-white px-3 py-2 text-[12px]"
                              >
                                <span className="min-w-0 truncate text-ink/80">{file.name}</span>
                                <span className="flex shrink-0 items-center gap-2 text-muted">
                                  {formatSize(file.size)}
                                  <button
                                    type="button"
                                    onClick={() => removeFile(file)}
                                    aria-label={`Remove ${file.name}`}
                                    className="grid h-6 w-6 cursor-pointer place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink"
                                  >
                                    <X className="h-3.5 w-3.5" />
                                  </button>
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {files.length > 0 && (
                          <p className="mt-2 text-[11px] text-muted">Total: {formatSize(totalBytes)} / 130 MB</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-7">
                      <Button type="submit" variant="outline-dark" size="lg" className="tracking-[0.08em] uppercase">
                        Submit
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              <p className="mt-5 text-[11.5px] leading-[1.8] text-muted">
                By submitting this form you agree to our{' '}
                <a
                  href="#"
                  onClick={(event) => event.preventDefault()}
                  className="font-semibold text-ink/70 underline underline-offset-2 hover:text-brand"
                >
                  Terms and Conditions
                </a>{' '}
                and consent to the processing of your information under our{' '}
                <a
                  href="#"
                  onClick={(event) => event.preventDefault()}
                  className="font-semibold text-ink/70 underline underline-offset-2 hover:text-brand"
                >
                  Privacy Policy
                </a>
                .
                <br />
                Please review our{' '}
                <a
                  href="#"
                  onClick={(event) => event.preventDefault()}
                  className="font-semibold text-ink/70 underline underline-offset-2 hover:text-brand"
                >
                  Terms of Service
                </a>{' '}
                for file upload and quotation conditions.
              </p>
            </div>

            <aside className="lg:pt-1">
              <div>
                <h2 className="text-[15px] font-bold text-ink">privacy:</h2>
                <div className="mt-3 space-y-3 text-[13px] leading-[1.75] text-muted">
                  <p>
                    Your drawings, models and project details are treated as confidential. Files are shared only with
                    the engineers and production staff who need them to quote and manufacture your parts.
                  </p>
                  <p>
                    We do not reuse customer designs, disclose them to third parties or display parts without written
                    permission. If your program requires an NDA, we can review and sign yours before any files are
                    exchanged.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openQuote({
                      mode: 'contact',
                      message: 'Please send the EZHONG mutual NDA before I share drawings. ',
                    })
                  }
                  className="mt-4 cursor-pointer text-[12.5px] font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                >
                  Request our mutual NDA template
                </button>
              </div>

              <div className="mt-12 border-t border-line pt-10">
                <h2 className="text-[20px] font-bold text-ink">Ready to get started?</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  Need urgent assistance? Call or email us and an engineer will pick up the conversation.
                </p>

                <div className="mt-6 space-y-4">
                  <a href={`mailto:${company.email}`} className="group flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand to-brand-dark text-white shadow-[0_10px_24px_-12px_rgba(17,117,252,0.65)]">
                      <Mail className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[14px] font-bold text-ink transition-colors group-hover:text-brand">
                        {company.email}
                      </span>
                      <span className="mt-0.5 block text-[12px] text-muted">Email Us</span>
                    </span>
                  </a>

                  <a href={company.phoneHref} className="group flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand to-brand-dark text-white shadow-[0_10px_24px_-12px_rgba(17,117,252,0.65)]">
                      <Phone className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-[14px] font-bold text-ink transition-colors group-hover:text-brand">
                        {company.phone}
                      </span>
                      <span className="mt-0.5 block text-[14px] font-bold text-ink transition-colors group-hover:text-brand">
                        +86 000 0000 0001
                      </span>
                      <span className="mt-1 block text-[12px] text-muted">Call Us</span>
                    </span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </DetailContainer>
      </section>
    </>
  )
}
