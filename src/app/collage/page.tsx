import { Navigation } from "@/components/Navigation";
import { SmoothScroller } from "@/components/SmoothScroller";
import { CollageMultimedia } from "@/components/sections/CollageMultimedia";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CollagePage() {
  return (
    <SmoothScroller>
      <Navigation />
      <main className="bg-[var(--color-paramo-dark)] min-h-screen text-[var(--color-paramo-bone)] pb-20 pt-20">
        
        <CollageMultimedia />

        {/* Footer Navigation */}
        <div className="max-w-3xl mx-auto px-6 mt-16 pt-8 border-t border-[var(--color-paramo-bone)]/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link 
            href="/articulo"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-paramo-green)]/20 bg-transparent text-[var(--color-paramo-green)] shadow-sm hover:bg-[var(--color-paramo-green)] hover:text-[var(--color-paramo-bone)] hover:border-transparent transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Atrás: Artículo</span>
          </Link>
          
          <Link 
            href="/autores"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-paramo-green)] text-white shadow-md hover:bg-[var(--color-paramo-moss)] hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Siguiente: Autores</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>

      </main>
    </SmoothScroller>
  );
}
