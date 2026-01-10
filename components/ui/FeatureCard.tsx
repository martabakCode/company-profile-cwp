"use client";

import { ReactNode } from "react";
import AnimatedCard from "./AnimatedCard";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
        <AnimatedCard
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300"
        >
            <div className="p-4 bg-gold/10 rounded-full mb-6 text-gold">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
            <p className="text-gray-500 leading-relaxed">{description}</p>
        </AnimatedCard>
    );
}
