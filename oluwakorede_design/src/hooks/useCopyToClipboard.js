import { useCallback, useEffect, useRef, useState } from 'react'

/** Copies text and exposes a `copied` flag that resets after `resetMs`. */
export function useCopyToClipboard(resetMs = 2000) {
  const [copied, setCopied] = useState(false)
  const timer = useRef()

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        // Clipboard can be unavailable (insecure context); fall back silently.
      }
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), resetMs)
    },
    [resetMs],
  )

  return { copied, copy }
}
