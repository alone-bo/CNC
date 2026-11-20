// Central, CMS-ready content for the EZHONG homepage.
// Every title, date, image, link and specification below is editable sample
// content; replace with confirmed EZHONG data before launch.

export const unsplash = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`

export const company = {
  name: 'EZHONG',
  tagline: 'Precision Manufacturing Partner',
  description:
    'EZHONG provides CNC machining, precision fabrication and custom manufacturing services for engineering teams worldwide, from first prototype to stable production.',
  // Editable placeholders. Do not publish until confirmed by EZHONG.
  phone: '+86 000 0000 0000',
  phoneHref: 'tel:+860000000000',
  email: 'sales@example.com',
  address: 'Industrial Park Address, City, Province, China',
  social: [
    { name: 'LinkedIn', href: '#' },
    { name: 'YouTube', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'X', href: '#' },
  ] as const,
  // Add only after validity and applicability to EZHONG are confirmed,
  // e.g. ['ISO 9001:2015', 'IATF 16949:2016'].
  certifications: [] as string[],
}

export const media = {
  // CNC lathe footage — "CNC lathe" by Vandurit inserti, CC BY 3.0, via Wikimedia Commons.
  heroVideo: 'https://upload.wikimedia.org/wikipedia/commons/8/86/CNC_lathe.webm',
  heroPoster: unsplash('1713371398485-7bde1bde9def', 1920),
  videoCredit: {
    text: 'Hero footage: “CNC lathe” by Vandurit inserti, CC BY 3.0',
    href: 'https://commons.wikimedia.org/wiki/File:CNC_lathe.webm',
  },
}

export type NavItem = {
  label: string
  href: string
  mega?: boolean
  solutions?: boolean
  industries?: boolean
  resources?: boolean
  about?: boolean
}

export const navItems: NavItem[] = [
  { label: 'Services', href: '#/services', mega: true },
  { label: 'Solutions', href: '#/solutions', solutions: true },
  { label: 'Industries', href: '#/industries', industries: true },
  { label: 'Resources', href: '#/blogs', resources: true },
  { label: 'About', href: '#/about', about: true },
]

export type Service = {
  slug: string
  title: string
  description: string
  image: string
  alt: string
  capabilities: string[]
  materials: string[]
}

export const services: Service[] = [
  {
    slug: 'cnc-machining',
    title: 'CNC Machining',
    description:
      'High-precision milling and turning for complex custom parts, from prototypes to production.',
    image: unsplash('1624841970647-87dce8628d72', 900),
    alt: 'Precision CNC-machined aluminum manifold block with milled ports',
    capabilities: ['3-, 4- and 5-axis CNC milling', 'CNC turning and mill-turn', 'Tight-tolerance features', 'Threading, knurling and engraving'],
    materials: ['Aluminum 6061 / 7075', 'Stainless steel 303 / 304 / 316', 'Titanium', 'Brass & copper', 'POM, PEEK, Nylon'],
  },
  {
    slug: 'injection-molding',
    title: 'Injection Molding',
    description: 'Custom plastic injection molding for consistent geometry and scalable manufacturing.',
    image: unsplash('1625465404484-448f58e5c5d9', 900),
    alt: 'Black injection-molded plastic industrial housing',
    capabilities: ['Prototype and production tooling', 'Overmolding and insert molding', 'Multi-cavity molds', 'Texturing and polishing'],
    materials: ['ABS', 'PC / PC-ABS', 'PA6 / PA66 (GF)', 'PP', 'TPE / TPU'],
  },
  {
    slug: 'sheet-metal-fabrication',
    title: 'Sheet Metal Fabrication',
    description: 'Laser cutting, bending, and fabrication for precise sheet metal assemblies.',
    image: unsplash('1739105329094-70e964758e05', 900),
    alt: 'Stack of precision bent stainless steel sheet metal profiles',
    capabilities: ['Fiber laser cutting', 'CNC press brake bending', 'Welding and riveting', 'Hardware insertion'],
    materials: ['Aluminum 5052', 'Stainless steel 304', 'Cold-rolled steel', 'Galvanized steel', 'Copper'],
  },
  {
    slug: '3d-printing',
    title: '3D Printing',
    description: 'Additive manufacturing for complex geometries and rapid prototyping.',
    image: unsplash('1611117775350-ac3950990985', 900),
    alt: 'Row of industrial 3D printers producing prototype parts',
    capabilities: ['SLA and SLS', 'FDM for fixtures', 'Metal printing (SLM)', 'Post-processing and finishing'],
    materials: ['Resins', 'PA12', 'ABS / PLA', 'Stainless steel 316L', 'Aluminum AlSi10Mg'],
  },
  {
    slug: 'extrusion',
    title: 'Extrusion',
    description: 'Custom metal profiles with consistent cross-sections for industrial applications.',
    image: unsplash('1624775103325-8fe5c3b7d821', 900),
    alt: 'Aluminum extruded radial heat sink profile',
    capabilities: ['Custom die design', 'Cut-to-length and CNC finishing', 'Heat sink profiles', 'Anodizing and coating'],
    materials: ['Aluminum 6063', 'Aluminum 6061', 'Aluminum 6082'],
  },
  {
    slug: 'die-casting',
    title: 'Die Casting',
    description: 'Efficient production of complex metal components with repeatable dimensions.',
    image: unsplash('1625465104346-1ec72f86a54b', 900),
    alt: 'Aluminum die-cast industrial housing with ribbed interior',
    capabilities: ['High-pressure die casting', 'Secondary CNC machining', 'Leak testing', 'Powder coating and painting'],
    materials: ['Aluminum A380 / ADC12', 'Zinc Zamak 3 / 5', 'Magnesium AZ91D'],
  },
  {
    slug: 'vacuum-casting',
    title: 'Vacuum Casting',
    description: 'Flexible low-volume production for prototypes and functional plastic components.',
    image: unsplash('1625465586997-c3998f550c80', 900),
    alt: 'White polyurethane vacuum-cast prototype part',
    capabilities: ['Silicone mold tooling', 'Low-volume bridge production', 'Color matching', 'Clear and soft-touch parts'],
    materials: ['PU (ABS-like)', 'PU (PC-like, clear)', 'PU (rubber-like)', 'PU (PP-like)'],
  },
  {
    slug: 'wire-edm',
    title: 'Wire EDM',
    description: 'High-precision cutting for intricate profiles and complex conductive materials.',
    image: unsplash('1602664876866-d3b33b77756b', 900),
    alt: 'Precision machined stainless steel component with fine profile detail',
    capabilities: ['Wire EDM cutting', 'Sinker EDM', 'Small-hole EDM drilling', 'Hardened tool steel'],
    materials: ['Tool steel D2 / H13', 'Carbide', 'Titanium', 'Inconel', 'Copper'],
  },
]

export type CatalogService = Service & { menuLabel: string; cta: string }

const svc = (
  slug: string,
  menuLabel: string,
  title: string,
  imageId: string,
  alt: string,
  description: string,
  cta: string,
  capabilities: string[],
  materials: string[],
): CatalogService => ({ slug, menuLabel, title, image: unsplash(imageId, 900), alt, description, cta, capabilities, materials })

/** Full service catalog used by the Services overview page, mega menu and service detail pages. */
export const serviceCatalog: CatalogService[] = [
  svc('cnc-machining', 'CNC Machining', 'CNC Machining Services', '1727292486976-6fd4bc056761', 'CNC Machining Services',
    'On-demand CNC machining services covering milling, turning and 5-axis machining for metal and plastic components. Our capabilities include CNC prototype machining for engineering validation and functional testing, alongside scalable low-volume production, delivering tight-tolerance finished parts with integrated surface finishing and strict quality assurance.',
    'Learn More CNC Machining',
    ['3-, 4- and 5-axis CNC milling', 'CNC turning and mill-turn', 'Prototype and low-volume production', 'Integrated finishing and inspection'],
    ['Aluminum 6061 / 7075', 'Stainless steel 303 / 304 / 316', 'Titanium', 'Brass & copper', 'POM, PEEK, Nylon']),
  svc('cnc-aluminum', 'CNC Aluminum', 'Aluminum CNC Machining Services', '1713371398485-7bde1bde9def', 'aluminum CNC machining',
    'Our complete CNC aluminum service will accompany your aluminum machining project from the prototype construction to the ended aluminum parts manufacturing.',
    'Learn More Aluminum CNC Machining',
    ['High-speed aluminum milling', 'Thin-wall and pocketed parts', 'Anodizing and bead blasting', 'Prototype to production'],
    ['Aluminum 6061-T6', 'Aluminum 7075-T6', 'Aluminum 6063', 'Aluminum 2024', 'Aluminum 5052']),
  svc('precision-cnc-machining', 'Precision CNC Machining', 'Precision CNC Machining Service', '1713371398479-4410ca153b1f', 'Precision CNC Machining',
    'Precision CNC machining provides tight-tolerance precision machined parts to meet your exact engineering specifications.',
    'Learn More Precision CNC Machining',
    ['Tight-tolerance features', 'CMM and dimensional reporting', 'Precision fixturing', 'First article inspection'],
    ['Aluminum', 'Stainless steel', 'Tool steel', 'Titanium', 'Engineering plastics']),
  svc('5-axis-cnc-machining', '5-Axis CNC Machining', '5-Axis CNC Machining Services', '1602664876866-d3b33b77756b', 'custom 5-axis CNC machining',
    'EZHONG’s 5-axis CNC machining keeps precision consistent from prototype to production, supported by full CMM and dimensional reporting.',
    'Learn More 5-Axis CNC Machining',
    ['Simultaneous 5-axis milling', 'Complex curved surfaces', 'Fewer setups, better accuracy', 'Full CMM reporting'],
    ['Aluminum 7075', 'Titanium Ti-6Al-4V', 'Stainless steel 17-4PH', 'Inconel', 'PEEK']),
  svc('cnc-milling', 'CNC Milling', 'CNC Milling Services', '1740209475472-aa7d280f7452', 'Custom CNC Milling',
    'Custom CNC milled parts in various metal and plastic materials. Fast, cost-effective milling for prototypes and low-volume production.',
    'Learn More CNC Milling',
    ['3-axis and 4-axis milling', 'Pockets, slots and threads', 'Engraving and texturing', 'Quick-turn prototypes'],
    ['Aluminum', 'Steel', 'Stainless steel', 'Brass', 'POM, ABS, PC']),
  svc('cnc-turning', 'CNC Turning', 'CNC Turning Services', '1666618090858-fbcee636bd3e', 'CNC turning manufacturer',
    'Custom CNC turned parts in a wide range of metals and plastics. Precision lathe machining with quick turnaround for prototypes and production runs.',
    'Learn More CNC Turning',
    ['CNC lathe turning', 'Live-tool mill-turn', 'Threading and knurling', 'Shafts, bushings and fittings'],
    ['Aluminum', 'Stainless steel', 'Brass', 'Carbon steel', 'POM, Nylon, PTFE']),
  svc('cnc-metal-machining', 'CNC Metal Machining', 'CNC Metal Machining Services', '1769147339214-076740872485', 'CNC Metal Machining',
    'Get precision CNC metal machining services for aluminum, stainless steel, titanium, steel, copper, and brass, ensuring accuracy, efficiency, and repeatability. Request a free quote for custom CNC metal parts today.',
    'Learn More CNC Metal Machining',
    ['Milling and turning of metals', 'Heat treatment coordination', 'Metal surface finishing', 'Repeatable batch production'],
    ['Aluminum', 'Stainless steel', 'Titanium', 'Steel', 'Copper & brass']),
  svc('cnc-plastic-machining', 'CNC Plastic Machining', 'CNC Plastic Machining Services', '1625465837903-0e4d77bcc467', 'Custom CNC Plastic Machining',
    'Need some custom plastic prototypes and end-use production parts? We offer CNC plastic machining services and manufacture high-quality machined plastic parts for global customers at competitive prices.',
    'Learn More CNC Plastic Machining',
    ['Engineering plastic prototypes', 'End-use machined plastic parts', 'Polishing and vapor finishing', 'Low-stress machining'],
    ['ABS', 'POM (Delrin)', 'PEEK', 'Acrylic (PMMA)', 'PC, Nylon, PTFE']),
  svc('3d-printing', '3D Printing', '3D Printing Services', '1611117775350-ac3950990985', '3D Printing Services',
    'Professional rapid prototyping 3D printing service, whether it is accurate SLA 3D printing or durable SLS 3D printing, you can perfectly realize your design without any restrictions.',
    'Learn More 3D Printing',
    ['SLA resin printing', 'SLS nylon printing', 'Metal printing (SLM)', 'Sanding and painting'],
    ['Standard & tough resins', 'PA12 nylon', 'TPU', 'Stainless steel 316L', 'AlSi10Mg']),
  svc('clear-prototyping', 'Clear Prototyping', 'Clear Prototyping Service', '1582143434535-eba55a806718', 'Optics Rapid Prototyping',
    'We always focus on prototyping clear parts, and have the expertise in precision machining and rapid tooling required for custom optical prototypes.',
    'Learn More Clear Prototyping',
    ['Optical lenses and light guides', 'Diamond-polished surfaces', 'Vapor polishing', 'Clear cast and molded parts'],
    ['Acrylic (PMMA)', 'Polycarbonate', 'Clear PU', 'Optical-grade resins']),
  svc('vacuum-casting', 'Vacuum Casting', 'Vacuum Casting Services', '1625465586706-cfc023421fbf', 'Vacuum Casting',
    'Vacuum casting is a prototype manufacturing process that uses silicone molds to quickly create urethane casting parts for the production of small series of functional plastic parts.',
    'Learn More Vacuum Casting',
    ['Silicone mold tooling', 'Small-series production', 'Color matching', 'Overmolding and inserts'],
    ['PU (ABS-like)', 'PU (PC-like, clear)', 'PU (rubber-like)', 'PU (PP-like)']),
  svc('rapid-tooling', 'Rapid Tooling', 'Rapid Tooling Services', '1676646606766-f8325cac7faf', 'Rapid Tooling Services',
    'Quickly and cost-effectively get your molded parts with production-grade materials and processes by using rapid tooling for low-volume rapid injection molding.',
    'Learn More Rapid Tooling',
    ['Aluminum and steel molds', 'Low-volume injection molding', 'Multi-cavity and family molds', 'T1 samples and inspection'],
    ['ABS', 'PC / PC-ABS', 'PA6 / PA66 (GF)', 'PP', 'TPE / TPU']),
  svc('sheet-metal-fabrication', 'Sheet Metal Fabrication', 'Custom Sheet Metal Fabrication Services', '1701788607416-f1b5dd5a09ec', 'Sheet Metal Fabrication',
    'Custom sheet metal fabrication for panels, brackets, enclosures, housings, and assemblies, with flexible processes for prototyping and low-volume production.',
    'Learn More Sheet Metal Fabrication',
    ['Fiber laser cutting', 'CNC press brake bending', 'Welding and riveting', 'Hardware insertion and assembly'],
    ['Aluminum 5052', 'Stainless steel 304', 'Cold-rolled steel', 'Galvanized steel', 'Copper']),
  svc('finishing', 'Parts Finishing', 'Finishing Services', '1666172155686-67cfcabe32de', 'One-stop Prototype Post Finishing Services',
    'EZHONG provides a variety of finishing services that can be tailored to meet the specifications of your product design.',
    'Learn More Finishing Services',
    ['Anodizing (clear, color, hard)', 'Sandblasting and bead blasting', 'Electroplating', 'Painting and powder coating'],
    ['Aluminum', 'Stainless steel', 'Steel', 'Plastics', 'Brass & copper']),
]

export const findService = (slug: string): Service | undefined =>
  serviceCatalog.find((s) => s.slug === slug) ?? services.find((s) => s.slug === slug)

const bySlug = (slugs: string[]) => slugs.map((slug) => serviceCatalog.find((s) => s.slug === slug)!)

export const megaMenu = [
  {
    title: 'Machining Services',
    columns: [
      bySlug(['cnc-machining', 'cnc-aluminum', 'cnc-milling', 'cnc-turning']),
      bySlug(['precision-cnc-machining', '5-axis-cnc-machining', 'cnc-metal-machining', 'cnc-plastic-machining']),
    ],
  },
  {
    title: 'Additional Manufacturing Services',
    columns: [
      bySlug(['3d-printing', 'clear-prototyping', 'vacuum-casting']),
      bySlug(['rapid-tooling', 'sheet-metal-fabrication', 'finishing']),
    ],
  },
]

export const servicesHero = {
  image: unsplash('1713371398484-cc4e4f6a262a', 2000),
  title: ['Complete On-Demand', 'Manufacturing', 'Technologies'],
  description:
    'Comprehensive CNC Machining Services including CNC Aluminum, precision CNC, 5-axis machining, milling, turning for metal & plastic parts. Additional Manufacturing Services cover 3D printing, vacuum casting, rapid tooling, sheet metal fabrication and custom finishing for prototypes to low-volume production.',
}

export type Spec = { label: string; value: string }

export type Industry = {
  slug: string
  name: string
  summary: string
  caseTitle: string
  overview: string
  specs: Spec[]
  image: string
  alt: string
}

// Specification values are representative placeholders until real EZHONG
// project data is supplied.
export const industries: Industry[] = [
  {
    slug: 'automotive',
    name: 'Automotive',
    summary: 'Machined powertrain, chassis and EV components built for repeatable quality at production volumes.',
    caseTitle: 'EV Powertrain — Precision Machined Motor End Cover',
    overview:
      'A lightweight aluminum end cover for an electric drive unit, requiring concentric bearing bores, sealing faces and consistent quality across production batches.',
    specs: [
      { label: 'Quantity', value: '2,000 pcs per batch' },
      { label: 'Manufacturing Process', value: 'CNC Milling + Turning' },
      { label: 'Material', value: 'Aluminum 6061-T6' },
      { label: 'Dimensions', value: 'Ø210 × 85 mm' },
      { label: 'Tolerance', value: '±0.02 mm' },
      { label: 'Surface Finish', value: 'Clear anodizing' },
    ],
    image: unsplash('1769147339214-076740872485', 1200),
    alt: 'Precision machined aluminum automotive components on engineering drawings',
  },
  {
    slug: 'aerospace',
    name: 'Aerospace',
    summary: 'Lightweight, high-strength structural and engine components with full material traceability.',
    caseTitle: 'Aerospace Engine Bracket — Lightweight Titanium Mount',
    overview:
      'A thin-wall titanium mounting bracket machined from solid billet, balancing weight reduction with stiffness and strict dimensional control.',
    specs: [
      { label: 'Quantity', value: '150 pcs' },
      { label: 'Manufacturing Process', value: '5-Axis CNC Milling' },
      { label: 'Material', value: 'Titanium Ti-6Al-4V' },
      { label: 'Dimensions', value: '180 × 95 × 40 mm' },
      { label: 'Tolerance', value: '±0.01 mm' },
      { label: 'Surface Finish', value: 'Bead blasting + passivation' },
    ],
    image: unsplash('1540575861501-7cf05a4b125a', 1200),
    alt: 'Close-up of an aircraft turbine engine fan',
  },
  {
    slug: 'medical-devices',
    name: 'Medical Devices',
    summary:
      'Precision components and housings for surgical instruments, medical equipment, and rehabilitation systems.',
    caseTitle: 'Medical Robotics Rehabilitation Equipment — Upper Limb Exoskeleton',
    overview:
      'Structural joints and link arms for an upper limb rehabilitation exoskeleton, requiring low weight, smooth articulation and biocompatible surface treatment.',
    specs: [
      { label: 'Quantity', value: '300 sets' },
      { label: 'Manufacturing Process', value: 'CNC Milling + Turning' },
      { label: 'Material', value: 'Aluminum 7075-T6 / SS 316L' },
      { label: 'Dimensions', value: '320 × 120 × 65 mm' },
      { label: 'Tolerance', value: '±0.01 mm' },
      { label: 'Surface Finish', value: 'Hard anodizing / electropolishing' },
    ],
    image: unsplash('1531746790731-6c087fecd65a', 1200),
    alt: 'White robotic hand from a medical rehabilitation exoskeleton',
  },
  {
    slug: 'robotics-automation',
    name: 'Robotics & Automation',
    summary: 'Joint housings, end-effectors and motion components for robots and automated production lines.',
    caseTitle: 'Collaborative Robot Joint — Harmonic Drive Housing',
    overview:
      'A compact joint housing for a collaborative robot arm, with tight bearing-bore concentricity to support smooth, low-backlash motion.',
    specs: [
      { label: 'Quantity', value: '1,000 pcs' },
      { label: 'Manufacturing Process', value: 'CNC Turning + Milling' },
      { label: 'Material', value: 'Aluminum 6061-T6' },
      { label: 'Dimensions', value: 'Ø120 × 70 mm' },
      { label: 'Tolerance', value: '±0.005 mm (bearing bores)' },
      { label: 'Surface Finish', value: 'Black anodizing' },
    ],
    image: unsplash('1716191299980-a6e8827ba10b', 1200),
    alt: 'Blue industrial robot arm working on an automated production line',
  },
  {
    slug: 'new-energy',
    name: 'New Energy',
    summary: 'Enclosures, busbars and thermal components for EV charging, battery and power systems.',
    caseTitle: 'EV Charging Station — Power Module Enclosure & Heat Sink',
    overview:
      'A die-cast enclosure with integrated cooling fins for a charging station power module, finished with CNC-machined sealing and mounting surfaces.',
    specs: [
      { label: 'Quantity', value: '5,000 pcs' },
      { label: 'Manufacturing Process', value: 'Die Casting + CNC Finishing' },
      { label: 'Material', value: 'Aluminum ADC12' },
      { label: 'Dimensions', value: '280 × 190 × 60 mm' },
      { label: 'Tolerance', value: '±0.05 mm' },
      { label: 'Surface Finish', value: 'Powder coating' },
    ],
    image: unsplash('1593941707874-ef25b8b4a92b', 1200),
    alt: 'Electric vehicle charging connector plugged into a car',
  },
  {
    slug: 'electronics',
    name: 'Electronics',
    summary: 'Precision enclosures, heat sinks and shielding parts for industrial and consumer electronics.',
    caseTitle: 'Industrial Electronics — CNC Enclosure for Control Units',
    overview:
      'A machined aluminum enclosure for an industrial control unit, with precise PCB mounting features, cable ports and a uniform cosmetic finish.',
    specs: [
      { label: 'Quantity', value: '800 pcs' },
      { label: 'Manufacturing Process', value: 'CNC Milling + Sheet Metal' },
      { label: 'Material', value: 'Aluminum 6063' },
      { label: 'Dimensions', value: '220 × 140 × 38 mm' },
      { label: 'Tolerance', value: '±0.02 mm' },
      { label: 'Surface Finish', value: 'Bead blast + anodize + laser marking' },
    ],
    image: unsplash('1518770660439-4636190af475', 1200),
    alt: 'Macro view of an electronics circuit board',
  },
]

export const advantages = [
  {
    key: 'quality',
    title: 'Certified Quality',
    text: 'Manufacturing quality systems and consistent quality inspection processes.',
  },
  {
    key: 'engineering',
    title: 'Professional Engineering Support',
    text: 'Experienced engineering support for design review, manufacturing consultation, and technical communication.',
  },
  {
    key: 'cost',
    title: 'Competitive Manufacturing Costs',
    text: 'Efficient manufacturing resources and supply chain coordination.',
  },
  {
    key: 'resources',
    title: 'Integrated Manufacturing Capabilities',
    text: 'CNC machining, precision fabrication, and coordinated manufacturing services.',
  },
  {
    key: 'delivery',
    title: 'Fast Production & Delivery',
    text: 'Flexible production planning and efficient manufacturing workflows.',
  },
] as const

export type StageIcon = 'design' | 'prototype' | 'production' | 'packaging'

export type ProcessStage = {
  slug: string
  number: string
  name: string
  shortTitle: string
  icon: StageIcon
  description: string
  image: string
  alt: string
  items: { title: string; text: string }[]
}

export const processStages: ProcessStage[] = [
  {
    slug: 'project-initiation-design',
    number: '01',
    name: 'Project Initiation & Design',
    shortTitle: 'Project Initiation & Design',
    icon: 'design',
    description:
      'Our engineering team works with you to understand project requirements, review designs, and identify suitable manufacturing methods.',
    image: unsplash('1581092580497-e0d23cbdf1dc', 900),
    alt: 'Engineer reviewing CAD drawings of mechanical components at a workstation',
    items: [
      { title: 'Project Requirements', text: 'Review project specifications, functional requirements, and manufacturing objectives.' },
      { title: 'CAD File Review', text: 'Review 2D drawings and 3D CAD models to understand part geometry and engineering requirements.' },
      { title: 'DFM Analysis', text: 'Evaluate manufacturability and recommend design improvements where appropriate.' },
      { title: 'Process Selection', text: 'Identify suitable materials, manufacturing processes, and production plans.' },
    ],
  },
  {
    slug: 'prototyping-low-volume',
    number: '02',
    name: 'Prototyping & Low-Volume Production',
    shortTitle: 'Prototyping & Low-Volume Production',
    icon: 'prototype',
    description:
      'Transform initial designs into physical components through rapid prototyping, engineering validation, and flexible low-volume production.',
    image: unsplash('1758873263563-5ba4aa330799', 900),
    alt: 'Engineer measuring a CNC-machined prototype component with a digital caliper',
    items: [
      { title: 'Prototype Planning', text: 'Define prototype requirements and manufacturing processes.' },
      { title: 'Precision Prototyping', text: 'Produce prototype components based on approved engineering drawings.' },
      { title: 'Quality Inspection', text: 'Review dimensions, surface finish, and relevant technical specifications.' },
      { title: 'Design Validation', text: 'Support design feedback and production readiness assessment.' },
    ],
  },
  {
    slug: 'mass-production',
    number: '03',
    name: 'Mass Production',
    shortTitle: 'Mass Production',
    icon: 'production',
    description:
      'Support production scaling through manufacturing planning, process control, and consistent quality inspection.',
    image: unsplash('1716191300020-b52dec5b70a8', 900),
    alt: 'Automated production line with multiple machining and handling stations',
    items: [
      { title: 'Production Planning', text: 'Establish production schedules and manufacturing resource requirements.' },
      { title: 'Manufacturing Execution', text: 'Coordinate machining operations and production workflows.' },
      { title: 'Quality Control', text: 'Perform dimensional inspections and production quality checks.' },
      { title: 'Production Management', text: 'Monitor manufacturing progress and coordinate delivery preparation.' },
    ],
  },
  {
    slug: 'packaging',
    number: '04',
    name: 'Packaging',
    shortTitle: 'Packaging',
    icon: 'packaging',
    description:
      'Our team supports packaging design, supplier coordination, testing, and production execution to help ensure finished components are professionally protected and delivered.',
    image: unsplash('1762049213265-675d3e57fe5a', 900),
    alt: 'Worker in protective gloves arranging foam packaging boxes for finished components',
    items: [
      { title: 'Packaging Design', text: 'Provide professional packaging design support, including 2D and 3D packaging drawings.' },
      { title: 'Packaging Supplier Management', text: 'Evaluate packaging suppliers and provide supplier assessment reports.' },
      { title: 'Sample Testing', text: 'Provide packaging sample inspection and testing reports.' },
      { title: 'Packaging Execution', text: 'Provide packaging production plans, raw material lists, and final production summaries.' },
    ],
  },
]

export type CaseStudy = {
  slug: string
  industry: string
  process: string
  image: string
  alt: string
  quantity: string
  componentTypes: string
  title: string
  description: string
  valueTitle: string
  valueText: string
}

// Sample case studies. Metrics are editable placeholders and must be verified
// against EZHONG project records before publishing.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'medical-robotics-components',
    industry: 'Medical Devices & Robotics',
    process: 'CNC Machining',
    image: unsplash('1625464736592-fab7c7bc4e2e', 1200),
    alt: 'Precision CNC-machined aluminum component with milled channels and ports',
    quantity: '8,663',
    componentTypes: '18',
    title: 'End-to-End Manufacturing of Medical Robotics Components',
    description:
      'A coordinated manufacturing workflow for multiple precision components, combining engineering review, CNC machining, quality inspection, and production coordination to support consistent component quality.',
    valueTitle: 'Reliable CNC Manufacturing at Scale',
    valueText:
      'EZHONG supports complex component requirements through precision machining, organized production workflows, and quality-focused manufacturing processes.',
  },
  {
    slug: 'automotive-powertrain-brackets',
    industry: 'Automotive',
    process: 'CNC Milling & Turning',
    image: unsplash('1769147339214-076740872485', 1200),
    alt: 'Machined aluminum automotive components on engineering drawings',
    quantity: '12,400',
    componentTypes: '9',
    title: 'Production Machining of Automotive Powertrain Components',
    description:
      'Milled and turned aluminum housings and brackets produced in repeat batches, with fixture planning and in-process checks to keep critical features consistent.',
    valueTitle: 'Repeatable Quality Across Batches',
    valueText:
      'Standardized setups, documented inspection plans and coordinated scheduling support stable supply for ongoing vehicle programs.',
  },
  {
    slug: 'aerospace-titanium-fittings',
    industry: 'Aerospace',
    process: '5-Axis CNC Machining',
    image: unsplash('1666634157070-6fd830fb5672', 1200),
    alt: 'Metal bar held in a CNC lathe chuck being precision machined',
    quantity: '1,250',
    componentTypes: '14',
    title: 'Lightweight Titanium Fittings for Aerospace Assemblies',
    description:
      'Thin-wall titanium and high-strength aluminum fittings machined in multi-axis setups, with material traceability and full dimensional reporting.',
    valueTitle: 'Precision for Demanding Materials',
    valueText:
      'Careful toolpath strategy and inspection planning help maintain tight tolerances on difficult-to-machine aerospace alloys.',
  },
  {
    slug: 'new-energy-enclosures',
    industry: 'New Energy',
    process: 'Die Casting + CNC',
    image: unsplash('1625465104346-1ec72f86a54b', 1200),
    alt: 'Aluminum die-cast enclosure with machined mounting features',
    quantity: '24,000',
    componentTypes: '6',
    title: 'Power Module Enclosures for EV Charging Equipment',
    description:
      'Die-cast aluminum enclosures finished with CNC-machined sealing faces and threaded mounting points, prepared for powder coating and assembly.',
    valueTitle: 'Scalable Hybrid Manufacturing',
    valueText:
      'Combining casting with secondary machining balances unit cost and precision for higher-volume energy hardware.',
  },
  {
    slug: 'industrial-electronics-housings',
    industry: 'Industrial Electronics',
    process: 'CNC Machining',
    image: unsplash('1624841970647-87dce8628d72', 1200),
    alt: 'CNC-machined aluminum manifold block with precise ports',
    quantity: '3,600',
    componentTypes: '11',
    title: 'Precision Housings for Industrial Control Electronics',
    description:
      'Machined aluminum housings and heat-dissipating blocks with tight PCB mounting tolerances and uniform cosmetic finishing across production lots.',
    valueTitle: 'Engineering-Led Electronics Hardware',
    valueText:
      'Early DFM feedback and consistent finishing processes help electronics teams move from prototype housings to stable production.',
  },
]

// Placeholder partner marks — replace with approved EZHONG customer and partner logos.
export type PartnerMark = 'hex' | 'ring' | 'triangle' | 'bars' | 'square' | 'wave' | 'diamond' | 'arc'
export const partners: { name: string; mark: PartnerMark }[] = [
  { name: 'NORTHAXIS', mark: 'hex' },
  { name: 'Vectra Motion', mark: 'ring' },
  { name: 'HELIXMED', mark: 'triangle' },
  { name: 'Orbital Aero', mark: 'arc' },
  { name: 'KINETIQ', mark: 'bars' },
  { name: 'TerraVolt', mark: 'wave' },
  { name: 'MERIDIAN', mark: 'diamond' },
  { name: 'Quanta Systems', mark: 'square' },
]

export type NewsItem = {
  slug: string
  date: string
  category: string
  title: string
  summary: string
  image: string
  alt: string
  body: string[]
  /** `blog` (default) feeds the Blogs page; `news` feeds the News page. */
  kind?: 'blog' | 'news'
}

// Sample articles — replace with genuine EZHONG news.
export const news: NewsItem[] = [
  {
    slug: 'intelligent-cnc-technology',
    date: '2026-03-18',
    category: 'Technology',
    title: 'Advancing Precision Manufacturing Through Intelligent CNC Technology',
    summary:
      'How connected machining centers, in-process measurement and data-driven toolpaths are raising consistency on complex, tight-tolerance parts.',
    image: unsplash('1593106410288-caf65eca7c9d', 1400),
    alt: 'CNC laser cutting machine emitting sparks while cutting sheet metal',
    body: [
      'Intelligent CNC technology is changing how precision parts move from drawing to finished component. Connected machining centers, in-process probing and simulation-verified toolpaths help engineering teams reduce variation and catch issues before they reach inspection.',
      'For customers, the practical outcome is more predictable quality on complex geometries — thin walls, deep pockets, tight bore tolerances — and clearer communication about what is achievable during DFM review.',
      'This sample article is a placeholder. Replace it with genuine EZHONG news, event coverage or technical insight.',
    ],
  },
  {
    slug: 'precision-manufacturing-trends',
    date: '2026-02-26',
    category: 'Insights',
    title: 'Key Trends Shaping the Future of Precision Manufacturing',
    summary:
      'From supply chain resilience to lightweight materials, the shifts buyers and engineers should plan for this year.',
    image: unsplash('1581094488379-6a10d04c0f04', 1000),
    alt: 'Engineers reviewing a technical layout together at a table',
    body: [
      'Engineering and sourcing teams are rethinking how they partner with manufacturers. Shorter product cycles, lightweight material adoption and multi-region supply strategies are all shaping requirements for custom parts.',
      'Manufacturers that combine engineering feedback, flexible capacity and transparent communication are best placed to support these shifts.',
      'This sample article is a placeholder. Replace it with genuine EZHONG content.',
    ],
  },
  {
    slug: 'advanced-cnc-complex-applications',
    date: '2026-01-30',
    category: 'Case Insights',
    title: 'How Advanced CNC Machining Supports Complex Industrial Applications',
    summary:
      'Multi-axis machining, mill-turn and careful fixturing make it possible to produce demanding geometries in fewer setups.',
    image: unsplash('1666634157070-6fd830fb5672', 1000),
    alt: 'Metal rod held in a CNC lathe chuck being machined by a cutting tool',
    body: [
      'Complex industrial parts often combine turned and milled features, tight positional tolerances and demanding materials. Multi-axis and mill-turn machining reduce the number of setups, which helps protect feature-to-feature accuracy.',
      'Fixturing strategy, tool selection and inspection planning are just as important as the machine itself — and they are best addressed early, during DFM review.',
      'This sample article is a placeholder. Replace it with genuine EZHONG content.',
    ],
  },
  {
    slug: 'dfm-checklist-machined-parts',
    date: '2025-12-18',
    category: 'Engineering',
    title: 'The DFM Checklist We Run Before Every Machined Part',
    summary:
      'A practical pre-release review of tolerances, features, materials and finishes that prevents costly revisions once machining starts.',
    image: unsplash('1581092580497-e0d23cbdf1dc', 1200),
    alt: 'Engineer reviewing a machined component toolpath in CAD software',
    body: [
      'Most machining problems are decided before the first chip is cut. A structured DFM review looks at how each feature will be reached, held and measured, and flags anything that depends on a tolerance tighter than the process can hold economically.',
      'The checklist covers datum strategy, tool access and corner radii, thin-wall stiffness, thread and hole standards, surface finish callouts and the sequence of operations. Where a requirement is unclear, we confirm the functional intent rather than quoting a tighter tolerance by default.',
      'The result is fewer drawing revisions, fewer surprises at first article and a quotation that reflects the real manufacturing route. Send a drawing and our engineers will return annotated feedback before production begins.',
    ],
  },
  {
    slug: 'aluminum-alloys-compared',
    date: '2025-11-20',
    category: 'Materials',
    title: '6061, 7075 or 5083? Choosing the Right Aluminum Alloy',
    summary:
      'How 6061-T6, 7075-T6 and 5083 compare on strength, machinability, corrosion resistance and cost — and where each belongs.',
    image: unsplash('1769147339214-076740872485', 1200),
    alt: 'Machined aluminum components resting on engineering drawings',
    body: [
      'Aluminum is not one material. 6061-T6 is the general-purpose choice for housings, brackets and fixtures: it machines cleanly, anodizes well and balances strength with cost.',
      '7075-T6 offers significantly higher strength for aerospace and high-load components, but it is less weldable, more sensitive to stress corrosion and harder on tooling. 5083 is chosen for marine and welded structures where corrosion resistance matters more than machinability.',
      'Material grade affects toolpath strategy, fixture design and finishing as much as unit cost. We review the application first, then recommend the alloy that meets the requirement without over-specifying it.',
    ],
  },
  {
    slug: 'cnc-machining-vs-3d-printing',
    date: '2025-10-15',
    category: 'Process Selection',
    title: 'CNC Machining vs. 3D Printing: A Practical Selection Guide',
    summary:
      'When additive manufacturing wins, when subtractive wins, and what a combined production route looks like in practice.',
    image: unsplash('1624841970647-87dce8628d72', 1200),
    alt: 'Array of precision CNC-machined aluminum components with milled channels and ports',
    body: [
      '3D printing earns its place for complex internal channels, one-off form studies and parts that cannot be reached by a cutter. CNC machining remains the better choice when dimensional accuracy, surface quality, material properties and repeatability matter.',
      'For low-volume functional prototypes, the decision often comes down to finishing and tolerance: printed parts may need secondary machining anyway. For production, machining usually wins on cost per part once geometry is accessible to standard tooling.',
      'Many programs use both. A printed prototype validates form; machined or cast production parts follow once the design is stable. We quote both routes side by side when the choice is close.',
    ],
  },
  {
    slug: 'ezhong-expands-five-axis-capacity',
    date: '2026-06-18',
    category: 'Company News',
    title: 'EZHONG Expands Five-Axis Machining Capacity',
    summary:
      'Two additional five-axis machining centers are now in production, increasing capacity for complex aluminum and titanium components.',
    image: unsplash('1602664876866-d3b33b77756b', 1200),
    alt: 'Five-axis cutting tool machining a complex sculpted metal part',
    kind: 'news',
    body: [
      'EZHONG has commissioned two additional five-axis machining centers at its precision machining facility. The investment increases capacity for complex prismatic parts, thin-wall structures and contoured surfaces in aluminum, titanium and stainless steel.',
      'The new cells include in-process probing and are integrated with the existing production scheduling and inspection workflow. Existing programs can be transferred without changing drawing requirements or inspection criteria.',
      'Capacity is available for prototype and repeat production orders. Contact the engineering team with your part drawings for a manufacturing review and updated lead time.',
    ],
  },
  {
    slug: 'manufacturing-world-2026',
    date: '2026-05-09',
    category: 'Events',
    title: 'Meet EZHONG at Manufacturing World 2026',
    summary:
      'Visit our team at booth A-12 to review drawings and discuss machining, finishing and production programs.',
    image: unsplash('1521737604893-d14cc237f11d', 1200),
    alt: 'EZHONG engineering team collaborating in the workshop',
    kind: 'news',
    body: [
      'EZHONG will exhibit at Manufacturing World 2026, presenting its CNC machining, sheet metal, casting and finishing capabilities for industrial buyers and engineering teams.',
      'The team will be available to review drawings, discuss material and tolerance requirements, and outline prototype-to-production routes. Samples of machined aluminum, titanium and stainless steel components will be on display.',
      'Exhibition entry is free with registration. To arrange a meeting in advance, contact our sales team with your project details.',
    ],
  },
  {
    slug: 'iso-9001-recertification-2026',
    date: '2026-04-02',
    category: 'Quality',
    title: 'EZHONG Completes ISO 9001:2015 Recertification',
    summary:
      'The facility has completed its annual ISO 9001:2015 surveillance audit and recertification for quality management.',
    image: unsplash('1713371398479-4410ca153b1f', 1200),
    alt: 'Dial indicator checking a precision machined round component',
    kind: 'news',
    body: [
      'EZHONG has completed its ISO 9001:2015 recertification audit for quality management systems covering machining, fabrication, finishing and inspection.',
      'The audit reviewed document control, supplier management, calibration, non-conformance handling and corrective action. No major non-conformities were raised.',
      'Certification supports consistent process control and traceability for customers in medical, automotive, aerospace and industrial equipment programs. Certificates are available on request.',
    ],
  },
  {
    slug: 'new-surface-finishing-line',
    date: '2026-03-21',
    category: 'Operations',
    title: 'New Surface Finishing Line Enters Production',
    summary:
      'A new anodizing and powder-coating line is now running, shortening finishing lead times for aluminum components.',
    image: unsplash('1625465837903-0e4d77bcc467', 1200),
    alt: 'Powder-coated black component with a durable satin finish',
    kind: 'news',
    body: [
      'A new surface finishing line has entered production at EZHONG, adding anodizing, powder coating and media blasting capacity for machined components.',
      'The line is configured for small and medium batches, with color matching, masking and inspection included in the standard workflow. Process parameters are documented per batch for traceability.',
      'Combining machining and finishing under one roof reduces handling and transit time. Contact the team for finish samples or to add finishing to an existing machining order.',
    ],
  },
]

export const footerGroups = [
  {
    title: 'Manufacturing Capabilities',
    links: [
      { label: 'All Services', href: '#/services' },
      { label: 'CNC Machining', href: '#/services/cnc-machining' },
      { label: 'CNC Aluminum', href: '#/services/cnc-aluminum' },
      { label: 'CNC Milling', href: '#/services/cnc-milling' },
      { label: 'Sheet Metal Fabrication', href: '#/services/sheet-metal-fabrication' },
      { label: '3D Printing', href: '#/services/3d-printing' },
    ],
  },
  {
    title: 'Solutions & Industries',
    links: [
      { label: 'All Solutions', href: '#/solutions' },
      { label: 'CNC Prototyping', href: '#/solutions/cnc-prototyping' },
      { label: 'CNC Production', href: '#/solutions/cnc-production' },
      { label: 'All Industries', href: '#/industries' },
      { label: 'Aerospace', href: '#/industries/aerospace' },
      { label: 'Automotive', href: '#/industries/automotive' },
    ],
  },
  {
    title: 'Company & Resources',
    links: [
      { label: 'About EZHONG', href: '#/about' },
      { label: 'Quality Assurance', href: '#/quality-assurance' },
      { label: 'Blogs', href: '#/blogs' },
      { label: 'Case Studies', href: '#/cases' },
      { label: 'FAQ', href: '#/faq' },
      { label: 'Contact Us', href: '#/inquiry' },
    ],
  },
]

export const formatDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
