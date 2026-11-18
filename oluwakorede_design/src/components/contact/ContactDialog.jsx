import { X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { AvailabilityStatus } from '@/components/ui/Decor'
import { Flower } from '@/components/ui/Shapes'
import { useContactDialog } from '@/hooks/useContactDialog'
import { useContent } from '@/hooks/useContent'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { useDialog } from '@/hooks/useDialog'
import { submitEnquiry } from '@/services/contactApi'
import { activeSocials, cn } from '@/lib/utils'
import { ContactForm } from './ContactForm'

function DirectContact() {
  const { settings } = useContent()
  const { contact, socials, availability } = settings
  const { copied, copy } = useCopyToClipboard()
  const allSocials = [
    ...activeSocials(socials),
    { id: 'whatsapp', label: 'WhatsApp', short: 'Wa', handle: contact.whatsapp.label, url: contact.whatsapp.url, accent: true },
  ]

  return (
    <aside className="relative flex flex-none flex-col gap-0 overflow-hidden rounded-t-[28px] bg-wine px-5 pt-3.5 pb-7 text-paper lg:w-[420px] lg:gap-[26px] lg:rounded-none lg:px-10 lg:py-11">
      <Flower
        petal="var(--color-wine-deep)"
        className="pointer-events-none absolute -right-[70px] -bottom-20 size-[220px] opacity-90 lg:-right-[90px] lg:-bottom-[90px] lg:size-[300px]"
      />
      <div aria-hidden="true" className="mx-auto mb-[18px] h-[5px] w-11 rounded-[3px] bg-paper/40 lg:hidden" />

      <div className="relative text-[11px] font-bold tracking-[2px] text-blush lg:text-xs">LET&apos;S TALK</div>
      <h2 id="contact-title" className="relative m-0 mt-2 max-w-[300px] font-serif text-[42px] leading-[0.98] font-normal lg:-mt-2 lg:max-w-none lg:text-[54px]">
        Tell me about your <em className="text-blush">project</em>.
      </h2>
      <p className="relative m-0 mt-3 text-sm leading-[1.55] text-petal-light lg:mt-0 lg:text-[15px] lg:leading-relaxed">
        <span className="hidden lg:inline">Fill in the form or reach me directly. </span>I reply within {contact.responseTime}.
      </p>

      <div className="relative mt-[18px] rounded-2xl border border-paper/20 bg-paper/10 px-4 py-3.5 lg:mt-0 lg:rounded-[18px] lg:px-5 lg:py-[18px]">
        <div className="text-[10px] font-bold tracking-[1.6px] text-blush lg:text-[11px] lg:tracking-[1.8px]">EMAIL ME</div>
        <div className="mt-1 flex items-center justify-between gap-3 lg:mt-2">
          <a href={`mailto:${contact.email}`} className="min-w-0 truncate text-base font-semibold text-paper no-underline lg:text-lg">
            {contact.emailDisplay}
          </a>
          <button
            type="button"
            onClick={() => copy(contact.email)}
            className="min-h-11 flex-none rounded-full bg-paper px-3.5 text-[13px] font-bold text-ink lg:min-h-10"
          >
            <span aria-live="polite">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Socials: chips on small screens, list on desktop */}
      <div className="relative mt-3.5 flex flex-wrap gap-2 lg:hidden">
        {allSocials.map((s) => (
          <a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'rounded-full px-3.5 py-[11px] text-[13px] no-underline',
              s.accent ? 'bg-accent font-semibold text-ink' : 'border border-paper/30 text-paper',
            )}
          >
            {s.label}
            {s.id === 'instagram' && s.handle && ` ${s.handle}`}
          </a>
        ))}
      </div>
      <div className="relative hidden lg:block">
        <div className="mb-1.5 text-[11px] font-bold tracking-[1.8px] text-blush">FIND ME ON</div>
        {allSocials.map((s, i) => (
          <a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'flex items-center gap-3.5 rounded-xl px-2 py-[11px] text-paper no-underline transition-colors hover:bg-paper/[.08]',
              i < allSocials.length - 1 && 'border-b border-paper/15',
            )}
          >
            <span
              className={cn(
                'flex size-9 items-center justify-center rounded-full text-[13px] font-bold text-ink',
                s.accent ? 'bg-accent' : 'bg-blush',
              )}
            >
              {s.short}
            </span>
            <span className="flex-1 text-[15px] font-semibold">{s.label}</span>
            <span className="text-sm text-petal-light">{s.handle}</span>
          </a>
        ))}
      </div>

      {availability.isBooking && (
        <AvailabilityStatus
          tone="light"
          label={`${availability.shortLabel} · ${settings.brand.location}, ${settings.brand.timezone}`}
          className="relative mt-auto hidden text-petal-light lg:flex"
        />
      )}
    </aside>
  )
}

function ThankYou({ onReset, onClose, responseTime, social }) {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-[22px] px-2 py-10 text-center lg:h-full lg:px-[30px]">
      <Flower petal="var(--color-accent)" center="var(--color-paper)" className="size-[110px] lg:size-[140px]" />
      <h3 className="m-0 font-serif text-[52px] leading-[0.95] font-normal lg:text-[64px]">
        Thank <em className="text-wine">you!</em>
      </h3>
      <p className="m-0 max-w-[420px] text-base leading-relaxed text-plum lg:text-[17px]">
        Your message is on its way. I&apos;ll reply within {responseTime}. {social && ` In the meantime, say hi on ${social.label}.`}
      </p>
      <div className="mt-2.5 flex flex-wrap justify-center gap-3">
        <Button onClick={onClose} variant="primary" className="min-h-[52px]">
          Back to the site
        </Button>
        <Button onClick={onReset} variant="outline" className="min-h-[52px]">
          Send another
        </Button>
      </div>
    </div>
  )
}

/** Global "Let's talk" dialog: centred two-column modal on desktop, bottom sheet on mobile. */
export function ContactDialog() {
  const { isOpen, preset, closeContact } = useContactDialog()
  const { settings, contactForm } = useContent()
  const ref = useDialog(isOpen, closeContact)
  const [sent, setSent] = useState(false)
  const [formKey, setFormKey] = useState(0)

  if (!isOpen) return null

  const handleClose = () => {
    closeContact()
    setSent(false)
  }

  const handleSubmit = async (values) => {
    await submitEnquiry(values)
    setSent(true)
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center lg:items-center lg:p-6">
      <div
        aria-hidden="true"
        onClick={handleClose}
        className="absolute inset-0 animate-fade-in bg-ink/[.62] backdrop-blur-[6px]"
      />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="relative flex max-h-[calc(100dvh-24px)] w-full animate-sheet-up flex-col overflow-y-auto overscroll-contain rounded-t-[28px] bg-paper shadow-[0_40px_100px_rgba(20,5,12,.45)] lg:max-h-[min(900px,calc(100dvh-48px))] lg:max-w-[1120px] lg:animate-modal-in lg:flex-row lg:overflow-hidden lg:rounded-[32px]"
      >
        <DirectContact />

        <button
          type="button"
          aria-label="Close"
          onClick={handleClose}
          className="absolute top-[22px] right-4 z-10 flex size-11 items-center justify-center rounded-full bg-paper/15 text-paper lg:top-7 lg:right-7 lg:size-12 lg:border-[1.5px] lg:border-ink lg:bg-transparent lg:text-ink"
        >
          <X aria-hidden="true" className="size-[18px] lg:size-5" strokeWidth={2} />
        </button>

        <div className="relative flex-1 px-5 pt-[26px] pb-10 lg:overflow-y-auto lg:px-12 lg:py-10">
          {sent ? (
            <ThankYou
              responseTime={settings.contact.responseTime}
              social={activeSocials(settings.socials)[0]}
              onClose={handleClose}
              onReset={() => {
                setSent(false)
                setFormKey((k) => k + 1)
              }}
            />
          ) : (
            <ContactForm key={formKey} options={contactForm} defaultService={preset?.service} onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </div>
  )
}
