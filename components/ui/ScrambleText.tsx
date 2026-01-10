"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrambleTextProps {
    text: string;
    className?: string;
    speed?: number;
    revealSpeed?: number;
    trigger?: "hover" | "view";
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export default function ScrambleText({
    text,
    className = "",
    speed = 50,
    revealSpeed = 100,
    trigger = "view",
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        let iteration = 0;
        const maxIterations = text.length;

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= maxIterations) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setIsScrambling(false);
            }

            iteration += 1 / (revealSpeed / 10); // Control speed of revealing
        }, speed);
    };

    useEffect(() => {
        if (trigger === "view" && isInView) {
            scramble();
        }
    }, [isInView, trigger]);

    const handleMouseEnter = () => {
        if (trigger === "hover") {
            scramble();
        }
    };

    return (
        <motion.span
            ref={ref}
            className={className}
            onMouseEnter={handleMouseEnter}
            initial={{ opacity: 1 }} // Ensure visible for SEO
        >
            {displayText}
        </motion.span>
    );
}
