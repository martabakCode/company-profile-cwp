"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import CircularBadge from "./CircularBadge";
import BlurText from "./BlurText";
import AntiGravity from "./AntiGravity";

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundImage?: string;
}

export default function Hero({
    title,
    subtitle,
    ctaText = "Hubungi Kami",
    ctaLink = "/kontak", // eslint-disable-line @typescript-eslint/no-unused-vars
    backgroundImage = "/images/hero-bg.jpg" // eslint-disable-line @typescript-eslint/no-unused-vars
}: HeroProps) {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-dark z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 opacity-90" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-50" />
            </div>

            {/* Antigravity Decorations */}
            <AntiGravity className="absolute top-1/4 left-10 opacity-20 hidden md:block" strength={30}>
                <div className="w-20 h-20 rounded-full border border-gold/30" />
            </AntiGravity>
            <AntiGravity className="absolute bottom-1/3 right-10 opacity-20 hidden md:block" strength={40}>
                <div className="w-12 h-12 rounded-full bg-gold/10" />
            </AntiGravity>

            <div className="absolute top-20 right-4 md:right-20 z-20 opacity-50 md:opacity-100 hidden sm:block">
                <CircularBadge text=" • Professional • Creative • Trusted • Event Organizer" radius={60} />
            </div>

            <AnimatedSection
                animationType="stagger"
                className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                    <span className="block text-gold mb-2 text-xl md:text-3xl font-normal tracking-widest uppercase">
                        Cahaya Wukuf Permana
                    </span>
                    <BlurText text={title} />
                </h1>

                <motion.p
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.6 } }
                    }}
                    className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href={ctaLink}>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            whileInView={{
                                boxShadow: ["0 0 0px rgba(212, 175, 55, 0)", "0 0 10px rgba(212, 175, 55, 0.3)", "0 0 0px rgba(212, 175, 55, 0)"]
                            }}
                            viewport={{ once: false }}
                            transition={{
                                boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                scale: {
                                    duration: 0.2
                                }
                            }}
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-dark bg-gold hover:bg-white transition-colors rounded-full shadow-lg"
                        >
                            {ctaText}
                        </motion.button>
                    </Link>
                    <Link href="/layanan">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-white/20 transition-colors rounded-full"
                        >
                            Lihat Layanan
                        </motion.button>
                    </Link>
                </motion.div>
            </AnimatedSection>
        </div>
    );
}
