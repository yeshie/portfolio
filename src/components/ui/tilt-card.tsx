"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import type { MouseEvent, ReactNode } from "react";

// Card that tilts in 3D toward the cursor with a spotlight glow.
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const mx = useMotionValue(-999);
  const my = useMotionValue(-999);
  const glow = useMotionTemplate`radial-gradient(400px circle at ${mx}px ${my}px, rgb(180 80 143 / 0.07), transparent 60%)`;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    mx.set(x);
    my.set(y);
    ry.set((x / r.width - 0.5) * 10);
    rx.set(-(y / r.height - 0.5) * 10);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
    mx.set(-999);
    my.set(-999);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-surface shadow-sm shadow-accent/5 transition-colors hover:border-accent/30 ${className}`}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-10" style={{ background: glow }} />
      {children}
    </motion.div>
  );
}
