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
      href: "/gifts",
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

        {/* Memories Section */}
        <div className="pt-16 space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px bg-wine/20 flex-1" />
            <h2 className="text-3xl md:text-4xl font-serif text-gray-dark font-bold text-center">
              Nuestros Recuerdos
            </h2>
            <div className="h-px bg-wine/20 flex-1" />
          </div>

          <p className="text-center text-wine font-serif italic text-lg">
            Al finalizar esta semana especial, aquí aparecerán las fotos de todos nuestros momentos juntos
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-gradient-to-br from-wine/5 to-wine/10 border-2 border-dashed border-wine/20 flex items-center justify-center group hover:border-wine/40 transition-colors"
              >
                <div className="text-center space-y-2 opacity-40 group-hover:opacity-60 transition-opacity">
                  <div className="w-12 h-12 mx-auto rounded-full bg-wine/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-wine"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs font-serif text-wine">Próximamente</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 font-serif italic">
              📅 Se desbloqueará el 14 de Febrero, 2026
            </p>
          </div>
        </div>

        <footer className="pt-20 text-center text-wine/40 text-sm font-serif italic">
          Hecho con ❤️ para Pipa
        </footer>
      </div>
    </main>
  );
}
