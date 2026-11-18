import { useContext } from 'react'
import { ContentContext } from '@/context/contexts'

/** Returns the full site content object (see src/data/index.js for its shape). */
export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent must be used inside <ContentProvider>')
  return ctx.content
}

/** Returns loading status helpers for the content request. */
export function useContentStatus() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContentStatus must be used inside <ContentProvider>')
  return { status: ctx.status, error: ctx.error, refresh: ctx.refresh }
}
