"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default marker icon in react-leaflet
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

import Link from "next/link";

export default function MapComponent() {
  useEffect(() => {
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <div className="w-full h-full rounded-sm overflow-hidden border border-[var(--color-paramo-green)]/15 shadow-[0_10px_30px_rgba(31,87,64,0.06)]">
      <MapContainer 
        center={[3.6333, -76.1167]} 
        zoom={10} 
        scrollWheelZoom={false} 
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        
        <Marker position={[3.5394, -76.3036]}>
          <Popup className="font-sans">
            <div className="text-[var(--color-paramo-bone)] p-1">
              <strong className="text-base font-serif text-[var(--color-paramo-green)]">Palmira</strong>
              <p className="text-xs text-[var(--color-paramo-fog)] mt-1">Punto de partida y conexión urbana.</p>
              <Link href="/zona/palmira" className="inline-block mt-3 px-3 py-1.5 bg-[var(--color-paramo-green)] hover:bg-[var(--color-paramo-moss)] text-white rounded text-xs font-semibold tracking-wide uppercase transition-colors">
                Explorar en 3D →
              </Link>
            </div>
          </Popup>
        </Marker>

        <Marker position={[3.6333, -76.1167]}>
          <Popup className="font-sans">
            <div className="text-[var(--color-paramo-bone)] p-1">
              <strong className="text-base font-serif text-[var(--color-paramo-green)]">Tenerife</strong>
              <p className="text-xs text-[var(--color-paramo-fog)] mt-1">Corregimiento y refugio del páramo.</p>
              <Link href="/zona/tenerife" className="inline-block mt-3 px-3 py-1.5 bg-[var(--color-paramo-green)] hover:bg-[var(--color-paramo-moss)] text-white rounded text-xs font-semibold tracking-wide uppercase transition-colors">
                Explorar en 3D →
              </Link>
            </div>
          </Popup>
        </Marker>

        <Marker position={[3.8000, -75.9167]}>
          <Popup className="font-sans">
            <div className="text-[var(--color-paramo-bone)] p-1">
              <strong className="text-base font-serif text-[var(--color-paramo-green)]">PNN Las Hermosas</strong>
              <p className="text-xs text-[var(--color-paramo-fog)] mt-1">Santuario natural y zona de conservación.</p>
              <Link href="/zona/las-hermosas" className="inline-block mt-3 px-3 py-1.5 bg-[var(--color-paramo-green)] hover:bg-[var(--color-paramo-moss)] text-white rounded text-xs font-semibold tracking-wide uppercase transition-colors">
                Explorar en 3D →
              </Link>
            </div>
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
}
