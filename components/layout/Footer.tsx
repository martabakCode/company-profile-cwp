import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-dark border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="relative h-40 w-96 mb-2">
                            <Image
                                src="/logo-cahaya.png"
                                alt=" Cahaya Wukuf Permana"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Mitra terpercaya Anda dalam penyelenggaraan acara profesional.
                            Mewujudkan visi acara Anda menjadi kenyataan yang tak terlupakan.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Menu</h4>
                        <ul className="space-y-2">
                            {[
                                { name: "Beranda", href: "/" },
                                { name: "Tentang Kami", href: "/tentang-kami" },
                                { name: "Layanan", href: "/layanan" },
                                { name: "Kontak", href: "/kontak" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-gold text-sm transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Layanan</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400 text-sm">Special Event Organizer</li>
                            <li className="text-gray-400 text-sm">MICE Management</li>
                            <li className="text-gray-400 text-sm">Brand Activation</li>
                            <li className="text-gray-400 text-sm">Production Support</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-gold mt-0.5 mr-3 shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    Jl. Parkit 1 Blok Y1 no 15 Bintaro Sektor 2, Ciputat Timur,<br />Tangerang Selatan, Indonesia
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-gold mr-3 shrink-0" />
                                <span className="text-gray-400 text-sm">+62 821-3015-2573</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 text-gold mr-3 shrink-0" />
                                <span className="text-gray-400 text-sm">cahayawp75@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()}  Cahaya Wukuf Permana. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
