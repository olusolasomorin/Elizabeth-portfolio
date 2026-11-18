import { cn } from '@/lib/utils'

/**
 * Pill toggle group used to filter projects.
 * @param {{ id: string, label: string, count?: number }[]} tabs
 */
export function FilterTabs({ tabs, active, onChange, showCounts = false, className }) {
  return (
    <div role="group" aria-label="Filter projects" className={cn('flex flex-wrap gap-2', className)}>
      {tabs.map((tab) => {
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              'min-h-11 rounded-full border-[1.5px] px-3.5 text-[13px] font-semibold transition-colors md:px-[18px] md:text-sm',
              isActive ? 'border-wine bg-wine text-paper' : 'border-ink/30 bg-transparent text-ink hover:border-ink',
            )}
          >
            {tab.label}
            {showCounts && (
              <span className={cn('ml-1', isActive ? 'opacity-70' : 'opacity-60')}>({tab.count})</span>
            )}
          </button>
        )
      })}
    </div>
  )
}
