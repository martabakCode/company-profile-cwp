"use client";

import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

interface BubbleMenuProps {
    items: {
        icon: React.ReactNode;
        label: string;
        href: string;
    }[];
}

export default function BubbleMenu({ items }: BubbleMenuProps) {
    const mouseX = useMotionValue(Infinity);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 h-16 px-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-end gap-2 pb-3 shadow-[0_0_30px_rgb(0,0,0,0.3)] z-50 overflow-visible"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}>
            {items.map((item, i) => (
                <BubbleItem key={i} mouseX={mouseX} {...item} />
            ))}
        </div>
    );
}

function BubbleItem({ mouseX, icon, href, label }: { mouseX: MotionValue; icon: React.ReactNode; href: string; label: string }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                style={{ width }}
                className="aspect-square bg-dark border border-gold/30 rounded-full flex items-center justify-center relative group"
            >
                <div className="w-full h-full flex items-center justify-center text-gold">
                    <div className="scale-75 group-hover:scale-100 transition-transform">
                        {icon}
                    </div>
                </div>
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {label}
                </span>
            </motion.div>
        </Link>
    );
}
