/** Decorative brand motifs from the style guide. All are aria-hidden. */

/** Four-petal flower: four circles with a centre dot. */
export function Flower({ petal = 'var(--color-wine)', center = 'var(--color-accent)', className, style }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" className={className} style={style}>
      <g fill={petal}>
        <circle cx="100" cy="46" r="40" />
        <circle cx="154" cy="100" r="40" />
        <circle cx="100" cy="154" r="40" />
        <circle cx="46" cy="100" r="40" />
      </g>
      <circle cx="100" cy="100" r="30" fill={center} />
    </svg>
  )
}

/** Four-point sparkle star. */
export function Sparkle({ fill = 'var(--color-accent)', className, style }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} style={style}>
      <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0Z" fill={fill} />
    </svg>
  )
}

/** Hand-drawn underline that sits beneath an inline word. */
export function Scribble({ double = false, strokeWidth = 5, className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 30"
      preserveAspectRatio="none"
      className={className}
      style={{ overflow: 'visible' }}
    >
      <path
        d={double ? 'M4 20 C 60 6, 140 4, 296 14 M 30 26 C 110 16, 200 16, 270 22' : 'M4 20 C 60 6, 140 4, 296 14'}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
