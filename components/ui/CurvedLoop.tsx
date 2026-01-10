"use client";

import { motion } from "framer-motion";

interface CurvedLoopProps {
    text: string;
    radius?: number;
    className?: string;
    reverse?: boolean;
}

export default function CurvedLoop({ text, radius = 50, className = "", reverse = false }: CurvedLoopProps) {
    return (
        <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
            <motion.svg
                animate={{ rotate: reverse ? -360 : 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 300 300"
                width={radius * 2}
                height={radius * 2}
                className="w-full h-full"
            >
                <defs>
                    <path
                        id="circlePath"
                        d="M 150, 150 m -75, 0 a 75,75 0 0,1 150,0 a 75,75 0 0,1 -150,0"
                    />
                </defs>
                <text fill="currentColor">
                    <textPath xlinkHref="#circlePath" className="text-sm font-bold uppercase tracking-widest text-gold/80">
                        {text} • {text} • {text} •
                    </textPath>
                </text>
            </motion.svg>
        </div>
    );
}
