import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const lebouscatConfig = {
  // SEO et métadonnées
  title: "Isolation Thermique et Façade au Bouscat - ERTF",
  description: "ERTF, entreprise locale d'isolation thermique (ITE, ITI) et travaux de façade au Bouscat. Ravalement, enduit, bardage. Devis gratuit. Basés au 81 Boulevard Pierre 1er.",
  keywords: ["isolation thermique Le Bouscat", "ITE Le Bouscat", "ravalement façade Le Bouscat", "enduit Le Bouscat", "bardage Le Bouscat", "devis gratuit Le Bouscat", "ERTF Le Bouscat", "entreprise isolation Le Bouscat"],
  
  // Contenu principal
  serviceName: "Isolation et Façade au Bouscat",
  heroImage: "/prestation-2.png",
  heroTitle: "Votre Entreprise Locale au Bouscat",
  heroSubtitle: "ERTF, basée au 81 Boulevard Pierre 1er au Bouscat, est votre spécialiste local en isolation thermique (ITE, ITI), ravalement, enduit et bardage. Proximité et réactivité garanties.",
  
  // Localisation
  sector: "Isolation - Façade",
  location: "Le Bouscat et environs",
  
  // Description détaillée
  mainDescription: "ERTF est votre entreprise de proximité au Bouscat pour tous vos travaux d'isolation thermique et de façade. Situés au 81 Boulevard Pierre 1er, nous connaissons parfaitement les spécificités des bâtiments bouscatais et intervenons rapidement chez vous. Notre équipe de 2 à 5 professionnels expérimentés vous accompagne dans vos projets d'isolation thermique par l'extérieur (ITE), isolation intérieure (ITI), ravalement de façade, enduit et bardage. Avec 4 ans d'expérience en conduite de travaux et nos garanties décennale et RC, nous assurons des prestations de qualité conformes aux normes en vigueur.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Rénover au Bouscat : Les Enjeux",
    description: "Le Bouscat, commune résidentielle prisée de la métropole bordelaise, compte de nombreux bâtiments nécessitant une rénovation énergétique et esthétique.",
    problems: [
      "Maisons anciennes mal isolées",
      "Façades dégradées par le temps",
      "Factures énergétiques élevées",
      "Humidité et infiltrations",
      "Besoin de modernisation",
      "Valorisation du patrimoine immobilier"
    ]
  },
  
  diagnosticSection: {
    title: "Diagnostic Gratuit au Bouscat",
    description: "En tant qu'entreprise locale basée au Bouscat, nous nous déplaçons gratuitement chez vous pour réaliser un diagnostic complet et vous proposer les meilleures solutions.",
    steps: [
      "Visite gratuite à votre domicile au Bouscat",
      "Analyse détaillée de votre bâtiment",
      "Étude thermique personnalisée",
      "Proposition de solutions adaptées",
      "Accompagnement pour les aides (MaPrimeRénov', CEE)",
      "Devis gratuit détaillé sous 48h"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions au Bouscat",
    description: "ERTF propose des solutions complètes d'isolation et de façade adaptées aux maisons et immeubles du Bouscat, du centre-ville aux quartiers résidentiels.",
    solutions: [
      "ITE pour maisons individuelles",
      "ITI pour appartements et copropriétés",
      "Ravalement de façade traditionnel",
      "Enduit monocouche et décoratif",
      "Bardage bois et composite",
      "Rénovation énergétique globale"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "ITE au Bouscat",
      description: "Isolation thermique par l'extérieur pour maisons et immeubles bouscatais. Réduction des déperditions thermiques et amélioration du confort."
    },
    {
      title: "ITI au Bouscat",
      description: "Solutions d'isolation intérieure adaptées aux contraintes des bâtiments du Bouscat. Idéal pour les copropriétés."
    },
    {
      title: "Ravalement Le Bouscat",
      description: "Ravalement de façade respectueux du caractère résidentiel du Bouscat. Nettoyage, réparation et embellissement."
    },
    {
      title: "Enduit Le Bouscat",
      description: "Application d'enduit de façade avec choix de couleurs adaptées au style bouscatais. Finitions soignées garanties."
    },
    {
      title: "Bardage Le Bouscat",
      description: "Pose de bardage pour moderniser votre maison au Bouscat. Large choix de matériaux et de finitions."
    },
    {
      title: "Proximité",
      description: "Basés au 81 Boulevard Pierre 1er, nous intervenons rapidement chez vous au Bouscat. Disponibilité et réactivité."
    },
    {
      title: "Connaissance Locale",
      description: "Parfaite connaissance des spécificités architecturales et réglementaires du Bouscat pour des travaux adaptés."
    },
    {
      title: "Garanties",
      description: "Garantie décennale et RC professionnelle sur tous nos travaux au Bouscat pour votre tranquillité d'esprit."
    }
  ],
  
  // Avantages
  advantages: [
    "Entreprise locale basée au Bouscat",
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Intervention rapide (proximité)",
    "Tarification transparente",
    "Équipe de 2 à 5 professionnels",
    "4 ans d'expérience",
    "Garantie décennale et RC",
    "Matériaux de qualité",
    "Accompagnement aides financières",
    "Connaissance du secteur",
    "Chantier propre et organisé"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Le Bouscat Centre",
    "Le Bouscat Hippodrome",
    "Le Bouscat Sainte-Germaine",
    "Le Bouscat Écureuil",
    "Bordeaux",
    "Bruges",
    "Eysines",
    "Blanquefort",
    "Mérignac",
    "Pessac",
    "Talence",
    "Métropole bordelaise"
  ],
  
  // Contact
  contactInfo: {
    phone: "07 83 93 86 94",
    email: "ertftravaux@gmail.com",
    address: "81 Boulevard Pierre 1er, 33110 Le Bouscat"
  }
};

// Métadonnées SEO automatiques
export const metadata: Metadata = {
  title: "Isolation Thermique et Façade Le Bouscat - ERTF | Devis Gratuit",
  description: lebouscatConfig.description,
  keywords: lebouscatConfig.keywords.join(", "),
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  openGraph: {
    title: "Isolation Thermique et Façade Le Bouscat - ERTF",
    description: lebouscatConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LeBoscatPage() {
  return <ServicePage {...lebouscatConfig} />;
}
