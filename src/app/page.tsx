import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Hero } from "@/components/home/Hero";
import { PersonalityStrip } from "@/components/home/PersonalityStrip";
import { Philosophy } from "@/components/home/Philosophy";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Philosophy />
      <PersonalityStrip />
    </>
  );
}
