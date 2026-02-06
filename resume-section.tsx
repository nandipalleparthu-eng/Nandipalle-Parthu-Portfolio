"use client";

import { SectionWrapper } from "./section-wrapper";
import { Download, ArrowUpRight } from "lucide-react";

export function ResumeSection() {
  return (
    <SectionWrapper id="resume">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
              Resume
            </span>
          </div>
          <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
            Get my
            <br />
            <span className="text-gradient">full story</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground max-w-md">
            A comprehensive overview of my skills, education, projects, and certifications in a single document.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="group flex items-center justify-between border border-border/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >
            <div className="flex items-center gap-4">
              <Download className="h-5 w-5 text-primary" />
              <div>
                <span className="block font-heading text-sm font-bold uppercase tracking-tight text-foreground">
                  Download PDF
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Resume file
                </span>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-0 -rotate-45" />
          </a>

          <a
            href="#"
            className="group flex items-center justify-between border border-border/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >
            <div className="flex items-center gap-4">
              <ArrowUpRight className="h-5 w-5 text-primary" />
              <div>
                <span className="block font-heading text-sm font-bold uppercase tracking-tight text-foreground">
                  View Online
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Interactive resume
                </span>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-0 -rotate-45" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
