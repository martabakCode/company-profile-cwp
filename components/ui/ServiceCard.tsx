import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import AnimatedCard from "./AnimatedCard";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    href?: string;
}

export default function ServiceCard({ title, description, icon, href = "/layanan" }: ServiceCardProps) {
    return (
        <AnimatedCard
            className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-gold/30"
        >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="text-gold h-6 w-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>

            <div className="mb-6 p-3 bg-dark inline-block rounded-xl border border-white/10 group-hover:border-gold/50 transition-colors">
                <div className="text-gold h-8 w-8">
                    {icon}
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">{description}</p>

            {href && (
                <Link href={href} className="inline-flex items-center text-sm font-medium text-gold hover:text-white transition-colors">
                    Pelajari Lebih Lanjut
                </Link>
            )}
        </AnimatedCard>
    );
}
