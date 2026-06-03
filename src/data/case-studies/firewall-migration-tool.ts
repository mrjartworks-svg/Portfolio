import type { RichCaseStudy } from "@/types";

const base = "/work/firewall-migration-tool";

export const firewallMigrationCaseStudy: RichCaseStudy = {
  tagline:
    "Redesigning how network operators plan, validate, and execute firewall migrations, turning fragmented workflows into a more guided and auditable migration experience.",
  duration: "10 months · Discovery through Phase 1 delivery",
  product: "Enterprise",
  meta: ["Product Designer", "2025-2026"],
  team: [
    { role: "Product Design", name: "Mradul Jain" },
    { role: "Product Management", name: "Pankaj Bhatt" },
    { role: "Engineering", name: "Nishad More" },
    { role: "Research", name: "Saraschandra Karanam" },
  ],
  editorial: {
    inlineGlossary: true,
  },
  tldr: [
    "Designed key workflows for Cisco's Firewall Migration Tool across mapping, validation, review, and deployment.",
    "Simplified high-risk migration workflows involving dense policy dependencies.",
    "Introduced checkpoint-based review architecture to reduce operator error.",
    "Restructured navigation and migration task sequencing from nine fragmented stages into four structured phases.",
    "Designed scalable patterns for validation, review, and execution states.",
    "Balanced operational control with AI-assisted guidance patterns.",
    "Collaborated with product, engineering, and domain stakeholders.",
  ],
  impact: [
    "Nine migration stages reduced to four phases: one path from extraction through cutover.",
    "Validation blockers surfaced inline, so operators fixed issues on the same screen instead of jumping across three or four.",
    "Deployment checkpoints blocked cutover until readiness was confirmed: early pilots saw fewer rushed migrations.",
    "Migration status on one screen, so teams spent less time piecing together where a job stood.",
  ],
  glossary: [
    {
      term: "Third-Party Vendors",
      definition:
        "Non-Cisco firewall platforms FMT supports as migration sources, including Check Point, Palo Alto Networks, Fortinet, and Juniper.",
    },
    {
      term: "Production Traffic",
      wideTooltip: true,
      definition:
        "Live traffic on production networks: employee access to internal apps, customer-facing services, VPN sessions, cloud and database communication, security policies and rules, API calls, authentication systems, and business operations that depend on the network staying available.",
    },
    {
      term: "FMT",
      definition:
        "Firewall Migration Tool. Cisco utility that converts firewall configurations from Cisco ASA and supported third-party platforms into FTD-compatible policy.",
    },
    {
      term: "Cisco ASA",
      definition:
        "Adaptive Security Appliance. Cisco's legacy firewall platform and one of the most common source configurations migrated through FMT into FTD.",
    },
    {
      term: "FTD",
      definition:
        "Firepower Threat Defense. Cisco's next-generation firewall platform and the primary migration target for FMT.",
    },
    {
      term: "FMC",
      definition:
        "Firepower Management Center. On-premises management console where migrated configurations are staged before deployment to FTD devices.",
    },
    {
      term: "cdFMC",
      definition:
        "Cloud-delivered Firewall Management Center. A SaaS management service hosted in Cisco Defense Orchestrator (CDO) for centrally managing, configuring, and monitoring FTD devices without on-premises management appliances.",
    },
    {
      term: "MCD",
      definition:
        "Multicloud Defense. Cloud-native firewall management for securing workloads across multicloud environments, supported as a migration target alongside FMC and cdFMC in FMT.",
    },
    {
      term: "HA pairs",
      definition:
        "High-availability firewall pairs that run active/standby or active/active so traffic fails over if a device or link fails. Migrations must preserve pair state, sync, and cutover sequencing.",
    },
    {
      term: "Validation gate",
      definition:
        "Structured checkpoint where pre-migration checks must pass (or be explicitly acknowledged) before deployment is allowed.",
    },
    {
      term: "Action item",
      definition:
        "A configuration gap flagged during review: unsupported rule, naming conflict, or mapping failure that requires operator resolution.",
    },
    {
      term: "PAO",
      definition:
        "Policy Analyzer and Optimizer. AI-assisted policy cleanup that suggests consolidations and redundancies with operator opt-in.",
    },
  ],
  pullQuotes: [
    {
      text: "Competing tools already offered strong validation flows, making workflow clarity and operator confidence critical parts of the experience.",
      afterSection: "complexity",
    },
    {
      text: "Collapsing nine fragmented stages into four structured phases gave operators a single mental model to carry across vendor and target variants.",
      afterSection: "information-architecture",
    },
    {
      text: "I need to see validation status and what's still open before I approve a cutover, not dig through logs after the fact.",
      afterSection: "design-decisions",
    },
  ],
  heroVisualAbove: {
    src: `${base}/hero-ai-announcement.png`,
    alt: "In-product announcement modal highlighting the redesigned Firewall Migration Tool home and workflow",
    caption:
      "A first-run announcement orients operators to the redesigned home, consolidated job status, and the four-phase migration path before they start a job.",
    width: 1728,
    height: 772,
  },
  heroVisual: {
    src: `${base}/hero-home.png`,
    alt: "Firewall Migration Tool home with categorized migration alerts, feature highlights, and start migration entry",
    caption:
      "The home surface prioritizes categorized alerts (errors, in progress, completed), feature highlights, and entry into new jobs, replacing a fragmented starting experience.",
    width: 1728,
    height: 1799,
  },
  heroVisualBelow: {
    src: `${base}/hero-migration-alerts.png`,
    alt: "Migration summary alert cards grouped by status so operators can scan multiple jobs and their state at a glance",
    caption:
      "Alert cards group active migrations by status (errors, in progress, completed) so operators can compare parallel jobs, spot blockers, and see progress without opening each migration individually.",
    width: 1728,
    height: 680,
  },
  heroGalleryCarousel: {
    intervalMs: 1000,
    caption:
      "Operators can rename migration projects mid-flight, while a persistent source-to-target header keeps vendor, device, and connection context visible throughout the workflow.",
    frames: [
      {
        src: `${base}/hero-project-rename-01.png`,
        alt: "Migration header showing source and target firewalls with editable project name",
        width: 1728,
        height: 717,
      },
      {
        src: `${base}/hero-project-rename-02.png`,
        alt: "In-flow project rename with source and target context retained in the header",
        width: 1728,
        height: 717,
      },
      {
        src: `${base}/hero-project-rename-03.png`,
        alt: "Updated project name reflected across the migration workflow header",
        width: 1728,
        height: 717,
      },
    ],
  },
  heroVisualAfterGallery: {
    src: `${base}/hero-migrations-table.png`,
    alt: "Consolidated table listing ongoing migration projects with status, phase, and last updated time",
    caption:
      "A consolidated table view surfaces all ongoing migration projects in one place, so operators can compare status, phase, and recency across parallel jobs without drilling into each workflow.",
    width: 1728,
    height: 717,
  },
  context: {
    framing:
      "The Firewall Migration Tool helps organizations move firewall configurations from Cisco ASA and third-party vendors such as Check Point, Palo Alto, Fortinet, and Juniper into Cisco Firepower Threat Defense (FTD) under fixed cutover windows and little room for operational error.",
    paragraphs: [
      "These migrations typically happen during hardware refreshes, platform consolidation, or broader security modernization efforts, often across HA pairs, multi-context devices, and parallel migration jobs. For Cisco, FMT is strategic infrastructure: the easier and safer migrations become, the easier it is for organizations to move existing firewall environments into the Cisco ecosystem.",
      "Discovery work mapped the existing migration experience end to end: parsing inconsistencies on complex NATs, unsupported or partially converted configurations, fragmented validation flows, and review steps spread across multiple screens and external references. Operators frequently depended on Cisco support to navigate migrations confidently, especially during high-risk cutover windows.",
      "The core UX problem was not the absence of functionality, but the operational overhead around it. Important migration context, validation states, mapping decisions, and remediation steps were distributed across disconnected flows, making migrations harder to review, reason about, and execute confidently at scale.",
      "The redesign focused on consolidating workflows, improving visibility into migration readiness, simplifying high-density review states, and creating a more structured path from extraction through validation and deployment, without overwhelming operators with dashboard-heavy interfaces that become difficult to navigate under real configuration volume.",
    ],
  },
  complexity: {
    framing:
      "Workshop readouts, customer feedback, and competitive audits across tools such as Fortinet FortiConverter, Check Point SmartMove, and Palo Alto Expedition surfaced a consistent pattern: migrations became difficult once configurations grew beyond straightforward rule sets.",
    intro:
      "The core challenge was not moving firewall policy from one platform to another. It was helping operators understand what translated cleanly, what required intervention, and what could impact production traffic during cutover.",
    items: [
      "Complex NAT structures and vendor-specific syntax did not always parse reliably, forcing operators to manually review or rebuild portions of policy",
      "Converted configurations often carried forward redundant objects, duplicated rules, and legacy structure that still required cleanup after migration",
      "Validation and remediation were fragmented across multiple steps, making it difficult to track migration readiness confidently",
      "Dependency chains across interfaces, zones, objects, and HA configurations were difficult to reason about at scale",
      "High-risk actions such as validation, push, rollback, and parallel migrations lacked clear operational checkpoints",
      "Interface and zone mapping screens carried high information density, where small mistakes could propagate into production environments",
      "Operators frequently relied on manual review and Cisco support during migration windows, especially for larger or more complex configurations",
      "Post-migration cleanup and optimization often became a separate operational effort, reducing trust in automation-assisted migration flows",
    ],
    outro:
      "The discovery phase mapped the migration lifecycle from extraction through validation and push, identifying where operators lost visibility, confidence, and workflow continuity across the process.",
    visual: {
      src: `${base}/migration-flow-overview.png`,
      alt: "Earlier Firewall Migration Tool workflow with fragmented stages, scattered validation, and limited step-by-step guidance",
      caption:
        "The earlier FMT spread extraction, mapping, validation, and push across disconnected steps with little in-flow guidance, increasing cognitive load and making it harder to see migration readiness before cutover.",
      width: 5264,
      height: 4290,
      layout: "full-bleed",
      collapsible: true,
      collapseLabel: "Old design",
    },
  },
  informationArchitecture: {
    framing:
      "The redesign had one job: make the migration understandable before anything reaches production.",
    paragraphs: [
      "The earlier experience spread migrations across fragmented stages including extraction, parsing, target setup, mapping, validation, review, and push. Operators frequently moved between disconnected screens and validation states, making it difficult to maintain confidence and workflow continuity during larger migrations.",
      "The redesign consolidated that experience into four structured phases:",
      "The underlying workflow still handled operational sub-steps such as extraction, target configuration, mapping, review, validation, optimization, and push execution, but the experience grouped them into a clearer progression with fewer context switches.",
      "Each phase answered one operational question before the next unlocked. The goal was not reducing functionality, but reducing the amount of migration state operators needed to hold in memory at once.",
      "A persistent header carried migration identity and source-to-target context throughout the workflow, while the stepper grouped related sub-steps together so operators could maintain orientation even across long-running migrations, handoffs, and parallel jobs.",
    ],
    flowSteps: [
      "Select source and target firewalls",
      "Map interfaces, zones, and applications",
      "Validate readiness and resolve action items",
      "Push with confirmation and progress tracking",
    ],
    workflowComparison: {
      beforeLabel: "Earlier experience",
      afterLabel: "Guided flow",
      beforeSteps: [
        "Entry & project setup",
        "Configuration extraction",
        "Parsing & conversion",
        "Target selection",
        "Device & HA setup",
        "Interface & zone mapping",
        "Validation (scattered)",
        "Review (disconnected)",
        "Push configurations",
      ],
      afterSteps: [
        "Select firewalls (source + target with extraction)",
        "Map interfaces, zones, and applications",
        "Validate readiness and resolve action items",
        "Push with confirmation and progress tracking",
      ],
      emphasize: true,
    },
    visuals: [],
    visualCarousel: {
      intervalMs: 1000,
      caption:
        "Migration projects save as soon as source and target are selected, supporting long-running, multi-session work. Source and target inputs share one accordion pattern across FMC, cdFMC, and MCD target types.",
      frames: [
        {
          src: `${base}/ia-select-step-01.png`,
          alt: "Select firewalls step: choosing source firewall vendor and connection",
          width: 1728,
          height: 861,
        },
        {
          src: `${base}/ia-select-step-02.png`,
          alt: "Select firewalls step: source configuration and extraction status",
          width: 1728,
          height: 861,
        },
        {
          src: `${base}/ia-select-step-03.png`,
          alt: "Select firewalls step: target management center selection",
          width: 1728,
          height: 861,
        },
        {
          src: `${base}/ia-select-step-04.png`,
          alt: "Select firewalls step: target connection and device pairing",
          width: 1728,
          height: 861,
        },
        {
          src: `${base}/ia-select-step-05.png`,
          alt: "Select firewalls step: saved migration project ready to continue",
          width: 1728,
          height: 861,
        },
      ],
    },
  },
  workflowMapping: {
    title: "Interface & zone mapping",
    paragraphs: [
      "Interface and zone mapping became one of the highest-friction parts of the migration flow. Operators were translating firewall logic between different environments, often across large rule sets where small mistakes could surface much later during validation or cutover.",
      "The redesign moved validation closer to the mapping process itself, helping operators catch mismatches while interfaces and zones were still being configured instead of discovering them later during review.",
    ],
    moments: [
      {
        title: "Mapping with automation boundaries",
        body:
          "Interface mapping stayed manual, with validation feedback integrated directly into the workflow. Security zones auto-mapped where naming aligned, while override controls handled ambiguous or unsupported matches. Batch actions supported large rule sets without removing row-level visibility and control.",
        visualCarousel: {
          intervalMs: 1000,
          caption:
            "Interface mapping pairs source and target sides row by row, with inline validation and explicit error states when a match is missing, ambiguous, or unsupported, so operators fix issues before moving on.",
          frames: [
            {
              src: `${base}/mapping-interface-01.png`,
              alt: "Interface mapping with inline validation and row-level status",
              width: 1728,
              height: 861,
            },
            {
              src: `${base}/mapping-interface-02.png`,
              alt: "Interface mapping table showing manual pairing and validation states",
              width: 1728,
              height: 861,
            },
            {
              src: `${base}/mapping-interface-03.png`,
              alt: "Batch interface mapping actions across a large rule set",
              width: 1728,
              height: 861,
            },
            {
              src: `${base}/mapping-interface-04.png`,
              alt: "Interface mapping with override controls for ambiguous matches",
              width: 1728,
              height: 861,
            },
          ],
        },
      },
    ],
  },
  workflowReview: {
    framing: "Validation was where operator confidence consistently broke down.",
    title: "Review & validation",
    paragraphs: [
      "By the time migrations reached review, teams needed a clear understanding of what was ready, what still required intervention, and what could potentially impact production during deployment.",
    ],
    moments: [
      {
        title: "Review",
        body:
          "The review flow consolidated compatible configurations, unresolved action items, optimization suggestions, and migration readiness into a single layer. Operators could resolve unsupported rules, naming conflicts, and bulk edits before entering validation.",
        visual: {
          src: `${base}/review-landing.png`,
          alt: "Review summary with compatible configurations, action items, and migration readiness",
          width: 1728,
          height: 1130,
          layout: "full-bleed",
        },
      },
      {
        title: "Validation & conflict resolution",
        body:
          "Pre-migration validation surfaced categorized issues with drill-down visibility into conflicts and dependencies. Operators could resolve issues in context, rerun validation, and compare results across runs while maintaining audit visibility throughout the migration lifecycle.",
        visualCarousel: {
          intervalMs: 1000,
          caption:
            "Pre-migration validation groups findings by severity with drill-down into conflicts, dependencies, and remediation paths. Operators resolve issues in context, rerun checks, and compare results across runs before approving cutover.",
          frames: [
            {
              src: `${base}/validation-01.png`,
              alt: "Pre-migration validation results grouped by severity",
              width: 1728,
              height: 1130,
            },
            {
              src: `${base}/validation-02.png`,
              alt: "Validation conflict drill-down with dependency context",
              width: 1728,
              height: 1130,
            },
            {
              src: `${base}/validation-03.png`,
              alt: "In-context remediation before rerunning validation",
              width: 1728,
              height: 1130,
            },
            {
              src: `${base}/validation-04.png`,
              alt: "Validation run comparison with audit history",
              width: 1728,
              height: 1130,
            },
          ],
        },
      },
      {
        title: "Configuration optimization",
        body:
          "After validation, PAO optimization offered optional policy cleanup before cutover. Operators could start analysis from the migration flow, review anomaly summaries by category, drill into selected rules and objects, and save preferences that committed only during migration. Suggestions stayed explainable and opt-in throughout.",
        visualCarousel: {
          intervalMs: 1000,
          caption:
            "The optimization path moved from an in-flow entry point through analysis, category-level remediation choices, rule-level selection, and a completed state operators could revisit before push.",
          frames: [
            {
              src: `${base}/optimization-01.png`,
              alt: "Configuration optimization entry card in the migration workflow",
              width: 1728,
              height: 1130,
            },
            {
              src: `${base}/optimization-02.png`,
              alt: "Optimization recommended modal explaining benefits before analysis starts",
              width: 1728,
              height: 1130,
            },
            {
              src: `${base}/optimization-03.png`,
              alt: "Optimization drawer with anomaly summary and remediation options by category",
              width: 1728,
              height: 1130,
            },
            {
              src: `${base}/optimization-04.png`,
              alt: "Selected rules detail view for reviewing optimization choices before save",
              width: 1728,
              height: 1130,
            },
            {
              src: `${base}/optimization-05.png`,
              alt: "Optimization analysis complete with link back to saved preferences",
              width: 1728,
              height: 1130,
            },
          ],
        },
      },
    ],
  },
  designDecisionsFraming:
    "Every major interaction had to answer one question: could an operator confidently move forward without second-guessing the system?",
  designDecisions: [
    {
      title: "Checkpoints before irreversible actions",
      description:
        "Validation, review, and push were treated as explicit workflow states instead of passive confirmations. Critical issues blocked deployment, while remediation paths stayed attached directly to affected configurations.",
    },
    {
      title: "Progressive disclosure over dashboard density",
      description:
        "The earlier experience exposed too much migration state at once. The redesign focused each step around a single operational decision, surfacing review tables, diff views, and optimization suggestions only when they became actionable. Progress and migration state remained visible throughout the flow.",
    },
    {
      title: "Errors that help operators recover",
      description:
        "Warnings and unsupported configurations were grouped by severity instead of presented as flat error lists. High-severity issues required acknowledgment, while remediation paths linked directly to documentation and in-flow fixes.",
    },
    {
      title: "AI suggestions stay operator-controlled",
      description:
        "PAO optimization suggestions explained why rules were flagged and allowed operators to accept or reject changes individually. Suggested changes never silently modified policy and remained visible through audit history.",
    },
    {
      title: "Credentials and trust boundaries",
      description:
        "Connection status, extraction logs, and device metadata remained visible throughout migrations so operators could verify what the system touched during extraction and push operations.",
    },
  ],
  systemsThinking: {
    framing:
      "Edge cases were treated as part of the product flow, not exceptions outside it.",
    paragraphs: [
      "The migration framework handled multi-context flows, cdFMC and MCD targets, HA scenarios, partial parsing failures, and parallel migrations within the same structural shell. Headers, steppers, status language, and review patterns stayed consistent across migration types so operators could transfer familiarity between workflows instead of relearning the system each time.",
    ],
    patterns: [
      {
        title: "Shared migration shell",
        description:
          "Headers, phased steppers, and footer actions repeated consistently across migration types to maintain workflow continuity.",
      },
      {
        title: "Status semantics",
        description:
          "Migration status, substatus, validation state, and push progress used the same vocabulary throughout the product, reducing ambiguity across review and deployment flows.",
      },
      {
        title: "Review patterns",
        description:
          "Review summaries expanded into detailed rule, object, VPN, and access-list views without breaking migration context, using the same interaction patterns across workflows.",
      },
      {
        title: "One framework across target types",
        description:
          "FMC, cdFMC, and MCD targets reused the same migration structure with target-specific variations layered where required, reducing one-off workflows while still respecting platform differences.",
      },
    ],
  },
  pushDeployment: {
    title: "Push & deployment",
    paragraphs: [
      "The final phase treated cutover as a monitored operation, not a single confirmation click. Operators reviewed what would migrate, what was intentionally skipped, and how each configuration category would land on the target before starting push.",
    ],
    visualCarousel: {
      intervalMs: 1000,
      caption:
        "Push begins with an explicit pre-migration summary of validated and skipped configurations, expands into a full migration monitor with per-category progress bars and counts, and closes with a completion state operators can verify before leaving the flow.",
      frames: [
        {
          src: `${base}/push-deployment-01.png`,
          alt: "Begin migration modal listing validated and skipped configurations before push",
          width: 1728,
          height: 1130,
        },
        {
          src: `${base}/push-deployment-02.png`,
          alt: "Migration in progress with step-level status and configuration category progress bars",
          width: 1728,
          height: 1130,
        },
        {
          src: `${base}/push-deployment-03.png`,
          alt: "Expanded push monitor showing full configuration breakdown and live progress",
          width: 1728,
          height: 1130,
        },
        {
          src: `${base}/push-deployment-04.png`,
          alt: "Push configurations completed with execution summary and verification actions",
          width: 1728,
          height: 1130,
        },
      ],
    },
  },
  reflection: {
    framing:
      "Trust in migration tooling is earned during review and validation, not during a product demo.",
    paragraphs: [
      "Discovery mapped where operators lost confidence across the migration lifecycle: fragmented validation flows, unclear remediation paths, dense review states, and limited visibility into migration readiness during high-risk deployment windows.",
      "The redesign focused on making migrations easier to follow, validate, and reason about at scale. Structured phases, clearer review checkpoints, inline validation, and more consistent workflow patterns helped reduce operational overhead without hiding the underlying complexity of the migration itself.",
      "One constraint stayed consistent throughout the project: operators needed enough visibility to trust the migration, but not so much information that review became difficult to manage under real configuration volume. That balance shaped nearly every workflow decision across the product.",
    ],
  },
  sections: [
    { id: "legend", title: "Legend" },
    { id: "introduction", title: "Introduction" },
    { id: "complexity", title: "Complexity" },
    { id: "information-architecture", title: "Architecture" },
    { id: "workflow-mapping", title: "Mapping" },
    { id: "workflow-review", title: "Review" },
    { id: "design-decisions", title: "Design decisions" },
    { id: "push-deployment", title: "Push" },
    { id: "systems-thinking", title: "Systems thinking" },
    { id: "reflection", title: "Reflection" },
  ],
};
