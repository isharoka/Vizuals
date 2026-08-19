import { createFileRoute } from "@tanstack/react-router";
import { Work } from "@/components/site/Work";
export const Route = createFileRoute("/work")({
  component: WorkPage,
});

function WorkPage() {
  return <Work />;
}
