"use client";

import { useState } from "react";
import { SectionWrapper, SectionLabel, SectionTitle } from "./section-wrapper";
import { cn } from "@/lib/utils";

const certifications = [
  {
    title: "Data Analyst Certification",
    org: "One Roadmap",
    date: "Jan 2026",
    detail:
      "Data analysis techniques, data interpretation methods, and analytical problem-solving using data-driven approaches.",
  },
  {
    title: "Introduction to Modern AI",
    org: "Cisco Networking Academy",
    date: "Dec 2025",
    detail:
      "AI concepts, emerging AI technologies, and real-world AI applications across industries.",
  },
  {
    title: "HTML Essentials",
    org: "Cisco Networking Academy",
    date: "Nov 2025",
    detail:
      "HTML fundamentals, webpage structure, semantic markup, and modern web development best practices.",
  },
  {
    title: "AWS Certification",
    org: "Amazon Web Services",
    date: "2025",
    detail:
      "Cloud computing fundamentals, infrastructure services, and deployment workflows using AWS.",
  },
  {
    title: "Tata Professional Training",
    org: "Tata Group",
    date: "2025",
    detail:
      "Real-world technological innovation, industry problem solving, and professional technical skill development.",
  },
];

const hackathons = [
  {
    title: "Gen AI Exchange Hackathon",
    org: "Google Cloud x Hack2Skill",
    date: "Jan 2026",
    detail:
      "National-level AI hackathon. Designed & developed a Personalized Trip Planner with AI-based recommendation system, travel personalization logic, and prototype system architecture.",
    tags: ["AI Recommendation", "System Design", "UI/UX", "Prototype"],
  },
  {
    title: "AvantGarde 2K25",
    org: "MATRIX Association -- AIML Division",
    date: "Oct 2025",
    detail:
      "Innovation-driven AIML hackathon solving real-world technology challenges with creative algorithm planning and collaborative solution building.",
    tags: ["Algorithm Planning", "Idea Development", "Documentation"],
  },
  {
    title: "CineHack.AI -- National Level",
    org: "FISAT",
    date: "Oct 2025",
    detail:
      "National AI hackathon exploring film and media innovation through AI-based solutions for creative content enhancement.",
    tags: ["Creative AI", "Rapid Prototyping", "Innovation"],
  },
  {
    title: "Smart India Hackathon -- Internal",
    org: "Karunya Institute",
    date: "Sept 2025",
    detail:
      "Qualified internal rounds by presenting innovative technical project ideas addressing real-world challenges.",
    tags: ["Innovation Strategy", "Solution Design", "Presentation"],
  },
];

type Tab = "hackathons" | "certifications";

export function AchievementsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("hackathons");

  return (
    <SectionWrapper id="achievements">
      <SectionLabel>Recognition</SectionLabel>
      <SectionTitle>
        Achievements &{"\n"}
        <span className="text-gradient">Milestones</span>
      </SectionTitle>

      {/* Tab row */}
      <div className="mt-12 flex gap-6 border-b border-border/30">
        {(["hackathons", "certifications"] as Tab[]).map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "pb-4 text-[11px] font-medium uppercase tracking-[0.3em] transition-all border-b-2",
              activeTab === tab
                ? "text-primary border-primary"
                : "text-muted-foreground border-transparent hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Hackathons */}
      {activeTab === "hackathons" && (
        <div className="mt-12 flex flex-col">
          {hackathons.map((h, i) => (
            <div
              key={h.title}
              className="group grid gap-4 border-b border-border/20 py-8 md:grid-cols-12 md:gap-8 md:py-12"
            >
              {/* Number & date */}
              <div className="md:col-span-2 flex items-start gap-4 md:flex-col md:gap-2">
                <span className="font-heading text-sm font-medium text-muted-foreground/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {h.date}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-6">
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
                  {h.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-primary/70">
                  {h.org}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {h.detail}
                </p>
              </div>

              {/* Tags */}
              <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end md:items-start">
                {h.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border/50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {activeTab === "certifications" && (
        <div className="mt-12 grid gap-px bg-border/20 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className="group bg-background p-8 transition-colors hover:bg-secondary/15 md:p-10"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-heading text-sm font-medium text-muted-foreground/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {cert.date}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">
                {cert.title}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-primary/60">
                {cert.org}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {cert.detail}
              </p>
            </div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
