"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
}

export default function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`transition-shadow duration-300 hover:shadow-xl ${className}`}
        >
            {children}
        </motion.div>
    );
}
