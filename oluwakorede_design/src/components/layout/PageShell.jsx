import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

/**
 * Page frame: header, page content on paper, and the dark footer.
 * The outer ink background shows behind the footer's rounded corners.
 */
export function PageShell({ children, footer }) {
  return (
    <div className="overflow-x-clip">
      <div className="bg-paper">
        <Header />
        <main id="main">{children}</main>
      </div>
      <Footer {...footer} />
    </div>
  )
}
