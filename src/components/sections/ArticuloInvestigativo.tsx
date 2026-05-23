"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

// Dynamically import the map to avoid SSR issues with Leaflet
const InteractiveMap = dynamic(() => import("./MapComponent"), { ssr: false });

export function ArticuloInvestigativo() {
  return (
    <section id="investigacion" className="relative w-full bg-[var(--color-paramo-dark)] text-[var(--color-paramo-bone)]">
      
      {/* Sección 1 — Mapa Interactivo */}
      <div className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-4xl md:text-6xl text-[var(--color-paramo-yellow)] text-center mb-6"
          >
            Cartografía de la memoria
          </motion.h2>
          <p className="font-sans text-center text-[var(--color-paramo-fog)] text-lg max-w-3xl mx-auto">
            Explora las rutas que conectan la vida urbana en Palmira con la inmensidad del páramo y el santuario de Las Hermosas.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 h-[60vh] relative z-10">
          <InteractiveMap />
        </div>
      </div>

      {/* Sección 2 — Datos y Contexto */}
      <div className="py-24 bg-[var(--color-paramo-bone)] text-[var(--color-paramo-dark)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-3xl md:text-5xl text-[var(--color-paramo-green)] leading-tight">
              El impacto de la conservación comunitaria.
            </h3>
            <p className="font-sans text-lg text-[var(--color-paramo-moss)]/90">
              A lo largo de la última década, las iniciativas locales han logrado reforestar zonas críticas, recuperando ecosistemas vitales para la regulación hídrica del departamento.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 gap-8"
          >
            {/* Minimalist Data Visualizations */}
            <div className="bg-[var(--color-paramo-moss)]/5 p-8 rounded-2xl border border-[var(--color-paramo-moss)]/10 text-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                className="text-5xl font-serif text-[var(--color-paramo-green)] mb-2"
              >
                12k
              </motion.div>
              <div className="font-sans text-sm uppercase tracking-widest text-[var(--color-paramo-moss)]">Hectáreas Protegidas</div>
            </div>
            
            <div className="bg-[var(--color-paramo-moss)]/5 p-8 rounded-2xl border border-[var(--color-paramo-moss)]/10 text-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
                className="text-5xl font-serif text-[var(--color-paramo-green)] mb-2"
              >
                +300
              </motion.div>
              <div className="font-sans text-sm uppercase tracking-widest text-[var(--color-paramo-moss)]">Familias Involucradas</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sección 3 — Memoria y Conflicto */}
      <div className="py-32 relative max-w-7xl mx-auto px-4">
        <h3 className="font-serif text-4xl md:text-5xl text-center mb-20">Voces del pasado</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: "/images/articulo/gallery-1.jpg", text: "Tiempos de silencio y desplazamiento." },
            { img: "/images/articulo/gallery-2.jpg", text: "La resiliencia en las miradas." },
            { img: "/images/articulo/gallery-3.jpg", text: "El retorno y la siembra." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.3 }}
              className="group relative h-96 overflow-hidden rounded-sm"
            >
              <img 
                src={item.img} 
                alt="Memoria" 
                className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paramo-dark)] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-sans text-white/90 text-lg leading-snug transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sección 4 — Cierre Emocional */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 3 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/images/articulo/banner.jpg" 
            alt="Cierre panorámico" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paramo-dark)] via-[var(--color-paramo-dark)]/80 to-transparent" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, delay: 1 }}
          className="relative z-10 text-center max-w-4xl px-4"
        >
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-[var(--color-paramo-bone)] text-shadow-cinematic">
            La comunidad busca que Tenerife sea recordado por el agua, los frailejones y el trabajo colectivo, <br/>
            <span className="text-[var(--color-paramo-yellow)] italic">y no por la guerra.</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 3 }}
          className="absolute bottom-16 z-20"
        >
          <Link 
            href="#inicio"
            className="flex flex-col items-center gap-3 text-white/50 hover:text-white transition-colors duration-500"
          >
            <ArrowUp size={24} />
            <span className="font-sans text-xs uppercase tracking-[0.2em]">Volver al inicio</span>
          </Link>
        </motion.div>

        {/* Citation */}
        <div className="absolute bottom-4 right-4 z-30 text-[10px] text-white/30 font-sans tracking-wide select-none">
          Foto: Conoce Colombia. (s.f.). Tenerife: corredor turístico de montaña.{" "}
          <a 
            href="https://conocecolombia.com/tenerife-corredor-turistico-montana/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-white/60 transition-colors"
          >
            Fuente
          </a>
        </div>
      </div>

    </section>
  );
}
