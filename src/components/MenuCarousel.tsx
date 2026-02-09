"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

interface MenuCarouselProps {
    images: string[];
}

export default function MenuCarousel({ images }: MenuCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    return (
        <div className="w-full max-w-lg mx-auto space-y-4">
            {/* Main Carousel Display */}
            <div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-wine/10 group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full relative cursor-pointer"
                        onClick={() => openModal(currentIndex)}
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Menú página ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                            priority={currentIndex === 0}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        prevSlide();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full text-wine shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                    aria-label="Página anterior"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        nextSlide();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full text-wine shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                    aria-label="Página siguiente"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Page Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`relative w-16 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${currentIndex === idx ? "border-wine opacity-100" : "border-transparent opacity-60 hover:opacity-80"
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="64px"
                        />
                    </button>
                ))}
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div
                            className="relative w-full max-w-4xl h-full max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 p-4 text-white/50 hover:text-white transition-colors z-10"
                            >
                                <ChevronLeft className="w-10 h-10" />
                            </button>

                            <div className="relative w-full h-full">
                                <Image
                                    src={images[currentIndex]}
                                    alt={`Menú página ${currentIndex + 1}`}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    priority
                                />
                            </div>

                            <button
                                onClick={nextSlide}
                                className="absolute right-0 p-4 text-white/50 hover:text-white transition-colors z-10"
                            >
                                <ChevronRight className="w-10 h-10" />
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-lg font-medium">
                                {currentIndex + 1} / {images.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
