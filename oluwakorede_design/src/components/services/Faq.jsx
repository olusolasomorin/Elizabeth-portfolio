import { Minus, Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { cn } from '@/lib/utils'

/** Accordion of questions; the first item starts open, as in the design. */
export function Faq({ items }) {
  const [open, setOpen] = useState(0)
  const baseId = useId()

  return (
    <div className="border-t-[1.5px] border-ink">
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `${baseId}-panel-${i}`
        const buttonId = `${baseId}-button-${i}`
        return (
          <div key={i} className="border-b border-ink/25">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-5 border-0 bg-transparent py-5 text-left font-serif text-2xl font-normal text-ink md:py-[26px] md:text-[30px]"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'flex size-11 flex-none items-center justify-center rounded-full transition-colors',
                    isOpen ? 'bg-wine text-paper' : 'border-[1.5px] border-ink',
                  )}
                >
                  {isOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="m-0 mb-6 max-w-[680px] text-[15px] leading-[1.7] text-plum md:mb-7 md:text-base">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
