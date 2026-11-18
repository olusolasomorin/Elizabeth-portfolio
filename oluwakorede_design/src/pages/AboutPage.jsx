import { ArrowDownToLine, Cpu, MapPin, Rocket, Sparkles, TrendingUp } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { ClientsStrip } from '@/components/sections/ClientsStrip'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/Button'
import { RotatingBadge } from '@/components/ui/Decor'
import { Media, Portrait } from '@/components/ui/Media'
import { RichText } from '@/components/ui/RichText'
import { Scribble } from '@/components/ui/Shapes'
import { MetaBar, SectionHeading } from '@/components/ui/Typography'
import { useContactDialog } from '@/hooks/useContactDialog'
import { useContent } from '@/hooks/useContent'
import { cn } from '@/lib/utils'

const statTones = [
  { card: 'bg-blush', label: 'text-cocoa' },
  { card: 'bg-sand', label: 'text-cocoa' },
  { card: 'bg-wine text-paper', label: 'text-petal', plain: true },
  { card: 'bg-accent', label: 'text-ink', plain: true },
]

const interestIcons = { rocket: Rocket, cpu: Cpu, trending: TrendingUp, pin: MapPin }

const polaroids = [
  { bg: 'bg-blush', tilt: '-rotate-4', offset: '' },
  { bg: 'bg-wine text-blush', tilt: 'rotate-3', offset: 'md:mt-[30px]' },
  { bg: 'bg-sand', tilt: '-rotate-2', offset: '' },
  { bg: 'bg-accent', tilt: 'rotate-5', offset: 'md:mt-6' },
]

function Hero() {
  const { aboutPage, settings } = useContent()
  const { openContact } = useContactDialog()
  const { media } = settings
  return (
    <section className="px-5 pt-3.5 pb-[60px] md:px-gutter md:pt-6 md:pb-[100px]">
      <MetaBar items={aboutPage.metaBar} mobileItems={aboutPage.metaBarMobile} />
      <div className="mt-8 flex flex-wrap items-center gap-x-[72px] gap-y-10 md:mt-14 md:gap-y-14">
        <div className="relative mx-auto w-full max-w-[340px] md:max-w-[460px] md:flex-[0_1_460px]">
          <Portrait
            src={media.aboutPortrait ?? media.portrait}
            alt={`Portrait of ${settings.brand.ownerName}`}
            className="w-full"
          />
          <RotatingBadge text={aboutPage.badgeText} className="absolute top-[30px] -right-2 size-[104px] md:-right-6 md:size-[140px]" />
        </div>
        <div className="flex flex-[1_1_520px] flex-col gap-5 md:gap-[26px]">
          <h1 className="m-0 font-serif text-[clamp(52px,7vw,116px)] leading-[0.95] font-normal tracking-[-0.02em] md:tracking-[-0.03em]">
            <RichText text={aboutPage.heading} />{' '}
            <span className="relative inline-block italic">
              {aboutPage.headingUnderlined}
              <Scribble strokeWidth={6} className="absolute -bottom-[0.06em] left-0 h-[0.2em] w-full" />
            </span>
          </h1>
          <p className="m-0 text-base leading-[1.65] text-plum md:text-[19px]">{aboutPage.lead}</p>
          <p className="m-0 text-[15px] leading-[1.7] text-plum md:text-[17px]">{aboutPage.body}</p>
          <div className="mt-1.5 flex gap-2.5 md:flex-wrap md:gap-3">
            <Button onClick={() => openContact()} variant="primary" className="max-md:flex-1 max-md:px-3">
              Let&apos;s talk →
            </Button>
            <Button
              href={media.cvUrl ?? undefined}
              download={media.cvUrl ? (media.cvFileName ?? '') : undefined}
              aria-disabled={!media.cvUrl}
              variant="outline"
              className="max-md:flex-1 max-md:px-3"
            >
              Download CV
              <ArrowDownToLine aria-hidden="true" className="size-[18px]" strokeWidth={2} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const { stats } = useContent().aboutPage
  return (
    <section className="px-5 pb-[60px] md:px-gutter md:pb-[100px]">
      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] md:gap-5">
        {stats.map((stat, i) => {
          const tone = statTones[i % statTones.length]
          return (
            <div key={i} className={cn('rounded-[20px] p-[18px] md:rounded-3xl md:p-[30px]', tone.card)}>
              <div className="font-serif text-[52px] leading-[0.9] md:text-[80px]">
                {stat.value}
                {stat.suffix && <em className={tone.plain ? '' : 'text-wine'}>{stat.suffix}</em>}
              </div>
              <div className={cn('mt-2.5 text-[13px] md:text-[15px]', tone.label)}>{stat.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Story() {
  const { story } = useContent().aboutPage
  return (
    <section className="flex flex-wrap gap-x-20 gap-y-6 px-5 pb-[70px] md:gap-y-10 md:px-gutter md:pb-[110px]">
      <SectionHeading text="My *story*" className="flex-[1_1_320px]" />
      <div className="flex flex-[2_1_560px] flex-col gap-6">
        <p className="m-0 text-base leading-[1.75] text-plum md:text-lg">{story.paragraphs[0]}</p>
        <blockquote className="m-0 my-3 border-l-[3px] border-accent py-2 pl-6 font-serif text-[30px] leading-[1.15] text-ink italic md:pl-8 md:text-[clamp(32px,3.2vw,48px)]">
          {story.quote}
        </blockquote>
        {story.paragraphs.slice(1).map((p, i) => (
          <p key={i} className="m-0 text-base leading-[1.75] text-plum md:text-lg">
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  const { experience } = useContent().aboutPage
  return (
    <section className="px-5 pb-[70px] md:px-gutter md:pb-[110px]">
      <SectionHeading text="Experience" className="mb-6 md:mb-10" />
      <ol className="m-0 list-none border-t-[1.5px] border-ink p-0">
        {experience.map((job, i) => (
          <li
            key={i}
            className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 border-b border-ink/25 py-5 transition-colors hover:bg-linen md:flex md:flex-wrap md:items-center md:gap-x-10 md:gap-y-3 md:px-4 md:py-7"
          >
            <span className="col-span-2 text-sm text-plum md:flex-[0_0_200px] md:text-[15px]">{job.period}</span>
            <span className="col-span-2 font-serif text-[28px] md:flex-[1_1_280px] md:text-[34px]">{job.role}</span>
            <span className="text-[15px] md:flex-[1_1_220px] md:text-base">{job.company}</span>
            <span className="text-[13px] font-semibold text-wine md:flex-[0_0_auto] md:text-sm">{job.location}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Credentials() {
  const { aboutPage, tools } = useContent()
  const { education, recognition, skills } = aboutPage
  return (
    <section className="flex flex-wrap gap-4 px-5 pb-[70px] md:gap-5 md:px-gutter md:pb-[110px]">
      <div className="flex flex-[1_1_340px] flex-col gap-[22px] rounded-3xl bg-sand p-7 md:rounded-[28px] md:p-9">
        <div className="text-xs font-bold tracking-[1.8px] text-wine">EDUCATION</div>
        {education.map((ed, i) => (
          <div key={i}>
            <div className="font-serif text-[26px] leading-[1.1] md:text-[30px]">{ed.title}</div>
            <div className="mt-1.5 text-[15px] text-plum">{ed.detail}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-[1_1_340px] flex-col gap-[22px] rounded-3xl bg-blush p-7 md:rounded-[28px] md:p-9">
        <div className="text-xs font-bold tracking-[1.8px] text-wine">{aboutPage.recognitionLabel ?? 'RECOGNITION'}</div>
        <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
          {recognition.map((r, i) => (
            <li
              key={i}
              className={cn('flex justify-between gap-4', i < recognition.length - 1 && 'border-b border-ink/20 pb-3.5')}
            >
              <span className="font-serif text-[24px] md:text-[26px]">{r.title}</span>
              <span className="text-sm">{r.year}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-[1_1_340px] flex-col gap-5 rounded-3xl bg-ink p-7 text-paper md:rounded-[28px] md:p-9">
        <div className="text-xs font-bold tracking-[1.8px] text-blush">SKILLS &amp; TOOLS</div>
        <div className="font-serif text-2xl leading-[1.35] md:text-[26px]">{skills}</div>
        <div className="mt-auto flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span key={tool} className="rounded-full border border-paper/35 px-3.5 py-2 text-[13px]">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function OutsideStudio() {
  const { interests } = useContent().aboutPage
  return (
    <section className="px-5 pb-[70px] md:px-gutter md:pb-[110px]">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6 md:mb-12">
        <SectionHeading text="Outside the *studio*" />
        <p className="m-0 max-w-[380px] text-[15px] leading-relaxed text-plum md:text-base">{interests.intro}</p>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 py-2.5 md:flex md:flex-wrap md:justify-center md:gap-7">
        {interests.items.map((item, i) => {
          const p = polaroids[i % polaroids.length]
          const Icon = interestIcons[item.icon] ?? Sparkles
          return (
            <figure
              key={i}
              className={cn('m-0 bg-polaroid p-2.5 pb-3.5 shadow-[0_16px_34px_rgba(43,15,30,.14)] md:flex-[0_1_260px] md:p-3.5 md:pb-5', p.tilt, p.offset)}
            >
              <Media
                src={item.image}
                alt={item.caption}
                label={`Illustration: ${item.caption}`}
                className={cn('flex h-[150px] items-center justify-center md:h-[260px]', p.bg)}
              >
                <Icon aria-hidden="true" strokeWidth={1.4} className="size-14 md:size-24" />
              </Media>
              <figcaption className="mt-2.5 text-center font-serif text-lg italic md:mt-3.5 md:text-[22px]">{item.caption}</figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}

export default function AboutPage() {
  const { aboutPage } = useContent()
  return (
    <PageShell>
      <Seo title="About" description={aboutPage.lead} />
      <Hero />
      <Stats />
      <Story />
      <Experience />
      <Credentials />
      <OutsideStudio />
      <section className="px-5 pb-20 md:px-gutter md:pb-[120px]">
        <ClientsStrip />
      </section>
    </PageShell>
  )
}
