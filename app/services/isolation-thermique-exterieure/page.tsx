import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const iteConfig = {
  // SEO et métadonnées
  title: "Isolation Thermique Extérieure (ITE) Gironde - ERTF",
  description: "Spécialiste de l'isolation thermique par l'extérieur (ITE) en Gironde. Amélioration de la performance énergétique, réduction des factures. Devis gratuit et personnalisé. Intervention Le Bouscat, Bordeaux.",
  keywords: ["isolation thermique extérieure Gironde", "ITE Bordeaux", "isolation extérieure Le Bouscat", "devis gratuit ITE", "ERTF", "rénovation énergétique Gironde", "isolation façade Bordeaux", "performance énergétique"],
  
  // Contenu principal
  serviceName: "Isolation Thermique Extérieure (ITE)",
  heroImage: "/prestation-1.png",
  heroTitle: "Isolation Thermique par l'Extérieur (ITE)",
  heroSubtitle: "Améliorez la performance énergétique de votre bâtiment avec notre expertise en ITE. Réduction des factures, confort optimal et valorisation de votre patrimoine en Gironde.",
  
  // Localisation
  sector: "Isolation - Rénovation Énergétique",
  location: "Gironde et rayon de 150 km",
  
  // Description détaillée
  mainDescription: "ERTF est votre spécialiste de l'isolation thermique par l'extérieur (ITE) en Gironde. Nous accompagnons particuliers et professionnels dans leurs projets de rénovation énergétique en alliant performance, durabilité et esthétique. Grâce à notre équipe expérimentée de 2 à 5 professionnels et à l'utilisation de matériaux de qualité, nous garantissons des prestations conformes aux normes en vigueur. Notre expertise de 4 ans en tant que conducteur de travaux assure un résultat professionnel et durable.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Pourquoi Opter pour l'ITE ?",
    description: "L'isolation thermique par l'extérieur répond à de nombreux problèmes courants dans les bâtiments mal isolés. Une ITE bien réalisée transforme votre confort quotidien et réduit significativement vos dépenses énergétiques.",
    problems: [
      "Factures de chauffage élevées",
      "Ponts thermiques et déperditions de chaleur",
      "Inconfort thermique été comme hiver",
      "Humidité et condensation sur les murs",
      "Façade vieillissante et dégradée",
      "Mauvaise performance énergétique (DPE)"
    ]
  },
  
  diagnosticSection: {
    title: "Notre Diagnostic Énergétique Personnalisé",
    description: "ERTF réalise un diagnostic complet de votre bâtiment pour identifier les zones de déperdition thermique et proposer la solution ITE la plus adaptée à votre projet et votre budget.",
    steps: [
      "Visite technique et analyse de l'existant",
      "Étude thermique et identification des ponts thermiques",
      "Vérification de l'état de la façade et du support",
      "Évaluation des performances énergétiques actuelles",
      "Proposition de solutions techniques adaptées",
      "Devis gratuit détaillé et personnalisé"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions ITE Sur Mesure",
    description: "Fort de notre expertise en isolation thermique, ERTF propose des solutions ITE complètes et durables adaptées à chaque type de bâtiment. Nous utilisons des matériaux de qualité et respectons scrupuleusement les normes en vigueur.",
    solutions: [
      "ITE avec enduit de finition (organique ou minéral)",
      "ITE avec bardage (bois, composite, PVC)",
      "ITE sous vêture ou vêtage",
      "Traitement des ponts thermiques",
      "Isolation des soubassements",
      "Finitions personnalisées et esthétiques"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Pose de l'Isolant",
      description: "Installation de panneaux isolants haute performance (polystyrène expansé, laine de roche, fibre de bois) fixés mécaniquement ou collés sur la façade existante."
    },
    {
      title: "Traitement des Ponts Thermiques",
      description: "Traitement spécifique des points singuliers (angles, ouvertures, jonctions) pour éliminer les ponts thermiques et garantir une isolation continue."
    },
    {
      title: "Enduit de Finition",
      description: "Application d'enduit de finition organique ou minéral dans une large gamme de couleurs et de textures pour un rendu esthétique personnalisé."
    },
    {
      title: "Bardage Extérieur",
      description: "Pose de bardage en bois, composite ou PVC pour une finition moderne et durable. Large choix de matériaux et de coloris."
    },
    {
      title: "Isolation des Soubassements",
      description: "Isolation thermique des parties enterrées et semi-enterrées pour une protection complète du bâtiment contre les déperditions."
    },
    {
      title: "Ravalement Simultané",
      description: "Combinaison de l'ITE avec un ravalement de façade pour une rénovation complète et optimale de votre bâtiment."
    },
    {
      title: "Aides et Subventions",
      description: "Accompagnement dans les démarches pour bénéficier des aides financières (MaPrimeRénov', CEE, éco-PTZ) disponibles pour vos travaux d'ITE."
    },
    {
      title: "Garanties et Certifications",
      description: "Travaux réalisés avec garantie décennale et RC professionnelle. Respect des normes DTU et certification des matériaux utilisés."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Équipe de 2 à 5 professionnels expérimentés",
    "4 ans d'expérience en conduite de travaux",
    "Matériaux de qualité certifiés",
    "Garantie décennale et RC professionnelle",
    "Respect des normes DTU en vigueur",
    "Intervention dans un rayon de 150 km",
    "Accompagnement pour les aides financières",
    "Finitions soignées et esthétiques",
    "Suivi de chantier professionnel"
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
  title: "Isolation Thermique Extérieure (ITE) Gironde - ERTF | Devis Gratuit",
  description: iteConfig.description,
  keywords: iteConfig.keywords.join(", "),
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  openGraph: {
    title: "Isolation Thermique Extérieure (ITE) Gironde - ERTF",
    description: iteConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IsolationThermiquExterieurePage() {
  return <ServicePage {...iteConfig} />;
}
