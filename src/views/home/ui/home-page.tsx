import { GithubSection } from "@/widgets/github-activity";

import { ContactCtaSection } from "./contact-cta-section";
import { ExperienceHighlightsSection } from "./experience-highlights-section";
import { FeaturedProjectsSection } from "./featured-projects-section";
import { HeroSection } from "./hero-section";
import { SkillsPreviewSection } from "./skills-preview-section";
import { TechStackSection } from "./tech-stack-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <FeaturedProjectsSection />
      <ExperienceHighlightsSection />
      <SkillsPreviewSection />
      <GithubSection />
      <ContactCtaSection />
    </>
  );
}
