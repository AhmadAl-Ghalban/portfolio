import type { ComponentProps } from "react";

import { cn } from "@/shared/lib";

function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("py-16 sm:py-24", className)} {...props} />;
}

type SectionHeadingProps = ComponentProps<"div"> & {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 flex max-w-2xl flex-col gap-3 sm:mb-14",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <span className="font-mono text-xs font-medium tracking-widest text-primary uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base text-pretty text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export { Section, SectionHeading };
