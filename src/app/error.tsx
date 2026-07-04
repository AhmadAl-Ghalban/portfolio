"use client";

import { RotateCcw } from "lucide-react";

import { Button, Container } from "@/shared/ui";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <Container className="flex flex-col items-start gap-4 py-32">
      <p className="font-mono text-sm text-primary">500</p>
      <h1 className="text-3xl font-semibold tracking-tight">Something went wrong</h1>
      <p className="max-w-md text-muted-foreground">
        An unexpected error occurred while rendering this page. It has nothing to do with you — try
        again.
      </p>
      <Button onClick={reset}>
        <RotateCcw aria-hidden />
        Try again
      </Button>
    </Container>
  );
}
