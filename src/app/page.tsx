import { Navigation } from "@/components/Navigation";
import { SmoothScroller } from "@/components/SmoothScroller";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <SmoothScroller>
      <Navigation />
      <main className="bg-[var(--color-paramo-dark)] h-screen w-screen overflow-hidden text-[var(--color-paramo-bone)]">
        <HeroSection />
      </main>
    </SmoothScroller>
  );
}
