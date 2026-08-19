import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";


import { Studio } from "@/components/site/Studio";
import { MissionVision } from "@/components/site/MissionVision";
import { BackgroundEffects } from "@/components/site/BackgroundEffects";
import { TextReveal, SlideUpReveal } from "@/components/animations/Motion";
import { Work } from "@/components/site/Work";
import { Team } from "@/components/site/Team";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { LetsTalk } from "@/components/site/LetsTalk";
import { Contact } from "@/components/site/Contact";

const title = "Vizuals — Design & Motion Studio";
const description =
  "Vizuals is a design and motion studio building brand identities, interactive websites and film for culture and technology.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background">
      <BackgroundEffects />
      <Hero />
      <Marquee />
      <Studio />
      <MissionVision />
      <div className="w-full pt-16 pb-4 md:pt-24 md:pb-8 px-6 sm:px-12 bg-background">
        <div className="max-w-[1400px] mx-auto flex items-center gap-6 md:gap-8">
          <TextReveal 
            text="THE VIZUALS WAY"
            className="text-3xl md:text-6xl lg:text-8xl font-sans font-black tracking-tight text-white whitespace-nowrap"
          />
          <SlideUpReveal delay={0.5} className="flex-1 h-[1px] bg-[#5a22d4]"></SlideUpReveal>
        </div>
      </div>
      <section className="relative w-full">
        <Work />
      </section>
      <Team />
      <Testimonials />
      <FAQ />
      <LetsTalk />
      <Contact />
    </main>
  );
}
