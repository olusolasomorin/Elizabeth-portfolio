import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-wine text-paper',
  outline: 'border-[1.5px] border-ink text-ink',
  ink: 'bg-ink text-paper',
  accent: 'bg-accent text-ink',
  paper: 'bg-paper text-ink',
  'outline-light': 'border-[1.5px] border-paper/50 text-paper',
}

const sizes = {
  sm: 'min-h-11 px-[22px] text-[15px]',
  md: 'min-h-[54px] px-7 text-base',
  lg: 'min-h-[60px] px-[30px] text-[17px]',
  xl: 'min-h-[68px] px-[34px] text-[clamp(18px,2vw,24px)]',
}

/**
 * Pill button used across the site. Renders a router <Link> when `to` is set,
 * an <a> when `href` is set, and a <button> otherwise.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  children,
  type = 'button',
  ...props
}) {
  const classes = cn(
    'lift inline-flex items-center justify-center gap-2.5 rounded-full font-semibold no-underline',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
