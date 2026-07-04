import { cn } from "@/shared/lib";

type ProjectArtProps = {
  title: string;
  hue: number;
  className?: string;
};

/** Generated placeholder artwork: a soft gradient panel with the project monogram. */
function ProjectArt({ title, hue, className }: ProjectArtProps) {
  const monogram = title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      aria-hidden
      className={cn(
        "relative flex h-40 items-center justify-center overflow-hidden rounded-lg border",
        className,
      )}
      style={{
        background: `linear-gradient(135deg, oklch(0.55 0.16 ${hue} / 18%), oklch(0.6 0.14 ${hue + 40} / 8%) 60%, transparent)`,
      }}
    >
      <div
        className="absolute -top-10 -right-6 size-40 rounded-full blur-2xl"
        style={{ background: `oklch(0.6 0.17 ${hue} / 22%)` }}
      />
      <span
        className="font-mono text-4xl font-semibold tracking-tight select-none"
        style={{ color: `oklch(0.55 0.16 ${hue} / 55%)` }}
      >
        {monogram}
      </span>
    </div>
  );
}

export { ProjectArt };
