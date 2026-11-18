import { useId } from 'react'
import { cn } from '@/lib/utils'
import { Sparkle } from './Shapes'

/** Circular badge with text running around its edge; spins slowly. */
export function RotatingBadge({ text, className }) {
  const id = useId()
  // Fit any text around the circle: long text gets a smaller font, then is spaced to close the loop.
  const fontSize = Math.min(17, Math.max(10.5, (17 * 34) / text.length))
  return (
    <div className={cn('absolute', className)} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="size-full motion-safe:animate-spin-slow">
        <defs>
          <path id={id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="98" fill="var(--color-accent)" />
        <text fontFamily="DM Sans, sans-serif" fontSize={fontSize} fontWeight="700" fill="#2B0F1E">
          <textPath href={`#${id}`} textLength="486" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <Sparkle fill="#2B0F1E" className="absolute top-1/2 left-1/2 size-[27%] -translate-1/2" />
    </div>
  )
}

/** Tilted handwritten note with a hard drop shadow. */
export function StickerNote({ children, className }) {
  return (
    <div
      className={cn(
        'rounded-xl border-[1.5px] border-ink bg-paper px-3 py-2 font-serif text-lg italic shadow-[3px_3px_0_var(--color-ink)] md:rounded-[14px] md:px-4 md:py-3 md:text-[22px] md:shadow-[4px_4px_0_var(--color-ink)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

/** Green "booking" status dot with a label. */
export function AvailabilityStatus({ label, className, tone = 'dark' }) {
  return (
    <div className={cn('flex items-center gap-2.5 text-[13px] md:text-sm', className)}>
      <span
        className={cn(
          'size-2.5 shrink-0 rounded-full',
          tone === 'dark'
            ? 'bg-success shadow-[0_0_0_4px_rgba(47,158,98,.18)]'
            : 'bg-success-light shadow-[0_0_0_4px_rgba(95,211,154,.2)]',
        )}
      />
      {label}
    </div>
  )
}

/** Tilted, endlessly scrolling band of service names. */
export function Marquee({ items }) {
  const loop = [...items, ...items]
  return (
    <div aria-hidden="true" className="-mx-5 -rotate-[1.2deg] overflow-hidden bg-wine py-3.5 text-blush md:py-[22px]">
      <div className="flex w-max items-center gap-6 font-serif text-[28px] leading-none whitespace-nowrap motion-safe:animate-marquee md:gap-10 md:text-[44px]">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-6 md:gap-10">
            <span className={item.italic ? 'italic' : ''}>{item.text}</span>
            <Sparkle className="size-[18px] md:size-[26px]" />
          </span>
        ))}
      </div>
    </div>
  )
}

/** Rounded pill used for tools / skills. */
export function Chip({ children, className }) {
  return (
    <span className={cn('rounded-full bg-paper px-4 py-[9px] text-sm font-medium', className)}>{children}</span>
  )
}
