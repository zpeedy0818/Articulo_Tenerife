import { Navigation } from "@/components/Navigation";
import { CronicaDos } from "@/components/sections/CronicaDos";

export default function Page() {
  return (
    <div className="w-full bg-[var(--color-paramo-dark)]">
      <Navigation />
      <main className="w-full">
        <CronicaDos />
      </main>
    </div>
  );
}
