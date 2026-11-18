/**
 * Page copy and section content. Text supports *emphasis* (italic + wine).
 * Each block is shaped so the admin dashboard can edit it as a form.
 */

export const home = {
  metaBar: ['Graphic designer · Content, campaign & video', 'Based in Lagos / working worldwide', 'Portfolio ©{year}'],
  metaBarMobile: ['Graphic designer', 'Lagos / Worldwide'],
  intro:
    "Hi, I'm Oluwakorede. I design flyers, carousels, campaign graphics and marketing videos that help startups and growing businesses show up consistently and get remembered.",
  introShort:
    "Hi, I'm Oluwakorede. Campaign graphics, brand content and marketing videos for brands that want to be remembered.",
  badgeText: 'AVAILABLE FOR FREELANCE ✺ OPEN FOR FULL TIME ROLE ✺ ',
  badgeLines: ['AVAILABLE FOR', 'FREELANCE', '& FULL TIME', 'ROLES'],
  sticker: 'hello, nice to meet you!',
  marquee: [
    { text: 'Campaign graphics' },
    { text: 'Flyers & carousels', italic: true },
    { text: 'Brand content' },
    { text: 'Marketing videos', italic: true },
    { text: 'Social media' },
  ],
  servicesIntro:
    'From the first sketch to the final file, every project gets a clear strategy, a considered look and assets your team can actually use.',
  about: {
    heading: 'Part strategist, part *colour obsessive*.',
    paragraphs: [
      "I'm a graphic designer with 1 year of experience creating campaign graphics, brand content and promotional videos. I studied Integrated Science Education at Olabisi Onabanjo University and currently design for BrHave Spaces, a coworking and creative space in Lagos.",
      'My work sits where warmth meets clarity: bold type, considered colour and a strong eye for detail that keeps every brand consistent.',
    ],
    currently: 'Designing campaigns at BrHave Spaces',
  },
  testimonial: {
    quote: 'Good design should feel clear, warm and consistent everywhere a brand shows up, from the first flyer to the final frame of a video.',
    name: 'Adeola Oluwakorede Elizabeth',
    role: 'Graphic Designer, BrHave Spaces',
    avatar: null,
  },
}

export const clients = [
  { name: 'BrHave Spaces', logo: null },
]

export const tools = ['Canva', 'MS Word', 'Excel', 'PowerPoint', 'Google Docs', 'Google Sheets']

export const process = [
  { title: 'Listen', body: 'A discovery call and short brief so I understand your goals, audience and taste.' },
  { title: 'Explore', body: 'Moodboards and two or three design routes, so we can choose a direction together.' },
  { title: 'Craft', body: 'Refining the chosen route into a complete, polished system with rounds of feedback.' },
  { title: 'Launch', body: 'Final files, a brand guide and launch assets, plus support as you roll it out.' },
]

export const workPage = {
  metaBar: ['Work / Project archive', 'Branding · Packaging · Editorial · Posters', 'Updated {monthYear}'],
  metaBarMobile: ['Work / Archive', 'Updated {monthYear}'],
  intro:
    'A selection of identity, packaging, editorial and poster projects. Each one starts with a story and ends with a system people can use.',
  ctaHeading: 'Have a project like these *in mind?*',
  behanceLabel: 'More on Behance ↗',
}

export const servicesPage = {
  metaBar: ['Services', 'Campaigns · Social · Video · Content', 'Lagos, working remotely'],
  metaBarMobile: ['Services', 'Lagos / Remote'],
  intro:
    "Whether you're launching a campaign, promoting an event or keeping your socials active, I design graphics and videos that keep your brand consistent and your audience engaged.",
  marquee: [
    { text: 'Flyers' },
    { text: 'Carousels', italic: true },
    { text: 'Campaigns' },
    { text: 'Marketing videos', italic: true },
    { text: 'Social media' },
  ],
  packagesIntro: "Not sure which fits? Tell me about your campaign and I'll recommend the right option.",
}

export const services = [
  {
    id: 'campaign',
    title: 'Campaign *graphics*',
    summary: 'Flyers, posters and event graphics that announce your campaign, launch or event with energy.',
    description:
      'Eye-catching flyers and campaign visuals for events, launches and promotions, designed to keep your brand identity consistent across every material.',
    includes: [
      'Event & campaign flyers',
      'Posters & banners',
      'Key visual for the campaign',
      'Print & digital sizes',
      'Consistent brand styling',
      'Editable Canva files',
    ],
    timeline: '2–3 working days',
    price: '₦15,000',
    art: 'campaign',
    tone: 'sand',
  },
  {
    id: 'social',
    title: 'Carousels *&* social',
    summary: 'Carousels, posts and story graphics that keep your feed consistent and your audience engaged.',
    description:
      'Scroll-stopping carousels and social posts built on your brand, plus hands-on social media management so your pages stay active and on-brand.',
    includes: [
      'Carousel design',
      'Post & story graphics',
      'Reusable Canva templates',
      'Content planning visuals',
      'Social media management',
      'Platform-ready exports',
    ],
    timeline: '2–4 working days',
    price: '₦20,000',
    art: 'carousel',
    tone: 'blush',
  },
  {
    id: 'video',
    title: 'Marketing *videos*',
    summary: 'Short promotional videos for reels, stories and launches that make people stop scrolling.',
    description:
      'Promotional and marketing videos for campaigns, events and product launches, sized for reels, stories and every platform your audience uses.',
    includes: [
      'Promo & teaser videos',
      'Reels & story videos',
      'Event highlight videos',
      'Animated text & captions',
      'Brand-consistent styling',
      'Platform-ready exports',
    ],
    timeline: '3–7 working days',
    price: '₦30,000',
    art: 'video',
    tone: 'sand',
  },
  {
    id: 'content',
    title: 'Brand content *&* support',
    summary: 'Marketing materials plus the reporting and organisation that keep campaigns on track.',
    description:
      'Content for marketing and promotional materials, backed by the organisation behind it: performance reports, documentation and event or training logistics.',
    includes: [
      'Brand content creation',
      'Marketing & promo materials',
      'Weekly performance reports',
      'Event & training logistics',
      'Docs in Google Workspace & MS Office',
      'Ongoing design support',
    ],
    timeline: 'Ongoing',
    price: '₦80,000 / month',
    art: 'social',
    tone: 'ink',
  },
]

export const packages = [
  {
    id: 'event',
    eyebrow: 'FOR EVENTS & LAUNCHES',
    title: 'Event *Kit*',
    price: '₦35,000',
    period: '',
    features: ['Event flyer (print & digital)', 'Carousel announcement', 'Post & story sizes', 'Editable Canva files'],
    cta: 'Choose Event Kit',
    highlight: false,
    badge: '',
    tone: 'outline',
  },
  {
    id: 'campaign',
    eyebrow: 'FOR GROWING BRANDS',
    title: 'Campaign *Pack*',
    price: '₦100,000',
    period: '',
    features: [
      'Campaign key visual',
      'Flyers & posters',
      'Carousel series',
      'Promotional video',
      'Performance summary',
    ],
    cta: 'Choose Campaign Pack',
    highlight: true,
    badge: 'MOST COMPLETE',
    tone: 'wine',
  },
  {
    id: 'partner',
    eyebrow: 'ONGOING SUPPORT',
    title: 'Content *Partner*',
    price: '₦80,000',
    period: '/ month',
    features: [
      '12 designs each month',
      'Carousels & social posts',
      'Monthly marketing video',
      'Social media management',
      'Weekly reports',
    ],
    cta: 'Book a call',
    highlight: false,
    badge: '',
    tone: 'sand',
  },
]

export const faqs = [
  {
    question: 'How long does a project take?',
    answer:
      'Most flyers and carousels are ready within 2–4 working days. Campaign packs and marketing videos take 1–2 weeks depending on how many pieces we are creating.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Every project is quoted after a short chat about what you need. Single designs start from ₦15,000 and packages from ₦35,000. Share your budget range in the contact form and I will suggest the best fit.',
  },
  {
    question: 'What tools do you design with?',
    answer:
      'I design mainly in Canva, and use Google Workspace and Microsoft Office for planning, reports and documentation. You get your files in the formats you need, including editable Canva links.',
  },
  {
    question: 'Can you manage our social media too?',
    answer:
      'Yes. Alongside carousels and posts, I can manage your pages so content goes out consistently and stays on-brand.',
  },
  {
    question: 'How many revisions are included?',
    answer:
      'Each design includes 2 rounds of revisions, so there is room to get it just right.',
  },
  {
    question: 'What do I need to get started?',
    answer:
      'Just a short note about your brand, your goals and your timeline. Click Let’s talk, fill in the form and I will reply within 1–2 working days.',
  },
]

export const aboutPage = {
  metaBar: ['About', 'Graphic designer · Content, campaign & video', 'Lagos, GMT+1'],
  metaBarMobile: ['About', 'Lagos, GMT+1'],
  heading: "Hi, I'm *Oluwakorede*. I make brands feel",
  headingUnderlined: 'human.',
  lead: "I'm Adeola Oluwakorede Elizabeth, a graphic designer based in Oworo, Lagos, creating campaign graphics, brand content and promotional videos. I believe great design is equal parts listening, curiosity and craft.",
  body: 'With hands-on experience in campaign execution, brand content creation and promotional video design in a fast-paced coworking and creative environment, I bring a strong eye for detail and a genuine passion for startups, technology and business growth.',
  badgeText: 'DESIGNER ✺ DREAMER ✺ DETAIL LOVER ✺ ',
  stats: [
    { value: '1', suffix: '', label: 'year designing' },
    { value: '4', suffix: '', label: 'core design services' },
    { value: '2', suffix: '', label: 'languages: English & Yoruba' },
    { value: '∞', suffix: '', label: 'cups of zobo' },
  ],
  story: {
    paragraphs: [
      'I studied Integrated Science Education at Olabisi Onabanjo University, Ogun State. Since September 2025 I have been the graphic designer at BrHave Spaces in Lagos, designing flyers and carousel graphics for campaign events, creating content for marketing and promotional materials, and producing marketing videos.',
      'Alongside design, I compile weekly performance reports and contribute ideas to improve company events, training programmes and co-working activities. I love working with startups and growing businesses, and I bring clear communication, good time management and real team spirit to every project.',
    ],
    quote: 'Design is how I help a brand say the right thing, clearly and beautifully.',
  },
  experience: [
    {
      period: 'Sep 2025 – Present',
      role: 'Graphic Designer',
      company: 'BrHave Spaces · Content, Campaign & Video Design',
      location: 'Lagos, Nigeria',
    },
  ],
  education: [
    { title: 'B.Sc. Integrated Science Education', detail: 'Olabisi Onabanjo University, Ogun State, Nigeria' },
  ],
  recognitionLabel: 'CERTIFICATIONS & LANGUAGES',
  recognition: [
    { title: 'TRCN (Teachers Registration Council of Nigeria)', year: 'Certified' },
    { title: 'English', year: 'Fluent' },
    { title: 'Yoruba', year: 'Fluent' },
  ],
  skills:
    'Graphic design, flyer & carousel design, brand content creation, marketing video design, social media management',
  competencies: ['Communication', 'Attention to detail', 'Time management', 'Team collaboration'],
  interests: {
    intro: 'A few things that keep me curious and inspired beyond the screen.',
    items: [
      { caption: 'Startups & big ideas', icon: 'rocket', image: null },
      { caption: 'Technology', icon: 'cpu', image: null },
      { caption: 'Business growth', icon: 'trending', image: null },
      { caption: 'Lagos energy', icon: 'pin', image: null },
    ],
  },
}

export const contactForm = {
  services: [
    { id: 'campaign', label: 'Campaign graphics' },
    { id: 'social', label: 'Carousels & social' },
    { id: 'video', label: 'Marketing videos' },
    { id: 'content', label: 'Brand content' },
    { id: 'other', label: 'Something else' },
  ],
  budgets: ['Under ₦50,000', '₦50,000 – ₦150,000', '₦150,000+', 'Not sure yet'],
  timelines: ['ASAP', 'In 1 to 2 months', 'Just exploring'],
}
