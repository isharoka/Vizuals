import { createFileRoute } from "@tanstack/react-router";
import brandIdentityImg from "@/assets/Brand Identity.webp";

export const Route = createFileRoute("/brand-identity")({
  component: BrandIdentityPage,
});

const items = [
  {
    type: "ID Card Mockup",
    description: "Elevate your institution's professional image with our Neon Series ID card systems. Designed for high visibility and aesthetic appeal, these cards integrate seamlessly into the modern student lifestyle.",
    year: "2025",
    image: brandIdentityImg,
  },
  {
    type: "Shikha Skill and Abacus Classes Logo",
    description: "The Shikha Skill and Abacus Classes logo features a vibrant circular emblem. It integrates a lamp (diya) and abacus grid, symbolizing enlightenment and mathematical mastery through a bold red and yellow palette.",
    year: "2025",
    image: brandIdentityImg,
  },
  {
    type: "iRepair Logo",
    description: "The iRepair logo features a clean, minimalist design. It cleverly integrates a wrench silhouette into a smartphone icon, signaling technical expertise and modern, professional Apple repair services with sleek typography.",
    year: "2025",
    image: brandIdentityImg,
  },
  {
    type: "CB Builder logo",
    description: "The CB Builders logo exudes luxury and strength, featuring an interlocking gold monogram within an oval. The black and gold palette reflects premium craftsmanship and their \"Built to Last\" promise.",
    year: "2025",
    image: brandIdentityImg,
  },
  {
    type: "Tea Company Logo",
    description: "The Brabari Tea Co. logo features an earthy, circular seal. Its green and cream palette, depicting a tea cup and sprouts against a sunrise, highlights natural, handcrafted quality and freshness.",
    year: "2025",
    image: brandIdentityImg,
  },
  {
    type: "Marketing agency log",
    description: "The Creativus logo features a modern, geometric \"C\" with a faceted, 3D purple crystal effect. Its bold, clean typography and vibrant violet tones convey innovation, creativity, and a high-end digital edge.",
    year: "2025",
    image: brandIdentityImg,
  },
  {
    type: "Air BnB Logo",
    description: "The Cherish BnB logo features a rustic, woodcut-style cottage illustration framed by delicate botanicals and hearts. Its warm burgundy tones and \"Est. 2026\" mark evoke a cozy, welcoming, and timeless atmosphere.",
    year: "2025",
    image: brandIdentityImg,
  }
];

function BrandIdentityPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-white overflow-hidden relative">
      {/* Social Media Aesthetic Background */}
      <div 
        className="fixed inset-0 w-full h-full z-0 opacity-40 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/social-media-bg.png')" }}
      ></div>

      {/* Background glow matching the screenshot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] aspect-square rounded-full bg-[#5a22d4]/20 blur-[150px] pointer-events-none mix-blend-screen z-0"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10 flex flex-col gap-32">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-sans font-bold tracking-tighter text-[#5a22d4] mb-12 text-center drop-shadow-2xl">
          Brand Identity
        </h1>

        {items.map((item, index) => (
          <section key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative mb-12">
            <div className="absolute -top-[100%] left-1/4 w-[1000px] h-[1000px] bg-[#5a22d4]/30 rounded-full blur-[200px] pointer-events-none -z-10 mix-blend-screen" />

            <div className="flex flex-col gap-12 order-2 lg:order-1">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-thin tracking-wide text-white uppercase">
                INCEPTION
              </h2>
              
              <div className="flex flex-col md:flex-row gap-6 relative">
                <div className="flex flex-col gap-4 pl-4 md:pl-6 border-l border-white/40 md:w-[30%]">
                  <h3 className="text-xs md:text-sm font-sans tracking-widest text-white/70 uppercase">Type</h3>
                  <p className="text-white text-sm md:text-base font-sans">{item.type}</p>
                </div>
                
                <div className="flex flex-col gap-4 pl-4 md:pl-6 border-l border-white/40 md:w-[50%]">
                  <h3 className="text-xs md:text-sm font-sans tracking-widest text-white/70 uppercase">Description</h3>
                  <p className="text-white text-xs md:text-sm font-sans leading-relaxed text-white/90">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4 pl-4 md:pl-6 border-l border-white/40 md:w-[20%]">
                  <h3 className="text-xs md:text-sm font-sans tracking-widest text-white/70 uppercase">Year</h3>
                  <p className="text-white text-sm md:text-base font-sans">{item.year}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end w-full order-1 lg:order-2">
               <img src={item.image} alt={item.type} className="w-full max-w-[600px] object-cover rounded-sm shadow-2xl" />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
