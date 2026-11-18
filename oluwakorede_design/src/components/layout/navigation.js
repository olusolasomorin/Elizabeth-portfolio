/** Primary navigation. Kept separate so the admin can later manage menu items. */
export const mainNav = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
]

export const mobileNav = [{ to: '/', label: 'Home' }, ...mainNav]
