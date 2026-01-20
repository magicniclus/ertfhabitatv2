import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const enduitConfig = {
  // SEO et métadonnées
  title: "Enduit de Façade Gironde - ERTF",
  description: "Spécialiste de l'enduit de façade en Gironde. Application d'enduits de qualité pour une finition parfaite alliant durabilité et esthétique. Devis gratuit et personnalisé. Intervention Le Bouscat, Bordeaux.",
  keywords: ["enduit façade Gironde", "enduit Bordeaux", "enduit monocouche Le Bouscat", "devis gratuit enduit", "ERTF", "finition façade", "enduit décoratif Bordeaux", "crépi façade"],
  
  // Contenu principal
  serviceName: "Enduit de Façade",
  heroImage: "/prestation-5.jpeg",
  heroTitle: "Enduit de Façade Professionnel",
  heroSubtitle: "Application d'enduits de qualité pour une finition parfaite de vos façades, alliant durabilité et esthétique. Large choix de textures et de couleurs en Gironde.",
  
  // Localisation
  sector: "Façade - Finition",
  location: "Gironde et rayon de 150 km",
  
  // Description détaillée
  mainDescription: "ERTF est votre expert en application d'enduit de façade en Gironde. Nous maîtrisons toutes les techniques d'enduit (traditionnel, monocouche, organique) pour offrir à votre façade une finition impeccable et durable. Notre équipe expérimentée travaille avec des matériaux de qualité pour garantir un résultat esthétique et une protection optimale de vos murs extérieurs. Que ce soit pour une construction neuve ou une rénovation, nous vous proposons un large choix de textures et de couleurs adaptées à votre projet.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Pourquoi Refaire l'Enduit de Façade ?",
    description: "Un enduit de façade dégradé ou vieillissant compromet l'esthétique et la protection de votre bâtiment. Il est essentiel d'intervenir pour préserver la durabilité de vos murs extérieurs.",
    problems: [
      "Enduit fissuré ou décollé",
      "Infiltrations d'eau et humidité",
      "Aspect vieilli et décoloré",
      "Manque d'uniformité de la façade",
      "Protection insuffisante contre les intempéries",
      "Dégradation esthétique du bâtiment"
    ]
  },
  
  diagnosticSection: {
    title: "Notre Diagnostic Avant Application",
    description: "ERTF effectue un diagnostic précis de votre façade pour déterminer le type d'enduit le plus adapté à votre support et à vos attentes esthétiques.",
    steps: [
      "Analyse de l'état et de la nature du support",
      "Vérification de la planéité et de l'adhérence",
      "Évaluation des contraintes techniques",
      "Proposition de solutions d'enduit adaptées",
      "Choix des textures et couleurs",
      "Devis gratuit détaillé et personnalisé"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions d'Enduit de Façade",
    description: "ERTF propose une gamme complète de solutions d'enduit adaptées à chaque type de support et à chaque projet. Nous garantissons une application professionnelle pour un résultat durable et esthétique.",
    solutions: [
      "Enduit monocouche projeté",
      "Enduit traditionnel à la chaux",
      "Enduit organique (RPE)",
      "Enduit décoratif et texturé",
      "Enduit taloché ou gratté",
      "Finitions personnalisées"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Enduit Monocouche",
      description: "Application d'enduit monocouche projeté pour une finition rapide et durable. Large choix de couleurs et de textures (gratté, écrasé, ribbé)."
    },
    {
      title: "Enduit Traditionnel",
      description: "Pose d'enduit traditionnel à la chaux en plusieurs couches (gobetis, corps d'enduit, finition) pour un rendu authentique et respirant."
    },
    {
      title: "Enduit Organique (RPE)",
      description: "Application d'enduit à base de résine pour une finition lisse et moderne. Excellente résistance aux intempéries et large palette de couleurs."
    },
    {
      title: "Enduit Décoratif",
      description: "Réalisation d'enduits décoratifs à effets (rustique, lissé, taloché) pour personnaliser l'aspect de votre façade selon vos goûts."
    },
    {
      title: "Préparation du Support",
      description: "Préparation minutieuse du support (nettoyage, réparation, gobetis d'accrochage) pour garantir l'adhérence et la durabilité de l'enduit."
    },
    {
      title: "Enduit sur Isolation",
      description: "Application d'enduit de finition sur isolation thermique extérieure (ITE) avec sous-couche armée pour une protection optimale."
    },
    {
      title: "Réparation d'Enduit",
      description: "Réparation localisée d'enduit dégradé avec raccord de texture et de couleur pour une harmonisation parfaite avec l'existant."
    },
    {
      title: "Finitions Soignées",
      description: "Soins apportés aux détails (angles, ouvertures, soubassements) pour un rendu professionnel et esthétique de l'ensemble de la façade."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Équipe expérimentée et qualifiée",
    "Matériaux de qualité certifiés",
    "Garantie décennale et RC professionnelle",
    "Large choix de couleurs et textures",
    "Respect des normes DTU",
    "Intervention rapide en Gironde",
    "Finitions soignées et professionnelles",
    "Conseils personnalisés",
    "Chantier propre et organisé"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Le Bouscat",
    "Bordeaux",
    "Mérignac",
    "Pessac",
    "Talence",
    "Villenave-d'Ornon",
    "Gradignan",
    "Bègles",
    "Floirac",
    "Cenon",
    "Lormont",
    "Gironde (33)",
    "Rayon de 150 km"
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
  title: "Enduit de Façade Gironde - ERTF | Devis Gratuit",
  description: enduitConfig.description,
  keywords: enduitConfig.keywords.join(", "),
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  openGraph: {
    title: "Enduit de Façade Gironde - ERTF",
    description: enduitConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnduitFacadePage() {
  return <ServicePage {...enduitConfig} />;
}
