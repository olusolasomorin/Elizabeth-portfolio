import { cn } from '@/lib/utils'
import { RichText } from './RichText'

/** Thin ruled strip of uppercase meta info that opens each page hero. */
export function MetaBar({ items, mobileItems, className }) {
  const small = mobileItems ?? [items[0], items[items.length - 1]]
  const base = 'justify-between gap-3 border-y border-ink/25 font-bold text-wine uppercase'
  return (
    <div className={className}>
      <div className={cn(base, 'flex py-2.5 text-[11px] tracking-[1.6px] md:hidden')}>
        {small.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
      <div className={cn(base, 'hidden flex-wrap py-3.5 text-[13px] font-semibold tracking-[1.6px] md:flex')}>
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}

/** Small uppercase label, e.g. "ABOUT ME". */
export function Eyebrow({ children, className }) {
  return <div className={cn('text-[11px] font-bold tracking-[2px] text-wine md:text-[13px]', className)}>{children}</div>
}

/** Large section heading (Instrument Serif). Accepts *emphasis* markup. */
export function SectionHeading({ text, as: Tag = 'h2', className, emClassName }) {
  return (
    <Tag
      className={cn(
        'm-0 font-serif text-[clamp(44px,6vw,96px)] leading-[0.95] font-normal tracking-[-0.02em]',
        className,
      )}
    >
      <RichText text={text} emClassName={emClassName} />
    </Tag>
  )
}

/** Uppercase category line above a project title. */
export function TagLine({ tags, className }) {
  return (
    <div className={cn('text-[11px] font-semibold tracking-[1.5px] text-wine uppercase md:text-xs md:tracking-[1.6px]', className)}>
      {tags.join(' · ')}
    </div>
  )
}
