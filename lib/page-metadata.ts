import { Metadata } from 'next';
import { generateMetadata } from './seo-config';

// Métadonnées pour la page d'accueil
export const homeMetadata: Metadata = generateMetadata(
  "ERTF Habitat - Spécialiste Isolation Thermique Bordeaux Gironde",
  "ERTF Habitat, spécialiste isolation thermique en Gironde. ITE, ITI, ravalement de façade, enduit. Devis gratuit et intervention rapide région Bordelaise.",
  "/og-ertf-home.jpg",
  "/"
);

// Métadonnées pour la section services
export const servicesMetadata = {
  title: "Services Isolation Thermique - ITE, ITI, Ravalement | ERTF Habitat",
  description: "Découvrez nos services d'isolation thermique : ITE, ITI, ravalement de façade, enduit, bardage. Devis gratuit en Gironde et région Bordelaise.",
  keywords: [
    "services isolation thermique",
    "ITE Bordeaux", 
    "ITI Gironde",
    "ravalement façade",
    "enduit façade",
    "travaux isolation"
  ]
};

// Métadonnées pour la section réalisations
export const realisationsMetadata = {
  title: "Nos Réalisations en Isolation Thermique | ERTF Habitat",
  description: "Découvrez nos dernières réalisations en isolation thermique en Gironde. Projets résidentiels, commerciaux et industriels de qualité.",
  keywords: [
    "réalisations isolation thermique",
    "projets isolation",
    "chantiers Gironde",
    "travaux isolation finis",
    "portfolio isolation"
  ]
};

// Métadonnées pour la section contact
export const contactMetadata = {
  title: "Contact et Devis Gratuit | ERTF Habitat Spécialiste Isolation",
  description: "Contactez ERTF Habitat pour un devis gratuit. Intervention en Gironde pour tous vos travaux d'isolation thermique. Réponse rapide garantie.",
  keywords: [
    "devis gratuit isolation",
    "contact spécialiste isolation",
    "Gironde",
    "travaux isolation",
    "intervention rapide"
  ]
};

// Fonction pour générer des métadonnées de section
export function generateSectionMetadata(
  section: 'services' | 'realisations' | 'contact',
  baseUrl: string = ''
): Metadata {
  const sectionData = {
    services: servicesMetadata,
    realisations: realisationsMetadata,
    contact: contactMetadata
  }[section];

  return generateMetadata(
    sectionData.title,
    sectionData.description,
    `/og-ertf-${section}.jpg`,
    `${baseUrl}#${section}`
  );
}
