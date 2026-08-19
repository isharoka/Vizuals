import { SlideUpReveal, StaggerGroup, TextReveal } from "@/components/animations/Motion";

const team = [
  {
    name: "Alex Rivera",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Sarah Chen",
    role: "Lead Strategist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Marcus Johnson",
    role: "Motion Designer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Elena Rodriguez",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800",
  },
];

export function Team() {
  return (
    <section id="team" className="pt-12 pb-24 sm:pt-20 sm:pb-32 px-4 sm:px-12 bg-background border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <StaggerGroup className="flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-row items-center gap-4 sm:gap-8">
            <TextReveal
              text="THE TEAM"
              className="text-3xl sm:text-6xl md:text-8xl font-bold tracking-tighter whitespace-nowrap text-[#ffffff] shrink-0"
            />
            <SlideUpReveal delay={0.5} className="h-[2px] flex-1 bg-[#5a22d4]/40"></SlideUpReveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {team.map((member, i) => (
              <SlideUpReveal key={member.name} delay={0.2 + i * 0.15} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 p-3 sm:p-6 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-[12px] sm:text-2xl font-bold text-white">{member.name}</h3>
                    <p className="font-mono text-[8px] sm:text-xs tracking-widest text-[#5a22d4] mt-1 sm:mt-2 uppercase">{member.role}</p>
                  </div>
                </div>
              </SlideUpReveal>
            ))}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
