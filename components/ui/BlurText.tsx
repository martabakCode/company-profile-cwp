"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function BlurText({ text, className = "", delay = 0 }: BlurTextProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const words = text.split(" ");

    return (
        <span ref={ref} className={`inline-block ${className}`}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                    animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.8,
                        delay: delay + i * 0.1,
                        ease: "easeOut",
                    }}
                    className="inline-block mr-2"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
}
