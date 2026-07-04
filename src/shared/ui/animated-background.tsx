import { cn } from "@/shared/lib";

type AnimatedBackgroundProps = {
  className?: string;
};

/**
 * Decorative aurora + grid backdrop. Pure CSS (GPU-composited transforms only),
 * disabled automatically under prefers-reduced-motion via the global override.
 */
function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div aria-hidden className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute -top-40 left-1/2 size-[34rem] -translate-x-[80%] rounded-full bg-primary/25 blur-3xl dark:bg-primary/20"
        style={{ animation: "aurora-drift 22s ease-in-out infinite" }}
      />
      <div
        className="absolute -top-24 left-1/2 size-[28rem] translate-x-[10%] rounded-full bg-accent-foreground/15 blur-3xl dark:bg-accent-foreground/10"
        style={{ animation: "aurora-drift 28s ease-in-out infinite reverse" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>
  );
}

export { AnimatedBackground };
