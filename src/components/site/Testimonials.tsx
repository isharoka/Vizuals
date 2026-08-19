import useEmblaCarousel from "embla-carousel-react";
import { SlideUpReveal, StaggerGroup, TextReveal } from "@/components/animations/Motion";
import { useEffect, useState } from "react";
import { useCallback } from "react";

const testimonials = [
  {
    quote: "Vizuals didn't just give us a logo; they gave us a voice. Our engagement is up 300% since the rebrand.",
    author: "Jane Doe",
    company: "TechNova Inc.",
  },
  {
    quote: "The motion graphics they produced for our product launch were stunning. They just get it.",
    author: "John Smith",
    company: "Innovate AI",
  },
  {
    quote: "Working with this team is a breath of fresh air. They push boundaries while keeping our core identity intact.",
    author: "Emily Chen",
    company: "Global Reach",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="pt-12 pb-24 sm:py-32 px-4 sm:px-12 bg-[#090909] border-t border-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <StaggerGroup className="flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-row items-center gap-4 sm:gap-8 justify-end w-full">
            <div className="h-[2px] flex-1 bg-[#5a22d4]/40"></div>
            <TextReveal
              text="WHAT THEY SAY"
              className="text-3xl sm:text-6xl md:text-8xl font-bold tracking-tighter whitespace-nowrap text-[#ffffff] shrink-0"
            />
          </div>

          <SlideUpReveal delay={0.2} className="relative mt-2 sm:mt-8">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {testimonials.map((t, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 sm:pl-8 first:pl-0">
                    <div className="flex flex-col items-center text-center max-w-[800px] mx-auto pt-4 pb-12 sm:py-12">
                      <span className="text-6xl text-[#5a22d4] font-serif leading-none opacity-50 mb-6">"</span>
                      <p className="text-lg sm:text-4xl font-medium leading-tight text-white mb-10">
                        {t.quote}
                      </p>
                      <div className="font-mono text-sm tracking-widest text-[#a8a8a8] uppercase">
                        <span className="text-white font-bold block mb-1">{t.author}</span>
                        {t.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                &larr;
              </button>
              <div className="flex gap-2 mx-4">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === selectedIndex ? 'w-8 bg-[#5a22d4]' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                &rarr;
              </button>
            </div>
          </SlideUpReveal>
        </StaggerGroup>
      </div>
    </section>
  );
}
