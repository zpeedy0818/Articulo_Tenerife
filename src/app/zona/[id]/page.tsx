import { Navigation } from "@/components/Navigation";
import { SmoothScroller } from "@/components/SmoothScroller";
import { PanoramaViewer } from "@/components/PanoramaViewer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Zone Data
const zoneData: Record<string, {
  name: string;
  description: string;
  image360: string;
  gallery: string[];
}> = {
  "palmira": {
    name: "Palmira: Conexión Urbana",
    description: "Ubicada en el fértil valle del río Cauca, Palmira es el punto de partida de la travesía hacia Tenerife. Es el motor económico y cultural que se nutre del agua que nace en las cumbres del páramo, evidenciando la interconexión vital entre la ciudad y la alta montaña.",
    image360: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541336318489-083c7a050414?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601099682531-97b7cb756a16?q=80&w=800&auto=format&fit=crop"
    ]
  },
  "tenerife": {
    name: "Tenerife: El Corazón del Páramo",
    description: "El corregimiento de Tenerife es el epicentro de la resistencia y conservación ambiental. Sus tierras altas albergan extensos bosques de niebla y zonas de páramo custodiadas por frailejones eternos. Históricamente golpeado por el conflicto, hoy renace a través del turismo comunitario y el cuidado del agua.",
    image360: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop"
    ]
  },
  "las-hermosas": {
    name: "Parque Nacional Natural Las Hermosas",
    description: "Un ecosistema virgen y sagrado que alberga complejos lagunares de origen glacial, como la Laguna Negra. Es una de las reservas de agua más importantes de Colombia. Las Hermosas representa la inmensidad de la naturaleza y el reto de conservarla para el futuro de la región.",
    image360: "https://images.unsplash.com/photo-1540103711724-14bec3901b5f?q=80&w=3000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1455214532453-0667eee1b1b0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533611751147-38e9abccde61?q=80&w=800&auto=format&fit=crop"
    ]
  }
};

// Generates static paths for export
export async function generateStaticParams() {
  return [
    { id: "palmira" },
    { id: "tenerife" },
    { id: "las-hermosas" }
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const zone = zoneData[resolvedParams.id];

  if (!zone) {
    notFound();
  }

  return (
    <SmoothScroller>
      <Navigation />
      <main className="bg-[var(--color-paramo-dark)] min-h-screen text-[var(--color-paramo-bone)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Back Link */}
          <Link 
            href="/mapa"
            className="group inline-flex items-center gap-2 text-[var(--color-paramo-fog)] hover:text-[var(--color-paramo-green)] transition-colors mb-12"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Volver al Mapa</span>
          </Link>

          {/* Heading */}
          <div className="mb-16">
            <span className="font-sans text-[var(--color-paramo-moss)] text-sm tracking-widest uppercase font-semibold block mb-2">
              Exploración de Territorio
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-paramo-green)] font-bold">
              {zone.name}
            </h1>
          </div>

          {/* 3D Panorama Section */}
          <div className="w-full h-[65vh] md:h-[75vh] mb-16 relative">
            <PanoramaViewer imageUrl={zone.image360} />
          </div>

          {/* Description and Editorial Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            <div className="lg:col-span-8">
              <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-paramo-green)] mb-6 font-bold">
                Historia y Contexto
              </h3>
              <p className="font-sans text-lg md:text-xl text-[var(--color-paramo-bone)]/80 leading-relaxed font-light">
                {zone.description}
              </p>
            </div>
            
            <div className="lg:col-span-4 bg-[var(--color-paramo-green)]/5 border border-[var(--color-paramo-green)]/15 p-8 rounded-2xl">
              <h4 className="font-serif text-xl mb-4 text-[var(--color-paramo-green)] font-bold">Ficha Técnica de Zona</h4>
              <ul className="space-y-4 font-sans text-sm">
                <li className="flex justify-between border-b border-[var(--color-paramo-bone)]/10 pb-2">
                  <span className="text-[var(--color-paramo-bone)]/70">Tipo de Territorio</span>
                  <span className="font-semibold text-[var(--color-paramo-bone)]">Ecosistema Andino / Páramo</span>
                </li>
                <li className="flex justify-between border-b border-[var(--color-paramo-bone)]/10 pb-2">
                  <span className="text-[var(--color-paramo-bone)]/70">Altitud</span>
                  <span className="font-semibold text-[var(--color-paramo-bone)]">1,000m - 3,800m msnm</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-[var(--color-paramo-bone)]/70">Estado de Conservación</span>
                  <span className="font-semibold text-[var(--color-paramo-moss)]">Área Protegida / Comunitaria</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mini Gallery */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-center mb-12 text-[var(--color-paramo-green)] font-bold">Galería Visual</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {zone.gallery.map((url, index) => (
                <div key={index} className="h-64 rounded-xl overflow-hidden border border-[var(--color-paramo-bone)]/10 shadow-lg group">
                  <img 
                    src={url} 
                    alt={`${zone.name} gallery ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </SmoothScroller>
  );
}
