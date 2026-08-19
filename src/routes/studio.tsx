import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "@/components/site/Studio";

export const Route = createFileRoute("/studio")({
  component: StudioPage,
});

function StudioPage() {
  return (
    <main className="min-h-screen bg-background pt-[4.5rem]">
      <Studio />
    </main>
  );
}
