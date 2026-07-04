"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import type { Position } from "@/entities/experience";

import { PositionItem } from "./position-item";

type ExperienceTimelineProps = {
  positions: Position[];
};

export function ExperienceTimeline({ positions }: ExperienceTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 });

  const lineMask = "linear-gradient(to bottom, black 88%, transparent)";

  return (
    <div ref={ref} className="relative">
      {/* Faint track line, and a primary line that draws itself as you scroll. */}
      <span
        aria-hidden
        className="absolute top-2 bottom-0 left-[5px] w-px bg-border"
        style={{ maskImage: lineMask }}
      />
      <motion.span
        aria-hidden
        className="absolute top-2 bottom-0 left-[5px] w-px origin-top bg-primary"
        style={{ scaleY, maskImage: lineMask }}
      />
      <ol>
        {positions.map((position, index) => (
          <PositionItem key={position.id} position={position} index={index} />
        ))}
      </ol>
    </div>
  );
}
