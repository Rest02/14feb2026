"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, MapPin, Shirt, Utensils } from "lucide-react";
import Link from "next/link";
import MenuCarousel from "@/components/MenuCarousel";

const MENU_IMAGES = [
    "/14feb2026/menu_1.jpg",
    "/14feb2026/menu_2.jpg",
    "/14feb2026/menu_3.jpg",
    "/14feb2026/menu_4.jpg",
    "/14feb2026/menu_5.jpg",
    "/14feb2026/menu_6.jpg",
    "/14feb2026/menu_7.jpg",
];

export default function DinnerPage() {
    return (
        <main className="min-h-screen bg-cream pb-20">
            {/* Back Button */}
            <div className="p-4 md:p-8">
                <Link
                    href="/timeline"
                    className="inline-flex items-center gap-2 text-wine hover:underline font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                </Link>
            </div>

            <div className="max-w-4xl mx-auto px-4 space-y-12">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-dark">
                        Pastas Verona
                    </h1>
                    <p className="text-xl text-wine font-serif italic">
                        "Donde el amor se cocina a fuego lento"
                    </p>
                </motion.div>

                {/* Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-wine/10 flex flex-col items-center text-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cream text-wine flex items-center justify-center">
                            <Clock className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif font-bold text-lg">Hora de la cita</h3>
                        <p className="text-gray-600">19:15 hrs</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-wine/10 flex flex-col items-center text-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cream text-wine flex items-center justify-center">
                            <Shirt className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif font-bold text-lg">Vestimenta</h3>
                        <p className="text-gray-600">Semiformal</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-wine/10 flex flex-col items-center text-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cream text-wine flex items-center justify-center">
                            <Utensils className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif font-bold text-lg">Temática</h3>
                        <p className="text-gray-600">Cocina Italiana Tradicional</p>
                    </div>
                </motion.div>

                {/* Romantic Text Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-md border-2 border-wine/20 text-center space-y-6"
                >
                    <h2 className="text-3xl font-serif text-wine font-bold">
                        ¿Por qué pasta?
                    </h2>

                    <div className="space-y-4 text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
                        <p>
                            Porque la pasta, al igual que el amor verdadero, no se apura. Se prepara con calma,
                            se cuida en cada paso y se disfruta sin prisas. No es solo una comida, es una forma
                            de decir “quédate un rato más”.
                        </p>

                        <p>
                            Cada forma tiene su encanto y cada salsa su momento. Esta noche quiero que nos
                            regalemos una pausa, una mesa compartida y un plato preparado con cariño, para
                            disfrutar simplemente de estar juntos.
                        </p>
                    </div>

                </motion.div>

                {/* Menu Carousel Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-wine/20 flex-1" />
                        <h2 className="text-3xl font-serif text-gray-dark font-bold">El Menú</h2>
                        <div className="h-px bg-wine/20 flex-1" />
                    </div>

                    <MenuCarousel images={MENU_IMAGES} />
                </motion.div>
            </div>
        </main>
    );
}

