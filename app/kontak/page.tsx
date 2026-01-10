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
                                            Jl. Contoh Alamat No. 123,<br />
                                            Jakarta, Indonesia
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gold/10 p-3 rounded-full mr-4">
                                        <Phone className="h-6 w-6 text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark mb-1">Telepon / WhatsApp</h4>
                                        <p className="text-gray-600">+62 812-3456-7890</p>
                                        <p className="text-gray-600 text-sm">(Senin - Jumat, 09.00 - 17.00 WIB)</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gold/10 p-3 rounded-full mr-4">
                                        <Mail className="h-6 w-6 text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark mb-1">Email</h4>
                                        <p className="text-gray-600">info@cahayawukuf.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-dark mb-6">Social Media</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-dark hover:bg-gold hover:text-white transition-all shadow-sm border border-gray-200">
                                    <Instagram className="h-6 w-6" />
                                </a>
                                <a href="#" className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-dark hover:bg-gold hover:text-white transition-all shadow-sm border border-gray-200">
                                    <Facebook className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder or Form */}
                    <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500">
                            <MapPin className="h-12 w-12 mb-4 opacity-50" />
                            <span className="font-medium">Google Maps Embed Placeholder</span>
                            <span className="text-sm mt-2">Replace with actual iframe</span>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
