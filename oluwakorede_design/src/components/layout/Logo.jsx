import { Link } from 'react-router-dom'
import { useContent } from '@/hooks/useContent'
import { cn } from '@/lib/utils'

export function Logo({ className, onClick, tone = 'ink' }) {
  const { brand } = useContent().settings
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${brand.name}, home`}
      className={cn(
        'font-serif text-[22px] leading-none tracking-[-0.5px] no-underline sm:text-[27px] md:text-[34px]',
        tone === 'ink' ? 'text-ink' : 'text-paper',
        className,
      )}
    >
      {brand.logoPrimary}
      <span className="text-accent">.</span>
      <span className="italic">{brand.logoSecondary}</span>
    </Link>
  )
}
