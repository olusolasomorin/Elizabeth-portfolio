import { useContent } from '@/hooks/useContent'

/**
 * Per-page document metadata. React 19 hoists <title> and <meta> into <head>.
 * @param {{ title?: string, description?: string }} props
 */
export function Seo({ title, description }) {
  const { seo, brand } = useContent().settings
  const fullTitle = title ? `${title} · ${brand.name}` : seo.title
  const desc = description ?? seo.description
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
    </>
  )
}
