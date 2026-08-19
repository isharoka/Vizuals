import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectInquiryModal({ isOpen, onClose }: ProjectInquiryModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://i.pinimg.com/736x/9f/0f/e0/9f0fe0966f01f2b041552ca866f5dd3a.jpg")' }}
          />
          {/* Backdrop Darkening Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[620px] bg-white/5 backdrop-blur-xl border border-white/20 rounded-[24px] p-6 sm:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#8f8f9a] hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>


            
            <h1 className="text-3xl sm:text-4xl font-black tracking-[0.5px] mb-2 leading-[1.15] text-white">
              Got an idea?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CF5] to-[#8B5CF6]">
                Let's give it a direction.
              </span>
            </h1>
            
            <p className="text-[#8f8f9a] text-[15px] leading-[1.6] mb-9">
              No idea is too rough. Fill this out and we'll get back to you within 24–48 hours to talk it through.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll be in touch soon.");
                onClose();
              }}
              className="flex flex-col gap-6"
            >
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold tracking-[1px] uppercase text-white/80">
                    Name<span className="text-white ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                    className="w-full bg-transparent border border-white/20 rounded-[12px] py-[14px] px-[16px] text-white text-[15px] outline-none focus:border-white/50 focus:bg-white/5 transition-colors placeholder:text-white/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold tracking-[1px] uppercase text-white/80">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full bg-transparent border border-white/20 rounded-[12px] py-[14px] px-[16px] text-white text-[15px] outline-none focus:border-white/50 focus:bg-white/5 transition-colors placeholder:text-white/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                  />
                </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold tracking-[1px] uppercase text-white/80">
                  WhatsApp / Phone<span className="text-white ml-1">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full bg-transparent border border-white/20 rounded-[12px] py-[14px] px-[16px] text-white text-[15px] outline-none focus:border-white/50 focus:bg-white/5 transition-colors placeholder:text-white/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                />
              </div>



              <button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-[#9b6ef9] to-[#7139f5] text-white border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] rounded-[12px] py-[17px] text-[16px] font-bold tracking-[1px] uppercase hover:brightness-110 transition-all active:scale-[0.98]"
              >
                LET'S TALK
              </button>
            </form>

            <div className="text-center text-white/80 text-[13px] mt-6 hover:text-white transition-colors cursor-pointer">
              Prefer to chat directly? Message us on WhatsApp instead.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
