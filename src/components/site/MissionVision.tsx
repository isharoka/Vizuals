import { Link } from "@tanstack/react-router";
import { SlideUpReveal, StaggerGroup, TextReveal } from "@/components/animations/Motion";

export function MissionVision() {
  return (
    <section id="mission-vision" className="px-4 pt-8 pb-10 sm:py-24 mx-auto max-w-[1400px]">
      <StaggerGroup className="flex flex-col gap-12 lg:gap-20">
        {/* Header Section */}
        <div className="flex flex-row items-center gap-4 sm:gap-8">
          <TextReveal
            text="WHO WE ARE"
            className="text-3xl sm:text-6xl md:text-8xl font-semibold tracking-tight whitespace-nowrap text-[#ffffff] shrink-0"
          />
          <SlideUpReveal delay={0.5} className="h-[2px] flex-1 bg-[#5a22d4]/40"></SlideUpReveal>
        </div>

        {/* Grid Section */}
        <div className="grid xl:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission */}
          <SlideUpReveal delay={0.2} className="flex flex-col gap-6">
            <div className="flex items-center gap-6 text-lg sm:text-2xl font-light uppercase tracking-[0.15em] text-foreground/90">
              <span className="text-[60px] font-thin text-[#5a22d4] leading-none mb-2">+</span>
              Mission
            </div>
            
            <div className="flex flex-row bg-gradient-to-br from-[#14082c] to-[#090314] border border-[#301968]/40 rounded-2xl overflow-hidden shadow-2xl h-full p-3 sm:p-6 gap-3 sm:gap-10">
              {/* Text Side */}
              <div className="flex flex-col justify-between flex-1 py-1 lg:py-6">
                <p className="text-[10px] sm:text-[18px] lg:text-[20px] leading-snug font-medium text-foreground/90">
                  We help brands discover what makes them different — then shape it into strategy, design, and marketing that's honest, not generic.
                </p>
                <div className="w-3 h-3 sm:w-5 sm:h-5 bg-[#5a22d4] rounded-sm mt-4 sm:mt-auto"></div>
              </div>
              {/* Image Side */}
              <div className="flex-1 shrink-0 h-auto overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Team working" 
                  className="w-full h-full object-cover filter contrast-125 saturate-50 transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </SlideUpReveal>

          {/* Vision */}
          <SlideUpReveal delay={0.4} className="flex flex-col gap-6">
            <div className="flex items-center justify-end gap-6 text-lg sm:text-2xl font-light uppercase tracking-[0.15em] text-foreground/90">
              Vision
              <span className="text-[60px] font-thin text-[#5a22d4] leading-none mb-2">+</span>
            </div>
            
            <div className="flex flex-row bg-gradient-to-br from-[#090314] to-[#14082c] border border-[#301968]/40 rounded-2xl overflow-hidden shadow-2xl h-full p-3 sm:p-6 gap-3 sm:gap-10">
              {/* Image Side */}
              <div className="flex-1 shrink-0 h-auto overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" 
                  alt="Person working" 
                  className="w-full h-full object-cover filter contrast-125 saturate-50 transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Text Side */}
              <div className="flex flex-col justify-between flex-1 py-1 lg:py-6">
                <div className="w-3 h-3 sm:w-5 sm:h-5 border-[1px] sm:border-[1.5px] border-[#5a22d4] rounded-sm self-start mb-4 sm:mb-0"></div>
                <p className="text-[10px] sm:text-[18px] lg:text-[20px] leading-snug font-medium text-foreground/90 mt-auto">
                  We imagine a world where brands stop trying to fit in — where being different isn't a risk, but the whole point. Brands get remembered because they didn't blend in.
                </p>
              </div>
            </div>
          </SlideUpReveal>

        </div>

      </StaggerGroup>
    </section>
  );
}

