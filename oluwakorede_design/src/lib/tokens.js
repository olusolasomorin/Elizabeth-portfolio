/**
 * Date tokens content editors can use in any text field:
 *   {month}      -> "November"
 *   {year}       -> "2026"
 *   {monthYear}  -> "November 2026"
 * They are resolved from the visitor's current date every time the site loads,
 * so text like "Booking new projects for {monthYear}" never goes stale.
 */
export function dateTokens(date = new Date()) {
  const month = date.toLocaleString('en-GB', { month: 'long' })
  const year = String(date.getFullYear())
  return { month, year, monthYear: `${month} ${year}` }
}

const TOKEN = /\{(month|year|monthYear)\}/g

/** Returns a deep copy of `value` with every date token in its strings replaced. */
export function resolveTokens(value, tokens = dateTokens()) {
  if (typeof value === 'string') return value.replace(TOKEN, (_, key) => tokens[key])
  if (Array.isArray(value)) return value.map((item) => resolveTokens(item, tokens))
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolveTokens(v, tokens)]))
  }
  return value
}
