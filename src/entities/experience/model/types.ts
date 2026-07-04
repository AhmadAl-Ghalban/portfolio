export type Position = {
  id: string;
  company: string;
  role: string;
  location: string;
  /** ISO month, e.g. "2023-02". */
  start: string;
  /** ISO month, or null while the position is current. */
  end: string | null;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
};
