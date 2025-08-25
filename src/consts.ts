import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'David Mindlin',
  description:
    "Game designer, programer, and software engineer. Passionate about roguelike, puzzle, and any type of system heavy games.",
  href: 'dmind44.github.io',
  author: 'Cojocaru David',
  locale: 'en-US',
  location: 'Los Angeles, CA',
  email: 'davidmindlin4@gmail.com'
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/blog',
    label: 'blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.github.com/dmind44',
    label: 'GitHub',
  },
  {
    href: '',
    label: 'Email',
  },
  {
    href: '3102102339',
    label: 'Phone',
  },
  {
    href: '',
    label: 'Instagram',
  },
  {
    href: '',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Instagram: 'lucide:instagram',
  Phone: 'lucide:phone',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Web Development': Category[]
  'Development Tools': Category[]
  'Hosting and Cloud Services': Category[]
  'Operating Systems': Category[]
  'Other Programming Languages and Technologies': Category[]
  'Web Servers': Category[]
  Databases: Category[]
  'Other Software': Category[]
}

export const technologies: Technologies = {
  'Web Development': [
    { text: 'HTML', logo: 'mdi:language-html5' },
    { text: 'JavaScript', logo: 'mdi:language-javascript' },
    { text: 'CSS', logo: 'mdi:language-css3' },
    { text: 'Astro', logo: 'simple-icons:astro' },
  ],
  'Development Tools': [
    { text: 'Neovim', logo: 'mdi:neovim' },
    { text: 'Git', logo: 'mdi:git' },
    { text: 'Docker', logo: 'mdi:docker' },
    { text: 'Kubernetes', logo: 'mdi:kubernetes' },
    { text: 'Datadog', logo: 'mdi:datadog' },

  ],
  'Hosting and Cloud Services': [
    { text: 'AWS', logo: 'mdi:aws' },
    { text: 'DigitalOcean', logo: 'mdi:digital-ocean' },
  ],
  'Operating Systems': [
    { text: 'Windows', logo: 'mdi:windows' },
    { text: 'Linux', logo: 'mdi:linux' },
    { text: 'MacOS', logo: 'mdi:apple' },
  ],
  'Other Programming Languages and Technologies': [
    { text: 'Lua', logo: 'mdi:language-lua' },
    { text: 'Golang', logo: 'mdi:language-go' },
    { text: 'Node.js', logo: 'mdi:nodejs' },
    { text: 'Unity', logo: 'mdi:unity' },
    { text: 'Rust', logo: 'mdi:language-rust' },
    { text: 'Bevy', logo: 'mdi:bevy-engine' },
    { text: 'Python', logo: 'mdi:language-python' },
  ],
  'Web Servers': [],
  Databases: [
    { text: 'MySQL', logo: 'cib:mysql' },
    { text: 'PostgreSql', logo: 'cib:postgresql' },
  ],
  'Other Software': [
  ],
}
