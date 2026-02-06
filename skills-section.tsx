"use client";

import { SectionWrapper, SectionLabel, SectionTitle } from "./section-wrapper";

const categories = [
  {
    title: "Languages & Core",
    skills: ["Python", "JavaScript", "C", "HTML", "CSS", "Data Structures", "IoT", "OS"],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Dev Tools",
    skills: ["VS Code", "Git", "GitHub", "GitLab", "Postman"],
  },
  {
    title: "Cloud & Deploy",
    skills: ["AWS", "Vercel", "Netlify", "GitHub Pages"],
  },
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionLabel>Expertise</SectionLabel>
      <SectionTitle>
        Tools &{"\n"}
        <span className="text-gradient">Technologies</span>
      </SectionTitle>

      <div className="mt-16 grid gap-px bg-border/30 md:grid-cols-2">
        {categories.map((cat, ci) => (
          <div
            key={cat.title}
            className="group bg-background p-8 transition-colors hover:bg-secondary/20 md:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="font-heading text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
                {String(ci + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-border/50" />
            </div>

            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-foreground mb-6 md:text-2xl">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-border/60 bg-secondary/20 px-4 py-2.5 text-xs font-medium text-secondary-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary hover:bg-primary/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft skills row */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-primary" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Soft Skills
          </span>
        </div>
        <div className="flex flex-wrap gap-4">
          {[
            "Problem Solving",
            "Team Collaboration",
            "Communication",
            "Time Management",
            "Adaptability",
            "Quick Learner",
          ].map((skill) => (
            <span
              key={skill}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {skill}
              <span className="text-primary/50 ml-4">/</span>
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
