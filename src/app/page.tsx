"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function InvitationPage() {
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

    const moveNoButton = () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        setNoButtonPos({ x, y });
    };

    return (
        <main className="min-h-screen bg-cream flex flex-col items-center justify-center p-8 overflow-hidden relative">
            {/* Background hearts */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-20 left-20 text-pink-warm/20"
                >
                    <Heart size={64} fill="currentColor" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-40 right-40 text-wine/10"
                >
                    <Heart size={96} fill="currentColor" />
                </motion.div>
            </div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center space-y-12 max-w-lg"
            >
                <div className="space-y-6">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block text-wine"
                    >
                        <Heart size={80} fill="currentColor" />
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-dark leading-tight">
                        ¿Quieres ser mi <br />
                        <span className="text-wine">San Valentín?</span>
                    </h1>

                    <p className="text-xl text-gray-600 font-sans italic">
                        Tengo una historia de 3 días preparada para ti...
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Link
                        href="/timeline"
                        className="px-12 py-4 bg-wine text-white text-xl rounded-full font-bold shadow-lg hover:bg-wine/90 hover:scale-105 transition-all w-full md:w-auto text-center"
                    >
                        ¡SÍ! ❤️
                    </Link>

                    <motion.button
                        whileHover={{ x: noButtonPos.x, y: noButtonPos.y }}
                        onHoverStart={moveNoButton}
                        onClick={moveNoButton}
                        className="px-12 py-4 bg-gray-200 text-gray-500 text-xl rounded-full font-bold shadow-sm transition-all w-full md:w-auto"
                    >
                        No 😢
                    </motion.button>
                </div>
            </motion.div>
        </main>
    );
}
