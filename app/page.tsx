import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BubbleMenu from "@/components/ui/BubbleMenu";
import { Sparkles, Calendar, Mic2, Music, Home as HomeIcon, Phone, Info, Briefcase } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Special Event Organizer",
      description: "Perencanaan dan eksekusi acara spektakuler yang disesuaikan dengan kebutuhan dan visi Anda.",
      icon: <Sparkles />,
    },
    {
      title: "MICE Management",
      description: "Pengelolaan profesional untuk Meeting, Incentive, Convention, dan Exhibition berskala besar.",
      icon: <Calendar />,
    },
    {
      title: "Brand Activation",
      description: "Strategi kreatif untuk meningkatkan kesadaran dan interaksi pelanggan dengan brand Anda.",
      icon: <Mic2 />,
    },
    {
      title: "Entertainment & Production",
      description: "Penyediaan talent dan dukungan produksi teknis audio visual berkualitas tinggi.",
      icon: <Music />,
    },
  ];

  return (
    <>
      <Hero
        title=" Professional Special Event Organizer"
        subtitle="Jasa penyelenggara event khusus yang menghadirkan konsep kreatif, inovatif, dan profesional untuk kesuksesan acara Anda."
        ctaText="Hubungi Kami"
        ctaLink="/kontak"
      />

      <Section background="dark" className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection animationType="fade-up">
            <SectionHeader
              title="Layanan Event Profesional"
              subtitle="Kami menangani berbagai kebutuhan event dari perencanaan hingga evaluasi."
              align="center"
              light={true}
            />
          </AnimatedSection>
        </div>

        <AnimatedSection animationType="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} animationType="fade-up" delay={index * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </AnimatedSection>
          ))}
        </AnimatedSection>

        <AnimatedSection animationType="fade-in" delay={0.4} className="mt-12 text-center">
          <Link
            href="/layanan"
            className="inline-flex items-center text-gold hover:text-white font-medium transition-colors border-b border-gold hover:border-white pb-1"
          >
            Lihat Selengkapnya
          </Link>
        </AnimatedSection>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animationType="slide-right">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Mengapa Memilih <span className="text-gold-dark"> Cahaya Wukuf Permana?</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kami berdedikasi untuk memberikan layanan terbaik dengan tim profesional dan konsep yang inovatif.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Tim profesional & berpengalaman",
                "Konsep kreatif & inovatif",
                "Tepat waktu & terpercaya",
                "Fleksibel sesuai anggaran"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-dark-light">
                  <span className="h-2 w-2 bg-gold rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/tentang-kami"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-dark hover:bg-gold-dark transition-colors rounded-lg"
            >
              Tentang Kami
            </Link>
          </AnimatedSection>
          <AnimatedSection animationType="scale-in" delay={0.2} className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-dark/5 flex items-center justify-center text-gray-400">
              <span className="text-lg">Event Documentation</span>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section background="dark" className="border-t border-white/5">
        <div className="bg-gradient-to-r from-gold via-gold-dark to-gold rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-dark mb-4">Siap Mewujudkan Event Impian Anda?</h2>
            <p className="text-dark-light/80 mb-8 max-w-2xl mx-auto">
              Diskusikan kebutuhan event Anda bersama tim kami. Kami siap memberikan solusi terbaik.
            </p>
            <Link
              href="/kontak"
              className="inline-block bg-dark text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-dark transition-all transform hover:scale-105 shadow-xl"
            >
              Hubungi Kami Sekarang
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 mix-blend-overlay" />
        </div>
      </Section>
      <BubbleMenu
        items={[
          { icon: <HomeIcon />, label: "Beranda", href: "/" },
          { icon: <Briefcase />, label: "Layanan", href: "/layanan" },
          { icon: <Info />, label: "Tentang", href: "/tentang-kami" },
          { icon: <Phone />, label: "Kontak", href: "/kontak" },
        ]}
      />
    </>
  );
}
