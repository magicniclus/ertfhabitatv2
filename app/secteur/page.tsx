import { Metadata } from 'next';
import SecteurIndexClient from './SecteurIndexClient';

export const metadata: Metadata = {
  title: 'Nos villes d\'intervention - ERTF Habitat | Isolation thermique Gironde',
  description: 'Découvrez toutes nos villes d\'intervention en Gironde et région Bordelaise. Isolation thermique ITE, ITI, ravalement de façade, enduit dans toute la Gironde.',
  keywords: 'isolation Bordeaux, villes intervention ERTF Habitat, isolation thermique Gironde, ITE Bordeaux, ravalement façade Gironde',
  openGraph: {
    title: 'Nos villes d\'intervention - ERTF Habitat',
    description: 'Découvrez toutes nos villes d\'intervention en Gironde et région Bordelaise. Isolation thermique ITE, ITI, ravalement de façade, enduit.',
    type: 'website',
  },
};

export default function SecteurPage() {
  return <SecteurIndexClient />;
}
