import { AboutBeyondWorkSection } from "@/components/about/AboutBeyondWorkSection";
import { AboutPortrait } from "@/components/about/AboutPortrait";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { aboutPortrait } from "@/data/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mradul Jain · product designer focused on enterprise systems, visual communication, and complexity.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="grain pt-28 pb-section-sm">
        <Container size="narrow">
          <FadeIn>
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-12">
              <AboutPortrait src={aboutPortrait.src} alt={aboutPortrait.alt} />
              <div className="min-w-0 flex-1">
                <h1 className="font-display text-display-lg text-[var(--text)]">
                  Hi, I&apos;m Mradul.
                </h1>
                <div className="prose-editorial mt-8 space-y-6">
                  <p>
                    I&apos;m a Product Designer at Cisco, where I work on enterprise
                    systems, security workflows, and AI-assisted tools used by network
                    operators and security teams.
                  </p>
                  <p>
                    I enjoy complex products. The kind where information is dense,
                    workflows span multiple teams, and small design decisions can have
                    real operational consequences. Most of my work involves making those
                    systems easier to understand, navigate, and trust.
                  </p>
                  <p>
                    Before getting into enterprise software, I spent years drawing,
                    painting, designing tattoos, and generally making things. That
                    background still influences how I approach design today. Whether
                    it&apos;s a tattoo, an illustration, or a security product,
                    I&apos;m usually trying to solve the same problem: deciding what
                    matters and removing what doesn&apos;t.
                  </p>
                  <p>
                    Lately, I&apos;ve been thinking a lot about AI, trust, and how much
                    responsibility software should take away from the people using it.
                  </p>
                  <p>
                    Outside of work, you&apos;ll usually find me training MMA, building
                    Gundams, sketching, riding motorcycles, watching films, or
                    disappearing into whatever technology rabbit hole has my attention
                    that week. I also know arbitrary animal facts.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <AboutBeyondWorkSection />
    </>
  );
}
