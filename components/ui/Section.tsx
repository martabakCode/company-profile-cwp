import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: "white" | "dark" | "gray";
}

export default function Section({ children, className = "", id, background = "dark" }: SectionProps) {
    const bgColors = {
        white: "bg-white text-dark",
        dark: "bg-dark text-white",
        gray: "bg-neutral-900 text-white",
    };

    return (
        <section id={id} className={`py-16 md:py-24 ${bgColors[background]} ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}
