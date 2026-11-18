import { SectionHeading } from '@/components/ui/Typography'
import { useContent } from '@/hooks/useContent'
import { cn, pad } from '@/lib/utils'

const tones = [
  { card: 'bg-blush', num: 'text-wine', body: 'text-cocoa' },
  { card: 'bg-sand', num: 'text-wine', body: 'text-cocoa' },
  { card: 'bg-wine text-paper', num: 'text-blush', body: 'text-petal' },
  { card: 'bg-accent', num: 'text-ink', body: 'text-ink' },
]

/** "How we'll work together": four tinted step cards. */
export function ProcessSection({ className }) {
  const { process } = useContent()
  return (
    <section className={cn('px-5 pt-5 pb-[60px] md:px-gutter md:pt-[60px] md:pb-[100px]', className)}>
      <SectionHeading text="How we'll *work* together" className="mb-5 md:mb-12" />
      <div className="grid grid-cols-2 gap-2.5 md:flex md:flex-wrap md:gap-5">
        {process.map((step, i) => {
          const tone = tones[i % tones.length]
          return (
            <div
              key={step.title}
              className={cn(
                'flex min-h-[140px] flex-col justify-between gap-3 rounded-[18px] p-[18px] md:min-h-[300px] md:flex-[1_1_240px] md:gap-8 md:rounded-3xl md:p-8',
                tone.card,
              )}
            >
              <span className={cn('font-serif text-4xl leading-none italic md:text-[64px]', tone.num)}>{pad(i)}</span>
              <div>
                <h3 className="m-0 font-serif text-[26px] font-normal md:mb-2.5 md:text-[34px]">{step.title}</h3>
                <p className={cn('m-0 hidden text-[15px] leading-relaxed md:block', tone.body)}>{step.body}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
