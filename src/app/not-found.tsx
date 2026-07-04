import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button, Container } from "@/shared/ui";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-4 py-32">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild>
        <Link href="/">
          <ArrowLeft aria-hidden />
          Back home
        </Link>
      </Button>
    </Container>
  );
}
