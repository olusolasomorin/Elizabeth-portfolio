import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { FilterTabs } from '@/components/projects/FilterTabs'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectCover } from '@/components/projects/ProjectCover'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/Button'
import { RichText } from '@/components/ui/RichText'
import { Sparkle } from '@/components/ui/Shapes'
import { MetaBar, TagLine } from '@/components/ui/Typography'
import { useContactDialog } from '@/hooks/useContactDialog'
import { useContent } from '@/hooks/useContent'
import { useProjectFilter } from '@/hooks/useProjectFilter'
import { activeSocials } from '@/lib/utils'

function FeaturedProject({ project }) {
  return (
    <section className="px-5 pt-[22px] md:px-gutter md:pt-12">
      <Link to={`/work/${project.slug}`} className="group flex flex-col gap-2.5 text-ink no-underline md:flex-row md:flex-wrap md:items-end md:gap-x-12 md:gap-y-8">
        <div className="relative md:flex-[2_1_640px]">
          <ProjectCover project={project} eager className="h-[320px] rounded-[22px] md:h-[600px] md:rounded-[28px]" />
          <span className="absolute top-4 left-4 rounded-full bg-ink px-[11px] py-[7px] text-[10px] font-bold tracking-[1.5px] text-paper md:hidden">
            FEATURED
          </span>
        </div>
        <div className="flex flex-col gap-2.5 md:flex-[1_1_320px] md:gap-4 md:pb-2">
          <span className="hidden self-start rounded-full bg-ink px-3.5 py-2 text-xs font-bold tracking-[1.6px] text-paper md:inline">
            FEATURED PROJECT
          </span>
          <TagLine tags={[...project.tags, project.year]} />
          <h2 className="m-0 font-serif text-[34px] leading-[0.95] font-normal md:text-[64px]">
            <RichText text={project.displayTitle ?? project.title} emClassName="" />
            <span className="md:hidden"> →</span>
          </h2>
          <p className="m-0 hidden text-[17px] leading-relaxed text-plum md:block">{project.summary}</p>
          <span className="mt-2 hidden items-center gap-2.5 text-base font-semibold md:inline-flex">
            Read the case study
            <ArrowRight aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2} />
          </span>
        </div>
      </Link>
    </section>
  )
}

function CtaBand() {
  const { workPage, settings } = useContent()
  const { openContact } = useContactDialog()
  const behance = activeSocials(settings.socials).find((s) => s.id === 'behance')
  return (
    <section className="px-5 pb-[60px] md:px-gutter md:pb-[110px]">
      <div className="relative flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-3xl bg-blush p-7 md:rounded-[32px] md:p-[clamp(32px,5vw,64px)]">
        <Sparkle className="absolute -top-[30px] right-[30%] size-[90px] md:size-[120px]" />
        <h2 className="relative m-0 flex-[1_1_520px] font-serif text-[clamp(40px,4.6vw,72px)] leading-none font-normal">
          <RichText text={workPage.ctaHeading} />
        </h2>
        <div className="relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <Button onClick={() => openContact()} variant="primary" size="lg">
            Let&apos;s talk →
          </Button>
          {behance && (
            <Button href={behance.url} target="_blank" rel="noreferrer" variant="outline" size="lg">
              {workPage.behanceLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

export default function WorkPage() {
  const { projects, projectCategories, workPage } = useContent()
  const { tabs, active, setActive, filtered } = useProjectFilter(projects, projectCategories)
  const featured = filtered.find((p) => p.featured)
  const grid = filtered.filter((p) => p !== featured)

  return (
    <PageShell>
      <Seo title="Work" description={workPage.intro} />

      <section className="px-5 pt-3.5 pb-6 md:px-gutter md:pt-6 md:pb-16">
        <MetaBar items={workPage.metaBar} mobileItems={workPage.metaBarMobile} />
        <div className="mt-[26px] flex flex-wrap items-end justify-between gap-4 md:mt-14 md:gap-10">
          <h1 className="m-0 flex-[1_1_640px] font-serif text-[clamp(56px,9vw,150px)] leading-[0.92] font-normal tracking-[-0.02em] md:tracking-[-0.03em]">
            Things I&apos;ve{' '}
            <span aria-hidden="true" className="relative hidden h-[0.72em] w-[1.3em] overflow-hidden rounded-full bg-blush align-middle md:inline-block">
              <span className="absolute bottom-0 left-[0.18em] h-[0.52em] w-[0.36em] rounded-[0.18em_0.18em_0_0] bg-wine" />
              <span className="absolute top-[0.12em] left-[0.62em] size-[0.42em] rounded-full bg-accent" />
            </span>{' '}
            <em className="text-wine">made</em> with love.
          </h1>
          <p className="m-0 flex-[0_1_380px] text-[15px] leading-relaxed text-plum md:text-lg">{workPage.intro}</p>
        </div>
      </section>

      <section className="md:px-gutter">
        <div className="flex flex-wrap items-center justify-between gap-2 px-5 md:gap-5 md:border-t-[1.5px] md:border-b md:border-t-ink md:border-b-ink/25 md:px-0 md:py-5">
          <FilterTabs tabs={tabs} active={active} onChange={setActive} showCounts className="max-md:[&_span]:hidden" />
          <span className="pt-2 text-[13px] text-plum md:pt-0 md:text-sm" aria-live="polite">
            Showing {filtered.length} project{filtered.length === 1 ? '' : 's'}
          </span>
        </div>
      </section>

      {featured && <FeaturedProject project={featured} />}

      <section className="px-5 pt-[30px] pb-[50px] md:px-gutter md:pt-[72px] md:pb-[100px]">
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:flex md:flex-wrap md:gap-x-7 md:gap-y-14">
          {grid.map((project) => (
            <ProjectCard key={project.id} project={project} className="md:flex-[1_1_360px]" />
          ))}
        </div>
        {filtered.length === 0 && <p className="text-plum">No projects in this category yet.</p>}
      </section>

      <CtaBand />
    </PageShell>
  )
}
