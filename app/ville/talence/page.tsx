import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const talenceConfig = {
  // SEO et métadonnées
  title: "Isolation Thermique et Façade à Talence - ERTF",
  description: "ERTF, spécialiste de l'isolation thermique (ITE, ITI) et des travaux de façade à Talence. Ravalement, enduit, bardage. Devis gratuit et personnalisé. Intervention rapide.",
  keywords: ["isolation thermique Talence", "ITE Talence", "ravalement façade Talence", "enduit Talence", "bardage Talence", "devis gratuit Talence", "ERTF Talence", "rénovation énergétique Talence"],
  
  // Contenu principal
  serviceName: "Isolation et Façade à Talence",
  heroImage: "/prestation-5.jpeg",
  heroTitle: "Entreprise d'Isolation et Façade à Talence",
  heroSubtitle: "ERTF intervient à Talence pour tous vos travaux d'isolation thermique (ITE, ITI), ravalement de façade, enduit et bardage. Expertise locale et devis gratuit.",
  
  // Localisation
  sector: "Isolation - Façade",
  location: "Talence et environs",
  
  // Description détaillée
  mainDescription: "ERTF est votre entreprise de référence pour l'isolation thermique et les travaux de façade à Talence. Basés au Bouscat, nous intervenons rapidement sur toute la commune de Talence pour vos projets d'isolation thermique par l'extérieur (ITE), isolation intérieure (ITI), ravalement de façade, enduit et bardage. Notre équipe de 2 à 5 professionnels expérimentés connaît les spécificités des bâtiments talençais et vous accompagne avec une garantie décennale et RC professionnelle. Forte de 4 ans d'expérience en conduite de travaux, ERTF garantit des prestations conformes aux normes en vigueur.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Pourquoi Rénover à Talence ?",
    description: "Talence, ville universitaire et résidentielle proche de Bordeaux, compte de nombreux bâtiments nécessitant une rénovation énergétique pour améliorer le confort et réduire les factures.",
    problems: [
      "Maisons et immeubles mal isolés",
      "Façades dégradées par le temps",
      "Factures de chauffage élevées",
      "Inconfort thermique",
      "Humidité et infiltrations",
      "Besoin de valorisation immobilière"
    ]
  },
  
  diagnosticSection: {
    title: "Notre Diagnostic Gratuit à Talence",
    description: "ERTF se déplace gratuitement à Talence pour réaliser un diagnostic complet de votre bâtiment et vous proposer les solutions les plus adaptées.",
    steps: [
      "Visite technique gratuite à Talence",
      "Analyse de l'état de la façade et de l'isolation",
      "Étude thermique personnalisée",
      "Proposition de solutions techniques",
      "Accompagnement pour les aides financières",
      "Devis gratuit détaillé sous 48h"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions à Talence",
    description: "ERTF propose une gamme complète de solutions d'isolation thermique et de façade adaptées aux bâtiments talençais, des quartiers résidentiels au campus universitaire.",
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
      title: "ITE à Talence",
      description: "Installation d'isolation thermique par l'extérieur sur maisons et immeubles talençais. Performance énergétique et confort garantis."
    },
    {
      title: "ITI à Talence",
      description: "Solutions d'isolation intérieure adaptées aux appartements et maisons de Talence. Idéal pour les copropriétés."
    },
    {
      title: "Ravalement Talence",
      description: "Ravalement de façade pour tous types de bâtiments à Talence. Nettoyage, réparation et embellissement professionnels."
    },
    {
      title: "Enduit Talence",
      description: "Application d'enduit de façade avec large choix de couleurs et textures adaptées à Talence."
    },
    {
      title: "Bardage Talence",
      description: "Pose de bardage pour moderniser votre façade à Talence. Bois, composite, PVC selon vos préférences."
    },
    {
      title: "Aides Financières",
      description: "Accompagnement dans les démarches pour bénéficier des aides disponibles : MaPrimeRénov', CEE, éco-PTZ."
    },
    {
      title: "Intervention Rapide",
      description: "Basés au Bouscat, nous intervenons rapidement sur Talence. Devis sous 48h et chantier organisé."
    },
    {
      title: "Garanties",
      description: "Tous nos travaux à Talence sont couverts par notre garantie décennale et RC professionnelle."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé à Talence",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Intervention rapide sur Talence",
    "Équipe de 2 à 5 professionnels expérimentés",
    "4 ans d'expérience en conduite de travaux",
    "Garantie décennale et RC professionnelle",
    "Respect des normes DTU",
    "Matériaux de qualité certifiés",
    "Accompagnement pour les aides financières",
    "Connaissance des quartiers talençais",
    "Chantier propre et sécurisé"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Talence Centre",
    "Talence Thouars",
    "Talence Médoquine",
    "Talence Peixotto",
    "Talence Forum",
    "Talence Barrière de Toulouse",
    "Le Bouscat",
    "Bordeaux",
    "Mérignac",
    "Pessac",
    "Villenave-d'Ornon",
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
  title: "Isolation Thermique et Façade Talence - ERTF | Devis Gratuit",
  description: talenceConfig.description,
  keywords: talenceConfig.keywords.join(", "),
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  openGraph: {
    title: "Isolation Thermique et Façade Talence - ERTF",
    description: talenceConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TalencePage() {
  return <ServicePage {...talenceConfig} />;
}
