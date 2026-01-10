"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spark {
    id: number;
    x: number;
    y: number;
}

export default function ClickSpark() {
    const [sparks, setSparks] = useState<Spark[]>([]);
    const sparkId = useRef(0);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const id = sparkId.current++;
            setSparks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);

            // Cleanup after animation
            setTimeout(() => {
                setSparks((prev) => prev.filter((s) => s.id !== id));
            }, 1000);
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            <AnimatePresence>
                {sparks.map((spark) => (
                    <SparkGroup key={spark.id} x={spark.x} y={spark.y} />
                ))}
            </AnimatePresence>
        </div>
    );
}

function SparkGroup({ x, y }: { x: number; y: number }) {
    // Create 8 particles for each burst
    const particles = Array.from({ length: 8 });

    return (
        <div style={{ position: "absolute", left: x, top: y }}>
            {particles.map((_, i) => (
                <SparkParticle key={i} index={i} total={8} />
            ))}
        </div>
    );
}

function SparkParticle({ index, total }: { index: number; total: number }) {
    const angle = (index / total) * 360;
    const radius = 30 + Math.random() * 20; // Random distance

    return (
        <motion.div
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
            animate={{
                x: Math.cos((angle * Math.PI) / 180) * radius,
                y: Math.sin((angle * Math.PI) / 180) * radius,
                opacity: 0,
                scale: 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute h-1.5 w-1.5 rounded-full bg-gold"
        />
    );
}
