"use client";

import { motion, useInView, Variants, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    animationType?: "fade-up" | "fade-in" | "scale-in" | "slide-right" | "stagger" | "none";
    once?: boolean;
}

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    animationType = "fade-up",
    once = true,
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-100px" });
    const shouldReduceMotion = useReducedMotion();

    const variants: Record<string, Variants> = {
        "fade-up": {
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
            visible: { opacity: 1, y: 0, transition: { duration, delay, ease: "easeOut" } },
        },
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration, delay, ease: "easeOut" } },
        },
        "scale-in": {
            hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration, delay, ease: "easeOut" } },
        },
        "slide-right": {
            hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
            visible: { opacity: 1, x: 0, transition: { duration, delay, ease: "easeOut" } },
        },
        "stagger": {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.1,
                    delayChildren: delay,
                },
            },
        },
        "none": {
            hidden: {},
            visible: {},
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[animationType]}
            className={className}
        >
            {children}
        </motion.div>
    );
}
