import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const beglesConfig = {
  // SEO et métadonnées
  title: "Isolation Thermique et Façade à Bègles - ERTF",
  description: "ERTF, spécialiste de l'isolation thermique (ITE, ITI) et des travaux de façade à Bègles. Ravalement, enduit, bardage. Devis gratuit et personnalisé. Intervention rapide.",
  keywords: ["isolation thermique Bègles", "ITE Bègles", "ravalement façade Bègles", "enduit Bègles", "bardage Bègles", "devis gratuit Bègles", "ERTF Bègles", "rénovation énergétique Bègles"],
  
  // Contenu principal
  serviceName: "Isolation et Façade à Bègles",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise d'Isolation et Façade à Bègles",
  heroSubtitle: "ERTF intervient à Bègles pour tous vos travaux d'isolation thermique (ITE, ITI), ravalement de façade, enduit et bardage. Expertise locale et devis gratuit.",
  
  // Localisation
  sector: "Isolation - Façade",
  location: "Bègles et agglomération",
  
  // Description détaillée
  mainDescription: "Vous recherchez une entreprise d'isolation thermique et de ravalement de façade à Bègles ? ERTF, basée au Bouscat depuis 2022, est votre partenaire privilégié pour tous vos projets de rénovation énergétique dans cette commune dynamique de la rive droite de la Garonne. Spécialistes de l'isolation thermique par l'extérieur (ITE) et intérieure (ITI), nous intervenons également pour le ravalement de façade, l'application d'enduit et la pose de bardage à Bègles et ses quartiers (Centre-ville, Terres Neuves, Yves Farge, Mussonville, Prés de Bègles). Notre connaissance approfondie du parc immobilier béglais, des immeubles collectifs aux maisons individuelles, nous permet d'adapter nos solutions à chaque type de construction. Avec une équipe de 2 à 5 professionnels qualifiés, 4 ans d'expérience en conduite de travaux et nos garanties décennale et RC professionnelle, ERTF s'impose comme le choix évident pour vos travaux d'isolation et de façade à Bègles. Nous accompagnons particuliers, copropriétés et professionnels dans l'obtention des aides financières (MaPrimeRénov', CEE, éco-PTZ) pour réduire significativement le coût de vos travaux de rénovation énergétique.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Les Défis de l'Isolation et du Ravalement à Bègles",
    description: "Bègles, commune de 28 000 habitants sur la rive droite de la Garonne, fait face à des enjeux importants en matière de rénovation énergétique. Le climat océanique aquitain, avec son humidité élevée (75% en moyenne) amplifiée par la proximité de la Garonne, et ses pluies fréquentes (900mm/an), sollicite fortement les façades et l'isolation des bâtiments béglais. La commune, en pleine transformation urbaine avec le projet Terres Neuves, compte un parc immobilier diversifié : immeubles collectifs du centre-ville et de Terres Neuves, maisons individuelles des quartiers pavillonnaires (Mussonville, Prés de Bègles), constructions anciennes près du port. Plus de 60% des logements ont été construits avant 1975, avant la première réglementation thermique, présentant des déperditions énergétiques considérables : jusqu'à 30% par les murs et 25% par la toiture. La proximité de la rocade et des axes routiers accentue la pollution et la dégradation des façades.",
    problems: [
      "Façades dégradées par l'humidité de la Garonne et la pollution urbaine (rocade, axes routiers)",
      "Humidité persistante et infiltrations d'eau dues au climat océanique et à la proximité du fleuve",
      "Déperditions thermiques majeures : 30% par les murs dans les immeubles des années 60-70 mal isolés",
      "Factures de chauffage élevées : jusqu'à 1700€/an pour un appartement de 75m² mal isolé à Bègles",
      "Inconfort thermique été comme hiver dans les immeubles collectifs anciens du centre-ville",
      "Dégradation des enduits et façades : fissures, décollements, moisissures sur les constructions anciennes",
      "Classement énergétique médiocre (DPE E, F ou G) impactant la valeur de revente et la mise en location",
      "Obligation de rénovation énergétique pour les passoires thermiques d'ici 2028 : urgence pour copropriétés"
    ]
  },
  
  diagnosticSection: {
    title: "Notre Diagnostic Énergétique Complet à Bègles : Méthodologie Professionnelle",
    description: "ERTF propose un diagnostic énergétique et technique gratuit et sans engagement pour tous les propriétaires et copropriétés de Bègles. Notre approche méthodique, fruit de 4 ans d'expérience en conduite de travaux, nous permet d'identifier précisément les problématiques de votre bâtiment et de vous proposer les solutions les plus performantes et rentables. Nous intervenons sur tous types de constructions béglaises : immeubles collectifs du centre-ville et de Terres Neuves, maisons individuelles des quartiers pavillonnaires (Mussonville, Prés de Bègles, Yves Farge), constructions anciennes près du port. Notre diagnostic prend en compte les spécificités locales (proximité Garonne, humidité), les contraintes techniques et votre budget pour vous garantir un projet de rénovation énergétique réussi.",
    steps: [
      "Prise de rendez-vous sous 48h : visite technique à votre domicile à Bègles (tous quartiers : Centre, Terres Neuves, Yves Farge, Mussonville, Prés)",
      "Analyse thermographique infrarouge : détection précise des ponts thermiques, déperditions énergétiques et zones d'infiltration d'humidité",
      "Inspection détaillée de la façade : état du support (enduit, brique, béton), fissures, décollement, traces d'humidité, vérification planéité",
      "Évaluation de l'isolation existante : mesure de l'épaisseur d'isolant, identification des zones non isolées, calcul des déperditions par zone",
      "Étude de faisabilité technique : analyse des contraintes (copropriété, mitoyenneté, proximité Garonne), vérification de la portance",
      "Calcul du gain énergétique : estimation précise de la réduction de consommation (en kWh et €), amélioration du DPE, calcul du ROI",
      "Proposition de solutions techniques sur mesure : ITE (polystyrène graphité, laine de roche, fibre de bois), ITI, ravalement avec ou sans isolation",
      "Accompagnement complet pour les aides financières : MaPrimeRénov' (jusqu'à 75€/m² pour l'ITE), CEE, éco-PTZ (jusqu'à 50 000€), constitution du dossier",
      "Devis détaillé gratuit sous 48h : chiffrage précis, planning prévisionnel, montant des aides déduites, reste à charge réel, paiement échelonné"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions d'Isolation et Ravalement Adaptées à Bègles",
    description: "ERTF a développé une expertise pointue dans la rénovation énergétique des bâtiments de Bègles, en tenant compte des spécificités locales (proximité Garonne, humidité élevée). Que vous soyez propriétaire d'un appartement en copropriété, d'une maison individuelle ou d'un bien dans les nouveaux quartiers (Terres Neuves), nous avons la solution adaptée. Notre connaissance des constructions béglaises (immeubles années 60-70, constructions récentes, bâtiments anciens) et des techniques modernes d'isolation nous permet de concilier performance énergétique, esthétique et budget maîtrisé. Tous nos chantiers à Bègles respectent les normes DTU en vigueur.",
    solutions: [
      "Isolation Thermique par l'Extérieur (ITE) haute performance : réduction de 60% des déperditions thermiques, gain de 2 à 3 classes DPE, économies de 30 à 40% sur les factures. Isolants : polystyrène expansé graphité (λ=0,032), laine de roche (incombustible, idéal pour immeubles), fibre de bois (écologique, régulation hygrométrique). Finitions : enduit gratté/taloché (large choix de couleurs) ou bardage bois/composite moderne",
      "Isolation Thermique Intérieure (ITI) pour copropriétés : solution idéale quand l'ITE est impossible (copropriété refusant l'ITE, mitoyenneté). Doublage avec laine minérale + plaque de plâtre, épaisseur optimisée (8 à 12cm). Traitement des ponts thermiques. Gain énergétique : 25 à 35% de réduction des déperditions",
      "Ravalement de façade pour immeubles béglais : nettoyage professionnel, réparation des fissures et décollements, traitement hydrofuge et anti-mousse, application d'enduit neuf. Redonne un coup de neuf aux immeubles du centre-ville et de Terres Neuves. Protection optimale contre l'humidité de la Garonne",
      "Ravalement avec ITE pour copropriétés : solution 2-en-1 optimale pour rénover et isoler en un seul chantier. Économie de temps et d'argent (1 seul échafaudage). Finition enduit ou bardage selon préférences. Particulièrement adapté aux immeubles béglais des années 60-80 nécessitant une rénovation complète",
      "Enduit de façade décoratif : large gamme de textures (gratté, ribbé, écrasé, lissé) et de couleurs. Enduit monocouche pour rapidité, enduit traditionnel à la chaux pour respirabilité, enduit organique (RPE) pour finition moderne. Protection contre l'humidité et les intempéries, garantie 10 ans",
      "Bardage bois et composite : modernisation de façade avec bardage claire-voie ou à emboîtement. Essences : douglas, mélèze, red cedar (bois naturels) ou composite sans entretien. Idéal pour extension, surélévation ou rénovation complète. Pose sur ossature avec lame d'air ventilée",
      "Rénovation énergétique globale BBC : approche complète incluant ITE, isolation toiture/combles, remplacement menuiseries, VMC double-flux. Objectif : atteindre le niveau BBC Rénovation (< 80 kWh/m²/an) pour maximiser les aides et la valeur de votre bien"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Isolation Thermique Extérieure (ITE) pour Copropriétés à Bègles",
      description: "L'ITE est la solution la plus performante pour isoler votre immeuble à Bègles. ERTF installe des systèmes d'isolation par l'extérieur sur tous types de constructions : immeubles collectifs du centre-ville, résidences de Terres Neuves, copropriétés des années 60-70. Nous utilisons des isolants certifiés (polystyrène expansé graphité λ=0,032, laine de roche haute densité 140kg/m³ incombustible, fibre de bois écologique) en épaisseur optimisée (12 à 16cm) pour atteindre R≥5 m².K/W exigée pour MaPrimeRénov'. Résultats concrets : réduction de 60% des déperditions par les murs, gain de 2 à 3 classes DPE (passage de E à B), économies de 30 à 40% sur les charges de chauffage. Finitions adaptées : enduit gratté ou taloché (large choix de couleurs), ou bardage pour un rendu contemporain. Chantier clé en main avec échafaudage, protection, nettoyage. Durée : 4 à 8 semaines selon surface."
    },
    {
      title: "Ravalement de Façade pour Immeubles Béglais",
      description: "Le ravalement de façade redonne un coup de neuf aux immeubles béglais. ERTF intervient sur toutes les constructions : immeubles du centre-ville, résidences de Terres Neuves, copropriétés des années 60-80, bâtiments anciens près du port. Notre méthode : nettoyage haute pression ou hydrogommage (élimination salissures, mousses, pollution), réparation des fissures et décollements d'enduit, traitement hydrofuge renforcé (protection contre l'humidité de la Garonne), traitement anti-mousse préventif, application d'enduit neuf (monocouche ou traditionnel). Large choix de couleurs et textures pour personnaliser votre façade. Protection optimale contre l'humidité et les intempéries du climat océanique. Garantie 10 ans. Revalorisation esthétique de votre copropriété. Durée : 3 à 6 semaines selon surface et état."
    },
    {
      title: "Isolation Thermique Intérieure (ITI) pour Appartements Béglais",
      description: "L'ITI est la solution privilégiée quand l'ITE est impossible (copropriété refusant l'ITE, mitoyenneté, contraintes techniques). ERTF réalise l'isolation intérieure de vos murs par doublage collé (complexe isolant polystyrène + plaque de plâtre 10+80mm) ou sur ossature métallique (laine minérale 100mm + BA13). Traitement spécifique des ponts thermiques aux jonctions planchers/murs et menuiseries. Finitions soignées prêtes à peindre. Gain énergétique : 25 à 35% de réduction des déperditions, amélioration du confort thermique et acoustique. Perte de surface limitée (8 à 12cm par mur). Idéal pour appartements béglais de 50 à 100m². Travaux pièce par pièce possible pour rester habité. Durée : 1 à 2 semaines pour un T3."
    },
    {
      title: "Ravalement avec ITE : Solution 2-en-1 pour Copropriétés Béglaises",
      description: "Le ravalement combiné à l'ITE est la solution la plus rentable pour les immeubles béglais des années 60-80 nécessitant une rénovation complète. Un seul chantier pour deux bénéfices : rénovation esthétique de la façade + isolation thermique haute performance. Économie de temps (1 seul échafaudage) et d'argent (mutualisation des coûts). ERTF réalise : nettoyage professionnel, préparation du support (réparation fissures, traitement humidité renforcé), pose de l'isolant (PSE graphité ou laine de roche 14cm), sous-couche armée avec treillis, enduit de finition (large choix de couleurs et textures). Résultat : façade neuve + réduction de 60% des déperditions + gain de 2-3 classes DPE. Aides financières maximales. ROI : 8 à 12 ans. Valorisation du bien : +15 à 25%. Durée : 4 à 8 semaines."
    },
    {
      title: "Enduit de Façade Décoratif : Personnalisez Votre Immeuble Béglais",
      description: "ERTF propose une gamme complète d'enduits de façade pour tous les styles architecturaux béglais. Enduit monocouche projeté : rapidité d'exécution (1 seule couche), large choix de teintes (nuancier 200 couleurs) et de finitions (gratté, ribbé, écrasé), idéal pour immeubles récents et rénovations. Enduit traditionnel à la chaux : 3 couches (gobetis, corps d'enduit, finition talochée), respirant et régulateur d'humidité, parfait pour bâtiments anciens et environnement humide (proximité Garonne). Enduit organique (RPE) : finition lisse et moderne, haute résistance aux UV et pollution, large palette de couleurs vives. Tous nos enduits : protection renforcée contre l'humidité, résistance aux intempéries du climat océanique, garantie 10 ans. Application sur tous supports (béton, parpaing, brique, ITE). Durée : 2 à 4 semaines."
    },
    {
      title: "Bardage Bois et Composite : Modernisation à Bègles",
      description: "Le bardage est la solution idéale pour moderniser votre immeuble ou maison à Bègles, créer une extension ou réaliser une surélévation. ERTF installe tous types de bardages : Bardage bois naturel (douglas, mélèze, red cedar) : esthétique chaleureuse, écologique, finition lasure ou saturateur, entretien tous les 3-5 ans. Bardage composite : imitation bois sans entretien, résistance optimale aux UV et humidité, garantie 10-25 ans, large choix de teintes (gris, brun, anthracite). Bardage PVC : économique, sans entretien, pose rapide. Pose professionnelle sur ossature avec lame d'air ventilée (prévention humidité). Finitions parfaites : habillage menuiseries, angles, soubassement. Possibilité de combiner avec ITE pour isolation + esthétique. Particulièrement adapté aux constructions béglaises. Durée : 2 à 4 semaines."
    },
    {
      title: "Aides Financières 2026 à Bègles : Jusqu'à 75% de Subventions",
      description: "ERTF vous accompagne pour obtenir toutes les aides financières disponibles à Bègles et maximiser votre budget rénovation. MaPrimeRénov' 2026 Copropriétés : jusqu'à 75€/m² pour l'ITE (copropriétés fragiles), 60€/m² (copropriétés classiques). Exemple : ITE 500m² = 37 500€ d'aide pour copropriété fragile. MaPrimeRénov' Individuelle : jusqu'à 75€/m² pour l'ITE (ménages modestes), 60€/m² (ménages intermédiaires). CEE (Certificats d'Économies d'Énergie) : prime complémentaire de 15 à 30€/m² selon revenus. Éco-PTZ : prêt à taux zéro jusqu'à 50 000€ sur 20 ans (sans condition de ressources). TVA réduite 5,5% : sur main d'œuvre et matériaux. Aides Bordeaux Métropole : subventions locales complémentaires. Notre service : calcul précis de vos aides, constitution complète du dossier, suivi jusqu'à versement. Reste à charge réel souvent inférieur à 50% du coût total !"
    },
    {
      title: "Intervention Rapide à Bègles : Proximité et Réactivité",
      description: "Basés au 81 Boulevard Pierre 1er au Bouscat (20 minutes de Bègles), ERTF intervient rapidement sur toute la commune : Centre-ville, Terres Neuves, Yves Farge, Mussonville, Prés de Bègles, Dorat, Argentine. Notre proximité vous garantit : devis gratuit sous 48h après visite technique, démarrage des travaux rapide (2 à 4 semaines après signature), disponibilité pour suivi de chantier et SAV, coûts de déplacement réduits répercutés sur votre devis. Équipe locale de 2 à 5 professionnels expérimentés, connaissance parfaite des spécificités locales (climat, proximité Garonne, types de constructions). Disponibles du lundi au samedi 8h-19h. Urgences traitées en priorité."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé à Bègles",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Intervention rapide sur Bègles",
    "Équipe de 2 à 5 professionnels expérimentés",
    "4 ans d'expérience en conduite de travaux",
    "Garantie décennale et RC professionnelle",
    "Respect des normes DTU",
    "Matériaux de qualité certifiés",
    "Accompagnement pour les aides financières",
    "Expertise copropriétés",
    "Chantier propre et sécurisé"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Bègles Centre",
    "Terres Neuves",
    "Yves Farge",
    "Mussonville",
    "Prés de Bègles",
    "Dorat",
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
  title: beglesConfig.title,
  description: beglesConfig.description,
  keywords: beglesConfig.keywords,
};

export default function BeglesPage() {
  return <ServicePage {...beglesConfig} />;
}
