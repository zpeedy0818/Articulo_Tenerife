"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export function Autores() {
  const authors = [
    {
      name: "Valentina Tascón Caicedo",
      image: "/images/autores/authvalentina.jpeg",
    },
    {
      name: "Ana María Mina",
      image: "/images/autores/authana.jpeg",
    },
    {
      name: "Kimberly Andrea Vargas",
      image: "/images/autores/authKimberly.jpeg",
    }
  ];

  return (
    <section className="py-32 w-full bg-[var(--color-paramo-dark)] text-[var(--color-paramo-bone)] relative">
      
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
            Autoras
          </motion.h2>
          <p className="font-sans text-[var(--color-paramo-moss)] mt-6 text-lg max-w-2xl mx-auto">
            Este documental web fue realizado por un equipo comprometido con la conservación ambiental y la memoria del territorio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {authors.map((author, index) => (
            <motion.div
              key={author.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-[var(--color-paramo-moss)]/30 group-hover:border-[var(--color-paramo-green)] transition-colors duration-500">
                <img 
                  src={author.image} 
                  alt={`Fotografía de ${author.name}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-paramo-green)] font-semibold text-center group-hover:text-white transition-colors duration-300">
                {author.name}
              </h3>
            </motion.div>
          ))}
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
