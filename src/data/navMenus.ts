// Content for the Resources and About mega menus.

import { unsplash } from './content'

export type ContentMenuItem = {
  title: string
  description: string
  href: string
}

export const resourcesMenu = {
  image: unsplash('1713371398479-4410ca153b1f', 900),
  alt: 'Engineer measuring a precision aluminum component with a probe',
  copy: 'Gladly share insights and practical information on all aspects of manufacturing.',
  href: '#/inquiry',
  linkLabel: 'Get Engineering Support',
  items: [
    {
      title: 'Blogs',
      description: 'Insights, trends, and updates from manufacturing',
      href: '#/blogs',
    },
    {
      title: 'Case Study',
      description: 'Real-world projects, solutions, and practical experience',
      href: '#/cases',
    },
    {
      title: 'News',
      description: 'Follow our latest company news and updates',
      href: '#/news',
    },
    {
      title: 'Videos',
      description: 'Watch our teams, capabilities, and processes in action',
      href: '#/videos',
    },
  ] as ContentMenuItem[],
}

export const aboutMenu = {
  image: unsplash('1521737604893-d14cc237f11d', 900),
  alt: 'EZHONG engineering team collaborating in the workshop',
  copy: 'EZHONG is here to help, whenever you need us, ready to support you.',
  href: '#/inquiry',
  linkLabel: 'Contact Us',
  items: [
    {
      title: 'About EZHONG',
      description: 'A closer look at EZHONG, our values, and culture',
      href: '#/about',
    },
    {
      title: 'Testimonials',
      description: 'Hear what customers say about working with EZHONG',
      href: '#/testimonials',
    },
    {
      title: 'Quality Assurance',
      description: 'Learn how we maintain consistent quality standards',
      href: '#/quality-assurance',
    },
    {
      title: 'Frequently Asked Questions',
      description: 'Find answers to common manufacturing questions',
      href: '#/faq',
    },
  ] as ContentMenuItem[],
}
