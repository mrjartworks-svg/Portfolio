import { PlaygroundGallery } from "@/components/playground/PlaygroundGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Visual experiments, illustration, branding, tattoos, and side projects beyond enterprise product work.",
};

export default function PlaygroundPage() {
  return <PlaygroundGallery />;
}
