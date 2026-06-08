"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play, X, ChevronDown, Map, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

const masonryImages = [
  "/images/cronica-3/masonry-1.jpg",
  "/images/cronica-3/masonry-2.jpg",
  "/images/cronica-3/masonry-3.jpg",
  "/images/cronica-3/masonry-4.jpg",
  "/images/cronica-3/masonry-5.jpg",
  "/images/cronica-3/masonry-6.jpg",
  "/images/cronica-3/masonry-7.jpg",
];

export function CronicaTres() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  
  // Fake Audio Player Animation State
  const [waveData] = useState(() => 
    Array.from({ length: 40 }).map(() => ({
      height: Math.random() * 100,
      randomTarget: Math.random() * 100,
      duration: 0.5 + Math.random(),
    }))
  );

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? masonryImages.length - 1 : prev! - 1));
    }
  }, [lightboxIndex]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === masonryImages.length - 1 ? 0 : prev! + 1));
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

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
      <section className="min-h-screen md:h-screen w-full relative flex items-center bg-[var(--color-paramo-dark)] py-24 md:py-0 pt-28 md:pt-16">
        {/* Background Blur */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-paramo-green)]/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10 w-full">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[40vh] md:h-[70vh] rounded-sm overflow-hidden shadow-2xl w-full"
          >
            <img 
              src="/images/cronica-3/author.jpg" 
              alt="Alejandro Guerrero" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paramo-dark)]/80 via-transparent to-transparent" />
            <div className="absolute top-2 right-2 md:top-4 md:right-4 z-30 text-[10px] text-white/50 font-sans tracking-wide select-none bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
              Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
            </div>
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
                Alejandro ha dedicado su vida a proteger los nacimientos de agua y los frailejones. Su organización, &quot;Cuidemos el Páramo&quot;, nació como una respuesta pacífica a años de abandono estatal y conflicto.
              </p>
              <p>
                Su filosofía es simple: si la comunidad conoce su territorio, lo defenderá. A través de la educación ambiental, ha transformado a jóvenes en guardianes del páramo.
              </p>
            </div>

            {/* Audio Player */}
            <div className="bg-[var(--color-paramo-green)]/5 backdrop-blur-md p-6 rounded-2xl border border-[var(--color-paramo-green)]/15 shadow-lg mt-12">
              <p className="font-sans text-sm text-[var(--color-paramo-green)] uppercase tracking-widest mb-4 font-semibold">
                Charla con Don Alejandro
              </p>
              <div className="flex items-center gap-6">
                <audio 
                  ref={audioRef}
                  src="/audio/testimonio.mp3" 
                  onEnded={() => setIsPlaying(false)}
                />
                <button 
                  onClick={() => {
                    if (audioRef.current) {
                      if (isPlaying) {
                        audioRef.current.pause();
                      } else {
                        audioRef.current.play().catch(e => console.log("Audio failed:", e));
                      }
                    }
                    setIsPlaying(!isPlaying);
                  }}
                  className="w-14 h-14 rounded-full bg-[var(--color-paramo-green)] text-white flex items-center justify-center hover:scale-105 transition-transform shrink-0"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                </button>
                
                <div className="flex-1 flex items-center gap-1 h-12 overflow-hidden">
                  {waveData.map((item, i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: isPlaying ? [item.height + '%', item.randomTarget + '%', item.height + '%'] : item.height * 0.3 + '%' }}
                      transition={{ duration: item.duration, repeat: Infinity }}
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
                onClick={() => setLightboxIndex(i)}
              >
                <img 
                  src={src} 
                  alt={`Actividad ambiental ${i+1}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 right-2 z-30 text-[9px] text-white/50 font-sans tracking-wide select-none bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox rendered in portal */}
      {mounted && lightboxIndex !== null && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-[var(--color-paramo-dark)]/95 backdrop-blur-xl flex items-center justify-center p-4 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-md transition-all duration-200 z-50 p-2.5 rounded-full shadow-lg"
            aria-label="Cerrar vista previa"
          >
            <X size={28} />
          </button>

          {/* Navigation - Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-md p-3.5 rounded-full transition-all duration-200 z-50 shadow-lg hover:scale-105"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image Container with motion to animate on index change */}
          <div 
            className="relative max-w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={masonryImages[lightboxIndex]} 
              alt={`Actividad ambiental ${lightboxIndex + 1}`} 
              className="max-w-[90vw] max-h-[80vh] md:max-h-[85vh] object-contain rounded-sm shadow-2xl" 
            />
            {/* Image indicator count */}
            <div className="mt-4 text-white/60 font-sans text-xs tracking-wider bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
              {lightboxIndex + 1} de {masonryImages.length}
            </div>
          </div>

          {/* Navigation - Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-md p-3.5 rounded-full transition-all duration-200 z-50 shadow-lg hover:scale-105"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={28} />
          </button>
        </div>,
        document.body
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
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-paramo-green)] text-white shadow-md hover:bg-[var(--color-paramo-moss)] hover:shadow-lg transition-all duration-300"
          >
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Siguiente: Mapa Interactivo</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
