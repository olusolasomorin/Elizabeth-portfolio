import { useContent } from '@/hooks/useContent'
import { cn } from '@/lib/utils'

/** "Worked with" row of client / employer names or logos. */
export function ClientsStrip({ className }) {
  const { clients } = useContent()
  if (!clients?.length) return null
  return (
    <div className={cn('flex flex-wrap items-center gap-x-10 gap-y-5', className)}>
      <span className="text-[13px] font-bold tracking-[2px] text-plum">WORKED WITH</span>
      <ul className="m-0 flex flex-[1_1_600px] list-none flex-wrap gap-3 p-0 md:gap-4">
        {clients.map((client, i) => (
          <li
            key={i}
            className={cn(
              'flex h-16 flex-[0_1_auto] items-center justify-center rounded-xl px-8 text-[13px] text-plum',
              client.logo
                ? ''
                : client.name.startsWith('[')
                  ? 'border-[1.5px] border-dashed border-ink/35'
                  : 'border-[1.5px] border-ink/25 font-serif text-xl text-ink md:text-2xl',
            )}
          >
            {client.logo ? (
              <img src={client.logo} alt={client.name} loading="lazy" className="max-h-10 max-w-[80%] object-contain" />
            ) : (
              client.name
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
