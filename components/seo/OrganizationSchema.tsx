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
            "streetAddress": "Jl. Parkit 1 Blok Y1 no 15 Bintaro Sektor 2 Ciputat Timur",
            "addressLocality": "Tangerang Selatan",
            "addressRegion": "Banten",
            "postalCode": "15412",
            "addressCountry": "ID"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-821-3015-2573",
            "contactType": "customer service"
        }
    };

    return (
        <Script id="organization-schema" type="application/ld+json">
            {JSON.stringify(schema)}
        </Script>
    );
}
