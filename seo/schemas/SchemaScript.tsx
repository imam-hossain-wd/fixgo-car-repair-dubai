import { SiteConfig } from "@/config/siteConfig";

export default function SchemaScript() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoRepair", "AutomotiveBusiness", "EmergencyService"],
        "@id": `${SiteConfig.url}/#organization`,
        "name": SiteConfig.brandName,
        "alternateName": "FixGo Mobile Mechanic Dubai",
        "url": SiteConfig.url,
        "logo": SiteConfig.ogImage !== "/" ? `${SiteConfig.url}${SiteConfig.ogImage}` : SiteConfig.url,
        "image": SiteConfig.ogImage !== "/" ? `${SiteConfig.url}${SiteConfig.ogImage}` : SiteConfig.url,
        "description": SiteConfig.description,
        "telephone": SiteConfig.phoneNumber || SiteConfig.displayNumber,
        "email": SiteConfig.email,
        "priceRange": "AED",
        "currenciesAccepted": "AED",
        "paymentAccepted": "Cash, Credit Card, Debit Card, Online Transfer",
        "foundingDate": String(SiteConfig.foundedYear || SiteConfig.founded || "2020"),
        "founder": {
          "@type": "Person",
          "name": SiteConfig.authorName
        },
        "hasMap": SiteConfig.GMB?.mapsLink,
        "sameAs": SiteConfig.socialLinks
          .map((s) => s.href)
          .filter((href) => href && href.length > 0),
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SiteConfig.streetAddress || SiteConfig.location,
          "addressLocality": SiteConfig.location,
          "addressRegion": SiteConfig.city,
          "addressCountry": SiteConfig.country === "UAE" ? "AE" : SiteConfig.country,
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": parseFloat(SiteConfig.GMB.latitude),
          "longitude": parseFloat(SiteConfig.GMB.longitude),
        },
        "openingHoursSpecification": SiteConfig.operatingHours.map((item) => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": `https://schema.org/${item.day}`,
          "opens": "00:00",
          "closes": "23:59",
        })),
        "areaServed": [
          {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": parseFloat(SiteConfig.GMB.latitude),
              "longitude": parseFloat(SiteConfig.GMB.longitude),
            },
            "geoRadius": "35000"
          },
          ...SiteConfig.serviceAreas.map((area) => ({
            "@type": "AdministrativeArea",
            "name": `${area.name}, ${SiteConfig.city}`,
            "url": `${SiteConfig.url}/area-we-serve/${area.slug}`
          }))
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "285",
          "bestRating": "5",
          "worstRating": "1",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "24/7 Doorstep Mobile Car Repair & Roadside Services",
          "itemListElement": SiteConfig.services.map((service, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "itemOffered": {
              "@type": "Service",
              "name": service.name,
              "url": `${SiteConfig.url}/services/${service.slug}`,
              "description": `Professional 24/7 ${service.name} service in ${SiteConfig.city} delivered directly to your location in 5 to 15 minutes by ${SiteConfig.brandName}.`,
              "provider": {
                "@id": `${SiteConfig.url}/#organization`
              },
              "areaServed": {
                "@type": "City",
                "name": SiteConfig.city
              }
            }
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SiteConfig.url}/#website`,
        "url": SiteConfig.url,
        "name": SiteConfig.brandName,
        "description": SiteConfig.description,
        "publisher": {
          "@id": `${SiteConfig.url}/#organization`,
        },
        "inLanguage": "en-US"
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}