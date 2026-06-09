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
        <div className="w-full flex justify-center items-center bg-[var(--color-paramo-bone)] py-12 px-6">
          <Link 
            href="/collage"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-paramo-dark)] text-[var(--color-paramo-bone)] hover:bg-[var(--color-paramo-green)] hover:text-white transition-all duration-300 shadow-sm w-fit mx-auto justify-center"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={16} />
            <span className="font-sans text-xs uppercase tracking-widest font-semibold">Atrás</span>
          </Link>
        </div>

      </main>
    </SmoothScroller>
  );
}
