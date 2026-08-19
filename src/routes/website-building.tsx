import { createFileRoute } from "@tanstack/react-router";
import brandIdentityImg from "@/assets/Brand Identity.webp"; // Using as placeholder

export const Route = createFileRoute("/website-building")({
  component: WebsiteBuildingPage,
});

const websites = [
  {
    title: "Udyan Tea",
    description: "Revamped Udyan Tea's website for the first time since 2017, enhancing all pages, including the homepage and cart, to modernize visuals and reflect the brand's prestige.",
    buttons: ["Prototype", "Website"],
    image: brandIdentityImg,
  },
  {
    title: "Homified",
    description: "Designed a seamless user flow from homepage to checkout, including product and cart pages, to establish a distinct tech-centric identity.",
    buttons: ["Prototype"],
    image: brandIdentityImg,
  },
  {
    title: "Sunova",
    description: "Designed a seamless user flow from homepage to checkout, including product and cart pages, to establish a distinct tech-centric identity.",
    buttons: ["Prototype", "Website"],
    image: brandIdentityImg,
  },
  {
    title: "E-shop Genius",
    description: "Designed an interactive, highly animated website with a bold aesthetic, showcasing top clients like Beardo and Lakme.",
    buttons: ["Prototype", "Website"],
    image: brandIdentityImg,
  },
  {
    title: "Ayush Care",
    description: "Designed a seamless user flow from homepage to checkout, balancing product listings with Ayurveda education while showcasing various brands",
    buttons: ["Prototype", "Website"],
    image: brandIdentityImg,
  },
  {
    title: "Waggin",
    description: "Revamped the homepage and product page with a custom UI, handmade icons, and an engaging layout for a seamless, mobile-optimized experience",
    buttons: ["Prototype", "Website"],
    image: brandIdentityImg,
  }
];

function WebsiteBuildingPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-white overflow-hidden relative">
      {/* Background glow elements */}
      <div className="absolute top-0 right-0 w-full max-w-[1000px] aspect-square rounded-full bg-[#5a22d4]/10 blur-[150px] pointer-events-none mix-blend-screen z-0 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-full max-w-[800px] aspect-square rounded-full bg-[#5a22d4]/5 blur-[120px] pointer-events-none mix-blend-screen z-0 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10 flex flex-col gap-32">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-sans font-bold tracking-tighter text-[#5a22d4] mb-12 text-center drop-shadow-2xl">
          Website Building
        </h1>

        <div className="flex flex-col gap-32">
          {websites.map((site, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <section key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Image Section */}
                <div className={`flex justify-center ${isImageLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <div className="relative group w-full max-w-[600px]">
                    {/* Glowing effect behind the image */}
                    <div className="absolute inset-0 bg-[#5a22d4]/20 blur-[50px] opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>
                    <img 
                      src={site.image} 
                      alt={site.title} 
                      className="w-full h-auto object-cover rounded-md shadow-2xl relative z-10"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className={`flex flex-col items-center text-center justify-center gap-8 ${isImageLeft ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-[#5a22d4] tracking-tight">
                    {site.title}
                  </h2>
                  
                  <p className="text-[#e3e3e3] text-lg md:text-xl font-sans leading-relaxed max-w-lg">
                    {site.description}
                  </p>

                  <div className="flex flex-wrap gap-6 justify-center mt-4">
                    {site.buttons.map((btn, btnIdx) => (
                      <button 
                        key={btnIdx}
                        className="bg-[#5a22d4] text-white font-semibold font-sans py-3 px-10 rounded shadow-[0_0_15px_rgba(90,34,212,0.3)] hover:shadow-[0_0_25px_rgba(90,34,212,0.6)] hover:bg-[#6b33e5] hover:-translate-y-1 transition-all duration-300"
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>
                
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
