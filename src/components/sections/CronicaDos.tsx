"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function CronicaDos() {
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <div id="cronica-2" className="relative w-full bg-[var(--color-paramo-dark)] text-[var(--color-paramo-bone)] overflow-hidden">
      
      {/* Sección Hero: Desvanecimiento al scrollear */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[var(--color-paramo-dark)]">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2000&auto=format&fit=crop')" }}
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
            Crónica 2
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-xl md:text-3xl font-serif italic text-[var(--color-paramo-yellow)] drop-shadow-md"
          >
            Turismo de naturaleza en Las Hermosas.
          </motion.p>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="text-white w-8 h-8 opacity-70" />
        </motion.div>
      </section>

      {/* Primer Bloque: Asimétrico */}
      <section className="h-screen w-full relative flex items-center bg-[var(--color-paramo-dark)]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          
          <div className="md:col-span-5 pt-12 md:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-paramo-green)] mb-6 leading-tight">
                Turismo de naturaleza en Las Hermosas.
              </h2>
              <div className="font-sans space-y-6 text-lg text-[var(--color-paramo-bone)]/90 leading-relaxed">
                <p>
                  El ecoturismo se ha convertido en una herramienta de paz y conservación. Los mismos senderos que antes eran corredores del conflicto, hoy reciben a caminantes en busca de conexión con la tierra.
                </p>
                <p>
                  Las comunidades locales lideran estos recorridos, compartiendo su conocimiento sobre la flora y fauna endémica, transformando su historia en una de resiliencia.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="relative h-[60vh] md:h-[80vh] w-full rounded-sm overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2000&auto=format&fit=crop" 
                alt="Parque Nacional Natural Las Hermosas" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paramo-dark)]/80 to-transparent" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Pull Quote */}
      <section className="h-[40vh] w-full relative flex items-center justify-center bg-[var(--color-paramo-dark)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.blockquote 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-3xl md:text-5xl italic leading-tight text-[var(--color-paramo-green)]"
          >
            "El agua que tomamos nace aquí. Si no cuidamos el páramo, no habrá futuro para nadie en el valle."
          </motion.blockquote>
        </div>
      </section>

      {/* Segundo Bloque: Video Cinematico y Timeline */}
      <section className="min-h-screen w-full relative flex items-center bg-[var(--color-paramo-dark)]">
        <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Cinematic Player */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/10 aspect-video bg-black"
          >
            {isPlaying ? (
              <video 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" 
                className="w-full h-full object-cover"
                controls
                autoPlay
              />
            ) : (
              <>
                <img 
                  src="https://images.unsplash.com/photo-1455214532453-0667eee1b1b0?q=80&w=1500&auto=format&fit=crop" 
                  alt="Laguna Negra" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                />
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-white ml-2" size={32} />
                  </div>
                </button>
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-serif text-2xl">Laguna Negra</h3>
                  <p className="font-sans text-sm text-[var(--color-paramo-fog)] uppercase tracking-widest">Documental Breve</p>
                </div>
              </>
            )}
          </motion.div>

          {/* Animated Timeline */}
          <div className="space-y-8">
            <h3 className="font-serif text-3xl mb-8 text-[var(--color-paramo-green)]">Hitos de la conservación</h3>
            {[
              { year: "1990s", text: "El territorio sufre el impacto del conflicto armado." },
              { year: "2010", text: "Inician los primeros esfuerzos comunitarios de reforestación." },
              { year: "2020", text: "Consolidación de las rutas de turismo de naturaleza pacífico." },
              { year: "Actualidad", text: "Tenerife es un ejemplo de resiliencia ecológica." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-paramo-yellow)] shadow-[0_0_10px_rgba(242,201,76,0.8)]" />
                  {index !== 3 && <div className="w-[1px] h-16 bg-white/20 mt-2" />}
                </div>
                <div className="-mt-1.5">
                  <span className="font-mono text-[var(--color-paramo-moss)] text-sm tracking-wider">{item.year}</span>
                  <p className="font-sans text-[var(--color-paramo-bone)] mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Botones de Navegación */}
      <section className="h-[40vh] w-full flex flex-col justify-center border-t border-[var(--color-paramo-bone)]/10 bg-[var(--color-paramo-dark)]">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full px-4 gap-8">
          <Link 
            href="/cronica/1"
            className="group flex items-center gap-4 text-[var(--color-paramo-fog)] hover:text-[var(--color-paramo-green)] transition-colors duration-300"
          >
            <div className="p-3 rounded-full border border-[var(--color-paramo-fog)]/20 group-hover:border-[var(--color-paramo-green)] transition-colors">
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={20} />
            </div>
            <span className="font-sans text-sm uppercase tracking-widest">Crónica 1</span>
          </Link>
          
          <Link 
            href="/cronica/3"
            className="group flex items-center gap-4 text-[var(--color-paramo-bone)] hover:text-[var(--color-paramo-green)] transition-colors duration-300"
          >
            <span className="font-serif text-2xl italic">Siguiente: Crónica 3</span>
            <div className="p-4 rounded-full border border-[var(--color-paramo-bone)]/20 group-hover:border-[var(--color-paramo-green)] transition-colors">
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
