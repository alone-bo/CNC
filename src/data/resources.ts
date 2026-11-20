// Content for the four Resources pages: Blogs, Case Study, News and Videos.

import { news, unsplash, type NewsItem } from './content'

export type ResourceHero = {
  eyebrow: string
  title: string
  description: string
  image: string
  alt: string
}

export const resourceHeroes = {
  blogs: {
    eyebrow: 'Resources · Blogs',
    title: 'Manufacturing Insights & Engineering Blogs',
    description:
      'Practical guidance on design for manufacturing, material selection, tolerances and surface finishing — written by the engineers who plan and produce the parts.',
    image: unsplash('1581094488379-6a10d04c0f04', 2000),
    alt: 'Engineers reviewing a technical layout together at a table',
  },
  cases: {
    eyebrow: 'Resources · Case Study',
    title: 'Customer Case Studies',
    description:
      'Real components, real production challenges. Explore how EZHONG supports medical, automotive, aerospace, energy and electronics programs from prototype through repeat production.',
    image: unsplash('1713371398485-7bde1bde9def', 2000),
    alt: 'CNC cutting tool machining a precision aluminum component with coolant',
  },
  news: {
    eyebrow: 'Resources · News',
    title: 'Company News & Announcements',
    description:
      'The latest from EZHONG — capacity investments, certifications, trade events and operational milestones across our machining and finishing facilities.',
    image: unsplash('1716191299980-a6e8827ba10b', 2000),
    alt: 'Industrial robot arm working on an automated production line',
  },
  videos: {
    eyebrow: 'Resources · Videos',
    title: 'Inside EZHONG: Manufacturing in Motion',
    description:
      'Watch CNC machining, laser cutting and tooling up close — short films from our workshop showing how drawings become production-ready parts.',
    image: '/videos/videos-hero.jpg',
    alt: 'CNC end mill cutting a metal plate with coolant flowing',
  },
} satisfies Record<string, ResourceHero>

/** Blog articles (default kind) power the Blogs page; `kind: 'news'` items power News. */
export const blogPosts: NewsItem[] = news.filter((item) => (item.kind ?? 'blog') === 'blog')
export const newsPosts: NewsItem[] = news.filter((item) => item.kind === 'news')

export type VideoItem = {
  slug: string
  title: string
  description: string
  category: string
  duration: string
  poster: string
  src: string
  alt: string
}

export const videoLibrary: VideoItem[] = [
  {
    slug: 'cnc-machining-coolant',
    title: 'CNC Machining in Action: Coolant and Chip Control',
    description:
      'A close-up of an end mill cutting a clamped plate, with coolant clearing chips and controlling heat at the cutting edge.',
    category: 'Machining',
    duration: '0:14',
    poster: '/videos/cnc-coolant-poster.jpg',
    src: '/videos/cnc-coolant.mp4',
    alt: 'CNC end mill cutting a metal plate with coolant flowing from nozzles',
  },
  {
    slug: 'high-precision-operation',
    title: 'High-Precision CNC Machining Up Close',
    description:
      'Fine passes and a rigid setup on a high-precision machining center, typical of tight-tolerance production work.',
    category: 'Precision',
    duration: '0:14',
    poster: '/videos/cnc-high-precision-poster.jpg',
    src: '/videos/cnc-high-precision.mp4',
    alt: 'Cutting tool finishing a pocket in a metal workpiece on a CNC machine',
  },
  {
    slug: 'precision-metalworking',
    title: 'Precision CNC Metalworking, Start to Finish',
    description:
      'Tool changes, cutting passes and the finish left behind — a short look at the subtractive process behind custom metal parts.',
    category: 'Metalworking',
    duration: '0:29',
    poster: '/videos/cnc-metalworking-poster.jpg',
    src: '/videos/cnc-metalworking.mp4',
    alt: 'CNC spindle and tool holder machining a metal component',
  },
  {
    slug: 'laser-cutting-shop-floor',
    title: 'Laser Cutting on the Shop Floor',
    description:
      'A flat-bed laser cutter profiling sheet metal for brackets, panels and enclosures before forming and finishing.',
    category: 'Fabrication',
    duration: '1:03',
    poster: '/videos/laser-cutting-poster.jpg',
    src: '/videos/laser-cutting.mp4',
    alt: 'Laser cutting head moving across a sheet of metal on a cutting bed',
  },
  {
    slug: 'milling-setup-operator',
    title: 'Inside a CNC Milling Setup with Operator',
    description:
      'Workholding, tool offsets and a first pass — the setup steps that determine repeatability for the rest of the batch.',
    category: 'Milling',
    duration: '0:36',
    poster: '/videos/cnc-milling-operator-poster.jpg',
    src: '/videos/cnc-milling-operator.mp4',
    alt: 'CNC milling machine cutting a clamped metal workpiece',
  },
  {
    slug: 'machining-tools-in-motion',
    title: 'Machining Tools and Equipment in Motion',
    description:
      'A short montage of cutting tools and machine motion from the workshop floor, from roughing passes to fine detail.',
    category: 'Tooling',
    duration: '1:00',
    poster: '/videos/machining-tools-poster.jpg',
    src: '/videos/machining-tools.mp4',
    alt: 'Cutting tool carving a curved channel into a metal surface',
  },
]
