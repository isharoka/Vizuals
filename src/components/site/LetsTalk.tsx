import { SlideUpReveal } from "@/components/animations/Motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ProjectInquiryModal } from "./ProjectInquiryModal";

export function LetsTalk() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="lets-talk" className="relative py-16 sm:py-48 px-4 sm:px-12 bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background elements to mimic the subtle floating glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        <SlideUpReveal delay={0.1}>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-[0.2em] text-white uppercase mb-2">
            LET'S TURN YOUR IDEA
          </h2>
        </SlideUpReveal>

        <SlideUpReveal delay={0.2} className="relative inline-block mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem] font-sans font-black tracking-tighter text-[#8b5cf6] uppercase leading-none whitespace-nowrap">
            INTO SOMETHING REAL
          </h2>
          <div className="absolute -bottom-4 left-0 right-0 h-[2px] bg-[#8b5cf6]/50" />
        </SlideUpReveal>

        <SlideUpReveal delay={0.3} className="max-w-[700px] mb-12">
          <p className="text-xs sm:text-sm font-mono text-muted-foreground uppercase tracking-widest leading-relaxed">
            NO IDEA IS TOO ROUGH. SHARE THE SPARK, THE GOAL, AND THE MESS IN BETWEEN — WE'LL SHAPE IT INTO SOMETHING WORTH SHOWING OFF.
          </p>
        </SlideUpReveal>

        <SlideUpReveal delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/917602994688"
            target="_blank"
            rel="noopener noreferrer"
            onTouchStart={() => {}}
            className="group flex items-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 font-mono text-xs sm:text-sm tracking-widest text-white uppercase transition-all duration-300 hover:bg-[#8b5cf6] hover:border-[#8b5cf6] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] active:bg-[#8b5cf6] active:border-[#8b5cf6] active:shadow-[0_0_30px_rgba(139,92,246,0.4)] active:duration-0"
          >
            <span>CHAT ON WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-active:-translate-y-1 group-active:translate-x-1 active:duration-0" />
          </a>
          
          <button
            onClick={() => setIsModalOpen(true)}
            onTouchStart={() => {}}
            className="group flex items-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 font-mono text-xs sm:text-sm tracking-widest text-white uppercase transition-all duration-300 hover:bg-[#8b5cf6] hover:border-[#8b5cf6] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] active:bg-[#8b5cf6] active:border-[#8b5cf6] active:shadow-[0_0_30px_rgba(139,92,246,0.4)] active:duration-0"
          >
            <span>START HERE</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-active:-translate-y-1 group-active:translate-x-1 active:duration-0" />
          </button>
        </SlideUpReveal>
      </div>

      <ProjectInquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
