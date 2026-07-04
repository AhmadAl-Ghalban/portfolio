import type { Metadata } from "next";

import { AboutPage } from "@/views/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full Stack Engineer with 5+ years across web, mobile, and backend — education, values, languages, and the journey so far.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPage />;
}
