"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  /** Animation length in seconds. */
  duration?: number;
  className?: string;
};

/** Counts from 0 to `value` when scrolled into view. Renders the final value under reduced motion. */
function CountUp({ value, suffix = "", duration = 1.4, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reducedMotion = useReducedMotion();
  // Starts at the real value so server HTML and no-JS clients show the true number;
  // the 0 → value animation only kicks in once the element scrolls into view.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reducedMotion) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reducedMotion, value, duration]);

  const shown = reducedMotion ? value : display;

  return (
    <span ref={ref} className={className}>
      {shown.toLocaleString("en")}
      {suffix}
    </span>
  );
}

export { CountUp };
