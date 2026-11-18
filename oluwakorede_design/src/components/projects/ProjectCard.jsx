import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TagLine } from '@/components/ui/Typography'
import { cn } from '@/lib/utils'
import { ProjectCover } from './ProjectCover'

/**
 * Project card linking to the case study.
 * `size="lg"` is the home page card (520px cover, year on the right);
 * `size="md"` is the Work page grid card (440px cover).
 */
export function ProjectCard({ project, size = 'md', className }) {
  const large = size === 'lg'
  return (
    <Link
      to={`/work/${project.slug}`}
      className={cn('group flex min-w-0 flex-col text-ink no-underline', large ? 'gap-2.5 md:gap-[18px]' : 'gap-2 md:gap-4', className)}
    >
      <ProjectCover
        project={project}
        className={cn(
          large
            ? 'h-[300px] rounded-[20px] md:h-[440px] md:rounded-3xl xl:h-[520px]'
            : 'h-[220px] rounded-[18px] sm:h-[340px] md:h-[440px] md:rounded-[22px]',
        )}
      />
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <TagLine tags={project.tags} />
          <h3
            className={cn(
              'm-0 flex items-center gap-2.5 font-serif leading-[1.05] font-normal md:gap-3',
              large ? 'mt-2 text-[32px] md:text-[38px]' : 'mt-1.5 text-[22px] sm:text-[28px] md:mt-4 md:text-[34px]',
            )}
          >
            {project.title}
            <ArrowRight
              aria-hidden="true"
              strokeWidth={1.8}
              className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 md:size-[26px]"
            />
          </h3>
        </div>
        {large && <span className="hidden pt-1 text-sm text-plum md:inline">{project.year}</span>}
      </div>
    </Link>
  )
}
