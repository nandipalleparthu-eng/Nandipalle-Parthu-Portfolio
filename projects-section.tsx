"use client";

import { useState } from "react";
import { SectionWrapper, SectionLabel } from "./section-wrapper";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Student Task Manager",
    category: "Web Application",
    description:
      "A modern web-based application designed to help students efficiently manage daily tasks, academic assignments, and submission deadlines.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/username/task-manager",
    live: "https://taskmanager.vercel.app",
  },
  {
    id: 2,
    number: "02",
    title: "AI Trip Planner",
    category: "AI-Powered",
    description:
      "An intelligent travel recommendation system that generates personalized travel plans using AI prediction models. Built during the Gen AI Exchange Hackathon.",
    tech: ["Python", "React", "Google Cloud AI", "Next.js"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    number: "03",
    title: "Portfolio Website",
    category: "Personal Brand",
    description:
      "A premium dark-themed portfolio with cinematic animations, katana cursor effects, and studio-grade typography. The site you are viewing right now.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Canvas API"],
    github: "#",
    live: "#",
  },
];

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <SectionWrapper id="projects" fullWidth>
      <div className="px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl lg:text-7xl mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-lg">
            A curated selection of projects demonstrating technical depth and creative problem solving.
          </p>
        </div>
      </div>

      {/* Project list - full width */}
      <div className="mt-16 border-t border-border/30">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block border-b border-border/30 transition-colors hover:bg-secondary/10"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-8 lg:px-12 lg:py-12">
              {/* Number */}
              <span className="hidden font-heading text-sm font-medium text-muted-foreground/40 md:block">
                {project.number}
              </span>

              {/* Title */}
              <h3
                className={cn(
                  "font-heading text-2xl font-black uppercase tracking-tight transition-all duration-500 md:text-4xl lg:text-5xl flex-1",
                  hoveredId === project.id
                    ? "text-primary translate-x-4"
                    : "text-foreground translate-x-0"
                )}
              >
                {project.title}
              </h3>

              {/* Category */}
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground lg:block">
                {project.category}
              </span>

              {/* Arrow */}
              <ArrowUpRight
                className={cn(
                  "h-6 w-6 transition-all duration-500",
                  hoveredId === project.id
                    ? "text-primary rotate-0 scale-110"
                    : "text-muted-foreground/30 -rotate-45 scale-100"
                )}
              />
            </div>

            {/* Expanded detail on hover */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-700 ease-out",
                hoveredId === project.id ? "max-h-60" : "max-h-0"
              )}
            >
              <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-12 lg:pb-12">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <p className="text-sm leading-relaxed text-muted-foreground lg:col-span-2">
                    {project.description}
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-primary/30 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.github, "_blank");
                        }}
                        className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                        role="link"
                        tabIndex={0}
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
