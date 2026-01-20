import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const pessacConfig = {
  // SEO et métadonnées
  title: "Isolation Thermique et Façade à Pessac - ERTF",
  description: "ERTF, spécialiste de l'isolation thermique (ITE, ITI) et des travaux de façade à Pessac. Ravalement, enduit, bardage. Devis gratuit et personnalisé. Intervention rapide.",
  keywords: ["isolation thermique Pessac", "ITE Pessac", "ravalement façade Pessac", "enduit Pessac", "bardage Pessac", "devis gratuit Pessac", "ERTF Pessac", "rénovation énergétique Pessac"],
  
  // Contenu principal
  serviceName: "Isolation et Façade à Pessac",
  heroImage: "/prestation-4.png",
  heroTitle: "Entreprise d'Isolation et Façade à Pessac",
  heroSubtitle: "ERTF intervient à Pessac pour tous vos travaux d'isolation thermique (ITE, ITI), ravalement de façade, enduit et bardage. Expertise locale et devis gratuit.",
  
  // Localisation
  sector: "Isolation - Façade",
  location: "Pessac et environs",
  
  // Description détaillée
  mainDescription: "ERTF est votre entreprise de référence pour l'isolation thermique et les travaux de façade à Pessac. Basés au Bouscat, nous intervenons rapidement sur toute la commune de Pessac pour vos projets d'isolation thermique par l'extérieur (ITE), isolation intérieure (ITI), ravalement de façade, enduit et bardage. Notre équipe de 2 à 5 professionnels expérimentés connaît les spécificités des bâtiments pessacais et vous accompagne avec une garantie décennale et RC professionnelle. Forte de 4 ans d'expérience en conduite de travaux, ERTF garantit des prestations conformes aux normes en vigueur.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Pourquoi Rénover à Pessac ?",
    description: "Pessac, ville universitaire et résidentielle de la métropole, compte de nombreux bâtiments nécessitant une rénovation énergétique pour améliorer le confort et réduire les dépenses.",
    problems: [
      "Maisons anciennes mal isolées",
      "Façades dégradées",
      "Factures énergétiques élevées",
      "Inconfort thermique",
      "Humidité et infiltrations",
      "Valorisation du patrimoine immobilier"
    ]
  },
  
  diagnosticSection: {
    title: "Notre Diagnostic Gratuit à Pessac",
    description: "ERTF se déplace gratuitement à Pessac pour réaliser un diagnostic complet de votre bâtiment et vous proposer les solutions les plus adaptées.",
    steps: [
      "Visite technique gratuite à Pessac",
      "Analyse de l'état de la façade et de l'isolation",
      "Étude thermique personnalisée",
      "Proposition de solutions techniques",
      "Accompagnement pour les aides financières",
      "Devis gratuit détaillé sous 48h"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions à Pessac",
    description: "ERTF propose une gamme complète de solutions d'isolation thermique et de façade adaptées aux bâtiments pessacais, des quartiers résidentiels au campus universitaire.",
    solutions: [
      "Isolation thermique par l'extérieur (ITE)",
      "Isolation thermique intérieure (ITI)",
      "Ravalement de façade tous supports",
      "Enduit monocouche et traditionnel",
      "Bardage bois, composite et PVC",
      "Rénovation énergétique complète"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "ITE à Pessac",
      description: "Installation d'isolation thermique par l'extérieur sur maisons et immeubles pessacais. Réduction des déperditions et amélioration du confort."
    },
    {
      title: "ITI à Pessac",
      description: "Solutions d'isolation intérieure adaptées aux appartements et maisons de Pessac. Idéal pour les copropriétés."
    },
    {
      title: "Ravalement Pessac",
      description: "Ravalement de façade pour tous types de bâtiments à Pessac. Nettoyage, réparation et embellissement professionnels."
    },
    {
      title: "Enduit Pessac",
      description: "Application d'enduit de façade avec large choix de couleurs et textures adaptées à Pessac."
    },
    {
      title: "Bardage Pessac",
      description: "Pose de bardage pour moderniser votre façade à Pessac. Bois, composite, PVC selon vos préférences."
    },
    {
      title: "Aides Financières",
      description: "Accompagnement dans les démarches pour bénéficier des aides disponibles : MaPrimeRénov', CEE, éco-PTZ."
    },
    {
      title: "Intervention Rapide",
      description: "Basés au Bouscat, nous intervenons rapidement sur Pessac. Devis sous 48h et chantier organisé."
    },
    {
      title: "Garanties",
      description: "Tous nos travaux à Pessac sont couverts par notre garantie décennale et RC professionnelle."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé à Pessac",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Intervention rapide sur Pessac",
    "Équipe de 2 à 5 professionnels expérimentés",
    "4 ans d'expérience en conduite de travaux",
    "Garantie décennale et RC professionnelle",
    "Respect des normes DTU",
    "Matériaux de qualité certifiés",
    "Accompagnement pour les aides financières",
    "Connaissance des quartiers pessacais",
    "Chantier propre et sécurisé"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Pessac Centre",
    "Pessac Alouette",
    "Pessac Candau",
    "Pessac Monteil",
    "Pessac Saige",
    "Pessac Châtaigneraie",
    "Pessac Cap de Bos",
    "Le Bouscat",
    "Bordeaux",
    "Mérignac",
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
  title: "Isolation Thermique et Façade Pessac - ERTF | Devis Gratuit",
  description: pessacConfig.description,
  keywords: pessacConfig.keywords.join(", "),
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  openGraph: {
    title: "Isolation Thermique et Façade Pessac - ERTF",
    description: pessacConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PessacPage() {
  return <ServicePage {...pessacConfig} />;
}
