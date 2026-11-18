import { PageShell } from '@/components/layout/PageShell'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/Button'
import { Flower } from '@/components/ui/Shapes'

export default function NotFoundPage() {
  return (
    <PageShell>
      <Seo title="Page not found" />
      <section className="flex flex-col items-center px-5 pt-16 pb-28 text-center md:px-gutter md:pt-24 md:pb-36">
        <Flower petal="var(--color-accent)" center="var(--color-paper)" className="size-28 md:size-36" />
        <h1 className="m-0 mt-8 font-serif text-[clamp(56px,9vw,136px)] leading-[0.92] font-normal tracking-[-0.03em]">
          Lost the <em className="text-wine">thread</em>.
        </h1>
        <p className="m-0 mt-5 max-w-[460px] text-base leading-relaxed text-plum md:text-lg">
          The page you&apos;re looking for has moved or never existed. Let&apos;s get you back to the good stuff.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" variant="primary">
            Back home
          </Button>
          <Button to="/work" variant="outline">
            See the work
          </Button>
        </div>
      </section>
    </PageShell>
  )
}
