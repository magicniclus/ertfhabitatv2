import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const cenonConfig = {
  // SEO et métadonnées
  title: "Isolation Thermique et Façade à Cenon - ERTF",
  description: "ERTF, spécialiste de l'isolation thermique (ITE, ITI) et des travaux de façade à Cenon. Ravalement, enduit, bardage. Devis gratuit et personnalisé. Intervention rapide.",
  keywords: ["isolation thermique Cenon", "ITE Cenon", "ravalement façade Cenon", "enduit Cenon", "bardage Cenon", "devis gratuit Cenon", "ERTF Cenon", "rénovation énergétique Cenon"],
  
  // Contenu principal
  serviceName: "Isolation et Façade à Cenon",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise d'Isolation et Façade à Cenon",
  heroSubtitle: "ERTF intervient à Cenon pour tous vos travaux d'isolation thermique (ITE, ITI), ravalement de façade, enduit et bardage. Expertise locale et devis gratuit.",
  
  // Localisation
  sector: "Isolation - Façade",
  location: "Cenon et agglomération",
  
  // Description détaillée
  mainDescription: "Vous recherchez une entreprise d'isolation thermique et de ravalement de façade à Cenon ? ERTF, basée au Bouscat depuis 2022, est votre partenaire privilégié pour tous vos projets de rénovation énergétique dans cette commune de la rive droite de la Garonne. Spécialistes de l'isolation thermique par l'extérieur (ITE) et intérieure (ITI), nous intervenons également pour le ravalement de façade, l'application d'enduit et la pose de bardage à Cenon et ses quartiers (Centre-ville, Palmer, Saraillère, Cavailles, Hauts de Cenon). Notre connaissance approfondie du parc immobilier cenonais, des grands ensembles d'habitat social aux maisons individuelles des coteaux, nous permet d'adapter nos solutions à chaque type de construction. Avec une équipe de 2 à 5 professionnels qualifiés, 4 ans d'expérience en conduite de travaux et nos garanties décennale et RC professionnelle, ERTF s'impose comme le choix évident pour vos travaux d'isolation et de façade à Cenon. Nous accompagnons particuliers, copropriétés et bailleurs sociaux dans l'obtention des aides financières (MaPrimeRénov', CEE, éco-PTZ) pour réduire significativement le coût de vos travaux de rénovation énergétique.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Les Défis de l'Isolation et du Ravalement à Cenon",
    description: "Cenon, commune de 25 000 habitants sur la rive droite de la Garonne, fait face à des enjeux majeurs en matière de rénovation énergétique. Le climat océanique aquitain, avec son humidité élevée (75% en moyenne) amplifiée par la proximité de la Garonne, sollicite fortement les façades et l'isolation des bâtiments cenonais. La commune, caractérisée par un important parc d'habitat social (Palmer, Saraillère) et des quartiers résidentiels sur les coteaux (Hauts de Cenon), compte un parc immobilier diversifié nécessitant une rénovation énergétique d'envergure. Plus de 65% des logements ont été construits avant 1975, avant la première réglementation thermique, présentant des déperditions énergétiques considérables : jusqu'à 30% par les murs et 25% par la toiture. Les grands ensembles des années 60-70, particulièrement nombreux à Cenon, sont des passoires thermiques nécessitant une isolation urgente.",
    problems: [
      "Grands ensembles d'habitat social (Palmer, Saraillère) avec déperditions énergétiques massives",
      "Humidité persistante et infiltrations d'eau dues au climat océanique et à la proximité de la Garonne",
      "Déperditions thermiques majeures : 30% par les murs dans les immeubles des années 60-70 mal isolés",
      "Factures de chauffage exorbitantes : jusqu'à 1600€/an pour un appartement de 70m² mal isolé à Cenon",
      "Inconfort thermique été comme hiver dans les grands ensembles et immeubles collectifs anciens",
      "Dégradation importante des façades : fissures, décollements d'enduit, moisissures sur les constructions anciennes",
      "Classement énergétique catastrophique (DPE F ou G) pour la majorité des logements sociaux",
      "Obligation de rénovation énergétique pour les passoires thermiques d'ici 2028 : urgence absolue pour Cenon"
    ]
  },
  
  diagnosticSection: {
    title: "Notre Diagnostic Énergétique Complet à Cenon : Méthodologie Professionnelle",
    description: "ERTF propose un diagnostic énergétique et technique gratuit et sans engagement pour tous les propriétaires, copropriétés et bailleurs sociaux de Cenon. Notre approche méthodique, fruit de 4 ans d'expérience en conduite de travaux, nous permet d'identifier précisément les problématiques de votre bâtiment et de vous proposer les solutions les plus performantes et rentables. Nous intervenons sur tous types de constructions cenonaises : grands ensembles d'habitat social (Palmer, Saraillère), immeubles collectifs du centre-ville, maisons individuelles des Hauts de Cenon, copropriétés de Cavailles. Notre diagnostic prend en compte les spécificités locales (habitat social, copropriétés fragiles), les contraintes techniques et les budgets serrés pour vous garantir un projet de rénovation énergétique réussi et accessible.",
    steps: [
      "Prise de rendez-vous sous 48h : visite technique à votre domicile ou immeuble à Cenon (tous quartiers : Centre, Palmer, Saraillère, Cavailles, Hauts de Cenon)",
      "Analyse thermographique infrarouge : détection précise des ponts thermiques, déperditions énergétiques massives et zones d'infiltration d'humidité",
      "Inspection détaillée de la façade : état du support (enduit, béton, panneaux préfabriqués), fissures, décollement, traces d'humidité, vérification planéité",
      "Évaluation de l'isolation existante : mesure de l'épaisseur d'isolant (souvent inexistante dans grands ensembles), calcul des déperditions par zone",
      "Étude de faisabilité technique : analyse des contraintes (copropriété, habitat social, mitoyenneté), vérification de la portance des murs",
      "Calcul du gain énergétique : estimation précise de la réduction de consommation (en kWh et €), amélioration du DPE (passage de G à C), calcul du ROI",
      "Proposition de solutions techniques sur mesure : ITE (polystyrène graphité, laine de roche, fibre de bois), ITI, ravalement avec ou sans isolation",
      "Accompagnement complet pour les aides financières : MaPrimeRénov' Copropriétés (jusqu'à 75€/m² pour copropriétés fragiles), CEE, éco-PTZ collectif, aides ANRU",
      "Devis détaillé gratuit sous 48h : chiffrage précis, planning prévisionnel, montant des aides déduites, reste à charge réel, paiement échelonné"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions d'Isolation et Ravalement Adaptées à Cenon",
    description: "ERTF a développé une expertise pointue dans la rénovation énergétique des bâtiments de Cenon, en tenant compte des spécificités locales (habitat social, copropriétés fragiles, budgets contraints). Que vous soyez propriétaire d'un appartement dans un grand ensemble, d'une maison sur les coteaux ou syndic de copropriété, nous avons la solution adaptée. Notre connaissance des constructions cenonaises (grands ensembles années 60-70, immeubles collectifs, habitat social) et des techniques modernes d'isolation nous permet de concilier performance énergétique maximale, esthétique et budget maîtrisé. Tous nos chantiers à Cenon respectent les normes DTU en vigueur et les exigences des bailleurs sociaux.",
    solutions: [
      "Isolation Thermique par l'Extérieur (ITE) pour grands ensembles : réduction de 60% des déperditions thermiques, gain de 3 à 4 classes DPE (passage de G à C), économies de 40 à 50% sur les charges de chauffage. Isolants : polystyrène expansé graphité (λ=0,032), laine de roche (incombustible, obligatoire pour immeubles de grande hauteur). Finitions : enduit gratté/taloché (large choix de couleurs) pour redonner un coup de neuf aux grands ensembles",
      "Isolation Thermique Intérieure (ITI) pour appartements : solution idéale quand l'ITE est impossible (copropriété refusant l'ITE, contraintes techniques). Doublage avec laine minérale + plaque de plâtre, épaisseur optimisée (8 à 12cm). Traitement des ponts thermiques. Gain énergétique : 25 à 35% de réduction des déperditions",
      "Ravalement de façade pour grands ensembles : nettoyage professionnel, réparation des fissures structurelles, traitement hydrofuge, application d'enduit neuf. Redonne une seconde jeunesse aux immeubles de Palmer et Saraillère. Protection optimale contre l'humidité",
      "Ravalement avec ITE pour copropriétés : solution 2-en-1 optimale pour rénover et isoler en un seul chantier. Économie de temps et d'argent (1 seul échafaudage). Finition enduit moderne. Particulièrement adapté aux immeubles cenonais des années 60-80 nécessitant une rénovation complète. Aides financières maximales pour copropriétés fragiles",
      "Enduit de façade décoratif : large gamme de textures (gratté, ribbé, écrasé, lissé) et de couleurs pour moderniser l'aspect des grands ensembles. Enduit monocouche pour rapidité d'exécution, enduit organique (RPE) pour finition moderne et durable. Protection contre l'humidité et les intempéries, garantie 10 ans",
      "Bardage bois et composite : modernisation de façade pour maisons individuelles des Hauts de Cenon. Essences : douglas, mélèze, red cedar (bois naturels) ou composite sans entretien. Idéal pour extension, surélévation ou rénovation complète. Pose sur ossature avec lame d'air ventilée",
      "Rénovation énergétique globale pour copropriétés : approche complète incluant ITE, isolation toiture/combles, remplacement menuiseries, VMC double-flux, système de chauffage collectif performant. Objectif : atteindre le niveau BBC Rénovation (< 80 kWh/m²/an) pour maximiser les aides et réduire drastiquement les charges"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Isolation Thermique Extérieure (ITE) pour Grands Ensembles à Cenon",
      description: "L'ITE est la solution la plus performante pour isoler les grands ensembles de Cenon (Palmer, Saraillère). ERTF installe des systèmes d'isolation par l'extérieur sur tous types de constructions : immeubles de grande hauteur (IGH), barres d'immeubles, tours, copropriétés des années 60-70. Nous utilisons des isolants certifiés (polystyrène expansé graphité λ=0,032, laine de roche haute densité 140kg/m³ incombustible obligatoire pour IGH) en épaisseur optimisée (14 à 16cm) pour atteindre R≥5 m².K/W exigée pour MaPrimeRénov'. Résultats concrets : réduction de 60% des déperditions par les murs, gain de 3 à 4 classes DPE (passage de G à C), économies de 40 à 50% sur les charges de chauffage collectif. Finitions modernes : enduit gratté ou taloché (large choix de couleurs vives pour égayer les façades). Chantier clé en main avec échafaudage de grande hauteur, protection, nettoyage. Durée : 6 à 12 mois selon taille de la copropriété."
    },
    {
      title: "Ravalement de Façade pour Grands Ensembles Cenonais",
      description: "Le ravalement de façade redonne une seconde jeunesse aux grands ensembles de Cenon. ERTF intervient sur toutes les constructions : immeubles de Palmer, Saraillère, Cavailles, copropriétés du centre-ville. Notre méthode adaptée aux grands ensembles : nettoyage haute pression ou hydrogommage (élimination salissures, pollution, mousses), réparation des fissures structurelles (fréquentes sur béton), traitement des balcons et garde-corps, traitement hydrofuge renforcé (protection contre l'humidité), application d'enduit neuf (monocouche projeté pour rapidité). Large choix de couleurs modernes et vives pour transformer l'aspect des immeubles. Protection optimale contre l'humidité et les intempéries. Garantie 10 ans. Revalorisation esthétique et patrimoniale de la copropriété. Durée : 4 à 10 mois selon taille."
    },
    {
      title: "Isolation Thermique Intérieure (ITI) pour Appartements Cenonais",
      description: "L'ITI est la solution privilégiée quand l'ITE est impossible (copropriété refusant l'ITE, contraintes techniques, budget limité). ERTF réalise l'isolation intérieure de vos murs par doublage collé (complexe isolant polystyrène + plaque de plâtre 10+80mm) ou sur ossature métallique (laine minérale 100mm + BA13). Traitement spécifique des ponts thermiques aux jonctions planchers/murs et menuiseries. Finitions soignées prêtes à peindre. Gain énergétique : 25 à 35% de réduction des déperditions, amélioration du confort thermique et acoustique (important dans grands ensembles). Perte de surface limitée (8 à 12cm par mur). Idéal pour appartements cenonais de 50 à 80m². Travaux pièce par pièce possible pour rester habité. Durée : 1 à 2 semaines pour un T3."
    },
    {
      title: "Ravalement avec ITE : Solution 2-en-1 pour Copropriétés Cenonaises",
      description: "Le ravalement combiné à l'ITE est la solution la plus rentable pour les copropriétés cenonaises des années 60-80 nécessitant une rénovation complète. Un seul chantier pour deux bénéfices : rénovation esthétique de la façade + isolation thermique haute performance. Économie de temps (1 seul échafaudage) et d'argent (mutualisation des coûts). ERTF réalise : nettoyage professionnel, préparation du support (réparation fissures structurelles, traitement humidité), pose de l'isolant (PSE graphité ou laine de roche 14-16cm), sous-couche armée avec treillis, enduit de finition moderne (large choix de couleurs). Résultat : façade transformée + réduction de 60% des déperditions + gain de 3-4 classes DPE. Aides financières maximales pour copropriétés fragiles (jusqu'à 75€/m²). ROI : 10 à 15 ans. Valorisation du bien : +20 à 30%. Durée : 6 à 12 mois."
    },
    {
      title: "Enduit de Façade Décoratif : Modernisez les Grands Ensembles",
      description: "ERTF propose une gamme complète d'enduits de façade pour moderniser l'aspect des grands ensembles cenonais. Enduit monocouche projeté : rapidité d'exécution (1 seule couche), large choix de teintes vives et modernes (nuancier 200 couleurs) et de finitions (gratté, ribbé, écrasé), idéal pour grands ensembles et rénovations d'envergure. Enduit organique (RPE) : finition lisse et moderne, haute résistance aux UV et pollution, large palette de couleurs vives pour égayer les façades. Tous nos enduits : protection contre l'humidité, résistance aux intempéries du climat océanique, garantie 10 ans. Application sur tous supports (béton, panneaux préfabriqués, ITE). Transformation visuelle complète des immeubles. Durée : 4 à 10 mois selon taille."
    },
    {
      title: "Bardage Bois et Composite : Modernisation Maisons des Hauts de Cenon",
      description: "Le bardage est la solution idéale pour moderniser votre maison sur les Hauts de Cenon, créer une extension ou réaliser une surélévation. ERTF installe tous types de bardages : Bardage bois naturel (douglas, mélèze, red cedar) : esthétique chaleureuse, écologique, finition lasure ou saturateur, entretien tous les 3-5 ans. Bardage composite : imitation bois sans entretien, résistance optimale aux UV et humidité, garantie 10-25 ans, large choix de teintes (gris, brun, anthracite). Bardage PVC : économique, sans entretien, pose rapide. Pose professionnelle sur ossature avec lame d'air ventilée (prévention humidité). Finitions parfaites : habillage menuiseries, angles, soubassement. Possibilité de combiner avec ITE pour isolation + esthétique. Durée : 2 à 4 semaines."
    },
    {
      title: "Aides Financières 2026 à Cenon : Jusqu'à 75% de Subventions pour Copropriétés",
      description: "ERTF vous accompagne pour obtenir toutes les aides financières disponibles à Cenon et maximiser votre budget rénovation. MaPrimeRénov' Copropriétés 2026 : jusqu'à 75€/m² pour l'ITE (copropriétés fragiles avec >75% ménages modestes), 60€/m² (copropriétés classiques). Exemple : ITE 2000m² = 150 000€ d'aide pour copropriété fragile. Bonus sortie de passoire : +10€/m² si passage de F/G à D minimum. Bonus BBC : +10€/m² si atteinte niveau BBC. CEE (Certificats d'Économies d'Énergie) : prime complémentaire de 15 à 30€/m² selon revenus. Éco-PTZ collectif : prêt à taux zéro jusqu'à 50 000€ par logement sur 20 ans. Aides ANRU : subventions spécifiques pour quartiers prioritaires (Palmer, Saraillère). TVA réduite 5,5%. Notre service : calcul précis de vos aides, constitution complète du dossier, suivi jusqu'à versement. Reste à charge réel souvent inférieur à 30% du coût total pour copropriétés fragiles !"
    },
    {
      title: "Intervention Rapide à Cenon : Proximité et Réactivité",
      description: "Basés au 81 Boulevard Pierre 1er au Bouscat (25 minutes de Cenon), ERTF intervient rapidement sur toute la commune : Centre-ville, Palmer, Saraillère, Cavailles, Hauts de Cenon, Morlette, Carriet. Notre proximité vous garantit : devis gratuit sous 48h après visite technique, démarrage des travaux rapide (2 à 4 semaines après vote AG pour copropriétés), disponibilité pour suivi de chantier et SAV, coûts de déplacement réduits répercutés sur votre devis. Équipe locale de 2 à 5 professionnels expérimentés, connaissance parfaite des spécificités locales (habitat social, copropriétés fragiles, grands ensembles). Disponibles du lundi au samedi 8h-19h. Urgences traitées en priorité."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé à Cenon",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Intervention rapide sur Cenon",
    "Équipe de 2 à 5 professionnels expérimentés",
    "4 ans d'expérience en conduite de travaux",
    "Garantie décennale et RC professionnelle",
    "Respect des normes DTU",
    "Matériaux de qualité certifiés",
    "Accompagnement pour les aides financières",
    "Expertise grands ensembles et copropriétés",
    "Chantier propre et sécurisé"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Cenon Centre",
    "Palmer",
    "Saraillère",
    "Cavailles",
    "Hauts de Cenon",
    "Morlette",
    "Et toute la métropole bordelaise"
  ],
  
  // Informations de contact
  contactInfo: {
    phone: "07 83 93 86 94",
    email: "ertftravaux@gmail.com",
    address: "81 Boulevard Pierre 1er, 33110 Le Bouscat"
  }
};

export const metadata: Metadata = {
  title: cenonConfig.title,
  description: cenonConfig.description,
  keywords: cenonConfig.keywords,
};

export default function CenonPage() {
  return <ServicePage {...cenonConfig} />;
}
