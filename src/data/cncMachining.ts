// Content for the CNC Machining service detail page.
// Copy is sample content for the EZHONG site — confirm specifications and
// performance figures before publishing.

import { asset } from '../lib/assets'
import { unsplash } from './content'

export const cncHero = {
  eyebrow: 'On-Demand Manufacturing',
  title: 'CNC Machining Services',
  description:
    'Precision milling, turning and 5-axis machining for metal and plastic parts — from one prototype this week to repeat production next quarter. DFM feedback, documented inspection and finishing included.',
  cta: 'Get a CNC Machining Quote',
  imageLeft: unsplash('1713371398485-7bde1bde9def', 1700),
  imageRight: unsplash('1727292486976-6fd4bc056761', 1500),
  altLeft: 'CNC cutting tool machining a precision aluminum component',
  altRight: 'Operator setting up a CNC machining center control panel',
}

export type BenefitIcon = 'gauge' | 'clipboard' | 'layers' | 'boxes'

export const cncBenefits: { icon: BenefitIcon; title: string; text: string }[] = [
  {
    icon: 'gauge',
    title: 'Tight-Tolerance Machining',
    text: '3-, 4- and 5-axis milling plus mill-turn turning hold critical features to ±0.01 mm on production parts.',
  },
  {
    icon: 'clipboard',
    title: 'DFM Feedback With Every Quote',
    text: 'A manufacturability review comes with each quote, so tolerances and finishes are settled before cutting begins.',
  },
  {
    icon: 'layers',
    title: 'One Partner for Machining & Finishing',
    text: 'Machining, surface finishing, inspection and assembly are coordinated under one roof — no vendor juggling.',
  },
  {
    icon: 'boxes',
    title: 'Scalable From 1 to 10,000',
    text: 'The same process plan carries a part from prototype through pilot runs into scheduled repeat production.',
  },
]

export const cncBenefitMedia = {
  video: asset('/videos/cnc-workshop.mp4'),
  poster: asset('/videos/cnc-workshop-poster.jpg'),
  alt: 'Engineer operating CNC machines in a modern machining workshop',
  credit: 'Workshop footage · Pexels',
}

export type CncTab = {
  key: string
  label: string
  intro: string
  image: string
  alt: string
  blocks: { title: string; text: string }[]
}

export const cncTabs: CncTab[] = [
  {
    key: 'technologies',
    label: 'Machining Technologies',
    intro:
      'Match the machine and setup to the geometry, tolerance and quantity of the part — not the other way around.',
    image: unsplash('1602664876866-d3b33b77756b', 1100),
    alt: 'Five-axis cutting tool machining a complex sculpted metal part',
    blocks: [
      {
        title: 'Milling from prototype to production',
        text: 'Three-, four- and five-axis vertical machining centers handle pockets, thin walls, sculpted surfaces and multi-face features. Simulation-checked toolpaths protect tight corners and hold finishes straight off the machine.',
      },
      {
        title: 'Turning and mill-turn',
        text: 'CNC lathes with live tooling combine turned profiles, cross-drilling, threading and milling in a single setup. That protects concentricity and position while cutting handling and lead time on shaft- and housing-type parts.',
      },
    ],
  },
  {
    key: 'services',
    label: 'CNC Machining Services',
    intro:
      'Send a 3D model and drawing — receive a manufacturing plan, a clear quote and DFM notes, then machined, finished and inspected parts.',
    image: unsplash('1624841970647-87dce8628d72', 1100),
    alt: 'Array of precision CNC-machined aluminum components with milled channels and ports',
    blocks: [
      {
        title: 'Prototypes and low-volume production',
        text: 'Single parts through pilot batches are machined from your CAD with material certificates, first-article inspection and photos before shipment. Revisions are cut quickly so validation keeps moving.',
      },
      {
        title: 'Repeatable production supply',
        text: 'Dedicated fixtures, documented setup sheets and in-process checks keep dimensions stable across repeat batches. Scheduled capacity and CMM reporting support ongoing production programs.',
      },
    ],
  },
]

export type CncProcess = {
  title: string
  description: string
  image: string
  alt: string
  points: string[]
  href: string
}

export const cncProcesses: CncProcess[] = [
  {
    title: 'Precision CNC Turning',
    description: 'Turned shafts, bushings, fittings and connectors with concentric features and fine surface finishes.',
    image: unsplash('1666634157070-6fd830fb5672', 900),
    alt: 'CNC lathe turning a metal shaft held in a chuck',
    points: ['Ø1–Ø300 mm turned parts', 'Live-tool cross-drilling and milling', 'Threads, grooves and knurling'],
    href: '#/services/cnc-turning',
  },
  {
    title: 'Custom 5-Axis Machining',
    description: 'Simultaneous five-axis motion for sculpted surfaces, deep cavities and compound angles in fewer setups.',
    image: unsplash('1602664876866-d3b33b77756b', 900),
    alt: 'Five-axis cutter finishing a complex machined surface',
    points: ['Simultaneous 5-axis milling', 'Undercuts and compound angles', 'Titanium and high-strength alloys'],
    href: '#/services/5-axis-cnc-machining',
  },
  {
    title: 'CNC Milling',
    description: 'Three- and four-axis milling for plates, housings, brackets and fixtures with clean, repeatable features.',
    image: unsplash('1740209475472-aa7d280f7452', 900),
    alt: 'CNC milling machine cutting a plate with coolant flowing',
    points: ['Pockets, slots, bosses and ribs', 'Thin-wall and multi-face parts', 'Tapped holes down to M2'],
    href: '#/services/cnc-milling',
  },
  {
    title: 'Mill-Turn Production',
    description: 'Turned parts with milled features completed in one setup to protect position and concentricity.',
    image: unsplash('1666618090858-fbcee636bd3e', 900),
    alt: 'Live-tool lathe machining a shaft with a milling head',
    points: ['One-setup turn-mill parts', 'Less handling and shorter lead times', 'Bar-fed repeat batches'],
    href: '#/services/cnc-turning',
  },
  {
    title: 'Precision Inspection',
    description: 'CMM and hand-tool inspection planned alongside the process, so critical dimensions are verified — not assumed.',
    image: unsplash('1713371398479-4410ca153b1f', 900),
    alt: 'Dial indicator checking a precision machined round component',
    points: ['First-article inspection reports', 'In-process dimensional checks', 'CMM reports on request'],
    href: '#/services/precision-cnc-machining',
  },
  {
    title: 'Prototype to Production',
    description: 'The same engineering, fixturing and inspection approach scales from one-off prototypes to scheduled supply.',
    image: unsplash('1716191300020-b52dec5b70a8', 900),
    alt: 'Automated CNC production line with multiple machining stations',
    points: ['Quick-turn prototypes', 'Pilot and bridge batches', 'Repeatable production supply'],
    href: '#/services',
  },
]

export const cncCalculator = {
  background: unsplash('1716191300020-b52dec5b70a8', 2000),
  backgroundAlt: 'CNC machining centers running in a bright manufacturing workshop',
  titleLines: ['Not Chosen Yet?', 'Try Our CNC Machining Calculator'],
  body: 'Answer a few questions on material, quantity, tolerance and finish. The tool suggests a machining route and an indicative price range — then an engineer reviews the details with you.',
  note: 'No account needed · Typical reply within one business day',
  cta: 'Try the CNC Machining Calculator',
}

export type CncCalculatorStep = {
  icon: 'layers' | 'gauge' | 'clipboard' | 'shield'
  title: string
  text: string
}

export const cncCalculatorSteps: CncCalculatorStep[] = [
  {
    icon: 'layers',
    title: 'Describe the part',
    text: 'Upload a STEP model or drawing, then choose material, quantity and critical tolerances.',
  },
  {
    icon: 'gauge',
    title: 'Choose a finish',
    text: 'Select from 16 surface finishing routes — the calculator adjusts the process and estimate.',
  },
  {
    icon: 'clipboard',
    title: 'Review the route & range',
    text: 'Get a suggested machining process and an indicative price range in seconds.',
  },
  {
    icon: 'shield',
    title: 'Engineer confirmation',
    text: 'A machining engineer checks the details and confirms your final quote within one business day.',
  },
]

export type CncMaterial = {
  key: string
  name: string
  subtitle: string
  notes: string
  applications: string
  image: string
  alt: string
}

export const cncMaterials: CncMaterial[] = [
  {
    key: 'aluminum',
    name: 'Aluminum 6061 / 7075',
    subtitle: 'General-purpose and high-strength aluminum alloys',
    notes:
      'Excellent machinability, good strength-to-weight ratio and clean anodized finishes. 6061 suits brackets, housings and fixtures; 7075 adds strength for highly loaded components.',
    applications:
      'Electronics enclosures, automation fixtures, heat sinks, prototype frames and anodized cosmetic parts.',
    image: unsplash('1624841970647-87dce8628d72', 1000),
    alt: 'CNC-machined aluminum manifold block with milled channels and ports',
  },
  {
    key: 'stainless',
    name: 'Stainless Steel 303 / 304 / 316L',
    subtitle: 'Corrosion-resistant grades for demanding environments',
    notes:
      '303 machines freely for fittings and fasteners; 304 and 316L add corrosion resistance for wet or hygienic environments. 17-4PH is available when hardness and wear resistance matter.',
    applications: 'Shafts, bushings, medical hardware, food-processing parts and marine components.',
    image: unsplash('1666618090858-fbcee636bd3e', 1000),
    alt: 'Precision turned stainless steel shaft machined in a CNC lathe',
  },
  {
    key: 'titanium',
    name: 'Titanium Ti-6Al-4V',
    subtitle: 'High strength, low weight, excellent corrosion resistance',
    notes:
      'Machined with conservative cuts, stable fixturing and sharp tooling to protect thin walls and tight tolerances. Grain direction and material certificates are tracked per order.',
    applications: 'Aerospace brackets, lightweight linkages, medical instruments and performance hardware.',
    image: unsplash('1537462715879-360eeb61a0ad', 1000),
    alt: 'Close-up of a precision mechanical assembly with machined metal components',
  },
  {
    key: 'plastics',
    name: 'Engineering Plastics',
    subtitle: 'POM · PEEK · Nylon · PC · PTFE',
    notes:
      'Low-stress machining keeps flatness and hole position stable in POM, PEEK and nylon. Parts can be polished, painted or vapor-finished for prototypes and end use.',
    applications: 'Insulators, wear pads, fluid manifolds, prototype housings and lightweight structural components.',
    image: unsplash('1625465404484-448f58e5c5d9', 1000),
    alt: 'Black precision-machined engineering plastic housing',
  },
]

export const cncCapabilities: { label: string; value: string }[] = [
  {
    label: 'Tolerances',
    value:
      '±0.01 mm (±0.0004 in) typical for machined features, with ±0.005 mm available on select features after review. General machining follows ISO 2768-m unless a tighter callout is specified.',
  },
  {
    label: 'Maximum Part Size',
    value:
      'Up to 1,200 × 600 × 400 mm on 3-axis mills and Ø400 × 800 mm on turning centers. Larger assemblies can be split into machined sub-components and joined.',
  },
  {
    label: 'Surface Finish',
    value:
      'Ra 0.8–3.2 µm as machined. Bead blasting, anodizing, polishing, plating, painting and powder coating are available through coordinated finishing partners.',
  },
  {
    label: 'Materials',
    value:
      'Aluminum, stainless steel, carbon steel, titanium, brass, copper, tool steel and engineering plastics including POM, PEEK, nylon, PC and PTFE.',
  },
  {
    label: 'Order Quantities',
    value:
      'One part to 10,000+ parts. Prototype and low-volume runs start from a single setup; repeat production uses dedicated fixtures and documented process sheets.',
  },
  {
    label: 'Lead Time',
    value:
      '3–7 business days for typical prototypes and 2–4 weeks for repeat production, depending on material, finishing and inspection requirements.',
  },
  {
    label: 'Quality Documentation',
    value:
      'Material certificates, first-article inspection reports, dimensional reports and CMM data are available with every order. Photos are shared before shipment.',
  },
]

export const cncApplications: { name: string; text: string; image: string; alt: string }[] = [
  {
    name: 'Medical Devices',
    text: 'Machined housings, instrument components and rehabilitation hardware with clean surfaces and precise fits.',
    image: unsplash('1531746790731-6c087fecd65a', 700),
    alt: 'White robotic hand for a medical rehabilitation exoskeleton',
  },
  {
    name: 'Automotive',
    text: 'Powertrain covers, brackets and EV components produced in repeatable, inspected batches.',
    image: unsplash('1769147339214-076740872485', 700),
    alt: 'Precision machined automotive components resting on engineering drawings',
  },
  {
    name: 'Aerospace',
    text: 'Lightweight brackets, fittings and structural parts in aluminum and titanium with traceability.',
    image: unsplash('1540575861501-7cf05a4b125a', 700),
    alt: 'Close-up of an aircraft turbine engine fan',
  },
  {
    name: 'Robotics & Automation',
    text: 'Joint housings, end-effectors and fixtures for robot cells and automated production lines.',
    image: unsplash('1716191299980-a6e8827ba10b', 700),
    alt: 'Industrial robot arm working on an automated production line',
  },
  {
    name: 'Electronics',
    text: 'Enclosures, heat sinks and mounting hardware with accurate PCB interfaces and clean finishes.',
    image: unsplash('1518770660439-4636190af475', 700),
    alt: 'Macro view of an electronics circuit board',
  },
]

export type CncFinish = {
  key: string
  name: string
  description: string
  image: string
  alt: string
}

/** Finishing options shown in the surface finishing module (2 × 8 list). */
export const cncFinishing: CncFinish[] = [
  {
    key: 'as-machined',
    name: 'As Machined',
    description:
      'Visible tool paths and a uniform satin surface straight from the machine. Ra 3.2–1.6 µm; a practical choice for fixtures, brackets and internal faces where appearance is secondary.',
    image: unsplash('1624841970647-87dce8628d72', 900),
    alt: 'As-machined aluminum component with visible fine tool paths',
  },
  {
    key: 'fine-machining',
    name: 'Fine Machining',
    description:
      'A final light pass with a sharp finishing tool leaves an even, faint tool pattern. Ra 0.8–0.4 µm; suited to visible machined faces, journals and mating surfaces.',
    image: unsplash('1713371398479-4410ca153b1f', 900),
    alt: 'Dial indicator checking a finely machined round aluminum component',
  },
  {
    key: 'sanding-polishing',
    name: 'Sanding and Polishing',
    description:
      'Progressive abrasives blend tool marks and soften edges by hand or on a polishing lathe. Ra 0.4–0.2 µm; common on cosmetic aluminum parts and prototype enclosures.',
    image: unsplash('1666618090858-fbcee636bd3e', 900),
    alt: 'Polished turned steel shaft with a smooth reflective surface',
  },
  {
    key: 'anodizing-type-ii',
    name: 'Anodizing (Type II)',
    description:
      'An electrolytic oxide layer that adds color, wear and corrosion resistance to aluminum. Typically 10–25 µm; ideal for visible housings and consumer hardware.',
    image: unsplash('1769147339214-076740872485', 900),
    alt: 'Anodized aluminum machined components resting on engineering drawings',
  },
  {
    key: 'passivation',
    name: 'Passivation',
    description:
      'Acid cleaning removes free iron and restores the chromium oxide layer on stainless steel. No meaningful dimensional change; suited to medical, food-contact and wet-environment parts.',
    image: unsplash('1537462715879-360eeb61a0ad', 900),
    alt: 'Passivated stainless steel and titanium precision mechanical assembly',
  },
  {
    key: 'black-oxide',
    name: 'Black Oxide',
    description:
      'A conversion coating that darkens steel with minimal dimensional impact. Mild corrosion resistance when oiled; often used on tooling, fasteners and machine components.',
    image: unsplash('1625465837903-0e4d77bcc467', 900),
    alt: 'Black-finished precision machined component with complex geometry',
  },
  {
    key: 'zinc-plating',
    name: 'Zinc Plating',
    description:
      'A sacrificial zinc layer protects steel from corrosion. Clear, blue or yellow finishes; an economical option for high-volume brackets and fasteners.',
    image: unsplash('1769147339214-076740872485', 900),
    alt: 'Batch of plated precision machined steel and aluminum components',
  },
  {
    key: 'chrome-plating',
    name: 'Chrome Plating',
    description:
      'A hard, low-friction chromium layer for wear surfaces and decorative trim. Deposits of 5–25 µm; mask threads and bores where fit must be preserved.',
    image: unsplash('1666618090858-fbcee636bd3e', 900),
    alt: 'Chrome-finished turned shaft held in a CNC lathe',
  },
  {
    key: 'smooth-machining',
    name: 'Smooth Machining',
    description:
      'High-speed finishing passes produce a uniform satin surface with reduced tool marks. Ra 1.6–0.8 µm; a practical preparation step before anodizing or coating.',
    image: unsplash('1666634157070-6fd830fb5672', 900),
    alt: 'CNC turning tool producing a smooth machined shaft surface',
  },
  {
    key: 'bead-blasting',
    name: 'Bead Blasting',
    description:
      'Glass-bead media creates an even matte texture and hides light scratches. Frequently used on enclosures before anodizing, painting or laser marking.',
    image: unsplash('1625465404484-448f58e5c5d9', 900),
    alt: 'Matte bead-blasted black component with a uniform surface texture',
  },
  {
    key: 'mirror-polishing',
    name: 'Mirror Polishing',
    description:
      'Multi-stage polishing reaches a reflective, near-mirror finish on aluminum and stainless steel. Ra below 0.1 µm; suited to optical housings and display components.',
    image: unsplash('1582143434535-eba55a806718', 900),
    alt: 'Clear polished optical components with a mirror-like surface',
  },
  {
    key: 'hardcoat-anodizing',
    name: 'Hardcoat Anodizing (Type III)',
    description:
      'A thicker, harder anodic layer for demanding wear resistance. Typically 25–50 µm; used on sliding parts, fixtures and industrial hardware.',
    image: unsplash('1624841970647-87dce8628d72', 900),
    alt: 'Hardcoat anodized aluminum housing with machined sealing features',
  },
  {
    key: 'chromate-conversion',
    name: 'Chromate Conversion',
    description:
      'A thin, conductive conversion coating for aluminum. Protects bare surfaces and provides a stable base for paint, adhesive or electrical bonding.',
    image: unsplash('1769147339214-076740872485', 900),
    alt: 'Chromate conversion coated aluminum parts on a technical drawing',
  },
  {
    key: 'vacuum-metalizing',
    name: 'Vacuum Metalizing',
    description:
      'A thin metallic layer deposited under vacuum for a reflective plastic finish. Used for cosmetic housings, reflectors and light components.',
    image: unsplash('1582143434535-eba55a806718', 900),
    alt: 'Vacuum-metalized clear plastic components with a reflective coating',
  },
  {
    key: 'electroless-nickel',
    name: 'Electroless Nickel Plating',
    description:
      'A uniform nickel deposit that reaches complex geometries and internal features. Good corrosion and wear resistance without an electrical current.',
    image: unsplash('1713371398479-4410ca153b1f', 900),
    alt: 'Nickel-plated precision round component with a uniform finish',
  },
  {
    key: 'powder-coating',
    name: 'Powder Coating',
    description:
      'A durable polymer coating in a wide color range. Typically 60–100 µm; hides surface variation and protects welded or fabricated parts.',
    image: unsplash('1625465837903-0e4d77bcc467', 900),
    alt: 'Powder-coated black component with a durable satin finish',
  },
]

export type CncGuideItem = {
  number: string
  title: string
  paragraphs: string[]
  checks: string[]
  diagram?: boolean
}

export const cncGuide: CncGuideItem[] = [
  {
    number: '01',
    title: 'Simplify setups and datums',
    paragraphs: [
      'Every extra setup adds tolerance stack, fixturing cost and room for error. Where possible, design features so they can be reached from one or two faces, and avoid deep, narrow pockets that require long, flexible tools.',
      'Standardize hole sizes and depths, add flats or wrench features for turning, and specify tolerances only where function requires them. Clear datums on the drawing prevent surprises at inspection.',
    ],
    checks: ['Primary datums reachable from one face', 'Standard drill and tap sizes', 'Fillets at internal corners', 'Avoid undocumented tight tolerances'],
    diagram: true,
  },
  {
    number: '02',
    title: 'Design walls, floors and pockets for stable cutting',
    paragraphs: [
      'Thin walls deflect under cutting forces, especially in aluminum and plastics. Keep unsupported walls at 0.8 mm or thicker in aluminum and 1.5 mm or thicker in plastics, and support tall features with ribs rather than increasing wall thickness everywhere.',
      'Limit pocket depth to roughly four times the cutter diameter. Shallower pockets allow stiffer tools, better chip evacuation and a more predictable surface finish.',
    ],
    checks: ['Walls ≥ 0.8 mm in aluminum', 'Floors ≥ 0.5 mm', 'Pocket depth ≤ 4× tool diameter', 'Ribs thinner than adjoining walls'],
  },
  {
    number: '03',
    title: 'Specify tolerances only where they matter',
    paragraphs: [
      'Tolerance drives cost. Reserve tight callouts for functional fits, sealing faces and bearing bores; allow general tolerances elsewhere. A drawing with a few well-chosen critical dimensions is easier to inspect and cheaper to produce than one with tight limits everywhere.',
      'Flag cosmetic surfaces separately from functional ones, and state the acceptable finish in measurable terms so the machined result can be verified.',
    ],
    checks: ['Critical dimensions tied to function', 'General tolerance for free features', 'Cosmetic surfaces flagged', 'Finish stated in Ra or standards'],
  },
  {
    number: '04',
    title: 'Make inspection part of the design',
    paragraphs: [
      'A dimension that cannot be reached by a CMM probe or hand tool is difficult to verify. Keep critical features accessible, define datum reference frames on the drawing, and agree on acceptance criteria before production begins.',
      'For new parts, a first-article inspection plan confirms the process before batches scale. Share the report format your quality team expects so data arrives in a usable form.',
    ],
    checks: ['Critical features probe-accessible', 'Datum reference frames defined', 'First-article plan agreed', 'Report format confirmed'],
  },
]

export const cncTeam: {
  stage: string
  title: string
  image: string
  alt: string
  points: string[]
}[] = [
  {
    stage: '01',
    title: 'Quotation & DFM Review',
    image: unsplash('1454165804606-c3d57bc86b40', 800),
    alt: 'Engineer reviewing project notes and CAD requirements at a desk',
    points: ['Drawing and model review in one business day', 'Manufacturability notes with the quote', 'Material and finish recommendations'],
  },
  {
    stage: '02',
    title: 'Engineering & Process Planning',
    image: unsplash('1581092580497-e0d23cbdf1dc', 800),
    alt: 'Engineer reviewing a machined component toolpath in CAD software',
    points: ['Fixture and toolpath planning', 'Tolerance and inspection strategy', 'Revision control from drawing to part'],
  },
  {
    stage: '03',
    title: 'Production & Progress Updates',
    image: unsplash('1740209475472-aa7d280f7452', 800),
    alt: 'CNC milling machine cutting a clamped workpiece with coolant',
    points: ['Scheduled machining and finishing', 'Photo updates at key milestones', 'Schedule changes flagged early'],
  },
  {
    stage: '04',
    title: 'Inspection & After-Sales',
    image: unsplash('1758873263563-5ba4aa330799', 800),
    alt: 'Technician measuring a machined part with a digital caliper',
    points: ['Dimensional and visual inspection', 'Reports and material certificates', 'Support for rework or replacement'],
  },
]

export const cncCases: {
  title: string
  paragraphs: string[]
  image: string
  alt: string
  href: string
}[] = [
  {
    title: 'Precision Manifold Blocks for Industrial Control Units',
    paragraphs: [
      'A family of machined aluminum manifold blocks and heat-dissipating housings for industrial control units, with tight PCB mounting tolerances and a uniform cosmetic finish across production lots.',
      'Handling: staged machining and finishing trials were completed before the first batch, keeping port positions and surface appearance consistent from prototype to supply.',
    ],
    image: unsplash('1624841970647-87dce8628d72', 1100),
    alt: 'CNC-machined aluminum manifold block with milled channels and ports',
    href: '#/cases/industrial-electronics-housings',
  },
  {
    title: 'Repeat Production of Automotive Powertrain Components',
    paragraphs: [
      'Milled and turned aluminum housings and brackets produced in repeat batches, with in-process checks protecting sealing faces and bearing bores.',
      'Handling: standardized setups, documented inspection plans and coordinated scheduling keep repeat batches interchangeable for an ongoing vehicle program.',
    ],
    image: unsplash('1769147339214-076740872485', 1100),
    alt: 'Machined aluminum automotive components on engineering drawings',
    href: '#/cases/automotive-powertrain-brackets',
  },
  {
    title: 'Titanium Fittings for Aerospace Assemblies',
    paragraphs: [
      'Thin-wall titanium and high-strength aluminum fittings machined in multi-axis setups, with material traceability and full dimensional reporting.',
      'Handling: conservative toolpaths and stable fixturing protect thin sections while maintaining tight tolerances on difficult-to-machine aerospace alloys.',
    ],
    image: unsplash('1537462715879-360eeb61a0ad', 1100),
    alt: 'Close-up of precision machined titanium fittings and mechanical hardware',
    href: '#/cases/aerospace-titanium-fittings',
  },
]

export const cncFaqs: { question: string; answer: string }[] = [
  {
    question: 'What tolerances can you hold?',
    answer:
      '±0.01 mm is typical for machined features, with ±0.005 mm available on select features after DFM review. Achievable tolerance depends on material, geometry and inspection method; critical callouts are confirmed before quoting.',
  },
  {
    question: 'What file formats do you accept?',
    answer:
      'STEP, IGES, X_T and native SolidWorks or Fusion 360 files, plus 2D PDF or DXF drawings. A clear drawing with datums and critical dimensions shortens the review.',
  },
  {
    question: 'What is your minimum order quantity?',
    answer:
      'One part. Prototypes and small batches are machined from the same process plan used for production, so results carry over when quantities scale.',
  },
  {
    question: 'How fast can I get prototypes?',
    answer:
      'Most machined prototypes ship in 3–7 business days after drawing approval. Finishing, material availability and inspection requirements can extend that window.',
  },
  {
    question: 'What materials do you machine?',
    answer:
      'Aluminum, stainless steel, carbon steel, titanium, brass, copper, tool steel and engineering plastics including POM, PEEK, nylon, PC and PTFE.',
  },
  {
    question: 'Can you machine parts from my own material?',
    answer:
      'Yes. Customer-supplied material can be machined after review. We confirm condition, stock size and traceability before scheduling.',
  },
  {
    question: 'Do you offer surface finishing?',
    answer:
      'Yes. Anodizing, bead blasting, polishing, plating, painting and powder coating are coordinated with qualified finishing partners and inspected before shipment.',
  },
  {
    question: 'How do you handle quality inspection?',
    answer:
      'Critical dimensions are checked in process, and first-article reports are standard on new parts. CMM reports and material certificates are available on request.',
  },
  {
    question: 'Can you support repeat production?',
    answer:
      'Yes. Dedicated fixtures and documented setups keep repeat batches consistent, with scheduled capacity for ongoing programs and agreed inspection plans.',
  },
  {
    question: 'What if my part needs a design change?',
    answer:
      'Send the revised model or drawing and we confirm the impact on price and lead time before restarting production. Revision history is tracked per order.',
  },
]

export const cncClosing = {
  eyebrow: 'Start Here · Guide',
  title: 'How to Start Your CNC Machining Project',
  description:
    'Send a 3D model and drawing, tell us the quantity and finish, and we will return a manufacturability review with price and lead time.',
  steps: [
    { title: 'Send your CAD and requirements', text: 'Share a STEP or native model, drawing, quantity and finish.' },
    { title: 'Review DFM and quote', text: 'Get manufacturability notes, price and lead time within one business day.' },
    { title: 'Approve and start machining', text: 'Production starts after drawing sign-off; photos and reports follow.' },
  ],
  primaryCta: 'Get a CNC Machining Quote',
  secondaryCta: 'Talk to an Engineer',
}
