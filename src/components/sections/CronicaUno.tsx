"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const galleryImages = [
  { id: 1, url: "/images/cronica-1/slider-1.jpg", caption: "El páramo, fuente inagotable de agua y vida." },
  { id: 2, url: "/images/cronica-1/slider-2.jpg", caption: "Frailejones que custodian las montañas nubladas." },
  { id: 3, url: "/images/cronica-1/slider-3.jpg", caption: "Senderos que conectan la memoria con la conservación." },
];

export function CronicaUno() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div id="cronica-1" ref={containerRef} className="relative w-full bg-[var(--color-paramo-dark)] text-[var(--color-foreground)]">
      
      {/* Sección Cero: Continuación del Viaje (Hero Persistente) */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[var(--color-paramo-dark)]">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/cronica-1/bg.jpg')" }}
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
            Crónica 1
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-xl md:text-3xl font-serif italic text-[var(--color-paramo-yellow)] drop-shadow-md"
          >
            El territorio de los frailejones eternos.
          </motion.p>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="text-white w-8 h-8 opacity-70" />
        </motion.div>

        {/* Citation */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute bottom-4 right-4 z-30 text-[10px] text-white/30 font-sans tracking-wide select-none"
        >
          Foto: Tascón Caicedo, V. (2026). Paisaje camino a Tenerife [Fotografía]. Archivo personal.
        </motion.div>
      </section>

      {/* Primer Bloque: Texto e Imagen */}
      <section className="min-h-screen md:h-screen w-full snap-start relative flex items-center bg-[var(--color-paramo-dark)] py-24 md:py-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 md:order-1 space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-paramo-green)] leading-tight">
              Santuario de Alta Montaña.
            </h2>
            <div className="font-sans space-y-6 text-lg text-[var(--color-foreground)] leading-relaxed">
              <p>
                Tenerife no es solo un corregimiento; es un santuario de alta montaña donde el agua nace entre la niebla. Durante años, este territory fue testigo de la historia y el conflicto, pero hoy sus habitantes han decidido reescribir su narrativa.
              </p>
              <p>
                La memoria aquí se entrelaza con las raíces de los frailejones. Conservar el páramo es conservar la paz, asegurando que las futuras generaciones hereden un ecosistema vibrante en lugar de recuerdos de guerra.
              </p>
            </div>
          </motion.div>

          <div className="order-1 md:order-2 h-[30vh] md:h-[60vh] overflow-hidden rounded-2xl relative shadow-2xl">
            <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
              <img 
                src="/images/cronica-1/author.jpg" 
                alt="Páramo de Tenerife" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Segundo Bloque: Galería Interactiva */}
      <section className="h-screen w-full snap-start relative bg-[var(--color-paramo-dark)] overflow-hidden group">
        <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {galleryImages.map((img) => (
            <div key={img.id} className="min-w-full h-full relative overflow-hidden">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-16 left-12 md:bottom-24 md:left-24 max-w-2xl">
                <p className="font-serif text-3xl md:text-5xl text-white leading-tight drop-shadow-lg">
                  {img.caption}
                </p>
              </div>
              {img.id === 1 && (
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 text-[10px] text-white/30 font-sans tracking-wide select-none">
                  Foto: Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal.
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Gallery Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center px-6">
          <button 
            onClick={prevSlide}
            className="p-4 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={28} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center px-6">
          <button 
            onClick={nextSlide}
            className="p-4 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          {galleryImages.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={clsx(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                i === currentIndex ? "bg-[var(--color-paramo-yellow)] w-8" : "bg-white/50 hover:bg-white"
              )}
            />
          ))}
        </div>
      </section>

      {/* Botón Inferior */}
      <section className="py-16 w-full flex justify-center border-t border-[var(--color-paramo-bone)]/10 bg-[var(--color-paramo-dark)]">
        <Link 
          href="/cronica/2"
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-paramo-green)] text-white shadow-md hover:bg-[var(--color-paramo-moss)] hover:shadow-lg transition-all duration-300"
        >
          <span className="font-sans text-sm uppercase tracking-wider font-semibold">Siguiente: Crónica 2</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </Link>
      </section>

    </div>
  );
}
