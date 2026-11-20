// Rich industry detail pages for the four industries in the Industries overview.
// Content structure follows the WayKen industry pages; all copy is original sample text.

import { unsplash } from './content'
import { millingMaterialGroups } from './cncMilling'
import type { GenericServiceData } from './genericServices'

const materials = millingMaterialGroups

const industryPages: Record<string, GenericServiceData> = {
  'robotics-automation': {
    slug: 'robotics-automation',
    breadcrumb: 'Robotics and Automation',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['Precision Manufacturing for', 'Robotics and Automation'],
      description:
        'From robotic joints and end effectors to structural frames and motion components, we support reliable robotics and automation parts through flexible, precision manufacturing.',
      cta: 'Start Your Robotics Project',
      image: unsplash('1716191299980-a6e8827ba10b', 2000),
      alt: 'Industrial robot arm working on an automated production line',
    },
    capabilities: {
      title: 'Manufacturing Services for Every Robot Subsystem',
      subtitle:
        'Joints, end effectors, frames and control hardware each need a different process. We match machining, printing, forming and casting to the part and volume.',
      layout: 'grid',
      items: [
        {
          title: '5-Axis CNC Machining',
          description: 'Complex joint housings and structural components with multi-face features in fewer setups.',
          image: unsplash('1602664876866-d3b33b77756b', 900),
          alt: 'Five-axis machining of a complex robotics component',
          points: ['Sculpted surfaces and undercuts', 'Tight bore positions', 'Thin-wall sections'],
          href: '#/services/5-axis-cnc-machining',
        },
        {
          title: 'Mill-Turn CNC Machining',
          description: 'Turned and milled features in one setup for joints, shafts and motor components.',
          image: unsplash('1666618090858-fbcee636bd3e', 900),
          alt: 'Mill-turn machining of a robot joint shaft',
          points: ['One-setup turn-mill', 'Concentric bores', 'Threads and cross-holes'],
          href: '#/services/cnc-turning',
        },
        {
          title: '3D Printing',
          description: 'Fast prototype housings, brackets and end-effectors for design validation.',
          image: unsplash('1611117775350-ac3950990985', 900),
          alt: '3D printing robot prototype components',
          points: ['SLA and SLS', 'Complex geometry', 'Post-processing'],
          href: '#/services/3d-printing',
        },
        {
          title: 'Sheet Metal Fabrication',
          description: 'Frames, mounting plates and guards for robot cells and automation equipment.',
          image: unsplash('1701788607416-f1b5dd5a09ec', 900),
          alt: 'Fabricated sheet metal robot cell frame',
          points: ['Laser cutting and bending', 'Welding and hardware', 'Powder coating'],
          href: '#/services/sheet-metal-fabrication',
        },
        {
          title: 'Vacuum Casting',
          description: 'Small-series covers and housings in production-like plastics.',
          image: unsplash('1625465404484-448f58e5c5d9', 900),
          alt: 'Vacuum-cast robot cover prototype',
          points: ['Silicone molds', 'Color matching', 'Small batches'],
          href: '#/services/vacuum-casting',
        },
      ],
    },
    advantages: {
      image: unsplash('1716191299980-a6e8827ba10b', 2000),
      alt: 'Robot arm and automation equipment in a production cell',
      title: 'Why Robotics Companies Work with EZHONG',
      mode: 'icons',
      items: [
        {
          icon: 'target',
          title: 'Complex geometry',
          text: 'Multi-axis machining and additive processes handle sculpted joints and lightweight structures.',
        },
        {
          icon: 'gauge',
          title: 'Tight tolerances',
          text: 'Critical bores and mounting features are machined and inspected to the assembly requirements.',
        },
        {
          icon: 'layers',
          title: 'Assembly-ready parts',
          text: 'Hardware, finishing and sub-assembly can be coordinated before shipment.',
        },
        {
          icon: 'clipboard',
          title: 'Fast design iterations',
          text: 'Prototype parts and DFM feedback keep robot development moving between design revisions.',
        },
      ],
    },
    process: {
      title: 'From CAD Files to Ready-to-Assemble Robot Parts',
      subtitle: 'Prototype and production needs are planned together so the design can move forward without re-sourcing.',
      steps: [
        { title: 'Share requirements', text: 'Send CAD, drawings, material and quantity for DFM review.' },
        { title: 'DFM & process choice', text: 'Confirm the manufacturing route, tolerances, finish and inspection.' },
        { title: 'Prototype & validate', text: 'Machine or print parts, assemble and check fit and function.' },
        { title: 'Manufacture & inspect', text: 'Finish, inspect and document parts for the build.' },
        { title: 'Pilot or repeat', text: 'Move into pilot or repeat production with stable fixtures and processes.' },
      ],
    },
    materials: {
      title: 'Materials for Robotics and Automation',
      subtitle: 'Metals and engineering plastics selected for stiffness, weight, wear and assembly.',
      groups: materials,
    },
    finish: {
      title: 'Surface Finishes for Robotics Parts',
      defaultKey: 'fine-machining',
      keys: [
        'fine-machining',
        'bead-blasting',
        'anodizing-type-ii',
        'hardcoat-anodizing',
        'sanding-polishing',
        'powder-coating',
      ],
    },
    applications: {
      title: 'Robotics and Automation Parts We Support',
      intro:
        'From collaborative robot joints to end-of-arm tooling and cell frames, parts are designed for reliable motion, mounting and service.',
      items: [
        { name: 'Robot Joints', image: unsplash('1666618090858-fbcee636bd3e', 900), alt: 'Precision robot joint components' },
        { name: 'End Effectors', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'Robotic end effector prototype' },
        { name: 'Structural Frames', image: unsplash('1716191299980-a6e8827ba10b', 900), alt: 'Robot structural frame assembly' },
        { name: 'Motion Components', image: unsplash('1713371398479-4410ca153b1f', 900), alt: 'Precision motion components' },
        { name: 'Grippers & Tooling', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Custom gripper and tooling parts' },
        { name: 'Control Enclosures', image: unsplash('1625465404484-448f58e5c5d9', 900), alt: 'Automation control enclosure' },
      ],
    },
    specs: {
      title: 'Robotics Manufacturing Specifications',
      rows: [
        { label: 'Tolerances', value: '±0.01 mm typical; ±0.005 mm on critical joint and mounting features after review.' },
        { label: 'Processes', value: '5-axis CNC, mill-turn, 3D printing, sheet metal fabrication and vacuum casting.' },
        { label: 'Materials', value: 'Aluminum, stainless steel, titanium, brass and engineering plastics including POM and PEEK.' },
        { label: 'Quantities', value: '1–50 prototypes; pilot and repeat production available.' },
        { label: 'Finishing', value: 'Anodizing, bead blasting, polishing, plating and powder coating.' },
        { label: 'Lead Time', value: '5–10 business days for prototypes; 2–4 weeks for production depending on finish.' },
      ],
    },
    explain: {
      first: {
        title: 'Prototype vs production robot parts',
        text: 'Early robots need fast parts for fit and function; production robots need repeatability and stable supply. The process plan changes, but the design requirements should carry through.',
        points: [
          'Prototypes validate joint geometry and assembly.',
          'Production parts use dedicated fixtures and inspection.',
          'The same material and finish can carry across both.',
        ],
        image: unsplash('1716191299980-a6e8827ba10b', 1200),
        alt: 'Robot arm prototype and production environment',
      },
      second: {
        title: 'Supporting every robot subsystem',
        text: 'The manufacturing route follows the subsystem: machined joints, printed prototypes, fabricated frames and cast covers.',
        cards: [
          { title: 'Motion & joints', text: 'Precision turning and 5-axis milling for bores and mounting faces.' },
          { title: 'Frames & guards', text: 'Sheet metal fabrication with finishing and hardware insertion.' },
        ],
        image: unsplash('1602664876866-d3b33b77756b', 1200),
        alt: 'Multi-axis machining of a robotics component',
      },
    },
    faqs: [
      {
        q: 'Can you machine robot joints and end effectors?',
        a: 'Yes. Joint housings, arms, end-effectors and mounting components are machined in aluminum, stainless steel, titanium or plastics.',
      },
      {
        q: 'What tolerances are typical for robot parts?',
        a: '±0.01 mm is typical, with ±0.005 mm on critical bearing bores and mounting features after DFM review.',
      },
      {
        q: 'Can you support assembly and finishing?',
        a: 'Yes. Anodizing, bead blasting, hardware insertion and sub-assembly can be coordinated before shipment.',
      },
      {
        q: 'How do you handle design changes?',
        a: 'Prototype routes and DFM feedback make revisions fast. Production revisions are tracked against the drawing version.',
      },
      {
        q: 'What quantities can you produce?',
        a: 'From single prototypes to pilot and repeat production. CNC and casting suit lower volumes; sheet metal and machined parts can scale further.',
      },
      {
        q: 'Which files should I send?',
        a: 'A STEP model plus 2D drawings with tolerances, materials, finish and quantity. Assemblies can include a BOM.',
      },
    ],
    closing: {
      title: 'Bring Your Robotics Design to Production',
      description:
        'Send the CAD model, drawings and build quantity. We will recommend the manufacturing route and return a clear quote.',
      cta: 'Start Your Robotics Project',
    },
  },

  aerospace: {
    slug: 'aerospace',
    breadcrumb: 'Aerospace',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['Aerospace Prototyping', 'and Parts Manufacturing'],
      description:
        'Move aerospace projects from early design evaluation to inspection-ready, low-volume production with responsive engineering support and precision machining.',
      cta: 'Start Your Aerospace Project',
      image: unsplash('1540575861501-7cf05a4b125a', 2000),
      alt: 'Aircraft turbine engine component detail',
    },
    capabilities: {
      title: 'Aerospace Manufacturing Capabilities',
      subtitle:
        'Lightweight structures, tight tolerances and material traceability are matched with the right machining, printing, forming or casting process.',
      layout: 'grid',
      items: [
        {
          title: '5-Axis CNC Machining',
          description: 'Complex aerospace brackets and structural parts with multi-face access and tight tolerances.',
          image: unsplash('1602664876866-d3b33b77756b', 900),
          alt: 'Five-axis machining of an aerospace bracket',
          points: ['Thin-wall structures', 'Compound angles', 'Titanium and aluminum'],
          href: '#/services/5-axis-cnc-machining',
        },
        {
          title: 'Mill-Turn Machining',
          description: 'Turned and milled fittings, bushings and connectors in fewer setups.',
          image: unsplash('1666618090858-fbcee636bd3e', 900),
          alt: 'Mill-turn machining of an aerospace fitting',
          points: ['Concentric features', 'Threads and cross-holes', 'One-setup parts'],
          href: '#/services/cnc-turning',
        },
        {
          title: '3D Printing',
          description: 'Fast prototype ducts, brackets and form studies before machining.',
          image: unsplash('1611117775350-ac3950990985', 900),
          alt: '3D-printed aerospace prototype parts',
          points: ['Complex geometry', 'Fast iterations', 'Post-processing'],
          href: '#/services/3d-printing',
        },
        {
          title: 'Sheet Metal Fabrication',
          description: 'Brackets, panels and support structures with formed and welded features.',
          image: unsplash('1701788607416-f1b5dd5a09ec', 900),
          alt: 'Fabricated aerospace sheet metal components',
          points: ['Laser cutting and forming', 'Welding and hardware', 'Finishing'],
          href: '#/services/sheet-metal-fabrication',
        },
        {
          title: 'Vacuum Casting',
          description: 'Small-series ducting, covers and prototype housings in production-like plastics.',
          image: unsplash('1625465404484-448f58e5c5d9', 900),
          alt: 'Vacuum-cast aerospace prototype housing',
          points: ['Silicone molds', 'Small batches', 'Color matching'],
          href: '#/services/vacuum-casting',
        },
      ],
    },
    advantages: {
      image: unsplash('1540575861501-7cf05a4b125a', 2000),
      alt: 'Aerospace engine components',
      title: 'Why Aerospace Teams Choose EZHONG',
      mode: 'icons',
      items: [
        {
          icon: 'target',
          title: 'Lightweight structures',
          text: 'Thin walls, ribs and pocketed geometry are machined with stable fixturing and inspection.',
        },
        {
          icon: 'clipboard',
          title: 'Material traceability',
          text: 'Mill certificates and material records are available with each order.',
        },
        {
          icon: 'gauge',
          title: 'Tight tolerances',
          text: 'Critical features are verified with calibrated inspection and documented reports.',
        },
        {
          icon: 'shield',
          title: 'Inspection documentation',
          text: 'First-article reports, dimensional data and CMM results support quality reviews.',
        },
      ],
    },
    process: {
      title: 'Support Across the Aerospace Product Lifecycle',
      subtitle: 'From concept models to repeat production, the process plan moves with the program.',
      steps: [
        { title: 'Concept & functional models', text: 'Validate form, fit and packaging before detailed design.' },
        { title: 'Engineering validation', text: 'Machine production-intent parts for testing and review.' },
        { title: 'Pre-production', text: 'Confirm fixtures, tolerances and inspection for the build.' },
        { title: 'Production', text: 'Manufacture repeat parts with documented setups and checks.' },
        { title: 'Updates & repeat orders', text: 'Handle design revisions and recurring supply with traceable records.' },
      ],
    },
    materials: {
      title: 'Materials for Aerospace Parts',
      subtitle: 'Aluminum, stainless steel, titanium and engineering plastics selected for weight, strength and environment.',
      groups: materials,
    },
    finish: {
      title: 'Aerospace Surface Finish Options',
      defaultKey: 'fine-machining',
      keys: ['fine-machining', 'bead-blasting', 'anodizing-type-ii', 'hardcoat-anodizing', 'passivation'],
    },
    applications: {
      title: 'Aerospace Parts and Applications We Support',
      intro:
        'Lightweight brackets, engine components, UAV structures and ground-support hardware are manufactured with traceable materials and inspection.',
      items: [
        { name: 'Structural Brackets', image: unsplash('1713371398485-7bde1bde9def', 900), alt: 'Aerospace structural bracket' },
        { name: 'Engine Components', image: unsplash('1540575861501-7cf05a4b125a', 900), alt: 'Aerospace engine component' },
        { name: 'UAV Frames', image: unsplash('1716191299980-a6e8827ba10b', 900), alt: 'UAV structural frame' },
        { name: 'Satellite Parts', image: unsplash('1602664876866-d3b33b77756b', 900), alt: 'Precision satellite component' },
        { name: 'Cabin Hardware', image: unsplash('1713371398479-4410ca153b1f', 900), alt: 'Aircraft cabin hardware components' },
        { name: 'Ground Support', image: unsplash('1537462715879-360eeb61a0ad', 900), alt: 'Ground support equipment components' },
      ],
    },
    specs: {
      title: 'Aerospace Manufacturing Specifications',
      rows: [
        { label: 'Tolerances', value: '±0.01 mm typical; ±0.005 mm on critical features after DFM review.' },
        { label: 'Surface Finish', value: 'Ra 0.8–0.4 µm on functional surfaces; finer with polishing.' },
        { label: 'Materials', value: 'Aluminum, stainless steel, titanium, Inconel, brass and engineering plastics.' },
        { label: 'Inspection', value: 'First-article reports, CMM data, dimensional reports and material certificates.' },
        { label: 'Documentation', value: 'Material and inspection records organized per order for quality review.' },
        { label: 'Lead Time', value: '5–10 business days for prototypes; 2–5 weeks for production depending on material.' },
      ],
    },
    explain: {
      first: {
        title: 'Prototype-to-production aerospace support',
        text: 'Aerospace programs often move from a handful of validation parts to inspection-ready low-volume supply. The same engineering plan can carry across both stages.',
        points: [
          'Concept and functional models for early reviews.',
          'Production-intent parts for validation testing.',
          'Documented repeat batches for program supply.',
        ],
        image: unsplash('1540575861501-7cf05a4b125a', 1200),
        alt: 'Aerospace engine and structural components',
      },
      second: {
        title: 'Quality control for aerospace parts',
        text: 'Material and dimensional records are planned with the manufacturing route so inspection is not an afterthought.',
        cards: [
          { title: 'DFM & engineering', text: 'Review tolerances, datums and inspection access before machining.' },
          { title: 'In-process checks', text: 'Critical features are verified during production, not only at the end.' },
        ],
        image: unsplash('1758873263563-5ba4aa330799', 1200),
        alt: 'Aerospace component dimensional inspection',
      },
    },
    faqs: [
      {
        q: 'What aerospace parts can you machine?',
        a: 'Brackets, fittings, housings, bushings and lightweight structural components in aluminum, stainless steel, titanium and other alloys.',
      },
      {
        q: 'Can you provide material certificates?',
        a: 'Yes. Mill certificates and material traceability records are available with production orders.',
      },
      {
        q: 'What tolerances can you hold?',
        a: '±0.01 mm is typical, with ±0.005 mm on critical features after review. Achievable tolerance depends on geometry and material.',
      },
      {
        q: 'Do you support low-volume aerospace production?',
        a: 'Yes. Pilot and low-volume production use documented fixtures, setups and inspection plans to keep batches consistent.',
      },
      {
        q: 'Can you inspect with CMM?',
        a: 'CMM inspection and dimensional reporting can be included where the drawing and feature access allow.',
      },
      {
        q: 'How do I start a quote?',
        a: 'Send the 3D model, 2D drawing, material specification, quantity and any quality or documentation requirements.',
      },
    ],
    closing: {
      title: 'Start Your Aerospace Manufacturing Project',
      description:
        'Send the model, drawing, alloy and inspection requirements. We will confirm the manufacturing route and return a quote.',
      cta: 'Start Your Aerospace Project',
    },
  },

  automotive: {
    slug: 'automotive',
    breadcrumb: 'Automotive',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['Automotive Prototyping', 'and Parts Manufacturing'],
      description:
        'Custom automotive manufacturing for engineers, OEMs and Tier 1 suppliers — from prototyping and trial production through low-volume end-use parts.',
      cta: 'Start Your Automotive Project',
      image: unsplash('1769147339214-076740872485', 2000),
      alt: 'Precision machined automotive components on engineering drawings',
    },
    capabilities: {
      title: 'Automotive Manufacturing Capabilities',
      subtitle:
        'Lighting, mechanical components and low-volume production parts each need a different route. We match the process to the validation stage.',
      layout: 'grid',
      items: [
        {
          title: 'CNC Machining',
          description: 'Precision metal and plastic parts for functional prototypes and production.',
          image: unsplash('1740209475472-aa7d280f7452', 900),
          alt: 'CNC machining an automotive component',
          points: ['Tight-tolerance features', 'Production-intent materials', 'Repeat batches'],
          href: '#/services/cnc-machining',
        },
        {
          title: 'Rapid Injection Molding',
          description: 'Low-volume molded parts for validation and pilot builds.',
          image: unsplash('1625465404484-448f58e5c5d9', 900),
          alt: 'Rapid injection-molded automotive component',
          points: ['Rapid tooling', 'T1 samples', 'Production resins'],
          href: '#/services/rapid-tooling',
        },
        {
          title: 'Vacuum Casting',
          description: 'Production-like covers, housings and optical prototypes in small series.',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Vacuum-cast automotive prototype parts',
          points: ['Small series', 'Color matching', 'Silicone molds'],
          href: '#/services/vacuum-casting',
        },
        {
          title: '3D Printing',
          description: 'Fast form studies and complex geometries before tooling is committed.',
          image: unsplash('1611117775350-ac3950990985', 900),
          alt: '3D-printed automotive concept parts',
          points: ['Concept models', 'Complex geometry', 'Post-processing'],
          href: '#/services/3d-printing',
        },
        {
          title: 'Sheet Metal Fabrication',
          description: 'Brackets, panels and structural parts with finishing for test vehicles.',
          image: unsplash('1701788607416-f1b5dd5a09ec', 900),
          alt: 'Fabricated automotive sheet metal components',
          points: ['Laser cutting and bending', 'Welding and hardware', 'Powder coating'],
          href: '#/services/sheet-metal-fabrication',
        },
      ],
    },
    advantages: {
      image: unsplash('1769147339214-076740872485', 2000),
      alt: 'Automotive machined parts and engineering drawings',
      title: 'Why Choose EZHONG for Automotive Parts?',
      mode: 'icons',
      items: [
        {
          icon: 'clipboard',
          title: 'Engineering support',
          text: 'DFM feedback and process recommendations help teams move from CAD to tested parts.',
        },
        {
          icon: 'layers',
          title: 'One-stop manufacturing',
          text: 'CNC, molding, casting, printing and sheet metal are coordinated under one plan.',
        },
        {
          icon: 'gauge',
          title: 'Quality standards',
          text: 'Inspection and documentation are planned with the part and validation stage.',
        },
        {
          icon: 'boxes',
          title: 'Prototype to low volume',
          text: 'The same design can move from prototype to pilot and low-volume production.',
        },
      ],
    },
    process: {
      title: 'From Concept to Pilot Production',
      subtitle: 'Prototype rounds are organized around the decisions an automotive program needs to make.',
      steps: [
        { title: 'Concept & CAD', text: 'Review form, packaging and design intent with a digital model.' },
        { title: 'Structure & function', text: 'Produce parts to verify fit, function and assembly.' },
        { title: 'Testing & pilot', text: 'Support engineering testing and pilot production runs.' },
        { title: 'Low-volume production', text: 'Move to repeatable low-volume supply with inspection and finishing.' },
      ],
    },
    materials: {
      title: 'Automotive Materials',
      subtitle: 'Metals and engineering plastics selected for strength, appearance, heat and production intent.',
      groups: materials,
    },
    finish: { title: 'Automotive Surface Finish Options', defaultKey: 'fine-machining' },
    applications: {
      title: 'Automotive Parts We Support',
      intro:
        'From optical lighting prototypes to mechanical brackets and low-volume production parts, the route follows the validation stage.',
      items: [
        { name: 'Lamp Lenses', image: unsplash('1582143434535-eba55a806718', 900), alt: 'Clear automotive lamp lens prototype' },
        { name: 'Light Guides', image: unsplash('1582143434535-eba55a806718', 900), alt: 'Automotive light guide prototype' },
        { name: 'Reflectors', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Automotive reflector component' },
        { name: 'Mechanical Brackets', image: unsplash('1769147339214-076740872485', 900), alt: 'Precision automotive bracket' },
        { name: 'Interior Components', image: unsplash('1625465404484-448f58e5c5d9', 900), alt: 'Molded automotive interior component' },
        { name: 'EV Components', image: unsplash('1593941707874-ef25b8b4a92b', 900), alt: 'Electric vehicle charging component' },
      ],
    },
    specs: {
      title: 'Automotive Manufacturing Specifications',
      rows: [
        { label: 'Tolerances', value: '±0.01 mm typical on machined features; molded tolerances depend on resin and geometry.' },
        { label: 'Processes', value: 'CNC machining, rapid injection molding, vacuum casting, 3D printing and sheet metal.' },
        { label: 'Materials', value: 'Aluminum, stainless steel, brass, titanium, ABS, PC, PA, PP and POM.' },
        { label: 'Quantities', value: '1–50 prototypes; pilot and low-volume production available.' },
        { label: 'Finishing', value: 'Anodizing, polishing, painting, powder coating and plating.' },
        { label: 'Lead Time', value: '5–10 business days for prototypes; 2–5 weeks for tooling and low-volume production.' },
      ],
    },
    explain: {
      first: {
        title: 'Why prototype automotive parts?',
        text: 'Prototypes let engineering teams test fit, function and appearance before production tooling. The right process depends on whether the question is about form, function or manufacturing.',
        points: [
          'Optical and appearance prototypes for lighting.',
          'Functional parts in production-intent materials.',
          'Pilot parts for assembly and validation.',
        ],
        image: unsplash('1582143434535-eba55a806718', 1200),
        alt: 'Automotive lighting prototype components',
      },
      second: {
        title: 'From prototype to low-volume production',
        text: 'Once the design is validated, the same requirements carry into rapid tooling, machining and finishing for pilot or low-volume supply.',
        cards: [
          { title: 'Rapid tooling', text: 'Production-like molded parts without full production tooling.' },
          { title: 'CNC production', text: 'Repeatable machined parts for brackets, housings and fixtures.' },
        ],
        image: unsplash('1716191300020-b52dec5b70a8', 1200),
        alt: 'Automotive low-volume production equipment',
      },
    },
    faqs: [
      {
        q: 'Can you produce automotive lighting prototypes?',
        a: 'Yes. Lenses, light guides and reflectors can be machined, cast or printed and finished for optical evaluation.',
      },
      {
        q: 'Do you support functional automotive prototypes?',
        a: 'Yes. Prototypes can be built in production-intent materials for fit, function and assembly testing.',
      },
      {
        q: 'What volumes can you support?',
        a: 'From single prototypes to pilot and low-volume production. For larger volumes, we can discuss production tooling and process options.',
      },
      {
        q: 'How fast can I get automotive prototypes?',
        a: 'Most CNC prototypes ship in 5–10 business days; cast or molded parts depend on tooling and finishing.',
      },
      {
        q: 'Can you help with DFM?',
        a: 'Yes. We review draft, wall thickness, tolerances, materials and finishing before quoting.',
      },
      {
        q: 'What files do you need?',
        a: 'A 3D model, 2D drawing or optical requirements, material, quantity and target date.',
      },
    ],
    closing: {
      title: 'Accelerate Your Automotive Development',
      description:
        'Send the model, material and validation stage. We will recommend a prototyping or low-volume route and return a quote.',
      cta: 'Start Your Automotive Project',
    },
  },

  'medical-devices': {
    slug: 'medical-devices',
    breadcrumb: 'Medical Devices',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['Medical Device Prototyping', 'and Rapid Manufacturing'],
      description:
        'Deliver surgical instruments, robotic components, housings and complex parts through precision CNC machining, 3D printing and rapid tooling.',
      cta: 'Start Your Medical Device Project',
      image: unsplash('1531746790731-6c087fecd65a', 2000),
      alt: 'Medical rehabilitation robotic device',
    },
    capabilities: {
      title: 'Rapid Manufacturing for Medical Device Development',
      subtitle:
        'Functional testing, engineering validation and low-volume production each need a process that matches the material and risk of the part.',
      layout: 'grid',
      items: [
        {
          title: 'Precision CNC Machining',
          description: 'Surgical instruments, robotic components and precision housings with fine detail.',
          image: unsplash('1740209475472-aa7d280f7452', 900),
          alt: 'Precision CNC machining of a medical component',
          points: ['Tight tolerances', 'Fine surface finishes', 'Stainless and titanium'],
          href: '#/services/precision-cnc-machining',
        },
        {
          title: '3D Printing',
          description: 'Fast prototype devices, housings and complex geometries for design review.',
          image: unsplash('1611117775350-ac3950990985', 900),
          alt: '3D-printed medical device prototypes',
          points: ['SLA and SLS', 'Clear and tough resins', 'Post-processing'],
          href: '#/services/3d-printing',
        },
        {
          title: 'Vacuum Casting',
          description: 'Small-series housings and covers in production-like medical plastics.',
          image: unsplash('1625465404484-448f58e5c5d9', 900),
          alt: 'Vacuum-cast medical device housing',
          points: ['Silicone molds', 'Small batches', 'Color matching'],
          href: '#/services/vacuum-casting',
        },
        {
          title: 'Rapid Injection Molding',
          description: 'Validation-ready molded housings and components with rapid tooling.',
          image: unsplash('1625465837903-0e4d77bcc467', 900),
          alt: 'Rapid injection-molded medical housing',
          points: ['Rapid tooling', 'T1 samples', 'Production resins'],
          href: '#/services/rapid-tooling',
        },
        {
          title: 'Sheet Metal Fabrication',
          description: 'Equipment enclosures, brackets and frames for medical systems.',
          image: unsplash('1701788607416-f1b5dd5a09ec', 900),
          alt: 'Fabricated medical equipment enclosure',
          points: ['Laser cutting and bending', 'Welding and hardware', 'Powder coating'],
          href: '#/services/sheet-metal-fabrication',
        },
      ],
    },
    advantages: {
      image: unsplash('1531746790731-6c087fecd65a', 2000),
      alt: 'Medical robotic rehabilitation device',
      title: 'Why Medical Teams Choose EZHONG',
      mode: 'icons',
      items: [
        {
          icon: 'target',
          title: 'Fine details',
          text: 'Small features, clean surfaces and precise fits are planned for the device function.',
        },
        {
          icon: 'gauge',
          title: 'Consistent quality',
          text: 'Inspection and documented results support engineering and regulatory reviews.',
        },
        {
          icon: 'clipboard',
          title: 'Validation support',
          text: 'Prototype rounds can move from functional testing to engineering validation.',
        },
        {
          icon: 'layers',
          title: 'Low-volume production',
          text: 'Rapid tooling, casting and machining support pilot and end-part production.',
        },
      ],
    },
    process: {
      title: 'From Functional Prototype to Low-Volume Production',
      subtitle: 'The manufacturing route follows the device development stage and the evidence your team needs.',
      steps: [
        { title: 'Requirements & DFM', text: 'Review geometry, material, cleanliness and inspection requirements.' },
        { title: 'Prototype build', text: 'Machine or print parts for fit, function and assembly review.' },
        { title: 'Validation support', text: 'Provide parts and documentation for engineering testing.' },
        { title: 'Low-volume production', text: 'Move to rapid tooling or repeat machining with inspection records.' },
      ],
    },
    materials: {
      title: 'Materials for Medical Device Parts',
      subtitle: 'Stainless steel, titanium, aluminum and engineering plastics selected for the device function.',
      groups: materials,
    },
    finish: {
      title: 'Medical Device Surface Finish Options',
      defaultKey: 'fine-machining',
      keys: ['fine-machining', 'sanding-polishing', 'bead-blasting', 'passivation', 'mirror-polishing'],
    },
    applications: {
      title: 'Medical Device Components We Support',
      intro:
        'Surgical instruments, robot components, housings and fluid parts are manufactured for functional testing and low-volume production.',
      items: [
        { name: 'Surgical Instruments', image: unsplash('1713371398479-4410ca153b1f', 900), alt: 'Precision surgical instrument components' },
        { name: 'Robot Components', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'Medical robot joint components' },
        { name: 'Device Housings', image: unsplash('1625465404484-448f58e5c5d9', 900), alt: 'Medical device housing' },
        { name: 'Fluid Components', image: unsplash('1625465837903-0e4d77bcc467', 900), alt: 'Medical fluid path components' },
        { name: 'Imaging Parts', image: unsplash('1582143434535-eba55a806718', 900), alt: 'Clear optical imaging components' },
        { name: 'Rehabilitation Devices', image: unsplash('1531746790731-6c087fecd65a', 900), alt: 'Medical rehabilitation device' },
      ],
    },
    specs: {
      title: 'Medical Device Manufacturing Specifications',
      rows: [
        { label: 'Tolerances', value: '±0.01 mm typical; ±0.005 mm on critical features after DFM review.' },
        { label: 'Surface Finish', value: 'Ra 0.8–0.4 µm, with polished or passivated surfaces where specified.' },
        { label: 'Materials', value: 'Stainless steel 303/304/316L, titanium, aluminum, POM, PEEK, PC and nylon.' },
        { label: 'Quantities', value: '1–50 prototypes; pilot and low-volume production available.' },
        { label: 'Inspection', value: 'Dimensional reports, first-article inspection and material certificates on request.' },
        { label: 'Lead Time', value: '5–10 business days for prototypes; production timing depends on process and finishing.' },
      ],
    },
    explain: {
      first: {
        title: 'Prototyping in medical device development',
        text: 'Prototypes help teams evaluate form, fit, function and assembly before tooling or regulatory review. The process and material should match the question being tested.',
        points: [
          'Functional prototypes in production-intent materials.',
          'Clear or flexible models for form and handling.',
          'Small series for clinical or user evaluation.',
        ],
        image: unsplash('1531746790731-6c087fecd65a', 1200),
        alt: 'Medical device prototype evaluation',
      },
      second: {
        title: 'From validation to low-volume production',
        text: 'Once the design is validated, rapid tooling and documented machining support pilot and end-part production without switching suppliers.',
        cards: [
          { title: 'Engineering validation', text: 'Parts and data for design verification and testing.' },
          { title: 'Low-volume production', text: 'Repeatable batches with inspection records.' },
        ],
        image: unsplash('1758873263563-5ba4aa330799', 1200),
        alt: 'Medical component dimensional inspection',
      },
    },
    faqs: [
      {
        q: 'Can you machine surgical instrument components?',
        a: 'Yes. Stainless steel and titanium instrument components can be machined, finished and inspected to the drawing.',
      },
      {
        q: 'Do you support medical device prototypes?',
        a: 'Yes. CNC, 3D printing and casting support functional, form and assembly prototypes.',
      },
      {
        q: 'What materials are available?',
        a: 'Stainless steel, titanium, aluminum and engineering plastics including POM, PEEK, PC and nylon.',
      },
      {
        q: 'Can you provide inspection documentation?',
        a: 'Dimensional reports, first-article inspection and material certificates are available on request.',
      },
      {
        q: 'How do you handle surface finish requirements?',
        a: 'Machined, polished, bead-blasted and passivated finishes are available; the specification is reviewed before quoting.',
      },
      {
        q: 'Can you support low-volume production?',
        a: 'Yes. Rapid tooling, vacuum casting and repeat machining support pilot and low-volume end-part production.',
      },
    ],
    closing: {
      title: 'Start Your Medical Device Project',
      description:
        'Send the model, material, quantity and validation stage. We will recommend a prototype or low-volume route and return a quote.',
      cta: 'Start Your Medical Device Project',
    },
  },

  'new-energy': {
    slug: 'new-energy',
    breadcrumb: 'New Energy',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['New Energy Prototyping', 'and Parts Manufacturing'],
      description:
        'Power module housings, thermal components, busbars and charging hardware — from prototype to low-volume production, with machining, casting and finishing.',
      cta: 'Start Your New Energy Project',
      image: unsplash('1593941707874-ef25b8b4a92b', 2000),
      alt: 'Electric vehicle charging connector and power hardware',
    },
    capabilities: {
      title: 'Manufacturing Capabilities for New Energy Systems',
      subtitle:
        'Thermal, sealing and electrical requirements drive the process choice. We combine machining, casting, extrusion and finishing around the housing or component.',
      layout: 'grid',
      items: [
        {
          title: 'CNC Machining',
          description: 'Power module housings, mounting plates and precision component features.',
          image: unsplash('1740209475472-aa7d280f7452', 900),
          alt: 'CNC machining of an energy component housing',
          points: ['Sealing faces and bores', 'Threaded mounting points', 'Tight tolerances'],
          href: '#/services/cnc-machining',
        },
        {
          title: 'Die Casting + CNC',
          description: 'Aluminum enclosures produced by die casting and finished on critical faces.',
          image: unsplash('1625465104346-1ec72f86a54b', 900),
          alt: 'Aluminum die-cast power module enclosure',
          points: ['Thin-wall castings', 'Secondary machining', 'Leak testing'],
          href: '#/services/die-casting',
        },
        {
          title: 'Extrusion & Heat Sinks',
          description: 'Aluminum profiles for heat sinks, frames and thermal management.',
          image: unsplash('1624775103325-8fe5c3b7d821', 900),
          alt: 'Aluminum extruded heat sink profile',
          points: ['Custom profiles', 'Cut-to-length', 'Anodizing'],
          href: '#/services/extrusion',
        },
        {
          title: 'Sheet Metal Fabrication',
          description: 'Brackets, panels, covers and racks for charging and power equipment.',
          image: unsplash('1701788607416-f1b5dd5a09ec', 900),
          alt: 'Fabricated sheet metal energy equipment parts',
          points: ['Laser cutting and bending', 'Welding and hardware', 'Powder coating'],
          href: '#/services/sheet-metal-fabrication',
        },
        {
          title: 'Prototyping',
          description: 'Fast prototypes for enclosures, mounts and thermal concepts before tooling.',
          image: unsplash('1611117775350-ac3950990985', 900),
          alt: 'Prototype energy components',
          points: ['CNC and 3D printing', 'Design validation', 'Small batches'],
          href: '#/services/3d-printing',
        },
      ],
    },
    advantages: {
      image: unsplash('1593941707874-ef25b8b4a92b', 2000),
      alt: 'EV charging equipment and power components',
      title: 'Why Choose EZHONG for New Energy Parts?',
      mode: 'icons',
      items: [
        {
          icon: 'gauge',
          title: 'Thermal performance',
          text: 'Heat sinks, castings and machined surfaces are planned around heat paths and flatness.',
        },
        {
          icon: 'target',
          title: 'Sealing and fit',
          text: 'Sealing faces, bores and mounting features are machined and inspected to the assembly.',
        },
        {
          icon: 'layers',
          title: 'Process combination',
          text: 'Casting, extrusion, sheet metal and CNC are coordinated for one finished assembly.',
        },
        {
          icon: 'shield',
          title: 'Production scaling',
          text: 'Prototype routes move into repeat production with documented setups and inspection.',
        },
      ],
    },
    process: {
      title: 'From Prototype to Energy Hardware Production',
      subtitle: 'The process route follows thermal, sealing and volume requirements.',
      steps: [
        { title: 'Requirements & DFM', text: 'Review thermal paths, sealing faces, materials and assembly.' },
        { title: 'Prototype & validate', text: 'Machine or print parts for fit and thermal evaluation.' },
        { title: 'Tooling & production', text: 'Coordinate casting, extrusion or fabrication with machining.' },
        { title: 'Finish & inspect', text: 'Finish, leak test and inspect critical features before shipment.' },
      ],
    },
    materials: {
      title: 'Materials for New Energy Parts',
      subtitle: 'Aluminum, copper and engineering plastics selected for conductivity, weight and environment.',
      groups: materials,
    },
    finish: {
      title: 'New Energy Surface Finish Options',
      defaultKey: 'fine-machining',
      keys: ['fine-machining', 'bead-blasting', 'anodizing-type-ii', 'hardcoat-anodizing', 'powder-coating'],
    },
    applications: {
      title: 'New Energy Parts We Support',
      intro:
        'Charging equipment, battery systems and power electronics rely on housings, thermal parts and mounting hardware that fit and seal correctly.',
      items: [
        { name: 'EV Charging Enclosures', image: unsplash('1593941707874-ef25b8b4a92b', 900), alt: 'EV charging enclosure components' },
        { name: 'Heat Sinks', image: unsplash('1624775103325-8fe5c3b7d821', 900), alt: 'Aluminum heat sink for power electronics' },
        { name: 'Busbars & Contacts', image: unsplash('1769147339214-076740872485', 900), alt: 'Copper and aluminum conductive components' },
        { name: 'Battery Housings', image: unsplash('1625465104346-1ec72f86a54b', 900), alt: 'Cast battery housing components' },
        { name: 'Power Modules', image: unsplash('1518770660439-4636190af475', 900), alt: 'Power module electronics assembly' },
        { name: 'Thermal Plates', image: unsplash('1624841970647-87dce8628d72', 900), alt: 'Machined thermal plate with channels' },
      ],
    },
    specs: {
      title: 'New Energy Manufacturing Specifications',
      rows: [
        { label: 'Tolerances', value: '±0.01 mm typical on machined features; casting tolerances depend on geometry.' },
        { label: 'Processes', value: 'CNC machining, die casting, extrusion, sheet metal and prototyping.' },
        { label: 'Materials', value: 'Aluminum, copper, stainless steel, brass and engineering plastics.' },
        { label: 'Quantities', value: 'Prototype quantities through low-volume production.' },
        { label: 'Inspection', value: 'Dimensional reports, leak testing and material certificates available.' },
        { label: 'Lead Time', value: 'Prototypes in 5–10 business days; production depends on tooling and finishing.' },
      ],
    },
    explain: {
      first: {
        title: 'Prototype to production for energy hardware',
        text: 'Prototypes validate fit, sealing and thermal concepts. Production planning then locks in the casting, extrusion or machining route.',
        points: ['Thermal and sealing validation.', 'Production-intent materials.', 'Tooling and repeatable supply.'],
        image: unsplash('1593941707874-ef25b8b4a92b', 1200),
        alt: 'EV charging hardware prototype',
      },
      second: {
        title: 'Thermal and sealing requirements',
        text: 'Heat paths and sealing faces often determine the process. Both are reviewed before the first cut or casting.',
        cards: [
          { title: 'Thermal design', text: 'Heat sink geometry, flatness and contact surfaces.' },
          { title: 'Sealing', text: 'Machined faces, bores and leak testing for enclosures.' },
        ],
        image: unsplash('1624775103325-8fe5c3b7d821', 1200),
        alt: 'Extruded aluminum heat sink',
      },
    },
    faqs: [
      {
        q: 'Can you produce EV charging enclosures?',
        a: 'Yes. Die-cast or machined enclosures can be finished with sealing faces, mounting features and leak testing.',
      },
      {
        q: 'Do you machine heat sinks?',
        a: 'Yes. Extruded heat sinks can be cut, machined and anodized; machined thermal plates are also available.',
      },
      {
        q: 'What processes do you combine?',
        a: 'CNC machining, die casting, extrusion, sheet metal fabrication and prototyping are coordinated under one plan.',
      },
      {
        q: 'Can you proof-test enclosures?',
        a: 'Leak testing and dimensional inspection can be included for enclosure and fluid-handling parts.',
      },
      {
        q: 'What materials are available?',
        a: 'Aluminum, copper, stainless steel, brass and engineering plastics for housings and insulation.',
      },
      {
        q: 'How do I start a quote?',
        a: 'Send the model, material, quantity and any thermal, sealing or inspection requirements.',
      },
    ],
    closing: {
      title: 'Start Your New Energy Manufacturing Project',
      description:
        'Send the model, material and quantity. We will confirm the process route and return a quote with lead time.',
      cta: 'Start Your New Energy Project',
    },
  },

  electronics: {
    slug: 'electronics',
    breadcrumb: 'Electronics',
    quoteService: 'CNC Machining',
    hero: {
      titleLines: ['Electronics Prototyping', 'and Precision Manufacturing'],
      description:
        'Enclosures, heat sinks, mounting hardware and precision components for industrial and consumer electronics — with clean finishes and accurate PCB interfaces.',
      cta: 'Start Your Electronics Project',
      image: unsplash('1518770660439-4636190af475', 2000),
      alt: 'Macro view of an electronics circuit board',
    },
    capabilities: {
      title: 'Manufacturing Capabilities for Electronics',
      subtitle:
        'Electronics hardware combines fit, thermal management and appearance. Machining, casting, extrusion and sheet metal are planned around the PCB and enclosure.',
      layout: 'grid',
      items: [
        {
          title: 'CNC Machining',
          description: 'Enclosures, bezels and mounting plates with accurate PCB interfaces.',
          image: unsplash('1740209475472-aa7d280f7452', 900),
          alt: 'CNC machining an electronics enclosure',
          points: ['PCB mounting features', 'Connector cutouts', 'Fine cosmetic finishes'],
          href: '#/services/cnc-machining',
        },
        {
          title: 'Sheet Metal Fabrication',
          description: 'Panels, chassis and brackets for control units and equipment racks.',
          image: unsplash('1701788607416-f1b5dd5a09ec', 900),
          alt: 'Fabricated sheet metal electronics chassis',
          points: ['Laser cutting and bending', 'Welding and hardware', 'Powder coating'],
          href: '#/services/sheet-metal-fabrication',
        },
        {
          title: 'Die Casting + CNC',
          description: 'Cast aluminum housings with machined sealing and mounting faces.',
          image: unsplash('1625465104346-1ec72f86a54b', 900),
          alt: 'Die-cast electronics enclosure',
          points: ['Thin-wall housings', 'Machined faces', 'Powder coating'],
          href: '#/services/die-casting',
        },
        {
          title: 'Extrusion & Heat Sinks',
          description: 'Aluminum profiles and heat sinks for thermal management.',
          image: unsplash('1624775103325-8fe5c3b7d821', 900),
          alt: 'Aluminum heat sink extrusion',
          points: ['Custom profiles', 'Cut-to-length', 'Anodizing'],
          href: '#/services/extrusion',
        },
        {
          title: '3D Printing',
          description: 'Fast enclosure and bezel prototypes before tooling is committed.',
          image: unsplash('1611117775350-ac3950990985', 900),
          alt: '3D-printed electronics enclosure prototype',
          points: ['SLA and SLS', 'Complex geometry', 'Post-processing'],
          href: '#/services/3d-printing',
        },
      ],
    },
    advantages: {
      image: unsplash('1518770660439-4636190af475', 2000),
      alt: 'Electronics circuit board and hardware',
      title: 'Why Choose EZHONG for Electronics Hardware?',
      mode: 'icons',
      items: [
        {
          icon: 'target',
          title: 'PCB interface accuracy',
          text: 'Mounting holes, standoffs and connector cutouts are machined to the board and assembly.',
        },
        {
          icon: 'gauge',
          title: 'Thermal management',
          text: 'Heat sinks and housings are planned around thermal paths and contact surfaces.',
        },
        {
          icon: 'layers',
          title: 'Cosmetic finishing',
          text: 'Anodizing, bead blasting, painting and powder coating deliver the intended appearance.',
        },
        {
          icon: 'shield',
          title: 'Repeatable production',
          text: 'Dedicated setups and inspection keep repeat enclosures consistent.',
        },
      ],
    },
    process: {
      title: 'From Enclosure Prototype to Production',
      subtitle: 'The PCB, thermal and appearance requirements drive the route.',
      steps: [
        { title: 'Design & DFM', text: 'Review PCB fit, cutouts, thermal paths and finish requirements.' },
        { title: 'Prototype', text: 'Machine, print or fabricate enclosures for fit and appearance.' },
        { title: 'Tooling & production', text: 'Move to casting, extrusion, sheet metal or repeat machining.' },
        { title: 'Finish & inspect', text: 'Apply the finish and inspect critical interfaces.' },
      ],
    },
    materials: {
      title: 'Materials for Electronics Hardware',
      subtitle: 'Aluminum, stainless steel, copper and engineering plastics selected for housing and thermal needs.',
      groups: materials,
    },
    finish: { title: 'Electronics Surface Finish Options', defaultKey: 'fine-machining' },
    applications: {
      title: 'Electronics Components We Support',
      intro:
        'Control units, power electronics, sensors and consumer devices rely on accurate housings, heat sinks and mounting hardware.',
      items: [
        { name: 'Control Unit Housings', image: unsplash('1625465404484-448f58e5c5d9', 900), alt: 'Machined electronics control housing' },
        { name: 'Heat Sinks', image: unsplash('1624775103325-8fe5c3b7d821', 900), alt: 'Aluminum heat sink for electronics' },
        { name: 'Front Panels', image: unsplash('1701788607416-f1b5dd5a09ec', 900), alt: 'Fabricated electronics front panel' },
        { name: 'Mounting Plates', image: unsplash('1624841970647-87dce8628d72', 900), alt: 'Machined PCB mounting plate' },
        { name: 'RF & EMI Shields', image: unsplash('1769147339214-076740872485', 900), alt: 'Conductive shielding components' },
        { name: 'Sensor Hardware', image: unsplash('1518770660439-4636190af475', 900), alt: 'Sensor electronics assembly' },
      ],
    },
    specs: {
      title: 'Electronics Manufacturing Specifications',
      rows: [
        { label: 'Tolerances', value: '±0.01 mm typical on machined features; sheet metal and casting per process.' },
        { label: 'Processes', value: 'CNC machining, sheet metal, die casting, extrusion, 3D printing and finishing.' },
        { label: 'Materials', value: 'Aluminum, stainless steel, copper, brass and engineering plastics.' },
        { label: 'Finishes', value: 'Anodizing, bead blasting, polishing, plating, painting and powder coating.' },
        { label: 'Quantities', value: 'Prototypes through low-volume production.' },
        { label: 'Lead Time', value: '5–10 business days for prototypes; production depends on tooling and finish.' },
      ],
    },
    explain: {
      first: {
        title: 'From enclosure prototype to production',
        text: 'Prototypes confirm PCB fit, cutouts and appearance. Production then moves to the most suitable process for the volume and material.',
        points: ['PCB fit and connector access.', 'Thermal and EMI requirements.', 'Cosmetic and production finishes.'],
        image: unsplash('1518770660439-4636190af475', 1200),
        alt: 'Electronics assembly and circuit board',
      },
      second: {
        title: 'Thermal and PCB fit',
        text: 'Two details often decide the design: how heat leaves the board and how the board mounts inside the enclosure.',
        cards: [
          { title: 'Thermal path', text: 'Heat sink contact, airflow and housing material.' },
          { title: 'PCB fit', text: 'Mounting holes, standoffs and connector cutouts.' },
        ],
        image: unsplash('1624775103325-8fe5c3b7d821', 1200),
        alt: 'Heat sink and thermal components',
      },
    },
    faqs: [
      {
        q: 'Can you machine electronics enclosures?',
        a: 'Yes. Machined aluminum and plastic enclosures can include PCB mounting features, connector cutouts and cosmetic finishes.',
      },
      {
        q: 'Do you provide heat sinks?',
        a: 'Yes. Extruded and machined heat sinks are available, with anodizing or other finishing as required.',
      },
      {
        q: 'Can you fabricate sheet metal chassis?',
        a: 'Yes. Panels, chassis, brackets and racks can be laser cut, bent, welded and powder coated.',
      },
      {
        q: 'How do you handle PCB tolerances?',
        a: 'Mounting holes and connector cutouts are machined to the board drawing and checked during inspection.',
      },
      {
        q: 'What finishes are available?',
        a: 'Anodizing, bead blasting, polishing, plating, painting and powder coating.',
      },
      {
        q: 'Can you support repeat production?',
        a: 'Yes. Dedicated setups and documented inspection keep repeat housings and hardware consistent.',
      },
    ],
    closing: {
      title: 'Start Your Electronics Manufacturing Project',
      description:
        'Send the enclosure or component model, PCB interface details and quantity. We will recommend the process and return a quote.',
      cta: 'Start Your Electronics Project',
    },
  },
}

const industryTeam = {
  title: 'Expert Team Supporting Every Stage of Your Project',
  subtitle:
    'A single engineering contact follows your project from the first RFQ through production and final inspection.',
  stages: [
    {
      stage: '01',
      title: 'Project Manager',
      image: unsplash('1454165804606-c3d57bc86b40', 800),
      alt: 'Project manager reviewing engineering requirements',
      points: ['Quotation and schedule follow-up', 'Drawing and revision control', 'Single point of contact'],
    },
    {
      stage: '02',
      title: 'Product Engineer',
      image: unsplash('1581092580497-e0d23cbdf1dc', 800),
      alt: 'Product engineer reviewing CAD data and toolpaths',
      points: ['DFM and tolerance review', 'Material and finish selection', 'Fixture and process planning'],
    },
    {
      stage: '03',
      title: 'Production Team',
      image: unsplash('1740209475472-aa7d280f7452', 800),
      alt: 'CNC machining production team at work',
      points: ['Machining, finishing and assembly', 'Progress updates at milestones', 'Schedule changes flagged early'],
    },
    {
      stage: '04',
      title: 'Quality Control',
      image: unsplash('1758873263563-5ba4aa330799', 800),
      alt: 'Quality inspector measuring a precision component',
      points: ['Dimensional and visual inspection', 'Reports and material certificates', 'Support for rework or replacement'],
    },
  ],
}

export const industryDetails: Record<string, GenericServiceData> = Object.fromEntries(
  Object.entries(industryPages).map(([slug, page]) => [slug, { ...page, team: industryTeam }]),
)
