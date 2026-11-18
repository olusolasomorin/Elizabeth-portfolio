import { ArrowDownToLine, ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { FilterTabs } from '@/components/projects/FilterTabs'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ClientsStrip } from '@/components/sections/ClientsStrip'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { Button } from '@/components/ui/Button'
import { AvailabilityStatus, Chip, Marquee, RotatingBadge, StickerNote } from '@/components/ui/Decor'
import { Media, Portrait } from '@/components/ui/Media'
import { RichText } from '@/components/ui/RichText'
import { Scribble, Sparkle } from '@/components/ui/Shapes'
import { Eyebrow, MetaBar, SectionHeading } from '@/components/ui/Typography'
import { Seo } from '@/components/Seo'
import { useContactDialog } from '@/hooks/useContactDialog'
import { useContent } from '@/hooks/useContent'
import { useProjectFilter } from '@/hooks/useProjectFilter'
import { cn, pad } from '@/lib/utils'

function HeroHeadline() {
  return (
    <h1 className="m-0 mt-7 max-w-[1300px] font-serif text-[clamp(50px,8.4vw,136px)] leading-[0.98] font-normal tracking-[-0.02em] md:mt-14 md:tracking-[-0.03em]">
      I design <em className="text-wine">brands</em>{' '}
      <span aria-hidden="true" className="relative mx-[0.06em] inline-block h-[0.8em] w-[1.6em] overflow-hidden rounded-full bg-accent align-middle md:w-[1.7em]">
        <span className="absolute top-[0.09em] left-[0.16em] size-[0.62em] rounded-full bg-wine" />
        <span className="absolute -top-[0.1em] -right-[0.12em] hidden size-[0.9em] rounded-full border-[0.05em] border-paper md:block" />
      </span>{' '}
      that feel like someone{' '}
      <span aria-hidden="true" className="relative mx-[0.06em] hidden h-[0.8em] w-[1.25em] overflow-hidden rounded-full bg-blush align-middle md:inline-block">
        <span className="absolute bottom-0 left-[0.22em] h-[0.56em] w-[0.38em] rounded-[0.2em_0.2em_0_0] bg-wine" />
        <span className="absolute bottom-0 left-[0.66em] h-[0.42em] w-[0.38em] rounded-[0.2em_0.2em_0_0] bg-ink" />
      </span>{' '}
      you&apos;d{' '}
      <span className="relative inline-block italic">
        love
        <Scribble double className="absolute -bottom-[0.08em] -left-[2%] h-[0.22em] w-[104%]" />
      </span>{' '}
      to know.
    </h1>
  )
}

function Hero() {
  const { settings, home } = useContent()
  const { openContact } = useContactDialog()
  const { media, availability } = settings

  return (
    <section id="top" className="relative px-5 pt-3.5 pb-10 md:px-gutter md:pt-6 md:pb-20">
      <MetaBar items={home.metaBar} mobileItems={home.metaBarMobile} />
      <HeroHeadline />

      <div className="mt-[22px] flex flex-wrap items-end justify-between gap-8 md:mt-16 md:gap-12">
        <div className="flex max-w-[560px] flex-[1_1_420px] flex-col gap-6 md:gap-7">
          <p className="m-0 text-base leading-relaxed text-plum md:text-[19px]">
            <span className="md:hidden">{home.introShort}</span>
            <span className="hidden md:inline">{home.intro}</span>
          </p>
          <div className="flex gap-2.5 md:flex-wrap md:gap-3">
            <Button href="#work" variant="primary" className="max-md:flex-1 max-md:px-2.5 max-md:text-[15px]">
              <span className="md:hidden">Selected work</span>
              <span className="hidden md:inline">See selected work</span>
              <ArrowRight aria-hidden="true" className="hidden size-[18px] md:block" strokeWidth={2} />
            </Button>
            <Button
              href={media.cvUrl ?? undefined}
              download={media.cvUrl ? (media.cvFileName ?? '') : undefined}
              variant="outline"
              aria-disabled={!media.cvUrl}
              className="max-md:flex-1 max-md:px-2.5 max-md:text-[15px]"
            >
              Download CV
              <ArrowDownToLine aria-hidden="true" className="hidden size-[18px] md:block" strokeWidth={2} />
            </Button>
          </div>
          <button
            type="button"
            onClick={() => openContact()}
            className="lift -mt-3 flex items-center gap-3 self-stretch rounded-full border-[1.5px] border-ink bg-accent p-2 text-left text-ink shadow-[4px_4px_0_var(--color-ink)] md:mt-0 md:gap-3.5 md:self-start md:pr-2.5"
          >
            <span className="flex size-11 flex-none items-center justify-center rounded-full bg-ink">
              <MessageCircle aria-hidden="true" className="size-5 text-paper" strokeWidth={2} />
            </span>
            <span className="flex flex-1 flex-col leading-[1.15]">
              <span className="text-base font-bold md:text-[17px]">Let&apos;s talk</span>
              <span className="text-xs font-medium md:text-[13px]">Tell me about your project</span>
            </span>
            <span className="mr-1 ml-1.5 flex size-9 flex-none items-center justify-center rounded-full border-[1.5px] border-ink md:mr-0">
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
            </span>
          </button>
          {availability.isBooking && <AvailabilityStatus label={availability.label} className="-mt-2 text-plum md:mt-0" />}
        </div>

        <div className="relative mt-4 flex w-full justify-center md:mt-0 md:w-auto md:flex-[0_1_440px] md:justify-end">
          <Portrait
            src={media.portrait}
            alt={`Portrait of ${settings.brand.ownerName}`}
            className="w-[min(100%,340px)] md:w-[min(100%,400px)]"
          />
          <div
            aria-hidden="true"
            className="absolute -top-4 left-0 flex size-[112px] -rotate-12 flex-col items-center justify-center rounded-full bg-accent text-center text-[10px] leading-[1.3] font-bold tracking-[0.8px] md:hidden"
          >
            {home.badgeLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </div>
          <RotatingBadge text={home.badgeText} className="absolute -top-6 -left-4 hidden size-[164px] md:block" />
          <StickerNote className="absolute right-0 bottom-6 rotate-6 md:-right-3 md:bottom-10">{home.sticker}</StickerNote>
        </div>
      </div>
    </section>
  )
}

function SelectedWork() {
  const { projects, projectCategories } = useContent()
  const homeProjects = projects.filter((p) => p.showOnHome)
  const { tabs, active, setActive, filtered } = useProjectFilter(homeProjects, projectCategories)

  return (
    <section id="work" className="scroll-mt-6 px-5 pt-[60px] pb-[30px] md:px-gutter md:pt-[120px] md:pb-20">
      <div className="mb-[26px] flex flex-wrap items-end justify-between gap-7 md:mb-12">
        <h2 className="m-0 font-serif text-[clamp(48px,6vw,96px)] leading-[0.95] font-normal tracking-[-0.02em]">
          Selected <em className="text-wine">work</em>
          <sup className="ml-2 hidden align-top font-sans text-lg font-semibold text-plum md:inline">
            ({String(homeProjects.length).padStart(2, '0')})
          </sup>
        </h2>
        <FilterTabs tabs={tabs} active={active} onChange={setActive} className="hidden md:flex" />
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-x-7 md:gap-y-14">
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            size="lg"
            className={cn(
              project.layout === 'wide' ? 'md:flex-[1.4_1_520px]' : 'md:flex-[1_1_380px]',
              i >= 3 && 'max-md:hidden',
            )}
          />
        ))}
        {filtered.length === 0 && <p className="text-plum">No projects in this category yet.</p>}
      </div>

      <div className="mt-[30px] flex justify-center md:mt-[72px]">
        <Button to="/work" variant="outline" size="lg" className="max-md:w-full">
          See all projects
          <ArrowRight aria-hidden="true" className="size-[18px]" strokeWidth={2} />
        </Button>
      </div>
    </section>
  )
}

function WhatIDo() {
  const { services, home } = useContent()
  return (
    <section id="services" className="px-5 py-10 md:px-gutter md:py-20">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-6 md:mb-10">
        <SectionHeading text="What I *do*" />
        <div className="hidden max-w-[420px] flex-col items-start gap-4 md:flex">
          <p className="m-0 text-[17px] leading-relaxed text-plum">{home.servicesIntro}</p>
          <Link to="/services" className="py-2 text-[15px] font-semibold text-wine hover:text-ink">
            Explore services and packages →
          </Link>
        </div>
      </div>
      <div className="border-t-[1.5px] border-ink">
        {services.map((service, i) => (
          <Link
            key={service.id}
            to={`/services#${service.id}`}
            className="flex flex-wrap items-center gap-x-4 gap-y-4 border-b border-ink/25 py-5 text-ink no-underline transition-colors duration-300 hover:bg-linen md:gap-x-10 md:px-4 md:py-[34px]"
          >
            <span className="w-auto font-serif text-xl text-wine md:w-12 md:text-[28px]">{pad(i)}</span>
            <h3 className="m-0 flex-1 font-serif text-[30px] leading-none font-normal md:flex-[1_1_300px] md:text-[clamp(34px,3.6vw,54px)]">
              <RichText text={service.title} emClassName="" />
            </h3>
            <p className="m-0 hidden flex-[1_1_320px] text-base leading-relaxed text-plum md:block">{service.summary}</p>
            <span className="flex items-center justify-center md:size-[52px] md:rounded-full md:border-[1.5px] md:border-ink">
              <ArrowUpRight aria-hidden="true" className="size-5" strokeWidth={2} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

function AboutTeaser() {
  const { home, tools, settings } = useContent()
  const { media } = settings
  return (
    <section id="about" className="px-5 pt-[30px] pb-10 md:px-gutter md:py-[100px]">
      <div className="flex flex-wrap items-center gap-14 rounded-3xl bg-sand px-[22px] py-[26px] md:rounded-[32px] md:p-[clamp(28px,5vw,72px)]">
        <div className="relative hidden min-h-[460px] flex-[1_1_360px] md:block">
          <Media
            src={media.studioPhoto}
            alt={`${settings.brand.ownerName} in Lagos`}
            label="Studio or work-in-progress photo placeholder"
            imgClassName="object-center"
            className="absolute top-0 left-0 flex h-[300px] w-[62%] -rotate-4 items-center justify-center rounded-[18px] bg-wine text-xs font-bold tracking-[1.5px] text-blush"
          >
            [STUDIO PHOTO]
          </Media>
          <Media
            src={media.sketchbookPhoto}
            alt="Design work"
            label="Illustration: flyers, carousels and videos made in Canva"
            className="absolute top-[120px] right-0 flex h-[260px] w-[52%] rotate-5 flex-col items-center justify-center gap-3 overflow-hidden rounded-[18px] bg-blush p-6 text-center text-ink shadow-[0_20px_40px_rgba(43,15,30,.15)]"
          >
            <Sparkle className="size-10" />
            <span className="font-serif text-[32px] leading-[0.95]">
              flyers, carousels <em className="text-wine">&amp; videos</em>
            </span>
            <span className="text-[11px] font-bold tracking-[1.8px] text-wine">MADE IN CANVA</span>
          </Media>
          <div className="absolute bottom-0 left-[10%] max-w-[250px] -rotate-2 rounded-2xl bg-paper px-[22px] py-[18px] shadow-[0_16px_30px_rgba(43,15,30,.12)]">
            <div className="text-[11px] font-bold tracking-[1.8px] text-wine">CURRENTLY</div>
            <div className="mt-1.5 font-serif text-2xl leading-[1.15]">{home.about.currently}</div>
          </div>
        </div>

        <div className="flex flex-[1_1_440px] flex-col gap-4 md:gap-6">
          <Eyebrow>ABOUT ME</Eyebrow>
          <h2 className="m-0 font-serif text-[40px] leading-none font-normal tracking-[-0.02em] md:text-[clamp(40px,4.4vw,68px)]">
            <RichText text={home.about.heading} />
          </h2>
          {home.about.paragraphs.map((p, i) => (
            <p key={i} className={cn('m-0 text-[15px] leading-[1.65] text-plum md:text-[17px] md:leading-[1.7]', i > 0 && 'hidden md:block')}>
              {p}
            </p>
          ))}
          <div className="mt-1.5 hidden flex-wrap gap-2 md:flex">
            {tools.map((tool) => (
              <Chip key={tool}>{tool}</Chip>
            ))}
          </div>
          <Button to="/about" variant="outline" size="sm" className="self-start md:px-6">
            More about me
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
          </Button>
        </div>
      </div>
      <ClientsStrip className="mt-14 hidden md:flex" />
    </section>
  )
}

function Testimonial() {
  const { testimonial } = useContent().home
  return (
    <section className="px-5 pb-[70px] text-center md:px-gutter md:pt-10 md:pb-[120px]">
      <figure className="relative m-0 mx-auto max-w-[1100px]">
        <div aria-hidden="true" className="h-[54px] font-serif text-[120px] leading-[0.6] text-accent md:h-[90px] md:text-[200px]">
          “
        </div>
        <blockquote className="m-0 font-serif text-[30px] leading-[1.15] tracking-[-0.01em] md:text-[clamp(32px,3.8vw,56px)]">
          {testimonial.quote}
        </blockquote>
        <figcaption className="mt-[18px] inline-flex items-center gap-3.5 md:mt-8">
          {testimonial.avatar ? (
            <img src={testimonial.avatar} alt="" className="hidden size-[52px] rounded-full object-cover md:block" />
          ) : (
            <span className="hidden size-[52px] rounded-full bg-blush md:inline-block" />
          )}
          <span className="text-sm md:text-left">
            <b className="md:block md:text-base">{testimonial.name}</b>
            <span className="md:hidden"> · </span>
            <span className="md:block md:text-sm md:text-plum">{testimonial.role}</span>
          </span>
        </figcaption>
      </figure>
    </section>
  )
}

export default function HomePage() {
  const { home } = useContent()
  return (
    <PageShell footer={{ backToTop: true }}>
      <Seo />
      <Hero />
      <Marquee items={home.marquee} />
      <SelectedWork />
      <WhatIDo />
      <AboutTeaser />
      <ProcessSection />
      <Testimonial />
    </PageShell>
  )
}
