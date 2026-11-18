import { seedContent } from '@/data'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? ''

/**
 * Loads all site content.
 *
 * Today this resolves to the bundled seed content. Once the admin dashboard
 * backend exists, set VITE_API_BASE_URL and expose GET /content returning the
 * same shape as `seedContent`. Missing keys fall back to the seed so a partial
 * API response never breaks the site.
 */
export async function fetchSiteContent({ signal } = {}) {
  if (!API_BASE_URL) return seedContent

  const response = await fetch(`${API_BASE_URL}/content`, {
    headers: { Accept: 'application/json' },
    signal,
  })
  if (!response.ok) {
    throw new Error(`Failed to load content (${response.status})`)
  }
  const remote = await response.json()
  return { ...seedContent, ...remote }
}
