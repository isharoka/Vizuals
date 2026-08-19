import { SlideUpReveal, StaggerGroup, StaggerItem, TextReveal } from "@/components/animations/Motion";
import { SplitText } from "./SplitText";
import { ScrambleText } from "./ScrambleText";
import { AsciiCanvas } from "./AsciiCanvas";

const stats = [
  ["Brands shaped", "15+"],
  ["Years of craft", "3"],
  ["Clients Handling", "53+"],
];

export function Studio() {
  return (
    <section id="studio" className="relative border-t border-border px-4 pt-10 pb-8 sm:py-24 overflow-hidden bg-background">
      <div className="relative z-10 flex flex-col items-center text-center max-w-[1000px] mx-auto pointer-events-none">
        <StaggerGroup className="min-w-0 w-full pointer-events-auto">
          <TextReveal
            text="We're Vizuals — a marketing studio for brands that don't want to look like everyone else."
            className="text-lg leading-[1.25] font-medium tracking-tight sm:text-5xl lg:text-6xl w-full justify-center"
            delay={0.2}
          />
          <StaggerItem className="mt-10 font-mono text-sm sm:text-[18px] leading-relaxed text-foreground/80 w-full max-w-none transition-colors duration-500 hover:text-white cursor-default">
            Every brand has something worth saying. We uncover it, shape it, and get it in front of the right audience.
          </StaggerItem>

          <dl className="mt-10 sm:mt-20 w-full grid grid-cols-3 gap-2 sm:gap-8 border-t border-[#5a22d4]/40 pt-6 sm:pt-8">
            {stats.map(([label, value], i) => (
              <div 
                key={label} 
                className={`min-w-0 ${i === 0 ? 'text-left' : i === 1 ? 'text-center' : 'text-right'}`}
              >
                <dt className="font-mono text-[8px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.2em] text-[#a8a8a8] uppercase">
                  {label}
                </dt>
                <dd className="mt-1 sm:mt-3 text-2xl sm:text-4xl font-medium tracking-tight md:text-5xl text-white">
                  <ScrambleText text={value} />
                </dd>
              </div>
            ))}
          </dl>
        </StaggerGroup>
      </div>
    </section>
  );
}
