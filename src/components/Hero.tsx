import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative text-center px-4 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-pink-warm/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-wine/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 max-w-2xl space-y-8"
            >
                <div className="space-y-4">
                    <motion.p
                        className="text-wine font-medium tracking-widest uppercase text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Para ti
                    </motion.p>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-dark leading-tight">
                        Tres días, <br />
                        <span className="text-wine">tres historias</span>
                    </h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-600 font-sans max-w-md mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Un regalo que se abre con el tiempo. Descubre cada momento cuando sea el instante correcto.
                    </motion.p>
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-8 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
            >
                <ChevronDown className="w-8 h-8 text-wine/50" />
            </motion.div>
        </section>
    );
}
