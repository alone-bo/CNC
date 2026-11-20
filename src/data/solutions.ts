// Solutions overview, mega-menu and five solution detail pages.
// Layout follows the WayKen solutions structure; all copy is original sample content.

import { unsplash } from './content'
import { millingMaterialGroups } from './cncMilling'
import type { GenericServiceData } from './genericServices'

export const solutionsHero = {
  title: 'Custom End-to-End Manufacturing Solutions from Prototype to Production',
  description:
    'Full-range manufacturing solutions including concept, visual, functional and engineering prototypes for design validation. Our manufacturing capabilities cover CNC prototyping, CNC production machining and low-volume manufacturing of plastic and metal parts to smoothly transition your project from prototype evaluation to end-use part manufacturing without switching suppliers.',
  image: unsplash('1716191300020-b52dec5b70a8', 2000),
  alt: 'CNC machining centers and manufacturing equipment in a workshop',
}

export type SolutionCard = {
  slug: string
  category: string
  title: string
  description: string
  cta: string
  image: string
  alt: string
}

export const solutionCards: SolutionCard[] = [
  {
    slug: 'cnc-prototyping',
    category: 'Prototyping Solutions',
    title: 'CNC Prototyping Services for Custom Parts',
    description:
      'CNC prototype machining delivers production-grade tolerances, materials, and finishing solutions. Ideal for design validation, functional testing, and pre-production evaluation.',
    cta: 'Learn More CNC Prototyping Services',
    image: unsplash('1769147339214-076740872485', 900),
    alt: 'Precision CNC-machined prototype components on engineering drawings',
  },
  {
    slug: 'concept-visual-prototype',
    category: 'Prototyping Solutions',
    title: 'Concept Prototype and Visual Prototype',
    description:
      'Industrial design prototyping makes design iterations more flexible through proof-of-concept and visual presentations, bringing your ideas to life faster.',
    cta: 'Learn More Concept and Visual Prototype',
    image: unsplash('1611117775350-ac3950990985', 900),
    alt: 'Prototype models produced on industrial 3D printers',
  },
  {
    slug: 'functional-engineering-prototype',
    category: 'Prototyping Solutions',
    title: 'Functional Prototype and Engineering Prototype',
    description:
      'Prototype development for functional and engineering purposes is a critical step in verifying the feasibility of a product design and in testing and evaluating its manufacturability and reliability prior to mass production.',
    cta: 'Learn More Functional and Engineering Prototype',
    image: unsplash('1740209475472-aa7d280f7452', 900),
    alt: 'CNC machining of a functional prototype component',
  },
  {
    slug: 'cnc-production',
    category: 'Production Solutions',
    title: 'CNC Production Machining for Small Batch Parts',
    description:
      'Move from prototype to production without switching suppliers. Get custom CNC parts in batch production from 20 to 10,000+ pieces, with the cost per part dropping as the quantity increases.',
    cta: 'Learn More CNC Production',
    image: unsplash('1716191300020-b52dec5b70a8', 900),
    alt: 'Automated CNC production line manufacturing repeat batches',
  },
  {
    slug: 'low-volume-manufacturing',
    category: 'Production Solutions',
    title: 'Low Volume Manufacturing',
    description:
      'Find a qualified supplier that provides low-volume manufacturing of plastic and metal parts to help you smoothly transfer from prototype to mass production.',
    cta: 'Learn More Low Volume Manufacturing',
    image: unsplash('1625465404484-448f58e5c5d9', 900),
    alt: 'Low-volume molded and machined production parts',
  },
]

export type SolutionsMenuItem = {
  label: string
  description: string
  href: string
}

export const solutionsMenu = {
  image: unsplash('1454165804606-c3d57bc86b40', 900),
  alt: 'Engineers reviewing engineering drawings at a workshop table',
  copy: 'Integrated manufacturing solutions from prototype to production, combining engineering support, DFM insight, and quality control.',
  href: '#/solutions',
  groups: [
    {
      title: 'Prototyping Solutions',
      items: [
        {
          label: 'CNC Prototyping',
          description: 'Custom prototypes, fast turnaround, and design validation support',
          href: '#/solutions/cnc-prototyping',
        },
        {
          label: 'Functional and Engineering Prototypes',
          description: 'Test function, fit, performance, and engineering requirements',
          href: '#/solutions/functional-engineering-prototype',
        },
        {
          label: 'Concept and Visual Prototypes',
          description: 'Turn early concepts into physical visual prototypes',
          href: '#/solutions/concept-visual-prototype',
        },
      ],
    },
    {
      title: 'Production Solutions',
      items: [
        {
          label: 'CNC Production',
          description: 'Low-volume custom CNC parts, from dozens to tens of thousands of pieces',
          href: '#/solutions/cnc-production',
        },
        {
          label: 'Low Volume Manufacturing',
          description: 'Efficiently manufacture small batches with consistent quality',
          href: '#/solutions/low-volume-manufacturing',
        },
      ],
    },
  ] as { title: string; items: SolutionsMenuItem[] }[],
}

const metals = millingMaterialGroups

const prototypingApplications = [
  { name: 'New Product Validation', image: unsplash('1769147339214-076740872485', 900), alt: 'Machined prototype parts on drawings' },
  { name: 'Functional Testing', image: unsplash('1758873263563-5ba4aa330799', 900), alt: 'Technician measuring a prototype component' },
  { name: 'Small-Batch Trials', image: unsplash('1716191300020-b52dec5b70a8', 900), alt: 'Small-batch production equipment' },
  { name: 'Fit & Assembly Checks', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Precision assembly components' },
  { name: 'Design Reviews', image: unsplash('1581092580497-e0d23cbdf1dc', 900), alt: 'Engineer reviewing CAD data' },
  { name: 'Pre-Production Evaluation', image: unsplash('1713371398479-4410ca153b1f', 900), alt: 'Precision measurement of a prototype' },
]

const productionApplications = [
  { name: 'Medical & Rehabilitation', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'Medical rehabilitation robotic device' },
  { name: 'Automotive', image: unsplash('1769147339214-076740872485', 900), alt: 'Automotive machined components' },
  { name: 'Robotics & Automation', image: unsplash('1716191299980-a6e8827ba10b', 900), alt: 'Industrial robot arm' },
  { name: 'Aerospace', image: unsplash('1540575861501-7cf05a4b125a', 900), alt: 'Aerospace engine component' },
  { name: 'Electronics', image: unsplash('1518770660439-4636190af475', 900), alt: 'Electronics circuit board' },
  { name: 'Industrial Equipment', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Industrial equipment component' },
]

const conceptApplications = [
  { name: 'Design Reviews', image: unsplash('1581092580497-e0d23cbdf1dc', 900), alt: 'Design review with CAD models' },
  { name: 'Trade Shows', image: unsplash('1611117775350-ac3950990985', 900), alt: 'Prototype models on display' },
  { name: 'User Testing', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'User testing a prototype device' },
  { name: 'Investor Presentations', image: unsplash('1454165804606-c3d57bc86b40', 900), alt: 'Team reviewing a prototype presentation' },
  { name: 'Ergonomics', image: unsplash('1625465404484-448f58e5c5d9', 900), alt: 'Ergonomic prototype housing' },
  { name: 'Packaging Concepts', image: unsplash('1582143434535-eba55a806718', 900), alt: 'Clear packaging concept models' },
]

const functionalApplications = [
  { name: 'Fit & Function Testing', image: unsplash('1713371398479-4410ca153b1f', 900), alt: 'Functional prototype being measured' },
  { name: 'Durability Testing', image: unsplash('1758873263563-5ba4aa330799', 900), alt: 'Durability testing of a prototype' },
  { name: 'Environmental Testing', image: unsplash('1540575861501-7cf05a4b125a', 900), alt: 'Aerospace environmental test component' },
  { name: 'Assembly Validation', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Prototype assembly components' },
  { name: 'Regulatory Review', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'Medical device for regulatory review' },
  { name: 'Pilot Production', image: unsplash('1716191300020-b52dec5b70a8', 900), alt: 'Pilot production line' },
]

const lowVolumeApplications = [
  { name: 'Pilot Builds', image: unsplash('1716191300020-b52dec5b70a8', 900), alt: 'Pilot build production line' },
  { name: 'Market Tests', image: unsplash('1625465404484-448f58e5c5d9', 900), alt: 'Market test production parts' },
  { name: 'Bridge Production', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Bridge production components' },
  { name: 'Custom Equipment', image: unsplash('1716191299980-a6e8827ba10b', 900), alt: 'Custom automation equipment' },
  { name: 'Spare Parts', image: unsplash('1769147339214-076740872485', 900), alt: 'Spare machined components' },
  { name: 'End-of-Life Support', image: unsplash('1701788607416-f1b5dd5a09ec', 900), alt: 'Legacy equipment metal parts' },
]

export const solutionDetails: Record<string, GenericServiceData> = {
  'cnc-prototyping': {
    slug: 'cnc-prototyping',
    breadcrumb: 'CNC Prototyping',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['CNC Prototyping', 'Services for Custom Parts'],
      description:
        'CNC prototype machining delivers production-grade tolerances, materials and finishing — ideal for design validation, functional testing and pre-production evaluation.',
      cta: 'Get a CNC Prototyping Quote',
      image: unsplash('1769147339214-076740872485', 2000),
      alt: 'Precision CNC-machined prototype components on engineering drawings',
    },
    capabilities: {
      title: 'CNC Prototyping Capabilities',
      subtitle:
        'Prototypes are machined in the material and finish intended for production, so what you test is what you will manufacture.',
      layout: 'grid',
      items: [
        {
          title: 'CNC Milling Prototypes',
          description: 'Prismatic prototypes with pockets, ribs and mounting features machined from production-grade stock.',
          image: unsplash('1740209475472-aa7d280f7452', 900),
          alt: 'CNC milling a prototype housing',
          points: ['3- and 4-axis milling', 'Thin walls and fine features', 'Quick-turn parts'],
          href: '#/services/cnc-milling',
        },
        {
          title: 'CNC Turning Prototypes',
          description: 'Turned prototypes with concentric features, threads and milled details.',
          image: unsplash('1666618090858-fbcee636bd3e', 900),
          alt: 'CNC turning a prototype shaft',
          points: ['Ø1–Ø300 mm', 'Live-tool features', 'Threads and grooves'],
          href: '#/services/cnc-turning',
        },
        {
          title: 'Precision CNC Prototypes',
          description: 'Tight-tolerance prototypes for fit, assembly and functional checks.',
          image: unsplash('1713371398479-4410ca153b1f', 900),
          alt: 'Precision prototype being measured',
          points: ['±0.01 mm typical', 'First-article inspection', 'CMM reports on request'],
          href: '#/services/precision-cnc-machining',
        },
      ],
    },
    advantages: {
      image: unsplash('1758873263563-5ba4aa330799', 2000),
      alt: 'Engineer measuring a CNC prototype',
      title: "Why Choose EZHONG's CNC Prototyping Services?",
      mode: 'icons',
      items: [
        {
          icon: 'clipboard',
          title: 'Free DFM review',
          text: 'Every quote includes feedback on features, tolerances, materials and finish before cutting.',
        },
        {
          icon: 'layers',
          title: 'Production-grade materials',
          text: 'Prototypes are machined in the alloy or plastic intended for the final part.',
        },
        {
          icon: 'gauge',
          title: 'Tight tolerances',
          text: 'Critical features are machined and inspected to the drawing, with reports available.',
        },
        {
          icon: 'gauge',
          title: 'Fast turnaround',
          text: 'Most prototypes ship in 3–7 business days after drawing approval.',
        },
      ],
    },
    process: {
      title: 'From CAD to Validated Prototype',
      subtitle: 'A focused sequence keeps prototype iteration fast without losing engineering control.',
      steps: [
        { title: 'DFM & quote', text: 'Review geometry, tolerance, material and finish before quoting.' },
        { title: 'Machining', text: 'Rough and finish the prototype with stable fixturing and probing.' },
        { title: 'Finishing', text: 'Apply the specified finish so appearance and function are realistic.' },
        { title: 'Inspection & ship', text: 'Check critical features, photograph the part and prepare documentation.' },
      ],
    },
    materials: {
      title: 'Metal and Plastic Materials for CNC Prototyping',
      subtitle: 'Choose the alloy or plastic that matches the prototype’s function and production intent.',
      groups: metals,
    },
    finish: { title: 'Surface Finish Options for CNC Prototypes', defaultKey: 'fine-machining' },
    applications: {
      title: 'Applications for CNC Prototyping',
      intro:
        'Machined prototypes support validation, testing and early production decisions across medical, automotive, robotics and electronics programs.',
      items: prototypingApplications,
    },
    specs: {
      title: 'CNC Prototyping Specifications',
      rows: [
        { label: 'Tolerances', value: '±0.01 mm typical; ±0.005 mm on select features after review.' },
        { label: 'Materials', value: 'Aluminum, stainless steel, titanium, brass, tool steel and engineering plastics.' },
        { label: 'Surface Finish', value: 'As machined, fine machined, bead blasted, anodized, polished or plated.' },
        { label: 'Quantities', value: '1–50 prototype parts, with small bridge batches available.' },
        { label: 'Inspection', value: 'First-article reports, dimensional data and material certificates on request.' },
        { label: 'Lead Time', value: '3–7 business days after drawing approval, depending on finish.' },
      ],
    },
    explain: {
      first: {
        title: 'What is CNC prototyping?',
        text: 'CNC prototyping machines a physical part from a CAD model using production processes and materials. It validates form, fit, function and finish before tooling or mass production is committed.',
        points: [
          'Production-grade materials and tolerances.',
          'Realistic surface finish and assembly fit.',
          'Fast iterations without hard tooling.',
        ],
        image: unsplash('1769147339214-076740872485', 1200),
        alt: 'CNC prototype components on a drawing',
      },
      second: {
        title: 'CNC prototyping vs 3D printing',
        text: 'Both are useful, but they answer different questions. Choose the process that matches the stage of your program.',
        cards: [
          {
            title: 'CNC prototyping',
            text: 'Production materials, tight tolerances and functional testing.',
          },
          {
            title: '3D printing',
            text: 'Fast visual models, complex geometry and early concept review.',
          },
        ],
        image: unsplash('1611117775350-ac3950990985', 1200),
        alt: '3D printers producing concept models',
      },
    },
    faqs: [
      {
        q: 'How fast can I get a CNC prototype?',
        a: 'Most prototypes ship in 3–7 business days after drawing approval. Finishing, material and inspection requirements can add time.',
      },
      {
        q: 'Can prototypes be made in production materials?',
        a: 'Yes. Prototypes are machined in the alloy or plastic intended for production, so mechanical behavior and finish are representative.',
      },
      {
        q: 'What tolerances can you hold on prototypes?',
        a: '±0.01 mm is typical, with ±0.005 mm available on select features after DFM review.',
      },
      {
        q: 'Can you finish a prototype like the final part?',
        a: 'Yes. Anodizing, bead blasting, polishing, plating and painting are available so the prototype matches the intended appearance.',
      },
      {
        q: 'Do you provide inspection data?',
        a: 'First-article reports and dimensional data are available, with CMM reports on request.',
      },
      {
        q: 'Can you scale the same design to production?',
        a: 'Yes. The same process plan and inspection approach can scale from one prototype to pilot and repeat batches.',
      },
    ],
    closing: {
      title: 'Speed Up Your Product Development With CNC Prototyping',
      description:
        'Send your CAD model and drawing, material and finish. We will review manufacturability and return a prototype quote with lead time.',
      cta: 'Get a CNC Prototyping Quote',
    },
  },

  'cnc-production': {
    slug: 'cnc-production',
    breadcrumb: 'CNC Production',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['CNC Production', 'Machining for Small Batch Parts'],
      description:
        'Move from prototype to production without switching suppliers. Custom CNC parts in batches from 20 to 10,000+ pieces, with cost per part dropping as quantity increases.',
      cta: 'Get a CNC Production Quote',
      image: unsplash('1716191300020-b52dec5b70a8', 2000),
      alt: 'CNC production machining line for repeat batches',
    },
    capabilities: {
      title: 'Our CNC Production Capabilities',
      subtitle:
        'Production machining is planned for repeatability: fixtures, toolpaths, inspection and scheduling work together across batches.',
      layout: 'grid',
      items: [
        {
          title: '3/4/5-Axis CNC Milling',
          description: 'Prismatic production parts with repeatable pockets, faces and mounting features.',
          image: unsplash('1740209475472-aa7d280f7452', 900),
          alt: 'CNC production milling of a batch part',
          points: ['3-, 4- and 5-axis milling', 'Dedicated fixtures', 'Documented setups'],
          href: '#/services/cnc-milling',
        },
        {
          title: 'Batch CNC Turning',
          description: 'Turned production parts with controlled concentricity and surface finish.',
          image: unsplash('1666618090858-fbcee636bd3e', 900),
          alt: 'Batch turning on a CNC lathe',
          points: ['Bar-fed production', 'Live-tool features', 'Repeatable diameters'],
          href: '#/services/cnc-turning',
        },
        {
          title: 'Precision CNC Production',
          description: 'Tight-tolerance production with first-article and in-process inspection.',
          image: unsplash('1713371398479-4410ca153b1f', 900),
          alt: 'Precision production part inspection',
          points: ['±0.01 mm typical', 'First-article inspection', 'CMM reporting'],
          href: '#/services/precision-cnc-machining',
        },
        {
          title: 'Production Efficiency & Fixtures',
          description: 'Fixture design and process planning reduce cycle time and variation as quantities grow.',
          image: unsplash('1716191300020-b52dec5b70a8', 900),
          alt: 'Production fixturing and machining equipment',
          points: ['Dedicated workholding', 'Cycle-time planning', 'Scheduled capacity'],
          href: '#/services',
        },
      ],
    },
    advantages: {
      image: unsplash('1716191300020-b52dec5b70a8', 2000),
      alt: 'CNC production floor with repeat machining cells',
      title: 'Why Choose EZHONG for CNC Production Machining?',
      mode: 'icons',
      items: [
        {
          icon: 'gauge',
          title: 'Cost per part',
          text: 'Fixtures, toolpaths and batch planning reduce unit cost as quantities increase.',
        },
        {
          icon: 'target',
          title: 'Consistency',
          text: 'Documented setups and in-process checks keep dimensions stable across batches.',
        },
        {
          icon: 'layers',
          title: 'Capacity',
          text: 'Production scheduling and dedicated workholding support repeat supply.',
        },
        {
          icon: 'shield',
          title: 'Quality documentation',
          text: 'First-article, in-process and final inspection records are available per order.',
        },
      ],
    },
    process: {
      title: 'From Purchase Order to Production Delivery',
      subtitle: 'Production planning and inspection are built into the schedule, not added at the end.',
      steps: [
        { title: 'Quote & DFM', text: 'Confirm drawing, material, quantity, finish and inspection requirements.' },
        { title: 'Programming & fixtures', text: 'Prepare toolpaths, workholding and setup sheets for repeatability.' },
        { title: 'Production machining', text: 'Run batches with in-process checks and tool-life control.' },
        { title: 'Inspection & delivery', text: 'Perform final inspection, document results and prepare shipment.' },
      ],
    },
    materials: {
      title: 'Materials for CNC Production',
      subtitle: 'Production alloys and plastics matched to the part, volume and finishing route.',
      groups: metals,
    },
    finish: { title: 'CNC Production Surface Finishes', defaultKey: 'fine-machining' },
    applications: {
      title: 'Industries That Trust EZHONG for CNC Production',
      intro:
        'Repeat CNC production supports medical equipment, automotive programs, robotics, aerospace and electronics hardware.',
      items: productionApplications,
    },
    specs: {
      title: 'CNC Production Specifications',
      rows: [
        { label: 'Production Quantities', value: '20–10,000+ pieces per order, with bridge and repeat batches available.' },
        { label: 'Tolerances', value: '±0.01 mm typical; ±0.005 mm on select features after review.' },
        { label: 'Maximum Part Size', value: 'Up to 1,200 × 600 × 400 mm on mills; Ø400 × 800 mm on lathes.' },
        { label: 'Materials', value: 'Aluminum, stainless steel, carbon steel, titanium, brass and engineering plastics.' },
        { label: 'Finishing', value: 'Anodizing, bead blasting, polishing, plating, painting and powder coating.' },
        { label: 'Lead Time', value: 'Typically 2–4 weeks after approval, depending on material, finish and volume.' },
      ],
    },
    faqs: [
      {
        q: 'When does CNC production make sense?',
        a: 'When quantities move beyond a few prototypes but do not justify injection molding or casting tooling. CNC production avoids hard tooling while delivering repeatable parts.',
      },
      {
        q: 'What is the minimum batch size?',
        a: 'Batches can start from around 20 pieces. The ideal quantity depends on geometry, material and finishing.',
      },
      {
        q: 'How do you keep repeat batches consistent?',
        a: 'Dedicated fixtures, documented setup sheets, tool-life tracking and in-process inspection keep critical dimensions stable.',
      },
      {
        q: 'Do you provide first-article inspection?',
        a: 'Yes. First-article inspection is standard on new production parts, with CMM data available.',
      },
      {
        q: 'Can you finish production parts?',
        a: 'Yes. Anodizing, bead blasting, polishing, plating, painting and powder coating are coordinated and inspected.',
      },
      {
        q: 'What files do you need for a production quote?',
        a: 'A STEP model, 2D drawing with tolerances and finish, material and annual or batch quantity.',
      },
    ],
    closing: {
      title: 'Keep Your CNC Production Moving From Order to Delivery',
      description:
        'Send the drawing, material, quantity and finish. We will confirm the production route, fixtures and inspection plan.',
      cta: 'Get a CNC Production Quote',
    },
  },

  'concept-visual-prototype': {
    slug: 'concept-visual-prototype',
    breadcrumb: 'Concept & Visual Prototype',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['Concept Prototype', 'and Visual Prototype'],
      description:
        'Turn early concepts into physical models for design reviews, presentations and user feedback — with fast iterations and appearance-focused finishes.',
      cta: 'Get a Concept Prototype Quote',
      image: unsplash('1582143434535-eba55a806718', 2000),
      alt: 'Clear visual prototype components for design review',
    },
    capabilities: {
      title: 'Industrial Design Prototyping Capabilities',
      subtitle:
        'Concept and visual models answer different design questions. The process is chosen around speed, appearance and the feedback you need.',
      layout: 'grid',
      items: [
        {
          title: 'Concept Models',
          description: 'Fast physical models that turn sketches and CAD into something the team can hold and discuss.',
          image: unsplash('1611117775350-ac3950990985', 900),
          alt: 'Concept models produced on 3D printers',
          points: ['Fast iteration', 'Form and proportion review', 'Multiple design options'],
          href: '#/solutions/concept-visual-prototype',
        },
        {
          title: 'Visual Prototypes',
          description: 'Appearance-focused parts with realistic materials, color and surface finish.',
          image: unsplash('1582143434535-eba55a806718', 900),
          alt: 'Visual prototype with clear polished surfaces',
          points: ['Realistic appearance', 'Color and finish samples', 'Presentation-ready parts'],
          href: '#/solutions/concept-visual-prototype',
        },
        {
          title: 'Industrial Design Support',
          description: 'DFM feedback and prototype iteration support for design teams.',
          image: unsplash('1454165804606-c3d57bc86b40', 900),
          alt: 'Designers reviewing prototype drawings',
          points: ['Design-for-model review', 'Material and finish advice', 'Iteration planning'],
          href: '#/solutions/concept-visual-prototype',
        },
      ],
    },
    advantages: {
      image: unsplash('1454165804606-c3d57bc86b40', 2000),
      alt: 'Design team reviewing a prototype',
      title: 'Why Choose EZHONG for Concept and Visual Prototypes?',
      mode: 'icons',
      items: [
        {
          icon: 'gauge',
          title: 'Fast iterations',
          text: 'Models are produced quickly so design reviews keep moving.',
        },
        {
          icon: 'target',
          title: 'Appearance focus',
          text: 'Materials, color and finish are selected to represent the intended product.',
        },
        {
          icon: 'layers',
          title: 'Multiple routes',
          text: '3D printing, CNC and casting are compared for speed, detail and finish.',
        },
        {
          icon: 'clipboard',
          title: 'Design feedback',
          text: 'Modeling and DFM notes help the team refine form and manufacturability.',
        },
      ],
    },
    process: {
      title: 'From Concept to a Model You Can Review',
      subtitle: 'The prototype route follows the design question — form, appearance or user feedback.',
      steps: [
        { title: 'Concept review', text: 'Clarify the design intent, review stage and feedback needed.' },
        { title: 'CAD and route', text: 'Prepare the model and choose printing, machining or casting.' },
        { title: 'Prototype build', text: 'Produce, finish and assemble the model.' },
        { title: 'Review & iterate', text: 'Share photos or parts for review and plan the next iteration.' },
      ],
    },
    materials: {
      title: 'Materials for Concept and Visual Prototypes',
      subtitle: 'Resins, nylons, acrylic and cast urethane selected for speed, detail or appearance.',
      groups: [
        {
          key: 'additive',
          label: 'Additive',
          items: [
            {
              key: 'standard-resin',
              name: 'Standard Resin',
              subtitle: 'Fine detail and smooth surfaces',
              properties: 'High-detail resin for form studies and presentation models with smooth surfaces.',
              applications: 'Concept models, display parts and design reviews.',
              image: unsplash('1611117775350-ac3950990985', 900),
              alt: 'Detailed resin concept models',
            },
            {
              key: 'tough-resin',
              name: 'Tough Resin',
              subtitle: 'Impact-resistant models',
              properties: 'Higher toughness for handling and simple functional checks.',
              applications: 'Hand-held models, snap-fit studies and mechanism mockups.',
              image: unsplash('1625465837903-0e4d77bcc467', 900),
              alt: 'Tough resin prototype model',
            },
            {
              key: 'nylon',
              name: 'SLS Nylon',
              subtitle: 'Durable unpainted models',
              properties: 'Durable nylon with a matte surface for functional-looking models.',
              applications: 'Ergonomic models, brackets and concept assemblies.',
              image: unsplash('1625465404484-448f58e5c5d9', 900),
              alt: 'SLS nylon concept part',
            },
          ],
        },
        {
          key: 'machined-cast',
          label: 'Machined & cast',
          items: [
            {
              key: 'acrylic',
              name: 'Acrylic',
              subtitle: 'Clear and polished visual parts',
              properties: 'Optical clarity and polishability for transparent visual prototypes.',
              applications: 'Lenses, light guides and clear display models.',
              image: unsplash('1582143434535-eba55a806718', 900),
              alt: 'Clear acrylic visual prototypes',
            },
            {
              key: 'urethane',
              name: 'Urethane Casting',
              subtitle: 'Color-matched visual models',
              properties: 'Cast urethane can mimic molded plastic and be color matched for appearance.',
              applications: 'Consumer product models, covers and presentation parts.',
              image: unsplash('1625465404484-448f58e5c5d9', 900),
              alt: 'Urethane cast visual prototype',
            },
          ],
        },
      ],
    },
    finish: {
      title: 'Finishing Options for Visual Prototypes',
      defaultKey: 'sanding-polishing',
      keys: ['sanding-polishing', 'mirror-polishing', 'bead-blasting', 'vacuum-metalizing'],
    },
    applications: {
      title: 'Applications for Concept and Visual Prototypes',
      intro:
        'Concept and visual models support design reviews, presentations, ergonomics and early user feedback.',
      items: conceptApplications,
    },
    specs: {
      title: 'Concept and Visual Prototype Capabilities',
      rows: [
        { label: 'Processes', value: 'SLA resin, SLS nylon, CNC machining and urethane casting.' },
        { label: 'Maximum Size', value: 'Up to 500 × 500 × 400 mm depending on process.' },
        { label: 'Tolerance', value: '±0.2 mm typical for printed models; tighter after CNC machining.' },
        { label: 'Finish', value: 'Sanding, polishing, painting, clear coating and vacuum metalizing.' },
        { label: 'Quantities', value: '1–20 models per iteration, with small batches available.' },
        { label: 'Lead Time', value: '2–5 business days for printed models; finishing may add time.' },
      ],
    },
    explain: {
      first: {
        title: 'What is a concept prototype?',
        text: 'A concept prototype is a fast physical expression of an early idea. It helps the team evaluate form, proportion and basic interaction before detailed engineering.',
        points: [
          'Turns sketches into a physical form.',
          'Tests proportion and ergonomics quickly.',
          'Supports multiple design directions.',
        ],
        image: unsplash('1611117775350-ac3950990985', 1200),
        alt: 'Concept prototype models in a workshop',
      },
      second: {
        title: 'What is a visual prototype?',
        text: 'A visual prototype focuses on appearance: color, material, surface and fit for presentation. It is often built after the concept direction is chosen.',
        cards: [
          { title: 'Appearance', text: 'Near-production color, material and surface finish.' },
          { title: 'Presentation', text: 'Models ready for stakeholder and user feedback.' },
        ],
        image: unsplash('1582143434535-eba55a806718', 1200),
        alt: 'Visual prototype with polished clear surfaces',
      },
    },
    faqs: [
      {
        q: 'What is the difference between a concept and visual prototype?',
        a: 'A concept prototype explores form and proportion quickly. A visual prototype focuses on realistic appearance, color, material and finish for presentation.',
      },
      {
        q: 'How fast can I get a concept model?',
        a: 'Most printed concept models ship in 2–5 business days; CNC or cast models and finishing may add time.',
      },
      {
        q: 'Can you produce multiple design variants?',
        a: 'Yes. Several models can be produced in one iteration for side-by-side review.',
      },
      {
        q: 'How realistic can the finish be?',
        a: 'Models can be sanded, polished, painted, clear-coated or metalized to represent the intended product.',
      },
      {
        q: 'Can visual prototypes be functionally tested?',
        a: 'Some models can be handled and assembled, but functional testing is better served by a CNC or engineering prototype.',
      },
      {
        q: 'What files do you need?',
        a: 'A 3D model plus reference images, color/material direction, quantity and deadline.',
      },
    ],
    closing: {
      title: 'Turn Early Concepts Into Physical Visual Prototypes',
      description:
        'Send your model or sketch direction, quantity and review date. We will recommend a concept or visual prototype route.',
      cta: 'Get a Concept Prototype Quote',
    },
  },

  'functional-engineering-prototype': {
    slug: 'functional-engineering-prototype',
    breadcrumb: 'Functional & Engineering Prototype',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['Functional & Engineering', 'Prototypes'],
      description:
        'Verify feasibility, test performance and evaluate manufacturability with functional and engineering prototypes built in production-intent materials.',
      cta: 'Get a Functional Prototype Quote',
      image: unsplash('1758873263563-5ba4aa330799', 2000),
      alt: 'Engineer testing and measuring a functional prototype',
    },
    capabilities: {
      title: 'Functional and Engineering Prototyping Capabilities',
      subtitle:
        'Functional prototypes test how a design behaves; engineering prototypes prove it can be manufactured reliably.',
      layout: 'grid',
      items: [
        {
          title: 'Functional Prototypes',
          description: 'Parts built in production-intent materials for fit, function and assembly testing.',
          image: unsplash('1740209475472-aa7d280f7452', 900),
          alt: 'Functional prototype being machined',
          points: ['Production-intent materials', 'Fit and assembly checks', 'Realistic surface finish'],
          href: '#/solutions/functional-engineering-prototype',
        },
        {
          title: 'Engineering Validation',
          description: 'Tight-tolerance prototypes for performance and durability evaluation.',
          image: unsplash('1713371398479-4410ca153b1f', 900),
          alt: 'Engineering prototype being measured',
          points: ['±0.01 mm features', 'First-article inspection', 'CMM data'],
          href: '#/solutions/functional-engineering-prototype',
        },
        {
          title: 'Assembly & Fit Checks',
          description: 'Multi-part prototypes assembled and checked before production tooling.',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Prototype assembly components',
          points: ['Multi-part builds', 'Hardware and inserts', 'Assembly validation'],
          href: '#/solutions/functional-engineering-prototype',
        },
        {
          title: 'Bridge Prototypes',
          description: 'Small batches that bridge testing into pilot production.',
          image: unsplash('1716191300020-b52dec5b70a8', 900),
          alt: 'Bridge prototype production',
          points: ['Pilot quantities', 'Repeatable process', 'Inspection documentation'],
          href: '#/solutions/cnc-production',
        },
      ],
    },
    advantages: {
      image: unsplash('1758873263563-5ba4aa330799', 2000),
      alt: 'Functional prototype validation',
      title: 'Why Choose EZHONG for Functional Prototypes?',
      mode: 'icons',
      items: [
        {
          icon: 'target',
          title: 'Design feasibility',
          text: 'Prototypes reveal whether the design behaves as intended before tooling is committed.',
        },
        {
          icon: 'clipboard',
          title: 'Manufacturability review',
          text: 'DFM feedback identifies features that would be difficult or costly to produce.',
        },
        {
          icon: 'gauge',
          title: 'Performance testing',
          text: 'Production-intent materials and finishes support realistic test results.',
        },
        {
          icon: 'shield',
          title: 'Documented validation',
          text: 'Inspection data and material certificates support engineering reviews.',
        },
      ],
    },
    process: {
      title: 'From Engineering Requirements to Validated Prototype',
      subtitle: 'The test plan shapes the prototype build, not the other way around.',
      steps: [
        { title: 'Requirements review', text: 'Confirm function, loads, environment and assembly requirements.' },
        { title: 'DFM & engineering', text: 'Review tolerances, materials and features before machining.' },
        { title: 'Prototype build', text: 'Machine, finish and assemble the prototype for testing.' },
        { title: 'Test & validate', text: 'Measure, test and document results for the engineering team.' },
      ],
    },
    materials: {
      title: 'Materials for Functional and Engineering Prototypes',
      subtitle: 'Production-intent metals and plastics selected for mechanical and environmental testing.',
      groups: metals,
    },
    finish: { title: 'Functional Prototype Surface Finishes', defaultKey: 'fine-machining' },
    applications: {
      title: 'Applications for Functional and Engineering Prototypes',
      intro:
        'Functional and engineering prototypes support validation in medical, automotive, robotics, aerospace and electronics programs.',
      items: functionalApplications,
    },
    specs: {
      title: 'Functional and Engineering Prototype Capabilities',
      rows: [
        { label: 'Tolerances', value: '±0.01 mm typical; ±0.005 mm on critical features after review.' },
        { label: 'Materials', value: 'Aluminum, stainless steel, titanium, brass, tool steel and engineering plastics.' },
        { label: 'Quantities', value: '1–50 functional prototypes, with bridge batches available.' },
        { label: 'Finishing', value: 'Anodizing, bead blasting, polishing, plating and painting for realistic testing.' },
        { label: 'Testing Support', value: 'Dimensional inspection, material certificates and assembly checks.' },
        { label: 'Lead Time', value: '5–10 business days for complex prototypes; testing support follows.' },
      ],
    },
    explain: {
      first: {
        title: 'Functional vs engineering prototype',
        text: 'A functional prototype demonstrates that the design works. An engineering prototype proves that it can be manufactured reliably and consistently.',
        points: [
          'Functional: fit, function and user interaction.',
          'Engineering: tolerances, materials and process capability.',
          'Both reduce risk before production tooling.',
        ],
        image: unsplash('1740209475472-aa7d280f7452', 1200),
        alt: 'Functional prototype machining',
      },
      second: {
        title: 'Validation stages: EVT, DVT and PVT',
        text: 'Prototype rounds are often organized around engineering verification, design validation and production validation.',
        cards: [
          { title: 'EVT', text: 'Engineering verification: does the design meet the technical requirements?' },
          { title: 'DVT', text: 'Design validation: does it perform in the intended environment?' },
          { title: 'PVT', text: 'Production validation: can the process make it consistently?' },
        ],
        image: unsplash('1758873263563-5ba4aa330799', 1200),
        alt: 'Validation and measurement of a prototype',
      },
    },
    faqs: [
      {
        q: 'What is the difference between functional and engineering prototypes?',
        a: 'Functional prototypes prove fit and function. Engineering prototypes focus on manufacturability, tolerance capability and production readiness.',
      },
      {
        q: 'Can you build prototypes in production materials?',
        a: 'Yes. Metals and engineering plastics are machined to represent the intended production part.',
      },
      {
        q: 'Do you support assembly and hardware?',
        a: 'Yes. Multi-part prototypes can be machined, finished and assembled with inserts or hardware for realistic testing.',
      },
      {
        q: 'What inspection data is available?',
        a: 'First-article reports, dimensional data, material certificates and CMM reports on request.',
      },
      {
        q: 'How many prototypes should I build?',
        a: 'It depends on the test plan. Typical rounds use 1–10 parts per configuration; bridge quantities can be larger.',
      },
      {
        q: 'How fast can you deliver?',
        a: 'Most functional prototypes ship in 5–10 business days after drawing approval, depending on finish and testing.',
      },
    ],
    closing: {
      title: 'Test Function, Fit and Performance Before Production',
      description:
        'Send the drawing, test requirements and quantity. We will confirm the prototype route, materials and inspection plan.',
      cta: 'Get a Functional Prototype Quote',
    },
  },

  'low-volume-manufacturing': {
    slug: 'low-volume-manufacturing',
    breadcrumb: 'Low Volume Manufacturing',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['Low Volume', 'Manufacturing'],
      description:
        'Manufacture small batches of plastic and metal parts without mass-production tooling. Bridge from prototype to production with consistent quality.',
      cta: 'Get a Low Volume Quote',
      image: unsplash('1625465404484-448f58e5c5d9', 2000),
      alt: 'Low-volume manufactured plastic and metal components',
    },
    capabilities: {
      title: 'Our Low Volume Manufacturing Capabilities',
      subtitle:
        'Select the process that matches the part, quantity and material — without committing to high-volume tooling.',
      layout: 'grid',
      items: [
        {
          title: 'Low-Volume CNC Machining',
          description: 'Machined metal and plastic parts from tens to thousands of pieces.',
          image: unsplash('1740209475472-aa7d280f7452', 900),
          alt: 'Low-volume CNC machining',
          points: ['20–10,000+ pieces', 'No hard tooling', 'Repeatable fixtures'],
          href: '#/services/cnc-machining',
        },
        {
          title: 'Rapid Injection Molding',
          description: 'Aluminum or steel rapid tools for production-like molded parts.',
          image: unsplash('1625465404484-448f58e5c5d9', 900),
          alt: 'Rapid injection-molded parts',
          points: ['Rapid tooling', 'T1 samples', 'Production resins'],
          href: '#/services/rapid-tooling',
        },
        {
          title: 'Vacuum Casting',
          description: 'Silicone molds and urethane systems for small-series plastic parts.',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Vacuum-cast small series parts',
          points: ['10–1,000 parts', 'Production-like materials', 'Color matching'],
          href: '#/services/vacuum-casting',
        },
        {
          title: 'Sheet Metal & Extrusion',
          description: 'Fabricated and extruded metal parts for enclosures, frames and brackets.',
          image: unsplash('1701788607416-f1b5dd5a09ec', 900),
          alt: 'Fabricated sheet metal and extrusion components',
          points: ['Laser cutting and bending', 'Aluminum profiles', 'Finishing and assembly'],
          href: '#/services/sheet-metal-fabrication',
        },
      ],
    },
    advantages: {
      image: unsplash('1625465404484-448f58e5c5d9', 2000),
      alt: 'Low-volume production parts',
      title: 'Why Choose EZHONG for Low Volume Manufacturing?',
      mode: 'icons',
      items: [
        {
          icon: 'boxes',
          title: 'No heavy tooling',
          text: 'Low-volume routes avoid the cost and lead time of full production tooling.',
        },
        {
          icon: 'layers',
          title: 'Multiple processes',
          text: 'CNC, rapid molding, casting, sheet metal and extrusion are coordinated under one plan.',
        },
        {
          icon: 'gauge',
          title: 'Fast turnaround',
          text: 'Small batches move quickly, supporting pilots, market tests and bridge supply.',
        },
        {
          icon: 'shield',
          title: 'Consistent quality',
          text: 'Documented setups and inspection keep repeat small batches within specification.',
        },
      ],
    },
    process: {
      title: 'From Process Selection to Small-Batch Delivery',
      subtitle: 'The process follows the part and volume, not a fixed factory route.',
      steps: [
        { title: 'DFM & process selection', text: 'Review geometry, material and quantity to choose the right route.' },
        { title: 'Tooling or fixtures', text: 'Prepare rapid tooling, molds or fixtures needed for the batch.' },
        { title: 'Production', text: 'Manufacture the small batch with documented settings.' },
        { title: 'Finish & inspect', text: 'Apply finishing, inspect and prepare the shipment.' },
      ],
    },
    materials: {
      title: 'Materials for Low Volume Manufacturing',
      subtitle: 'Metal and plastic materials available across CNC, molding, casting and fabrication.',
      groups: metals,
    },
    finish: { title: 'Low Volume Manufacturing Surface Finishes', defaultKey: 'fine-machining' },
    applications: {
      title: 'Applications of Low Volume Manufacturing',
      intro:
        'Low-volume production supports pilot builds, market tests, bridge supply and custom equipment across industries.',
      items: lowVolumeApplications,
    },
    specs: {
      title: 'Low Volume Manufacturing Capabilities',
      rows: [
        { label: 'Quantities', value: 'Typically 10–10,000 parts, depending on process and material.' },
        { label: 'Processes', value: 'CNC machining, rapid injection molding, vacuum casting, sheet metal and extrusion.' },
        { label: 'Tolerances', value: 'Process-dependent; critical features confirmed during DFM review.' },
        { label: 'Materials', value: 'Aluminum, stainless steel, brass, titanium, ABS, PC, PA, PP and POM.' },
        { label: 'Finishing', value: 'Anodizing, bead blasting, polishing, plating, painting and powder coating.' },
        { label: 'Lead Time', value: 'Typically 2–6 weeks after approval, depending on tooling and finishing.' },
      ],
    },
    faqs: [
      {
        q: 'What quantities count as low volume?',
        a: 'Typically 10–10,000 parts, depending on the process. CNC and vacuum casting suit smaller batches; rapid molding supports larger low-volume runs.',
      },
      {
        q: 'Which process should I choose?',
        a: 'Geometry, material, quantity and finish determine the route. CNC for tight tolerances and simple tooling; casting for plastic small series; rapid molding for production-like resin parts.',
      },
      {
        q: 'Can I transition to mass production later?',
        a: 'Yes. The design and quality requirements carry into production tooling, so the part can move to higher-volume processes.',
      },
      {
        q: 'Do you provide samples before the batch?',
        a: 'Yes. T1 or first-article samples are provided for approval where the process requires tooling.',
      },
      {
        q: 'Can you handle finishing and assembly?',
        a: 'Yes. Finishing, hardware insertion and sub-assembly can be coordinated with the batch.',
      },
      {
        q: 'What do you need to quote?',
        a: 'A 3D model, 2D drawing, material, quantity, finish and target date.',
      },
    ],
    closing: {
      title: 'Bridge from Prototype to Mass Production',
      description:
        'Send the model, material and quantity. We will recommend the right low-volume process and return a quote with lead time.',
      cta: 'Get a Low Volume Quote',
    },
  },
}
