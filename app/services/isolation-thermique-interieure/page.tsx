import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const itiConfig = {
  // SEO et métadonnées
  title: "Isolation Thermique Intérieure (ITI) Gironde - ERTF",
  description: "Spécialiste de l'isolation thermique intérieure (ITI) en Gironde. Confort optimal, économies d'énergie et amélioration acoustique. Devis gratuit et personnalisé. Intervention Le Bouscat, Bordeaux.",
  keywords: ["isolation thermique intérieure Gironde", "ITI Bordeaux", "isolation intérieure Le Bouscat", "devis gratuit ITI", "ERTF", "isolation murs intérieurs", "confort thermique Bordeaux", "économies énergie"],
  
  // Contenu principal
  serviceName: "Isolation Thermique Intérieure (ITI)",
  heroImage: "/prestation-2.png",
  heroTitle: "Isolation Thermique Intérieure (ITI)",
  heroSubtitle: "Solutions d'isolation intérieure adaptées à votre logement pour un confort optimal et des économies d'énergie durables. Expertise et qualité en Gironde.",
  
  // Localisation
  sector: "Isolation - Rénovation Énergétique",
  location: "Gironde et rayon de 150 km",
  
  // Description détaillée
  mainDescription: "ERTF est votre expert en isolation thermique intérieure (ITI) en Gironde. Nous proposons des solutions d'isolation performantes pour améliorer le confort de votre habitat tout en réduisant vos factures énergétiques. Notre équipe expérimentée intervient sur tous types de bâtiments avec des matériaux de qualité et dans le respect des normes en vigueur. L'ITI est une solution idéale lorsque l'isolation par l'extérieur n'est pas envisageable (contraintes architecturales, copropriété, bâtiment classé).",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Les Problèmes d'une Mauvaise Isolation Intérieure",
    description: "Une isolation intérieure défaillante ou inexistante entraîne de nombreux désagréments au quotidien et impacte significativement votre budget énergétique.",
    problems: [
      "Sensation de froid et parois froides",
      "Factures de chauffage excessives",
      "Nuisances sonores et mauvaise acoustique",
      "Condensation et risques de moisissures",
      "Inconfort thermique pièce par pièce",
      "Perte de surface habitable minimale"
    ]
  },
  
  diagnosticSection: {
    title: "Notre Diagnostic Thermique Intérieur",
    description: "ERTF effectue un diagnostic précis de votre logement pour identifier les zones prioritaires à isoler et vous proposer la solution ITI la plus adaptée à vos besoins et contraintes.",
    steps: [
      "Visite technique détaillée de votre logement",
      "Analyse des parois et identification des ponts thermiques",
      "Mesure de l'épaisseur disponible pour l'isolation",
      "Évaluation de l'état des murs et de l'humidité",
      "Proposition de solutions techniques sur mesure",
      "Devis gratuit détaillé et transparent"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions ITI Performantes",
    description: "ERTF propose des solutions d'isolation intérieure adaptées à chaque configuration. Nous utilisons des isolants performants et respectueux de l'environnement pour garantir confort et durabilité.",
    solutions: [
      "Isolation sous ossature métallique",
      "Doublage collé avec plaques isolantes",
      "Isolation des combles perdus",
      "Isolation des rampants de toiture",
      "Isolation des planchers",
      "Correction acoustique et thermique"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Isolation des Murs Intérieurs",
      description: "Pose d'isolants thermiques (laine de verre, laine de roche, fibre de bois) sur ossature métallique ou en doublage collé pour une isolation optimale des murs."
    },
    {
      title: "Isolation des Combles Perdus",
      description: "Isolation par soufflage ou déroulage de laine minérale dans les combles perdus pour limiter les déperditions thermiques par la toiture."
    },
    {
      title: "Isolation des Rampants",
      description: "Isolation des rampants de toiture pour aménager vos combles en espace habitable confortable et économe en énergie."
    },
    {
      title: "Isolation des Planchers",
      description: "Isolation thermique et acoustique des planchers pour améliorer le confort entre les étages et réduire les nuisances sonores."
    },
    {
      title: "Doublage Thermique",
      description: "Mise en place de complexes isolants (plaque de plâtre + isolant) pour une solution rapide et performante d'isolation intérieure."
    },
    {
      title: "Traitement de l'Humidité",
      description: "Diagnostic et traitement des problèmes d'humidité avant isolation pour garantir la pérennité et l'efficacité de l'isolation."
    },
    {
      title: "Finitions Soignées",
      description: "Pose de plaques de plâtre, bandes et enduits de finition pour un rendu esthétique impeccable prêt à peindre ou décorer."
    },
    {
      title: "Amélioration Acoustique",
      description: "Solutions d'isolation phonique pour réduire les nuisances sonores entre pièces ou provenant de l'extérieur."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Équipe expérimentée et qualifiée",
    "Matériaux isolants certifiés",
    "Garantie décennale et RC professionnelle",
    "Respect des normes DTU",
    "Intervention rapide en Gironde",
    "Finitions soignées et professionnelles",
    "Conseils personnalisés",
    "Accompagnement pour les aides financières",
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
  title: "Isolation Thermique Intérieure (ITI) Gironde - ERTF | Devis Gratuit",
  description: itiConfig.description,
  keywords: itiConfig.keywords.join(", "),
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  openGraph: {
    title: "Isolation Thermique Intérieure (ITI) Gironde - ERTF",
    description: itiConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IsolationThermiqueInterieurePage() {
  return <ServicePage {...itiConfig} />;
}
