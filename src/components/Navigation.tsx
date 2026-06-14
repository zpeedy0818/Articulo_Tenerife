"use client";

import { Menu as MenuIcon, Compass, BookOpen, Map, Home, Image as ImageIcon, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { Menu, MenuItem } from "@/components/ui/fluid-menu";

const navLinks = [
  { href: "/", label: "Inicio", icon: <Home size={18} /> },
  { href: "/cronica/1", label: "La Tierra", icon: <BookOpen size={18} /> },
  { href: "/cronica/2", label: "El Páramo", icon: <BookOpen size={18} /> },
  { href: "/cronica/3", label: "El Guardián", icon: <BookOpen size={18} /> },
  { href: "/mapa", label: "Mapa Interactivo", icon: <Map size={18} /> },
  { href: "/articulo", label: "Artículo Investigativo", icon: <Compass size={18} /> },
  { href: "/collage", label: "Collage Multimedia", icon: <ImageIcon size={18} /> },
  { href: "/autores", label: "Autores", icon: <Users size={18} /> },
];

export function Navigation() {
  const router = useRouter();

  return (
    <div className="fixed top-8 right-8 z-50">
      <Menu 
        align="right" 
        showChevron={false}
        trigger={
          <div className="p-3 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 border border-white/10 transition-colors">
            <MenuIcon size={28} />
          </div>
        }
      >
        {navLinks.map((link) => (
          <MenuItem 
            key={link.href} 
            icon={link.icon} 
            onClick={() => router.push(link.href)}
          >
            {link.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
