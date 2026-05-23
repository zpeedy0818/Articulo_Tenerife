"use client";

import { motion } from "framer-motion";

export function FogOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden mix-blend-screen opacity-80">
      <motion.div
        animate={{
          x: ["-10%", "0%", "-10%"],
          y: ["0%", "-2%", "0%"],
        }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ 
          backgroundImage: "url('/images/fog/fog-1.jpg')",
          filter: "contrast(1.2) brightness(1.2)"
        }}
        className="absolute -inset-[50%] h-[200%] w-[200%] bg-cover bg-center opacity-70 blur-2xl"
      />
      <motion.div
        animate={{
          x: ["0%", "-15%", "0%"],
          y: ["-5%", "0%", "-5%"],
        }}
        transition={{
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ 
          backgroundImage: "url('/images/fog/fog-2.jpg')",
          filter: "contrast(1.2) brightness(1.2)"
        }}
        className="absolute -inset-[50%] h-[200%] w-[200%] bg-cover bg-center opacity-60 blur-xl"
      />
    </div>
  );
}
