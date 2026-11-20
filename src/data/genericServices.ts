// Data-driven service detail pages for the remaining manufacturing services.
// Layout follows the same section rhythm as the dedicated CNC service pages.
// All copy and figures are sample content to be confirmed before publishing.

import { unsplash } from './content'
import { millingApplications, millingMaterialGroups } from './cncMilling'
import type { MaterialGroup, TeamStage } from '../components/ServiceDetailShared'

export type GenericAdvantageIcon = 'clipboard' | 'layers' | 'gauge' | 'boxes' | 'shield' | 'target'

export type GenericServiceData = {
  slug: string
  breadcrumb: string
  quoteService?: string
  hero: {
    titleLines: string[]
    description: string
    cta: string
    image: string
    alt: string
  }
  capabilities: {
    title: string
    subtitle: string
    layout?: 'grid' | 'carousel'
    items: {
      title: string
      description: string
      image: string
      alt: string
      points: string[]
      href?: string
    }[]
  }
  advantages: {
    image: string
    alt: string
    title: string
    mode: 'icons' | 'text'
    items?: { icon: GenericAdvantageIcon; title: string; text: string }[]
    paragraphs?: string[]
  }
  process: {
    title: string
    subtitle: string
    steps: { title: string; text: string }[]
  }
  materials?: { title: string; subtitle: string; groups: MaterialGroup[] }
  finish?: { title: string; defaultKey: string; keys?: string[] }
  applications: {
    title: string
    intro: string
    items: { name: string; image: string; alt: string }[]
  }
  specs?: {
    title: string
    subtitle?: string
    rows: { label: string; value: string }[]
  }
  explain?: {
    first: { title: string; text: string; points: string[]; image: string; alt: string }
    second: {
      title: string
      text: string
      cards: { title: string; text: string }[]
      image: string
      alt: string
    }
  }
  team?: {
    title: string
    subtitle: string
    stages: TeamStage[]
  }
  faqs: { q: string; a: string }[]
  closing: { title: string; description: string; cta: string }
}

const metalMaterials = millingMaterialGroups
const plasticMaterials = [millingMaterialGroups[1]]
const metalApplications = millingApplications

export const genericServices: Record<string, GenericServiceData> = {
  'precision-cnc-machining': {
    slug: 'precision-cnc-machining',
    breadcrumb: 'Precision CNC Machining',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['Precision CNC', 'Machining Service'],
      description:
        'Tight-tolerance CNC machining for critical features, with calibrated inspection, first-article reports and controlled processes from prototype to production.',
      cta: 'Get a Precision Machining Quote',
      image: unsplash('1713371398479-4410ca153b1f', 2000),
      alt: 'Precision measurement probe checking a machined metal component',
    },
    capabilities: {
      title: 'Our Precision CNC Machining Capabilities',
      subtitle:
        'Milling, turning, mill-turn and wire EDM are planned around the features that control fit and function — then verified with the inspection method that matches the drawing.',
      layout: 'grid',
      items: [
        {
          title: 'Precision CNC Milling',
          description: 'Tight-tolerance milling for critical pockets, bores, flats and multi-face features.',
          image: unsplash('1740209475472-aa7d280f7452', 900),
          alt: 'CNC milling machine cutting a precision workpiece',
          points: ['±0.01 mm typical', 'Thin-wall and multi-face parts', 'In-process probing available'],
          href: '#/services/cnc-milling',
        },
        {
          title: 'Precision CNC Turning',
          description: 'Turned features with controlled concentricity, roundness and surface finish.',
          image: unsplash('1666618090858-fbcee636bd3e', 900),
          alt: 'Precision turned shaft held in a CNC lathe',
          points: ['Ø1–Ø300 mm turned parts', 'Live-tool cross-drilling', 'Threads and precision bores'],
          href: '#/services/cnc-turning',
        },
        {
          title: 'Mill-Turn Machining',
          description: 'Turned and milled features in one setup to protect position between axes.',
          image: unsplash('1666634157070-6fd830fb5672', 900),
          alt: 'Mill-turn machine producing a complex cylindrical part',
          points: ['One-setup turn-mill parts', 'Reduced tolerance stack', 'Complex cylindrical geometry'],
          href: '#/services/cnc-turning',
        },
        {
          title: 'Wire EDM',
          description: 'Fine profiles and hardened materials cut with a wire electrode after machining.',
          image: unsplash('1713371398485-7bde1bde9def', 900),
          alt: 'Precision cutting tool finishing a complex metal profile',
          points: ['Fine internal profiles', 'Hardened tool steel', 'Small corner radii'],
          href: '#/services',
        },
      ],
    },
    advantages: {
      image: unsplash('1758873263563-5ba4aa330799', 2000),
      alt: 'Technician inspecting a precision part with a digital caliper',
      title: 'Why Choose EZHONG for Precision Machining?',
      mode: 'icons',
      items: [
        {
          icon: 'clipboard',
          title: 'Free quote and DFM analysis',
          text: 'Every RFQ includes a manufacturability review, so tolerance, access and finish are settled before cutting.',
        },
        {
          icon: 'target',
          title: 'Consistency and repeatability',
          text: 'Documented setups, dedicated fixtures and in-process checks keep critical features stable across batches.',
        },
        {
          icon: 'gauge',
          title: 'Cost-effective and fast',
          text: 'Process planning focused on the features that matter avoids unnecessary operations and lead time.',
        },
        {
          icon: 'shield',
          title: 'Documented quality',
          text: 'First-article reports, material certificates and CMM data are available with every order.',
        },
      ],
    },
    process: {
      title: 'From Drawing to Inspected Part',
      subtitle: 'A controlled sequence keeps precision features predictable — and verifiable.',
      steps: [
        { title: 'DFM review', text: 'Review datums, tolerances, wall sections and inspection access before quoting.' },
        { title: 'Process & fixturing plan', text: 'Define operations, stock allowance, workholding and in-process checks.' },
        { title: 'Precision machining', text: 'Rough, semi-finish and finish with probing and coolant control.' },
        { title: 'Inspection & documentation', text: 'Measure critical features, record results and prepare the quality package.' },
      ],
    },
    materials: {
      title: 'Materials for Precision Machining',
      subtitle: 'Metals and engineering plastics selected for stability, strength and finish.',
      groups: metalMaterials,
    },
    finish: { title: 'Precision Machining Surface Finishes', defaultKey: 'fine-machining' },
    applications: {
      title: 'Precision CNC Machining for Demanding Industries',
      intro:
        'Precision parts support demanding assemblies across aerospace, medical, automotive, robotics and electronics production.',
      items: metalApplications,
    },
    specs: {
      title: 'Precision Machining Specifications',
      rows: [
        {
          label: 'Tolerances',
          value: '±0.01 mm (±0.0004 in) typical; ±0.005 mm on select features after DFM review.',
        },
        { label: 'Surface Finish', value: 'Ra 0.8–0.4 µm on critical surfaces; finer finishes available with polishing.' },
        { label: 'Maximum Part Size', value: 'Up to 1,200 × 600 × 400 mm on mills; Ø400 × 800 mm on turning centers.' },
        { label: 'Inspection', value: 'First-article reports, CMM data, dimensional reports and material certificates.' },
        { label: 'Materials', value: 'Aluminum, stainless steel, titanium, brass, tool steel and engineering plastics.' },
        { label: 'Lead Time', value: '3–7 business days for prototypes; 2–4 weeks for repeat production.' },
      ],
    },
    faqs: [
      {
        q: 'What tolerances can you hold?',
        a: '±0.01 mm is typical, with ±0.005 mm on select features after review. Achievable tolerance depends on material, geometry and the inspection method.',
      },
      {
        q: 'Do you provide inspection reports?',
        a: 'Yes. First-article inspection is standard on new parts, and CMM data, dimensional reports and material certificates are available with each order.',
      },
      {
        q: 'Can you machine hardened materials?',
        a: 'Hardened tool steels and difficult alloys can be machined with the appropriate process, including wire EDM for fine profiles after heat treatment.',
      },
      {
        q: 'What is your minimum order quantity?',
        a: 'One part. Prototypes and production runs use the same planning and inspection approach, so results carry over as quantities scale.',
      },
      {
        q: 'How do you keep repeat parts consistent?',
        a: 'Dedicated fixtures, documented setup sheets, tool life tracking and in-process measurement keep critical dimensions stable between batches.',
      },
      {
        q: 'What files should I send?',
        a: 'A STEP model plus a 2D drawing with datums, tolerances, surface finish and quantity. IGES, X_T and native CAD files are also accepted.',
      },
    ],
    closing: {
      title: 'Start Your Precision CNC Machining Project',
      description:
        'Share your drawing and critical tolerances. We will review manufacturability, confirm the inspection plan and return a clear quote.',
      cta: 'Get a Precision Machining Quote',
    },
  },

  '5-axis-cnc-machining': {
    slug: '5-axis-cnc-machining',
    breadcrumb: '5-Axis CNC Machining',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['5-Axis CNC', 'Machining Services'],
      description:
        'Simultaneous five-axis machining for complex surfaces, undercuts and multi-face parts — with fewer setups, tighter position and full inspection support.',
      cta: 'Get a 5-Axis Machining Quote',
      image: unsplash('1602664876866-d3b33b77756b', 2000),
      alt: 'Five-axis CNC cutter machining a complex sculpted part',
    },
    capabilities: {
      title: 'Our 5-Axis CNC Machining Capabilities',
      subtitle:
        'Five-axis work is chosen when geometry, access or tolerance makes three-axis setups impractical. Simulation and stable fixturing protect the result.',
      layout: 'grid',
      items: [
        {
          title: 'Simultaneous 5-Axis Milling',
          description: 'Continuous five-axis motion keeps the cutter engaged on sculpted surfaces and compound angles.',
          image: unsplash('1602664876866-d3b33b77756b', 900),
          alt: 'Simultaneous five-axis machining of a sculpted metal part',
          points: ['Sculpted and compound surfaces', 'Short, stiff tool engagement', 'Fewer setups'],
          href: '#/services/5-axis-cnc-machining',
        },
        {
          title: 'Complex Surface Finishing',
          description: 'Fine finishing passes follow curved geometry for a consistent surface without hand blending.',
          image: unsplash('1713371398485-7bde1bde9def', 900),
          alt: 'Five-axis finishing tool cutting a complex cavity',
          points: ['Undercuts and side cavities', 'Deep cavities', 'Ra 0.8–0.4 µm finishes'],
          href: '#/services/5-axis-cnc-machining',
        },
        {
          title: '5-Axis Prototyping',
          description: 'Single parts and small sets machined from your CAD, with photos before shipment.',
          image: unsplash('1769147339214-076740872485', 900),
          alt: 'Complex machined prototype components on drawings',
          points: ['1–50 prototype parts', 'DFM feedback in the quote', 'Material certificates'],
          href: '#/services/precision-cnc-machining',
        },
        {
          title: '5-Axis Production',
          description: 'Dedicated fixtures and documented setups scale five-axis work into repeat supply.',
          image: unsplash('1716191300020-b52dec5b70a8', 900),
          alt: 'Automated machining cells producing repeat parts',
          points: ['Repeatable batches', 'Scheduled capacity', 'CMM reporting'],
          href: '#/services',
        },
      ],
    },
    advantages: {
      image: unsplash('1602664876866-d3b33b77756b', 2000),
      alt: 'Five-axis machining center cutting a complex component',
      title: 'Why Choose EZHONG for 5-Axis Machining?',
      mode: 'icons',
      items: [
        {
          icon: 'clipboard',
          title: 'DFM and simulation',
          text: 'Toolpaths and fixturing are simulated before cutting, catching collisions and reach issues early.',
        },
        {
          icon: 'layers',
          title: 'Fewer setups',
          text: 'Multi-face features are reached in one or two setups, reducing tolerance stack and handling.',
        },
        {
          icon: 'target',
          title: 'Complex geometry',
          text: 'Sculpted surfaces, undercuts and deep cavities are machined with continuous five-axis motion.',
        },
        {
          icon: 'shield',
          title: 'Inspection support',
          text: 'CMM reports, first-article inspection and material certificates document the result.',
        },
      ],
    },
    process: {
      title: 'How a 5-Axis Program Is Planned',
      subtitle: 'Geometry and access drive the setup plan — not a fixed machine route.',
      steps: [
        { title: 'DFM & tolerance review', text: 'Identify critical surfaces, datums and areas that need five-axis access.' },
        { title: 'Simulation & fixturing', text: 'Verify toolpaths, holders and workholding in simulation before cutting.' },
        { title: '5-axis machining', text: 'Rough, semi-finish and finish with continuous or indexed multi-axis motion.' },
        { title: 'Inspection & hand-off', text: 'Measure critical features and prepare reports for the next operation.' },
      ],
    },
    materials: {
      title: '5-Axis CNC Machining Materials',
      subtitle: 'Aluminum, stainless steel, titanium and engineering plastics, matched to the application.',
      groups: metalMaterials,
    },
    finish: { title: '5-Axis Machining Surface Finishes', defaultKey: 'fine-machining' },
    applications: {
      title: '5-Axis Machining for Demanding Industries',
      intro:
        'Five-axis parts support aerospace structures, medical instruments, automotive tooling and complex industrial assemblies.',
      items: metalApplications,
    },
    specs: {
      title: '5-Axis Machining Capabilities',
      rows: [
        { label: 'Axes', value: 'Simultaneous 5-axis milling; 3+2 indexed work also available.' },
        { label: 'Maximum Part Size', value: 'Up to 1,000 × 700 × 500 mm, depending on setup and workholding.' },
        { label: 'Tolerances', value: '±0.01 mm typical on critical features; ±0.005 mm after review.' },
        { label: 'Surface Finish', value: 'Ra 0.8–0.4 µm on finished surfaces; finer with polishing.' },
        { label: 'Materials', value: 'Aluminum, stainless steel, titanium, Inconel, tool steel and engineering plastics.' },
        { label: 'Lead Time', value: '5–10 business days for complex prototypes; 3–5 weeks for production.' },
      ],
    },
    explain: {
      first: {
        title: 'What is 5-axis CNC machining?',
        text: 'Five-axis machining moves the cutter across three linear axes and two rotary axes at the same time. The tool can approach a surface from many directions without re-fixturing the part.',
        points: [
          'Continuous motion follows complex curved surfaces.',
          'Multi-face features are reached in fewer setups.',
          'Shorter, stiffer tools improve surface finish.',
        ],
        image: unsplash('1602664876866-d3b33b77756b', 1200),
        alt: 'Five-axis machine cutting a sculpted surface',
      },
      second: {
        title: 'When should a part use five axes?',
        text: 'Five-axis is not automatically better for every part. It earns its cost when geometry, access or tolerance makes additional setups risky.',
        cards: [
          {
            title: 'Complex surfaces',
            text: 'Sculpted contours and compound angles are cut in a continuous path.',
          },
          {
            title: 'Hidden features',
            text: 'Undercuts and side cavities are reached without flipping the part.',
          },
        ],
        image: unsplash('1666634157070-6fd830fb5672', 1200),
        alt: 'Close-up of a multi-axis tool cutting a complex part',
      },
    },
    faqs: [
      {
        q: 'When is 5-axis machining worth it?',
        a: 'It is usually worthwhile when the part has sculpted surfaces, features on multiple faces or tolerances that would stack across extra setups.',
      },
      {
        q: 'What materials can you machine on five axes?',
        a: 'Aluminum, stainless steel, titanium, Inconel, tool steel and engineering plastics. Difficult alloys are reviewed for tooling and cycle time.',
      },
      {
        q: 'What is the maximum part size?',
        a: 'Typically up to 1,000 × 700 × 500 mm, depending on the setup and workholding. Larger parts can be reviewed case by case.',
      },
      {
        q: 'Can you hold ±0.01 mm?',
        a: 'Yes on critical features, with ±0.005 mm available after review. Five-axis work often improves position because fewer setups are required.',
      },
      {
        q: 'Do you simulate the toolpaths?',
        a: 'Yes. Toolpaths, holders and workholding are simulated before cutting to catch collisions and unreachable features.',
      },
      {
        q: 'How fast can I get a five-axis prototype?',
        a: 'Most complex five-axis prototypes ship in 5–10 business days after drawing approval, depending on material and finishing.',
      },
    ],
    closing: {
      title: 'Start Your 5-Axis CNC Machining Project',
      description:
        'Send the CAD model, critical tolerances and quantity. We will confirm the five-axis route, fixturing and inspection plan in the quote.',
      cta: 'Get a 5-Axis Machining Quote',
    },
  },

  'cnc-turning': {
    slug: 'cnc-turning',
    breadcrumb: 'CNC Turning',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['CNC Turning', 'Services'],
      description:
        'Precision CNC turning for shafts, bushings, fittings and connectors — with live-tool milling, controlled concentricity and repeatable production.',
      cta: 'Get a CNC Turning Quote',
      image: unsplash('1666634157070-6fd830fb5672', 2000),
      alt: 'CNC lathe turning a metal shaft held in a chuck',
    },
    capabilities: {
      title: 'Our CNC Turning Capabilities',
      subtitle:
        'Turning is planned around concentricity, surface finish and the features that must stay aligned along the part axis.',
      layout: 'grid',
      items: [
        {
          title: 'CNC Turning',
          description: 'Turned diameters, faces, bores and grooves with controlled roundness and finish.',
          image: unsplash('1666634157070-6fd830fb5672', 900),
          alt: 'CNC lathe turning a shaft with a cutting tool',
          points: ['Ø1–Ø300 mm', 'Precision bores and faces', 'Ra 0.8–0.4 µm finishes'],
          href: '#/services/cnc-turning',
        },
        {
          title: 'Live-Tool Mill-Turn',
          description: 'Cross-drilling, milling and flats completed on the lathe in one setup.',
          image: unsplash('1666618090858-fbcee636bd3e', 900),
          alt: 'Live-tool lathe machining a shaft with a milling head',
          points: ['One-setup turn-mill parts', 'Cross-holes and flats', 'Reduced tolerance stack'],
          href: '#/services/cnc-turning',
        },
        {
          title: 'Precision Shafts & Bushings',
          description: 'Long shafts, bushings and sleeves with careful support and straightness control.',
          image: unsplash('1713371398479-4410ca153b1f', 900),
          alt: 'Precision turned component being measured',
          points: ['Straightness control', 'Concentric bores', 'Ground or turned finishes'],
          href: '#/services/precision-cnc-machining',
        },
        {
          title: 'Bar-Fed Repeat Production',
          description: 'Bar-fed turning keeps small parts consistent across scheduled batches.',
          image: unsplash('1716191300020-b52dec5b70a8', 900),
          alt: 'Automated production line for repeat turned parts',
          points: ['Repeatable batches', 'Documented setups', 'Scheduled capacity'],
          href: '#/services',
        },
      ],
    },
    advantages: {
      image: unsplash('1666634157070-6fd830fb5672', 2000),
      alt: 'CNC lathe machining a precision shaft',
      title: 'Why Choose EZHONG for CNC Turning?',
      mode: 'icons',
      items: [
        {
          icon: 'target',
          title: 'Concentricity control',
          text: 'Turning and mill-turn setups protect alignment between diameters, bores and features on the same axis.',
        },
        {
          icon: 'clipboard',
          title: 'DFM feedback',
          text: 'Undercuts, thread relief and live-tool features are reviewed before quoting.',
        },
        {
          icon: 'layers',
          title: 'One-setup capability',
          text: 'Live tooling completes milled features on the lathe, reducing handling and tolerance stack.',
        },
        {
          icon: 'shield',
          title: 'Repeatability',
          text: 'Bar-fed production, documented setups and inspection keep repeat batches consistent.',
        },
      ],
    },
    process: {
      title: 'How a Turned Part Is Produced',
      subtitle: 'The axis, workholding and inspection plan are set before the bar is cut.',
      steps: [
        { title: 'Drawing review', text: 'Confirm diameters, threads, tolerances and live-tool features.' },
        { title: 'Bar & fixturing', text: 'Select material, bar size, collet or chuck and support strategy.' },
        { title: 'Turning & mill-turn', text: 'Rough and finish turned features, then complete milled features in setup.' },
        { title: 'Inspection', text: 'Check diameters, concentricity, threads and surface finish.' },
      ],
    },
    materials: {
      title: 'CNC Turning Materials',
      subtitle: 'Metals and engineering plastics selected for machinability and part function.',
      groups: metalMaterials,
    },
    finish: { title: 'CNC Turning Surface Finish Options', defaultKey: 'smooth-machining' },
    applications: {
      title: 'Applications of CNC Turned Parts',
      intro:
        'Turned parts appear in fluid systems, motion assemblies, automotive hardware and industrial machinery.',
      items: metalApplications,
    },
    specs: {
      title: 'CNC Turning Capabilities',
      rows: [
        { label: 'Maximum Diameter', value: 'Ø300 mm standard; larger diameters reviewed case by case.' },
        { label: 'Maximum Length', value: 'Up to 800 mm between supports, depending on diameter and straightness.' },
        { label: 'Tolerances', value: '±0.01 mm typical; ±0.005 mm on critical diameters and bores.' },
        { label: 'Surface Finish', value: 'Ra 0.8–0.4 µm turned finishes; finer with polishing.' },
        { label: 'Materials', value: 'Aluminum, stainless steel, brass, carbon steel, titanium and engineering plastics.' },
        { label: 'Lead Time', value: '3–7 business days for prototypes; 2–4 weeks for repeat production.' },
      ],
    },
    faqs: [
      {
        q: 'What is the largest turned part you can make?',
        a: 'Standard turning covers diameters up to Ø300 mm and lengths up to 800 mm, depending on support and straightness requirements.',
      },
      {
        q: 'Can you mill flats and cross-holes on a turned part?',
        a: 'Yes. Live tooling performs cross-drilling, flats and milling on the lathe, often in the same setup as the turning.',
      },
      {
        q: 'How do you control concentricity?',
        a: 'Features are sequenced in one or two setups, with support, careful chucking and in-process measurement of critical diameters.',
      },
      {
        q: 'What finishes are available?',
        a: 'As machined, smooth machining, sanding, polishing, bead blasting, anodizing, passivation and plating are available.',
      },
      {
        q: 'Can you produce repeat batches?',
        a: 'Yes. Bar-fed turning, documented setups and inspection plans keep small and medium parts consistent across scheduled orders.',
      },
      {
        q: 'What files do you need?',
        a: 'A STEP model and a 2D drawing with diameters, threads, tolerances and surface finish. Quantity helps us choose bar size and setup.',
      },
    ],
    closing: {
      title: 'Start Your CNC Turning Project',
      description:
        'Send the drawing, material and quantity. We will confirm the turning or mill-turn route and return a clear quote.',
      cta: 'Get a CNC Turning Quote',
    },
  },

  'cnc-metal-machining': {
    slug: 'cnc-metal-machining',
    breadcrumb: 'CNC Metal Machining',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['CNC Metal', 'Machining Services'],
      description:
        'Precision milling, turning and 5-axis machining for aluminum, stainless steel, titanium, brass and tool steel — from prototypes to repeat production.',
      cta: 'Get a Metal Machining Quote',
      image: unsplash('1740209475472-aa7d280f7452', 2000),
      alt: 'CNC machine cutting a metal workpiece with coolant',
    },
    capabilities: {
      title: 'Our CNC Metal Machining Capabilities',
      subtitle:
        'Metal parts are planned around material behavior, tooling and the inspection needed for the alloy and geometry.',
      layout: 'grid',
      items: [
        {
          title: 'Metal Milling',
          description: 'Prismatic metal parts with pockets, slots, tapped holes and multi-face features.',
          image: unsplash('1740209475472-aa7d280f7452', 900),
          alt: 'CNC milling of a metal housing',
          points: ['Aluminum and steel housings', 'Pockets and slots', 'Tapped holes from M2'],
          href: '#/services/cnc-milling',
        },
        {
          title: 'Metal Turning',
          description: 'Turned shafts, fittings and bushings with controlled concentricity and finish.',
          image: unsplash('1666618090858-fbcee636bd3e', 900),
          alt: 'CNC turning a stainless steel shaft',
          points: ['Ø1–Ø300 mm', 'Threads and grooves', 'Live-tool features'],
          href: '#/services/cnc-turning',
        },
        {
          title: '5-Axis Metal Machining',
          description: 'Complex metal geometry with sculpted surfaces and multi-face access in fewer setups.',
          image: unsplash('1602664876866-d3b33b77756b', 900),
          alt: 'Five-axis machining of a complex metal part',
          points: ['Sculpted surfaces', 'Undercuts and deep cavities', 'Titanium and high-strength alloys'],
          href: '#/services/5-axis-cnc-machining',
        },
        {
          title: 'Metal Prototyping',
          description: 'Single metal parts and small sets with DFM feedback and photos before shipment.',
          image: unsplash('1769147339214-076740872485', 900),
          alt: 'Machined metal prototype components on drawings',
          points: ['1–50 prototype parts', 'Fast DFM feedback', 'Material certificates'],
          href: '#/services/precision-cnc-machining',
        },
      ],
    },
    advantages: {
      image: unsplash('1740209475472-aa7d280f7452', 2000),
      alt: 'CNC machine cutting metal with coolant',
      title: 'Why Choose EZHONG for CNC Metal Machining?',
      mode: 'icons',
      items: [
        {
          icon: 'clipboard',
          title: 'Material-aware DFM',
          text: 'Tooling, speeds and inspection are planned around the alloy, hardness and part geometry.',
        },
        {
          icon: 'layers',
          title: 'Multiple metal processes',
          text: 'Milling, turning and 5-axis work are coordinated under one process plan.',
        },
        {
          icon: 'gauge',
          title: 'Tight tolerances',
          text: 'Critical metal features are machined and inspected to agreed tolerances.',
        },
        {
          icon: 'shield',
          title: 'Traceable materials',
          text: 'Mill certificates and inspection records are available with each order.',
        },
      ],
    },
    process: {
      title: 'From Metal Stock to Finished Part',
      subtitle: 'The route is matched to the alloy and the features that control function.',
      steps: [
        { title: 'Material & DFM review', text: 'Confirm alloy, temper, stock form and manufacturability.' },
        { title: 'Process planning', text: 'Select machining operations, tooling, workholding and inspection.' },
        { title: 'Machining', text: 'Rough, semi-finish and finish with coolant and tool-wear control.' },
        { title: 'Finishing & inspection', text: 'Apply the specified finish and verify critical dimensions.' },
      ],
    },
    materials: {
      title: 'Metals for CNC Machining',
      subtitle: 'Aluminum, stainless steel, brass and titanium, selected for strength, corrosion and finish.',
      groups: [millingMaterialGroups[0]],
    },
    finish: { title: 'CNC Metal Machining Surface Finishes', defaultKey: 'fine-machining' },
    applications: {
      title: 'Applications of CNC Machined Metal Parts',
      intro:
        'Machined metal components support aerospace, automotive, robotics, electronics and industrial equipment.',
      items: metalApplications,
    },
    specs: {
      title: 'CNC Metal Machining Specifications',
      rows: [
        { label: 'Maximum Part Size', value: 'Up to 1,200 × 600 × 400 mm on mills; Ø400 × 800 mm on lathes.' },
        { label: 'Tolerances', value: '±0.01 mm typical; ±0.005 mm on select features after review.' },
        { label: 'Surface Finish', value: 'Ra 0.8–0.4 µm as machined; finer with polishing.' },
        { label: 'Materials', value: 'Aluminum, stainless steel, carbon steel, titanium, brass, copper and tool steel.' },
        { label: 'Heat Treatment', value: 'Stress relief, hardening and surface treatment coordinated with qualified partners.' },
        { label: 'Lead Time', value: '3–7 business days prototypes; 2–4 weeks production, depending on finish.' },
      ],
    },
    faqs: [
      {
        q: 'Which metals do you machine?',
        a: 'Aluminum, stainless steel, carbon steel, titanium, brass, copper and tool steel. Material certificates are available.',
      },
      {
        q: 'Can you machine hardened steel?',
        a: 'Yes, with the appropriate tooling and process, including EDM where fine profiles or hardened sections require it.',
      },
      {
        q: 'How do you control corrosion on metal parts?',
        a: 'Finishing options include anodizing, passivation, zinc or chrome plating, electroless nickel and powder coating.',
      },
      {
        q: 'Can you supply material?',
        a: 'Yes. We source common alloys in plate, bar and extrusion. Customer-supplied material can be reviewed for condition and traceability.',
      },
      {
        q: 'What tolerances are practical?',
        a: '±0.01 mm is typical; tighter tolerances are possible on select features but should be discussed during DFM review.',
      },
      {
        q: 'Do you support repeat metal production?',
        a: 'Yes. Dedicated fixtures, documented setups and scheduled inspection support repeat production batches.',
      },
    ],
    closing: {
      title: 'Start Your CNC Metal Machining Project',
      description:
        'Send the drawing, alloy and quantity. We will confirm the machining route, finish and inspection plan.',
      cta: 'Get a Metal Machining Quote',
    },
  },

  'cnc-plastic-machining': {
    slug: 'cnc-plastic-machining',
    breadcrumb: 'CNC Plastic Machining',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['CNC Plastic', 'Machining Services'],
      description:
        'Low-stress CNC machining for engineering plastics — prototypes, insulators, manifolds and end-use parts with clean edges and stable dimensions.',
      cta: 'Get a Plastic Machining Quote',
      image: unsplash('1625465404484-448f58e5c5d9', 2000),
      alt: 'Precision-machined black engineering plastic housing',
    },
    capabilities: {
      title: 'Our CNC Plastic Machining Capabilities',
      subtitle:
        'Plastics behave differently from metals. Tooling, fixturing and inspection are planned to control heat, stress and moisture.',
      layout: 'grid',
      items: [
        {
          title: 'Plastic Milling',
          description: 'Machined plastic housings, plates and fixtures with clean pockets and edges.',
          image: unsplash('1625465404484-448f58e5c5d9', 900),
          alt: 'CNC-machined plastic housing',
          points: ['POM, PEEK, PC and nylon', 'Thin walls and pockets', 'Polished or matte finishes'],
          href: '#/services/cnc-milling',
        },
        {
          title: 'Plastic Turning',
          description: 'Turned plastic bushings, insulators and sleeves with controlled roundness.',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Precision-machined plastic component',
          points: ['Bushings and insulators', 'Threads and grooves', 'Low-stress passes'],
          href: '#/services/cnc-turning',
        },
        {
          title: 'Clear Plastic Machining',
          description: 'Acrylic and polycarbonate parts machined for clarity, then polished as needed.',
          image: unsplash('1582143434535-eba55a806718', 900),
          alt: 'Clear polished plastic optical components',
          points: ['Acrylic and PC', 'Polished edges', 'Clear prototypes'],
          href: '#/services/clear-prototyping',
        },
        {
          title: 'Low-Stress Prototypes',
          description: 'Single parts and small sets with fixturing planned to limit distortion.',
          image: unsplash('1625465404484-448f58e5c5d9', 900),
          alt: 'Engineering plastic prototype parts',
          points: ['1–50 parts', 'Material coupons on request', 'Photos before shipment'],
          href: '#/services/precision-cnc-machining',
        },
      ],
    },
    advantages: {
      image: unsplash('1625465404484-448f58e5c5d9', 2000),
      alt: 'Machined engineering plastic components',
      title: 'Why Choose EZHONG for CNC Plastic Machining?',
      mode: 'icons',
      items: [
        {
          icon: 'target',
          title: 'Low-stress machining',
          text: 'Sharp tooling, moderate feeds and support keep flatness and hole position stable.',
        },
        {
          icon: 'clipboard',
          title: 'Material-aware DFM',
          text: 'Moisture absorption, wall thickness and heat are reviewed against the chosen plastic.',
        },
        {
          icon: 'layers',
          title: 'Finishing options',
          text: 'Sanding, polishing, bead blasting and painting are coordinated for appearance and function.',
        },
        {
          icon: 'shield',
          title: 'Repeatable results',
          text: 'Documented setups and inspection keep repeat plastic parts consistent.',
        },
      ],
    },
    process: {
      title: 'How a Plastic Part Is Machined',
      subtitle: 'The material grade and conditioning drive the machining and inspection plan.',
      steps: [
        { title: 'Material review', text: 'Confirm grade, moisture condition, stock form and application.' },
        { title: 'Fixturing', text: 'Plan support and clamping to limit deflection and stress.' },
        { title: 'Low-stress machining', text: 'Use sharp tooling, controlled heat and appropriate feeds.' },
        { title: 'Finish & inspect', text: 'Apply the finish and verify critical dimensions after stabilization.' },
      ],
    },
    materials: {
      title: 'Engineering Plastics for CNC Machining',
      subtitle: 'POM, PEEK, polycarbonate and nylon, selected for stiffness, wear, clarity or temperature.',
      groups: plasticMaterials,
    },
    finish: {
      title: 'CNC Plastic Machining Surface Finishes',
      defaultKey: 'fine-machining',
      keys: ['as-machined', 'fine-machining', 'sanding-polishing', 'bead-blasting', 'mirror-polishing', 'vacuum-metalizing'],
    },
    applications: {
      title: 'Applications of CNC Machined Plastic Parts',
      intro:
        'Machined plastics serve electronics, medical devices, fluid handling, automation and prototype assemblies.',
      items: [
        {
          name: 'Electronics',
          image: unsplash('1518770660439-4636190af475', 900),
          alt: 'Circuit board inside an electronics assembly',
        },
        {
          name: 'Medical Devices',
          image: unsplash('1531746790731-6c087fecd65a', 900),
          alt: 'Medical rehabilitation robotic hand',
        },
        {
          name: 'Industrial Automation',
          image: unsplash('1716191299980-a6e8827ba10b', 900),
          alt: 'Industrial robot arm on an automated line',
        },
        {
          name: 'Fluid Handling',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Machined plastic manifold component',
        },
        {
          name: 'Consumer Products',
          image: unsplash('1582143434535-eba55a806718', 900),
          alt: 'Clear plastic consumer components',
        },
        {
          name: 'Automotive',
          image: unsplash('1769147339214-076740872485', 900),
          alt: 'Precision automotive components on drawings',
        },
      ],
    },
    specs: {
      title: 'CNC Plastic Machining Specifications',
      rows: [
        { label: 'Maximum Part Size', value: 'Up to 1,000 × 600 × 300 mm, depending on the plastic and fixturing.' },
        { label: 'Tolerances', value: '±0.05 mm typical on plastics; ±0.02 mm on stable grades after review.' },
        { label: 'Minimum Wall', value: '1.5 mm for most engineering plastics; thinner sections reviewed case by case.' },
        { label: 'Materials', value: 'POM, PEEK, PC, nylon, PTFE, ABS and acrylic.' },
        { label: 'Stress & Moisture', value: 'Parts can be conditioned or stress-relieved before final machining and inspection.' },
        { label: 'Lead Time', value: '3–7 business days for prototypes; 2–4 weeks for repeat production.' },
      ],
    },
    faqs: [
      {
        q: 'Which plastics do you machine?',
        a: 'POM (Delrin), PEEK, polycarbonate, nylon, PTFE, ABS and acrylic are standard. Other grades can be sourced on request.',
      },
      {
        q: 'Why are plastic tolerances looser than metal?',
        a: 'Plastics expand, absorb moisture and deflect more under cutting forces. Tolerances are set around the material and the service environment.',
      },
      {
        q: 'Can you machine clear plastic parts?',
        a: 'Yes. Acrylic and polycarbonate can be machined and polished for clear prototypes and optical components.',
      },
      {
        q: 'How do you prevent melting or chatter?',
        a: 'Sharp tooling, appropriate speeds and feeds, coolant or air blast, and stable workholding keep heat and vibration under control.',
      },
      {
        q: 'What finishes are available for plastics?',
        a: 'As machined, fine machining, sanding, polishing, bead blasting, painting and vacuum metalizing are available.',
      },
      {
        q: 'Can you produce small repeat batches?',
        a: 'Yes. Documented setups and inspection plans support prototypes and small-to-medium repeat production.',
      },
    ],
    closing: {
      title: 'Start Your CNC Plastic Machining Project',
      description:
        'Send the drawing, plastic grade and quantity. We will confirm the machining route, finish and inspection plan.',
      cta: 'Get a Plastic Machining Quote',
    },
  },

  '3d-printing': {
    slug: '3d-printing',
    breadcrumb: '3D Printing',
    hero: {
      titleLines: ['3D Printing', 'Services'],
      description:
        'SLA, SLS and metal 3D printing for prototypes and functional parts — with post-processing, CNC finishing and inspection when precision matters.',
      cta: 'Get a 3D Printing Quote',
      image: unsplash('1611117775350-ac3950990985', 2000),
      alt: 'Industrial 3D printers producing prototype parts',
    },
    capabilities: {
      title: 'Our 3D Printing Capabilities',
      subtitle:
        'Choose the additive process that fits the geometry, material and finish. Critical interfaces can be CNC-machined after printing.',
      layout: 'grid',
      items: [
        {
          title: 'SLA Resin Printing',
          description: 'High-detail resin parts for visual prototypes, fixtures and small functional components.',
          image: unsplash('1611117775350-ac3950990985', 900),
          alt: 'SLA 3D printer producing a detailed prototype',
          points: ['Fine feature detail', 'Smooth surfaces', 'Clear and tough resins'],
        },
        {
          title: 'SLS Nylon Printing',
          description: 'Durable nylon parts for functional prototypes and low-volume end use.',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Durable SLS nylon prototype part',
          points: ['PA12 nylon', 'No support marks on most faces', 'Good impact resistance'],
        },
        {
          title: 'Metal 3D Printing',
          description: 'Metal additive parts for complex geometry and consolidated assemblies.',
          image: unsplash('1713371398485-7bde1bde9def', 900),
          alt: 'Complex metal component produced by additive manufacturing',
          points: ['Stainless steel 316L', 'AlSi10Mg aluminum', 'Post-machining available'],
        },
      ],
    },
    advantages: {
      image: unsplash('1611117775350-ac3950990985', 2000),
      alt: 'Row of industrial 3D printers',
      title: 'Why Choose EZHONG for 3D Printing?',
      mode: 'icons',
      items: [
        {
          icon: 'layers',
          title: 'Design freedom',
          text: 'Internal channels, lattice structures and consolidated assemblies are built without tooling.',
        },
        {
          icon: 'gauge',
          title: 'Fast prototypes',
          text: 'Printed parts move from file review to shipment in days, not weeks.',
        },
        {
          icon: 'target',
          title: 'CNC finishing',
          text: 'Critical bores, flats and mating surfaces can be machined after printing for precision.',
        },
        {
          icon: 'boxes',
          title: 'Practical cost',
          text: 'No hard tooling is needed, making one-off and low-volume parts economical.',
        },
      ],
    },
    process: {
      title: 'From File to Finished 3D-Printed Part',
      subtitle: 'Print orientation, supports and post-processing are planned with the application in mind.',
      steps: [
        { title: 'File & DFM review', text: 'Check wall thickness, orientation, supports and critical features.' },
        { title: 'Print setup', text: 'Select resin, powder or metal and prepare the build.' },
        { title: 'Printing', text: 'Build the part with monitored process parameters.' },
        { title: 'Post-processing', text: 'Clean, cure, remove supports, finish and inspect as specified.' },
      ],
    },
    materials: {
      title: '3D Printing Materials',
      subtitle: 'Resins, nylons and metals selected for detail, durability or end-use performance.',
      groups: [
        {
          key: 'resins',
          label: 'Resins',
          items: [
            {
              key: 'standard-resin',
              name: 'Standard Resin',
              subtitle: 'Detail and smooth surfaces',
              properties: 'Fine feature resolution and smooth surfaces for visual models, jigs and presentation parts.',
              applications: 'Concept models, form studies, master patterns and display parts.',
              image: unsplash('1582143434535-eba55a806718', 900),
              alt: 'Clear detailed resin-printed components',
            },
            {
              key: 'tough-resin',
              name: 'Tough Resin',
              subtitle: 'Impact-resistant prototypes',
              properties: 'Higher elongation and impact resistance than standard resin, suitable for functional testing.',
              applications: 'Snap fits, brackets, housings and prototype mechanisms.',
              image: unsplash('1625465837903-0e4d77bcc467', 900),
              alt: 'Tough resin prototype component',
            },
            {
              key: 'clear-resin',
              name: 'Clear Resin',
              subtitle: 'Transparent prototypes',
              properties: 'Polished clear parts for light guides, lenses and visual flow testing.',
              applications: 'Optical prototypes, light pipes and transparent housings.',
              image: unsplash('1582143434535-eba55a806718', 900),
              alt: 'Clear resin-printed optical components',
            },
          ],
        },
        {
          key: 'nylons',
          label: 'Nylons',
          items: [
            {
              key: 'pa12',
              name: 'PA12 Nylon',
              subtitle: 'Durable functional parts',
              properties: 'Balanced strength, impact resistance and detail for functional prototypes and small batches.',
              applications: 'Enclosures, brackets, ducts and living hinges.',
              image: unsplash('1625465404484-448f58e5c5d9', 900),
              alt: 'Durable SLS nylon housing',
            },
            {
              key: 'pa12-gf',
              name: 'Glass-Filled PA12',
              subtitle: 'Stiffer nylon parts',
              properties: 'Higher stiffness and temperature resistance than unfilled nylon, with a slightly rougher surface.',
              applications: 'Structural brackets, fixtures and load-bearing prototypes.',
              image: unsplash('1625465837903-0e4d77bcc467', 900),
              alt: 'Glass-filled nylon industrial component',
            },
          ],
        },
        {
          key: 'metals',
          label: 'Metals',
          items: [
            {
              key: 'ss316l',
              name: 'Stainless Steel 316L',
              subtitle: 'Corrosion-resistant metal parts',
              properties: 'Good corrosion resistance and ductility for complex metal components and consolidated assemblies.',
              applications: 'Manifolds, brackets, impellers and functional metal prototypes.',
              image: unsplash('1537462715879-360eeb61a0ad', 900),
              alt: 'Complex stainless steel additive component',
            },
            {
              key: 'alsi10mg',
              name: 'AlSi10Mg Aluminum',
              subtitle: 'Lightweight metal parts',
              properties: 'Lightweight aluminum alloy with good strength and thermal properties for additive manufacturing.',
              applications: 'Heat sinks, lightweight brackets and housings.',
              image: unsplash('1713371398485-7bde1bde9def', 900),
              alt: 'Aluminum additive manufacturing part',
            },
          ],
        },
      ],
    },
    finish: {
      title: '3D Printing Post-Processing Options',
      defaultKey: 'sanding-polishing',
      keys: ['sanding-polishing', 'bead-blasting', 'mirror-polishing', 'vacuum-metalizing', 'powder-coating'],
    },
    applications: {
      title: 'Applications of 3D-Printed Parts',
      intro:
        'Additive manufacturing supports concept validation, functional prototypes, tooling and low-volume production across industries.',
      items: [
        { name: 'Product Prototypes', image: unsplash('1611117775350-ac3950990985', 900), alt: '3D-printed prototype parts' },
        { name: 'Medical Devices', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'Medical device prototype' },
        { name: 'Automotive', image: unsplash('1769147339214-076740872485', 900), alt: 'Automotive prototype components' },
        { name: 'Aerospace', image: unsplash('1540575861501-7cf05a4b125a', 900), alt: 'Aerospace engine component' },
        { name: 'Consumer Products', image: unsplash('1582143434535-eba55a806718', 900), alt: 'Clear consumer product prototype' },
        { name: 'Industrial Tooling', image: unsplash('1740209475472-aa7d280f7452', 900), alt: 'Industrial tooling fixture' },
      ],
    },
    specs: {
      title: '3D Printing Capabilities',
      rows: [
        { label: 'Processes', value: 'SLA resin, SLS nylon and metal additive manufacturing.' },
        { label: 'Build Volume', value: 'Up to 300 × 300 × 400 mm depending on process; larger parts can be split and joined.' },
        { label: 'Layer Height', value: '0.05–0.15 mm depending on process and surface requirement.' },
        { label: 'Tolerance', value: '±0.2 mm typical; CNC machining after printing for tighter interfaces.' },
        { label: 'Post-Processing', value: 'Cleaning, curing, support removal, sanding, polishing, painting and CNC finishing.' },
        { label: 'Lead Time', value: '2–5 business days for most printed prototypes; finishing can add 1–3 days.' },
      ],
    },
    explain: {
      first: {
        title: 'What is 3D printing?',
        text: '3D printing builds a part layer by layer from a CAD model. It removes the need for hard tooling and makes complex internal geometry practical at low volume.',
        points: [
          'Geometry is built additively, not cut from stock.',
          'Internal channels and lattices are possible.',
          'Post-processing sets the final surface and precision.',
        ],
        image: unsplash('1611117775350-ac3950990985', 1200),
        alt: '3D printers building parts layer by layer',
      },
      second: {
        title: 'SLA, SLS or metal?',
        text: 'The process follows the requirement: detail and smoothness, functional toughness or metal performance.',
        cards: [
          { title: 'SLA', text: 'High detail and smooth resin surfaces for visual and functional prototypes.' },
          { title: 'SLS', text: 'Durable nylon parts without support marks on most surfaces.' },
        ],
        image: unsplash('1582143434535-eba55a806718', 1200),
        alt: 'Detailed additive-manufactured parts',
      },
    },
    faqs: [
      {
        q: 'What is the difference between SLA and SLS?',
        a: 'SLA uses resin and a light source for high detail and smooth surfaces. SLS uses nylon powder and a laser for durable, support-free functional parts.',
      },
      {
        q: 'Can 3D-printed parts be machined?',
        a: 'Yes. Critical bores, flats and mating surfaces can be CNC-machined after printing to hold tighter tolerances.',
      },
      {
        q: 'What tolerances can you hold?',
        a: '±0.2 mm is typical for printed features; tighter interfaces are achieved with post-machining.',
      },
      {
        q: 'What post-processing is available?',
        a: 'Support removal, cleaning, curing, sanding, polishing, painting, vacuum metalizing and CNC finishing.',
      },
      {
        q: 'How fast can I get parts?',
        a: 'Most printed prototypes ship in 2–5 business days after file review; finishing may add time.',
      },
      {
        q: 'What files do you need?',
        a: 'A watertight STL or STEP model, plus finish, quantity and any critical dimensions.',
      },
    ],
    closing: {
      title: 'Start Your 3D Printing Project',
      description:
        'Upload your model, choose a process and finish, and we will review the build and return a quote.',
      cta: 'Get a 3D Printing Quote',
    },
  },

  'clear-prototyping': {
    slug: 'clear-prototyping',
    breadcrumb: 'Clear Prototyping',
    hero: {
      titleLines: ['Clear Prototyping', 'Service'],
      description:
        'Clear machined, cast and molded prototypes for lenses, light guides, housings and optical components — with polishing and inspection for clarity.',
      cta: 'Get a Clear Prototyping Quote',
      image: unsplash('1582143434535-eba55a806718', 2000),
      alt: 'Clear polished optical prototype components',
    },
    capabilities: {
      title: 'Our Clear Prototyping Capabilities',
      subtitle:
        'Clarity depends on material, tooling, polishing and inspection. The route is chosen around the optical requirement, not just the geometry.',
      layout: 'grid',
      items: [
        {
          title: 'CNC Clear Machining',
          description: 'Acrylic and polycarbonate parts machined and polished for clear prototypes.',
          image: unsplash('1582143434535-eba55a806718', 900),
          alt: 'Clear machined acrylic components',
          points: ['Acrylic and PC', 'Polished edges and faces', 'Tight optical features'],
          href: '#/services/clear-prototyping',
        },
        {
          title: 'Vapor Polishing',
          description: 'Controlled solvent vapor smooths machined surfaces for a clearer finish.',
          image: unsplash('1666618090858-fbcee636bd3e', 900),
          alt: 'Polished clear component surface',
          points: ['Reduced tool marks', 'Clear surface finish', 'Post-machining process'],
          href: '#/services/clear-prototyping',
        },
        {
          title: 'Vacuum Cast Clear Parts',
          description: 'Silicone molds and clear urethane for small series of optical prototypes.',
          image: unsplash('1625465404484-448f58e5c5d9', 900),
          alt: 'Clear cast prototype components',
          points: ['Small series', 'Color and clarity options', 'Silicone mold tooling'],
          href: '#/services/vacuum-casting',
        },
        {
          title: 'Clear Injection Molding',
          description: 'Low-volume clear molded parts using rapid tooling.',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Clear injection-molded component',
          points: ['Rapid tooling', 'Production-like material', 'T1 samples'],
          href: '#/services/rapid-tooling',
        },
      ],
    },
    advantages: {
      image: unsplash('1582143434535-eba55a806718', 2000),
      alt: 'Clear optical prototype lenses',
      title: 'Why Choose EZHONG for Clear Prototyping?',
      mode: 'icons',
      items: [
        {
          icon: 'target',
          title: 'Clarity-focused process',
          text: 'Tooling, polishing and inspection are planned around the optical surface requirement.',
        },
        {
          icon: 'layers',
          title: 'Multiple clear routes',
          text: 'CNC, vacuum casting and rapid tooling are compared for quantity, material and finish.',
        },
        {
          icon: 'gauge',
          title: 'Surface validation',
          text: 'Parts are checked visually and dimensionally before shipment, with photos when useful.',
        },
        {
          icon: 'shield',
          title: 'Prototype to bridge',
          text: 'The same optical requirements carry from a single prototype to a small production batch.',
        },
      ],
    },
    process: {
      title: 'How a Clear Prototype Is Produced',
      subtitle: 'The finish route is selected before the first cut or cast.',
      steps: [
        { title: 'Optical requirement review', text: 'Confirm clarity, surface, geometry and quantity.' },
        { title: 'Process selection', text: 'Choose CNC, vacuum casting or clear molding and the polishing route.' },
        { title: 'Machining or casting', text: 'Produce the part with tooling suited to clear material.' },
        { title: 'Polish & inspect', text: 'Polish or vapor-finish, then inspect clarity and dimensions.' },
      ],
    },
    materials: {
      title: 'Clear Prototyping Materials',
      subtitle: 'Acrylic, polycarbonate, clear urethane and optical resins, selected for clarity and process.',
      groups: [
        {
          key: 'clear',
          label: 'Clear materials',
          items: [
            {
              key: 'pmma',
              name: 'Acrylic (PMMA)',
              subtitle: 'Optical clarity and machinability',
              properties: 'Excellent clarity and machinability; polished edges and faces produce bright optical prototypes.',
              applications: 'Lenses, light guides, display windows and clear housings.',
              image: unsplash('1582143434535-eba55a806718', 900),
              alt: 'Clear acrylic optical components',
            },
            {
              key: 'pc',
              name: 'Polycarbonate',
              subtitle: 'Impact-resistant clarity',
              properties: 'High impact strength with good clarity; machining requires careful tooling to avoid edge chipping.',
              applications: 'Protective lenses, guards and durable clear housings.',
              image: unsplash('1582143434535-eba55a806718', 900),
              alt: 'Clear polycarbonate components',
            },
            {
              key: 'clear-pu',
              name: 'Clear Urethane',
              subtitle: 'Vacuum-cast optical prototypes',
              properties: 'Cast clear urethane for small series when machining or tooling cost is not justified.',
              applications: 'Light pipes, lenses and prototype windows.',
              image: unsplash('1625465404484-448f58e5c5d9', 900),
              alt: 'Clear cast urethane prototype',
            },
            {
              key: 'optical-resin',
              name: 'Optical Resin',
              subtitle: 'Fine-detail transparent prints',
              properties: 'Clear resin for fine features and rapid optical form studies; polishing improves clarity.',
              applications: 'Form studies, light guides and display models.',
              image: unsplash('1582143434535-eba55a806718', 900),
              alt: 'Clear resin optical prototype',
            },
          ],
        },
      ],
    },
    finish: {
      title: 'Clear Prototype Finishing Options',
      defaultKey: 'mirror-polishing',
      keys: ['sanding-polishing', 'mirror-polishing', 'bead-blasting', 'vacuum-metalizing'],
    },
    applications: {
      title: 'Applications for Clear Prototypes',
      intro:
        'Clear parts validate optics, light paths and product appearance before tooling is committed.',
      items: [
        { name: 'Automotive Lighting', image: unsplash('1769147339214-076740872485', 900), alt: 'Automotive lighting prototype components' },
        { name: 'Light Pipes', image: unsplash('1582143434535-eba55a806718', 900), alt: 'Clear light pipe prototype' },
        { name: 'Display Lenses', image: unsplash('1518770660439-4636190af475', 900), alt: 'Display electronics with clear lens' },
        { name: 'Medical Optics', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'Medical optical device prototype' },
        { name: 'Consumer Devices', image: unsplash('1582143434535-eba55a806718', 900), alt: 'Clear consumer device housing' },
        { name: 'Industrial Sensors', image: unsplash('1716191299980-a6e8827ba10b', 900), alt: 'Industrial sensor assembly' },
      ],
    },
    specs: {
      title: 'Clear Prototyping Capabilities',
      rows: [
        { label: 'Processes', value: 'CNC machining, vapor polishing, vacuum casting and clear rapid tooling.' },
        { label: 'Maximum Size', value: 'Up to 800 × 500 × 200 mm depending on process.' },
        { label: 'Tolerance', value: '±0.05 mm typical on machined clear parts; ±0.01 mm with review.' },
        { label: 'Surface', value: 'Polished or vapor-finished surfaces; optical inspection and photos before shipment.' },
        { label: 'Materials', value: 'Acrylic, polycarbonate, clear urethane and optical resin.' },
        { label: 'Lead Time', value: '3–7 business days for machined prototypes; casting and molding depend on tooling.' },
      ],
    },
    faqs: [
      {
        q: 'Can you machine clear acrylic and polycarbonate?',
        a: 'Yes. Both are machined with tooling and feeds selected to reduce chipping, then polished or vapor-finished as required.',
      },
      {
        q: 'How clear can a prototype be?',
        a: 'Clarity depends on material and finish. Polished acrylic offers the clearest result; cast or printed parts are suited to form and light-path studies.',
      },
      {
        q: 'What is vapor polishing?',
        a: 'A controlled solvent vapor smooths the machined surface, reducing tool marks and improving clarity without removing material by hand.',
      },
      {
        q: 'Can you produce a small clear batch?',
        a: 'Yes. Vacuum casting or clear rapid tooling can bridge from a prototype to a small production series.',
      },
      {
        q: 'What tolerances are possible?',
        a: '±0.05 mm is typical on machined clear parts, with tighter tolerances reviewed against the optical and fit requirements.',
      },
      {
        q: 'What files do you need?',
        a: 'A STEP model, drawing or optical requirements, material preference and quantity.',
      },
    ],
    closing: {
      title: 'Start Your Clear Prototyping Project',
      description:
        'Send the model, clarity requirement and quantity. We will recommend a machining, casting or molding route and confirm the finish.',
      cta: 'Get a Clear Prototyping Quote',
    },
  },

  'vacuum-casting': {
    slug: 'vacuum-casting',
    breadcrumb: 'Vacuum Casting',
    hero: {
      titleLines: ['Vacuum Casting', 'Services'],
      description:
        'Silicone-mold vacuum casting for small series of production-like plastic parts — with color matching, overmolding and finishing.',
      cta: 'Get a Vacuum Casting Quote',
      image: unsplash('1625465404484-448f58e5c5d9', 2000),
      alt: 'Production-like cast plastic housing prototype',
    },
    capabilities: {
      title: 'Our Vacuum Casting Capabilities',
      subtitle:
        'Vacuum casting bridges the gap between a prototype and injection molding, using silicone molds and urethane systems.',
      layout: 'grid',
      items: [
        {
          title: 'Silicone Mold Tooling',
          description: 'Master patterns and silicone molds for small-series casting.',
          image: unsplash('1625465404484-448f58e5c5d9', 900),
          alt: 'Silicone mold tooling for vacuum casting',
          points: ['Fast mold turnaround', 'Multiple parts per mold', 'Design revisions accommodated'],
          href: '#/services/vacuum-casting',
        },
        {
          title: 'Urethane Casting',
          description: 'Cast parts in ABS-like, PC-like, rubber-like and PP-like urethane systems.',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Urethane cast production-like component',
          points: ['Production-like materials', 'Small series', 'Color matching'],
          href: '#/services/vacuum-casting',
        },
        {
          title: 'Small-Series Production',
          description: 'Bridge supply for pilot builds and market tests before injection tooling.',
          image: unsplash('1716191300020-b52dec5b70a8', 900),
          alt: 'Small-series production of cast components',
          points: ['10–1,000 parts', 'Consistent batches', 'Finishing and assembly'],
          href: '#/services/vacuum-casting',
        },
        {
          title: 'Overmolding & Inserts',
          description: 'Insert and overmold features for functional prototypes and assemblies.',
          image: unsplash('1582143434535-eba55a806718', 900),
          alt: 'Cast prototype with overmolded details',
          points: ['Metal inserts', 'Overmolded grips', 'Multi-material parts'],
          href: '#/services/vacuum-casting',
        },
      ],
    },
    advantages: {
      image: unsplash('1625465404484-448f58e5c5d9', 2000),
      alt: 'Vacuum-cast plastic prototype housings',
      title: 'Why Choose EZHONG for Vacuum Casting?',
      mode: 'icons',
      items: [
        {
          icon: 'gauge',
          title: 'Economical bridge',
          text: 'Silicone tooling avoids the cost and lead time of production molds for small series.',
        },
        {
          icon: 'layers',
          title: 'Production-like results',
          text: 'Urethane systems mimic common molded plastics in feel, color and function.',
        },
        {
          icon: 'boxes',
          title: 'Fast turnaround',
          text: 'Molds and cast parts move quickly, supporting pilot builds and market tests.',
        },
        {
          icon: 'shield',
          title: 'Finish and inspection',
          text: 'Painting, texturing and dimensional checks are available with each batch.',
        },
      ],
    },
    process: {
      title: 'How Vacuum Casting Works',
      subtitle: 'A silicone mold is built from a master pattern, then filled under vacuum.',
      steps: [
        { title: 'Master pattern', text: 'Machine or print a master with the required surface and detail.' },
        { title: 'Silicone mold', text: 'Cast a flexible silicone mold around the master.' },
        { title: 'Vacuum casting', text: 'Fill the mold with urethane under vacuum, then cure.' },
        { title: 'Finish & inspect', text: 'Trim, finish, paint and inspect the cast parts.' },
      ],
    },
    materials: {
      title: 'Vacuum Casting Urethane Systems',
      subtitle: 'Urethane systems selected to mimic ABS, PC, rubber or PP in prototype and bridge parts.',
      groups: [
        {
          key: 'urethanes',
          label: 'Urethane systems',
          items: [
            {
              key: 'abs-like',
              name: 'PU (ABS-like)',
              subtitle: 'General prototype housings',
              properties: 'Rigid, production-like feel with good detail and paint adhesion for housings and covers.',
              applications: 'Enclosures, covers, consumer housings and functional prototypes.',
              image: unsplash('1625465404484-448f58e5c5d9', 900),
              alt: 'ABS-like cast prototype housing',
            },
            {
              key: 'pc-like',
              name: 'PU (PC-like, clear)',
              subtitle: 'Clear prototype parts',
              properties: 'Transparent cast system for lenses, light guides and clear housings.',
              applications: 'Optical prototypes, light pipes and clear covers.',
              image: unsplash('1582143434535-eba55a806718', 900),
              alt: 'Clear cast urethane components',
            },
            {
              key: 'rubber-like',
              name: 'PU (Rubber-like)',
              subtitle: 'Flexible grips and seals',
              properties: 'Shore hardness options for flexible parts, grips and sealing prototypes.',
              applications: 'Grips, gaskets, bumpers and overmolded grips.',
              image: unsplash('1625465837903-0e4d77bcc467', 900),
              alt: 'Rubber-like cast prototype component',
            },
            {
              key: 'pp-like',
              name: 'PU (PP-like)',
              subtitle: 'Tough, lightweight prototypes',
              properties: 'Tough, slightly flexible system for living hinges and impact-resistant parts.',
              applications: 'Living hinges, covers and tough prototype components.',
              image: unsplash('1625465404484-448f58e5c5d9', 900),
              alt: 'PP-like cast prototype component',
            },
          ],
        },
      ],
    },
    finish: {
      title: 'Vacuum Casting Finishing Options',
      defaultKey: 'sanding-polishing',
      keys: ['sanding-polishing', 'bead-blasting', 'mirror-polishing', 'vacuum-metalizing', 'powder-coating'],
    },
    applications: {
      title: 'Applications of Vacuum-Cast Parts',
      intro:
        'Vacuum casting supports pilot builds, market tests and production-like prototypes across consumer and industrial products.',
      items: [
        { name: 'Consumer Products', image: unsplash('1625465404484-448f58e5c5d9', 900), alt: 'Consumer product prototype housing' },
        { name: 'Medical Devices', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'Medical device prototype' },
        { name: 'Automotive', image: unsplash('1769147339214-076740872485', 900), alt: 'Automotive prototype components' },
        { name: 'Electronics', image: unsplash('1518770660439-4636190af475', 900), alt: 'Electronics housing prototype' },
        { name: 'Industrial Equipment', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Industrial equipment prototype' },
        { name: 'Optical Parts', image: unsplash('1582143434535-eba55a806718', 900), alt: 'Clear cast optical prototype' },
      ],
    },
    specs: {
      title: 'Vacuum Casting Technical Guide',
      rows: [
        { label: 'Standard Accuracy', value: '±0.2 mm typical; silicone mold shrinkage is accounted for in the master pattern.' },
        { label: 'Maximum Part Size', value: 'Up to 800 × 600 × 400 mm, depending on mold and geometry.' },
        { label: 'Minimum Wall Thickness', value: '0.8–1.5 mm depending on the urethane system and part shape.' },
        { label: 'Mold Lifetime', value: 'Typically 20–30 parts per silicone mold, depending on geometry and material.' },
        { label: 'Materials', value: 'PU systems mimicking ABS, PC, rubber and PP.' },
        { label: 'Lead Time', value: '5–10 business days after master approval, depending on quantity and finishing.' },
      ],
    },
    faqs: [
      {
        q: 'How many parts can one silicone mold produce?',
        a: 'Typically 20–30 castings per mold, depending on geometry, wall thickness and the urethane system.',
      },
      {
        q: 'How does vacuum casting compare to injection molding?',
        a: 'It avoids hard tooling and is economical for small series, but mold life and cycle speed are lower than production injection molding.',
      },
      {
        q: 'What materials are available?',
        a: 'Urethane systems mimicking ABS, PC, rubber and PP, with color matching and clear options.',
      },
      {
        q: 'Can cast parts be painted or textured?',
        a: 'Yes. Painting, texturing, polishing and assembly can be coordinated after casting.',
      },
      {
        q: 'What is the typical accuracy?',
        a: '±0.2 mm is typical. Shrinkage is compensated in the master pattern, and tighter features can be reviewed.',
      },
      {
        q: 'What do you need to quote?',
        a: 'A 3D model or master drawing, quantity, material preference, color and finish requirements.',
      },
    ],
    closing: {
      title: 'Start Your Vacuum Casting Project',
      description:
        'Send the model, quantity and finish. We will confirm the silicone tooling and casting route and return a quote.',
      cta: 'Get a Vacuum Casting Quote',
    },
  },

  'rapid-tooling': {
    slug: 'rapid-tooling',
    breadcrumb: 'Rapid Tooling',
    hero: {
      titleLines: ['Rapid Tooling', 'Services'],
      description:
        'Aluminum and steel molds for low-volume injection molding — production-like parts without the lead time of full production tooling.',
      cta: 'Get a Rapid Tooling Quote',
      image: unsplash('1716191300020-b52dec5b70a8', 2000),
      alt: 'Machining and tooling cells on a manufacturing floor',
    },
    capabilities: {
      title: 'Our Rapid Tooling Capabilities',
      subtitle:
        'Rapid tooling balances tool life, part quantity and material so a pilot build can move without over-investing in steel.',
      layout: 'grid',
      items: [
        {
          title: 'Aluminum Mold Tooling',
          description: 'Machined aluminum molds for low-volume production and bridge tooling.',
          image: unsplash('1625465404484-448f58e5c5d9', 900),
          alt: 'Machined aluminum mold tooling',
          points: ['Fast tooling lead time', 'Low-volume production', 'Production-like parts'],
          href: '#/services/rapid-tooling',
        },
        {
          title: 'Steel Mold Tooling',
          description: 'Hardened steel molds for higher volumes and longer tool life.',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Steel injection mold tooling',
          points: ['Longer tool life', 'Higher volumes', 'Production material options'],
          href: '#/services/rapid-tooling',
        },
        {
          title: 'Low-Volume Injection Molding',
          description: 'T1 samples through pilot and bridge batches using rapid tooling.',
          image: unsplash('1716191300020-b52dec5b70a8', 900),
          alt: 'Low-volume injection molding production',
          points: ['T1 samples', 'Pilot batches', 'Bridge supply'],
          href: '#/services/rapid-tooling',
        },
      ],
    },
    advantages: {
      image: unsplash('1716191300020-b52dec5b70a8', 2000),
      alt: 'Rapid tooling and molding production floor',
      title: "Why Choose EZHONG's Rapid Tooling Services?",
      mode: 'icons',
      items: [
        {
          icon: 'gauge',
          title: 'Fast tooling',
          text: 'Aluminum tooling is machined quickly to support early samples and pilot builds.',
        },
        {
          icon: 'clipboard',
          title: 'DFM support',
          text: 'Part design, gate location, draft and ejection are reviewed before cutting steel.',
        },
        {
          icon: 'boxes',
          title: 'Flexible volumes',
          text: 'Tooling and process are matched to pilot, bridge or low-volume production quantities.',
        },
        {
          icon: 'shield',
          title: 'T1 validation',
          text: 'First samples are inspected and documented before production continues.',
        },
      ],
    },
    process: {
      title: 'From Part Design to Molded Samples',
      subtitle: 'Tool design and molding trials are planned together to shorten the loop.',
      steps: [
        { title: 'DFM & mold design', text: 'Review draft, wall thickness, gates, cooling and ejection.' },
        { title: 'Tooling manufacture', text: 'Machine the mold base and cavity inserts.' },
        { title: 'T1 samples', text: 'Run first samples, inspect and adjust the tool as needed.' },
        { title: 'Pilot production', text: 'Mold pilot or bridge batches with documented process settings.' },
      ],
    },
    materials: {
      title: 'Tooling & Molding Materials',
      subtitle: 'Mold materials and production resins are selected for quantity, detail and part function.',
      groups: [
        {
          key: 'tooling',
          label: 'Tooling',
          items: [
            {
              key: 'aluminum',
              name: 'Aluminum 7075',
              subtitle: 'Low-volume rapid tooling',
              properties: 'Machines quickly and conducts heat well, making it suitable for pilot and bridge tooling.',
              applications: 'Low-volume molds, bridge tooling and prototype cavities.',
              image: unsplash('1625465404484-448f58e5c5d9', 900),
              alt: 'Aluminum mold tooling',
            },
            {
              key: 'p20',
              name: 'P20 Steel',
              subtitle: 'General production tooling',
              properties: 'Pre-hardened mold steel with good polishability and wear resistance for medium volumes.',
              applications: 'Consumer parts, housings and general injection-molded components.',
              image: unsplash('1625465837903-0e4d77bcc467', 900),
              alt: 'Steel mold tooling',
            },
            {
              key: 'h13',
              name: 'H13 Steel',
              subtitle: 'High-volume or abrasive resins',
              properties: 'Hot-work steel with high hardness and wear resistance for demanding molding conditions.',
              applications: 'High-volume tools, glass-filled resins and abrasive materials.',
              image: unsplash('1666618090858-fbcee636bd3e', 900),
              alt: 'Hardened steel mold insert',
            },
          ],
        },
        {
          key: 'resins',
          label: 'Molding resins',
          items: [
            {
              key: 'abs',
              name: 'ABS',
              subtitle: 'General-purpose molded plastic',
              properties: 'Good impact strength, surface finish and processability for housings and covers.',
              applications: 'Consumer housings, covers and general molded parts.',
              image: unsplash('1625465404484-448f58e5c5d9', 900),
              alt: 'ABS molded housing',
            },
            {
              key: 'pc',
              name: 'PC / PC-ABS',
              subtitle: 'Tough, heat-resistant parts',
              properties: 'Higher impact and temperature resistance, with good dimensional stability.',
              applications: 'Electronics housings, structural covers and durable components.',
              image: unsplash('1582143434535-eba55a806718', 900),
              alt: 'Clear and tough molded plastic components',
            },
            {
              key: 'pa-gf',
              name: 'PA6 / PA66 (GF)',
              subtitle: 'Stiff, glass-filled nylon',
              properties: 'High stiffness and strength with glass reinforcement; requires wear-resistant tooling.',
              applications: 'Structural brackets, mounts and mechanical housings.',
              image: unsplash('1625465837903-0e4d77bcc467', 900),
              alt: 'Glass-filled nylon molded component',
            },
            {
              key: 'pp',
              name: 'PP',
              subtitle: 'Lightweight, chemical-resistant parts',
              properties: 'Good chemical resistance and living-hinge performance at low density.',
              applications: 'Caps, containers, living hinges and chemical-resistant parts.',
              image: unsplash('1625465404484-448f58e5c5d9', 900),
              alt: 'Polypropylene molded components',
            },
          ],
        },
      ],
    },
    applications: {
      title: 'Applications of Rapid Tooling',
      intro:
        'Rapid tooling supports pilot builds, market tests and bridge production before full steel tooling is committed.',
      items: [
        { name: 'Consumer Products', image: unsplash('1625465404484-448f58e5c5d9', 900), alt: 'Consumer product housing' },
        { name: 'Electronics', image: unsplash('1518770660439-4636190af475', 900), alt: 'Electronics housing and PCB' },
        { name: 'Medical Devices', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'Medical device housing' },
        { name: 'Automotive', image: unsplash('1769147339214-076740872485', 900), alt: 'Automotive components' },
        { name: 'Industrial Equipment', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Industrial molded component' },
        { name: 'Optical Parts', image: unsplash('1582143434535-eba55a806718', 900), alt: 'Clear molded optical component' },
      ],
    },
    specs: {
      title: 'Rapid Tooling Specifications',
      rows: [
        { label: 'Mold Size', value: 'Up to 800 × 600 mm mold bases, depending on press and part size.' },
        { label: 'Cavity Count', value: 'Single-cavity and multi-cavity tools depending on quantity and geometry.' },
        { label: 'Tolerances', value: 'Molded part tolerances depend on resin and geometry; critical features are reviewed.' },
        { label: 'Tool Life', value: 'Aluminum tools for low volumes; steel tools for higher volumes and abrasive resins.' },
        { label: 'Resins', value: 'ABS, PC, PC-ABS, PA6/PA66 (GF), PP and TPE/TPU.' },
        { label: 'Lead Time', value: 'Aluminum tooling typically 2–3 weeks; T1 samples and finishing follow.' },
      ],
    },
    faqs: [
      {
        q: 'How many parts can a rapid tool produce?',
        a: 'Aluminum tools typically support hundreds to a few thousand parts depending on geometry and resin. Steel tools support higher volumes.',
      },
      {
        q: 'What is the difference between rapid tooling and production tooling?',
        a: 'Rapid tooling prioritizes speed and lower cost for pilot volumes. Production tooling is built for higher volume, longer life and tighter process control.',
      },
      {
        q: 'Which resins can be molded?',
        a: 'ABS, PC, PC-ABS, PA6/PA66 with glass fill, PP and TPE/TPU, subject to tool design and quantity.',
      },
      {
        q: 'Do you provide T1 samples?',
        a: 'Yes. First samples are molded, inspected and documented before moving to pilot or bridge production.',
      },
      {
        q: 'Can you machine mold inserts in-house?',
        a: 'Yes. Mold bases and inserts are machined and coordinated with molding trials.',
      },
      {
        q: 'What do you need to quote a tool?',
        a: 'A 3D part model, 2D drawing with tolerances, resin, quantity and cosmetic requirements.',
      },
    ],
    closing: {
      title: 'Start Your Rapid Tooling Project',
      description:
        'Send the part model, resin and expected quantity. We will recommend an aluminum or steel tool and confirm the sample plan.',
      cta: 'Get a Rapid Tooling Quote',
    },
  },

  'sheet-metal-fabrication': {
    slug: 'sheet-metal-fabrication',
    breadcrumb: 'Sheet Metal Fabrication',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['Custom Sheet Metal', 'Fabrication Services'],
      description:
        'Laser cutting, CNC bending, punching, welding and hardware insertion for brackets, panels, enclosures and assemblies — from prototypes to production.',
      cta: 'Get a Sheet Metal Quote',
      image: unsplash('1701788607416-f1b5dd5a09ec', 2000),
      alt: 'Precision bent and fabricated sheet metal parts',
    },
    capabilities: {
      title: 'Our Sheet Metal Fabrication Capabilities',
      subtitle:
        'Fabrication is planned around the flat pattern, bend sequence and assembly requirements so parts fit the first time.',
      layout: 'grid',
      items: [
        {
          title: 'Fiber Laser Cutting',
          description: 'Clean cut edges and accurate flat patterns in sheet metal.',
          image: unsplash('1593106410288-caf65eca7c9d', 900),
          alt: 'Fiber laser cutting sheet metal',
          points: ['Accurate flat patterns', 'Clean cut edges', 'Small nested features'],
          href: '#/services/sheet-metal-fabrication',
        },
        {
          title: 'CNC Press Brake Bending',
          description: 'Controlled bend angles and radii with repeatable setups.',
          image: unsplash('1701788607416-f1b5dd5a09ec', 900),
          alt: 'CNC press brake bending sheet metal',
          points: ['Tight bend angles', 'Repeatable radii', 'Bend relief planning'],
          href: '#/services/sheet-metal-fabrication',
        },
        {
          title: 'Punching & Forming',
          description: 'Punched holes, louvers and forms for higher-volume sheet parts.',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Punched and formed sheet metal component',
          points: ['Holes and cutouts', 'Louvers and forms', 'Repeatable production'],
          href: '#/services/sheet-metal-fabrication',
        },
        {
          title: 'Welding & Assembly',
          description: 'TIG, MIG and spot welding with hardware insertion and assembly.',
          image: unsplash('1504917595217-d4dc5ebe6122', 900),
          alt: 'Welded sheet metal assembly',
          points: ['TIG and MIG welding', 'Rivets and inserts', 'Sub-assembly'],
          href: '#/services/sheet-metal-fabrication',
        },
      ],
    },
    advantages: {
      image: unsplash('1701788607416-f1b5dd5a09ec', 2000),
      alt: 'Sheet metal fabrication workshop',
      title: 'Why Choose EZHONG for Sheet Metal Fabrication?',
      mode: 'icons',
      items: [
        {
          icon: 'clipboard',
          title: 'DFM support',
          text: 'Flat patterns, bend relief, tolerances and hardware are reviewed before cutting.',
        },
        {
          icon: 'layers',
          title: 'Integrated processes',
          text: 'Cutting, bending, welding and finishing are coordinated under one plan.',
        },
        {
          icon: 'gauge',
          title: 'Consistent quality',
          text: 'First-article inspection and in-process checks keep assemblies aligned.',
        },
        {
          icon: 'boxes',
          title: 'Flexible volumes',
          text: 'Prototype quantities and repeat production are supported from the same route.',
        },
      ],
    },
    process: {
      title: 'How a Sheet Metal Part Is Made',
      subtitle: 'The flat pattern, bend sequence and hardware plan are settled before metal is cut.',
      steps: [
        { title: 'DFM & flat pattern', text: 'Review bend relief, hole placement, hardware and tolerances.' },
        { title: 'Cutting', text: 'Laser cut or punch the flat pattern from sheet stock.' },
        { title: 'Forming & welding', text: 'Bend, weld and insert hardware in the planned sequence.' },
        { title: 'Finish & inspect', text: 'Apply the finish and inspect dimensions and assembly fit.' },
      ],
    },
    materials: {
      title: 'Materials for Sheet Metal Fabrication',
      subtitle: 'Aluminum, stainless and steel sheet selected for strength, corrosion and finish.',
      groups: [
        {
          key: 'sheet-metals',
          label: 'Sheet metals',
          items: [
            {
              key: 'aluminum-5052',
              name: 'Aluminum 5052',
              subtitle: 'Formable, corrosion-resistant sheet',
              properties: 'Good bendability and corrosion resistance; suitable for covers, panels and brackets.',
              applications: 'Enclosures, panels, brackets and marine or outdoor parts.',
              image: unsplash('1701788607416-f1b5dd5a09ec', 900),
              alt: 'Formed aluminum sheet metal parts',
            },
            {
              key: 'stainless-304',
              name: 'Stainless Steel 304',
              subtitle: 'Corrosion-resistant formed parts',
              properties: 'Good corrosion resistance and formability for hygienic and outdoor enclosures.',
              applications: 'Food equipment, covers, panels and outdoor housings.',
              image: unsplash('1625465837903-0e4d77bcc467', 900),
              alt: 'Formed stainless steel components',
            },
            {
              key: 'cold-rolled',
              name: 'Cold-Rolled Steel',
              subtitle: 'General fabricated steel parts',
              properties: 'Consistent thickness and good formability for brackets, frames and enclosures.',
              applications: 'Brackets, frames, housings and painted assemblies.',
              image: unsplash('1625465404484-448f58e5c5d9', 900),
              alt: 'Cold-rolled steel fabricated parts',
            },
            {
              key: 'galvanized',
              name: 'Galvanized Steel',
              subtitle: 'Zinc-coated corrosion protection',
              properties: 'Zinc coating provides economical corrosion protection for formed parts.',
              applications: 'Outdoor brackets, ducting, panels and painted assemblies.',
              image: unsplash('1769147339214-076740872485', 900),
              alt: 'Galvanized steel fabricated components',
            },
            {
              key: 'copper',
              name: 'Copper',
              subtitle: 'Conductive and formable sheet',
              properties: 'High electrical and thermal conductivity for busbars and shielding parts.',
              applications: 'Busbars, RF shielding, gaskets and conductive components.',
              image: unsplash('1666618090858-fbcee636bd3e', 900),
              alt: 'Copper sheet metal components',
            },
          ],
        },
      ],
    },
    finish: {
      title: 'Sheet Metal Finishing Options',
      defaultKey: 'powder-coating',
      keys: ['powder-coating', 'zinc-plating', 'bead-blasting', 'sanding-polishing', 'chrome-plating'],
    },
    applications: {
      title: 'Typical Sheet Metal Parts We Manufacture',
      intro:
        'Sheet metal parts support electronics, industrial equipment, automation, automotive and architecture.',
      items: [
        { name: 'Electronics Enclosures', image: unsplash('1518770660439-4636190af475', 900), alt: 'Electronics enclosure' },
        { name: 'Industrial Frames', image: unsplash('1716191299980-a6e8827ba10b', 900), alt: 'Industrial frame assembly' },
        { name: 'Brackets & Mounts', image: unsplash('1769147339214-076740872485', 900), alt: 'Fabricated brackets' },
        { name: 'Automotive Panels', image: unsplash('1769147339214-076740872485', 900), alt: 'Automotive panel components' },
        { name: 'Control Cabinets', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Control cabinet components' },
        { name: 'Machine Covers', image: unsplash('1740209475472-aa7d280f7452', 900), alt: 'Machine cover and guard' },
      ],
    },
    specs: {
      title: 'Sheet Metal Fabrication Tolerances',
      rows: [
        { label: 'Maximum Sheet Size', value: 'Up to 3,000 × 1,500 mm depending on process and thickness.' },
        { label: 'Thickness Range', value: '0.5–6 mm for most sheet metals; heavier sections reviewed.' },
        { label: 'Linear Dimensions', value: '±0.1–0.2 mm typical for cut features; bend dimensions depend on tooling.' },
        { label: 'Bend Tolerance', value: '±1° typical on bend angles, with ±0.2 mm on bend locations.' },
        { label: 'Hole Tolerance', value: '±0.1 mm typical; hole-to-hole position depends on the flat pattern and process.' },
        { label: 'Finish & Lead Time', value: 'Powder coating, plating and painting available; prototypes in 5–10 business days.' },
      ],
    },
    faqs: [
      {
        q: 'What sheet metals do you work with?',
        a: 'Aluminum 5052, stainless steel 304, cold-rolled steel, galvanized steel and copper, with thickness reviewed per part.',
      },
      {
        q: 'What is the maximum sheet thickness?',
        a: 'Up to 6 mm for typical laser cutting and bending; heavier sections are reviewed for tooling and process.',
      },
      {
        q: 'Can you provide flat patterns?',
        a: 'Yes. We develop the flat pattern from your 3D model and confirm bend relief and hardware before cutting.',
      },
      {
        q: 'What finishes are available?',
        a: 'Powder coating, painting, zinc plating, bead blasting, polishing and chrome plating are available.',
      },
      {
        q: 'Do you offer welding and assembly?',
        a: 'Yes. TIG, MIG and spot welding, rivets, inserts and sub-assembly are available.',
      },
      {
        q: 'What is the lead time?',
        a: 'Sheet metal prototypes typically ship in 5–10 business days; repeat production depends on quantity and finishing.',
      },
    ],
    closing: {
      title: 'Start Your Sheet Metal Fabrication Project',
      description:
        'Send the model or drawing, material, thickness and finish. We will confirm the flat pattern and fabrication route.',
      cta: 'Get a Sheet Metal Quote',
    },
  },

  finishing: {
    slug: 'finishing',
    breadcrumb: 'Parts Finishing',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['Parts Finishing', 'Services'],
      description:
        'Anodizing, bead blasting, polishing, plating and coating for machined and fabricated parts — protecting surfaces and delivering the intended appearance.',
      cta: 'Get a Finishing Quote',
      image: unsplash('1666618090858-fbcee636bd3e', 2000),
      alt: 'Polished metal component with a fine surface finish',
    },
    capabilities: {
      title: 'Our Parts Finishing Capabilities',
      subtitle:
        'Finishing is selected for protection, appearance, wear or conductivity. Masking and inspection are planned with the finish.',
      layout: 'grid',
      items: [
        {
          title: 'Anodizing',
          description: 'Type II and Type III anodizing for aluminum parts in clear or colored finishes.',
          image: unsplash('1769147339214-076740872485', 900),
          alt: 'Anodized aluminum components',
          points: ['Clear and color anodizing', 'Type II and Type III', 'Masking for threads and bores'],
        },
        {
          title: 'Bead Blasting',
          description: 'Uniform matte textures that hide light tool marks before coating or anodizing.',
          image: unsplash('1625465404484-448f58e5c5d9', 900),
          alt: 'Bead-blasted matte component',
          points: ['Uniform matte finish', 'Hides light scratches', 'Surface preparation'],
        },
        {
          title: 'Polishing',
          description: 'Sanding and mirror polishing for smooth, reflective surfaces.',
          image: unsplash('1582143434535-eba55a806718', 900),
          alt: 'Polished reflective components',
          points: ['Sanding and buffing', 'Mirror polishing', 'Ra below 0.1 µm'],
        },
        {
          title: 'Plating & Coating',
          description: 'Zinc, chrome, electroless nickel, chromate conversion and powder coating.',
          image: unsplash('1666618090858-fbcee636bd3e', 900),
          alt: 'Plated and coated metal components',
          points: ['Zinc and chrome plating', 'Electroless nickel', 'Powder coating'],
        },
      ],
    },
    advantages: {
      image: unsplash('1666618090858-fbcee636bd3e', 2000),
      alt: 'Fine surface finish on a turned metal component',
      title: 'Why Choose EZHONG for Parts Finishing?',
      mode: 'icons',
      items: [
        {
          icon: 'target',
          title: 'Finish-matched process',
          text: 'The finishing route is chosen for protection, wear, conductivity or appearance.',
        },
        {
          icon: 'clipboard',
          title: 'Masking planned early',
          text: 'Threads, bores and mating faces are masked so fits survive the finishing operation.',
        },
        {
          icon: 'layers',
          title: 'Multiple finish partners',
          text: 'Anodizing, plating, polishing and coating are coordinated and inspected before shipment.',
        },
        {
          icon: 'shield',
          title: 'Documented results',
          text: 'Finish specifications, thickness targets and inspection notes are recorded per order.',
        },
      ],
    },
    process: {
      title: 'How Finishing Is Planned',
      subtitle: 'The finish specification and masking plan are agreed before parts leave machining.',
      steps: [
        { title: 'Finish selection', text: 'Confirm the finish, color, thickness and cosmetic requirements.' },
        { title: 'Masking & preparation', text: 'Protect threads, bores and mating surfaces; prepare the base surface.' },
        { title: 'Finishing', text: 'Apply anodizing, blasting, polishing, plating or coating.' },
        { title: 'Inspection', text: 'Check appearance, thickness, coverage and critical dimensions.' },
      ],
    },
    finish: { title: 'Surface Finish Options', defaultKey: 'fine-machining' },
    applications: {
      title: 'Applications of Finished Parts',
      intro:
        'Finishing supports appearance, corrosion resistance and wear life across machined and fabricated components.',
      items: [
        { name: 'Electronics', image: unsplash('1518770660439-4636190af475', 900), alt: 'Finished electronics housing' },
        { name: 'Aerospace', image: unsplash('1540575861501-7cf05a4b125a', 900), alt: 'Aerospace finished components' },
        { name: 'Medical Devices', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'Finished medical device components' },
        { name: 'Automotive', image: unsplash('1769147339214-076740872485', 900), alt: 'Finished automotive components' },
        { name: 'Industrial Equipment', image: unsplash('1716191299980-a6e8827ba10b', 900), alt: 'Finished industrial equipment' },
        { name: 'Consumer Products', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Finished consumer product housing' },
      ],
    },
    specs: {
      title: 'Finishing Capabilities',
      rows: [
        { label: 'Anodizing', value: 'Type II 10–25 µm; Type III hardcoat 25–50 µm; clear, black and custom colors.' },
        { label: 'Plating', value: 'Zinc, chrome, electroless nickel and chromate conversion, with masking.' },
        { label: 'Polishing', value: 'Sanding, buffing and mirror polishing; Ra below 0.1 µm on suitable materials.' },
        { label: 'Coating', value: 'Powder coating 60–100 µm and painted finishes in a range of colors.' },
        { label: 'Maximum Part Size', value: 'Depends on the finishing partner; typical envelope up to 1,200 × 600 mm.' },
        { label: 'Lead Time', value: 'Usually 2–5 business days after machining, depending on finish and quantity.' },
      ],
    },
    faqs: [
      {
        q: 'Which finish should I choose?',
        a: 'It depends on the material and purpose: anodizing for aluminum wear and color, passivation for stainless corrosion, plating for steel protection, polishing for appearance or optics.',
      },
      {
        q: 'Will finishing change part dimensions?',
        a: 'Some finishes add thickness (plating, coating, anodizing). Threads and critical fits are masked or allowance is planned during machining.',
      },
      {
        q: 'Can you match a color?',
        a: 'Anodizing and powder coating can be matched to a sample or color reference, subject to process limits.',
      },
      {
        q: 'Do you finish customer-supplied parts?',
        a: 'Yes, after reviewing material, condition and masking requirements.',
      },
      {
        q: 'How is finish quality checked?',
        a: 'Appearance, coverage, thickness targets and any critical dimensions are checked before shipment.',
      },
      {
        q: 'What is the typical lead time?',
        a: 'Most finishing operations add 2–5 business days after machining, depending on the process and quantity.',
      },
    ],
    closing: {
      title: 'Start Your Parts Finishing Project',
      description:
        'Tell us the material, finish, color and cosmetic requirements. We will confirm masking and return a finishing quote.',
      cta: 'Get a Finishing Quote',
    },
  },

  'injection-molding': {
    slug: 'injection-molding',
    breadcrumb: 'Injection Molding',
    quoteService: 'Injection Molding',
    hero: {
      titleLines: ['Injection Molding', 'Services'],
      description:
        'Prototype and production injection molding for consistent plastic parts — with tooling review, T1 samples and production-like materials.',
      cta: 'Get an Injection Molding Quote',
      image: unsplash('1625465404484-448f58e5c5d9', 2000),
      alt: 'Black injection-molded industrial plastic housing',
    },
    capabilities: {
      title: 'Our Injection Molding Capabilities',
      subtitle:
        'Tooling and process are matched to the part quantity, resin and cosmetic requirement — from prototype molds to multi-cavity production tools.',
      layout: 'grid',
      items: [
        {
          title: 'Prototype Tooling',
          description: 'Aluminum or steel prototype molds for early samples and design validation.',
          image: unsplash('1625465404484-448f58e5c5d9', 900),
          alt: 'Prototype injection-molded plastic housing',
          points: ['Fast T1 samples', 'Design validation', 'Production-like resin'],
          href: '#/services/rapid-tooling',
        },
        {
          title: 'Production Tooling',
          description: 'Multi-cavity molds with hardened inserts for repeat production.',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Production injection mold tooling',
          points: ['Multi-cavity tools', 'Hardened inserts', 'Cycle optimization'],
          href: '#/services/injection-molding',
        },
        {
          title: 'Overmolding & Insert Molding',
          description: 'Combined materials and metal inserts for functional, assembled parts.',
          image: unsplash('1582143434535-eba55a806718', 900),
          alt: 'Overmolded and clear injection-molded parts',
          points: ['Metal inserts', 'Soft-touch overmolds', 'Multi-material parts'],
          href: '#/services/injection-molding',
        },
      ],
    },
    advantages: {
      image: unsplash('1625465404484-448f58e5c5d9', 2000),
      alt: 'Injection-molded production parts',
      title: 'Why Choose EZHONG for Injection Molding?',
      mode: 'icons',
      items: [
        {
          icon: 'clipboard',
          title: 'Tooling and DFM review',
          text: 'Draft, wall thickness, gates and ejection are reviewed before the tool is cut.',
        },
        {
          icon: 'layers',
          title: 'Prototype to production',
          text: 'Prototype tooling and production tooling use the same part design and material strategy.',
        },
        {
          icon: 'gauge',
          title: 'T1 validation',
          text: 'First samples are inspected and documented so adjustments are made with data.',
        },
        {
          icon: 'shield',
          title: 'Consistent production',
          text: 'Documented process settings and inspection keep repeat batches within specification.',
        },
      ],
    },
    process: {
      title: 'From Part Design to Molded Parts',
      subtitle: 'Tool design, sampling and production settings are planned together.',
      steps: [
        { title: 'DFM & material review', text: 'Confirm draft, wall sections, gates, ejection and resin.' },
        { title: 'Tool design & build', text: 'Design and machine the mold with the required cavity count.' },
        { title: 'T1 sampling', text: 'Mold first samples, inspect and adjust the tool and process.' },
        { title: 'Production', text: 'Run production with documented settings and quality checks.' },
      ],
    },
    materials: {
      title: 'Injection Molding Materials',
      subtitle: 'Common engineering resins selected for impact, heat, clarity or flexibility.',
      groups: [
        {
          key: 'resins',
          label: 'Molding resins',
          items: [
            {
              key: 'abs',
              name: 'ABS',
              subtitle: 'General-purpose housings',
              properties: 'Good impact strength, surface finish and processability for covers, housings and consumer parts.',
              applications: 'Consumer electronics, appliance housings and general molded parts.',
              image: unsplash('1625465404484-448f58e5c5d9', 900),
              alt: 'ABS molded housing',
            },
            {
              key: 'pc-abs',
              name: 'PC / PC-ABS',
              subtitle: 'Tough, heat-resistant parts',
              properties: 'Higher impact and temperature resistance with good dimensional stability.',
              applications: 'Electronics housings, automotive interior parts and durable covers.',
              image: unsplash('1582143434535-eba55a806718', 900),
              alt: 'Clear and tough molded plastic components',
            },
            {
              key: 'pa-gf',
              name: 'PA6 / PA66 (GF)',
              subtitle: 'Stiff glass-filled nylon',
              properties: 'High stiffness and strength with glass reinforcement for structural parts.',
              applications: 'Brackets, mounts, mechanical housings and under-hood components.',
              image: unsplash('1625465837903-0e4d77bcc467', 900),
              alt: 'Glass-filled nylon molded component',
            },
            {
              key: 'pp',
              name: 'PP',
              subtitle: 'Lightweight and chemical-resistant',
              properties: 'Good chemical resistance and living-hinge performance at low density.',
              applications: 'Caps, containers, living hinges and chemical-resistant parts.',
              image: unsplash('1625465404484-448f58e5c5d9', 900),
              alt: 'Polypropylene molded components',
            },
            {
              key: 'tpe',
              name: 'TPE / TPU',
              subtitle: 'Flexible, soft-touch parts',
              properties: 'Flexible overmolding and soft-touch surfaces with good grip and durability.',
              applications: 'Grips, seals, cables and overmolded consumer products.',
              image: unsplash('1625465837903-0e4d77bcc467', 900),
              alt: 'Soft-touch overmolded component',
            },
          ],
        },
      ],
    },
    applications: {
      title: 'Applications of Injection-Molded Parts',
      intro:
        'Molded plastic parts support consumer products, automotive interiors, electronics, medical devices and industrial equipment.',
      items: [
        { name: 'Consumer Products', image: unsplash('1625465404484-448f58e5c5d9', 900), alt: 'Consumer product housing' },
        { name: 'Automotive', image: unsplash('1769147339214-076740872485', 900), alt: 'Automotive interior components' },
        { name: 'Electronics', image: unsplash('1518770660439-4636190af475', 900), alt: 'Electronics housing and PCB' },
        { name: 'Medical Devices', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'Medical device housing' },
        { name: 'Industrial Equipment', image: unsplash('1716191299980-a6e8827ba10b', 900), alt: 'Industrial molded component' },
        { name: 'Packaging', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Molded packaging components' },
      ],
    },
    specs: {
      title: 'Injection Molding Specifications',
      rows: [
        { label: 'Maximum Part Size', value: 'Up to 600 × 400 × 300 mm, depending on press and tool.' },
        { label: 'Cavity Count', value: 'Single-cavity prototype tools through multi-cavity production tools.' },
        { label: 'Tolerances', value: 'Molded tolerances depend on resin and geometry; critical features are reviewed.' },
        { label: 'Tool Life', value: 'Prototype aluminum tools for samples; hardened steel tools for production.' },
        { label: 'Resins', value: 'ABS, PC, PC-ABS, PA6/PA66 (GF), PP and TPE/TPU.' },
        { label: 'Lead Time', value: 'Prototype tooling typically 2–4 weeks; production lead time follows sampling.' },
      ],
    },
    faqs: [
      {
        q: 'What is the difference between prototype and production tooling?',
        a: 'Prototype tooling prioritizes speed and lower cost for validation. Production tooling is built for cavity count, cycle time and tool life.',
      },
      {
        q: 'Which resins can you mold?',
        a: 'ABS, PC, PC-ABS, PA6/PA66 with glass fill, PP and TPE/TPU, subject to tool design and application requirements.',
      },
      {
        q: 'Do you provide T1 samples?',
        a: 'Yes. First samples are molded, inspected and documented before production continues.',
      },
      {
        q: 'Can you add metal inserts?',
        a: 'Yes. Insert molding and overmolding can combine metal hardware with molded plastic.',
      },
      {
        q: 'What do you need to quote a molded part?',
        a: 'A 3D model, 2D drawing with tolerances, resin, quantity and cosmetic requirements.',
      },
      {
        q: 'What is the typical lead time?',
        a: 'Prototype tools typically take 2–4 weeks; production timing depends on tool complexity, sampling and resin.',
      },
    ],
    closing: {
      title: 'Start Your Injection Molding Project',
      description:
        'Send the part model, resin and quantity. We will recommend a tooling route and confirm the sample plan.',
      cta: 'Get an Injection Molding Quote',
    },
  },

  extrusion: {
    slug: 'extrusion',
    breadcrumb: 'Extrusion',
    quoteService: 'Extrusion',
    hero: {
      titleLines: ['Aluminum Extrusion', 'Services'],
      description:
        'Custom aluminum profiles with consistent cross-sections, cut-to-length and CNC finishing — for heat sinks, frames, enclosures and production components.',
      cta: 'Get an Extrusion Quote',
      image: unsplash('1624775103325-8fe5c3b7d821', 2000),
      alt: 'Aluminum extruded radial heat sink profile',
    },
    capabilities: {
      title: 'Our Extrusion Capabilities',
      subtitle:
        'Profile design, die sourcing, extrusion and secondary machining are coordinated so the finished part matches the assembly.',
      layout: 'grid',
      items: [
        {
          title: 'Custom Die Design',
          description: 'Profile and die review for wall thickness, tolerances and extrusion efficiency.',
          image: unsplash('1624775103325-8fe5c3b7d821', 900),
          alt: 'Custom aluminum extrusion profile',
          points: ['Profile design review', 'Wall thickness control', 'Die sourcing'],
          href: '#/services/extrusion',
        },
        {
          title: 'Extrusion & Cut-to-Length',
          description: 'Aluminum profiles extruded and cut to the required length.',
          image: unsplash('1624841970647-87dce8628d72', 900),
          alt: 'Extruded and machined aluminum components',
          points: ['Aluminum 6063 / 6061', 'Cut-to-length', 'Straightness control'],
          href: '#/services/extrusion',
        },
        {
          title: 'CNC Finishing & Fabrication',
          description: 'Secondary machining, drilling and assembly after extrusion.',
          image: unsplash('1701788607416-f1b5dd5a09ec', 900),
          alt: 'Fabricated aluminum brackets and profiles',
          points: ['CNC drilling and milling', 'Bending and fabrication', 'Anodizing and coating'],
          href: '#/services/cnc-milling',
        },
      ],
    },
    advantages: {
      image: unsplash('1624775103325-8fe5c3b7d821', 2000),
      alt: 'Aluminum extrusion heat sink profile',
      title: 'Why Choose EZHONG for Aluminum Extrusion?',
      mode: 'icons',
      items: [
        {
          icon: 'clipboard',
          title: 'Profile DFM review',
          text: 'Wall thickness, tolerances and die design are reviewed before extrusion.',
        },
        {
          icon: 'layers',
          title: 'One coordinated route',
          text: 'Extrusion, CNC finishing and anodizing are planned as one production sequence.',
        },
        {
          icon: 'gauge',
          title: 'Consistent cross-sections',
          text: 'Profile dimensions and straightness are checked against the drawing.',
        },
        {
          icon: 'shield',
          title: 'Material traceability',
          text: 'Alloy and temper certificates are available with production orders.',
        },
      ],
    },
    process: {
      title: 'From Profile Design to Finished Extrusion',
      subtitle: 'The die, cut length and secondary operations are planned together.',
      steps: [
        { title: 'Profile & die review', text: 'Confirm cross-section, walls, tolerances and alloy.' },
        { title: 'Extrusion', text: 'Extrude the profile and control straightness and dimensions.' },
        { title: 'Cut & machine', text: 'Cut to length, drill, mill or bend as required.' },
        { title: 'Finish & inspect', text: 'Anodize or coat and inspect critical dimensions.' },
      ],
    },
    materials: {
      title: 'Aluminum Alloys for Extrusion',
      subtitle: 'Alloys selected for extrusion speed, strength and finish.',
      groups: [
        {
          key: 'alloys',
          label: 'Aluminum alloys',
          items: [
            {
              key: '6063',
              name: 'Aluminum 6063',
              subtitle: 'General extrusion alloy',
              properties: 'Excellent extrusion and anodizing response with good corrosion resistance.',
              applications: 'Heat sinks, frames, trim and architectural profiles.',
              image: unsplash('1624775103325-8fe5c3b7d821', 900),
              alt: '6063 aluminum extruded heat sink',
            },
            {
              key: '6061',
              name: 'Aluminum 6061',
              subtitle: 'Stronger extruded profiles',
              properties: 'Higher strength than 6063 with good machinability and corrosion resistance.',
              applications: 'Structural frames, brackets and machined extrusions.',
              image: unsplash('1624841970647-87dce8628d72', 900),
              alt: '6061 aluminum extruded and machined part',
            },
            {
              key: '6082',
              name: 'Aluminum 6082',
              subtitle: 'Structural extrusion alloy',
              properties: 'Good strength and corrosion resistance for structural and load-bearing profiles.',
              applications: 'Machine frames, structural rails and load-bearing profiles.',
              image: unsplash('1769147339214-076740872485', 900),
              alt: '6082 aluminum structural components',
            },
          ],
        },
      ],
    },
    finish: {
      title: 'Extrusion Surface Finish Options',
      defaultKey: 'anodizing-type-ii',
      keys: ['anodizing-type-ii', 'hardcoat-anodizing', 'bead-blasting', 'powder-coating', 'sanding-polishing'],
    },
    applications: {
      title: 'Applications of Aluminum Extrusions',
      intro:
        'Extruded profiles support electronics cooling, industrial frames, architecture, transportation and consumer products.',
      items: [
        { name: 'Heat Sinks', image: unsplash('1624775103325-8fe5c3b7d821', 900), alt: 'Aluminum heat sink profile' },
        { name: 'Electronics Enclosures', image: unsplash('1518770660439-4636190af475', 900), alt: 'Electronics enclosure' },
        { name: 'Industrial Frames', image: unsplash('1716191299980-a6e8827ba10b', 900), alt: 'Industrial frame assembly' },
        { name: 'Automotive', image: unsplash('1769147339214-076740872485', 900), alt: 'Automotive extruded components' },
        { name: 'Architecture', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Architectural aluminum profile' },
        { name: 'Consumer Products', image: unsplash('1625465404484-448f58e5c5d9', 900), alt: 'Consumer aluminum product' },
      ],
    },
    specs: {
      title: 'Aluminum Extrusion Specifications',
      rows: [
        { label: 'Profile Size', value: 'Up to approximately 250 mm circumscribed circle, depending on profile.' },
        { label: 'Wall Thickness', value: 'Typically 1.0–5.0 mm; thinner walls are reviewed with the die design.' },
        { label: 'Length', value: 'Cut-to-length from stock extrusions, typically up to 3,000 mm.' },
        { label: 'Tolerances', value: 'Per extrusion standard, with tighter machined features after CNC finishing.' },
        { label: 'Alloys', value: '6063, 6061 and 6082, with temper confirmed per application.' },
        { label: 'Lead Time', value: 'Die and extrusion lead time depends on profile; stock profiles are faster.' },
      ],
    },
    faqs: [
      {
        q: 'Do you design the extrusion die?',
        a: 'We review the profile with the die maker and coordinate die sourcing. Wall thickness, tolerances and alloy are confirmed before extrusion.',
      },
      {
        q: 'Can extruded profiles be machined after extrusion?',
        a: 'Yes. Drilling, milling, cutting, bending and assembly can be completed after extrusion.',
      },
      {
        q: 'Which alloys are available?',
        a: '6063, 6061 and 6082 are standard. Other alloys can be reviewed based on section and finish.',
      },
      {
        q: 'What finishes are available?',
        a: 'Clear or color anodizing, hardcoat anodizing, bead blasting, powder coating and polishing.',
      },
      {
        q: 'What is the minimum order quantity?',
        a: 'It depends on whether a new die is required. Stock profiles can support smaller quantities; custom dies have minimum run lengths.',
      },
      {
        q: 'What do you need to quote?',
        a: 'A profile drawing or 3D model, alloy, length, quantity and finish requirements.',
      },
    ],
    closing: {
      title: 'Start Your Aluminum Extrusion Project',
      description:
        'Send the profile drawing, alloy, length and finish. We will confirm the die and extrusion route and return a quote.',
      cta: 'Get an Extrusion Quote',
    },
  },

  'die-casting': {
    slug: 'die-casting',
    breadcrumb: 'Die Casting',
    quoteService: 'Die Casting',
    hero: {
      titleLines: ['Die Casting', 'Services'],
      description:
        'High-pressure die casting for repeatable metal components, with secondary CNC machining, finishing and leak testing for production-ready parts.',
      cta: 'Get a Die Casting Quote',
      image: unsplash('1625465104346-1ec72f86a54b', 2000),
      alt: 'Aluminum die-cast industrial housing with ribbed interior',
    },
    capabilities: {
      title: 'Our Die Casting Capabilities',
      subtitle:
        'Casting and secondary machining are planned together so sealing faces, bores and mounting points meet the assembly requirements.',
      layout: 'grid',
      items: [
        {
          title: 'High-Pressure Die Casting',
          description: 'Repeatable aluminum, zinc and magnesium castings for production volumes.',
          image: unsplash('1625465104346-1ec72f86a54b', 900),
          alt: 'High-pressure die-cast aluminum housing',
          points: ['Aluminum and zinc alloys', 'Thin-wall castings', 'Repeatable production'],
          href: '#/services/die-casting',
        },
        {
          title: 'Secondary CNC Machining',
          description: 'Machined sealing faces, bores and threaded features after casting.',
          image: unsplash('1624841970647-87dce8628d72', 900),
          alt: 'CNC-machined die-cast component',
          points: ['Machined sealing faces', 'Bores and threads', 'Tight mounting tolerances'],
          href: '#/services/cnc-milling',
        },
        {
          title: 'Finishing & Leak Testing',
          description: 'Powder coating, painting and leak testing for enclosures and fluid parts.',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Finished die-cast enclosure',
          points: ['Leak testing', 'Powder coating', 'Assembly-ready parts'],
          href: '#/services/finishing',
        },
      ],
    },
    advantages: {
      image: unsplash('1625465104346-1ec72f86a54b', 2000),
      alt: 'Die-cast aluminum housing production',
      title: 'Why Choose EZHONG for Die Casting?',
      mode: 'icons',
      items: [
        {
          icon: 'clipboard',
          title: 'Casting DFM',
          text: 'Draft, wall thickness, gate location and machining allowance are reviewed before the die is built.',
        },
        {
          icon: 'layers',
          title: 'Casting plus machining',
          text: 'Secondary CNC operations are planned with the casting so critical faces are not left to chance.',
        },
        {
          icon: 'gauge',
          title: 'Repeatable quality',
          text: 'Process settings and inspection checks keep dimensions consistent across production.',
        },
        {
          icon: 'shield',
          title: 'Leak and finish support',
          text: 'Leak testing, coating and painting are coordinated for enclosure and fluid-handling parts.',
        },
      ],
    },
    process: {
      title: 'From Die Design to Finished Casting',
      subtitle: 'The die, casting process and secondary machining are planned as one route.',
      steps: [
        { title: 'DFM & die design', text: 'Review draft, walls, gates, cooling and machining allowance.' },
        { title: 'Die build', text: 'Build and validate the die with sample castings.' },
        { title: 'Casting', text: 'Run production castings with controlled process parameters.' },
        { title: 'Machine, finish & test', text: 'CNC-machine critical features, finish and leak test as required.' },
      ],
    },
    materials: {
      title: 'Die Casting Alloys',
      subtitle: 'Aluminum, zinc and magnesium alloys selected for strength, finish and cost.',
      groups: [
        {
          key: 'alloys',
          label: 'Casting alloys',
          items: [
            {
              key: 'a380',
              name: 'Aluminum A380 / ADC12',
              subtitle: 'General-purpose die casting alloy',
              properties: 'Good fluidity, strength and machinability for complex, thin-wall castings.',
              applications: 'Enclosures, brackets, motor housings and general industrial parts.',
              image: unsplash('1625465104346-1ec72f86a54b', 900),
              alt: 'A380 aluminum die-cast housing',
            },
            {
              key: 'zamak',
              name: 'Zinc Zamak 3 / 5',
              subtitle: 'Fine-detail zinc castings',
              properties: 'Excellent castability and dimensional stability for small, detailed parts.',
              applications: 'Hardware, fittings, decorative parts and small mechanisms.',
              image: unsplash('1769147339214-076740872485', 900),
              alt: 'Zinc die-cast precision components',
            },
            {
              key: 'az91d',
              name: 'Magnesium AZ91D',
              subtitle: 'Lightweight die casting',
              properties: 'Low density with good strength and castability for weight-sensitive parts.',
              applications: 'Portable electronics, automotive and lightweight housings.',
              image: unsplash('1625465837903-0e4d77bcc467', 900),
              alt: 'Magnesium die-cast component',
            },
          ],
        },
      ],
    },
    finish: {
      title: 'Die Casting Finishing Options',
      defaultKey: 'powder-coating',
      keys: ['bead-blasting', 'powder-coating', 'zinc-plating', 'chrome-plating'],
    },
    applications: {
      title: 'Applications of Die-Cast Components',
      intro:
        'Die castings support automotive, electronics, industrial equipment, consumer hardware and lighting.',
      items: [
        { name: 'Automotive', image: unsplash('1769147339214-076740872485', 900), alt: 'Automotive die-cast components' },
        { name: 'Electronics', image: unsplash('1518770660439-4636190af475', 900), alt: 'Electronics enclosure' },
        { name: 'Industrial Equipment', image: unsplash('1716191299980-a6e8827ba10b', 900), alt: 'Industrial die-cast housing' },
        { name: 'Consumer Hardware', image: unsplash('1625465404484-448f58e5c5d9', 900), alt: 'Consumer hardware components' },
        { name: 'Lighting', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Lighting housing components' },
        { name: 'Power Equipment', image: unsplash('1540575861501-7cf05a4b125a', 900), alt: 'Power equipment components' },
      ],
    },
    specs: {
      title: 'Die Casting Specifications',
      rows: [
        { label: 'Maximum Part Size', value: 'Up to 600 × 400 × 250 mm, depending on part geometry and press.' },
        { label: 'Wall Thickness', value: 'Typically 1.5–4 mm; thinner walls are reviewed with the die design.' },
        { label: 'Tolerances', value: 'Casting tolerances per alloy and geometry; machined features follow CNC tolerances.' },
        { label: 'Tool Life', value: 'Die life depends on alloy, part size and maintenance schedule.' },
        { label: 'Alloys', value: 'Aluminum A380/ADC12, zinc Zamak 3/5 and magnesium AZ91D.' },
        { label: 'Lead Time', value: 'Die build typically several weeks; casting and machining follow sampling.' },
      ],
    },
    faqs: [
      {
        q: 'What is the difference between die casting and sand casting?',
        a: 'Die casting uses a steel die for high-volume, repeatable parts with fine detail and smooth surfaces. Sand casting uses a sand mold and is suited to larger or lower-volume parts.',
      },
      {
        q: 'Can you machine castings after casting?',
        a: 'Yes. Secondary CNC machining produces sealing faces, bores, threads and mounting features after casting.',
      },
      {
        q: 'Which alloys do you cast?',
        a: 'Aluminum A380/ADC12, zinc Zamak 3/5 and magnesium AZ91D, with others reviewed on request.',
      },
      {
        q: 'Do you provide leak testing?',
        a: 'Yes. Leak testing and other inspection can be included for enclosures and fluid-handling parts.',
      },
      {
        q: 'What finishes are available?',
        a: 'Bead blasting, powder coating, painting and plating are available for die-cast parts.',
      },
      {
        q: 'What do you need to quote a die-cast part?',
        a: 'A 3D model, 2D drawing, alloy, quantity and any leak-test or finish requirements.',
      },
    ],
    closing: {
      title: 'Start Your Die Casting Project',
      description:
        'Send the part model, alloy and quantity. We will review the die and machining route and return a quote.',
      cta: 'Get a Die Casting Quote',
    },
  },

  'wire-edm': {
    slug: 'wire-edm',
    breadcrumb: 'Wire EDM',
    quoteService: 'Wire EDM',
    hero: {
      titleLines: ['Wire EDM', 'Services'],
      description:
        'Precision wire and sinker EDM for fine profiles, hardened materials and features that are difficult to mill — with inspection included.',
      cta: 'Get a Wire EDM Quote',
      image: unsplash('1713371398485-7bde1bde9def', 2000),
      alt: 'Precision cutting tool finishing a complex metal profile',
    },
    capabilities: {
      title: 'Our EDM Capabilities',
      subtitle:
        'EDM removes material with electrical discharge rather than force, reaching fine features in hardened and difficult materials.',
      layout: 'grid',
      items: [
        {
          title: 'Wire EDM Cutting',
          description: 'Fine profiles and through-features cut with a wire electrode.',
          image: unsplash('1713371398485-7bde1bde9def', 900),
          alt: 'Wire EDM cutting a precision metal profile',
          points: ['Fine internal profiles', 'Hardened tool steel', 'Small corner radii'],
          href: '#/services/wire-edm',
        },
        {
          title: 'Sinker EDM',
          description: 'Blind cavities and complex shapes machined with a shaped electrode.',
          image: unsplash('1713371398479-4410ca153b1f', 900),
          alt: 'Precision EDM-machined component being inspected',
          points: ['Blind cavities', 'Sharp internal corners', 'Hardened materials'],
          href: '#/services/wire-edm',
        },
        {
          title: 'Small-Hole EDM Drilling',
          description: 'Small holes and start holes drilled in hard or heat-treated materials.',
          image: unsplash('1602664876866-d3b33b77756b', 900),
          alt: 'Small-hole EDM drilling of a metal component',
          points: ['Small-diameter holes', 'Start holes for wire EDM', 'Hardened alloys'],
          href: '#/services/wire-edm',
        },
      ],
    },
    advantages: {
      image: unsplash('1713371398485-7bde1bde9def', 2000),
      alt: 'Precision metal cutting on a machine tool',
      title: 'Why Choose EZHONG for Wire EDM?',
      mode: 'icons',
      items: [
        {
          icon: 'target',
          title: 'Fine feature accuracy',
          text: 'Wire EDM reaches small radii and accurate profiles without cutting forces.',
        },
        {
          icon: 'layers',
          title: 'Hardened materials',
          text: 'Parts can be heat-treated before EDM so final hardness and geometry are both achieved.',
        },
        {
          icon: 'clipboard',
          title: 'Process planning',
          text: 'Start holes, wire path and fixturing are planned before the cut.',
        },
        {
          icon: 'shield',
          title: 'Inspection support',
          text: 'Critical profiles and hole positions are checked and documented.',
        },
      ],
    },
    process: {
      title: 'How Wire EDM Work Is Planned',
      subtitle: 'The wire path, start holes and datum strategy are settled before cutting.',
      steps: [
        { title: 'Drawing review', text: 'Confirm profile, radii, tolerances and material condition.' },
        { title: 'Setup & start holes', text: 'Plan fixturing, datums and start holes for the wire path.' },
        { title: 'EDM cutting', text: 'Cut the profile with controlled wire and flushing parameters.' },
        { title: 'Inspection', text: 'Measure critical profiles and positions and prepare the part for the next operation.' },
      ],
    },
    materials: {
      title: 'Materials for Wire EDM',
      subtitle: 'Hardened steels, carbide and difficult alloys cut with electrical discharge.',
      groups: [
        {
          key: 'edm-materials',
          label: 'EDM materials',
          items: [
            {
              key: 'tool-steel',
              name: 'Tool Steel D2 / H13',
              subtitle: 'Hardened tooling materials',
              properties: 'Can be hardened before EDM for wear-resistant tooling with accurate final geometry.',
              applications: 'Dies, punches, inserts and wear components.',
              image: unsplash('1537462715879-360eeb61a0ad', 900),
              alt: 'Hardened tool steel components',
            },
            {
              key: 'carbide',
              name: 'Carbide',
              subtitle: 'Wear-resistant EDM parts',
              properties: 'Very hard and wear-resistant, cut accurately with wire EDM.',
              applications: 'Punches, dies, wear plates and precision tooling.',
              image: unsplash('1666618090858-fbcee636bd3e', 900),
              alt: 'Carbide precision components',
            },
            {
              key: 'titanium',
              name: 'Titanium',
              subtitle: 'Difficult-to-machine alloy',
              properties: 'EDM avoids cutting forces and tool wear when machining complex titanium features.',
              applications: 'Aerospace fittings, medical parts and complex profiles.',
              image: unsplash('1537462715879-360eeb61a0ad', 900),
              alt: 'Titanium EDM component',
            },
            {
              key: 'inconel',
              name: 'Inconel',
              subtitle: 'High-temperature alloy',
              properties: 'EDM can produce fine features in high-temperature alloys that are difficult to mill.',
              applications: 'Aerospace, energy and high-temperature components.',
              image: unsplash('1713371398485-7bde1bde9def', 900),
              alt: 'Inconel EDM component',
            },
            {
              key: 'copper',
              name: 'Copper',
              subtitle: 'Conductive EDM electrodes and parts',
              properties: 'Used for electrodes and conductive components where fine detail is required.',
              applications: 'EDM electrodes, contacts and conductive parts.',
              image: unsplash('1769147339214-076740872485', 900),
              alt: 'Copper EDM electrodes and components',
            },
          ],
        },
      ],
    },
    applications: {
      title: 'Applications of Wire EDM',
      intro:
        'Wire EDM supports tooling, aerospace, medical, electronics and precision machinery where fine profiles and hard materials matter.',
      items: [
        { name: 'Tooling & Dies', image: unsplash('1537462715879-360eeb61a0ad', 900), alt: 'Precision tooling components' },
        { name: 'Aerospace', image: unsplash('1540575861501-7cf05a4b125a', 900), alt: 'Aerospace components' },
        { name: 'Medical Devices', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'Medical device components' },
        { name: 'Electronics', image: unsplash('1518770660439-4636190af475', 900), alt: 'Electronics components' },
        { name: 'Industrial Machinery', image: unsplash('1716191299980-a6e8827ba10b', 900), alt: 'Industrial machinery parts' },
        { name: 'Precision Fixtures', image: unsplash('1713371398479-4410ca153b1f', 900), alt: 'Precision fixture components' },
      ],
    },
    specs: {
      title: 'Wire EDM Specifications',
      rows: [
        { label: 'Maximum Workpiece', value: 'Up to 800 × 600 × 400 mm depending on machine and setup.' },
        { label: 'Tolerances', value: '±0.005–0.01 mm typical on profiles and positions, depending on geometry.' },
        { label: 'Surface Finish', value: 'Ra 1.6–0.4 µm typical; finer with additional passes.' },
        { label: 'Wire Diameter', value: '0.1–0.3 mm depending on feature size and finish.' },
        { label: 'Materials', value: 'Tool steel, carbide, titanium, Inconel, copper and other conductive materials.' },
        { label: 'Lead Time', value: '3–7 business days for typical EDM work; larger or multi-operation parts vary.' },
      ],
    },
    faqs: [
      {
        q: 'When should I use wire EDM instead of milling?',
        a: 'Wire EDM is best for fine through-profiles, sharp internal corners and hardened materials where milling would need special tooling or risk distortion.',
      },
      {
        q: 'Can you cut heat-treated parts?',
        a: 'Yes. Parts can be hardened before EDM so final hardness and geometry are achieved in the same operation.',
      },
      {
        q: 'What tolerances can you hold?',
        a: '±0.005–0.01 mm is typical, depending on material, thickness and the number of passes.',
      },
      {
        q: 'Do you machine start holes?',
        a: 'Yes. Small-hole EDM drilling can produce start holes for wire EDM or small features directly.',
      },
      {
        q: 'What materials can be EDM’d?',
        a: 'Conductive materials including tool steel, carbide, titanium, Inconel and copper.',
      },
      {
        q: 'What do you need to quote?',
        a: 'A 2D drawing or DXF profile, 3D model, material and hardness, tolerance and quantity.',
      },
    ],
    closing: {
      title: 'Start Your Wire EDM Project',
      description:
        'Send the drawing, material and tolerance. We will confirm the EDM route, setup and inspection plan.',
      cta: 'Get a Wire EDM Quote',
    },
  },
}
