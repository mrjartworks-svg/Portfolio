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
 role: "Product Designer",
 year: "2025-2026",
 tags: ["Enterprise", "Operational Tooling", "Systems Design"],
 summary:
 "A systems redesign for Cisco's Firewall Migration Tool, bringing extraction, mapping, validation, and cutover into a single migration experience operators can review, validate, and execute with confidence.",
 description:
 "A systems redesign for Cisco's Firewall Migration Tool, bringing extraction, mapping, validation, and cutover into a single migration experience operators can review, validate, and execute with confidence.",
 thumbnail: "/projects/firewall-migration-tool-thumb.jpg",
 featured: true,
 scale: 3,
 readTimeMinutes: 20,
 },
 {
 slug: "ai-assisted-enterprise-workflows",
 title: "Building Cisco's AI Assistant",
 category: "AI & Enterprise",
 role: "Product Designer",
 year: "2024-2025",
 tags: ["AI", "Enterprise", "Systems Design", "Workflow Design"],
 summary:
 "Designing Cisco's AI Assistant across firewall policy, AIOps, optimization, alerts, and guided workflows. Building a shared assistant experience that feels consistent across products, teams, and operational contexts.",
 description:
 "Designing Cisco's AI Assistant across firewall policy, AIOps, optimization, alerts, and guided workflows. Building a shared assistant experience that feels consistent across products, teams, and operational contexts.",
 thumbnail: "/projects/ai-assistant-thumb.jpg",
 featured: true,
 scale: 3,
 readTimeMinutes: 20,
 },
 {
 slug: "adobe-perspective-tool",
 title: "Adobe Perspective Tool",
 category: "Product Design",
 role: "Product Designer",
 year: "2023",
 tags: ["Creative Tools", "Precision UX", "Visual Systems"],
 summary:
 "Redesigning Adobe Illustrator's Perspective Tool for greater precision, predictability, and control across complex transformation workflows.",
 description:
 "Redesigning Adobe Illustrator's Perspective Tool for greater precision, predictability, and control across complex transformation workflows.",
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
