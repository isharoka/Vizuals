import * as Accordion from "@radix-ui/react-accordion";
import { SlideUpReveal, StaggerGroup, TextReveal } from "@/components/animations/Motion";
import { ChevronDown } from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "What can Vizuals do for my brand?",
    answer: "We help brands build stronger visibility, reach the right audience, and turn marketing ideas into meaningful business results through strategy, creative, and digital execution.",
  },
  {
    question: "How do you measure marketing success?",
    answer: "We focus on the metrics that matter to your goals—whether that’s awareness, engagement, leads, conversions, customer acquisition, or return on investment.",
  },
  {
    question: "How long does it take to see results from marketing?",
    answer: "It depends on the goals, strategy, and channels involved. Some campaigns can show early signals quickly, while sustainable growth takes consistent testing, optimization, and time.",
  },
  {
    question: "How do you decide what marketing strategy is right for my business?",
    answer: "We look at your business, audience, market, competitors, and objectives before recommending the right channels and approach. We don't believe in using the same strategy for every brand.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-12 sm:py-32 px-4 sm:px-12 bg-background border-t border-border">
      <div className="max-w-[1000px] mx-auto">
        <StaggerGroup className="flex flex-col gap-8 sm:gap-16">
          <div className="flex flex-row items-center gap-4 sm:gap-8 justify-center text-center w-full">
            <div className="h-[2px] flex-1 bg-[#5a22d4]/40"></div>
            <TextReveal
              text="F.A.Q."
              className="text-3xl sm:text-6xl md:text-8xl font-bold tracking-tighter whitespace-nowrap text-[#ffffff] shrink-0"
            />
            <div className="h-[2px] flex-1 bg-[#5a22d4]/40"></div>
          </div>

          <div className="w-full mt-2 sm:mt-8">
            <Accordion.Root type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <SlideUpReveal key={index} delay={0.2 + index * 0.15}>
                  <Accordion.Item
                    value={`item-${index}`}
                    className="border-b border-border/50 overflow-hidden"
                  >
                    <Accordion.Header className="flex">
                      <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 text-left text-lg sm:text-3xl font-medium transition-all hover:text-[#5a22d4] [&[data-state=open]>svg]:rotate-180">
                        {faq.question}
                        <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-muted-foreground" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden text-muted-foreground text-sm sm:text-base data-[state=closed]:animate-[accordion-up_0.5s_cubic-bezier(0.16,1,0.3,1)] data-[state=open]:animate-[accordion-down_0.5s_cubic-bezier(0.16,1,0.3,1)]">
                      <div className="pb-6 pt-2 font-mono leading-relaxed pr-8">
                        {faq.answer}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </SlideUpReveal>
              ))}
            </Accordion.Root>
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
