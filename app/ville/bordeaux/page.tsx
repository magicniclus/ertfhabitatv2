import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const bordeauxConfig = {
  // SEO et métadonnées
  title: "Isolation Thermique et Façade à Bordeaux - ERTF",
  description: "ERTF, spécialiste de l'isolation thermique (ITE, ITI) et des travaux de façade à Bordeaux. Ravalement, enduit, bardage. Devis gratuit et personnalisé. Intervention rapide.",
  keywords: ["isolation thermique Bordeaux", "ITE Bordeaux", "ravalement façade Bordeaux", "enduit Bordeaux", "bardage Bordeaux", "devis gratuit Bordeaux", "ERTF Bordeaux", "rénovation énergétique Bordeaux"],
  
  // Contenu principal
  serviceName: "Isolation et Façade à Bordeaux",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise d'Isolation et Façade à Bordeaux",
  heroSubtitle: "ERTF intervient à Bordeaux pour tous vos travaux d'isolation thermique (ITE, ITI), ravalement de façade, enduit et bardage. Expertise locale et devis gratuit.",
  
  // Localisation
  sector: "Isolation - Façade",
  location: "Bordeaux et agglomération",
  
  // Description détaillée
  mainDescription: "Vous cherchez une entreprise d'isolation thermique et de ravalement de façade à Bordeaux ? ERTF, basée au Bouscat depuis 2022, est votre partenaire de confiance pour tous vos projets de rénovation énergétique dans la métropole bordelaise. Spécialistes de l'isolation thermique par l'extérieur (ITE) et intérieure (ITI), nous intervenons également pour le ravalement de façade, l'application d'enduit et la pose de bardage sur Bordeaux et ses 28 communes. Notre connaissance approfondie du patrimoine architectural bordelais, du centre historique classé UNESCO aux quartiers résidentiels modernes, nous permet d'adapter nos solutions à chaque type de bâtiment. Avec une équipe de 2 à 5 professionnels qualifiés, 4 ans d'expérience en conduite de travaux et nos garanties décennale et RC professionnelle, ERTF s'impose comme le choix évident pour vos travaux d'isolation et de façade à Bordeaux. Nous accompagnons aussi bien les particuliers que les copropriétés et les professionnels dans l'obtention des aides financières (MaPrimeRénov', CEE, éco-PTZ) pour réduire significativement le coût de vos travaux de rénovation énergétique.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Les Défis de l'Isolation et du Ravalement à Bordeaux",
    description: "Bordeaux et sa métropole font face à des enjeux spécifiques en matière de rénovation énergétique. Le climat océanique aquitain, caractérisé par une humidité élevée (75% en moyenne), des pluies fréquentes (900mm/an) et des variations thermiques importantes, met à rude épreuve les façades et l'isolation des bâtiments bordelais. La pollution urbaine, particulièrement présente dans le centre-ville et près des grands axes comme la rocade, accélère la dégradation des façades en pierre de Bordeaux et des enduits traditionnels. De plus, le parc immobilier bordelais, composé à 60% de bâtiments construits avant 1975 (avant la première réglementation thermique), présente des déperditions énergétiques considérables : jusqu'à 30% par les murs et 25% par la toiture. Ces problématiques touchent aussi bien les immeubles haussmanniens du centre historique que les maisons individuelles des quartiers périphériques comme Caudéran, Bordeaux-Lac ou la Bastide.",
    problems: [
      "Façades en pierre de Bordeaux noircies et dégradées par la pollution urbaine et les pluies acides",
      "Humidité persistante et infiltrations d'eau dues au climat océanique (75% d'humidité moyenne)",
      "Déperditions thermiques majeures : 30% par les murs, 25% par la toiture dans les bâtiments anciens",
      "Factures de chauffage exorbitantes : jusqu'à 2000€/an pour un appartement de 80m² mal isolé",
      "Inconfort thermique été comme hiver : surchauffe estivale et froid hivernal dans les logements mal isolés",
      "Dégradation accélérée du patrimoine immobilier bordelais : fissures, décollements d'enduit, moisissures",
      "Classement énergétique médiocre (DPE F ou G) impactant la valeur de revente et la mise en location",
      "Non-conformité aux nouvelles réglementations : obligation de rénovation énergétique pour les passoires thermiques d'ici 2028"
    ]
  },
  
  diagnosticSection: {
    title: "Notre Diagnostic Énergétique Complet à Bordeaux : Méthodologie Professionnelle",
    description: "ERTF propose un diagnostic énergétique et technique gratuit et sans engagement pour tous les propriétaires et copropriétés de Bordeaux et sa métropole. Notre approche méthodique, fruit de 4 ans d'expérience en conduite de travaux, nous permet d'identifier précisément les problématiques de votre bâtiment et de vous proposer les solutions les plus performantes et rentables. Nous intervenons sur tous types de bâtiments bordelais : immeubles haussmanniens du centre-ville, échoppes bordelaises traditionnelles, maisons des années 60-70 à Caudéran ou Bordeaux-Lac, immeubles récents nécessitant une rénovation. Notre diagnostic prend en compte les spécificités architecturales locales, les contraintes réglementaires (notamment dans les secteurs sauvegardés et zones ABF) et votre budget pour vous garantir un projet de rénovation énergétique réussi.",
    steps: [
      "Prise de rendez-vous sous 48h : nous nous adaptons à vos disponibilités pour une visite technique à votre domicile ou immeuble à Bordeaux (tous quartiers : Centre, Chartrons, Bastide, Caudéran, Saint-Augustin, etc.)",
      "Analyse thermographique infrarouge (si nécessaire) : détection précise des ponts thermiques, déperditions énergétiques et zones d'infiltration d'humidité sur votre façade et dans vos murs",
      "Inspection détaillée de la façade : état du support (pierre de Bordeaux, brique, béton, enduit), présence de fissures, décollement d'enduit, traces d'humidité, état des joints, vérification de la planéité",
      "Évaluation de l'isolation existante : mesure de l'épaisseur d'isolant (si présent), identification des zones non isolées, calcul des déperditions thermiques par zone (murs, toiture, planchers)",
      "Étude de faisabilité technique : analyse des contraintes architecturales (bâtiment classé, secteur sauvegardé, copropriété), vérification de la portance des murs, évaluation de l'espace disponible pour l'isolation",
      "Calcul du gain énergétique : estimation précise de la réduction de consommation énergétique (en kWh et en €), amélioration du DPE (passage de F à C par exemple), calcul du retour sur investissement",
      "Proposition de solutions techniques sur mesure : ITE (polystyrène, laine de roche, fibre de bois), ITI (selon contraintes), ravalement avec ou sans isolation, choix des finitions (enduit, bardage) adaptées au style bordelais",
      "Accompagnement complet pour les aides financières : calcul de votre éligibilité à MaPrimeRénov' (jusqu'à 75€/m² pour l'ITE), CEE (Certificats d'Économies d'Énergie), éco-PTZ (prêt à taux zéro jusqu'à 50 000€), aide de Bordeaux Métropole, constitution du dossier",
      "Devis détaillé gratuit sous 48h : chiffrage précis par poste (fourniture, main d'œuvre, échafaudage), planning prévisionnel, montant des aides déduites, reste à charge réel, conditions de paiement échelonné"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions d'Isolation et Ravalement Adaptées au Patrimoine Bordelais",
    description: "ERTF a développé une expertise pointue dans la rénovation énergétique des bâtiments bordelais, en tenant compte des spécificités architecturales locales et des contraintes réglementaires. Que vous soyez propriétaire d'une échope bordelaise traditionnelle, d'un appartement dans un immeuble haussmannien du centre-ville, d'une maison individuelle à Caudéran ou d'un bien dans une copropriété récente, nous avons la solution adaptée. Notre connaissance des matériaux traditionnels (pierre de Bordeaux, brique) et des techniques modernes d'isolation nous permet de concilier performance énergétique, respect du patrimoine et esthétique. Tous nos chantiers à Bordeaux respectent les normes DTU en vigueur et les exigences des Architectes des Bâtiments de France (ABF) pour les secteurs protégés.",
    solutions: [
      "Isolation Thermique par l'Extérieur (ITE) haute performance : réduction de 60% des déperditions thermiques, gain de 2 à 3 classes DPE, économies de 30 à 40% sur les factures de chauffage. Isolants utilisés : polystyrène expansé graphité (λ=0,032), laine de roche (incombustible, idéal pour immeubles), fibre de bois (écologique, régulation hygrométrique parfaite pour le climat bordelais). Finitions : enduit organique ou minéral dans les teintes traditionnelles bordelaises (ocre, beige, blanc cassé) ou bardage bois/composite pour un style contemporain",
      "Isolation Thermique Intérieure (ITI) pour bâtiments classés : solution idéale quand l'ITE est impossible (immeuble haussmannien en pierre de Bordeaux, secteur sauvegardé, copropriété refusant l'ITE). Doublage avec laine minérale + plaque de plâtre, épaisseur optimisée (8 à 12cm) pour limiter la perte de surface. Traitement des ponts thermiques aux jonctions. Gain énergétique : 25 à 35% de réduction des déperditions par les murs",
      "Ravalement de façade en pierre de Bordeaux : nettoyage professionnel (hydrogommage, nébulisation), rejointoiement à la chaux traditionnelle, traitement hydrofuge et anti-mousse, réparation des pierres dégradées. Respect des teintes et techniques traditionnelles pour préserver l'authenticité du patrimoine bordelais. Idéal pour immeubles du 18ème et 19ème siècle dans le triangle d'or, les Chartrons, Saint-Pierre",
      "Ravalement avec Isolation Thermique Extérieure : solution 2-en-1 optimale pour rénover et isoler en un seul chantier. Économie de temps et d'échafaudage. Finition enduit (monocouche projeté ou traditionnel taloché) ou bardage selon vos préférences. Particulièrement adapté aux immeubles des années 60-80 à Bordeaux-Lac, Caudéran, Mériadeck nécessitant une rénovation complète",
      "Enduit de façade décoratif : large gamme de textures (gratté, ribbé, écrasé, lissé) et de couleurs conformes aux nuanciers locaux. Enduit monocouche pour rapidité d'exécution, enduit traditionnel à la chaux pour bâtiments anciens, enduit organique (RPE) pour finition moderne et durable. Protection contre l'humidité et les intempéries, résistance aux UV et à la pollution urbaine",
      "Bardage bois et composite : modernisation de façade avec bardage claire-voie, bardage à emboîtement ou vêture. Essences : douglas, mélèze, red cedar (bois naturels) ou composite sans entretien. Idéal pour extension, surélévation ou rénovation complète de maison individuelle. Pose sur ossature avec lame d'air ventilée. Finitions : lasure, saturateur ou peinture selon rendu souhaité",
      "Rénovation énergétique globale BBC : approche complète incluant ITE, isolation toiture/combles, remplacement menuiseries, VMC double-flux, système de chauffage performant. Objectif : atteindre le niveau BBC Rénovation (consommation < 80 kWh/m²/an) pour maximiser les aides financières et la valeur de votre bien. Accompagnement de A à Z avec bureau d'études thermiques partenaire"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Isolation Thermique Extérieure (ITE) à Bordeaux : Performance et Esthétique",
      description: "L'ITE est la solution la plus performante pour isoler votre bâtiment à Bordeaux. ERTF installe des systèmes d'isolation par l'extérieur sur tous types de constructions bordelaises : immeubles collectifs, maisons individuelles, échoppes, bâtiments tertiaires. Nous utilisons des isolants certifiés (polystyrène expansé graphité λ=0,032, laine de roche haute densité 140kg/m³, fibre de bois écologique) en épaisseur optimisée (12 à 16cm) pour atteindre une résistance thermique R≥5 m².K/W exigée pour MaPrimeRénov'. Résultats concrets : réduction de 60% des déperditions par les murs, gain de 2 à 3 classes DPE (passage de F à C), économies de 500 à 800€/an sur les factures de chauffage pour une maison de 100m². Finitions adaptées au style bordelais : enduit gratté ou taloché dans les teintes ocre/beige traditionnelles, ou bardage bois pour un rendu contemporain. Chantier clé en main avec échafaudage, protection, nettoyage. Durée : 2 à 4 semaines selon surface."
    },
    {
      title: "Isolation Thermique Intérieure (ITI) pour Immeubles Bordelais Classés",
      description: "L'ITI est la solution privilégiée pour les immeubles haussmanniens en pierre de Bordeaux du centre historique (secteurs sauvegardés, zones ABF) où l'ITE est interdite ou pour les copropriétés n'ayant pas voté l'ITE. ERTF réalise l'isolation intérieure de vos murs par doublage collé (complexe isolant polystyrène + plaque de plâtre 10+80mm) ou sur ossature métallique (laine minérale 100mm + BA13). Traitement spécifique des ponts thermiques aux jonctions planchers/murs et menuiseries. Finitions soignées prêtes à peindre. Gain énergétique : 25 à 35% de réduction des déperditions, amélioration du confort thermique et acoustique. Perte de surface limitée (8 à 12cm par mur). Idéal pour appartements bordelais de 50 à 150m². Travaux pièce par pièce possible pour rester habité. Durée : 1 à 2 semaines pour un T3."
    },
    {
      title: "Ravalement de Façade en Pierre de Bordeaux : Expertise Patrimoniale",
      description: "Le ravalement de façade en pierre de Bordeaux nécessite un savoir-faire spécifique que ERTF maîtrise parfaitement. Nous intervenons sur les immeubles du 18ème et 19ème siècle du centre-ville (triangle d'or, Chartrons, Saint-Pierre, Hôtel de Ville). Notre méthode : nettoyage doux par hydrogommage basse pression ou nébulisation (préserve la pierre), élimination des salissures et de la pollution sans altérer la patine, rejointoiement à la chaux aérienne NHL 3,5 (respirant, compatible avec pierre ancienne), réparation des pierres dégradées par greffes ou reconstitution, traitement hydrofuge incolore (protection contre l'humidité sans modifier l'aspect), traitement anti-mousse et anti-végétation préventif. Respect total des prescriptions ABF et des teintes traditionnelles. Revalorisation esthétique et patrimoniale de votre immeuble. Durée : 3 à 6 semaines selon surface et état."
    },
    {
      title: "Ravalement avec ITE : Solution 2-en-1 Optimale pour Bordeaux",
      description: "Le ravalement combiné à l'ITE est la solution la plus rentable et efficace pour les immeubles bordelais des années 60-80 (Bordeaux-Lac, Caudéran, Mériadeck, Bacalan) nécessitant une rénovation complète. Un seul chantier pour deux bénéfices : rénovation esthétique de la façade + isolation thermique haute performance. Économie de temps (1 seul échafaudage) et d'argent (mutualisation des coûts). ERTF réalise : préparation du support (nettoyage, réparation fissures, traitement humidité), pose de l'isolant (PSE graphité ou laine de roche 14cm), sous-couche armée avec treillis fibre de verre, enduit de finition projeté ou taloché (large choix de couleurs et textures). Résultat : façade neuve + réduction de 60% des déperditions + gain de 2-3 classes DPE. Aides financières maximales (ITE + ravalement). ROI : 8 à 12 ans. Valorisation du bien : +15 à 25%. Durée : 4 à 8 semaines."
    },
    {
      title: "Enduit de Façade Décoratif : Large Palette pour Style Bordelais",
      description: "ERTF propose une gamme complète d'enduits de façade adaptés à tous les styles architecturaux bordelais. Enduit monocouche projeté : rapidité d'exécution (1 seule couche), large choix de teintes (nuancier 200 couleurs) et de finitions (gratté, ribbé, écrasé), idéal pour maisons récentes et rénovations. Enduit traditionnel à la chaux : 3 couches (gobetis, corps d'enduit, finition talochée), respirant et régulateur d'humidité, parfait pour échoppes et bâtiments anciens, teintes naturelles ocre/beige. Enduit organique (RPE) : finition lisse et moderne, haute résistance aux UV et pollution, large palette de couleurs vives, idéal pour architecture contemporaine. Tous nos enduits : protection contre l'humidité, résistance aux intempéries du climat bordelais, garantie 10 ans. Application sur tous supports (béton, parpaing, brique, ITE). Durée : 1 à 3 semaines."
    },
    {
      title: "Bardage Bois et Composite : Modernisation de Façade à Bordeaux",
      description: "Le bardage est la solution idéale pour moderniser votre maison à Bordeaux, créer une extension ou réaliser une surélévation. ERTF installe tous types de bardages : Bardage bois naturel (douglas, mélèze, red cedar) : esthétique chaleureuse, écologique, finition lasure ou saturateur, entretien tous les 3-5 ans. Bardage composite : imitation bois sans entretien, résistance optimale aux UV et humidité, garantie 10-25 ans, large choix de teintes (gris, brun, anthracite). Bardage PVC : économique, sans entretien, pose rapide, blanc ou couleur. Pose professionnelle sur ossature bois ou métallique avec lame d'air ventilée (prévention humidité). Finitions parfaites : habillage menuiseries, angles, soubassement. Possibilité de combiner avec ITE pour isolation + esthétique. Particulièrement adapté aux maisons individuelles de Caudéran, Bordeaux-Lac, Bastide. Durée : 2 à 4 semaines."
    },
    {
      title: "Aides Financières 2026 à Bordeaux : Jusqu'à 75% de Subventions",
      description: "ERTF vous accompagne pour obtenir toutes les aides financières disponibles à Bordeaux et maximiser votre budget rénovation. MaPrimeRénov' 2026 : jusqu'à 75€/m² pour l'ITE (ménages modestes), 60€/m² (ménages intermédiaires), 15€/m² (ménages supérieurs). Exemple : ITE 100m² = 7500€ d'aide pour revenus modestes. CEE (Certificats d'Économies d'Énergie) : prime complémentaire de 15 à 30€/m² selon revenus. Éco-PTZ : prêt à taux zéro jusqu'à 50 000€ sur 20 ans (sans condition de ressources). TVA réduite 5,5% : sur main d'œuvre et matériaux pour travaux de rénovation énergétique. Aides Bordeaux Métropole : subventions locales complémentaires selon quartiers prioritaires. Notre service : calcul précis de vos aides, constitution complète du dossier, suivi jusqu'à versement. Reste à charge réel souvent inférieur à 50% du coût total !"
    },
    {
      title: "Intervention Rapide sur Bordeaux : Proximité et Réactivité Garanties",
      description: "Basés au 81 Boulevard Pierre 1er au Bouscat (10 minutes du centre de Bordeaux), ERTF intervient rapidement sur toute la métropole bordelaise : Bordeaux (tous quartiers : Centre, Chartrons, Bastide, Caudéran, Saint-Augustin, Nansouty, Grand Parc, Bordeaux-Lac), Le Bouscat, Mérignac, Pessac, Talence, Villenave-d'Ornon, Bègles, Floirac, Cenon, Lormont, Eysines, Blanquefort, Bruges, etc. Notre proximité vous garantit : devis gratuit sous 48h après visite technique, démarrage des travaux rapide (2 à 4 semaines après signature), disponibilité pour suivi de chantier et SAV, coûts de déplacement réduits répercutés sur votre devis. Équipe locale de 2 à 5 professionnels expérimentés, connaissance parfaite du patrimoine bordelais et des spécificités locales (climat, réglementations, ABF). Disponibles du lundi au samedi 8h-19h. Urgences traitées en priorité."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé à Bordeaux",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Intervention rapide sur Bordeaux",
    "Équipe de 2 à 5 professionnels expérimentés",
    "4 ans d'expérience en conduite de travaux",
    "Garantie décennale et RC professionnelle",
    "Respect des normes DTU",
    "Matériaux de qualité certifiés",
    "Accompagnement pour les aides financières",
    "Connaissance du patrimoine bordelais",
    "Chantier propre et sécurisé"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Bordeaux Centre",
    "Bordeaux Chartrons",
    "Bordeaux Bastide",
    "Bordeaux Caudéran",
    "Bordeaux Saint-Augustin",
    "Bordeaux Nansouty",
    "Bordeaux Grand Parc",
    "Bordeaux Lac",
    "Le Bouscat",
    "Mérignac",
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
  title: "Isolation Thermique et Façade Bordeaux - ERTF | Devis Gratuit",
  description: bordeauxConfig.description,
  keywords: bordeauxConfig.keywords.join(", "),
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  openGraph: {
    title: "Isolation Thermique et Façade Bordeaux - ERTF",
    description: bordeauxConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BordeauxPage() {
  return <ServicePage {...bordeauxConfig} />;
}
