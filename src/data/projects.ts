import type { Project } from "@/types";

export const featuredProjectSlugs = [
 "firewall-migration-tool",
 "ai-assisted-enterprise-workflows",
 "adobe-perspective-tool",
] as const;

export const projects: Project[] = [
 {
 slug: "firewall-migration-tool",
 title: "Firewall Migration Tool",
 category: "Enterprise UX",
 role: "Lead Product Designer",
 year: "2024",
 tags: ["Enterprise", "Operational Tooling", "Systems Design"],
 summary:
 "Restructuring a high-stakes firewall migration tool into a guided, auditable operational workflow.",
 description:
 "A systems redesign for Cisco's Firewall Migration Tool, curating complexity across source extraction, mapping, validation, and cutover into one narrative operators can sign off on.",
 thumbnail: "/projects/firewall-migration-tool-thumb.jpg",
 featured: true,
 scale: 3,
 readTimeMinutes: 20,
 },
 {
 slug: "ai-assisted-enterprise-workflows",
 title: "Building Cisco's Ai Assistant",
 category: "AI & Enterprise",
 role: "Lead Product Designer",
    year: "2023-2025",
 tags: ["AI", "Enterprise", "Systems Design", "Multi-domain"],
    summary:
      "Designing Cisco's AI Assistant across cdFMC and SCC, policy creation, optimization, AIOps, and alerts on one shared conversational model.",
    description:
      "A multi-year program embedding AI in cdFMC and SCC (not on-prem FMC): different workflows on different surfaces, with prompt library and discovery for adoption, PRC with fuzzy matching and single-response steppers, PAO flows aligned to native product patterns, elephant flow for consumable AIOps, and a notification system that closes the loop back to chat.",
 thumbnail: "/projects/ai-assistant-thumb.jpg",
 featured: true,
 scale: 3,
 readTimeMinutes: 22,
 },
 {
 slug: "adobe-perspective-tool",
 title: "Adobe Perspective Tool",
 category: "Product Design",
 role: "Product Designer",
 year: "2023",
 tags: ["Creative Tools", "Precision UX", "Visual Systems"],
 summary:
 "Exploring spatial interaction patterns and usability improvements for precision creative tooling.",
 description:
 "Interaction design for a perspective transformation tool within Adobe's creative ecosystem, focused on precision, predictability, and visual feedback.",
 thumbnail: "/projects/adobe-perspective-tool-thumb.jpg",
 externalUrl:
 "https://www.behance.net/gallery/154614749/Perspective-Grids-Internship-Project-Adobe-Inc",
 hoverLabel: "Opens in Behance",
 featured: true,
 scale: 2,
 readTimeMinutes: 15,
 },
];

export function getProjectBySlug(slug: string): Project | undefined {
 return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
 return featuredProjectSlugs
 .map((slug) => projects.find((p) => p.slug === slug))
 .filter((p): p is Project => p !== undefined);
}
