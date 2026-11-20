// Content for the Aluminum CNC Machining service detail page.
// Sample copy — confirm alloys, tolerances and finishing claims before publishing.

import { unsplash } from './content'

export const aluminumHero = {
  titleLines: ['Aluminum CNC', 'Machining Services'],
  description:
    'Precision aluminum milling, turning and 5-axis machining for lightweight, corrosion-resistant parts — from one prototype to repeat production. Tight tolerances, clean finishes and documented inspection included.',
  cta: 'Get an Aluminum Machining Quote',
  image: unsplash('1713371398485-7bde1bde9def', 2000),
  alt: 'CNC cutting tool machining an aluminum component with coolant',
}

export type AluminumCapability = {
  title: string
  description: string
  image: string
  alt: string
  points: string[]
  href: string
}

export const aluminumCapabilities: AluminumCapability[] = [
  {
    title: 'Custom CNC Milling',
    description:
      '3- and 4-axis milling for aluminum plates, housings, brackets and fixtures, with clean pockets and controlled thin walls.',
    image: unsplash('1740209475472-aa7d280f7452', 900),
    alt: 'CNC milling machine cutting an aluminum plate with coolant',
    points: ['Pockets, slots and ribs', 'Thin-wall aluminum parts', 'Tapped holes from M2'],
    href: '#/services/cnc-milling',
  },
  {
    title: 'Custom CNC Turning',
    description:
      'Turned aluminum shafts, bushings and fittings with concentric features and fine as-machined finishes.',
    image: unsplash('1666634157070-6fd830fb5672', 900),
    alt: 'CNC lathe turning an aluminum shaft held in a chuck',
    points: ['Ø1–Ø300 mm turned parts', 'Live-tool cross-drilling', 'Threads, grooves and knurling'],
    href: '#/services/cnc-turning',
  },
  {
    title: '5-Axis CNC Machining',
    description:
      'Simultaneous five-axis motion for sculpted aluminum surfaces, undercuts and deep cavities in fewer setups.',
    image: unsplash('1602664876866-d3b33b77756b', 900),
    alt: 'Five-axis CNC cutter finishing a complex aluminum surface',
    points: ['Sculpted and compound surfaces', 'Fewer setups, tighter position', 'Deep cavities and undercuts'],
    href: '#/services/5-axis-cnc-machining',
  },
  {
    title: 'Aluminum Prototyping',
    description:
      'Single parts and small sets machined from your CAD, with DFM notes and photos before shipment.',
    image: unsplash('1769147339214-076740872485', 900),
    alt: 'Precision machined aluminum prototype components on engineering drawings',
    points: ['1–50 prototype parts', 'DFM feedback with the quote', 'Anodizing and finishing available'],
    href: '#/services/precision-cnc-machining',
  },
  {
    title: 'Precision Aluminum Machining',
    description:
      'Tight-tolerance aluminum components verified with calibrated inspection and documented reports.',
    image: unsplash('1713371398479-4410ca153b1f', 900),
    alt: 'Dial indicator checking a precision machined aluminum component',
    points: ['±0.01 mm typical', 'First-article inspection', 'CMM reports on request'],
    href: '#/services/precision-cnc-machining',
  },
  {
    title: 'High-Volume Aluminum Production',
    description:
      'Dedicated fixtures and documented setups keep dimensions stable across scheduled aluminum batches.',
    image: unsplash('1716191300020-b52dec5b70a8', 900),
    alt: 'Automated machining cells producing aluminum parts in batches',
    points: ['Repeatable production batches', 'Dedicated fixtures and setup sheets', 'Scheduled capacity'],
    href: '#/services',
  },
]

export type AluminumSolutionTab = {
  key: string
  label: string
  image: string
  alt: string
  blocks: { title: string; text: string }[]
}

export const aluminumSolutions = {
  title: 'Custom CNC Aluminum Machining Solutions for Every Type of Part',
  description:
    'From a single prototype to scheduled production, choose the route that matches your part and program. Both routes share the same engineering review and inspection standard.',
  tabs: [
    {
      key: 'custom',
      label: 'Custom Machining',
      image: unsplash('1624841970647-87dce8628d72', 1100),
      alt: 'Array of precision CNC-machined aluminum components with milled channels',
      blocks: [
        {
          title: 'Parts built to your drawing',
          text: 'Send a 3D model and a 2D drawing; we review wall thickness, tolerances and finish before quoting. Machining is planned around the features that matter, not a generic process.',
        },
        {
          title: 'From one-off to repeat supply',
          text: 'The same fixtures, toolpaths and inspection plan scale from a single validation part to pilot runs and repeat batches, keeping critical dimensions consistent.',
        },
      ],
    },
    {
      key: 'production',
      label: 'Prototype & Production',
      image: unsplash('1769147339214-076740872485', 1100),
      alt: 'Aluminum machined parts arranged on technical drawings',
      blocks: [
        {
          title: 'Fast aluminum prototypes',
          text: 'Single parts and small sets are machined from plate or extrusion with quick-turn finishing. Photos and first-article data are shared before shipment.',
        },
        {
          title: 'Production planning and inspection',
          text: 'Dedicated fixtures, documented setups and in-process checks keep flatness, hole position and cosmetic surfaces stable across batches.',
        },
      ],
    },
  ] as AluminumSolutionTab[],
}

export const aluminumWhy = {
  image: unsplash('1713371398479-4410ca153b1f', 2000),
  alt: 'High-precision measurement probe checking a machined aluminum component',
  title: 'Why Choose EZHONG for CNC Aluminum Machining?',
  paragraphs: [
    'Aluminum is easy to cut but not easy to hold. We plan clamping, stock allowance and stress relief before the first chip, so thin walls and flat surfaces stay in tolerance through finishing.',
    'Critical dimensions are verified with calibrated inspection tools and coordinated CMM reports. Material certificates, first-article documentation and finishing records travel with every batch.',
  ],
}

export const aluminumTeam = [
  {
    stage: '01',
    title: 'Business Communication & Quotation',
    image: unsplash('1454165804606-c3d57bc86b40', 800),
    alt: 'Engineer reviewing project notes and drawings at a desk',
    points: ['Drawing and model review in one business day', 'Clear quote with material and finish options', 'Minimum order from one part'],
  },
  {
    stage: '02',
    title: 'Engineering & DFM Review',
    image: unsplash('1581092580497-e0d23cbdf1dc', 800),
    alt: 'Engineer reviewing a toolpath in CAD software',
    points: ['Wall thickness and tolerance review', 'Fixture and toolpath planning', 'Revision control from drawing to part'],
  },
  {
    stage: '03',
    title: 'Production & Progress',
    image: unsplash('1740209475472-aa7d280f7452', 800),
    alt: 'CNC milling machine cutting a clamped aluminum workpiece',
    points: ['Scheduled machining and finishing', 'Progress updates at milestones', 'Changes flagged before they affect delivery'],
  },
  {
    stage: '04',
    title: 'Quality Inspection & Support',
    image: unsplash('1758873263563-5ba4aa330799', 800),
    alt: 'Technician measuring a machined part with a digital caliper',
    points: ['Dimensional and visual inspection', 'Material and inspection reports', 'Support for rework or replacement'],
  },
]

export type AluminumStability = {
  number: string
  title: string
  paragraphs: string[]
  checks: string[]
  diagram?: boolean
}

export const aluminumStability: AluminumStability[] = [
  {
    number: '1',
    title: 'Relieve stress before the final cut',
    paragraphs: [
      'Aluminum plate carries residual stress from rolling and heat treatment. Rough machine the part, release it from the stock, then finish after stress relief to avoid bowing or closing slots.',
      'For thin or asymmetric parts, plan a semi-finish and a settling period before the final pass. The sequence matters more than the finishing cut itself.',
    ],
    checks: ['Rough → stress relief → finish', 'Leave stock on critical faces', 'Check flatness between operations', 'Avoid removing both sides at once'],
    diagram: true,
  },
  {
    number: '2',
    title: 'Match the alloy and temper to the part',
    paragraphs: [
      '6061-T6 is stable and predictable for general parts. 7075-T6 machines stronger but carries more residual stress, while MIC-6 cast plate is stress-relieved for large flat fixtures.',
      'Choose the temper that meets the load case, then plan stock allowance for finishing. A harder temper is not automatically better if the part is thin or asymmetric.',
    ],
    checks: ['6061-T6 for general parts', '7075-T6 for high-load parts', 'MIC-6 for large flat fixtures', 'Confirm mill certificates'],
  },
  {
    number: '3',
    title: 'Control heat during machining',
    paragraphs: [
      'Aluminum expands as it heats. Heavy roughing without coolant can grow a part enough to shift dimensions, especially on long or thin features.',
      'Use flood coolant, sharp tools and moderate stepdowns, then measure after the part returns to room temperature. Thermal stability is part of the process plan.',
    ],
    checks: ['Flood coolant on aluminum', 'Sharp, high-rake tooling', 'Moderate depths of cut', 'Measure after cooling'],
  },
  {
    number: '4',
    title: 'Balance material removal and wall sections',
    paragraphs: [
      'Asymmetric pockets and isolated thin walls create uneven stress release. Symmetric features and consistent wall thickness distribute the remaining material more evenly.',
      'Where a light part is required, use ribs instead of uniformly thinning every wall. The structure stays stiff while chips and weight come out.',
    ],
    checks: ['Symmetric pocket layouts', 'Uniform wall thickness', 'Ribs for stiffness', 'Avoid isolated thin walls'],
  },
  {
    number: '5',
    title: 'Inspect in a stable environment',
    paragraphs: [
      'A part that is warm from machining is not at its final size. Let it stabilize before inspection and measure in a temperature-controlled room with the part supported on its datums.',
      'For tight programs, document the inspection temperature and fixturing. Consistent conditions make CMM results comparable from first article to production.',
    ],
    checks: ['Let parts stabilize before CMM', 'Inspect at 20 ± 2 °C', 'Support parts on defined datums', 'Record inspection conditions'],
  },
]

export type AluminumApplication = { name: string; image: string; alt: string }

export const aluminumApplications: AluminumApplication[] = [
  {
    name: 'Aerospace',
    image: unsplash('1540575861501-7cf05a4b125a', 900),
    alt: 'Aircraft turbine engine fan detail',
  },
  {
    name: 'Automotive',
    image: unsplash('1769147339214-076740872485', 900),
    alt: 'Precision machined automotive components on engineering drawings',
  },
  {
    name: 'Robotics & Automation',
    image: unsplash('1716191299980-a6e8827ba10b', 900),
    alt: 'Industrial robot arm on an automated production line',
  },
  {
    name: 'Electronics',
    image: unsplash('1518770660439-4636190af475', 900),
    alt: 'Macro view of an electronics circuit board',
  },
  {
    name: 'Medical Devices',
    image: unsplash('1531746790731-6c087fecd65a', 900),
    alt: 'White robotic hand for a medical rehabilitation device',
  },
  {
    name: 'Industrial Equipment',
    image: unsplash('1625465837903-0e4d77bcc467', 900),
    alt: 'Black complex machined industrial component',
  },
]

export type AluminumGrade = {
  key: string
  name: string
  subtitle: string
  properties: string
  applications: string
  image: string
  alt: string
}

export const aluminumGrades: AluminumGrade[] = [
  {
    key: '6061',
    name: '6061-T6',
    subtitle: 'General-purpose machining alloy',
    properties:
      'Balanced strength, corrosion resistance and machinability. Welds and anodizes well, and holds tight tolerances in thin sections when the process is planned around stress release.',
    applications: 'Fixtures, housings, brackets, heat sinks, prototype frames and anodized cosmetic components.',
    image: unsplash('1624841970647-87dce8628d72', 1000),
    alt: 'CNC-machined 6061 aluminum manifold block with milled channels',
  },
  {
    key: '7075',
    name: '7075-T6',
    subtitle: 'High-strength aerospace alloy',
    properties:
      'Zinc-alloyed for strength approaching steel at one-third the weight. Machines cleanly but carries more residual stress, so roughing, settling and finishing are sequenced carefully.',
    applications: 'Aerospace fittings, high-load brackets, racing components and lightweight structural parts.',
    image: unsplash('1769147339214-076740872485', 1000),
    alt: 'High-strength precision machined aluminum components',
  },
  {
    key: '5052',
    name: '5052-H32',
    subtitle: 'Corrosion-resistant forming alloy',
    properties:
      'Excellent corrosion resistance, especially in marine environments. Less machinable than 6061 but a strong choice for formed covers, panels and parts that combine bending with light machining.',
    applications: 'Enclosures, chassis panels, brackets and marine or outdoor equipment.',
    image: unsplash('1625465837903-0e4d77bcc467', 1000),
    alt: 'Formed and machined aluminum component with a protective finish',
  },
  {
    key: '2024',
    name: '2024-T351',
    subtitle: 'High-strength, fatigue-resistant alloy',
    properties:
      'Copper-alloyed for high strength and fatigue resistance. Corrosion protection is required for exposed surfaces, and machining should account for the alloy’s higher residual stress.',
    applications: 'Aircraft structures, stressed fittings and high-cycle mechanical components.',
    image: unsplash('1537462715879-360eeb61a0ad', 1000),
    alt: 'Close-up of a precision machined high-strength metal assembly',
  },
  {
    key: 'mic6',
    name: 'MIC-6 Cast Plate',
    subtitle: 'Stress-relieved cast aluminum plate',
    properties:
      'Continuous-cast and stress-relieved for flatness and dimensional stability in large plates. Machines predictably and is ideal where a fixture must stay flat over time.',
    applications: 'Machine bases, vacuum tables, fixture plates and large flat tooling.',
    image: unsplash('1713371398479-4410ca153b1f', 1000),
    alt: 'Precision machined large aluminum fixture plate being measured',
  },
]

export const aluminumBenefits: { title: string; text: string }[] = [
  {
    title: 'High strength-to-weight ratio',
    text: 'Aluminum delivers useful stiffness and strength at roughly one-third the weight of steel, reducing inertia and handling loads.',
  },
  {
    title: 'Excellent corrosion resistance',
    text: 'A natural oxide layer protects aluminum in many environments, and anodizing adds further durability for exposed parts.',
  },
  {
    title: 'Good thermal and electrical conductivity',
    text: 'Aluminum moves heat and current efficiently, making it a natural fit for heat sinks, housings and electronics hardware.',
  },
  {
    title: 'Fast, predictable machining',
    text: 'High cutting speeds and good chip formation shorten cycle times and support quick-turn prototypes and repeat production.',
  },
  {
    title: 'Tight tolerances and fine finishes',
    text: 'Stable machining behavior supports ±0.01 mm features and Ra 0.8–0.4 µm surfaces when the process is controlled.',
  },
  {
    title: 'Anodizing and finishing compatibility',
    text: 'Aluminum takes color anodizing, bead blasting, polishing and painting well for both protection and appearance.',
  },
  {
    title: 'Recyclable and widely available',
    text: 'Common alloys are available in plate, bar and extrusion, with established recycling streams and predictable supply.',
  },
  {
    title: 'Cost-effective at volume',
    text: 'Fast cutting, lower material density and fixture-based repeat setups keep unit costs down as quantities grow.',
  },
]

export const aluminumFaqs = [
  {
    q: 'What aluminum alloys do you machine?',
    a: 'Aluminum 6061-T6, 7075-T6, 5052-H32, 2024-T351 and MIC-6 cast plate are standard. Other grades such as 6082 and 6063 can be sourced on request; material certificates are available.',
  },
  {
    q: 'What tolerances can you hold on aluminum?',
    a: '±0.01 mm is typical for machined features, with ±0.005 mm available on select features after DFM review. Thin walls and large flat surfaces are confirmed case by case.',
  },
  {
    q: 'Can you machine thin-walled aluminum parts?',
    a: 'Yes. Thin walls are planned with sequenced roughing, support material, sharp tooling and controlled coolant, then inspected after the part stabilizes.',
  },
  {
    q: 'What surface finishes are available for aluminum?',
    a: 'Anodizing (Type II and Type III), bead blasting, sanding, polishing, chromate conversion, painting and powder coating are available through coordinated finishing partners.',
  },
  {
    q: 'Do you provide material certificates?',
    a: 'Yes. Mill certificates are available with each order, and aluminum grade and temper are checked against the drawing before machining.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'One part. Prototypes and small batches use the same process planning and inspection approach as production, so results carry over as quantities scale.',
  },
  {
    q: 'How do you prevent aluminum parts from warping?',
    a: 'We plan stock allowance, stress relief, balanced material removal, coolant and finishing passes in the right order. Thin parts may be semi-finished, allowed to settle and then finished.',
  },
  {
    q: 'What is the typical lead time?',
    a: 'Most aluminum prototypes ship in 3–7 business days after drawing approval. Repeat production typically takes 2–4 weeks depending on material, finishing and inspection requirements.',
  },
]

export const aluminumClosing = {
  title: 'Start Your CNC Aluminum Machining Project Today',
  description:
    'Send a 3D model and drawing with material, quantity and finish requirements. We will return a manufacturability review, a clear quote and a production plan.',
  cta: 'Get an Aluminum Machining Quote',
}
