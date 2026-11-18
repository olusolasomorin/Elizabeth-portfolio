import { cn } from '@/lib/utils'

/**
 * Shows an uploaded image when `src` is set, otherwise the designed placeholder
 * passed as children. Keeps layout identical in both states so uploads from the
 * admin dashboard drop straight in.
 */
export function Media({ src, alt = '', className, imgClassName, children, label, loading = 'lazy' }) {
  if (src) {
    return (
      <div className={cn('overflow-hidden', className)}>
        <img src={src} alt={alt} loading={loading} decoding="async" className={cn('size-full object-cover', imgClassName)} />
      </div>
    )
  }
  return (
    <div role="img" aria-label={label ?? alt ?? 'Image placeholder'} className={className}>
      {children}
    </div>
  )
}

/** Small dark pill that labels a placeholder, e.g. "[YOUR PORTRAIT]". */
export function PlaceholderLabel({ children, className }) {
  return (
    <span
      className={cn(
        'relative rounded-full bg-ink/60 px-3 py-2 text-[11px] font-bold tracking-[1.5px] text-paper uppercase md:text-xs',
        className,
      )}
    >
      {children}
    </span>
  )
}

/**
 * Round portrait used on Home and About: a circular photo with an offset blush
 * disc behind it. Size it with `className` (width); it is always square.
 */
export function Portrait({ src, alt, label = '[Your portrait]', className, imgClassName = 'object-center' }) {
  return (
    <div className={cn('relative aspect-square', className)}>
      <div aria-hidden="true" className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-full bg-blush md:translate-x-3.5 md:translate-y-3.5" />
      <Media
        src={src}
        alt={alt}
        label="Portrait placeholder"
        imgClassName={imgClassName}
        loading="eager"
        className="relative flex size-full items-end justify-center overflow-hidden rounded-full border-[1.5px] border-ink bg-blush"
      >
        <div className="absolute top-[16%] left-[22%] aspect-square w-[56%] rounded-full bg-wine" />
        <div className="absolute -bottom-[10%] left-[8%] h-[42%] w-[84%] rounded-[50%_50%_0_0] bg-ink" />
        <PlaceholderLabel className="mb-[14%]">{label}</PlaceholderLabel>
      </Media>
    </div>
  )
}
