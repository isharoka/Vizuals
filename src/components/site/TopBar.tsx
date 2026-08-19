import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logoImg from "../../../Logo/VIZUALS.jpeg";

const links: { label: string; href: string }[] = [];

export function TopBar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 sm:px-8 border-b border-border/70 backdrop-blur-xl"
    >
      <div className="flex-1 flex justify-start">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex min-w-0 items-center justify-center gap-1 sm:gap-2 py-2"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src={logoImg}
            alt="Vizuals logo"
            className="h-8 sm:h-12 w-auto object-contain"
          />
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <button
          onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          className="font-mono text-[11px] sm:text-[13px] tracking-[0.12em] text-muted-foreground uppercase transition-colors duration-500 hover:text-white"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Work
          </motion.span>
        </button>
      </div>

      <div className="flex-1 flex justify-end">
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="font-mono text-[11px] sm:text-[13px] tracking-[0.12em] text-muted-foreground uppercase transition-colors duration-500 hover:text-white"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Contact
          </motion.span>
        </button>
      </div>
    </motion.header>
  );
}
