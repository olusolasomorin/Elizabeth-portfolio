/**
 * Global site settings: identity, contact details, socials, theme and uploads.
 * Every field here is intended to be editable from the admin dashboard.
 *
 * Text fields support *asterisks* to render an italic, wine-coloured emphasis
 * (see components/ui/RichText.jsx).
 */
export const settings = {
  brand: {
    name: 'Oluwakorede Design',
    logoPrimary: 'oluwakorede',
    logoSecondary: 'design',
    ownerName: 'Oluwakorede',
    fullName: 'Adeola Oluwakorede Elizabeth',
    role: 'Graphic Designer | Content, Campaign & Video Design',
    location: 'Lagos',
    timezone: 'GMT+1',
    tagline: 'developed by olusolaedward',
    copyrightYear: '{year}',
  },

  theme: {
    wine: '#6E1F3D',
    accent: '#FF6A3D',
  },

  contact: {
    email: 'kadeola175@gmail.com',
    emailDisplay: 'kadeola175@gmail.com',
    phones: ['08034145754', '09117355093'],
    address: 'Oworo, Lagos, Nigeria',
    responseTime: '1–2 working days',
    whatsapp: { label: '+234 803 414 5754', url: 'https://wa.me/2348034145754' },
  },

  availability: {
    isBooking: true,
    // {monthYear} updates automatically to the current month (see src/lib/tokens.js).
    label: 'Booking new projects for {monthYear}',
    shortLabel: 'Booking projects for {monthYear}',
  },

  /** Socials with an empty `url` are hidden across the site until filled in. */
  socials: [
    { id: 'instagram', label: 'Instagram', short: 'Ig', handle: '', url: '' },
    { id: 'behance', label: 'Behance', short: 'Be', handle: '', url: '' },
    { id: 'dribbble', label: 'Dribbble', short: 'Dr', handle: '', url: '' },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      short: 'In',
      handle: '/in/adeola-elizabeth',
      url: 'https://www.linkedin.com/in/adeola-elizabeth-9a96683ba',
    },
  ],

  /** Uploaded media. `null` renders the designed placeholder. */
  media: {
    cvUrl: '/files/Adeola-Oluwakorede-Elizabeth-CV.pdf',
    cvFileName: 'Adeola-Oluwakorede-Elizabeth-CV.pdf',
    portrait: '/images/oluwakorede-headshot.jpg',
    aboutPortrait: '/images/oluwakorede-headshot.jpg',
    studioPhoto: '/images/oluwakorede-lagos.jpg',
    sketchbookPhoto: null,
  },

  seo: {
    title: 'Oluwakorede Design · Graphic Designer',
    description:
      'Adeola Oluwakorede Elizabeth is a graphic designer in Lagos creating campaign graphics, flyers, carousels, brand content and marketing videos.',
  },
}
