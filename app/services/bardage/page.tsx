import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const bardageConfig = {
  // SEO et métadonnées
  title: "Bardage Façade Gironde - ERTF",
  description: "Spécialiste du bardage de façade en Gironde. Installation de bardage pour moderniser votre façade avec protection optimale contre les intempéries. Devis gratuit et personnalisé. Intervention Le Bouscat, Bordeaux.",
  keywords: ["bardage façade Gironde", "bardage Bordeaux", "bardage bois Le Bouscat", "devis gratuit bardage", "ERTF", "bardage composite", "vêture façade Bordeaux", "bardage PVC"],
  
  // Contenu principal
  serviceName: "Bardage de Façade",
  heroImage: "/prestation-4.png",
  heroTitle: "Bardage de Façade Moderne",
  heroSubtitle: "Installation de bardage pour moderniser votre façade tout en assurant une protection optimale contre les intempéries. Large choix de matériaux et de finitions en Gironde.",
  
  // Localisation
  sector: "Façade - Bardage",
  location: "Gironde et rayon de 150 km",
  
  // Description détaillée
  mainDescription: "ERTF est votre spécialiste de l'installation de bardage de façade en Gironde. Nous proposons une large gamme de solutions de bardage (bois, composite, PVC, métallique) pour moderniser et protéger votre façade. Le bardage offre une double fonction : esthétique avec un large choix de matériaux et de couleurs, et technique en protégeant durablement votre bâtiment contre les intempéries. Notre équipe expérimentée assure une pose professionnelle dans le respect des normes DTU pour un résultat durable et esthétique.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Pourquoi Choisir un Bardage de Façade ?",
    description: "Le bardage est une solution idéale pour rénover et moderniser l'aspect de votre façade tout en améliorant ses performances thermiques et sa protection contre les intempéries.",
    problems: [
      "Façade vieillissante et peu esthétique",
      "Manque d'isolation thermique",
      "Entretien fréquent de la façade",
      "Infiltrations d'eau et humidité",
      "Besoin de modernisation du bâtiment",
      "Protection insuffisante contre les intempéries"
    ]
  },
  
  diagnosticSection: {
    title: "Notre Étude Technique de Bardage",
    description: "ERTF réalise une étude complète de votre projet de bardage pour vous proposer la solution la plus adaptée à votre bâtiment, vos contraintes et votre budget.",
    steps: [
      "Visite technique et prise de mesures",
      "Analyse de l'état de la façade existante",
      "Évaluation des contraintes architecturales",
      "Proposition de matériaux et de finitions",
      "Choix des couleurs et des textures",
      "Devis gratuit détaillé et personnalisé"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions de Bardage Sur Mesure",
    description: "ERTF propose une gamme complète de solutions de bardage adaptées à chaque projet. Nous travaillons avec des matériaux de qualité pour garantir durabilité, esthétique et performance.",
    solutions: [
      "Bardage bois naturel ou traité",
      "Bardage composite imitation bois",
      "Bardage PVC résistant et économique",
      "Bardage métallique (zinc, aluminium)",
      "Bardage avec isolation intégrée",
      "Finitions et accessoires assortis"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Bardage Bois",
      description: "Installation de bardage en bois naturel (douglas, mélèze, red cedar) ou bois traité pour un rendu authentique et chaleureux. Entretien minimal avec lasure ou saturateur."
    },
    {
      title: "Bardage Composite",
      description: "Pose de bardage composite imitation bois sans entretien. Résistance optimale aux intempéries et aux UV avec une large gamme de couleurs et de textures."
    },
    {
      title: "Bardage PVC",
      description: "Installation de bardage PVC économique et résistant. Solution sans entretien avec un excellent rapport qualité-prix et une pose rapide."
    },
    {
      title: "Bardage Métallique",
      description: "Pose de bardage métallique (zinc, aluminium, acier) pour un rendu moderne et contemporain. Durabilité exceptionnelle et large choix de finitions."
    },
    {
      title: "Ossature et Structure",
      description: "Mise en place de l'ossature bois ou métallique support du bardage avec respect des règles de ventilation et d'étanchéité."
    },
    {
      title: "Bardage avec ITE",
      description: "Combinaison du bardage avec une isolation thermique par l'extérieur pour une rénovation énergétique complète et performante."
    },
    {
      title: "Habillage des Ouvertures",
      description: "Réalisation des habillages de fenêtres, portes et angles avec profilés assortis pour une finition parfaite et étanche."
    },
    {
      title: "Entretien et Finitions",
      description: "Application de traitements de protection (lasure, saturateur, peinture) selon le type de bardage pour garantir sa durabilité et son esthétique."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Large choix de matériaux et couleurs",
    "Équipe expérimentée et qualifiée",
    "Garantie décennale et RC professionnelle",
    "Respect des normes DTU",
    "Pose professionnelle et soignée",
    "Intervention dans un rayon de 150 km",
    "Conseils personnalisés",
    "Matériaux de qualité certifiés",
    "Chantier propre et sécurisé"
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
  title: "Bardage Façade Gironde - ERTF | Devis Gratuit",
  description: bardageConfig.description,
  keywords: bardageConfig.keywords.join(", "),
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  openGraph: {
    title: "Bardage Façade Gironde - ERTF",
    description: bardageConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BardagePage() {
  return <ServicePage {...bardageConfig} />;
}
