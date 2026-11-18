import { cq } from '@/lib/utils'
import { Flower } from '@/components/ui/Shapes'

/*
 * Illustrated project covers from the design, used until a real cover image is
 * uploaded. Sizes are expressed with `cq()` so each cover scales with the card
 * it sits in (520px design height), from mobile cards to the featured hero.
 */

const serif = { fontFamily: 'var(--font-serif)' }
const abs = (style) => ({ position: 'absolute', ...style })

function Packet({ width, height, band, bandColor, label, labelColor, background, children }) {
  return (
    <div
      style={{
        width: cq(width),
        height: cq(height),
        background,
        borderRadius: `${cq(16)} ${cq(16)} 0 0`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: cq(26),
        gap: cq(14),
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          ...serif,
          width: '100%',
          height: cq(band),
          background: bandColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontStyle: 'italic',
          fontSize: cq(30),
          color: labelColor,
        }}
      >
        Ọ̀rọ̀
      </div>
      {label}
      {children}
    </div>
  )
}

function Oro() {
  return (
    <div className="size-full bg-accent text-ink">
      <div className="rounded-full bg-wine" style={abs({ width: cq(300), height: cq(300), right: cq(-60), top: cq(-70) })} />
      <div className="font-bold tracking-[2px] uppercase" style={abs({ left: cq(44), top: cq(40), fontSize: cq(13) })}>
        Tea co. / Lagos
      </div>
      <div className="text-paper italic" style={abs({ ...serif, left: cq(36), bottom: cq(26), fontSize: cq(190), lineHeight: 0.8 })}>
        Ọ̀rọ̀
      </div>
      <div style={abs({ right: cq(64), bottom: 0 })}>
        <Packet
          width={150}
          height={250}
          band={56}
          background="var(--color-ink)"
          bandColor="var(--color-blush)"
          labelColor="var(--color-ink)"
          label={
            <div className="font-bold tracking-[2px] text-paper" style={{ fontSize: cq(10) }}>
              HIBISCUS · 100G
            </div>
          }
        >
          <div className="rounded-full border-[1.5px] border-accent" style={{ width: cq(54), height: cq(54) }} />
        </Packet>
      </div>
    </div>
  )
}

function Sade() {
  return (
    <div className="flex size-full items-center justify-center bg-blush text-ink">
      <div className="rounded-[999px_999px_0_0] bg-wine" style={abs({ left: '12%', bottom: 0, width: '38%', height: '62%' })} />
      <div className="rounded-[999px_999px_0_0] bg-paper" style={abs({ right: '12%', bottom: 0, width: '38%', height: '78%' })} />
      <div className="relative text-center" style={{ marginTop: cq(-40) }}>
        <div style={{ ...serif, fontSize: cq(120), lineHeight: 0.9 }}>sade</div>
        <div className="font-bold tracking-[4px] uppercase" style={{ fontSize: cq(12), marginTop: cq(10) }}>
          skin rituals
        </div>
      </div>
    </div>
  )
}

function TypeFest() {
  return (
    <div className="flex size-full flex-col justify-end bg-ink" style={{ padding: cq(40) }}>
      <div
        className="flex justify-between font-bold tracking-[2px] text-blush"
        style={abs({ top: cq(36), left: cq(40), right: cq(40), fontSize: cq(12) })}
      >
        <span>LAGOS</span>
        <span>MAR 14–16</span>
      </div>
      <div className="font-bold text-accent" style={{ fontSize: cq(118), lineHeight: 0.82, letterSpacing: cq(-6) }}>
        TYPE
      </div>
      <div className="text-paper italic" style={{ ...serif, fontSize: cq(132), lineHeight: 0.8 }}>
        fest
      </div>
      <div className="font-bold text-blush" style={{ fontSize: cq(118), lineHeight: 0.85, letterSpacing: cq(-6) }}>
        ’26
      </div>
      <div
        className="flex -rotate-[14deg] items-center justify-center rounded-full bg-accent text-center font-bold text-ink"
        style={abs({ right: cq(34), top: cq(120), width: cq(110), height: cq(110), fontSize: cq(13), lineHeight: 1.2 })}
      >
        FREE
        <br />
        ENTRY
      </div>
    </div>
  )
}

function Bloom() {
  return (
    <div className="size-full bg-sand text-ink">
      <Flower petal="var(--color-accent)" center="var(--color-paper)" style={abs({ width: cq(380), height: cq(380), left: cq(-60), top: cq(-40) })} />
      <div className="text-right" style={abs({ right: cq(48), bottom: cq(40) })}>
        <div className="text-wine italic" style={{ ...serif, fontSize: cq(150), lineHeight: 0.85 }}>
          Bloom
        </div>
        <div className="font-bold tracking-[4px]" style={{ fontSize: cq(13), marginTop: cq(8) }}>
          NEIGHBOURHOOD BAKERY
        </div>
      </div>
      <div
        className="flex rotate-8 flex-col items-center justify-center bg-paper shadow-[0_10px_30px_rgba(43,15,30,.12)]"
        style={abs({ right: cq(56), top: cq(48), width: cq(120), height: cq(160), borderRadius: cq(10), gap: cq(8) })}
      >
        <Flower petal="var(--color-wine)" center="var(--color-paper)" style={{ width: cq(56), height: cq(56) }} />
        <div className="text-wine italic" style={{ ...serif, fontSize: cq(22) }}>
          Bloom
        </div>
      </div>
    </div>
  )
}

function Lines({ widths, height = 6, gap = 12 }) {
  return widths.map((w, i) => (
    <div
      key={i}
      className="rounded-[3px] bg-ink/15"
      style={{ height: cq(height), width: w, marginTop: i === 0 ? 'auto' : cq(gap - 12) }}
    />
  ))
}

function FieldNotes() {
  const page = {
    width: cq(250),
    height: cq(340),
    padding: cq(26),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  }
  return (
    <div className="flex size-full items-center justify-center bg-wine text-ink">
      <div className="flex -rotate-4 shadow-[0_30px_60px_rgba(0,0,0,.3)]">
        <div className="border-r border-ink/15 bg-paper" style={{ ...page, gap: cq(12) }}>
          <div className="font-bold tracking-[2px]" style={{ fontSize: cq(10) }}>
            ISSUE 04 · SLOW LIVING
          </div>
          <div style={{ ...serif, fontSize: cq(46), lineHeight: 0.95 }}>
            The art of <em>doing less</em>
          </div>
          <Lines widths={['100%', '80%', '90%']} />
        </div>
        <div className="bg-paper" style={{ ...page, gap: cq(14) }}>
          <div className="relative overflow-hidden rounded-[999px_999px_0_0] bg-blush" style={{ height: cq(170), flex: 'none' }}>
            <div className="rounded-full bg-accent" style={abs({ width: cq(90), height: cq(90), left: cq(70), top: cq(40) })} />
          </div>
          <div className="rounded-[3px] bg-ink/15" style={{ height: cq(6) }} />
          <div className="rounded-[3px] bg-ink/15" style={{ height: cq(6), width: '85%' }} />
          <div className="rounded-[3px] bg-ink/15" style={{ height: cq(6), width: '70%' }} />
        </div>
      </div>
      <div className="text-blush italic" style={abs({ ...serif, left: cq(40), top: cq(36), fontSize: cq(34) })}>
        Field Notes
      </div>
    </div>
  )
}

function Kola() {
  const ring = (n) => cq(n)
  return (
    <div className="size-full bg-blush">
      <div
        className="flex items-center justify-center rounded-full bg-ink"
        style={abs({
          width: cq(300),
          height: cq(300),
          right: cq(-40),
          top: cq(90),
          boxShadow: `inset 0 0 0 ${ring(18)} #2B0F1E, inset 0 0 0 ${ring(19)} #4A3540, inset 0 0 0 ${ring(40)} #2B0F1E, inset 0 0 0 ${ring(41)} #4A3540, inset 0 0 0 ${ring(64)} #2B0F1E, inset 0 0 0 ${ring(65)} #4A3540`,
        })}
      >
        <div className="flex items-center justify-center rounded-full bg-accent" style={{ width: cq(96), height: cq(96) }}>
          <div className="rounded-full bg-ink" style={{ width: cq(12), height: cq(12) }} />
        </div>
      </div>
      <div
        className="flex flex-col justify-between bg-wine"
        style={abs({ left: cq(36), top: cq(90), width: cq(270), height: cq(300), padding: cq(26), boxSizing: 'border-box' })}
      >
        <div className="font-bold text-blush" style={{ fontSize: cq(64), letterSpacing: cq(-3), lineHeight: 0.85 }}>
          KOLA
        </div>
        <div className="text-paper italic" style={{ ...serif, fontSize: cq(30) }}>
          midnight sessions
        </div>
      </div>
    </div>
  )
}

function Ife() {
  return (
    <div className="flex size-full items-center justify-center bg-shell text-ink">
      <div className="relative flex items-center justify-center rounded-full bg-wine" style={{ width: cq(340), height: cq(340) }}>
        <svg aria-hidden="true" viewBox="0 0 200 200" style={abs({ width: cq(170), height: cq(170), top: cq(34), left: cq(85) })}>
          <g fill="#F4C6C0">
            <ellipse cx="100" cy="50" rx="24" ry="46" />
            <ellipse cx="100" cy="150" rx="24" ry="46" />
            <ellipse cx="50" cy="100" rx="46" ry="24" />
            <ellipse cx="150" cy="100" rx="46" ry="24" />
          </g>
          <circle cx="100" cy="100" r="20" fill="var(--color-accent)" />
        </svg>
        <div className="text-paper italic" style={abs({ ...serif, bottom: cq(56), fontSize: cq(72), lineHeight: 1 })}>
          Ìfẹ́
        </div>
      </div>
      <div className="font-bold tracking-[3px]" style={abs({ left: cq(32), top: cq(30), fontSize: cq(12) })}>
        FLORAL STUDIO
      </div>
    </div>
  )
}

function Harmattan() {
  return (
    <div className="size-full bg-sand text-ink">
      <div className="rounded-full bg-accent" style={abs({ width: cq(270), height: cq(270), right: cq(34), top: cq(46) })} />
      <div className="font-bold text-wine" style={abs({ left: cq(34), bottom: cq(34), fontSize: cq(104), lineHeight: 0.84, letterSpacing: cq(-4) })}>
        HARMA
        <br />
        TTAN
      </div>
      <div className="italic" style={abs({ ...serif, left: cq(36), top: cq(34), fontSize: cq(32) })}>
        a zine about dust &amp; light
      </div>
    </div>
  )
}

function Nkem() {
  return (
    <div className="flex size-full items-center justify-center bg-ink text-ink">
      <div className="relative" style={{ width: cq(250), height: cq(204), marginTop: cq(68) }}>
        <div className="bg-wine" style={abs({ left: cq(-11), right: cq(-11), top: cq(-41), height: cq(57), borderRadius: cq(9) })} />
        <div className="flex size-full items-center justify-center bg-blush" style={{ ...serif, fontSize: cq(72), borderRadius: `0 0 ${cq(9)} ${cq(9)}` }}>
          nkem
        </div>
      </div>
      <div className="rounded-full border-accent" style={abs({ right: cq(50), top: cq(61), width: cq(75), height: cq(75), borderWidth: cq(9) })} />
      <div className="font-bold tracking-[3px] text-blush" style={abs({ left: cq(34), top: cq(34), fontSize: cq(12) })}>
        FINE JEWELLERY
      </div>
    </div>
  )
}

function Pataki() {
  return (
    <div className="flex size-full items-end justify-center bg-accent text-ink">
      <div className="flex flex-col items-center">
        <div className="bg-ink" style={{ width: cq(50), height: cq(80), borderRadius: `${cq(9)} ${cq(9)} 0 0` }} />
        <div
          className="flex items-center justify-center bg-ink"
          style={{ width: cq(170), height: cq(306), borderRadius: `${cq(45)} ${cq(45)} 0 0` }}
        >
          <div className="w-full bg-blush text-center italic" style={{ ...serif, padding: `${cq(25)} 0`, fontSize: cq(45) }}>
            Pàtàkì
          </div>
        </div>
      </div>
      <div className="font-bold" style={abs({ left: cq(34), top: cq(34), fontSize: cq(50), lineHeight: 0.9, letterSpacing: cq(-2) })}>
        HOT
        <br />
        SAUCE
      </div>
    </div>
  )
}

/** Wide hero for the Ọ̀rọ̀ case study: the packaging range. */
function OroRange() {
  const packs = [
    { h: 271, bg: 'bg-ink', band: 'bg-blush', bandH: '22%', text: 'text-ink', name: 'HIBISCUS', nameColor: 'text-paper' },
    { h: 339, bg: 'bg-paper', band: 'bg-wine', bandH: '20%', text: 'text-paper', name: 'LEMONGRASS', nameColor: 'text-ink' },
    { h: 237, bg: 'bg-blush', band: 'bg-ink', bandH: '24%', text: 'text-blush', name: 'GINGER', nameColor: 'text-ink' },
  ]
  return (
    <div className="size-full bg-accent">
      <div className="aspect-square rounded-full bg-wine" style={abs({ width: '46%', right: '-8%', top: '-22%' })} />
      <div className="flex items-end" style={abs({ left: '8%', bottom: 0, gap: cq(22) })}>
        {packs.map((p) => (
          <div
            key={p.name}
            className={`flex flex-col items-center ${p.bg}`}
            style={{ width: cq(147), height: cq(p.h), paddingTop: cq(24), gap: cq(13), borderRadius: `${cq(14)} ${cq(14)} 0 0` }}
          >
            <div className={`flex w-full items-center justify-center italic ${p.band} ${p.text}`} style={{ ...serif, height: p.bandH, fontSize: cq(36) }}>
              Ọ̀rọ̀
            </div>
            <div className={`font-bold tracking-[2px] ${p.nameColor}`} style={{ fontSize: cq(9) }}>
              {p.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const ART = {
  'oro-range': OroRange,
  oro: Oro,
  sade: Sade,
  typefest: TypeFest,
  bloom: Bloom,
  fieldnotes: FieldNotes,
  kola: Kola,
  ife: Ife,
  harmattan: Harmattan,
  nkem: Nkem,
  pataki: Pataki,
}

/** Neutral fallback when a project has neither an image nor a known art key. */
function Fallback({ title }) {
  return (
    <div className="flex size-full items-center justify-center bg-sand p-[8%] text-center text-wine italic" style={{ ...serif, fontSize: cq(64), lineHeight: 0.95 }}>
      {title}
    </div>
  )
}

export function CoverArt({ art, title }) {
  const Art = ART[art]
  return Art ? <Art /> : <Fallback title={title} />
}
