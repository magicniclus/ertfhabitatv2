import { Metadata } from 'next';
import CGVClient from './cgv-client';

// Métadonnées SEO pour la page CGV
export const metadata: Metadata = {
  title: "Conditions Générales de Vente - ERTF Habitat | CGV Isolation",
  description: "Consultez les Conditions Générales de Vente d'ERTF Habitat pour vos travaux d'isolation thermique : ITE, ITI, ravalement, enduit, bardage en Gironde. Garanties et modalités de service.",
  keywords: "CGV ERTF Habitat, conditions générales vente isolation, garantie travaux Bordeaux, modalités service isolation, CGV artisan isolation",
  authors: [{ name: "ERTF Habitat" }],
  creator: "ERTF Habitat",
  publisher: "ERTF Habitat",
  openGraph: {
    title: "CGV ERTF Habitat - Conditions Générales de Vente",
    description: "Conditions Générales de Vente pour vos travaux d'isolation thermique en Gironde.",
    type: "website",
    locale: "fr_FR",
    siteName: "ERTF Habitat - Spécialiste Isolation Thermique",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CGVPage() {
  return <CGVClient />;
}