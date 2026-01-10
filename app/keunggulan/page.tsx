import Section from "@/components/ui/Section";
import FeatureCard from "@/components/ui/FeatureCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle, Clock, Shield, Award, Users, DollarSign, Lightbulb, Wallet } from "lucide-react";
import Link from "next/link";

export default function WhyUsPage() {
    const features = [
        {
            title: "Tim Profesional",
            description: "Didukung oleh tim yang berpengalaman, solid, dan ahli di bidangnya masing-masing untuk menjamin kualitas event.",
            icon: <Users className="w-8 h-8" />,
        },
        {
            title: "Konsep Kreatif & Inovatif",
            description: "Selalu menghadirkan ide-ide segar dan out-of-the-box agar event Anda memiliki nilai lebih dan memorable.",
            icon: <Lightbulb className="w-8 h-8" />, // Changed icon to Lightbulb
        },
        {
            title: "Tepat Waktu & Terpercaya",
            description: "Kami menjunjung tinggi kedisiplinan waktu (timeline management) dan integritas dalam setiap kerjasama.",
            icon: <Clock className="w-8 h-8" />,
        },
        {
            title: "Fleksibel & Solutif",
            description: "Mampu menyesuaikan layanan dengan kebutuhan spesifik dan anggaran yang dimiliki klien (Budget Friendly).",
            icon: <Wallet className="w-8 h-8" />, // Changed icon to Wallet
        },
        {
            title: "Jaringan Luas",
            description: "Memiliki networking vendor, talent, dan venue yang luas untuk mendukung keberhasilan acara.",
            icon: <CheckCircle className="w-8 h-8" />,
        },
        {
            title: "Legalitas Resmi",
            description: "Beroperasi di bawah payung hukum  Cahaya Wukuf Permana yang terdaftar resmi.",
            icon: <Shield className="w-8 h-8" />,
        },
    ];

    return (
        <>
            <Section className="pt-32 pb-16" background="dark">
                <AnimatedSection className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Mengapa Kami?</h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Kepercayaan Anda adalah amanah bagi kami. Inilah alasan mengapa ratusan klien memilih  Cahaya Wukuf Permana.
                    </p>
                </AnimatedSection>
            </Section>

            <Section background="white">
                <AnimatedSection animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <AnimatedSection key={index} animationType="scale-in" delay={index * 0.1}>
                            <FeatureCard
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                            />
                        </AnimatedSection>
                    ))}
                </AnimatedSection>

                <AnimatedSection animationType="fade-up" delay={0.3} className="bg-dark rounded-3xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Pencapaian Kami</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="p-4">
                            <span className="block text-4xl font-bold text-gold mb-2">5+</span>
                            <span className="text-gray-400">Tahun Pengalaman</span>
                        </div>
                        <div className="p-4">
                            <span className="block text-4xl font-bold text-gold mb-2">500+</span>
                            <span className="text-gray-400">Event Selesai</span>
                        </div>
                        <div className="p-4">
                            <span className="block text-4xl font-bold text-gold mb-2">100+</span>
                            <span className="text-gray-400">Klien Puas</span>
                        </div>
                        <div className="p-4">
                            <span className="block text-4xl font-bold text-gold mb-2">50+</span>
                            <span className="text-gray-400">Partner Vendor</span>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}
