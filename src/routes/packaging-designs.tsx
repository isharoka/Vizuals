import { createFileRoute } from "@tanstack/react-router";
import brandIdentityImg from "@/assets/Brand Identity.webp"; // Using as placeholder

export const Route = createFileRoute("/packaging-designs")({
  component: PackagingDesignsPage,
});

const packages = [
  {
    title: "Raang De",
    description: "Celebrate the festival of colors with the Raang De collection—bringing vibrant energy from the shelf to your home.",
    image: brandIdentityImg,
  },
  {
    title: "Farabari Tea Co.",
    description: "Tradition meets taste—discover the handcrafted elegance of Farabari Tea Co.'s premium selection.",
    image: brandIdentityImg,
  },
  {
    title: "Misaan Tea",
    description: "Experience the art of tea with our premium hand-picked leaves, elegantly packaged for the modern connoisseur.",
    image: brandIdentityImg,
  },
  {
    title: "Orgreenik Rose Tea",
    description: "Indulge in the delicate essence of Orgreenik Rose Tea—where luxury packaging meets the pure beauty of nature.",
    image: brandIdentityImg,
  },
  {
    title: "Vartoh Organic Honey Box",
    description: "Pure wellness from Himalayan farms—discover the rare and delicate taste of VARTOH organic Stingless Honey.",
    image: brandIdentityImg,
  },
  {
    title: "SRT Seeds",
    description: "Fuel your day with nature’s power—discover the full range of SAT premium Pumpkin, Flax, and Chia seeds.",
    image: brandIdentityImg,
  },
  {
    title: "Belgian Ice-cream",
    description: "Treat yourself to a swirl of perfection—explore the decadent world of Coated Toppings premium gelato.",
    image: brandIdentityImg,
  },
  {
    title: "Misaan Gift Box",
    description: "Spread the warmth of the season with the MISAAN Christmas Coffee Collection—a perfect blend of holiday cheer and premium flavor.",
    image: brandIdentityImg,
  }
];

function PackagingDesignsPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-white overflow-hidden relative">
      {/* Background glow elements */}
      <div className="absolute top-0 right-1/4 w-full max-w-[800px] aspect-square rounded-full bg-[#5a22d4]/10 blur-[150px] pointer-events-none mix-blend-screen z-0"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-sans font-bold tracking-tighter text-[#5a22d4] mb-20 text-center drop-shadow-2xl">
          Packaging Designs
        </h1>

        <div className="flex flex-col w-full gap-32 lg:gap-40">
          {packages.map((pkg, index) => (
            <section key={index} className="flex flex-col items-center gap-8 w-full max-w-[1000px] mx-auto">
              {/* Image Section */}
              <div className="relative group w-full">
                {/* Glowing effect behind the image */}
                <div className="absolute inset-0 bg-[#5a22d4]/20 blur-[60px] opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none rounded-xl"></div>
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-auto object-cover shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col items-center text-center gap-4 px-4">
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#5a22d4] tracking-tight drop-shadow-md">
                  {pkg.title}
                </h2>
                
                <p className="text-[#e3e3e3] text-lg md:text-xl font-sans leading-relaxed max-w-3xl">
                  {pkg.description}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
