const MONTH_YEAR_FORMAT = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" });
const MONTHS_PER_YEAR = 12;

/** "2023-02" → "Feb 2023". */
export function formatMonthYear(isoMonth: string): string {
  return MONTH_YEAR_FORMAT.format(new Date(`${isoMonth}-01T00:00:00Z`));
}

/** Human period like "Feb 2023 – Dec 2025" or "Jan 2026 – Present". */
export function formatPeriod(start: string, end: string | null): string {
  return `${formatMonthYear(start)} – ${end ? formatMonthYear(end) : "Present"}`;
}

/** Duration like "2 yrs 11 mos", inclusive of the starting month. */
export function formatDuration(start: string, end: string | null): string {
  const startDate = new Date(`${start}-01T00:00:00Z`);
  const endDate = end ? new Date(`${end}-01T00:00:00Z`) : new Date();
  const totalMonths =
    (endDate.getUTCFullYear() - startDate.getUTCFullYear()) * MONTHS_PER_YEAR +
    (endDate.getUTCMonth() - startDate.getUTCMonth()) +
    1;
  const years = Math.floor(totalMonths / MONTHS_PER_YEAR);
  const months = totalMonths % MONTHS_PER_YEAR;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ") || "1 mo";
}

/** Years of professional experience since a given ISO month, rounded to the nearest year. */
export function yearsSince(isoMonth: string): number {
  const start = new Date(`${isoMonth}-01T00:00:00Z`);
  const now = new Date();
  const months =
    (now.getUTCFullYear() - start.getUTCFullYear()) * MONTHS_PER_YEAR +
    (now.getUTCMonth() - start.getUTCMonth());
  return Math.round(months / MONTHS_PER_YEAR);
}

/** Relative time like "3 days ago" for activity feeds. */
export function formatRelativeTime(iso: string): string {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const diffMs = Date.parse(iso) - Date.now();
  const diffSeconds = Math.round(diffMs / 1000);
  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 31536000],
    ["month", 2592000],
    ["week", 604800],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
  ];
  for (const [unit, seconds] of units) {
    if (Math.abs(diffSeconds) >= seconds) {
      return rtf.format(Math.round(diffSeconds / seconds), unit);
    }
  }
  return "just now";
}
