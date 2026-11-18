/** Joins truthy class names. */
export function cn(...classes) {
  return classes.flat().filter(Boolean).join(' ')
}

/** Social links that have a URL set (empty ones stay hidden until the owner adds them). */
export function activeSocials(socials = []) {
  return socials.filter((s) => s.url && s.url !== '#')
}

/** Zero-padded index label: 0 -> "01". */
export function pad(index) {
  return String(index + 1).padStart(2, '0')
}

/** Converts a design-pixel value to a size relative to the nearest container (520px reference height). */
export function cq(px) {
  return `calc(${px} * 100cqmin / 520)`
}
