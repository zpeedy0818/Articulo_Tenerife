import { Navigation } from "@/components/Navigation";
import { CronicaTres } from "@/components/sections/CronicaTres";

export default function Page() {
  return (
    <div className="w-full bg-[var(--color-paramo-dark)]">
      <Navigation />
      <main className="w-full">
        <CronicaTres />
      </main>
    </div>
  );
}
