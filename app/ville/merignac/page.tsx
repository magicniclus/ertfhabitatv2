import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const merignacConfig = {
  // SEO et métadonnées
  title: "Isolation Thermique et Façade à Mérignac - ERTF",
  description: "ERTF, spécialiste de l'isolation thermique (ITE, ITI) et des travaux de façade à Mérignac. Ravalement, enduit, bardage. Devis gratuit et personnalisé. Intervention rapide.",
  keywords: ["isolation thermique Mérignac", "ITE Mérignac", "ravalement façade Mérignac", "enduit Mérignac", "bardage Mérignac", "devis gratuit Mérignac", "ERTF Mérignac", "rénovation énergétique Mérignac"],
  
  // Contenu principal
  serviceName: "Isolation et Façade à Mérignac",
  heroImage: "/prestation-3.jpeg",
  heroTitle: "Entreprise d'Isolation et Façade à Mérignac",
  heroSubtitle: "ERTF intervient à Mérignac pour tous vos travaux d'isolation thermique (ITE, ITI), ravalement de façade, enduit et bardage. Expertise locale et devis gratuit.",
  
  // Localisation
  sector: "Isolation - Façade",
  location: "Mérignac et environs",
  
  // Description détaillée
  mainDescription: "ERTF est votre entreprise de référence pour l'isolation thermique et les travaux de façade à Mérignac. Basés au Bouscat, nous intervenons rapidement sur toute la commune de Mérignac pour vos projets d'isolation thermique par l'extérieur (ITE), isolation intérieure (ITI), ravalement de façade, enduit et bardage. Notre équipe de 2 à 5 professionnels expérimentés connaît parfaitement les spécificités des bâtiments mérignacais et vous accompagne avec une garantie décennale et RC professionnelle. Forte de 4 ans d'expérience en conduite de travaux, ERTF garantit des prestations conformes aux normes en vigueur.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Pourquoi Rénover à Mérignac ?",
    description: "Mérignac, deuxième ville de la métropole bordelaise, compte de nombreux quartiers résidentiels nécessitant une rénovation énergétique pour améliorer le confort et réduire les factures.",
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
    title: "Notre Diagnostic Gratuit à Mérignac",
    description: "ERTF se déplace gratuitement à Mérignac pour réaliser un diagnostic complet de votre bâtiment et vous proposer les solutions les plus adaptées.",
    steps: [
      "Visite technique gratuite à Mérignac",
      "Analyse de l'état de la façade et de l'isolation",
      "Étude thermique personnalisée",
      "Proposition de solutions techniques",
      "Accompagnement pour les aides financières",
      "Devis gratuit détaillé sous 48h"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions à Mérignac",
    description: "ERTF propose une gamme complète de solutions d'isolation thermique et de façade adaptées aux bâtiments mérignacais, des quartiers pavillonnaires aux zones d'activités.",
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
      title: "ITE à Mérignac",
      description: "Installation d'isolation thermique par l'extérieur sur maisons et immeubles mérignacais. Performance énergétique et confort garantis."
    },
    {
      title: "ITI à Mérignac",
      description: "Solutions d'isolation intérieure adaptées aux appartements et maisons de Mérignac. Idéal pour les copropriétés."
    },
    {
      title: "Ravalement Mérignac",
      description: "Ravalement de façade pour tous types de bâtiments à Mérignac. Nettoyage, réparation et embellissement professionnels."
    },
    {
      title: "Enduit Mérignac",
      description: "Application d'enduit de façade avec large choix de couleurs et textures adaptées à Mérignac."
    },
    {
      title: "Bardage Mérignac",
      description: "Pose de bardage pour moderniser votre façade à Mérignac. Bois, composite, PVC selon vos préférences."
    },
    {
      title: "Aides Financières",
      description: "Accompagnement dans les démarches pour bénéficier des aides disponibles : MaPrimeRénov', CEE, éco-PTZ."
    },
    {
      title: "Intervention Rapide",
      description: "Basés au Bouscat, nous intervenons rapidement sur Mérignac. Devis sous 48h et chantier organisé."
    },
    {
      title: "Garanties",
      description: "Tous nos travaux à Mérignac sont couverts par notre garantie décennale et RC professionnelle."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé à Mérignac",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Intervention rapide sur Mérignac",
    "Équipe de 2 à 5 professionnels expérimentés",
    "4 ans d'expérience en conduite de travaux",
    "Garantie décennale et RC professionnelle",
    "Respect des normes DTU",
    "Matériaux de qualité certifiés",
    "Accompagnement pour les aides financières",
    "Connaissance des quartiers mérignacais",
    "Chantier propre et sécurisé"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Mérignac Centre",
    "Mérignac Arlac",
    "Mérignac Beaudésert",
    "Mérignac Bourranville",
    "Mérignac Capeyron",
    "Mérignac Chemin Long",
    "Mérignac Quatre Chemins",
    "Le Bouscat",
    "Bordeaux",
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
  title: "Isolation Thermique et Façade Mérignac - ERTF | Devis Gratuit",
  description: merignacConfig.description,
  keywords: merignacConfig.keywords.join(", "),
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  openGraph: {
    title: "Isolation Thermique et Façade Mérignac - ERTF",
    description: merignacConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MerignacPage() {
  return <ServicePage {...merignacConfig} />;
}
