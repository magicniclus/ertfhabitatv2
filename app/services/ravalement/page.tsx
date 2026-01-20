import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const ravalementConfig = {
  // SEO et métadonnées
  title: "Ravalement de Façade Gironde - ERTF",
  description: "Spécialiste du ravalement de façade en Gironde. Rénovation et embellissement de vos façades avec techniques professionnelles. Devis gratuit et personnalisé. Intervention Le Bouscat, Bordeaux.",
  keywords: ["ravalement façade Gironde", "ravalement Bordeaux", "rénovation façade Le Bouscat", "devis gratuit ravalement", "ERTF", "embellissement façade", "nettoyage façade Bordeaux", "peinture façade"],
  
  // Contenu principal
  serviceName: "Ravalement de Façade",
  heroImage: "/prestation-3.jpeg",
  heroTitle: "Ravalement de Façade Professionnel",
  heroSubtitle: "Rénovation et embellissement de vos façades avec des techniques professionnelles. Enduits, badigeon et solutions sur mesure pour redonner vie à votre bâtiment en Gironde.",
  
  // Localisation
  sector: "Façade - Ravalement",
  location: "Gironde et rayon de 150 km",
  
  // Description détaillée
  mainDescription: "ERTF est votre spécialiste du ravalement de façade en Gironde. Nous réalisons tous vos travaux de rénovation et d'embellissement de façades pour particuliers et professionnels. Notre expertise de 4 ans en tant que conducteur de travaux nous permet de traiter tous types de façades (pierre, brique, béton, enduit) avec des techniques adaptées et des matériaux de qualité. Un ravalement bien réalisé protège durablement votre bâtiment, améliore son esthétique et valorise votre patrimoine.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Signes qu'un Ravalement est Nécessaire",
    description: "Une façade dégradée nuit à l'esthétique de votre bâtiment et peut entraîner des problèmes d'étanchéité et d'isolation. Il est important d'intervenir dès l'apparition des premiers signes de dégradation.",
    problems: [
      "Fissures et microfissures sur la façade",
      "Enduit qui se décolle ou s'effrite",
      "Traces d'humidité et infiltrations d'eau",
      "Salissures, mousses et pollution",
      "Peinture écaillée ou décolorée",
      "Joints dégradés entre les pierres"
    ]
  },
  
  diagnosticSection: {
    title: "Notre Diagnostic de Façade Complet",
    description: "ERTF réalise un diagnostic approfondi de votre façade pour identifier les pathologies, évaluer l'état du support et vous proposer la solution de ravalement la plus adaptée.",
    steps: [
      "Inspection visuelle détaillée de la façade",
      "Analyse de l'état du support et des enduits",
      "Détection des fissures et infiltrations",
      "Évaluation de l'adhérence des revêtements",
      "Proposition de solutions techniques adaptées",
      "Devis gratuit détaillé et personnalisé"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions de Ravalement Sur Mesure",
    description: "Fort de notre expérience, ERTF propose des solutions de ravalement complètes et durables adaptées à chaque type de façade. Nous respectons le caractère architectural de votre bâtiment tout en le modernisant.",
    solutions: [
      "Nettoyage et traitement de la façade",
      "Réparation des fissures et désordres",
      "Application d'enduit traditionnel ou moderne",
      "Peinture de façade haute qualité",
      "Réfection des joints de pierre",
      "Traitement hydrofuge et anti-mousse"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Nettoyage de Façade",
      description: "Nettoyage professionnel de la façade par hydrogommage, nébulisation ou haute pression selon le type de support pour éliminer salissures et pollution."
    },
    {
      title: "Réparation des Fissures",
      description: "Traitement et réparation des fissures structurelles ou superficielles avec techniques adaptées pour garantir l'étanchéité et la solidité de la façade."
    },
    {
      title: "Application d'Enduit",
      description: "Pose d'enduit traditionnel à la chaux, enduit monocouche ou enduit organique selon le support et le rendu esthétique souhaité."
    },
    {
      title: "Peinture de Façade",
      description: "Application de peinture façade haute qualité, respirante et résistante aux intempéries dans une large gamme de couleurs."
    },
    {
      title: "Réfection des Joints",
      description: "Rejointoiement des façades en pierre ou brique avec mortier adapté pour assurer l'étanchéité et l'esthétique de la maçonnerie."
    },
    {
      title: "Traitement Hydrofuge",
      description: "Application de traitement hydrofuge pour protéger durablement la façade contre l'humidité, les infiltrations et les intempéries."
    },
    {
      title: "Traitement Anti-Mousse",
      description: "Traitement préventif et curatif contre les mousses, lichens et algues pour préserver l'aspect et la durabilité de votre façade."
    },
    {
      title: "Ravalement avec ITE",
      description: "Combinaison du ravalement avec une isolation thermique par l'extérieur pour une rénovation énergétique complète et performante."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "4 ans d'expérience en conduite de travaux",
    "Équipe de professionnels qualifiés",
    "Matériaux de qualité certifiés",
    "Garantie décennale et RC professionnelle",
    "Respect du patrimoine architectural",
    "Intervention dans un rayon de 150 km",
    "Finitions soignées et esthétiques",
    "Conseils personnalisés",
    "Chantier sécurisé et propre"
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
  title: "Ravalement de Façade Gironde - ERTF | Devis Gratuit",
  description: ravalementConfig.description,
  keywords: ravalementConfig.keywords.join(", "),
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  openGraph: {
    title: "Ravalement de Façade Gironde - ERTF",
    description: ravalementConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RavalementPage() {
  return <ServicePage {...ravalementConfig} />;
}
