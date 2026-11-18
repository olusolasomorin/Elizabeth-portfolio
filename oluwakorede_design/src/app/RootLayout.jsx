import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { ContactDialog } from '@/components/contact/ContactDialog'
import { ContactDialogProvider } from '@/context/ContactDialogProvider'

/** Scrolls to `#hash` targets after navigation (e.g. /services#packaging). */
function HashScroller() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }))
    return () => cancelAnimationFrame(frame)
  }, [hash, pathname])
  return null
}

export function RootLayout() {
  return (
    <ContactDialogProvider>
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-ink px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Outlet />
      <ContactDialog />
      <ScrollRestoration getKey={(location) => location.pathname} />
      <HashScroller />
    </ContactDialogProvider>
  )
}
