import { useState, useRef, useEffect } from "react";
import heroImage from "@/assets/Homepage.jpeg";
import { AsciiCanvas } from "./AsciiCanvas";
import { FadeIn, SlideUpReveal } from "@/components/animations/Motion";
import { ScrambleCarousel } from "./ScrambleCarousel";
import { ScrambleText } from "./ScrambleText";

const columns = [
  { title: "Production", items: ["Video Production", "Photography", "Product Shoots", "Ad Film Production"] },
  { title: "Marketing", items: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Performance Marketing", "Brand Strategy"] },
  { title: "Sales", items: ["Lead Generation", "Client Relationship Management", "Business Development", "Conversion Rate Optimization (CRO)"] },
];

export function Hero() {
  const [isAsciiMode, setIsAsciiMode] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Track mouse globally for the floating image
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (hoveredItem) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredItem]);

  return (
    <section 
      id="top" 
      className="relative min-h-screen w-full overflow-hidden bg-black"
      onPointerEnter={() => setIsAsciiMode(true)}
      onPointerLeave={() => setIsAsciiMode(false)}
    >
      {isAsciiMode ? (
        <AsciiCanvas variant="interactive" />
      ) : (
        <img
          src={heroImage}
          alt="Abstract amber light streaks through darkness"
          width={1920}
          height={1088}
          className="vz-drift absolute inset-0 h-full w-full object-cover opacity-90"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/25 to-background pointer-events-none" />

      <div className="relative flex min-h-screen flex-col justify-between px-4 pt-24 pb-6 pointer-events-none">
        <div className="pointer-events-auto">
          <FadeIn delay={0.2} className="mt-8 pt-8 ml-4 sm:ml-20 md:ml-32 max-w-5xl text-[7vw] leading-[1.1] font-medium tracking-tight sm:text-[4.5vw]">
            <span className="block font-roboto font-thin text-[6vw] sm:text-[3.5vw] text-foreground/80 mb-2">We specialize in</span>
            <ScrambleCarousel
              words={["Performance Marketing", "Graphic Designing", "Video Editing", "Digital Marketing", "Brand Identity", "Photography", "Videography"]}
              className="block text-white text-[9.5vw] sm:text-[8vw] md:text-[6vw] leading-none tracking-tighter"
            />
          </FadeIn>
        </div>

        <div className="grid grid-cols-3 gap-1 sm:gap-8 pb-10 pointer-events-auto px-1 sm:px-0">
          {columns.map((col, i) => (
            <SlideUpReveal
              key={col.title}
              className="min-w-0 font-mono text-[9px] sm:text-[12px] text-center"
              delay={0.5 + i * 0.15}
            >
              <div className="inline-block text-left">
                <p className="mb-2 sm:mb-3 text-[7px] sm:text-[10px] tracking-normal sm:tracking-[0.2em] text-muted-foreground/70 uppercase">
                  {col.title}
                </p>
                <ul className="space-y-1 sm:space-y-1.5">
                  {col.items.map((item) => (
                    <li 
                      key={item}
                      onMouseEnter={(e) => {
                        setHoveredItem(item);
                        setMousePos({ x: e.clientX, y: e.clientY });
                      }}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <ScrambleText text={item} className="vz-link text-[6.5px] sm:text-[12px] tracking-tighter sm:tracking-normal leading-[1.1] break-words" />
                    </li>
                  ))}
                </ul>
              </div>
            </SlideUpReveal>
          ))}
        </div>

        <FadeIn
          className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-8 font-mono text-sm tracking-[0.15em] text-foreground uppercase pointer-events-auto px-1 sm:px-0"
          delay={0.8}
        >
          <div className="hidden sm:block"></div>
          <div className="text-center">
            <span className="inline-block whitespace-nowrap text-left sm:-ml-6 lg:-ml-12 transition-all duration-500 hover:text-white hover:tracking-[0.2em] cursor-default text-muted-foreground hover:text-foreground">
              Where Brands Level Up
            </span>
          </div>
          <div className="hidden sm:block"></div>
        </FadeIn>
      </div>

      {/* Floating Image Tracker */}
      <div 
        className={`fixed top-0 left-0 w-64 h-40 pointer-events-none z-50 overflow-hidden rounded-xl bg-muted border border-border/50 shadow-2xl transition-all duration-300 ease-out ${hoveredItem ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        style={{
          transform: `translate3d(${mousePos.x + 20}px, ${mousePos.y - 80}px, 0)`,
          willChange: 'transform'
        }}
      >
        <img 
          src={heroImage} 
          alt="Service preview" 
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-white">{hoveredItem}</p>
        </div>
      </div>
    </section>
  );
}
