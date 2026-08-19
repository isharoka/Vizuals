import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-[4.5rem]">
      <Contact />
    </main>
  );
}
