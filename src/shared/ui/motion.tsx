"use client";

import { motion, useReducedMotion, useScroll, type Variants } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

type RevealProps = ComponentProps<typeof motion.div> & {
  children: ReactNode;
  /** Delay in seconds before the reveal starts. */
  delay?: number;
  /** Vertical offset in px the element travels while fading in. */
  offset?: number;
};

/** Fades and slides content in once, when it first scrolls into view. */
function Reveal({ children, delay = 0, offset = 20, ...props }: RevealProps) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

type StaggerGroupProps = ComponentProps<typeof motion.div> & { children: ReactNode };

/** Container that staggers the reveal of its StaggerItem children. */
function StaggerGroup({ children, ...props }: StaggerGroupProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = ComponentProps<typeof motion.div> & { children: ReactNode };

function StaggerItem({ children, ...props }: StaggerItemProps) {
  const reducedMotion = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };
  return (
    <motion.div variants={item} {...props}>
      {children}
    </motion.div>
  );
}

/** Thin scroll-linked progress bar pinned to the top of the viewport. */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary/70"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export { Reveal, ScrollProgress, StaggerGroup, StaggerItem, EASE };
