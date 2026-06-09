"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Play, Pause, X } from "lucide-react";

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
  // Nuevas Imágenes de Relleno
  ...Array.from({ length: 20 }).map((_, i) => ({ type: "image", src: `/images/new-assets/${i + 1}.jpeg` })),
  // Nuevo Video
  { type: "video", src: "/images/new-assets/Vid1.mp4" },
  { type: "video", src: "/images/new-assets/Vid2.mp4" },
  { type: "video", src: "/images/new-assets/Vid3.mp4" }
];

export function CollageMultimedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<{ type: string, src: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Play audio only when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Auto-play might be blocked by browsers if user hasn't interacted with the document
            // but we try to play it automatically anyway.
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

  // Bloquear el scroll del body cuando el lightbox está abierto
  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMedia]);

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
            <span className="font-sans text-xs uppercase tracking-widest font-semibold text-[var(--color-paramo-yellow)]">
              {isPlaying ? "Pausar paisaje sonoro" : "Reproducir paisaje sonoro"}
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
            transition={{ duration: 0.6, delay: (i % 8) * 0.1 }}
            onClick={() => setSelectedMedia(media)}
            className="break-inside-avoid overflow-hidden rounded-md relative group cursor-pointer"
          >
            {media.type === "image" ? (
              <img 
                src={media.src} 
                alt={`Memoria ${i + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            ) : (
              <div className="relative">
                <video 
                  src={media.src} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  muted
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play size={20} className="text-white ml-1" />
                  </div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white font-sans uppercase tracking-widest text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                Ver detalle
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Lightbox / Modal en Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMedia(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110]"
              >
                <X size={24} />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative flex items-center justify-center max-w-[95vw] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedMedia.type === "image" ? (
                  <img 
                    src={selectedMedia.src} 
                    alt="Expanded view" 
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  />
                ) : (
                  <video 
                    src={selectedMedia.src} 
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    controls
                    autoPlay
                  />
                )}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-4 z-[120] text-[10px] md:text-xs text-white/80 font-sans tracking-wide select-none bg-black/60 px-3 py-1.5 rounded backdrop-blur-md whitespace-nowrap">
                  {selectedMedia.type === "image" 
                    ? "Tascón Caicedo, V. (2026). Paisaje en Tenerife [Fotografía]. Archivo personal."
                    : "Tascón Caicedo, V. (2026). Paisaje en Tenerife [Video]. Archivo personal."
                  }
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
}
