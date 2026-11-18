import { cn } from '@/lib/utils'
import { CoverArt } from './CoverArt'

/**
 * Project cover: the uploaded image when present, otherwise the illustrated
 * cover art. The card controls the size via `className` (height + radius).
 * Inside a `group` link the cover zooms slightly on hover, as in the design.
 */
export function ProjectCover({ project, className, hover = true, eager = false }) {
  const { image, art } = project.cover ?? {}
  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className={cn(
          'relative size-full transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]',
          hover && 'group-hover:scale-[1.025]',
        )}
        style={{ containerType: 'size' }}
      >
        {image ? (
          <img
            src={image}
            alt={`${project.title} cover`}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            className="size-full object-cover"
          />
        ) : (
          <div role="img" aria-label={`${project.title} cover illustration`} className="size-full">
            <CoverArt art={art} title={project.title} />
          </div>
        )}
      </div>
    </div>
  )
}
