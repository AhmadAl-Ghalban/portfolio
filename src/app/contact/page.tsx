import type { Metadata } from "next";

import { ContactPage } from "@/views/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — email, GitHub, LinkedIn, npm, and resume download. Based in Doha, Qatar.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
