"use client";

import { HeroAtmosphere } from "@/components/home/HeroAtmosphere";
import { RotatingHeadline } from "@/components/home/RotatingHeadline";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="hero-section grain relative flex min-h-[min(92vh,880px)] flex-col justify-end overflow-hidden pb-[clamp(4rem,12vh,7rem)] pt-[clamp(7rem,18vh,10rem)]">
      <HeroAtmosphere />

      <Container className="relative z-10">
        <div className="hero-editorial">
          <h1 className="hero-headline">
            <RotatingHeadline />
          </h1>

          <div className="hero-actions">
            <Button href="/work" variant="hero-secondary">
              View Work
            </Button>
            <Button href="/about" variant="hero-tertiary">
              About
            </Button>
          </div>

          <p className="hero-note">
            Product designer still sketching in notebooks and losing rounds in
            Jiu Jitsu.
          </p>
        </div>
      </Container>
    </section>
  );
}
