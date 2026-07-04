import "server-only";

const NPM_DOWNLOADS_API = "https://api.npmjs.org/downloads/point";
const REVALIDATE_SECONDS = 3600;

export type NpmDownloads = {
  package: string;
  lastMonth: number;
};

export async function getNpmDownloads(packageName: string): Promise<NpmDownloads | null> {
  try {
    const res = await fetch(`${NPM_DOWNLOADS_API}/last-month/${packageName}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { downloads?: number };
    if (typeof data.downloads !== "number") return null;
    return { package: packageName, lastMonth: data.downloads };
  } catch {
    return null;
  }
}
