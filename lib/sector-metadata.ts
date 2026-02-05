import { Metadata } from 'next';

export function generateSectorMetadata(
  sectorName: string,
  location: string,
  description: string,
  keywords: string[]
): Metadata {
  return {
    title: `Isolation Thermique ${location} – ERTF Habitat | Devis Gratuit`,
    description: description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `Isolation Thermique ${location} – ERTF Habitat`,
      description: description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'ERTF Habitat - Spécialiste Isolation Thermique',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Isolation Thermique ${location} – ERTF Habitat`,
      description: description,
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
    alternates: {
      canonical: `https://ertfhabitat.fr/ville/${location.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
    },
  };
}
