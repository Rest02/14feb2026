"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download, Gift, Heart } from "lucide-react";
import Link from "next/link";

export default function GiftsPage() {
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
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-wine/10 flex items-center justify-center">
                            <Gift className="w-8 h-8 text-wine" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-dark">
                        Sorpresas de San Valentín
                    </h1>
                    <p className="text-xl text-wine font-serif italic">
                        "Regalos hechos con amor para ti"
                    </p>
                </motion.div>

                {/* Love Letter Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-wine/20 flex-1" />
                        <h2 className="text-3xl font-serif text-gray-dark font-bold flex items-center gap-2">
                            <Heart className="w-6 h-6 text-wine" />
                            Carta de Amor
                        </h2>
                        <div className="h-px bg-wine/20 flex-1" />
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-wine/20 overflow-hidden">
                        <div className="relative">
                            <img
                                src="/14feb2026/Carta_13_feb.png"
                                alt="Carta de Amor"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="text-center pt-6">
                        <a
                            href="/14feb2026/Carta_13_feb.png"
                            download="Carta_de_Amor.png"
                            className="inline-flex items-center gap-2 bg-wine text-white px-6 py-3 rounded-xl font-serif font-medium hover:bg-wine/90 transition-colors shadow-md hover:shadow-lg"
                        >
                            <Download className="w-5 h-5" />
                            Descargar Carta
                        </a>
                    </div>
                </motion.div>

                {/* Gifts Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-wine/20 flex-1" />
                        <h2 className="text-3xl font-serif text-gray-dark font-bold flex items-center gap-2">
                            <Gift className="w-6 h-6 text-wine" />
                            Tus Regalos
                        </h2>
                        <div className="h-px bg-wine/20 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Gift placeholders - you can customize these */}
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-wine/10 flex flex-col items-center gap-4"
                            >
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-wine/10 to-wine/20 flex items-center justify-center">
                                    <Gift className="w-12 h-12 text-wine" />
                                </div>
                                <h3 className="font-serif font-bold text-lg text-gray-dark">
                                    Regalo {i}
                                </h3>
                                <p className="text-gray-600 text-center text-sm">
                                    Una sorpresa especial para ti
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Footer Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center py-8"
                >
                    <p className="text-lg font-serif italic text-wine">
                        Cada detalle fue pensado con todo mi amor para ti ❤️
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
