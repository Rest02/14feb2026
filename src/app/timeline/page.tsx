"use client";

import { Hero } from "@/components/Hero";
import { PanoramaCard } from "@/components/PanoramaCard";
import { useUnlockStatus } from "@/lib/useUnlockStatus";

export default function Home() {
  const { day1, day2, day3 } = useUnlockStatus();

  const panoramas = [
    {
      title: "Cena Romántica",
      description: "Una noche especial para disfrutar de la buena, en un ambiente íntimo y elegante. Prepárate para sabores únicos.",
      dateStr: "Miércoles 11",
      iconType: "dinner" as const,
      status: day1,
      href: "/dinner",
    },
    {
      title: "Escapada a la Cabaña",
      description: "Desconectar del mundo para conectar con nosotros. Un refugio acogedor, naturaleza y tranquilidad absoluta.",
      dateStr: "Jueves 12",
      iconType: "cabin" as const,
      status: day2,
      href: "/cabin",
    },
    {
      title: "Sorpresas de San Valentín",
      description: "El gran día ha llegado. Pequeños detalles y grandes momentos para celebrar nuestra historia.",
      dateStr: "Viernes 13",
      iconType: "gift" as const,
      status: day3,
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-cream">
      <Hero />

      <div className="max-w-5xl mx-auto px-4 space-y-8 mt-12 relative z-20">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {panoramas.map((panorama, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full max-w-2xl">
                <PanoramaCard
                  index={index}
                  title={panorama.title}
                  description={panorama.description}
                  dateStr={panorama.dateStr}
                  iconType={panorama.iconType}
                  status={panorama.status}
                  href={(panorama as any).href}
                />
              </div>
              {index < panoramas.length - 1 && (
                <div className="h-16 w-px bg-wine/20 my-4" />
              )}
            </div>
          ))}
        </div>

        <footer className="pt-20 text-center text-wine/40 text-sm font-serif italic">
          Hecho con ❤️ para Pipa
        </footer>
      </div>
    </main>
  );
}
