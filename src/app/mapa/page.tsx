"use client";

import { Navigation } from "@/components/Navigation";
import { SmoothScroller } from "@/components/SmoothScroller";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MapPin, Compass, ArrowLeft, ArrowRight } from "lucide-react";

// Dynamically import the map to avoid SSR issues with Leaflet
const InteractiveMap = dynamic(
  () => import("@/components/sections/MapComponent"),
  { ssr: false }
);

const zonesList = [
  {
    id: "palmira",
    name: "Palmira",
    altitude: "1,001m msnm",
    role: "Conexión y partida"
  },
  {
    id: "tenerife",
    name: "Tenerife",
    altitude: "2,800m msnm",
    role: "Corazón del páramo"
  },
  {
    id: "las-hermosas",
    name: "Las Hermosas",
    altitude: "3,500m msnm",
    role: "Reserva sagrada"
  }
];

export default function MapaPage() {
  return (
    <SmoothScroller>
      <Navigation />
      <main className="bg-[var(--color-paramo-dark)] min-h-screen text-[var(--color-paramo-bone)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-sans text-[var(--color-paramo-moss)] text-xs uppercase tracking-[0.3em] font-semibold flex items-center justify-center gap-2 mb-3">
              <Compass size={16} /> Mapeo Territorial
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-paramo-green)] font-bold mb-4">
              Cartografía de la memoria
            </h1>
            <p className="font-sans text-[var(--color-paramo-bone)]/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Explora geográficamente los puntos clave de conservación, conflicto y resistencia. Haz clic en los marcadores para adentrarte en el entorno 360° en 3D.
            </p>
          </div>

          {/* Interactive Map Wrapper */}
          <div className="w-full h-[60vh] md:h-[70vh] mb-12 rounded-2xl overflow-hidden border border-[var(--color-paramo-bone)]/10 shadow-2xl relative z-10">
            <InteractiveMap />
          </div>

          {/* Zone Quick Shortcuts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {zonesList.map((zone) => (
              <div 
                key={zone.id} 
                className="bg-[var(--color-paramo-green)]/5 border border-[var(--color-paramo-green)]/15 rounded-2xl p-6 flex flex-col justify-between hover:border-[var(--color-paramo-moss)]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[var(--color-paramo-moss)]">
                    <MapPin size={18} />
                    <span className="font-sans text-xs uppercase tracking-wider font-semibold">{zone.role}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--color-paramo-green)] font-bold mb-2">{zone.name}</h3>
                  <p className="font-sans text-xs text-[var(--color-paramo-bone)]/70">Altitud aproximada: {zone.altitude}</p>
                </div>
                <Link 
                  href={`/zona/${zone.id}`}
                  className="mt-6 inline-block text-center w-full py-2.5 bg-[var(--color-paramo-green)] hover:bg-[var(--color-paramo-moss)] text-white rounded-lg text-xs font-semibold tracking-wide uppercase transition-colors"
                >
                  Explorar en 3D
                </Link>
              </div>
            ))}
          </div>

        </div>
        
        {/* Footer Navigation */}
        <section className="mt-16 py-16 w-full border-t border-[var(--color-paramo-bone)]/10">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto w-full px-4 gap-4">
            <Link 
              href="/cronica/3"
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-paramo-green)]/20 bg-transparent text-[var(--color-paramo-green)] shadow-sm hover:bg-[var(--color-paramo-green)] hover:text-[var(--color-paramo-bone)] hover:border-transparent transition-all duration-300"
            >
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
              <span className="font-sans text-sm uppercase tracking-wider font-semibold">Atrás: Crónica 3</span>
            </Link>
            
            <Link 
              href="/articulo"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-paramo-green)] text-[var(--color-paramo-yellow)] shadow-md hover:bg-[var(--color-paramo-moss)] hover:shadow-lg transition-all duration-300"
            >
              <span className="font-sans text-sm uppercase text-[var(--color-paramo-dark)] tracking-wider font-semibold">Ir al artículo</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </section>

      </main>
    </SmoothScroller>
  );
}
