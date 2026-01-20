import { Metadata } from 'next';
import HomeClient from './home-client';

// Métadonnées SEO pour la page d'accueil
export const metadata: Metadata = {
  title: "ERTF - Isolation Thermique et Façade Gironde | ITE, ITI, Ravalement | Devis Gratuit",
  description: "ERTF, spécialiste isolation thermique extérieure (ITE), isolation intérieure (ITI), ravalement de façade, enduit et bardage en Gironde. Équipe expérimentée. Devis gratuit.",
  keywords: "isolation thermique, ITE, ITI, ravalement façade, enduit, bardage, ERTF, isolation Gironde, rénovation énergétique, devis gratuit",
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ERTF - Isolation Thermique et Façade en Gironde",
    description: "Spécialiste isolation thermique extérieure (ITE), isolation intérieure (ITI), ravalement de façade, enduit et bardage en Gironde. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "ERTF - Isolation et Façade",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ERTF - Isolation Thermique et Façade Gironde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERTF - Isolation Thermique et Façade",
    description: "Spécialiste isolation thermique extérieure (ITE), isolation intérieure (ITI), ravalement de façade, enduit et bardage en Gironde.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return <HomeClient />;
}
