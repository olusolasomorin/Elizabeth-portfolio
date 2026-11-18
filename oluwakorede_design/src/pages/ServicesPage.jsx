import { Check } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { Faq } from '@/components/services/Faq'
import { ServiceArt } from '@/components/services/ServiceArt'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/Button'
import { Marquee } from '@/components/ui/Decor'
import { RichText } from '@/components/ui/RichText'
import { Sparkle } from '@/components/ui/Shapes'
import { MetaBar, SectionHeading } from '@/components/ui/Typography'
import { useContactDialog } from '@/hooks/useContactDialog'
import { useContent } from '@/hooks/useContent'
import { cn, pad } from '@/lib/utils'

const serviceTones = {
  sand: { card: 'bg-sand', num: 'text-wine', body: 'text-plum', rule: 'border-ink/20', link: 'text-wine' },
  blush: { card: 'bg-blush', num: 'text-wine', body: 'text-cocoa', rule: 'border-ink/20', link: 'text-ink' },
  ink: { card: 'bg-ink text-paper', num: 'text-blush', body: 'text-mist', rule: 'border-paper/20', link: 'text-blush', em: 'text-accent' },
}

function ServiceCard({ service, index, onEnquire }) {
  const tone = serviceTones[service.tone] ?? serviceTones.sand
  const reversed = index % 2 === 1
  return (
    <article
      id={service.id}
      className={cn(
        'flex scroll-mt-6 flex-col gap-4 rounded-3xl px-4 pt-4 pb-6 md:flex-row md:flex-wrap md:items-stretch md:gap-x-16 md:gap-y-10 md:rounded-[32px] md:p-8',
        reversed && 'md:flex-wrap-reverse',
        tone.card,
      )}
    >
      <div
        className={cn('relative h-[240px] overflow-hidden rounded-[18px] md:h-auto md:min-h-[380px] md:flex-[1_1_380px] md:rounded-[22px]', reversed && 'md:order-2')}
      >
        <div className="absolute inset-0" style={{ containerType: 'size' }}>
          <ServiceArt art={service.art} image={service.image} title={service.title} />
        </div>
      </div>
      <div className="flex flex-col gap-4 px-1.5 md:flex-[1.3_1_460px] md:gap-[22px] md:px-0 md:py-2">
        <div className="flex items-baseline gap-3 md:gap-4">
          <span className={cn('font-serif text-xl md:text-[28px]', tone.num)}>{pad(index)}</span>
          <h2 className="m-0 font-serif text-4xl leading-none font-normal md:text-[clamp(40px,4vw,64px)]">
            <RichText text={service.title} emClassName={tone.em ?? ''} />
          </h2>
        </div>
        <p className={cn('m-0 text-[15px] leading-[1.65] md:text-[17px] md:leading-[1.7]', tone.body)}>{service.description}</p>
        <ul className="m-0 grid list-none grid-cols-1 gap-x-6 gap-y-2.5 p-0 text-sm sm:grid-cols-2 md:text-[15px]">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check aria-hidden="true" className="mt-0.5 size-4 flex-none" strokeWidth={2.5} />
              {item}
            </li>
          ))}
        </ul>
        <div className={cn('mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-[18px] text-sm', tone.rule)}>
          <span>
            <b>Timeline</b> · {service.timeline}
          </span>
          <span>
            <b>From</b> · {service.price}
          </span>
          <button
            type="button"
            onClick={() => onEnquire(service.id)}
            className={cn('py-2.5 text-[15px] font-semibold underline underline-offset-4 sm:ml-auto', tone.link)}
          >
            Enquire about this →
          </button>
        </div>
      </div>
    </article>
  )
}

const packageTones = {
  outline: { card: 'border-[1.5px] border-ink', eyebrow: 'text-wine', list: 'text-cocoa', btn: 'outline' },
  wine: { card: 'bg-wine text-paper', eyebrow: 'text-blush', list: 'text-petal', btn: 'paper' },
  sand: { card: 'bg-sand', eyebrow: 'text-wine', list: 'text-cocoa', btn: 'outline' },
}

function PackageCard({ pkg, onChoose }) {
  const tone = packageTones[pkg.tone] ?? packageTones.outline
  return (
    <div className={cn('relative flex flex-[1_1_320px] flex-col gap-[18px] rounded-3xl p-7 md:gap-[22px] md:rounded-[28px] md:p-9', tone.card)}>
      {pkg.badge && (
        <span className="absolute -top-[18px] right-6 rotate-4 rounded-full bg-accent px-4 py-2.5 text-xs font-bold tracking-[1.4px] text-ink">
          {pkg.badge}
        </span>
      )}
      <div className={cn('text-xs font-bold tracking-[1.8px]', tone.eyebrow)}>{pkg.eyebrow}</div>
      <h3 className="m-0 font-serif text-[40px] leading-none font-normal md:text-[44px]">
        <RichText text={pkg.title} emClassName="" />
      </h3>
      <div className="font-serif text-4xl md:text-[40px]">
        {pkg.price} {pkg.period && <span className="font-sans text-base">{pkg.period}</span>}
      </div>
      <ul className={cn('m-0 flex list-none flex-col gap-2.5 p-0 text-[15px]', tone.list)}>
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check aria-hidden="true" className="mt-0.5 size-4 flex-none" strokeWidth={2.5} />
            {f}
          </li>
        ))}
      </ul>
      <Button onClick={onChoose} variant={tone.btn} className="mt-auto w-full">
        {pkg.cta}
      </Button>
    </div>
  )
}

export default function ServicesPage() {
  const { services, packages, faqs, servicesPage } = useContent()
  const { openContact } = useContactDialog()

  return (
    <PageShell>
      <Seo title="Services" description={servicesPage.intro} />

      <section className="relative px-5 pt-3.5 pb-10 md:px-gutter md:pt-6 md:pb-20">
        <MetaBar items={servicesPage.metaBar} mobileItems={servicesPage.metaBarMobile} />
        <h1 className="m-0 mt-7 max-w-[1240px] font-serif text-[clamp(52px,8.4vw,136px)] leading-[0.96] font-normal tracking-[-0.02em] md:mt-14 md:tracking-[-0.03em]">
          Design that{' '}
          <span aria-hidden="true" className="relative inline-block h-[0.78em] w-[1.5em] overflow-hidden rounded-full bg-wine align-middle">
            <Sparkle className="absolute top-[0.11em] left-[0.18em] size-[0.56em]" />
            <span className="absolute top-[0.14em] right-[0.16em] size-[0.5em] rounded-full bg-blush" />
          </span>{' '}
          <em className="text-wine">works</em> as hard as you do.
        </h1>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6 md:mt-12 md:gap-8">
          <p className="m-0 flex-[0_1_560px] text-base leading-relaxed text-plum md:text-[19px]">{servicesPage.intro}</p>
          <div className="flex w-full gap-2.5 sm:w-auto md:gap-3">
            <Button onClick={() => openContact()} variant="primary" className="max-sm:flex-1">
              Let&apos;s talk →
            </Button>
            <Button href="#packages" variant="outline" className="max-sm:flex-1">
              See packages
            </Button>
          </div>
        </div>
      </section>

      <Marquee items={servicesPage.marquee} />

      <section className="flex flex-col gap-4 px-5 pt-[60px] pb-10 md:gap-8 md:px-gutter md:pt-[120px] md:pb-[60px]">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} onEnquire={(id) => openContact({ service: id })} />
        ))}
      </section>

      <ProcessSection />

      <section id="packages" className="scroll-mt-6 px-5 pt-5 pb-[60px] md:px-gutter md:pt-10 md:pb-[100px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6 md:mb-11">
          <SectionHeading text="Ways to *work* with me" />
          <p className="m-0 max-w-[400px] text-[15px] leading-relaxed text-plum md:text-base">{servicesPage.packagesIntro}</p>
        </div>
        <div className="flex flex-wrap items-stretch gap-6 md:gap-5">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onChoose={() => openContact()} />
          ))}
        </div>
      </section>

      <section className="flex flex-wrap gap-x-20 gap-y-6 px-5 pt-5 pb-20 md:gap-y-10 md:px-gutter md:pt-10 md:pb-[120px]">
        <div className="flex-[1_1_320px]">
          <SectionHeading text="Good *questions*" className="md:text-[clamp(48px,5vw,80px)]" />
          <p className="m-0 mt-4 text-[15px] leading-relaxed text-plum md:mt-5 md:text-base">
            Can&apos;t find your answer?{' '}
            <button type="button" onClick={() => openContact()} className="font-semibold text-wine underline hover:text-ink">
              Send me a message
            </button>
            .
          </p>
        </div>
        <div className="flex-[2_1_560px]">
          <Faq items={faqs} />
        </div>
      </section>
    </PageShell>
  )
}
