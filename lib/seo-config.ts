import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "ERTF - Isolation Thermique et Façade en Gironde | ITE, ITI, Ravalement",
  description: "ERTF, spécialiste de l'isolation thermique par l'extérieur (ITE), isolation intérieure (ITI), ravalement de façade, enduit et bardage en Gironde. Devis gratuit. Rayon d'intervention: 150 km.",
  keywords: [
    "isolation thermique extérieure Gironde",
    "ITE Bordeaux",
    "isolation intérieure Le Bouscat",
    "ravalement façade Gironde",
    "enduit façade 33",
    "bardage Bordeaux",
    "ERTF",
    "isolation thermique Bordeaux",
    "rénovation énergétique Gironde",
    "devis gratuit isolation",
    "façade Gironde",
    "travaux isolation Le Bouscat",
    "ITE Le Bouscat"
  ],
  author: "ERTF",
  siteUrl: "https://ertf-habitat.fr",
  siteName: "ERTF - Isolation Thermique et Façade",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@ertf"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "ERTF",
  "legalName": "ERTF - Isolation Thermique et Façade",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.jpeg`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Abdelkrim HAMDI"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "81 Boulevard Pierre 1er",
    "addressLocality": "Le Bouscat",
    "postalCode": "33110",
    "addressRegion": "Nouvelle-Aquitaine",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "0783938694",
    "contactType": "customer service",
    "email": "ertftravaux@gmail.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Gironde"
    },
    {
      "@type": "City", 
      "name": "Bordeaux"
    },
    {
      "@type": "City",
      "name": "Le Bouscat"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Nouvelle-Aquitaine"
    }
  ],
  "serviceType": [
    "Isolation Thermique par l'Extérieur (ITE)",
    "Isolation Thermique Intérieure (ITI)", 
    "Ravalement de Façade",
    "Enduit de Façade",
    "Bardage",
    "Rénovation Énergétique",
    "Travaux de Façade"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Sa 08:00-19:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services d'isolation thermique et façade",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Isolation Thermique par l'Extérieur (ITE)",
          "description": "Amélioration de la performance énergétique par isolation extérieure"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Isolation Thermique Intérieure (ITI)",
          "description": "Solutions d'isolation intérieure pour confort et économies d'énergie"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Ravalement de Façade",
          "description": "Rénovation et embellissement de façades en Gironde"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Enduit de Façade",
          "description": "Application d'enduits de qualité pour finition parfaite"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Bardage",
          "description": "Installation de bardage pour modernisation et protection"
        }
      }
    ]
  }
};
