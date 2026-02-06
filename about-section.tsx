"use client";

import { SectionWrapper, SectionLabel } from "./section-wrapper";

const stats = [
  { value: "05+", label: "Hackathons" },
  { value: "05+", label: "Certifications" },
  { value: "03+", label: "Projects" },
  { value: "2026", label: "Graduating" },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-16 lg:grid-cols-12">
        {/* Left column */}
        <div className="lg:col-span-5">
          <SectionLabel>About</SectionLabel>
          <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
            Building
            <br />
            the <span className="text-gradient">future</span>
            <br />
            with code
          </h2>

          {/* Stats grid */}
          <div className="mt-12 grid grid-cols-2 gap-px bg-border/50">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background p-6 transition-colors hover:bg-secondary/30"
              >
                <div className="font-heading text-3xl font-black text-gradient md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - content */}
        <div className="flex flex-col justify-center gap-8 lg:col-span-7 lg:pl-12 lg:border-l lg:border-border/50">
          <p className="text-lg leading-relaxed text-secondary-foreground md:text-xl">
            I am a Computer Science Engineering student focused on{" "}
            <span className="font-semibold text-foreground">
              Artificial Intelligence and Machine Learning
            </span>
            . My passion lies at the intersection of intelligent systems, modern web applications, and creative design.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            With a strong interest in Game Development and UI/UX Design, I bring a unique blend of technical depth and visual creativity. I am actively exploring modern AI technologies and cloud-based development to build products that push boundaries.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            My career goal is to design and develop innovative AI-driven products and impactful digital experiences that redefine what is possible.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "Problem Solving",
              "Creative Thinking",
              "Adaptability",
              "Collaboration",
              "Quick Learner",
            ].map((tag) => (
              <span
                key={tag}
                className="border border-border/80 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Based in Coimbatore, India
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
