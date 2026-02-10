"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sun, Waves, Briefcase, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MenuCarousel from "@/components/MenuCarousel";

const CABIN_IMAGES = [
    "/14feb2026/cabaña_1.jpeg",
    "/14feb2026/cabaña_2.jpeg",
    "/14feb2026/cabaña_3.jpeg",
    "/14feb2026/cabaña_4.jpeg",
    "/14feb2026/cabaña_5.jpeg",
];

export default function CabinPage() {
    const [isMenuRevealed, setIsMenuRevealed] = useState(false);

    const packingList = [
        "Traje de baño",
        "Protector solar",
        "Ropa interior",
        "Muda de ropa (1 o 2 cambios)",
        "1 Toalla",
    ];

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
                        Domos El Quillay
                    </h1>
                    <p className="text-xl text-wine font-serif italic">
                        "Florida - Relax & Naturaleza"
                    </p>
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-wine/10 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                            <Waves className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg">Piscina & Tinaja</h3>
                            <p className="text-gray-600">Para relajarnos bajo el sol o las estrellas.</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-wine/10 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                            <Sun className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg">Entorno Natural</h3>
                            <p className="text-gray-600">Desconexión total en Florida.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Cabin Images Carousel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-wine/20 flex-1" />
                        <h2 className="text-3xl font-serif text-gray-dark font-bold">El Lugar</h2>
                        <div className="h-px bg-wine/20 flex-1" />
                    </div>
                    <MenuCarousel images={CABIN_IMAGES} />
                </motion.div>


                {/* Packing List Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white p-8 rounded-3xl shadow-md border-2 border-wine/20"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Briefcase className="w-6 h-6 text-wine" />
                        <h2 className="text-2xl font-serif text-gray-dark font-bold">¿Qué llevamos?</h2>
                    </div>

                    <ul className="space-y-4">
                        {packingList.map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-lg text-gray-700">
                                <span className="w-2 h-2 rounded-full bg-wine shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Surprise Meal Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-wine/20 flex-1" />
                        <h2 className="text-3xl font-serif text-gray-dark font-bold">La Cena Sorpresa</h2>
                        <div className="h-px bg-wine/20 flex-1" />
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-white border border-wine/20 shadow-lg min-h-[200px] flex items-center justify-center text-center p-8">
                        {!isMenuRevealed ? (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMenuRevealed(true)}
                                className="flex flex-col items-center gap-4 group cursor-pointer"
                            >
                                <div className="p-4 bg-wine/5 rounded-full group-hover:bg-wine/10 transition-colors text-wine">
                                    <Lock className="w-8 h-8 md:w-12 md:h-12" />
                                </div>
                                <span className="text-xl md:text-2xl font-serif font-medium text-gray-dark">
                                    Toca para descubrir el menú
                                </span>
                            </motion.button>
                        ) : (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="w-full max-w-2xl bg-white rounded-xl overflow-hidden shadow-2xl mx-auto"
                            >
                                <div className="relative h-80 md:h-96 w-full">
                                    <img
                                        src="/14feb2026/plato.jpeg"
                                        alt="Flat Iron"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6 md:p-8 space-y-4 text-center">
                                    <h3 className="text-3xl font-serif font-bold text-wine">
                                        Flat Iron
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed font-serif italic">
                                        "Flat iron jugoso, acompañado de papas rústicas al horno con romero, crujientes por fuera y suaves por dentro, y una ensalada fresca de lechuga que equilibra el plato con ligereza y frescura."
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
