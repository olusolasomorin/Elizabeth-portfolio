import { useMemo, useState } from 'react'

/**
 * Category filter state for a list of projects.
 * Returns tabs (with counts), the active id, a setter and the filtered list.
 */
export function useProjectFilter(projects, categories) {
  const [active, setActive] = useState('all')

  const tabs = useMemo(
    () => [
      { id: 'all', label: 'All work', count: projects.length },
      ...categories.map((c) => ({
        ...c,
        count: projects.filter((p) => p.category === c.id).length,
      })),
    ],
    [projects, categories],
  )

  const filtered = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [projects, active],
  )

  return { tabs, active, setActive, filtered }
}
