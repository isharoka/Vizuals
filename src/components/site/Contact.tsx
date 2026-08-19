import { SlideUpReveal } from "@/components/animations/Motion";
import logoImg from "../../../Logo/VIZUALS.jpeg";
import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Contact() {
  return (
    <footer id="contact" className="relative bg-[#050505] pt-24 pb-12 overflow-hidden border-t border-white/10">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-12 xl:gap-8 mb-20">
          
          {/* Column 1: Brand & Info */}
          <div className="xl:col-span-5 flex flex-col gap-6">
            <SlideUpReveal>
              <img src={logoImg} alt="Vizuals" className="h-12 w-auto object-contain rounded-md mb-4" />
              <h2 className="text-lg sm:text-3xl md:text-4xl font-sans font-bold text-white leading-tight mb-4 max-w-md">
                The outcome-first marketing studio for the next generation of <span className="text-[#5a22d4]">creative brands.</span>
              </h2>
              <p className="text-muted-foreground text-sm font-sans mb-8 max-w-md leading-relaxed">
                Run by active creators,<br />structured around real client work.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/vizuals_labs/" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/vizualsin/" },
                  { Icon: Phone, href: "tel:+917602994688" }
                ].map(({ Icon, href }, idx) => (
                  <a key={idx} href={href} className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white/70 hover:text-[#5a22d4] hover:border-[#5a22d4] transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </SlideUpReveal>
          </div>

          {/* Column 2: Services */}
          <div className="xl:col-span-3 flex flex-col gap-6">
            <SlideUpReveal delay={0.1}>
              <h3 className="text-[#5a22d4] font-mono tracking-widest text-xs uppercase font-bold mb-4 pb-4 border-b border-white/10">Services</h3>
              <ul className="flex flex-col text-white/80 font-sans text-sm">
                <li className="border-b border-white/10 py-4"><Link to="/performance-marketing" className="hover:text-white transition-colors">Performance Marketing</Link></li>
                <li className="border-b border-white/10 py-4"><Link to="/social-media" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
                <li className="border-b border-white/10 py-4"><Link to="/website-building" className="hover:text-white transition-colors">Website Building</Link></li>
                <li className="border-b border-white/10 py-4"><Link to="/brand-identity" className="hover:text-white transition-colors">Brand Identity</Link></li>
                <li className="py-4"><Link to="/packaging-designs" className="hover:text-white transition-colors">Packaging Designs</Link></li>
              </ul>
            </SlideUpReveal>
          </div>


          {/* Column 4: Contact Info */}
          <div className="xl:col-span-4 flex flex-col gap-8">
            <SlideUpReveal delay={0.3}>
              <h3 className="text-[#5a22d4] font-mono tracking-widest text-xs uppercase font-bold mb-6 pb-4 border-b border-white/10">Contact</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#5a22d4] flex items-center justify-center shrink-0 text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[#5a22d4] text-xs font-bold tracking-wider mb-1">CALL US</p>
                    <p className="text-white text-sm font-sans">+91 7602994688</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#5a22d4] flex items-center justify-center shrink-0 text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[#5a22d4] text-xs font-bold tracking-wider mb-1">EMAIL US</p>
                    <p className="text-white text-sm font-sans">info@vizuals.in</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#5a22d4] flex items-center justify-center shrink-0 text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[#5a22d4] text-xs font-bold tracking-wider mb-1">ADDRESS</p>
                    <p className="text-white/80 text-sm font-sans leading-relaxed">
                      Near, Buddha Mandir Rd, Ashraf<br />
                      Nagar, Haidar Para,<br />
                      Siliguri, West Bengal 734001
                    </p>
                  </div>
                </div>
                
                <a
                  href="https://www.google.com/maps/place/Vizuals+Marketing+Agency/@26.7277034,88.4409361,17z/data=!3m1!4b1!4m6!3m5!1s0x39e441b26b4d34af:0x800ba080288ee0c1!8m2!3d26.7277034!4d88.4409361!16s%2Fg%2F11nq2vf_5h!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-3 rounded-full bg-[#5a22d4] px-6 py-3 font-sans text-sm font-bold text-white transition-all hover:scale-105 mt-4"
                >
                  <span>GET DIRECTION</span>
                  <span className="bg-black text-white text-[10px] px-3 py-1 rounded-full">MAP</span>
                </a>
              </div>
            </SlideUpReveal>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm font-sans">
            © 2024 Vizuals. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-sm font-sans">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-px h-4 bg-white/20"></span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

