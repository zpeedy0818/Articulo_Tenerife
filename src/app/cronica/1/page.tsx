import { Navigation } from "@/components/Navigation";
import { CronicaUno } from "@/components/sections/CronicaUno";

export default function Page() {
  return (
    <div className="w-full bg-[var(--color-paramo-dark)]">
      <Navigation />
      <main className="w-full">
        <CronicaUno />
      </main>
    </div>
  );
}
