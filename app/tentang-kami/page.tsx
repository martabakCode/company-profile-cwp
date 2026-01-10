import Section from "@/components/ui/Section";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ScrambleText from "@/components/ui/ScrambleText";
import { Target, Lightbulb, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            <Section className="pt-32 pb-16" background="dark">
                <AnimatedSection className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        <ScrambleText text="Tentang Kami" />
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Cahaya Wukuf Permana adalah perusahaan Event Organizer profesional yang berdedikasi untuk menciptakan pengalaman acara yang luar biasa dan tak terlupakan.
                    </p>
                </AnimatedSection>
            </Section>

            <Section background="white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <AnimatedSection animationType="slide-right" className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-dark mb-6">Profil Perusahaan</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            <span className="font-bold">Cahaya Wukuf Permana</span> adalah perusahaan yang bergerak di bidang jasa penyelenggaraan event khusus (Special Event Organizer), meliputi perencanaan, pengorganisasian, pengelolaan, dan pelaksanaan berbagai jenis acara profesional dan kreatif.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Perusahaan ini melayani berbagai klien mulai dari perusahaan swasta, instansi pemerintah, komunitas, hingga perorangan. Kami berkomitmen untuk menghadirkan event yang berkualitas dan bernilai tinggi.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection animationType="scale-in" delay={0.2} className="order-1 md:order-2 h-80 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-dark/5 flex items-center justify-center text-gray-400 rounded-2xl">
                            <span className="text-lg">Office / Team Photo</span>
                        </div>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center gap-4 p-4 rounded-full bg-gold/10 mb-6">
                            <Target className="h-8 w-8 text-gold" />
                            <h3 className="text-xl font-bold text-dark">Visi</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Menjadi perusahaan Event Organizer terpercaya dan profesional yang mampu menghadirkan event berkualitas, kreatif, dan bernilai tinggi di tingkat lokal maupun nasional.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow md:col-span-2">
                        <div className="flex items-center justify-center gap-4 p-4 rounded-full bg-gold/10 mb-6">
                            <Lightbulb className="h-8 w-8 text-gold" />
                            <h3 className="text-xl font-bold text-dark">Misi</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            <ul className="text-gray-600 text-sm list-disc pl-4 space-y-2">
                                <li>Memberikan layanan event yang terencana, terstruktur, dan berorientasi pada kepuasan klien.</li>
                                <li>Menghadirkan konsep acara yang kreatif, inovatif, dan sesuai tujuan event.</li>
                            </ul>
                            <ul className="text-gray-600 text-sm list-disc pl-4 space-y-2">
                                <li>Menjalin kerja sama jangka panjang berbasis profesionalisme dan kepercayaan.</li>
                                <li>Mengelola event secara efektif, efisien, dan bertanggung jawab.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
