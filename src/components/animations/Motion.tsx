import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";

interface MotionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export function FadeIn({ children, delay = 0, className, ...props }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideUpReveal({ children, delay = 0, className, ...props }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotate: 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className, ...props }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...props }: MotionProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotate: 5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      style={{ display: "flex", flexWrap: "wrap", gap: "0.25em", overflow: "hidden" }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} style={{ overflow: "hidden", display: "inline-block" }}>
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}

