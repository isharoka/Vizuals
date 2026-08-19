import { SlideUpReveal, TextReveal } from "@/components/animations/Motion";
import { Link } from "@tanstack/react-router";

export function ConnectWithUs() {
  return (
    <section id="connect" className="relative py-32 sm:py-48 px-4 sm:px-12 bg-[#5a22d4] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: Text and Button */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <TextReveal
            text="LET'S BUILD SOMETHING EXTRAORDINARY"
            className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-white uppercase mb-8"
          />
          <SlideUpReveal delay={0.4}>
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-10 py-4 font-mono text-xs sm:text-sm tracking-widest text-black uppercase transition-all hover:scale-105"
            >
              <span className="relative z-10 font-bold">Start a Project</span>
              <div className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-white font-bold">
                Let's Go &rarr;
              </span>
            </Link>
          </SlideUpReveal>
        </div>

        {/* Right Side: Contact Form */}
        <SlideUpReveal delay={0.6} className="w-full w-full max-w-md mx-auto lg:mr-0 lg:ml-auto">
          <form className="flex flex-col gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-mono tracking-widest text-white/60 uppercase">Name</label>
              <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-mono tracking-widest text-white/60 uppercase">Email</label>
              <input type="email" id="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-mono tracking-widest text-white/60 uppercase">Message</label>
              <textarea id="message" rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"></textarea>
            </div>
            <button type="button" className="mt-4 w-full py-4 bg-white text-black font-bold font-mono text-sm tracking-widest uppercase rounded-xl hover:bg-gray-200 transition-colors">
              Send Message
            </button>
          </form>
        </SlideUpReveal>
      </div>
    </section>
  );
}
