import { Navigation } from "@/components/Navigation";
import { SmoothScroller } from "@/components/SmoothScroller";
import { Autores } from "@/components/sections/Autores";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AutoresPage() {
  return (
    <SmoothScroller>
      <Navigation />
      <main className="bg-[var(--color-paramo-bone)] min-h-screen text-[var(--color-paramo-dark)]">
        
        <Autores />

        {/* Footer Navigation */}
        <div className="max-w-3xl mx-auto px-6 pb-20 pt-8 flex justify-center items-center bg-[var(--color-paramo-bone)]">
          <Link 
            href="/collage"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-paramo-green)]/20 bg-transparent text-[var(--color-paramo-green)] shadow-sm hover:bg-[var(--color-paramo-green)] hover:text-[var(--color-paramo-bone)] hover:border-transparent transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Atrás: Memoria Visual</span>
          </Link>
        </div>

      </main>
    </SmoothScroller>
  );
}
