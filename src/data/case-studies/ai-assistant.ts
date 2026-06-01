import type { RichCaseStudy } from "@/types";

const base = "/work/ai-assisted-enterprise-workflows";

export const aiAssistantCaseStudy: RichCaseStudy = {
 tagline:
 "Designing Cisco's AI Assistant across cdFMC and SCC, creating firewall policy, optimizing rules, troubleshooting flows, and acting on alerts from one conversational layer, without turning every capability into a separate chat product.",
 duration: "2023-2025 · Multi sprint",
 product: "Enterprise",
 meta: ["Product Designer", "2024-2025"],
 team: [
 { role: "Product Design", name: "Mradul Jain" },
 { role: "Product Management", name: "Thomas Varghese" },
 { role: "Engineering", name: "Masaki Utsumiya" },
 { role: "Research", name: "Saraschandra Karanam" },
 ],
 editorial: {
 inlineGlossary: true,
 },
 tldr: [
 "Led design for Cisco's AI Assistant across cdFMC and SCC, from onboarding and entry through PRC, PAO, AIOps elephant flow, and alerts.",
 "Different domain workflows shipped on the surface where those operators already work, one shared assistant model across both products.",
 "Solved the blank-slate problem with a prompt library and discovery surface that showcase what the assistant can do before operators type.",
 "Shipped PRC as a single-response stepper with fuzzy matching and explicit confirmation, avoiding multi-turn load on the system.",
 "Mapped PAO and alerts to existing product mental models so chat never felt disconnected from the console.",
 "Defined trust patterns: structured replies, review before commit, and audit-friendly feedback across every workflow.",
 ],
 glossary: [
 {
 term: "Ai Assistant",
 definition:
 "Cisco's in-product conversational layer embedded in cdFMC and SCC, extended to policy creation, optimization, AIOps, and notification workflows, not a standalone chatbot.",
 },
 {
 term: "cdFMC",
 definition:
 "Cloud-delivered Firewall Management Center. Cisco's SaaS console for managing FTD firewalls in the cloud. Several assistant workflows, including PRC, PAO, and elephant flow, ship here.",
 },
 {
 term: "SCC",
 definition:
 "Security Cloud Control. Cisco's unified security management console. The AI Assistant also ships in SCC; entry patterns and other domain workflows land on whichever surface matches the operator's context.",
 },
 {
 term: "PRC",
 definition:
 "Policy Rule Creation. Phase-one assistant flows for creating basic firewall rules in natural language, with fuzzy matching, object resolution, and a single guided stepper before commit.",
 },
 {
 term: "PAO",
 definition:
 "Policy Analyzer and Optimizer. An existing cdFMC capability; the assistant wraps it in conversational flows that mirror the native PAO experience so operators can drill into anomalies and act from chat.",
 },
 {
 term: "Prompt library",
 definition:
 "Curated prompt templates organized by task, starting with four product-specific categories, so operators launch vetted workflows instead of facing a blank chat input.",
 },
 {
 term: "Inline triggers",
 definition:
 "Contextual prompt cards on the assistant home that launch structured workflows without blank-slate chat.",
 },
 {
 term: "Response container",
 definition:
 "Standard assistant reply pattern: identity header, formatted content blocks, tables or lists, and explicit next actions.",
 },
 {
 term: "Elephant flow",
 definition:
 "AIOps capability for analyzing high-volume network flows; the assistant presents spikes, probable causes, and documentation-backed fixes in a consumable, staged format.",
 },
 {
 term: "Policy formatting",
 definition:
 "UX rules for rendering dense firewall policy in assistant replies: emphasis, tables, and audit-friendly summaries.",
 },
 ],
 pullQuotes: [
 {
 text: "The hardest part was not one screen. It was keeping one mental model while policy, optimization, AIOps, and notification teams shipped in parallel across cdFMC and SCC.",
 afterSection: "complexity",
 },
 {
 text: "I don't need the assistant to be clever. I need to see what it changed, what it couldn't match, and what I'm about to apply.",
 afterSection: "design-decisions",
 },
 ],
 heroVisualAboveCarousel: {
 intervalMs: 1000,
 caption:
 "Onboarding introduces the assistant through a conversational walkthrough: value prop, capability previews, and a clear path into the product.",
 frames: [
 {
 src: `${base}/onboarding-01.png`,
 alt: "Onboarding step one introducing the AI Assistant",
 width: 1728,
 height: 861,
 },
 {
 src: `${base}/onboarding-02.png`,
 alt: "Onboarding step two with assistant capability preview",
 width: 1728,
 height: 861,
 },
 {
 src: `${base}/onboarding-03.png`,
 alt: "Onboarding step three highlighting conversational workflows",
 width: 1728,
 height: 861,
 },
 {
 src: `${base}/onboarding-04.png`,
 alt: "Onboarding step four showing policy and security tasks",
 width: 1728,
 height: 861,
 },
 {
 src: `${base}/onboarding-05.png`,
 alt: "Onboarding step five with additional capability examples",
 width: 1728,
 height: 861,
 },
 {
 src: `${base}/onboarding-06.png`,
 alt: "Onboarding step six continuing the capability tour",
 width: 1728,
 height: 861,
 },
 {
 src: `${base}/onboarding-07.png`,
 alt: "Onboarding step seven before final confirmation",
 width: 1728,
 height: 861,
 },
 {
 src: `${base}/onboarding-08.png`,
 alt: "Onboarding step eight with final preview content",
 width: 1728,
 height: 861,
 },
 {
 src: `${base}/onboarding-09.png`,
 alt: "Onboarding final step ready to enter the assistant",
 width: 1728,
 height: 861,
 },
 ],
 },
 heroPrototypeCarousel: {
 intervalMs: 1000,
 caption:
 "The redesigned home scales from wide canvas to docked panel while keeping one assistant shell.",
 frames: [
 {
 src: `${base}/hero-home-01.png`,
 alt: "AI Assistant home on wide canvas with conversation window and quick prompts",
 width: 1728,
 height: 1053,
 },
 {
 src: `${base}/hero-home-02.png`,
 alt: "AI Assistant home at large breakpoint with docked conversation panel",
 width: 1728,
 height: 1053,
 },
 {
 src: `${base}/hero-home-03.png`,
 alt: "AI Assistant home in narrow docked panel with quick prompt rows",
 width: 1728,
 height: 1053,
 },
 ],
 },
 context: {
 framing:
 "A multi-year program to embed AI across cdFMC and SCC, not on-prem FMC, without fragmenting into separate chat experiences.",
 paragraphs: [
 "Operators in cdFMC and SCC already juggle dense policy pages, optimizer tools, and AIOps telemetry. The AI Assistant had to meet them inside those consoles: one docked panel, one thread model, and workflows that felt native to whichever product they were in. Different flows shipped on different surfaces; I owned design across onboarding and entry, the prompt library, Policy Rule Creation (PRC), Policy Analyzer and Optimizer (PAO), elephant flow, and alerts and notifications.",
 "This case study follows that story in order. Early sections set up the problem and architecture. Each workflow chapter shows one capability end to end, how we moved operators from blank-slate anxiety to guided, reviewable actions they could trust in production.",
 ],
 },
 complexity: {
 framing:
 "Every squad needed depth; operators needed one coherent assistant.",
 intro:
 "The challenge was not adding a chat box. It was embedding high-risk, high-density firewall work, policy writes, optimizer recommendations, flow analysis, alert configuration, inside a conversational frame that stayed fast, legible, and aligned with cdFMC and SCC wherever each workflow shipped.",
 items: [
 "Operators resented page-hopping for basic tasks; PRC had to replace navigation friction without hiding what would change",
 "Multi-turn chat was technically costly, memory and latency constraints pushed us toward single-response steppers with clear checkpoints",
 "PAO already existed as a native capability; the assistant could not feel like a different product",
 "AIOps elephant flow returns enormous datasets; raw dumps in chat would overwhelm, not help",
 "Notifications needed a taxonomy, what to show, where, and how to link back to the thread that caused them",
 "Blank-slate chat failed new users; adoption depended on showing capabilities before asking operators to invent prompts",
 ],
 },
 informationArchitecture: {
 framing: "How the program was structured as a story, not a feature list.",
 paragraphs: [
 "We aligned on a persistent shell, threads, response container, action footer, and a rollout sequence that mirrors how operators build trust: onboarding first, then entry surfaces that reduce blank-slate friction (home, inline triggers, prompt library, discovery), then domain workflows that all end at the same review-and-confirm gate.",
 "Entry composes; execution does not fork the chrome. The library and discovery surfaces get operators to the right intent. PRC, PAO, elephant flow, and alerts handle the work, with shared confirmation language and feedback loops back into the thread.",
 ],
 flowSteps: [
 "Assistant shell and onboarding",
 "Home and inline triggers",
 "Prompt library",
 "PRC (rule creation)",
 "PAO",
 "AIOps elephant flow",
 "Alerts",
 ],
 workflowComparison: {
 beforeLabel: "Early fragmentation",
 afterLabel: "Unified model",
 beforeSteps: [
 "Per-feature AI entry points",
 "Blank chat as default",
 "Inconsistent reply layouts",
 "Weak confirmation before apply",
 ],
 afterSteps: [
 "One docked shell",
 "Home, triggers, and library for intent",
 "Shared response container kit",
 "Explicit checkpoints before commit",
 ],
 impact:
 "Operators carry one mental model from entry through firewall, AIOps, and notification tasks.",
 },
 visuals: [],
 },
 workflowSections: [
 {
 id: "workflow-home",
 title: "Home and entry",
 framing: "Chapter 1: Trust, onboarding, and how sessions begin",
 paragraphs: [
 "Before operators reach PRC or PAO, they need to understand what the assistant is, and what it is not. Onboarding set expectations: review before apply, confirmation on every change, and operational tooling rather than open-ended chat. The hero carousel walks through the conversational onboarding sequence; the introduction section shows how the home scales across docked layouts.",
 ],
 moments: [
 {
 title: "In-assistant onboarding",
 body:
 "We also explored in-assistant onboarding as a chat-like first run inside the panel, with the same expectations baked in. That conversational pattern became the model for how operators learn capabilities before they reach production workflows.",
 },
 ],
 },
 {
 id: "workflow-prompt-library",
 title: "Prompt library",
 framing: "Chapter 2: Solving the blank-slate problem",
 paragraphs: [
 "Most operators open the assistant and freeze. The prompt library was an exploratory answer: curated templates organized by task, so people start from vetted language instead of inventing prompts. The first four categories were product-specific; a shuffle control surfaced more templates and highlighted the breadth of what the assistant could handle.",
 ],
 moments: [
 {
 title: "Template browse",
 body:
 "Each prompt card was designed to earn a click before a thread opens. Title and a short summary explain what the prompt does. Time saved compares doing the task via assistant versus navigating product pages. Active users signal adoption. Together, those fields turn abstract AI capability into a concrete, low-risk starting point.",
 visualCarousel: {
 intervalMs: 1000,
 caption:
 "Template browse: search, filter by category, and scan prompt cards before launching a thread.",
 frames: [
 {
 src: `${base}/prompt-library-browse-01.png`,
 alt: "Prompt library template browse flow frame 1",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-browse-02.png`,
 alt: "Prompt library template browse flow frame 2",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-browse-03.png`,
 alt: "Prompt library template browse flow frame 3",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-browse-04.png`,
 alt: "Prompt library template browse flow frame 4",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-browse-05.png`,
 alt: "Prompt library template browse flow frame 5",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-browse-06.png`,
 alt: "Prompt library template browse flow frame 6",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-browse-07.png`,
 alt: "Prompt library template browse flow frame 7",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-browse-08.png`,
 alt: "Prompt library template browse flow frame 8",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-browse-09.png`,
 alt: "Prompt library template browse flow frame 9",
 width: 1728,
 height: 996,
 },
 ],
 },
 visual: {
 src: `${base}/prompt-library-card-anatomy.png`,
 alt: "Prompt library card anatomy showing title, functionality overview, time saved, and active users",
 caption:
 "Card anatomy: prompt title and functionality overview up top; time saved and active users at the foot give operators a quick read on effort and adoption before they commit to a template.",
 width: 1728,
 height: 680,
 captionCenter: true,
 },
 },
 {
 title: "Discovery page",
 body:
 "Discovery was a parallel exploration for day-one users: a full-width surface to introduce the assistant's capabilities, surface trending prompts, and room for articles, promotions, and future features. The goal was adoption, helping newly onboarded operators see what they could delegate to AI in daily work across cdFMC and SCC, not just on their first visit.",
 visualCarousel: {
 intervalMs: 1000,
 caption:
 "Discovery page: browse categories, search templates, and launch structured prompts from a full-width library surface.",
 frames: [
 {
 src: `${base}/prompt-library-discovery-01.png`,
 alt: "Prompt library discovery flow frame 1",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-discovery-02.png`,
 alt: "Prompt library discovery flow frame 2",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-discovery-03.png`,
 alt: "Prompt library discovery flow frame 3",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-discovery-04.png`,
 alt: "Prompt library discovery flow frame 4",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-discovery-05.png`,
 alt: "Prompt library discovery flow frame 5",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prompt-library-discovery-06.png`,
 alt: "Prompt library discovery flow frame 6",
 width: 1728,
 height: 996,
 },
 ],
 },
 },
 ],
 },
 {
 id: "workflow-rule-creation",
 title: "Rule creation (PRC)",
 framing: "Chapter 3: Creating policy without the page maze",
 paragraphs: [
 "Policy Rule Creation was phase one: basic rule creation through natural language, without the page navigation operators normally endure in cdFMC. Engineering constraints mattered, multi-turn conversations were slow and heavy on memory, so I designed a single-response stepper: intent, fuzzy matching and object resolution, formatted review, then explicit confirmation before commit. User identity and audit considerations were built into the checkpoint model from the start.",
 ],
 moments: [
 {
 title: "Single-response stepper with fuzzy matching",
 body:
 "Operators describe the rule they need. When object names do not match exactly, fuzzy matching surfaces candidates and asks for explicit selection, no silent assumptions. The entire flow lives in one guided response: propose, resolve ambiguity, review formatted policy output, confirm. That structure kept the experience predictable for operators and bounded for the system.",
 visualCarousel: {
 frames: [
 {
 src: `${base}/prc-flow-01.png`,
 alt: "PRC flow frame 1 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-02.png`,
 alt: "PRC flow frame 2 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-03.png`,
 alt: "PRC flow frame 3 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-04.png`,
 alt: "PRC flow frame 4 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-05.png`,
 alt: "PRC flow frame 5 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-06.png`,
 alt: "PRC flow frame 6 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-07.png`,
 alt: "PRC flow frame 7 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-08.png`,
 alt: "PRC flow frame 8 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-09.png`,
 alt: "PRC flow frame 9 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-10.png`,
 alt: "PRC flow frame 10 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-11.png`,
 alt: "PRC flow frame 11 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-12.png`,
 alt: "PRC flow frame 12 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-13.png`,
 alt: "PRC flow frame 13 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/prc-flow-14.png`,
 alt: "PRC flow frame 14 from Figma",
 width: 1728,
 height: 996,
 },
 ],
 caption:
 "PRC in one guided response: rule intent, fuzzy object matching, formatted review, and confirmation, no multi-turn back-and-forth.",
 intervalMs: 1000,
 },
 },
 ],
 },
 {
 id: "workflow-pao",
 title: "PAO",
 framing: "Chapter 4: Familiar optimizer patterns inside chat",
 paragraphs: [
 "Policy Analyzer and Optimizer already exists in cdFMC. My job was not to reinvent it, it was to wrap it in assistant flows that felt simple in chat but visually and structurally close to the native PAO pages, so operators never felt a disconnect when moving between panel and product.",
 ],
 moments: [
 {
 body:
 "Recommendations arrive as scannable cards with plain-language impact. Operators can go deeper, choosing which anomaly types to inspect, and take action from the thread itself. Accept and reject language matches other assistant workflows; nothing applies without an explicit operator decision.",
 visualCarousel: {
 frames: [
 {
 src: `${base}/pao-carousel-01.png`,
 alt: "PAO flow frame 1 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/pao-carousel-02.png`,
 alt: "PAO flow frame 2 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/pao-carousel-03.png`,
 alt: "PAO flow frame 3 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/pao-carousel-04.png`,
 alt: "PAO flow frame 4 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/pao-carousel-05.png`,
 alt: "PAO flow frame 5 from Figma",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/pao-carousel-06.png`,
 alt: "PAO flow frame 6 from Figma",
 width: 1728,
 height: 996,
 },
 ],
 caption:
 "PAO in the assistant: optimization prompts, anomaly drill-down, and accept/reject actions that mirror the native cdFMC experience.",
 intervalMs: 1000,
 },
 },
 ],
 },
 {
 id: "workflow-aiops",
 title: "AIOps elephant flow",
 framing: "Chapter 5: Making AIOps data consumable",
 paragraphs: [
 "Elephant flow draws on AIOps telemetry, high-volume network flows that are hard to parse in raw form. The assistant's role is translation: turn a wall of data into staged, readable summaries with probable causes and documentation-backed fixes operators can act on.",
 ],
 moments: [
 {
 body:
 "An operator asks about elephant flows in their firewall. The response container breaks the answer into steps: spike summaries in table form, follow-up chips to drill into cause and remediation, and links to fixes operators can verify before going deeper. The thread stays the audit trail; the format keeps dense AIOps output legible.",
 visualCarousel: {
 intervalMs: 1000,
 caption:
 "Elephant flow: home entry, the operator's question, then AIOps spikes, causes, and follow-up prompts in one thread.",
 frames: [
 {
 src: `${base}/aiops-elephant-01.png`,
 alt: "AI Assistant home with quick prompts before the elephant-flow question",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/aiops-elephant-02.png`,
 alt: "Operator types a question about elephant flows in the firewall",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/aiops-elephant-03.png`,
 alt: "Operator asks what elephant flows exist in the firewall",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/aiops-elephant-04.png`,
 alt: "Assistant begins a structured reply in the response container",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/aiops-elephant-05.png`,
 alt: "AIOps summary table of significant elephant-flow traffic spikes",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/aiops-elephant-06.png`,
 alt: "Spike summary with follow-up prompt chips for cause and remediation",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/aiops-elephant-07.png`,
 alt: "Operator drills into probable cause for a selected device",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/aiops-elephant-08.png`,
 alt: "Assistant surfaces network flow details and suggested next steps",
 width: 1728,
 height: 996,
 },
 ],
 },
 },
 ],
 },
 {
 id: "workflow-alerts",
 title: "Alerts",
 framing: "Chapter 6: Closing the feedback loop",
 paragraphs: [
 "When the assistant changes policy or enables a rule, operators need to know what happened, and be able to trace it. I designed a notification system that categorizes alert types, defines where each surfaces in cdFMC or SCC, and ties page-level toasts back to the originating chat thread with quick actions. Bulk-action flows were considered so operators managing many changes still had a coherent path back to context.",
 ],
 moments: [
 {
 body:
 "Notifications appear where operators already work: a page-level confirmation for what changed, thread-level acknowledgment inside the assistant, and quick-action buttons that jump back to the conversation that triggered the change. The same event is readable in both places, outside the panel for audit, inside the thread for continuity.",
 visualCarousel: {
 intervalMs: 1000,
 caption:
 "Alerts and notifications: configuration, preview, and post-apply confirmation tied back to the assistant thread.",
 frames: [
 {
 src: `${base}/alerts-flow-01.png`,
 alt: "Alerts and notifications flow frame 1",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/alerts-flow-02.png`,
 alt: "Alerts and notifications flow frame 2",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/alerts-flow-03.png`,
 alt: "Alerts and notifications flow frame 3",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/alerts-flow-04.png`,
 alt: "Alerts and notifications flow frame 4",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/alerts-flow-05.png`,
 alt: "Alerts and notifications flow frame 5",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/alerts-flow-06.png`,
 alt: "Alerts and notifications flow frame 6",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/alerts-flow-07.png`,
 alt: "Alerts and notifications flow frame 7",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/alerts-flow-08.png`,
 alt: "Alerts and notifications flow frame 8",
 width: 1728,
 height: 996,
 },
 {
 src: `${base}/alerts-flow-09.png`,
 alt: "Alerts and notifications flow frame 9",
 width: 1728,
 height: 996,
 },
 ],
 },
 },
 ],
 },
 ],
 designDecisions: [
 {
 title: "One shell, many domains",
 description:
 "Threads, response containers, and footers stay fixed across PRC, PAO, elephant flow, and alerts. Squads ship content blocks inside a shared assistant panel in cdFMC or SCC.",
 },
 {
 title: "Entry before depth",
 description:
 "Onboarding, the prompt library, and discovery come before high-risk workflows so operators learn the model, and see capabilities, before they commit changes.",
 },
 {
 title: "Single-response steppers over multi-turn chat",
 description:
 "PRC and similar flows use one guided response with checkpoints. Fewer turns mean lower latency, less memory load, and clearer audit paths for operators.",
 },
 {
 title: "Mirror the product, don't replace it",
 description:
 "PAO and notification patterns echo native product screens in cdFMC and SCC so the assistant feels like an extension of each console, not a parallel product.",
 },
 {
 title: "Checkpoints before commit",
 description:
 "Rule creation, optimizer apply, and alert publish all pause on structured review. The assistant proposes; the operator confirms, with user identity in the loop.",
 },
 ],
 designDecisionsFraming: "Cross-cutting choices that held the program together.",
 systemsThinking: {
 framing: "Patterns that let parallel teams ship without forking the assistant.",
 paragraphs: [
 "A shared story file and critique cadence defined what was canonical: response container, library handoff, prompt card anatomy, table-in-chat, checkpoint footer, notification taxonomy. Exceptions needed justification so PRC, PAO, AIOps, and alerts teams did not each invent their own chat dialect.",
 "New workflows assembled from that kit. Prompt cards solved adoption at the entry layer; single-response steppers solved performance at the execution layer; notification categories solved feedback at the exit layer.",
 ],
 patterns: [
 {
 title: "Response container",
 description: "Header, body blocks, tables, and actions repeat across PRC, PAO, elephant flow, and alerts.",
 },
 {
 title: "Prompt card",
 description: "Title, summary, time saved, and active users give operators a reason to click before they commit to a thread.",
 },
 {
 title: "Library-to-thread",
 description: "Template selection pre-fills context; the operator edits intent, not structure.",
 },
 {
 title: "Checkpoint footer",
 description: "Shared language for suggestion, ready to apply, and blocked states, with confirmation before any production change.",
 },
 {
 title: "Notification loop",
 description: "Page-level and thread-level feedback with quick actions back to the originating conversation.",
 },
 ],
 },
 reflection: {
 framing: "What designing AI inside an operational console taught me",
 paragraphs: [
 "This was never a chat UI project. It was a contract for how AI appears next to production firewall and security systems across cdFMC and SCC: where it enters, how it formats answers, when it must stop for human approval, and how operators trace what changed.",
 "The through-line runs adoption, execution, and feedback. The prompt library and discovery surfaces solved blank-slate anxiety. PRC and PAO solved task friction without abandoning product familiarity. Elephant flow made AIOps legible. Alerts closed the loop. Each chapter in this study follows that same arc.",
 "Trust came as much from systems design as from model quality, shared formatting, bounded steppers, product-familiar PAO patterns, and categorized notifications made the assistant feel governable across domains.",
 ],
 quote: {
 text: "If the panel feels like a separate product, operators won't commit production changes through it. Familiarity across cdFMC and SCC was the feature.",
 attribution: "Design takeaway, assistant program",
 },
 },
 sections: [
 { id: "legend", title: "Legend" },
 { id: "introduction", title: "Introduction" },
 { id: "complexity", title: "Complexity" },
 { id: "information-architecture", title: "Architecture" },
 { id: "workflow-home", title: "Home & entry" },
 { id: "workflow-prompt-library", title: "Prompt library" },
 { id: "workflow-rule-creation", title: "PRC" },
 { id: "workflow-pao", title: "PAO" },
 { id: "workflow-aiops", title: "AIOps" },
 { id: "workflow-alerts", title: "Alerts" },
 { id: "design-decisions", title: "Decisions" },
 { id: "systems-thinking", title: "Systems" },
 { id: "reflection", title: "Reflection" },
 ],
};
