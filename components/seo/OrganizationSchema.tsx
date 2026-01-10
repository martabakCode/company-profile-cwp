import Script from "next/script";

export default function OrganizationSchema() {
    const schema = {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Cahaya Wukuf Permana",
        "url": "https://cahayawukuf.com",
        "logo": "https://cahayawukuf.com/logo-cahaya.png",
        "description": "Jasa Penyelenggara Event Khusus (Special Event Organizer) profesional di Indonesia. Melayani pameran, konferensi, dan event korporat.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Contoh Alamat No. 123",
            "addressLocality": "Jakarta",
            "addressRegion": "DKI Jakarta",
            "postalCode": "12000",
            "addressCountry": "ID"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-812-3456-7890",
            "contactType": "customer service"
        },
        "sameAs": [
            "https://facebook.com/cahayawukuf",
            "https://instagram.com/cahayawukuf"
        ]
    };

    return (
        <Script id="organization-schema" type="application/ld+json">
            {JSON.stringify(schema)}
        </Script>
    );
}
