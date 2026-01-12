import Section from "@/components/ui/Section";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Section className="pt-32 pb-16" background="dark">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Hubungi Kami</h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Siap untuk memulai project event Anda? Tim kami siap membantu memberikan solusi terbaik.
                    </p>
                </div>
            </Section>

            <Section background="white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-dark mb-6">Informasi Kontak</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-gold/10 p-3 rounded-full mr-4">
                                        <MapPin className="h-6 w-6 text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark mb-1">Alamat Kantor</h4>
                                        <p className="text-gray-600">
                                            Jl. Parkit 1 Blok Y1 no 15 Bintaro Sektor 2, Ciputat Timur,<br />
                                            Tangerang Selatan, Indonesia
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gold/10 p-3 rounded-full mr-4">
                                        <Phone className="h-6 w-6 text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark mb-1">Telepon / WhatsApp</h4>
                                        <p className="text-gray-600">+62 821-3015-2573</p>
                                        <p className="text-gray-600 text-sm">(Senin - Jumat, 09.00 - 17.00 WIB)</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gold/10 p-3 rounded-full mr-4">
                                        <Mail className="h-6 w-6 text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark mb-1">Email</h4>
                                        <p className="text-gray-600">cahayawp75@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative">
                        <iframe
                            title="Lokasi Jl. Parkit 1 Blok Y1 No 15 Bintaro"
                            src="https://www.google.com/maps?q=Jl.%20Parkit%201%20Blok%20Y1%20No%2015%20Bintaro%20Sektor%202%20Ciputat%20Timur%20Tangerang%20Selatan&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </Section>
        </>
    );
}
