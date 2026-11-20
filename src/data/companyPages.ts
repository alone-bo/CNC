// Content for the About, Testimonials, Quality Assurance and FAQ pages.
// All figures and quotes are editable sample content pending verification.

import { asset } from '../lib/assets'
import { unsplash } from './content'

export type ImageAsset = { src: string; alt: string }

const aboutImage = (file: string) => asset(`/images/about/${file}`)

/* ------------------------------------------------------------------ */
/* About                                                              */
/* ------------------------------------------------------------------ */

export const aboutHero = {
  eyebrow: 'About EZHONG',
  titleLines: ['About EZHONG', 'Starts Here'],
  description:
    'A precision manufacturing partner for engineering teams that need prototypes, pilot builds and repeat production from one accountable workshop.',
  images: [
    {
      src: unsplash('1740209475472-aa7d280f7452', 2000),
      alt: 'CNC machining center cutting a clamped metal component',
    },
    { src: aboutImage('team-collaboration.jpg'), alt: 'EZHONG engineers reviewing a part together in the workshop' },
  ] as ImageAsset[],
}

export type AboutStatIcon = 'calendar' | 'projects' | 'target' | 'globe'

export const aboutStats: { icon: AboutStatIcon; value: string; label: string }[] = [
  { icon: 'calendar', value: '15+', label: 'Years of precision manufacturing' },
  { icon: 'projects', value: '2,000+', label: 'Projects delivered' },
  { icon: 'target', value: '±0.005 mm', label: 'Repeatable machining tolerance' },
  { icon: 'globe', value: '40+', label: 'Countries served' },
]

export const aboutIntro = {
  title: 'Your Reliable Manufacturing Partner for Prototyping and Mass Production',
  paragraphs: [
    'EZHONG combines [[CNC machining, fabrication, molding and finishing]] under one roof, so a drawing can move from engineering review to a finished, inspected part without passing through a chain of unrelated suppliers.',
    'Our teams support [[prototypes, bridge production and repeat orders]] for customers in medical, automotive, aerospace, energy and industrial electronics. Every project gets a named contact, a documented route and inspection criteria agreed before cutting begins.',
  ],
  video: {
    poster: unsplash('1581094488379-6a10d04c0f04', 1600),
    alt: 'Engineers reviewing a technical drawing together at a workbench',
    src: asset('/videos/cnc-metalworking.mp4'),
    label: 'Watch our company film',
  },
}

export const whoWeAre = {
  title: 'Who We Are',
  image: {
    src: unsplash('1602664876866-d3b33b77756b', 1400),
    alt: 'Five-axis cutting tool finishing a complex machined metal surface',
  },
  paragraphs: [
    'EZHONG started as a small machining workshop and grew into a [[full-service manufacturing partner]] for engineering teams around the world. The principle has not changed: understand the drawing, question what does not make sense, and build the part right the first time.',
    'Today our engineers, machinists and quality team work together under one roof. That integration shortens handoffs, keeps tolerances accountable and gives customers [[one point of contact from prototype to production]].',
  ],
  cards: [
    {
      title: 'Our Vision',
      text: 'To be the manufacturing partner engineers call first — trusted for precision, transparency and dependable delivery.',
    },
    {
      title: 'Our Mission',
      text: 'To turn complex drawings into production-ready parts through disciplined engineering, capable teams and quality-controlled processes.',
    },
  ],
}

export const aboutServices = {
  title: 'Our One-Stop Manufacturing Services',
  intro:
    'Five core processes, one production partner. Move between prototyping and volume manufacturing without rebuilding your supply chain.',
  tabs: [
    {
      key: 'cnc-machining',
      name: 'CNC Machining',
      title: 'CNC Machining',
      description:
        'High-precision milling and turning for complex metal and plastic parts, from one-off prototypes to repeat production batches.',
      points: [
        '3-, 4- and 5-axis milling',
        'CNC turning and mill-turn',
        'Tolerances to ±0.005 mm',
        '40+ metals and engineering plastics',
      ],
      image: unsplash('1624841970647-87dce8628d72', 1200),
      alt: 'Precision CNC-machined aluminum manifold block with milled channels and ports',
      href: '#/services/cnc-machining',
    },
    {
      key: '3d-printing',
      name: '3D Printing',
      title: '3D Printing',
      description:
        'Additive manufacturing for complex geometry, fit checks and functional prototypes before tooling investment.',
      points: [
        'SLA, SLS and FDM processes',
        'Metal printing for functional parts',
        'Rapid iteration in days',
        'Post-processing and finishing',
      ],
      image: unsplash('1611117775350-ac3950990985', 1200),
      alt: 'Row of industrial 3D printers producing prototype parts',
      href: '#/services/3d-printing',
    },
    {
      key: 'vacuum-casting',
      name: 'Vacuum Casting',
      title: 'Vacuum Casting',
      description:
        'Silicone mold casting for small batches of production-like plastic parts with consistent color and surface finish.',
      points: [
        'Low-cost bridge tooling',
        '25–100 parts per mold',
        'ABS, PC, PP and rubber-like resins',
        'Color matching available',
      ],
      image: unsplash('1625465586997-c3998f550c80', 1200),
      alt: 'White polyurethane vacuum-cast prototype part',
      href: '#/services/vacuum-casting',
    },
    {
      key: 'rapid-tooling',
      name: 'Rapid Tooling',
      title: 'Rapid Tooling',
      description:
        'Aluminum and steel molds that shorten the path from prototype to pilot production without over-investing in hard tooling.',
      points: [
        'Aluminum and steel tooling',
        'T1 samples and pilot batches',
        'Production-grade materials',
        'DFM and gate review',
      ],
      image: unsplash('1716191300020-b52dec5b70a8', 1200),
      alt: 'Machining and molding cells on a manufacturing floor',
      href: '#/services/rapid-tooling',
    },
    {
      key: 'sheet-metal',
      name: 'Sheet Metal Fabrication',
      title: 'Sheet Metal Fabrication',
      description:
        'Laser cutting, bending and welding for brackets, panels and enclosures, with hardware and finishing included.',
      points: [
        'Fiber laser cutting',
        'CNC bending and forming',
        'Welding and riveting',
        'Hardware insertion and finishing',
      ],
      image: unsplash('1739105329094-70e964758e05', 1200),
      alt: 'Stack of precision bent stainless steel sheet metal profiles',
      href: '#/services/sheet-metal-fabrication',
    },
  ],
}

export const aboutTeam = {
  title: 'Expert Team Supporting Every Stage of Your Project',
  intro:
    'A small, accountable team follows each order from quote to delivery — engineering, production and inspection working from the same drawing.',
  roles: [
    {
      role: 'Project Manager',
      image: aboutImage('tablet-review.jpg'),
      alt: 'EZHONG project team reviewing production details on a tablet',
      points: ['Single point of contact', 'Schedule and DFM review', 'Milestone updates'],
    },
    {
      role: 'Product Engineer',
      image: aboutImage('design-review.jpg'),
      alt: 'EZHONG engineer checking a component against production requirements',
      points: ['CAD and drawing review', 'Material and tolerance guidance', 'Inspection planning'],
    },
    {
      role: 'Production Team',
      image: aboutImage('cnc-operator.jpg'),
      alt: 'CNC operator setting up a machining center',
      points: ['CNC machining and fabrication', 'Setup and in-process checks', 'Finishing coordination'],
    },
    {
      role: 'Quality Control',
      image: aboutImage('micrometer.jpg'),
      alt: 'Digital micrometer measuring the thickness of a machined metal part',
      points: ['First-article inspection', 'CMM and dimensional reports', 'Final release documentation'],
    },
  ],
}

export const aboutWhy = {
  title: 'WHY Choose EZHONG',
  cards: [
    {
      title: 'Friendly Service',
      stats: [
        { value: '800+', label: 'Projects supported' },
        { value: '12 h', label: 'Average quote response' },
      ],
      text: 'A named project manager keeps communication clear, answers questions directly and flags schedule risks before they become delays.',
    },
    {
      title: 'Excellent Quality',
      stats: [
        { value: 'ISO 9001:2015', label: 'Certified quality system' },
        { value: '95+/100', label: 'First-pass inspection yield' },
      ],
      text: 'Documented inspection plans, calibrated equipment and traceable records keep each batch consistent with the approved first article.',
    },
    {
      title: 'Competitive Quotation',
      stats: [
        { value: '20+', label: 'Countries served' },
        { value: '30%+', label: 'Typical DFM cost reduction' },
      ],
      text: 'Value engineering and the right process route remove unnecessary cost without trading away the tolerances that matter.',
    },
    {
      title: 'Mass Production',
      stats: [
        { value: '300+', label: 'Batches per month' },
        { value: '20,000+', label: 'Parts shipped per month' },
      ],
      text: 'Stable capacity, documented setups and scheduled inspection support repeat orders across machining, molding and fabrication.',
    },
    {
      title: 'Fast Turnaround',
      stats: [
        { value: '3–5 days', label: 'Prototype lead time' },
        { value: '2–5 weeks', label: 'Production lead time' },
      ],
      text: 'Machining starts once the drawing and inspection criteria are approved, with progress updates at each production milestone.',
    },
  ],
}

export const aboutGallery: ImageAsset[] = [
  { src: aboutImage('team-collaboration.jpg'), alt: 'Engineers discussing a machining setup in the workshop' },
  { src: aboutImage('cnc-operator.jpg'), alt: 'Operator setting up a CNC machining center' },
  { src: aboutImage('design-review.jpg'), alt: 'Production engineer reviewing a part at a workbench' },
  { src: aboutImage('micrometer.jpg'), alt: 'Digital micrometer checking a machined metal edge' },
  { src: aboutImage('tablet-review.jpg'), alt: 'Shop floor team reviewing production data together' },
  { src: aboutImage('factory-team.jpg'), alt: 'Manufacturing team walking through the production floor' },
  { src: unsplash('1713371398479-4410ca153b1f', 1200), alt: 'Dial indicator checking a precision machined component' },
  { src: unsplash('1624841970647-87dce8628d72', 1200), alt: 'CNC-machined aluminum components after production' },
]

/* ------------------------------------------------------------------ */
/* Quality Assurance                                                  */
/* ------------------------------------------------------------------ */

export const qualityHero = {
  eyebrow: 'Quality Assurance',
  titleLines: ['Quality', 'Assurance'],
  description:
    'Quality is designed into the process, not sorted in at the end. From incoming material to final documentation, every stage has a defined check and a record.',
  bullets: [
    'ISO 9001:2015-aligned quality management',
    'First-article and in-process inspection',
    'CMM reports and material traceability',
    'Documented corrective action and improvement',
  ],
  images: [
    {
      src: unsplash('1713371398479-4410ca153b1f', 2000),
      alt: 'Dial indicator measuring a precision machined metal component',
    },
  ] as ImageAsset[],
}

export const qualityIntro = {
  title: 'Quality Management Systems for the EZHONG Machine Shop',
  paragraphs: [
    'Our quality system covers quoting, engineering review, incoming material, machining, finishing, inspection and release. Procedures are [[documented and audited]], and every order can be traced back to the drawing revision, material lot and inspection record used to produce it.',
    'Calibrated equipment, trained operators and defined acceptance criteria keep results repeatable across prototypes and production batches. When something does not conform, it is [[contained, reviewed and corrected]] before it reaches the customer.',
  ],
  certifications: [
    { title: 'ISO 9001:2015 Quality Management Certificate', note: 'Available on request' },
    { title: 'Inspection & Test Plan (ITP)', note: 'Process-specific documentation' },
    { title: 'Material Traceability Policy', note: 'Mill certificates and lot records' },
  ],
  image: {
    src: aboutImage('design-review.jpg'),
    alt: 'Quality engineer reviewing a manufactured component in the workshop',
  },
}

export const qualityPolicy = {
  title: 'Our Quality Policy',
  intro: 'Three principles guide how we plan work, control variation and improve every production cycle.',
  cards: [
    {
      title: 'Scientific Management',
      points: [
        'Documented procedures for every process',
        'Calibrated equipment and defined acceptance criteria',
        'Traceable records from material lot to final report',
      ],
    },
    {
      title: 'Lean Production',
      points: [
        'Setup and toolpath optimization',
        'Waste and variation reduction',
        'Continuous flow from quote to shipment',
      ],
    },
    {
      title: 'Continuous Improvement',
      points: [
        'Corrective action tracking',
        'Root-cause review for non-conformances',
        'Regular quality performance reviews',
      ],
    },
  ],
}

export const qualityProcedures = {
  title: 'Precision Inspection and Quality Control Procedures in Our CNC Machine Shop',
  intro:
    'Four checkpoints follow every order. The depth of inspection scales with the drawing, the material and the consequence of a missed feature.',
  image: {
    src: aboutImage('micrometer.jpg'),
    alt: 'Gloved technician measuring a machined part with a digital micrometer',
  },
  steps: [
    {
      title: 'Incoming Inspection',
      text: 'Material grade, mill certificates and incoming condition are checked before the lot is released to production.',
    },
    {
      title: 'First Article Inspection',
      text: 'The first part is measured against every critical feature and documented before the batch continues.',
    },
    {
      title: 'In-Process Inspection',
      text: 'Operators and QC check dimensions at defined intervals, with results reviewed for drift or tool wear.',
    },
    {
      title: 'Final Inspection & Reports',
      text: 'Final parts are checked for dimensions, finish and function, then packed with the agreed documentation.',
    },
  ],
}

export type QualityProcessIcon =
  | 'clipboard'
  | 'file-search'
  | 'scan'
  | 'gauge'
  | 'cog'
  | 'shield'
  | 'file-check'
  | 'package'

export const qualityProcess = {
  title: 'Our End-to-End Quality Control Process',
  intro:
    'Eight stages connect engineering intent to the part in the box. Each stage has an owner, a check and a record that can be reviewed later.',
  steps: [
    {
      icon: 'clipboard',
      title: 'Requirements Review',
      text: 'Drawings, tolerances and inspection criteria are reviewed before quoting.',
    },
    {
      icon: 'file-search',
      title: 'Material & Supplier Control',
      text: 'Certificates and incoming checks verify material before machining.',
    },
    {
      icon: 'scan',
      title: 'First Article Inspection',
      text: 'Critical features are measured and documented against the drawing.',
    },
    {
      icon: 'gauge',
      title: 'In-Process Monitoring',
      text: 'Dimensions are checked at defined intervals during production.',
    },
    {
      icon: 'cog',
      title: 'Final Dimensional Inspection',
      text: 'CMM and hand tools confirm specified features before release.',
    },
    {
      icon: 'shield',
      title: 'Surface & Visual Checks',
      text: 'Finish, burrs, threads and cosmetic requirements are inspected.',
    },
    {
      icon: 'file-check',
      title: 'Documentation & Traceability',
      text: 'Reports, certificates and lot records are compiled for the order.',
    },
    {
      icon: 'package',
      title: 'Packing & Release',
      text: 'Parts are protected, labeled and released with the agreed documents.',
    },
  ] as { icon: QualityProcessIcon; title: string; text: string }[],
}

export const qualityCapabilities = {
  title: 'Comprehensive Quality Inspection Capabilities',
  intro: 'The right instrument for each requirement — from a quick shop-floor check to a full CMM report.',
  cards: [
    {
      title: 'Dimensional Measurement',
      text: 'Calipers, micrometers and height gauges for routine feature checks, with resolution to 0.001 mm on critical dimensions.',
      image: aboutImage('micrometer.jpg'),
      alt: 'Digital micrometer measuring a metal part',
    },
    {
      title: 'Geometric Tolerance Inspection',
      text: 'GD&T evaluation for flatness, parallelism, perpendicularity, position and concentricity on CMM and surface plates.',
      image: unsplash('1713371398479-4410ca153b1f', 900),
      alt: 'Dial indicator set up to check geometric tolerance on a machined part',
    },
    {
      title: 'Form & Profile Measurement',
      text: 'Profile projectors and vision systems verify contours, radii and thread profiles against nominal geometry.',
      image: unsplash('1582143434535-eba55a806718', 900),
      alt: 'Optical inspection of polished components against a profile',
    },
    {
      title: 'Thread & Hole Feature Inspection',
      text: 'Thread gauges, hole micrometers and CMM routines check size, depth and position from M2 upward.',
      image: unsplash('1624841970647-87dce8628d72', 900),
      alt: 'Precision machined block with multiple threaded and reamed holes',
    },
    {
      title: 'Visual & Surface Measurement',
      text: 'Surface roughness testers and visual standards verify Ra values, finish uniformity and cosmetic acceptance.',
      image: unsplash('1625465837903-0e4d77bcc467', 900),
      alt: 'Powder-coated black component with a uniform satin finish',
    },
    {
      title: 'Material Verification',
      text: 'Hardness testing, PMI screening and mill certificate review confirm material before and after machining.',
      image: unsplash('1769147339214-076740872485', 900),
      alt: 'Machined components resting on material and inspection documentation',
    },
  ],
}

export const qualityGallery: ImageAsset[] = [
  { src: aboutImage('micrometer.jpg'), alt: 'Micrometer measuring a machined metal edge' },
  { src: aboutImage('design-review.jpg'), alt: 'Quality engineer checking a component at a workbench' },
  { src: aboutImage('tablet-review.jpg'), alt: 'Inspection team reviewing results on a tablet' },
  { src: unsplash('1713371398479-4410ca153b1f', 1200), alt: 'Dial indicator checking a round machined component' },
  {
    src: unsplash('1624841970647-87dce8628d72', 1200),
    alt: 'Machined aluminum component ready for dimensional inspection',
  },
  { src: unsplash('1582143434535-eba55a806718', 1200), alt: 'Optical components inspected for surface and profile' },
  { src: aboutImage('team-collaboration.jpg'), alt: 'Engineers discussing inspection results in the workshop' },
  { src: unsplash('1625465837903-0e4d77bcc467', 1200), alt: 'Finished black component checked for surface quality' },
]

/* ------------------------------------------------------------------ */
/* Testimonials                                                       */
/* ------------------------------------------------------------------ */

export const testimonialsHero = {
  eyebrow: 'Testimonials',
  titleLines: ['What Our Customers Say'],
  description:
    'Long-term engineering partnerships are built on clear communication, repeatable quality and parts that arrive when promised. Here is what our customers tell us.',
  images: [
    { src: aboutImage('tablet-review.jpg'), alt: 'Manufacturing team reviewing production details together' },
  ] as ImageAsset[],
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  industry: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'EZHONG took our prototype from a rough CAD model to a production-ready machined housing in under three weeks. Their DFM notes alone saved us a revision.',
    name: 'Sarah Mitchell',
    role: 'Hardware Engineering Manager',
    company: 'NorthAxis Medical',
    industry: 'Medical Devices & Robotics',
    rating: 5,
  },
  {
    quote:
      'Batch-to-batch consistency is why we stay. Our incoming inspection results match their reports every time, and the finish has not drifted across two years of orders.',
    name: 'Daniel Weber',
    role: 'Supply Chain Lead',
    company: 'Vectra Motion',
    industry: 'Automotive',
    rating: 5,
  },
  {
    quote:
      'They machined thin-wall titanium parts other suppliers said were not worth the risk. The tolerances held, and the inspection package was ready before we asked.',
    name: 'Priya Raman',
    role: 'Mechanical Engineer',
    company: 'Orbital Aero',
    industry: 'Aerospace',
    rating: 5,
  },
  {
    quote:
      'We needed 5,000 anodized enclosures in six weeks. EZHONG coordinated machining, finishing and inspection without us chasing milestones every day.',
    name: 'Lucas Ferreira',
    role: 'Product Operations',
    company: 'TerraVolt',
    industry: 'New Energy',
    rating: 5,
  },
  {
    quote:
      'Clear quotation, honest lead times and one contact who actually answers. That combination is rarer than it should be at this volume.',
    name: 'Emily Chen',
    role: 'Procurement Manager',
    company: 'Quanta Systems',
    industry: 'Industrial Electronics',
    rating: 5,
  },
  {
    quote:
      'Their first article report was thorough enough for our quality team to approve the pilot build the same day. That has never happened with another supplier.',
    name: 'Marcus Reid',
    role: 'Quality Engineer',
    company: 'HelixMed',
    industry: 'Medical Devices',
    rating: 5,
  },
]

/* ------------------------------------------------------------------ */
/* FAQ                                                                */
/* ------------------------------------------------------------------ */

export const faqHero = {
  eyebrow: 'FAQ',
  titleLines: ['Frequently Asked', 'Questions'],
  description:
    'Answers to the questions engineers and buyers ask most often — from quoting and materials to tolerances, inspection and international shipping.',
  images: [
    { src: aboutImage('cnc-operator.jpg'), alt: 'CNC operator setting up a production machining center' },
  ] as ImageAsset[],
}

export type FaqGroup = {
  category: string
  items: { q: string; a: string }[]
}

export const faqGroups: FaqGroup[] = [
  {
    category: 'Ordering & Quotes',
    items: [
      {
        q: 'How do I request a quote?',
        a: 'Send 2D drawings or 3D models (STEP, STP, IGES, STL, X_T, DWG, DXF or PDF) with quantity, material, finish, tolerance and target delivery date. Our engineers review the files and reply with a quotation or clarifying questions — usually within 12 business hours.',
      },
      {
        q: 'What information do you need to quote accurately?',
        a: 'We need the drawing revision, 3D model where available, quantity, material grade, surface finish, inspection requirements and delivery target. If the drawing leaves a requirement open, tell us the functional intent and we will propose a practical specification.',
      },
      {
        q: 'Is there a minimum order quantity?',
        a: 'No fixed minimum. We machine single prototypes as readily as repeat production orders. Unit pricing improves at volume, and we will show the cost break points in the quotation.',
      },
      {
        q: 'Can you sign an NDA before reviewing our drawings?',
        a: 'Yes. Send the request with your NDA or ask for ours, and we will complete it before files are shared. Customer drawings, models and project details are treated as confidential.',
      },
    ],
  },
  {
    category: 'Materials & Finishing',
    items: [
      {
        q: 'What materials can you machine?',
        a: 'Aluminum 6061, 7075 and 5083; stainless steel 303, 304, 316 and 17-4PH; carbon and alloy steels; titanium Ti-6Al-4V; brass and copper; and engineering plastics including POM, PEEK, PA, PC and PTFE. Material certificates are available on request.',
      },
      {
        q: 'Can you provide surface finishing?',
        a: 'Yes. We coordinate anodizing, powder coating, bead blasting, polishing, passivation, plating and laser marking. Finishing can be quoted with machining so the part arrives ready to assemble.',
      },
      {
        q: 'Can you match a specific color or finish?',
        a: 'We match Pantone, RAL and customer-approved samples for anodizing and powder coating. Physical samples or first-article approval are recommended before production batches.',
      },
      {
        q: 'Do you offer material certificates and traceability?',
        a: 'Mill certificates, heat-lot records and inspection reports are available for each order. Tell us the traceability requirements at quotation so the documentation is built into the production plan.',
      },
    ],
  },
  {
    category: 'Tolerances & Quality',
    items: [
      {
        q: 'What tolerances can you hold?',
        a: 'General machining is typically ±0.1 mm, with critical features held to ±0.005 mm depending on size, material and geometry. Share the drawing and we will confirm what is achievable before quoting rather than over-specifying the process.',
      },
      {
        q: 'How are parts inspected?',
        a: 'Inspection is planned from the drawing. We use calipers, micrometers, height gauges, thread gauges, surface roughness testers and CMM as required. First-article reports and in-process records are available with each batch.',
      },
      {
        q: 'What happens if a part does not meet specification?',
        a: 'The lot is contained, the non-conformance is documented and the cause is reviewed with engineering and production. We agree the disposition with you — rework, replacement or concession — and record corrective action before the next batch.',
      },
      {
        q: 'Can you inspect to our drawing or quality plan?',
        a: 'Yes. We work to customer drawings, inspection plans and special process requirements. Send the quality clauses with the RFQ and our team will confirm compliance or raise deviations before production.',
      },
    ],
  },
  {
    category: 'Shipping & Lead Time',
    items: [
      {
        q: 'What are typical lead times?',
        a: 'Simple machined prototypes usually ship 3–5 business days after drawing approval. Production orders typically run 2–5 weeks depending on process, material, finishing and quantity. The quotation states the lead time for your specific scope.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'We ship to more than 40 countries using DHL, FedEx and UPS, with DDP options where available. Export packaging, labeling and commercial documentation are prepared for each shipment.',
      },
      {
        q: 'How are parts packaged?',
        a: 'Parts are protected individually or in trays, bagged with moisture protection where needed, and packed in labeled cartons. Custom packaging, kitting and drop-shipping can be quoted on request.',
      },
      {
        q: 'Can you support repeat orders and scheduled releases?',
        a: 'Yes. We hold approved programs, tooling and inspection plans for repeat orders, and can ship against scheduled releases or blanket purchase orders to reduce your inventory.',
      },
    ],
  },
]
