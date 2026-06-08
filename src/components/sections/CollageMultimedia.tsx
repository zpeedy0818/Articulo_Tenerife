"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const collageMedia = [
  // Cronica 1
  { type: "image", src: "/images/cronica-1/slider-1.jpg" },
  { type: "image", src: "/images/cronica-1/slider-2.jpg" },
  { type: "image", src: "/images/cronica-1/slider-3.jpg" },
  // Cronica 2
  { type: "image", src: "/images/cronica-2/story-1.jpg" },
  { type: "image", src: "/images/cronica-2/story-2.jpg" },
  // Cronica 3
  { type: "image", src: "/images/cronica-3/author.jpg" },
  { type: "image", src: "/images/cronica-3/masonry-1.jpg" },
  { type: "image", src: "/images/cronica-3/masonry-2.jpg" },
  { type: "image", src: "/images/cronica-3/masonry-3.jpg" },
  { type: "image", src: "/images/cronica-3/masonry-4.jpg" },
  { type: "image", src: "/images/cronica-3/masonry-5.jpg" },
  { type: "image", src: "/images/cronica-3/masonry-6.jpg" },
  { type: "image", src: "/images/cronica-3/masonry-7.jpg" },
  // Articulo
  { type: "image", src: "/images/articulo/gallery-1.jpg" },
  { type: "image", src: "/images/articulo/gallery-2.jpg" },
  // ---------------------------------------------------------
  // ESPACIO PARA AGREGAR MÁS IMÁGENES Y VIDEOS
  // Puedes descomentar las líneas abajo y poner tus propios archivos
  // { type: "image", src: "/images/tu-imagen.jpg" },
  // { type: "video", src: "/videos/tu-video.mp4" },
  // ---------------------------------------------------------
];

export function CollageMultimedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Play audio only when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSectionVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            // Auto-play might be blocked by browsers, but we try
            audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
          } else {
            audioRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  return (
    <section ref={containerRef} className="py-24 w-full bg-[var(--color-paramo-dark)] text-white relative">
      
      {/* Audio element */}
      <audio 
        ref={audioRef}
        src="/audio/collage-bg.mp3" 
        loop
      />

      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-[var(--color-paramo-yellow)] mb-4"
        >
          Memoria Visual
        </motion.h2>
        <p className="font-sans text-[var(--color-paramo-fog)] text-lg max-w-2xl mx-auto">
          Un recorrido a través de los rostros, paisajes y momentos que conforman el Páramo de Las Hermosas.
        </p>

        {/* Audio control */}
        <div className="mt-8 flex items-center justify-center">
          <button 
            onClick={toggleAudio}
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--color-paramo-green)]/30 hover:bg-[var(--color-paramo-green)]/10 transition-colors"
          >
            {isPlaying ? <Pause size={18} className="text-[var(--color-paramo-yellow)]" /> : <Play size={18} className="text-[var(--color-paramo-yellow)]" />}
            <span className="font-sans text-xs uppercase tracking-widest font-semibold text-(--color-paramo-yellow)">
              {isPlaying ? "Pausar música" : "Reproducir música"}
            </span>
          </button>
        </div>
      </div>

      {/* Collage Grid */}
      <div className="max-w-7xl mx-auto px-4 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {collageMedia.map((media, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
            className="break-inside-avoid overflow-hidden rounded-md relative group cursor-pointer"
          >
            {media.type === "image" ? (
              <img 
                src={media.src} 
                alt={`Memoria ${i + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <video 
                src={media.src} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                controls
              />
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
