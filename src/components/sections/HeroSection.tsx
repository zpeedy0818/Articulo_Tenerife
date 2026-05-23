"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[var(--color-paramo-dark)]">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero/bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white leading-tight drop-shadow-2xl font-bold tracking-tight">
            Tenerife
          </h1>
          
          <div className="h-[2px] w-32 bg-[var(--color-paramo-yellow)] mx-auto" />

          <p className="font-serif text-2xl md:text-4xl text-[var(--color-paramo-yellow)] italic max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            turismo para la desestigmatización del territorio
          </p>
          
          <p className="font-sans text-sm md:text-base text-white/80 max-w-md mx-auto tracking-widest uppercase font-semibold drop-shadow-md">
            Memoria, conservación y paz en las cumbres del Valle del Cauca
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link 
              href="/cronica/1" 
              className="px-8 py-3.5 rounded-full bg-[var(--color-paramo-yellow)] hover:bg-white text-black font-sans text-sm uppercase tracking-widest font-bold hover:scale-105 transition-all duration-300 shadow-lg shadow-black/20"
            >
              Comenzar Crónicas
            </Link>
            <Link 
              href="/mapa" 
              className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/25 hover:bg-white hover:text-black font-sans text-sm uppercase tracking-widest font-bold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Mapa Interactivo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
