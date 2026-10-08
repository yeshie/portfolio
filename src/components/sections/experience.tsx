"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { experience } from "@/data/portfolio";
import { Reveal } from "../ui/reveal";
import { Section } from "../ui/section";

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section
      id="experience"
      eyebrow="03 — Education"
      title={
        <>
          Where I <span className="text-gradient">studied</span>
        </>
      }
    >
      <div ref={ref} className="relative pl-8 md:pl-12">
        {/* Timeline track + scroll-driven fill */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-line md:left-[11px]" />
        <motion.div
          style={{ scaleY }}
          className="absolute left-[7px] top-2 h-full w-px origin-top bg-accent md:left-[11px]"
        />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.company} delay={i * 0.05}>
              <div className="relative">
                <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-accent/50 bg-bg md:-left-12 md:h-6 md:w-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent md:h-2 md:w-2" />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-medium">
                    {job.role} <span className="text-muted">· {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-muted">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
