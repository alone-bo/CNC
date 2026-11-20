// Content for the CNC Milling service detail page.
// Sample copy — confirm machine sizes, tolerances and lead times before publishing.

import { unsplash } from './content'

export const millingHero = {
  titleLines: ['CNC Milling Services'],
  description:
    '3-, 4- and 5-axis CNC milling for complex metal and plastic parts — prototypes, fixtures and repeat production, with DFM feedback, finishing and inspection included.',
  cta: 'Get a CNC Milling Quote',
  image: unsplash('1716191300020-b52dec5b70a8', 2000),
  alt: 'Row of CNC machining centers with tool changers on a workshop floor',
}

export type MillingCapability = {
  title: string
  description: string
  image: string
  alt: string
  points: string[]
}

export const millingCapabilities: MillingCapability[] = [
  {
    title: '3-Axis CNC Milling',
    description:
      'Reliable milling for plates, housings and brackets, with clean pockets, slots and drilled features.',
    image: unsplash('1740209475472-aa7d280f7452', 900),
    alt: 'Three-axis CNC milling machine cutting a clamped workpiece',
    points: ['X/Y/Z machining of prismatic parts', 'Pockets, slots and ribs', 'Tapped holes down to M2'],
  },
  {
    title: '4-Axis / Multi-Axis Milling',
    description:
      'A rotary fourth axis reaches multiple faces in one setup, protecting position between features.',
    image: unsplash('1666618090858-fbcee636bd3e', 900),
    alt: 'Multi-axis CNC machine machining a shaft with a live tool',
    points: ['Multiple faces in one setup', 'Cylindrical and angled features', 'Reduced handling and tolerance stack'],
  },
  {
    title: '5-Axis Simultaneous Milling',
    description:
      'Simultaneous five-axis motion for sculpted surfaces, undercuts and deep cavities in fewer setups.',
    image: unsplash('1602664876866-d3b33b77756b', 900),
    alt: 'Five-axis cutter finishing a sculpted metal surface',
    points: ['Sculpted and compound surfaces', 'Undercuts and deep cavities', 'Titanium and high-strength alloys'],
  },
]

export type MillingAdvantage = { icon: 'clipboard' | 'layers' | 'gauge' | 'boxes'; title: string; text: string }

export const millingAdvantages: MillingAdvantage[] = [
  {
    icon: 'clipboard',
    title: 'DFM Review Before Cutting',
    text: 'Wall thickness, tool access and tolerance calls are reviewed before the first setup, so issues surface while they are still easy to change.',
  },
  {
    icon: 'layers',
    title: '3- to 5-Axis Capacity',
    text: 'The right machine for prismatic parts, multi-face work or sculpted geometry — without forcing every part onto one platform.',
  },
  {
    icon: 'gauge',
    title: 'Tight-Tolerance Inspection',
    text: 'CMM and hand-tool checks are planned into the route, with dimensional reports and material certificates available.',
  },
  {
    icon: 'boxes',
    title: 'Prototype to Production',
    text: 'The same fixturing, toolpaths and inspection approach scale from a single prototype to scheduled repeat batches.',
  },
]

export const millingWhy = {
  image: unsplash('1581092580497-e0d23cbdf1dc', 2000),
  alt: 'Engineer reviewing machining data on a screen in a workshop',
  title: "Why Choose EZHONG's CNC Milling Services?",
}

export type MillingMaterial = {
  key: string
  name: string
  subtitle: string
  properties: string
  applications: string
  image: string
  alt: string
}

export type MillingMaterialGroup = {
  key: string
  label: string
  items: MillingMaterial[]
}

export const millingMaterialGroups: MillingMaterialGroup[] = [
  {
    key: 'metals',
    label: 'Metals',
    items: [
      {
        key: 'aluminum',
        name: 'Aluminum',
        subtitle: '6061-T6 · 7075-T6',
        properties:
          'Lightweight, corrosion-resistant and fast to machine. 6061 offers an excellent balance of strength, finish and machinability; 7075 adds strength for highly loaded parts.',
        applications: 'Housings, brackets, fixture plates, heat sinks and prototype frames.',
        image: unsplash('1624841970647-87dce8628d72', 1000),
        alt: 'CNC-milled aluminum housing with complex interior channels',
      },
      {
        key: 'stainless',
        name: 'Stainless Steel',
        subtitle: '303 · 304 · 316L · 17-4PH',
        properties:
          '303 machines freely for fittings and fasteners; 316L adds corrosion resistance for wet or hygienic environments; 17-4PH brings hardness when wear resistance matters.',
        applications: 'Shafts, bushings, medical hardware, food-processing parts and marine components.',
        image: unsplash('1666618090858-fbcee636bd3e', 1000),
        alt: 'Precision turned stainless steel shaft machined on a CNC lathe',
      },
      {
        key: 'brass',
        name: 'Brass',
        subtitle: 'C360 free-machining brass',
        properties:
          'Fast cutting, fine finishes and good electrical conductivity. Accepts plating, polishing and laser marking well, making it useful for visible and functional hardware.',
        applications: 'Fittings, electrical contacts, RF housings and decorative trim.',
        image: unsplash('1769147339214-076740872485', 1000),
        alt: 'Precision milled brass and aluminum components on technical drawings',
      },
      {
        key: 'titanium',
        name: 'Titanium',
        subtitle: 'Ti-6Al-4V',
        properties:
          'High strength-to-weight ratio and excellent corrosion resistance. Machined with conservative cuts, stable fixturing and sharp tooling to protect thin sections.',
        applications: 'Aerospace brackets, medical instruments and lightweight linkages.',
        image: unsplash('1537462715879-360eeb61a0ad', 1000),
        alt: 'Close-up of a precision machined titanium assembly',
      },
    ],
  },
  {
    key: 'plastics',
    label: 'Plastics',
    items: [
      {
        key: 'pom',
        name: 'POM / Delrin',
        subtitle: 'Dimensional stability and low friction',
        properties:
          'Machines cleanly, holds flatness and resists wear. Low moisture absorption compared with nylon makes it predictable for close-tolerance parts.',
        applications: 'Wear pads, insulators, manifolds and prototype mechanisms.',
        image: unsplash('1625465837903-0e4d77bcc467', 1000),
        alt: 'Black precision-machined POM component with complex geometry',
      },
      {
        key: 'peek',
        name: 'PEEK',
        subtitle: 'High-temperature engineering plastic',
        properties:
          'Retains strength at elevated temperatures and resists many chemicals. Machined with low-stress passes to protect flatness and hole position.',
        applications: 'Semiconductor parts, medical components and high-temperature fixtures.',
        image: unsplash('1625465404484-448f58e5c5d9', 1000),
        alt: 'Precision-machined high-performance plastic housing',
      },
      {
        key: 'pc',
        name: 'Polycarbonate (PC)',
        subtitle: 'Tough, transparent engineering plastic',
        properties:
          'High impact strength and clarity. Can be machined and polished for clear prototypes, with careful tooling to avoid edge chipping.',
        applications: 'Lenses, guards, clear housings and prototype enclosures.',
        image: unsplash('1582143434535-eba55a806718', 1000),
        alt: 'Clear polycarbonate optical components after polishing',
      },
      {
        key: 'nylon',
        name: 'Nylon (PA)',
        subtitle: 'Tough, wear-resistant plastic',
        properties:
          'Good wear and impact resistance. Absorbs moisture, so tolerances are planned around conditioning and the final environment.',
        applications: 'Gears, bushings, guides and structural prototype parts.',
        image: unsplash('1625465404484-448f58e5c5d9', 1000),
        alt: 'Machined engineering plastic components for mechanical assemblies',
      },
    ],
  },
]

export type MillingApplication = { name: string; image: string; alt: string }

export const millingApplications: MillingApplication[] = [
  {
    name: 'Aerospace',
    image: unsplash('1540575861501-7cf05a4b125a', 900),
    alt: 'Aircraft turbine engine fan detail',
  },
  {
    name: 'Automotive',
    image: unsplash('1769147339214-076740872485', 900),
    alt: 'Precision milled automotive components on engineering drawings',
  },
  {
    name: 'Electronics',
    image: unsplash('1518770660439-4636190af475', 900),
    alt: 'Macro view of a printed circuit board',
  },
  {
    name: 'Industrial Automation',
    image: unsplash('1716191299980-a6e8827ba10b', 900),
    alt: 'Industrial robot arm on an automated production line',
  },
  {
    name: 'Medical Devices',
    image: unsplash('1531746790731-6c087fecd65a', 900),
    alt: 'White robotic hand for a medical rehabilitation device',
  },
  {
    name: 'Industrial Equipment',
    image: unsplash('1625465837903-0e4d77bcc467', 900),
    alt: 'Black complex machined industrial base frame',
  },
]

export const millingSpecs: { label: string; value: string }[] = [
  {
    label: 'Maximum Part Size',
    value: 'Up to 1,200 × 600 × 500 mm (47.2 × 23.6 × 19.7 in) on 3-axis machining centers. Larger assemblies can be split into milled sub-components.',
  },
  {
    label: 'Standard Linear Tolerance',
    value: '±0.05 mm (±0.002 in) on general machined features, following the drawing and agreed inspection plan.',
  },
  {
    label: 'Precision Tolerance',
    value: '±0.01 mm (±0.0004 in) on critical features, with ±0.005 mm available on select features after DFM review.',
  },
  {
    label: 'Minimum Wall Thickness',
    value: '0.8 mm for aluminum and 1.5 mm for engineering plastics. Thinner walls are evaluated per geometry and fixturing.',
  },
  {
    label: 'Minimum Internal Radius',
    value: 'R1.5 mm typical, ideally at least one-third of the pocket depth so a reasonably stiff cutter can reach the corner.',
  },
  {
    label: 'Surface Roughness',
    value: 'Ra 3.2–0.8 µm as machined; Ra 0.4 µm or finer available with additional finishing and polishing operations.',
  },
  {
    label: 'Hole & Thread Range',
    value: 'Drilled holes from Ø0.5 mm; tapped threads from M1.6, with thread depth and callouts confirmed during review.',
  },
]

export const millingQuality = {
  image: unsplash('1758873263563-5ba4aa330799', 2000),
  alt: 'Quality technician measuring a machined component with a digital caliper',
  title: 'Ensure Optimal Custom CNC Milling Parts',
  paragraphs: [
    'Critical features are identified during DFM, checked in process and measured on calibrated equipment. First-article reports and CMM data are available with each new part.',
    'Material certificates, inspection results and finishing records are organized per order, so receiving inspection has the documentation it needs.',
  ],
  package: [
    'Material certificates',
    'First-article inspection',
    'CMM dimensional reports',
    'Surface finish verification',
    'Photos before shipment',
  ],
}

export const millingGlobal = {
  title: 'Global CNC Milling Solutions, Local Support Wherever You Are',
  description:
    'Engineering communication, production planning and logistics are coordinated from one team. Parts ship worldwide with the documentation your quality team expects.',
  cta: 'Request a Milling Quote',
  image: unsplash('1716191300020-b52dec5b70a8', 1200),
  alt: 'CNC machining center array on a manufacturing floor',
  cardTitle: 'Milling capacity',
  cardRows: ['3- to 5-axis machining centers', 'Scheduled production capacity', 'Worldwide shipping & documentation'],
}

export const millingExplain = {
  what: {
    title: 'What is CNC Milling?',
    text: 'CNC milling is a subtractive process: a rotating multi-tooth cutter removes material from a solid block while the machine moves the tool along a programmed path.',
    points: [
      'Rotating cutters remove material from a solid block.',
      'CAD geometry becomes simulated, controlled toolpaths.',
      '3-, 4- and 5-axis setups reach features in fewer operations.',
    ],
    image: unsplash('1602664876866-d3b33b77756b', 1200),
    alt: 'Five-axis CNC machine cutting a complex cavity',
  },
  how: {
    title: 'How Does CNC Milling Work?',
    text: 'A part starts as a CAD model. The CAM plan defines stock, fixtures and toolpaths; the machine then roughs, semi-finishes and finishes the part, with inspection between key stages.',
    cards: [
      {
        title: 'CAD/CAM preparation',
        text: 'Geometry, stock and fixtures are defined, then toolpaths are simulated before cutting.',
      },
      {
        title: 'Multi-axis cutting',
        text: 'Roughing, semi-finishing and finishing passes produce final dimensions and surface quality.',
      },
    ],
    image: unsplash('1666634157070-6fd830fb5672', 1200),
    alt: 'Precision spindle and cutting tool machining a shaft',
  },
}

export const millingFaqs = [
  {
    q: 'What tolerances can you hold?',
    a: '±0.01 mm is typical for machined features, with ±0.005 mm available on select features after DFM review. General features follow the drawing’s standard tolerance.',
  },
  {
    q: 'What is the maximum part size?',
    a: 'Up to 1,200 × 600 × 500 mm on 3-axis machining centers. Larger assemblies can be split into milled sub-components and joined.',
  },
  {
    q: 'What materials do you mill?',
    a: 'Aluminum, stainless steel, carbon steel, brass, titanium, tool steel and engineering plastics including POM, PEEK, polycarbonate and nylon.',
  },
  {
    q: 'Which surface finishes are available?',
    a: 'As machined, fine machining, bead blasting, sanding, polishing, anodizing, passivation, plating and powder coating are available through coordinated finishing partners.',
  },
  {
    q: 'Can you mill thin walls and deep pockets?',
    a: 'Yes, within practical limits. Thin walls and deep pockets are reviewed for tool access and stiffness, then machined with suitable stepdowns and support strategies.',
  },
  {
    q: 'How fast can I get prototypes?',
    a: 'Most milled prototypes ship in 3–7 business days after drawing approval. Material, finishing and inspection requirements can extend the schedule.',
  },
  {
    q: 'What files do you need for a quote?',
    a: 'A STEP model plus a 2D drawing with critical dimensions, tolerances, finish and quantity. IGES, X_T and native CAD files are also accepted.',
  },
  {
    q: 'Can you support repeat production?',
    a: 'Yes. Dedicated fixtures and documented setups keep repeat batches consistent, with scheduled capacity, inspection plans and material certificates available.',
  },
]

export const millingClosing = {
  title: 'Get Started with CNC Milling: From Rapid Prototypes to Production',
  description:
    'Send your CAD model, drawing and quantity. We will review manufacturability, confirm the milling route and return a clear quote with lead time.',
  cta: 'Get a CNC Milling Quote',
}
