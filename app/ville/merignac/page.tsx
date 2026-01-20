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
  mainDescription: "Mérignac, géante de la métropole bordelaise avec ses 70 000 habitants, présente un visage urbain unique qui défie toute catégorisation simple. Deuxième ville de Gironde, elle s'étend sur 4 800 hectares et abrite des réalités immobilières radicalement différentes : le quartier d'affaires du Burck avec ses immeubles de bureaux années 80, les zones pavillonnaires résidentielles d'Arlac et Beaudésert, les grands ensembles de Yser et Capeyron, les lotissements récents de Chemin Long, sans oublier l'aéroport Bordeaux-Mérignac qui génère nuisances sonores et contraintes spécifiques. Cette diversité fait de Mérignac un laboratoire de la rénovation énergétique : nous y croisons tous les défis du bâtiment contemporain. Les copropriétés du centre-ville (avenue de la Libération, rue Pasteur) datent des années 60-70 et cumulent isolation défaillante et chauffage collectif obsolète. Les pavillons d'Arlac, construits dans les années 80-90, souffrent d'une isolation aux normes de l'époque (R=2) totalement insuffisante aujourd'hui. Le secteur de l'aéroport impose des contraintes acoustiques strictes : double vitrage renforcé obligatoire, isolation phonique des façades. ERTF intervient sur toute cette mosaïque urbaine avec une expertise adaptée à chaque contexte. Depuis Le Bouscat, nous sommes à 10 minutes de n'importe quel point de Mérignac. Notre expérience mérignacaise : 80+ chantiers réalisés, de la villa individuelle à la copropriété de 50 logements.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Mérignac : Ville Aéroportuaire, Défis Multiples en Rénovation Énergétique",
    description: "Mérignac cumule les spécificités qui en font un cas d'école en rénovation énergétique. Avec 70 000 habitants répartis sur 4 800 hectares, c'est une ville-archipel où cohabitent habitat pavillonnaire (Arlac, Beaudésert, Capeyron), grands ensembles (Yser, Bourranville), zones d'activités (Burck, Aéroparc) et secteurs soumis aux nuisances aéroportuaires. L'aéroport Bordeaux-Mérignac, avec 7,5 millions de passagers/an, impose un Plan d'Exposition au Bruit (PEB) qui classe 15 000 logements en zones A, B ou C. Ces logements bénéficient d'aides spécifiques pour isolation phonique mais doivent respecter des normes strictes : double vitrage acoustique 10/16/4, isolation façades avec performance acoustique Rw≥45dB. Les copropriétés du centre-ville (avenue de la Libération, rue Pasteur, place Charles de Gaulle) datent massivement des années 60-70 : bâtiments en béton de 4-5 étages, chauffage collectif fuel ou gaz, isolation inexistante, DPE E/F/G pour 80% d'entre elles. Les lotissements pavillonnaires d'Arlac et Beaudésert, construits dans les années 80-90, présentent une isolation aux normes de l'époque (R=2 à 2,5) devenue obsolète : factures de chauffage 2000-2500€/an pour 120m². Particularité mérignacaise : forte présence de maisons mitoyennes en bande nécessitant coordination entre voisins pour ITE.",
    problems: [
      "Zone aéroportuaire PEB : 15 000 logements soumis nuisances sonores, obligation isolation phonique renforcée (Rw≥45dB), coût supplémentaire 30% vs isolation standard",
      "Copropriétés centre-ville années 60-70 : avenue Libération, rue Pasteur, 80% classées E/F/G, chauffage collectif fuel obsolète, charges 2200€/an pour T3",
      "Pavillons Arlac/Beaudésert années 80-90 : isolation R=2 obsolète, simple vitrage PVC dégradé, consommation 280 kWh/m²/an, factures 2300€/an pour 120m²",
      "Maisons mitoyennes en bande : 40% du parc pavillonnaire, nécessité coordination voisins pour ITE, risques conflits copropriété, solutions ITI souvent privilégiées",
      "Grands ensembles Yser/Bourranville : barres HLM années 60, isolation inexistante, humidité chronique, moisissures, précarité énergétique des locataires",
      "Zone Burck tertiaire : immeubles bureaux années 80 vitrés, surchauffe estivale, climatisation énergivore, obligation rénovation tertiaire décret 2019",
      "Lotissements récents Chemin Long : maisons 2000-2010 RT2000/RT2005, isolation juste conforme, déjà insuffisante pour RE2020, anticipation nécessaire",
      "Pollution sonore aéroport : stress habitants, dévalorisation immobilière secteurs exposés (-15 à -25%), difficultés revente, nécessité compensation par performances énergétiques"
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
