import { Metadata } from 'next';
import ContactClient from './contact-client';

// Métadonnées SEO pour la page contact
export const metadata: Metadata = {
  title: "Contact - ERTF Habitat | Devis Gratuit Isolation Thermique Bordeaux",
  description: "Contactez ERTF Habitat pour vos travaux d'isolation thermique : ITE, ITI, ravalement de façade, enduit en Gironde. Devis gratuit et personnalisé.",
  keywords: "contact ERTF Habitat, devis gratuit isolation Bordeaux, contact spécialiste isolation Gironde, devis ITE Bordeaux, contact isolation thermique, travaux isolation contact",
  authors: [{ name: "ERTF Habitat" }],
  creator: "ERTF Habitat",
  publisher: "ERTF Habitat",
  openGraph: {
    title: "Contact ERTF Habitat - Devis Gratuit Isolation Thermique Bordeaux",
    description: "Contactez nos experts en isolation thermique pour votre projet. Devis gratuit et personnalisé en Gironde.",
    type: "website",
    locale: "fr_FR",
    siteName: "ERTF Habitat - Spécialiste Isolation Thermique",
  },
  twitter: {
    card: "summary",
    title: "Contact ERTF Habitat - Devis Gratuit Isolation Thermique",
    description: "Contactez nos experts en isolation thermique pour votre projet en Gironde.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}