import { useCallback, useEffect, useMemo, useState } from 'react'
import { seedContent } from '@/data'
import { resolveTokens } from '@/lib/tokens'
import { fetchSiteContent } from '@/services/contentApi'
import { ContentContext } from './contexts'

/**
 * Loads site content once and makes it available through `useContent()`.
 * Seed content is rendered immediately so the first paint is never empty;
 * remote content (when configured) replaces it as soon as it arrives.
 */
export function ContentProvider({ children }) {
  const [content, setContent] = useState(seedContent)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)

  const load = useCallback(
    (signal) =>
      fetchSiteContent({ signal }).then(
        (data) => {
          setContent(data)
          setError(null)
          setStatus('ready')
        },
        (err) => {
          if (err.name === 'AbortError') return
          setError(err)
          setStatus('error')
        },
      ),
    [],
  )

  useEffect(() => {
    const controller = new AbortController()
    load(controller.signal)
    return () => controller.abort()
  }, [load])

  // Apply the editable brand colours to the CSS variables used by Tailwind.
  const { wine, accent } = content.settings.theme
  useEffect(() => {
    const root = document.documentElement
    if (wine) root.style.setProperty('--brand-wine', wine)
    if (accent) root.style.setProperty('--brand-accent', accent)
  }, [wine, accent])

  // Resolve {month}/{year}/{monthYear} tokens against today's date.
  const resolved = useMemo(() => resolveTokens(content), [content])

  const value = useMemo(
    () => ({
      content: resolved,
      status,
      error,
      refresh: () => {
        setStatus('loading')
        return load()
      },
    }),
    [resolved, status, error, load],
  )

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}
