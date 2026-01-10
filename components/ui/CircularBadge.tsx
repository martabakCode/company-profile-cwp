"use client";

import { motion } from "framer-motion";

interface CircularBadgeProps {
    text: string;
    className?: string;
    radius?: number;
}

export default function CircularBadge({ text, className = "", radius = 50 }: CircularBadgeProps) {
    const characters = text.split("");
    const totalChars = characters.length;
    const degrees = 360 / totalChars;

    return (
        <div className={`relative flex items-center justify-center ${className}`} style={{ width: radius * 2.5, height: radius * 2.5 }}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
            >
                {characters.map((char, i) => (
                    <span
                        key={i}
                        className="absolute font-mono font-bold text-xs uppercase text-gold"
                        style={{
                            transform: `rotate(${i * degrees}deg) translateY(-${radius}px)`,
                            transformOrigin: "center center",
                        }}
                    >
                        {char}
                    </span>
                ))}
            </motion.div>
            <div className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-xl">✨</span>
            </div>
        </div>
    );
}
