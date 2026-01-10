import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Cahaya Wukuf Permana",
    default: "Cahaya Wukuf Permana – Event Organizer Profesional Indonesia",
  },
  description: "Cahaya Wukuf Permana adalah Jasa Penyelenggara Event Khusus (Special Event Organizer) profesional di Indonesia. Melayani pameran, konferensi, dan event korporat.",
  metadataBase: new URL("https://cahayawukuf.com"),
  openGraph: {
    title: "Cahaya Wukuf Permana – Event Organizer Profesional Indonesia",
    description: "Jasa Penyelenggara Event Khusus (Special Event Organizer) profesional. Solusi kreatif untuk pameran, seminar, dan event branding.",
    url: "https://cahayawukuf.com",
    siteName: " Cahaya Wukuf Permana",
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: " Cahaya Wukuf Permana",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

import ClickSpark from "@/components/ui/ClickSpark";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-white`}
      >
        <OrganizationSchema />
        <ClickSpark />
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
