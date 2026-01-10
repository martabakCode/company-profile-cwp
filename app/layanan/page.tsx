import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import { Sparkles, Calendar, Mic2, Music, Video, Palette, Megaphone, Presentation } from "lucide-react";

export default function ServicesPage() {
    const allServices = [
        {
            title: "Perencanaan Event",
            description: "Menyusun konsep kreatif, tema, budgeting, timeline kerja, hingga pembuatan proposal event yang komprehensif.",
            icon: <Sparkles />,
        },
        {
            title: "Pengorganisasian Event",
            description: "Melakukan koordinasi detail dengan tim internal, vendor, pengurusan perizinan, logistik, dan persiapan teknis lainnya.",
            icon: <Calendar />,
        },
        {
            title: "Pelaksanaan & Pengelolaan",
            description: "Memastikan seluruh rangkaian acara berjalan lancar sesuai rundown (Show Management) dan penanganan situasi lapangan.",
            icon: <Megaphone />,
        },
        {
            title: "Evaluasi Pasca-Event",
            description: "Memberikan laporan pertanggungjawaban dan evaluasi kinerja untuk memastikan kepuasan dan perbaikan berkelanjutan.",
            icon: <Presentation />,
        },
        {
            title: "Pameran & Expo",
            description: "Spesialisasi dalam manajemen pameran dagang, job fair, dan exhibition booth contractor.",
            icon: <Palette />,
        },
        {
            title: "Konferensi & Seminar",
            description: "Penyelenggaraan MICE (Meeting, Incentive, Convention, Exhibition) untuk korporat dan pemerintah.",
            icon: <Mic2 />,
        },
        {
            title: "Festival & Hiburan",
            description: "Event musik, festival budaya, gathering komunitas, dan acara hiburan skala besar.",
            icon: <Music />,
        },
        {
            title: "Seremoni Resmi",
            description: "Grand opening, ground breaking, launching produk, dan acara seremonial formal lainnya.",
            icon: <Video />,
        },
    ];

    return (
        <>
            <Section className="pt-32 pb-12" background="dark">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Layanan Kami</h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Solusi one-stop service untuk segala kebutuhan event Anda. Kami hadir untuk memastikan visi Anda terwujud dengan sempurna.
                    </p>
                </div>
            </Section>

            <Section background="dark" className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            href="#" // Stay on page or link to specific detail if available
                        />
                    ))}
                </div>
            </Section>
        </>
    );
}
