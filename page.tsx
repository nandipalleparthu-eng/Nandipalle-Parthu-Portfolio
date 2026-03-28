"use client";

import { useState } from "react";
import { ScrollProgress } from "@/components/scroll-progress";
import { KatanaCursor } from "@/components/katana-cursor";
import { PageLoader } from "@/components/page-loader";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { MarqueeBand } from "@/components/marquee-band";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { AchievementsSection } from "@/components/achievements-section";
import { ResumeSection } from "@/components/resume-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="noise-overlay">
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}

      <div
        className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <KatanaCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <HeroSection />
          <MarqueeBand />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
