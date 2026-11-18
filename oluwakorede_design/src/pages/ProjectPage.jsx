import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { CoverArt } from '@/components/projects/CoverArt'
import { Seo } from '@/components/Seo'
import { PlaceholderLabel } from '@/components/ui/Media'
import { RichText } from '@/components/ui/RichText'
import { useContent } from '@/hooks/useContent'
import { cn } from '@/lib/utils'
import NotFoundPage from './NotFoundPage'

const label = 'text-[11px] font-bold tracking-[1.8px] md:text-xs'

function MetaGrid({ items }) {
  return (
    <dl className="m-0 mt-10 grid grid-cols-2 gap-6 border-t-[1.5px] border-ink pt-6 md:mt-14 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
      {items.map(([term, value]) => (
        <div key={term}>
          <dt className={cn(label, 'text-wine')}>{term}</dt>
          <dd className="m-0 mt-2 text-[15px] md:text-[17px]">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

function HeroVisual({ project, cs }) {
  const image = cs.heroImage ?? project.cover?.image
  return (
    <section className="px-5 md:px-gutter">
      <div
        className="relative h-[clamp(320px,46vw,680px)] overflow-hidden rounded-3xl md:rounded-[32px]"
        style={{ containerType: 'size' }}
      >
        {image ? (
          <img src={image} alt={`${project.title} hero`} className="size-full object-cover" />
        ) : (
          <div role="img" aria-label={`${project.title} hero illustration`} className="size-full">
            <CoverArt art={cs.heroArt ?? project.cover?.art} title={project.title} />
          </div>
        )}
        {!image && cs.heroCaption && (
          <PlaceholderLabel className="absolute! right-4 bottom-4 bg-ink/70 md:right-7 md:bottom-6">{cs.heroCaption}</PlaceholderLabel>
        )}
      </div>
    </section>
  )
}

function Brief({ cs }) {
  if (!cs.challenge && !cs.approach) return null
  return (
    <section className="flex flex-wrap gap-x-20 gap-y-8 px-5 pt-[70px] pb-[60px] md:gap-y-12 md:px-gutter md:pt-[110px] md:pb-20">
      <h2 className="m-0 flex-[1_1_340px] font-serif text-[clamp(44px,5vw,80px)] leading-[0.95] font-normal tracking-[-0.02em]">
        The <em className="text-wine">brief</em>
      </h2>
      <div className="flex flex-[2_1_560px] flex-wrap gap-8 md:gap-10">
        {[
          ['THE CHALLENGE', cs.challenge],
          ['MY APPROACH', cs.approach],
        ]
          .filter(([, text]) => text)
          .map(([title, text]) => (
            <div key={title} className="flex-[1_1_260px]">
              <div className={cn(label, 'text-wine')}>{title}</div>
              <p className="m-0 mt-3 text-base leading-[1.7] text-plum md:text-[17px]">{text}</p>
            </div>
          ))}
      </div>
    </section>
  )
}

function SystemGrid({ project, cs }) {
  const hasSystem = cs.wordmark || cs.palette?.length || cs.typefaces
  if (!hasSystem) return null
  return (
    <section className="px-5 md:px-gutter">
      <div className="flex flex-wrap gap-4 md:gap-6">
        {cs.wordmark && (
          <div className="relative flex h-[320px] flex-[1_1_460px] flex-col items-center justify-center gap-[18px] rounded-3xl bg-ink md:h-[460px] md:rounded-[28px]">
            <div className="font-serif text-[110px] leading-[0.8] text-paper italic md:text-[160px]">{cs.wordmark}</div>
            {cs.wordmarkCaption && <div className="text-[13px] font-bold tracking-[6px] text-accent">{cs.wordmarkCaption}</div>}
            <span className={cn(label, 'absolute top-6 left-7 text-blush')}>01 · WORDMARK</span>
          </div>
        )}
        {cs.palette?.length > 0 && (
          <div className="flex h-[320px] flex-[1_1_460px] flex-col gap-[18px] rounded-3xl bg-sand p-6 md:h-[460px] md:rounded-[28px] md:p-7">
            <span className={cn(label, 'text-wine')}>02 · COLOUR</span>
            <div className="flex flex-1 gap-2 md:gap-3">
              {cs.palette.map((swatch) => (
                <div
                  key={swatch.name}
                  className={cn(
                    'flex flex-1 items-end rounded-[14px] p-3 text-xs font-semibold md:rounded-[18px] md:p-[18px] md:text-[13px]',
                    swatch.dark ? 'text-paper' : 'text-ink',
                  )}
                  style={{ background: swatch.color }}
                >
                  {swatch.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {cs.typefaces && (
          <div className="flex h-[300px] flex-[1_1_300px] flex-col justify-between rounded-3xl bg-blush p-6 md:h-[380px] md:rounded-[28px] md:p-7">
            <span className={cn(label, 'text-wine')}>03 · TYPE</span>
            <div>
              <div className="font-serif text-[88px] leading-[0.8] md:text-[110px]">
                Aa <em>Bb</em>
              </div>
              <div className="mt-4 text-sm">{cs.typefaces}</div>
            </div>
          </div>
        )}
        <div
          role="img"
          aria-label={`${project.title} social media posts`}
          className="flex h-[300px] flex-[2_1_560px] flex-col gap-5 rounded-3xl bg-wine p-6 md:h-[380px] md:rounded-[28px] md:p-7"
        >
          <span className={cn(label, 'text-blush')}>04 · SOCIAL KIT</span>
          <div className="flex flex-1 gap-2.5 md:gap-4">
            <div className="flex flex-1 items-center justify-center rounded-[14px] bg-paper p-3 text-center font-serif text-2xl italic md:text-[34px]">
              sip
              <br />
              slowly.
            </div>
            <div className="relative flex-1 overflow-hidden rounded-[14px] bg-accent">
              <div className="absolute top-1/2 left-1/2 size-[70px] -translate-1/2 rounded-full bg-ink md:size-[120px]" />
            </div>
            <div className="flex flex-1 items-end rounded-[14px] bg-blush p-3 text-[11px] font-bold md:p-4 md:text-[13px]">
              NEW: GINGER BLEND
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery({ project, images }) {
  if (!images?.length) return null
  return (
    <section className="px-5 pt-4 md:px-gutter md:pt-6">
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {images.map((img, i) => (
          <figure key={i} className={cn('m-0', i % 3 === 0 && 'md:col-span-2')}>
            <img src={img.image} alt={img.caption ?? `${project.title} image ${i + 1}`} loading="lazy" className="w-full rounded-3xl object-cover md:rounded-[28px]" />
            {img.caption && <figcaption className="mt-2 text-sm text-plum">{img.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const { projects } = useContent()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFoundPage />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]
  const cs = project.caseStudy ?? {}
  const meta = [
    cs.client && ['CLIENT', cs.client],
    ['YEAR', project.year],
    cs.role && ['MY ROLE', cs.role],
    ['DELIVERABLES', cs.deliverables ?? project.tags.join(', ')],
  ].filter(Boolean)

  return (
    <PageShell footer={{ eyebrow: 'LIKE WHAT YOU SEE?' }}>
      <Seo title={project.title} description={project.summary} />

      <section className="px-5 pt-3.5 pb-10 md:px-gutter md:pt-6 md:pb-14">
        <Link to="/work" className="inline-flex items-center gap-2 py-2.5 text-sm font-semibold text-wine no-underline hover:text-ink">
          <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={2} />
          All work
        </Link>
        <h1 className="m-0 mt-4 font-serif text-[clamp(60px,11vw,190px)] leading-[0.88] font-normal tracking-[-0.03em] md:mt-5">
          <RichText text={project.displayTitle ?? project.title} />
        </h1>
        <p className="m-0 mt-5 max-w-[720px] text-lg leading-[1.45] text-plum md:mt-7 md:text-[clamp(20px,1.8vw,26px)]">{project.summary}</p>
        <MetaGrid items={meta} />
      </section>

      <HeroVisual project={project} cs={cs} />
      <Brief cs={cs} />
      <SystemGrid project={project} cs={cs} />
      <Gallery project={project} images={cs.gallery} />

      {cs.outcome && (
        <section className="px-5 py-[70px] md:px-gutter md:py-[110px]">
          <div className="flex flex-wrap items-center gap-6 rounded-3xl bg-ink p-8 text-paper md:gap-10 md:rounded-[32px] md:p-[clamp(32px,5vw,72px)]">
            <h2 className="m-0 flex-[1_1_360px] font-serif text-[clamp(44px,5vw,80px)] leading-[0.95] font-normal">
              The <em className="text-accent">outcome</em>
            </h2>
            <p className="m-0 flex-[2_1_480px] text-base leading-[1.7] text-mist md:text-lg">{cs.outcome}</p>
          </div>
        </section>
      )}

      {next && next.id !== project.id && (
        <Link
          to={`/work/${next.slug}`}
          className={cn(
            'group block border-t-[1.5px] border-ink px-5 pt-[50px] pb-20 text-ink no-underline md:px-gutter md:pt-[60px] md:pb-[100px]',
            !cs.outcome && 'mt-[70px] md:mt-[110px]',
          )}
        >
          <div className="text-xs font-bold tracking-[2px] text-wine md:text-[13px]">NEXT PROJECT</div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-6">
            <span className="font-serif text-[clamp(52px,9vw,150px)] leading-[0.9] tracking-[-0.03em]">
              <RichText text={next.displayTitle ?? next.title} />
            </span>
            <span className="flex size-20 items-center justify-center rounded-full bg-accent transition-transform duration-300 group-hover:translate-x-2 md:size-[110px]">
              <ArrowRight aria-hidden="true" className="size-8 text-ink md:size-10" strokeWidth={1.8} />
            </span>
          </div>
        </Link>
      )}
    </PageShell>
  )
}
