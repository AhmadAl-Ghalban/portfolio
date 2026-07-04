import { CountUp } from "@/shared/ui";

type StatTileProps = {
  /** Numeric stats count up on scroll; null renders the fallback. */
  value: number | null;
  suffix?: string;
  fallback?: string;
  label: string;
};

export function StatTile({ value, suffix = "", fallback = "—", label }: StatTileProps) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border bg-card p-5">
      <span className="text-3xl font-semibold tracking-tight">
        {value === null ? fallback : <CountUp value={value} suffix={suffix} />}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
