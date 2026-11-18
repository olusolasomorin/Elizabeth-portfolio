import { Sparkle } from '@/components/ui/Shapes'

/* Illustrations for the four service cards. Sized against a 380px-tall box and scaled with container units. */
const s = (px) => `calc(${px} * 100cqmin / 380)`
const serif = { fontFamily: 'var(--font-serif)' }

function Identity() {
  return (
    <div className="relative flex size-full items-center justify-center bg-ink">
      <div className="leading-[0.8] text-paper italic" style={{ ...serif, fontSize: s(150) }}>
        Aa
      </div>
      <div className="absolute rounded-full bg-accent" style={{ width: s(120), height: s(120), right: s(34), top: s(34) }} />
      <div className="absolute flex" style={{ left: s(30), bottom: s(28), gap: s(8) }}>
        {['bg-wine', 'bg-blush', 'bg-paper'].map((c) => (
          <span key={c} className={`rounded-full ${c}`} style={{ width: s(30), height: s(30) }} />
        ))}
      </div>
    </div>
  )
}

function Packaging() {
  const box = (h, bg, band) => (
    <div className={bg} style={{ width: s(110), height: s(h), borderRadius: `${s(14)} ${s(14)} 0 0` }}>
      <div className={band} style={{ marginTop: s(22), height: s(44) }} />
    </div>
  )
  return (
    <div className="flex size-full items-end justify-center bg-accent" style={{ gap: s(18) }}>
      {box(200, 'bg-ink', 'bg-blush')}
      {box(260, 'bg-paper', 'bg-wine')}
      {box(170, 'bg-wine', 'bg-paper')}
    </div>
  )
}

function Editorial() {
  const page = { width: s(150), height: s(210), padding: s(16), boxSizing: 'border-box' }
  return (
    <div className="flex size-full items-center justify-center bg-wine text-ink">
      <div className="flex -rotate-4 shadow-[0_24px_50px_rgba(0,0,0,.3)]">
        <div className="border-r border-ink/15 bg-paper" style={{ ...page, ...serif, fontSize: s(30), lineHeight: 0.95 }}>
          Slow <em>reading</em>
        </div>
        <div className="bg-paper" style={page}>
          <div className="rounded-[999px_999px_0_0] bg-blush" style={{ height: s(100) }} />
          <div className="rounded-[3px] bg-ink/15" style={{ height: s(5), marginTop: s(12) }} />
          <div className="w-4/5 rounded-[3px] bg-ink/15" style={{ height: s(5), marginTop: s(8) }} />
        </div>
      </div>
    </div>
  )
}

function Social() {
  const card = { width: s(130), height: s(230), borderRadius: s(18) }
  return (
    <div className="flex size-full items-center justify-center bg-blush" style={{ gap: s(14) }}>
      <div className="flex -rotate-6 items-center justify-center bg-paper text-center text-ink italic" style={{ ...card, ...serif, fontSize: s(30) }}>
        new
        <br />
        drop!
      </div>
      <div className="relative overflow-hidden bg-wine" style={card}>
        <div className="absolute rounded-full bg-accent" style={{ width: s(90), height: s(90), left: s(20), top: s(70) }} />
      </div>
      <div className="flex rotate-6 items-end bg-ink font-bold text-blush" style={{ ...card, padding: s(14), boxSizing: 'border-box', fontSize: s(12) }}>
        SWIPE →
      </div>
    </div>
  )
}

/** Event flyer pinned at an angle, with a "save the date" sticker. */
function Campaign() {
  return (
    <div className="relative flex size-full items-center justify-center bg-ink">
      <div
        className="flex -rotate-6 flex-col bg-paper text-ink shadow-[0_24px_50px_rgba(0,0,0,.35)]"
        style={{ width: s(190), height: s(260), padding: s(18), gap: s(10), boxSizing: 'border-box', borderRadius: s(6) }}
      >
        <div className="font-bold tracking-[2px] text-wine" style={{ fontSize: s(10) }}>
          LAGOS · 2026
        </div>
        <div style={{ ...serif, fontSize: s(44), lineHeight: 0.9 }}>
          Launch <em className="text-wine">night</em>
        </div>
        <div className="relative mt-auto overflow-hidden rounded-[999px_999px_0_0] bg-accent" style={{ height: s(90) }}>
          <div className="absolute rounded-full bg-wine" style={{ width: s(54), height: s(54), left: s(20), top: s(22) }} />
        </div>
        <div className="flex justify-between font-bold" style={{ fontSize: s(10) }}>
          <span>FRI · 6PM</span>
          <span>FREE ENTRY</span>
        </div>
      </div>
      <div
        className="absolute flex rotate-12 items-center justify-center rounded-full bg-accent text-center font-bold text-ink"
        style={{ width: s(96), height: s(96), right: s(40), top: s(36), fontSize: s(12), lineHeight: 1.2 }}
      >
        SAVE
        <br />
        THE DATE
      </div>
      <Sparkle fill="var(--color-blush)" className="absolute" style={{ width: s(34), height: s(34), left: s(44), bottom: s(46) }} />
    </div>
  )
}

/** Three carousel slides fanned out, with slide dots. */
function Carousel() {
  const slide = { width: s(150), height: s(150), borderRadius: s(16), boxSizing: 'border-box', padding: s(14) }
  return (
    <div className="relative flex size-full flex-col items-center justify-center bg-wine" style={{ gap: s(26) }}>
      <div className="flex items-center" style={{ gap: s(12) }}>
        <div className="flex -rotate-6 flex-col justify-end bg-paper text-ink" style={slide}>
          <div style={{ ...serif, fontSize: s(30), lineHeight: 0.9 }}>
            5 tips <em>to</em>
          </div>
        </div>
        <div className="relative z-10 flex flex-col justify-between bg-accent text-ink" style={{ ...slide, width: s(160), height: s(160) }}>
          <span className="font-bold" style={{ fontSize: s(11) }}>
            02 / 05
          </span>
          <div className="rounded-full bg-ink" style={{ width: s(56), height: s(56) }} />
        </div>
        <div className="flex rotate-6 items-end bg-blush font-bold text-ink" style={{ ...slide, fontSize: s(12) }}>
          SWIPE →
        </div>
      </div>
      <div className="flex" style={{ gap: s(8) }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={`rounded-full ${i === 1 ? 'bg-accent' : 'bg-paper/40'}`} style={{ width: s(9), height: s(9) }} />
        ))}
      </div>
    </div>
  )
}

/** Vertical video frame with a play button and progress bar. */
function Video() {
  return (
    <div className="relative flex size-full items-center justify-center bg-accent" style={{ gap: s(22) }}>
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden bg-ink"
        style={{ width: s(170), height: s(300), borderRadius: s(24) }}
      >
        <div className="absolute rounded-full bg-wine" style={{ width: s(180), height: s(180), top: s(-50), right: s(-70) }} />
        <div className="relative flex items-center justify-center rounded-full bg-paper" style={{ width: s(64), height: s(64) }}>
          <div
            style={{
              width: 0,
              height: 0,
              marginLeft: s(6),
              borderTop: `${s(12)} solid transparent`,
              borderBottom: `${s(12)} solid transparent`,
              borderLeft: `${s(20)} solid var(--color-ink)`,
            }}
          />
        </div>
        <div className="absolute text-paper italic" style={{ ...serif, left: s(16), bottom: s(34), fontSize: s(26) }}>
          new drop
        </div>
        <div className="absolute rounded-full bg-paper/30" style={{ left: s(16), right: s(16), bottom: s(18), height: s(4) }}>
          <div className="h-full w-2/5 rounded-full bg-accent" />
        </div>
      </div>
      <div className="flex flex-col" style={{ gap: s(12) }}>
        <div className="flex -rotate-3 items-center justify-center bg-paper font-bold text-ink" style={{ width: s(110), height: s(70), borderRadius: s(12), fontSize: s(12) }}>
          0:15 · REEL
        </div>
        <div className="flex rotate-3 items-center justify-center bg-blush font-bold text-ink" style={{ width: s(110), height: s(70), borderRadius: s(12), fontSize: s(12) }}>
          0:30 · PROMO
        </div>
      </div>
    </div>
  )
}

const ART = {
  campaign: Campaign,
  carousel: Carousel,
  video: Video,
  social: Social,
  identity: Identity,
  packaging: Packaging,
  editorial: Editorial,
}

export function ServiceArt({ art, image, title }) {
  if (image) return <img src={image} alt={title} loading="lazy" className="size-full object-cover" />
  const Art = ART[art]
  return Art ? (
    <Art />
  ) : (
    <div className="flex size-full items-center justify-center bg-ink">
      <Sparkle className="size-1/4" />
    </div>
  )
}
