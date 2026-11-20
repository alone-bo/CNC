// Industries overview and mega-menu content.
// Industry detail routes reuse the existing case-study data in content.ts.

import { unsplash } from './content'

export const industriesHero = {
  title: 'Industry-Focused Custom Rapid Manufacturing',
  description:
    'Specialized rapid manufacturing and prototyping services for robotics and automation, aerospace, automotive and medical device sectors. Our capabilities produce custom metal and plastic parts, supporting design verification, functional testing and low-volume production to meet rigorous industry requirements.',
  image: unsplash('1716191300020-b52dec5b70a8', 2000),
  alt: 'CNC machining equipment producing parts for demanding industries',
}

export type IndustryCard = {
  slug: string
  eyebrow: string
  title: string
  description: string
  cta: string
  image: string
  alt: string
}

export const industryCards: IndustryCard[] = [
  {
    slug: 'robotics-automation',
    eyebrow: 'Manufacturing for robotics and automation',
    title: 'Precision Manufacturing for Robotics and Automation',
    description:
      'From robotic joints and end effectors to structural frames and motion components, EZHONG supports the development of reliable custom robotics and automation parts through flexible manufacturing solutions.',
    cta: 'Check Robotics and Automation',
    image: unsplash('1716191299980-a6e8827ba10b', 900),
    alt: 'Industrial robot arm working on an automated production line',
  },
  {
    slug: 'aerospace',
    eyebrow: 'Aerospace parts manufacturing',
    title: 'Aerospace Prototyping and Parts Manufacturing',
    description:
      'Move complex aerospace projects from early design evaluation to inspection-ready, low-volume production with responsive engineering support and precision aerospace machining.',
    cta: 'Check Aerospace',
    image: unsplash('1540575861501-7cf05a4b125a', 900),
    alt: 'Aerospace turbine engine component detail',
  },
  {
    slug: 'automotive',
    eyebrow: 'Automotive part manufacturing',
    title: 'Automotive Prototyping and Parts Manufacturing',
    description:
      'EZHONG provides customized automotive manufacturing solutions. With precision manufacturing, prototyping and trial production services, we help automotive engineers, OEMs and Tier 1 suppliers accelerate innovation and ensure quality at every stage of development.',
    cta: 'Check Automotive Prototyping',
    image: unsplash('1769147339214-076740872485', 900),
    alt: 'Precision machined automotive components on engineering drawings',
  },
  {
    slug: 'medical-devices',
    eyebrow: 'Medical device rapid prototyping and manufacturing',
    title: 'Medical Device Prototyping and Rapid Manufacturing',
    description:
      'Deliver surgical instruments, robotic components, medical housings and complex components via precision CNC machining, 3D printing and rapid tooling. We support your medical product development across functional testing, engineering validation and low-volume end-part production phases.',
    cta: 'Check Medical Device Prototyping',
    image: unsplash('1531746790731-6c087fecd65a', 900),
    alt: 'White robotic hand for a medical rehabilitation device',
  },
]

export type IndustryMenuItem = {
  title: string
  description: string
  href: string
}

export const industriesMenu = {
  image: unsplash('1758873263563-5ba4aa330799', 900),
  alt: 'Engineer inspecting a precision machined component with a measuring tool',
  copy: 'Supporting demanding applications across robotics, aerospace, medical device, automotive, and other industries with advanced manufacturing capabilities.',
  href: '#/industries',
  items: [
    {
      title: 'Robotics and Automation',
      description: 'Complex geometries and tight tolerances for robotic systems',
      href: '#/industries/robotics-automation',
    },
    {
      title: 'Aerospace',
      description: 'Lightweight structures engineered for demanding flight environments',
      href: '#/industries/aerospace',
    },
    {
      title: 'Medical Devices',
      description: 'Fine details and consistent quality for medical equipment',
      href: '#/industries/medical-devices',
    },
    {
      title: 'Automotive',
      description: 'Rapid development from prototypes to production-ready parts',
      href: '#/industries/automotive',
    },
  ] as IndustryMenuItem[],
}
