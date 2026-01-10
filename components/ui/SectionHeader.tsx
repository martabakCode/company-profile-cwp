interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
    light?: boolean;
}

export default function SectionHeader({ title, subtitle, align = "left", light = false }: SectionHeaderProps) {
    const alignClass = {
        left: "text-left",
        center: "text-center mx-auto",
        right: "text-right ml-auto",
    };

    return (
        <div className={`mb-12 ${alignClass[align]} max-w-4xl`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-dark"}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg leading-relaxed ${light ? "text-gray-300" : "text-gray-600"}`}>
                    {subtitle}
                </p>
            )}
            <div className={`h-1 w-20 bg-gold mt-6 ${align === "center" ? "mx-auto" : ""}`} />
        </div>
    );
}
