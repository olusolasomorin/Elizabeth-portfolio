import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { Flower } from '@/components/ui/Shapes'
import { useContactDialog } from '@/hooks/useContactDialog'
import { useContent } from '@/hooks/useContent'
import { useDialog } from '@/hooks/useDialog'
import { activeSocials, pad } from '@/lib/utils'
import { Logo } from './Logo'
import { mobileNav } from './navigation'

/** Full-screen wine navigation overlay for small screens. */
export function MobileMenu({ open, onClose }) {
  const ref = useDialog(open, onClose)
  const { settings } = useContent()
  const { openContact } = useContactDialog()

  if (!open) return null

  return (
    <div
      ref={ref}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-50 flex animate-fade-in flex-col overflow-y-auto bg-wine px-5 pt-[18px] pb-7 text-paper md:hidden"
    >
      <Flower petal="var(--color-wine-deep)" className="pointer-events-none absolute -right-[110px] bottom-[120px] size-[300px]" />

      <div className="relative flex items-center justify-between">
        <Logo tone="paper" onClick={onClose} className="text-[27px]" />
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="flex size-11 items-center justify-center rounded-full border-[1.5px] border-paper"
        >
          <X aria-hidden="true" className="size-[18px]" strokeWidth={2} />
        </button>
      </div>

      <nav aria-label="Main" className="relative mt-[54px] flex flex-col border-t border-paper/25">
        {mobileNav.map((item, i) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            onClick={onClose}
            className="flex items-baseline gap-3.5 border-b border-paper/25 py-4 text-paper no-underline"
          >
            {({ isActive }) => (
              <>
                <span className="text-[13px] text-blush">{pad(i)}</span>
                <span className={`font-serif text-[52px] leading-none ${i % 2 ? 'italic' : ''}`}>
                  {item.label}
                </span>
                {isActive && <span className="ml-auto size-2.5 self-center rounded-full bg-accent" aria-label="(current page)" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="relative mt-auto flex flex-col gap-3.5 pt-10">
        <button
          type="button"
          onClick={() => {
            onClose()
            openContact()
          }}
          className="rounded-full bg-accent p-[18px] text-center text-[17px] font-bold text-ink"
        >
          Let&apos;s talk →
        </button>
        <a href={`mailto:${settings.contact.email}`} className="py-2 text-center text-[15px] font-semibold text-paper hover:text-blush">
          {settings.contact.emailDisplay}
        </a>
        <div className="flex flex-wrap justify-center gap-2">
          {activeSocials(settings.socials)
            .filter((s) => s.id !== 'dribbble')
            .map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-paper/35 px-3.5 py-[11px] text-[13px] text-paper no-underline hover:text-blush"
              >
                {s.label}
              </a>
            ))}
        </div>
      </div>
    </div>
  )
}
