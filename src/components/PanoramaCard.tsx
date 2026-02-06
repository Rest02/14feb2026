import { motion } from "framer-motion";
import { Lock, Check, Calendar, MapPin, Gift, Utensils } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DayStatus } from "@/lib/useUnlockStatus";

interface PanoramaCardProps {
    title: string;
    description: string;
    dateStr: string; // "Miércoles 11"
    iconType: "dinner" | "cabin" | "gift";
    status: DayStatus;
    index: number;
    href?: string;
}

export function PanoramaCard({
    title,
    description,
    dateStr,
    iconType,
    status,
    index,
    href,
}: PanoramaCardProps) {
    const isLocked = status === "LOCKED";
    const isCompleted = status === "COMPLETED";

    const icons = {
        dinner: Utensils,
        cabin: MapPin,
        gift: Gift,
    };

    const Icon = icons[iconType];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={twMerge(
                "relative rounded-2xl p-6 md:p-8 transition-all duration-300",
                isLocked
                    ? "bg-white/50 border border-gray-200"
                    : "bg-white border-2 hover:shadow-lg hover:-translate-y-1",
                status === "AVAILABLE" && "border-wine",
                status === "COMPLETED" && "border-completed",
            )}
        >
            {/* Date Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{dateStr}</span>
                </div>

                {/* Status Badge */}
                {isLocked && (
                    <div className="flex items-center gap-1 text-gray-400 bg-gray-100 px-3 py-1 rounded-full text-xs">
                        <Lock className="w-3 h-3" />
                        <span>Bloqueado</span>
                    </div>
                )}
                {status === "AVAILABLE" && (
                    <div className="flex items-center gap-1 text-white bg-wine px-3 py-1 rounded-full text-xs animate-pulse">
                        <span>¡Disponible hoy!</span>
                    </div>
                )}
                {isCompleted && (
                    <div className="flex items-center gap-1 text-white bg-completed px-3 py-1 rounded-full text-xs">
                        <Check className="w-3 h-3" />
                        <span>Completado</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className={clsx("space-y-4", isLocked && "blur-sm select-none grayscale")}>
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-wine">
                    <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-gray-dark font-bold">
                    {title}
                </h3>

                <p className="text-gray-600 leading-relaxed font-sans">
                    {description}
                </p>

                {/* Action Button */}
                {!isLocked && href && (
                    <div className="pt-4">
                        <a
                            href={href}
                            className="inline-flex items-center justify-center px-6 py-3 bg-wine text-white rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                        >
                            Ver detalles
                        </a>
                    </div>
                )}
            </div>

            {/* Locked Overlay (Extra protection/visual) */}
            {isLocked && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-sm">
                        <Lock className="w-6 h-6 text-gray-400" />
                    </div>
                </div>
            )}
        </motion.div>
    );
}
