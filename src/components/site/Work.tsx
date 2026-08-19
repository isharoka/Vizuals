import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

import brandIdentity from "@/assets/Brand Identity.webp";
import websiteBuilding from "@/assets/Website Building.webp";
import packagingDesigns from "@/assets/Packaging Designs.webp";
import productions from "@/assets/Productions.webp";
import socialMedia from "@/assets/Social Media Marketing.webp";

const projects = [
  { id: "03", title: "PACKAGING DESIGNS", type: "PACKAGING", tools: "ILLUSTRATOR, FIGMA, PHOTOSHOP", year: "2024", image: packagingDesigns, path: "/packaging-designs" },
  { id: "04", title: "PERFORMANCE MARKETING", type: "VIDEO", tools: "GOOGLE MAPS, LINKEDIN, HUBSPOT", year: "2024", image: productions, path: "/performance-marketing" },
  { id: "05", title: "SOCIAL MEDIA MARKETING", type: "MARKETING", tools: "INSTAGRAM, FACEBOOK, LINKEDIN", year: "2025", image: socialMedia, path: "/social-media" },
  { id: "06", title: "WEBSITE BUILDING", type: "WEBSITE", tools: "WORDPRESS, SHOPIFY", year: "2025", image: websiteBuilding, path: "/website-building" },
  { id: "07", title: "BRAND IDENTITY", type: "IDENTITY", tools: "ILLUSTRATOR, CANVA", year: "2023", image: brandIdentity, path: "/brand-identity" },
];

export function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const interval = setInterval(next, 2500); // Auto-advance every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="work" className="relative w-full bg-[#111] pt-12 pb-12 sm:pt-24 sm:pb-24 px-4 overflow-hidden flex flex-col items-center">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#111] to-[#0a0a0a] pointer-events-none" />
      
      <div className="relative z-10 mt-8 sm:mt-12 w-full max-w-[1400px]">
        <p className="relative z-20 text-center font-mono text-sm sm:text-base md:text-lg tracking-[0.2em] text-[#888] -mt-16 sm:mt-0 mb-16 sm:mb-20 uppercase transition-all duration-700 ease-out hover:text-white hover:tracking-[0.3em] cursor-default">
          We make brands move.
        </p>

        <div className="relative h-[40vh] sm:h-[60vh] md:h-[70vh] w-full flex items-center justify-center perspective-[2000px]">
          {projects.map((proj, i) => {
            const offset = i - activeIndex;
            const wrappedOffset = ((offset % projects.length) + projects.length) % projects.length;
            const relativeOffset = wrappedOffset > projects.length / 2 ? wrappedOffset - projects.length : wrappedOffset;

            const isActive = relativeOffset === 0;

            let rotateY = 0;
            let translateX = 0;
            let scale = 1;
            let zIndex = 100 - Math.abs(relativeOffset);
            let opacity = 1;

            if (relativeOffset < 0) {
              rotateY = 35;
              translateX = relativeOffset * 40;
              scale = 1 - Math.abs(relativeOffset) * 0.15;
              if (relativeOffset < -3) opacity = 0;
            } else if (relativeOffset > 0) {
              rotateY = -35;
              translateX = relativeOffset * 40;
              scale = 1 - Math.abs(relativeOffset) * 0.15;
              if (relativeOffset > 3) opacity = 0;
            }

            return (
              <motion.div
                key={proj.id}
                onClick={() => {
                  if (isActive) {
                    navigate({ to: proj.path });
                  } else {
                    setActiveIndex(i);
                  }
                }}
                initial={false}
                animate={{
                  rotateY,
                  x: `${translateX}%`,
                  scale,
                  zIndex,
                  opacity,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute w-full max-w-[280px] sm:max-w-[500px] md:max-w-[800px] aspect-[3/4] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer ${
                  isActive ? "group" : ""
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div 
                  className="absolute inset-0 bg-black/60 pointer-events-none transition-opacity duration-500 z-10" 
                  style={{ opacity: isActive ? 0 : 0.6 }} 
                />
                
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className={`w-full h-full object-cover transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'group-hover:scale-110' : ''}`} 
                />
                
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute inset-0 bg-black/10 group-hover:bg-black/70 transition-colors duration-700 flex flex-col justify-end p-6 sm:p-12 overflow-hidden pointer-events-none z-20"
                  >
                    <div className="transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <h3 className={`font-sans font-black tracking-tight text-white ${proj.title.length > 18 ? 'text-2xl sm:text-4xl md:text-5xl' : 'text-3xl sm:text-5xl md:text-7xl'}`}>{proj.title}</h3>
                      <p className="text-xs sm:text-sm font-mono tracking-widest text-[#5a22d4] mt-2 sm:mt-4">
                        {proj.tools}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-6 mt-12 sm:mt-20 relative z-20">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all hover:bg-white/5 active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="font-mono text-sm tracking-widest text-[#888]">
            {String(activeIndex + 1).padStart(2, '0')} <span className="text-[#333] mx-2">/</span> {String(projects.length).padStart(2, '0')}
          </div>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all hover:bg-white/5 active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
