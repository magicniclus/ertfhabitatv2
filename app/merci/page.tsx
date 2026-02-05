import { Metadata } from 'next';
import MerciClient from './merci-client';

// Métadonnées SEO pour la page merci
export const metadata: Metadata = {
  title: "Merci - ERTF Habitat | Demande Reçue",
  description: "Merci pour votre demande de devis ! ERTF Habitat vous recontactera rapidement pour votre projet d'isolation thermique, ITE, ITI, ravalement de façade en Gironde.",
  keywords: "merci demande devis, confirmation contact ERTF Habitat, demande reçue isolation thermique, suivi projet Bordeaux",
  authors: [{ name: "ERTF Habitat" }],
  creator: "ERTF Habitat",
  publisher: "ERTF Habitat",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciPage() {
  return <MerciClient />;
}
