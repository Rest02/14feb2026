"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, MapPin, Shirt, Utensils } from "lucide-react";
import Link from "next/link";

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
                        La Pasta de la Nona
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
                        <p className="text-gray-600">19:00 hrs</p>
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
                    <h2 className="text-3xl font-serif text-wine font-bold">¿Por qué pasta, mi amor?</h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
                        <p>
                            Dicen que la pasta es como el amor: necesita tiempo, paciencia y los ingredientes correctos para ser perfecta. No es solo harina y huevo, es el arte de unir elementos simples para crear algo extraordinario.
                        </p>
                        <p>
                            Igual que en nuestra historia, cada forma de pasta tiene su propósito, cada salsa su compañero ideal. Esta noche quiero que nos envolvamos en ese calor de hogar, en la tradición de compartir un plato hecho con el corazón, y brindar por nosotros, que somos la receta perfecta.
                        </p>
                    </div>
                </motion.div>

                {/* PDF Menu Section */}
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

                    <div className="bg-white p-2 rounded-2xl shadow-lg h-[600px] border border-gray-200">
                        {/* PDF Viewer using iframe */}
                        <iframe
                            src="/menu.pdf"
                            className="w-full h-full rounded-xl"
                            title="Menú del Restaurante"
                        />
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
