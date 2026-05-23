"use client";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import Link from "next/link";

// Custom glowing pulse icon creator function
const createCustomIcon = () => {
  if (typeof window === "undefined") return null;
  return L.divIcon({
    className: "custom-paramo-marker",
    html: `
      <div class="marker-container">
        <div class="marker-core"></div>
        <div class="marker-pulse"></div>
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10]
  });
};

export default function MapComponent() {
  const customIcon = typeof window !== "undefined" ? createCustomIcon() : null;

  return (
    <div className="w-full h-full rounded-sm overflow-hidden border border-[var(--color-paramo-green)]/15 shadow-[0_10px_30px_rgba(31,87,64,0.06)] relative">
      
      {/* Inject custom CSS styling for the leaflet items */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-paramo-marker {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .marker-container {
          position: relative;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .marker-core {
          width: 10px;
          height: 10px;
          background-color: #1f5740; /* --color-paramo-green */
          border: 2px solid #f4efe6; /* --color-paramo-bone */
          border-radius: 50%;
          z-index: 2;
          box-shadow: 0 0 8px rgba(31, 87, 64, 0.6);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .marker-pulse {
          position: absolute;
          width: 24px;
          height: 24px;
          background-color: #1f5740;
          border-radius: 50%;
          animation: marker-glow 2.5s infinite cubic-bezier(0.25, 0, 0, 1);
          z-index: 1;
        }
        @keyframes marker-glow {
          0% {
            transform: scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        /* Marker Hover state */
        .custom-paramo-marker:hover .marker-core {
          transform: scale(1.4);
          background-color: #3b7d5f; /* --color-paramo-moss */
          box-shadow: 0 0 12px rgba(59, 125, 95, 0.8);
        }

        /* Tooltip Custom Styles */
        .leaflet-tooltip.custom-map-tooltip {
          background: rgba(64, 99, 85, 0.95);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(31, 87, 64, 0.3);
          border-radius: 8px;
          color: #f4efe6;
          font-family: ui-sans-serif, system-ui, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          padding: 6px 12px;
          transition: all 0.3s ease;
        }
        .leaflet-tooltip-top.custom-map-tooltip:before {
          border-top-color: rgba(18, 28, 24, 0.95);
        }
        .leaflet-tooltip.custom-map-tooltip:hover {
          border-color: rgba(59, 125, 95, 0.5);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
        }

        /* Custom Popup Styles */
        .leaflet-popup-content-wrapper {
          background: rgba(252, 246, 214, 0.95) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(31, 87, 64, 0.2);
          border-radius: 12px !important;
          color: #f4efe6 !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
        }
        .leaflet-popup-tip {
          background: rgba(18, 28, 24, 0.95) !important;
          border: 1px solid rgba(31, 87, 64, 0.2);
        }
      ` }} />

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
        
        {customIcon && (
          <>
            {/* Palmira */}
            <Marker position={[3.5394, -76.3036]} icon={customIcon}>
              <Tooltip 
                permanent 
                direction="top" 
                offset={[0, -12]}
                className="custom-map-tooltip"
              >
                Palmira
              </Tooltip>
              <Popup className="font-sans">
                <div className="text-[var(--color-paramo-bone)] p-1">
                  <strong className="text-base font-serif text-[var(--color-paramo-green)]">Palmira</strong>
                  <p className="text-xs text-[var(--color-paramo-green)] mt-1">Punto de partida y conexión urbana.</p>
                  <Link href="/zona/palmira" className="inline-block mt-3 px-3 py-1.5 bg-[var(--color-paramo-light)] hover:bg-[var(--color-paramo-dark)] text-white rounded text-xs font-semibold tracking-wide uppercase transition-colors ">
                    Explorar en 3D →
                  </Link>
                </div>
              </Popup>
            </Marker>

            {/* Tenerife */}
            <Marker position={[3.6333, -76.1167]} icon={customIcon}>
              <Tooltip 
                permanent 
                direction="top" 
                offset={[0, -12]}
                className="custom-map-tooltip"
              >
                Tenerife
              </Tooltip>
              <Popup className="font-sans">
                <div className="text-[var(--color-paramo-bone)] p-1">
                  <strong className="text-base font-serif text-[var(--color-paramo-green)]">Tenerife</strong>
                  <p className="text-xs text-[var(--color-paramo-grenn)] mt-1">Corregimiento y refugio del páramo.</p>
                  <Link href="/zona/tenerife" className="inline-block mt-3 px-3 py-1.5 bg-[var(--color-paramo-light)] hover:bg-[var(--color-paramo-dark)] text-white rounded text-xs font-semibold tracking-wide uppercase transition-colors text-[var(--color-paramo-dark)]">
                    Explorar en 3D →
                  </Link>
                </div>
              </Popup>
            </Marker>

            {/* PNN Las Hermosas */}
            <Marker position={[3.8000, -75.9167]} icon={customIcon}>
              <Tooltip 
                permanent 
                direction="top" 
                offset={[0, -12]}
                className="custom-map-tooltip"
              >
                PNN Las Hermosas
              </Tooltip>
              <Popup className="font-sans">
                <div className="text-[var(--color-paramo-bone)] p-1">
                  <strong className="text-base font-serif text-[var(--color-paramo-green)]">PNN Las Hermosas</strong>
                  <p className="text-xs text-[var(--color-paramo-green)] mt-1">Santuario natural y zona de conservación.</p>
                  <Link href="/zona/las-hermosas" className="inline-block mt-3 px-3 py-1.5 bg-[var(--color-paramo-light)] hover:bg-[var(--color-paramo-dark)] text-white rounded text-xs font-semibold tracking-wide uppercase transition-colors">
                    Explorar en 3D →
                  </Link>
                </div>
              </Popup>
            </Marker>
          </>
        )}

      </MapContainer>
    </div>
  );
}
