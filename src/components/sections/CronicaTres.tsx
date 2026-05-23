"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play, X, ChevronDown, Map } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

const masonryImages = [
  "https://images.unsplash.com/photo-1542224566-6e85f2e772f?q=80&w=800&auto=format&fit=crop",
  "/images/cronica-3/masonry-2.jpg",
  "/images/cronica-3/masonry-3.jpg",
  "/images/cronica-3/masonry-4.jpg",
  "/images/cronica-3/masonry-5.jpg",
  "/images/cronica-3/masonry-6.jpg",
];

export function CronicaTres() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  
  // Fake Audio Player Animation State
  const waveHeights = Array.from({ length: 40 }).map(() => Math.random() * 100);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <div id="cronica-3" className="relative w-full bg-[var(--color-paramo-dark)] text-[var(--color-paramo-bone)] overflow-hidden">
      
      {/* Sección Hero: Desvanecimiento al scrollear */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[var(--color-paramo-dark)]">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/cronica-3/bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/45" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white drop-shadow-2xl"
          >
            Crónica 3
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-xl md:text-3xl font-serif italic text-[var(--color-paramo-yellow)] drop-shadow-md"
          >
            La voz de la tierra y la memoria.
          </motion.p>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="text-white w-8 h-8 opacity-70" />
        </motion.div>
      </section>

      {/* Profile Section */}
      <section className="h-screen w-full relative flex items-center bg-[var(--color-paramo-dark)] pt-16">
        {/* Background Blur */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-paramo-green)]/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10 w-full">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[60vh] md:h-[70vh] rounded-sm overflow-hidden shadow-2xl"
          >
            <img 
              src="/images/cronica-3/author.jpg" 
              alt="Alejandro Guerrero" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paramo-dark)]/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="font-serif text-3xl text-white">Alejandro Guerrero</h3>
              <p className="font-sans text-white/70 text-sm uppercase tracking-widest mt-1">Líder Ambiental</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-[var(--color-paramo-green)] leading-tight">
              La voz de la montaña.
            </h2>
            <div className="font-sans space-y-6 text-lg text-[var(--color-paramo-bone)]/90 leading-relaxed">
              <p>
                Alejandro ha dedicado su vida a proteger los nacimientos de agua y los frailejones. Su organización, "Cuidemos el Páramo", nació como una respuesta pacífica a años de abandono estatal y conflicto.
              </p>
              <p>
                Su filosofía es simple: si la comunidad conoce su territorio, lo defenderá. A través de la educación ambiental, ha transformado a jóvenes en guardianes del páramo.
              </p>
            </div>

            {/* Audio Player */}
            <div className="bg-[var(--color-paramo-green)]/5 backdrop-blur-md p-6 rounded-2xl border border-[var(--color-paramo-green)]/15 shadow-lg mt-12">
              <p className="font-sans text-sm text-[var(--color-paramo-green)] uppercase tracking-widest mb-4 font-semibold">
                Escucha su testimonio
              </p>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 rounded-full bg-[var(--color-paramo-green)] text-white flex items-center justify-center hover:scale-105 transition-transform shrink-0"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                </button>
                
                <div className="flex-1 flex items-center gap-1 h-12 overflow-hidden">
                  {waveHeights.map((h, i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: isPlaying ? [h + '%', Math.random() * 100 + '%', h + '%'] : h * 0.3 + '%' }}
                      transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                      className={clsx(
                        "w-1.5 rounded-full transition-colors",
                        isPlaying ? "bg-[var(--color-paramo-yellow)]" : "bg-[var(--color-paramo-moss)]/30"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Galeria Masonry */}
      <section className="min-h-screen w-full relative flex items-center bg-[var(--color-paramo-dark)] py-24">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h3 className="font-serif text-3xl md:text-5xl text-center mb-16 text-[var(--color-paramo-green)]">Acción en el territorio</h3>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {masonryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.2 }}
                className="break-inside-avoid overflow-hidden rounded-sm cursor-pointer group"
                onClick={() => setLightboxImg(src)}
              >
                <img 
                  src={src} 
                  alt={`Actividad ambiental ${i+1}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-[var(--color-paramo-dark)]/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button 
            onClick={() => setLightboxImg(null)}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
          <img src={lightboxImg} alt="Enlarged" className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl" />
        </div>
      )}

      <section className="py-16 w-full border-t border-[var(--color-paramo-bone)]/10 bg-[var(--color-paramo-dark)]">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto w-full px-4 gap-4">
          <Link 
            href="/cronica/2"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-paramo-green)]/20 bg-white text-[var(--color-paramo-green)] shadow-sm hover:bg-[var(--color-paramo-green)] hover:text-white hover:border-transparent transition-all duration-300"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Atrás: Crónica 2</span>
          </Link>
          
          <Link 
            href="/mapa"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-paramo-green)]/25 bg-white text-[var(--color-paramo-green)] shadow-sm hover:bg-[var(--color-paramo-green)] hover:text-white hover:border-transparent transition-all duration-300"
          >
            <Map size={18} className="group-hover:scale-110 transition-transform" />
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Mapa Interactivo</span>
          </Link>
          
          <Link 
            href="/articulo"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-paramo-green)] text-white shadow-md hover:bg-[var(--color-paramo-moss)] hover:shadow-lg transition-all duration-300"
          >
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Siguiente: Artículo</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
