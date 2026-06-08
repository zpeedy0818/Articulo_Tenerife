"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export function Autores() {
  return (
    <section className="py-32 w-full bg-[var(--color-paramo-dark)] text-[var(--color-paramo-dark)] relative">
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="font-sans text-[var(--color-paramo-moss)] text-xs uppercase tracking-[0.3em] font-semibold flex items-center justify-center gap-2 mb-4">
            <Users size={16} /> Equipo del Proyecto
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[var(--color-paramo-green)]"
          >
            Nuestra labor
          </motion.h2>
          <p className="font-sans text-[var(--color-paramo-moss)] mt-6 text-lg max-w-2xl mx-auto">
            Este documental web fue realizado por un equipo interdisciplinario comprometido con la conservación ambiental y la memoria del territorio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Group Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video border border-[var(--color-paramo-moss)]/20"
          >
            {/* TODO: Reemplazar con la foto grupal real */}
            <div className="absolute inset-0 bg-[var(--color-paramo-moss)]/10 flex items-center justify-center">
              <span className="font-serif text-[var(--color-paramo-green)] opacity-50 text-xl">
                [Espacio para Fotografía Grupal]
              </span>
            </div>
          </motion.div>

          {/* Credits List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-12"
          >
            
            {/* Roles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-[var(--color-paramo-moss)] mb-3 font-semibold border-b border-[var(--color-paramo-moss)]/20 pb-2">
                  Dirección e Investigación
                </h3>
                <ul className="font-serif text-xl text-[var(--color-paramo-green)] space-y-2 font-medium">
                  <li>[Nombre del Integrante 1]</li>
                  <li>[Nombre del Integrante 2]</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-[var(--color-paramo-moss)] mb-3 font-semibold border-b border-[var(--color-paramo-moss)]/20 pb-2">
                  Fotografía y Audiovisual
                </h3>
                <ul className="font-serif text-xl text-[var(--color-paramo-green)] space-y-2 font-medium">
                  <li>[Nombre del Integrante 3]</li>
                  <li>[Nombre del Integrante 4]</li>
                </ul>
              </div>

              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-[var(--color-paramo-moss)] mb-3 font-semibold border-b border-[var(--color-paramo-moss)]/20 pb-2">
                  Desarrollo Web
                </h3>
                <ul className="font-serif text-xl text-[var(--color-paramo-green)] space-y-2 font-medium">
                  <li>[Nombre del Integrante 5]</li>
                  <li>[Nombre del Integrante 6]</li>
                </ul>
              </div>

              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-[var(--color-paramo-moss)] mb-3 font-semibold border-b border-[var(--color-paramo-moss)]/20 pb-2">
                  Agradecimientos
                </h3>
                <ul className="font-serif text-xl text-[var(--color-paramo-green)] space-y-2 font-medium">
                  <li>Comunidad de Tenerife</li>
                  <li>Cuidemos el Páramo</li>
                </ul>
              </div>
              
            </div>

          </motion.div>
        </div>
        
        {/* Final Project Credit */}
        <div className="mt-32 text-center pt-8 border-t border-[var(--color-paramo-moss)]/20">
          <p className="font-sans text-sm text-[var(--color-paramo-moss)]">
            © 2026 Cuidemos el Páramo Tenerife. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
