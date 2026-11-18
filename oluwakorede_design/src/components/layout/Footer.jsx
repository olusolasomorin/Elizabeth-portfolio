import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Flower } from '@/components/ui/Shapes'
import { useContactDialog } from '@/hooks/useContactDialog'
import { useContent } from '@/hooks/useContent'
import { activeSocials } from '@/lib/utils'
import { mainNav } from './navigation'

/**
 * Dark contact footer shared by every page.
 * @param {{ eyebrow?: string, backToTop?: boolean }} props
 */
export function Footer({ eyebrow = 'HAVE A PROJECT IN MIND?', backToTop = false }) {
  const { settings } = useContent()
  const { openContact } = useContactDialog()
  const { brand, contact, socials } = settings

  return (
    <div className="bg-paper">
      <footer
        id="contact"
        className="relative overflow-hidden rounded-t-[28px] bg-ink px-5 pt-14 pb-7 text-paper md:rounded-t-[40px] md:px-gutter md:pt-[100px] md:pb-10 xl:pt-[110px]"
      >
        <Flower className="pointer-events-none absolute -top-[70px] -right-[70px] size-[220px] opacity-90 md:-top-20 md:-right-20 md:size-[420px]" />

        <div className="relative text-[11px] font-bold tracking-[2px] text-blush md:text-[13px]">{eyebrow}</div>
        <h2 className="relative m-0 mt-3.5 max-w-[1200px] font-serif text-[clamp(56px,10vw,168px)] leading-[0.9] font-normal tracking-[-0.03em] md:mt-5">
          Let&apos;s make something <em className="text-accent">lovely</em>.
        </h2>

        <div className="relative mt-7 flex flex-col gap-[18px] md:mt-16 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-8">
          <div className="flex flex-col gap-2.5 md:flex-row md:flex-wrap md:gap-3">
            <button
              type="button"
              onClick={() => openContact()}
              className="lift inline-flex min-h-[60px] items-center justify-center gap-3.5 rounded-full bg-accent px-[34px] text-[17px] font-bold text-ink md:min-h-[68px] md:text-[clamp(18px,2vw,24px)]"
            >
              Let&apos;s talk
              <ArrowRight aria-hidden="true" className="size-[22px]" strokeWidth={2} />
            </button>
            <a
              href={`mailto:${contact.email}`}
              className="lift inline-flex min-h-14 items-center justify-center rounded-full border-[1.5px] border-paper/50 px-8 text-base font-semibold text-paper no-underline md:min-h-[68px] md:text-[clamp(18px,2vw,24px)]"
            >
              {contact.emailDisplay}
            </a>
          </div>
          <nav aria-label="Social" className="flex flex-wrap gap-2 md:gap-2.5">
            {activeSocials(socials).map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-paper/35 px-[15px] py-3 text-[13px] text-paper no-underline transition-colors hover:bg-paper/10 md:px-5 md:py-[13px] md:text-[15px]"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="relative mt-9 flex gap-[22px] text-[15px] md:hidden">
          {mainNav.map((item) => (
            <Link key={item.to} to={item.to} className="py-2 text-paper">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="relative mt-[18px] flex flex-wrap items-center justify-between gap-4 border-t border-paper/20 pt-4 text-xs text-dusk md:mt-24 md:pt-6 md:text-sm xl:mt-[110px]">
          <span>
            © {brand.copyrightYear} {brand.name}
            <span className="hidden md:inline">. All rights reserved.</span>
          </span>
          {!backToTop && (
            <span className="hidden gap-6 md:flex">
              {mainNav.map((item) => (
                <Link key={item.to} to={item.to} className="text-paper hover:text-blush">
                  {item.label}
                </Link>
              ))}
            </span>
          )}
          <span className="font-serif text-[15px] text-blush italic md:text-lg">{brand.tagline}</span>
          {backToTop && (
            <a href="#top" className="hidden text-paper hover:text-blush md:inline">
              Back to top ↑
            </a>
          )}
        </div>
      </footer>
    </div>
  )
}
