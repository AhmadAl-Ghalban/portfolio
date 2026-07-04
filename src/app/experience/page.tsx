import type { Metadata } from "next";

import { ExperiencePage } from "@/views/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience: The Group Securities (Doha), Sitech (Amman) with four Saudi client platforms, and Shopyard — with responsibilities, technologies, and achievements.",
  alternates: { canonical: "/experience" },
};

export default function Page() {
  return <ExperiencePage />;
}
