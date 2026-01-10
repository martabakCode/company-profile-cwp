"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AntiGravityProps {
    children: ReactNode;
    className?: string;
    strength?: number;
}

export default function AntiGravity({ children, className = "", strength = 20 }: AntiGravityProps) {
    // Randomize floating parameters
    const duration = 3 + Math.random() * 2;
    const yOffset = strength;
    const rotateRange = 5;

    return (
        <motion.div
            animate={{
                y: [-yOffset, yOffset, -yOffset],
                rotate: [-rotateRange, rotateRange, -rotateRange],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
