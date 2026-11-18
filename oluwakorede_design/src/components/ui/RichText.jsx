import { Fragment } from 'react'

/**
 * Renders text where `*words*` become an italic emphasis, e.g.
 * "Selected *work*" -> Selected <em class="text-wine">work</em>.
 * Lets content editors keep the design's "one italic word per headline" rule.
 */
export function RichText({ text, emClassName = 'text-wine' }) {
  if (!text) return null
  const parts = String(text).split(/(\*[^*]+\*)/g)
  return parts.map((part, i) =>
    part.startsWith('*') && part.endsWith('*') && part.length > 2 ? (
      <em key={i} className={emClassName}>
        {part.slice(1, -1)}
      </em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}
