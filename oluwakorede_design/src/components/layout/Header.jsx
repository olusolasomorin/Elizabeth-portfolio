import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContactDialog } from '@/hooks/useContactDialog'
import { cn } from '@/lib/utils'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { mainNav } from './navigation'

function MenuIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 9h16M4 15h10" />
    </svg>
  )
}

export function Header() {
  const { openContact } = useContactDialog()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex items-center justify-between gap-5 px-5 pt-[18px] pb-2.5 md:px-gutter md:py-7">
      <Logo />

      {/* Desktop / tablet navigation */}
      <nav aria-label="Main" className="hidden items-center gap-2 md:flex">
        {mainNav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'px-4 py-3 text-[15px] text-ink',
                isActive
                  ? 'font-semibold underline decoration-accent decoration-2 underline-offset-8'
                  : 'font-medium no-underline hover:text-wine',
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
        <button
          type="button"
          onClick={() => openContact()}
          className="lift ml-2 inline-flex items-center gap-2.5 rounded-full bg-ink px-[22px] py-[13px] text-[15px] font-semibold text-paper"
        >
          <span className="size-2 rounded-full bg-accent" />
          Let&apos;s talk
        </button>
      </nav>

      {/* Mobile actions */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          type="button"
          onClick={() => openContact()}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-3.5 text-[13px] font-semibold text-paper"
        >
          <span className="size-[7px] rounded-full bg-accent" />
          Let&apos;s talk
        </button>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
          className="flex size-11 items-center justify-center rounded-full border-[1.5px] border-ink text-ink"
        >
          <MenuIcon />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
