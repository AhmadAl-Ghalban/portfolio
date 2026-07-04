import { Container, Skeleton } from "@/shared/ui";

export default function Loading() {
  return (
    <Container className="flex flex-col gap-6 py-24" aria-busy aria-label="Loading page">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-12 w-2/3 max-w-lg" />
      <Skeleton className="h-5 w-1/2 max-w-md" />
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
        <Skeleton className="h-64 max-lg:hidden" />
      </div>
    </Container>
  );
}
