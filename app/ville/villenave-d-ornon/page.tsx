import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const villenaveConfig = {
  // SEO et métadonnées
  title: "Isolation Thermique et Façade à Villenave-d'Ornon - ERTF",
  description: "ERTF, spécialiste de l'isolation thermique (ITE, ITI) et des travaux de façade à Villenave-d'Ornon. Ravalement, enduit, bardage. Devis gratuit et personnalisé. Intervention rapide.",
  keywords: ["isolation thermique Villenave-d'Ornon", "ITE Villenave-d'Ornon", "ravalement façade Villenave-d'Ornon", "enduit Villenave-d'Ornon", "bardage Villenave-d'Ornon", "devis gratuit Villenave-d'Ornon", "ERTF Villenave-d'Ornon", "rénovation énergétique Villenave-d'Ornon"],
  
  // Contenu principal
  serviceName: "Isolation et Façade à Villenave-d'Ornon",
  heroImage: "/prestation-1.png",
  heroTitle: "Entreprise d'Isolation et Façade à Villenave-d'Ornon",
  heroSubtitle: "ERTF intervient à Villenave-d'Ornon pour tous vos travaux d'isolation thermique (ITE, ITI), ravalement de façade, enduit et bardage. Expertise locale et devis gratuit.",
  
  // Localisation
  sector: "Isolation - Façade",
  location: "Villenave-d'Ornon et agglomération",
  
  // Description détaillée
  mainDescription: "Vous recherchez une entreprise d'isolation thermique et de ravalement de façade à Villenave-d'Ornon ? ERTF, basée au Bouscat depuis 2022, est votre partenaire privilégié pour tous vos projets de rénovation énergétique dans cette commune dynamique de la métropole bordelaise. Spécialistes de l'isolation thermique par l'extérieur (ITE) et intérieure (ITI), nous intervenons également pour le ravalement de façade, l'application d'enduit et la pose de bardage à Villenave-d'Ornon et ses quartiers (Pont de la Maye, Chambéry, Centre-ville, Bocage). Notre connaissance approfondie du parc immobilier villenavais, des maisons individuelles des lotissements résidentiels aux immeubles collectifs, nous permet d'adapter nos solutions à chaque type de construction. Avec une équipe de 2 à 5 professionnels qualifiés, 4 ans d'expérience en conduite de travaux et nos garanties décennale et RC professionnelle, ERTF s'impose comme le choix évident pour vos travaux d'isolation et de façade à Villenave-d'Ornon. Nous accompagnons particuliers, copropriétés et professionnels dans l'obtention des aides financières (MaPrimeRénov', CEE, éco-PTZ) pour réduire significativement le coût de vos travaux de rénovation énergétique.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Les Défis de l'Isolation et du Ravalement à Villenave-d'Ornon",
    description: "Villenave-d'Ornon, 4ème commune de la métropole bordelaise avec plus de 33 000 habitants, fait face à des enjeux importants en matière de rénovation énergétique. Le climat océanique aquitain, avec son humidité élevée (75% en moyenne) et ses pluies fréquentes (900mm/an), sollicite fortement les façades et l'isolation des bâtiments villenavais. La commune, en pleine expansion urbaine depuis les années 60-70, compte un parc immobilier diversifié : maisons individuelles des lotissements pavillonnaires (Pont de la Maye, Chambéry), immeubles collectifs du centre-ville, constructions récentes du secteur Bocage. Plus de 55% des logements ont été construits avant 1975, avant la première réglementation thermique, présentant des déperditions énergétiques importantes : jusqu'à 30% par les murs et 25% par la toiture. La proximité de la rocade et des axes routiers majeurs accentue la pollution et la dégradation des façades.",
    problems: [
      "Façades dégradées par l'humidité et la pollution urbaine, particulièrement sur les axes routiers (RN113, rocade)",
      "Humidité persistante et infiltrations d'eau dues au climat océanique et à la proximité de la Garonne",
      "Déperditions thermiques importantes : 30% par les murs dans les maisons des années 60-70 mal isolées",
      "Factures de chauffage élevées : jusqu'à 1800€/an pour une maison de 100m² mal isolée à Villenave-d'Ornon",
      "Inconfort thermique été comme hiver dans les lotissements pavillonnaires anciens (Pont de la Maye, Chambéry)",
      "Dégradation des enduits et façades : fissures, décollements, moisissures sur les constructions des années 60-80",
      "Classement énergétique médiocre (DPE E, F ou G) impactant la valeur de revente des biens villenavais",
      "Obligation de rénovation énergétique pour les passoires thermiques d'ici 2028 : urgence pour de nombreux propriétaires"
    ]
  },
  
  diagnosticSection: {
    title: "Notre Diagnostic Énergétique Complet à Villenave-d'Ornon : Méthodologie Professionnelle",
    description: "ERTF propose un diagnostic énergétique et technique gratuit et sans engagement pour tous les propriétaires et copropriétés de Villenave-d'Ornon. Notre approche méthodique, fruit de 4 ans d'expérience en conduite de travaux, nous permet d'identifier précisément les problématiques de votre bâtiment et de vous proposer les solutions les plus performantes et rentables. Nous intervenons sur tous types de constructions villenavaises : maisons individuelles des lotissements (Pont de la Maye, Chambéry, Bocage), immeubles collectifs du centre-ville, pavillons récents nécessitant une amélioration énergétique. Notre diagnostic prend en compte les spécificités architecturales locales, les contraintes techniques et votre budget pour vous garantir un projet de rénovation énergétique réussi.",
    steps: [
      "Prise de rendez-vous sous 48h : visite technique à votre domicile à Villenave-d'Ornon (tous quartiers : Pont de la Maye, Chambéry, Centre-ville, Bocage, Coteau)",
      "Analyse thermographique infrarouge : détection précise des ponts thermiques, déperditions énergétiques et zones d'infiltration d'humidité",
      "Inspection détaillée de la façade : état du support (enduit, brique, béton), fissures, décollement, traces d'humidité, vérification de la planéité",
      "Évaluation de l'isolation existante : mesure de l'épaisseur d'isolant, identification des zones non isolées, calcul des déperditions par zone",
      "Étude de faisabilité technique : analyse des contraintes (copropriété, mitoyenneté), vérification de la portance, évaluation de l'espace disponible",
      "Calcul du gain énergétique : estimation précise de la réduction de consommation (en kWh et €), amélioration du DPE, calcul du ROI",
      "Proposition de solutions techniques sur mesure : ITE (polystyrène graphité, laine de roche, fibre de bois), ITI, ravalement avec ou sans isolation",
      "Accompagnement complet pour les aides financières : MaPrimeRénov' (jusqu'à 75€/m² pour l'ITE), CEE, éco-PTZ (jusqu'à 50 000€), constitution du dossier",
      "Devis détaillé gratuit sous 48h : chiffrage précis, planning prévisionnel, montant des aides déduites, reste à charge réel, paiement échelonné"
    ]
  },
  
  solutionSection: {
    title: "Nos Solutions d'Isolation et Ravalement Adaptées à Villenave-d'Ornon",
    description: "ERTF a développé une expertise pointue dans la rénovation énergétique des bâtiments de Villenave-d'Ornon, en tenant compte des spécificités architecturales locales. Que vous soyez propriétaire d'une maison individuelle dans un lotissement pavillonnaire, d'un appartement en copropriété ou d'un pavillon récent, nous avons la solution adaptée. Notre connaissance des constructions villenavaises (maisons années 60-70, pavillons récents, immeubles collectifs) et des techniques modernes d'isolation nous permet de concilier performance énergétique, esthétique et budget maîtrisé. Tous nos chantiers à Villenave-d'Ornon respectent les normes DTU en vigueur.",
    solutions: [
      "Isolation Thermique par l'Extérieur (ITE) haute performance : réduction de 60% des déperditions thermiques, gain de 2 à 3 classes DPE, économies de 30 à 40% sur les factures. Isolants : polystyrène expansé graphité (λ=0,032), laine de roche (incombustible), fibre de bois (écologique). Finitions : enduit gratté/taloché (large choix de couleurs) ou bardage bois/composite moderne",
      "Isolation Thermique Intérieure (ITI) pour contraintes techniques : solution idéale quand l'ITE est impossible (copropriété, mitoyenneté). Doublage avec laine minérale + plaque de plâtre, épaisseur optimisée (8 à 12cm). Traitement des ponts thermiques. Gain énergétique : 25 à 35% de réduction des déperditions",
      "Ravalement de façade complet : nettoyage professionnel, réparation des fissures et décollements, traitement hydrofuge et anti-mousse, application d'enduit neuf. Redonne un coup de jeune à votre maison villenavaise. Idéal pour maisons des années 60-80 du Pont de la Maye et Chambéry",
      "Ravalement avec ITE : solution 2-en-1 optimale pour rénover et isoler en un seul chantier. Économie de temps et d'argent (1 seul échafaudage). Finition enduit ou bardage selon préférences. Particulièrement adapté aux maisons individuelles de Villenave-d'Ornon nécessitant une rénovation complète",
      "Enduit de façade décoratif : large gamme de textures (gratté, ribbé, écrasé, lissé) et de couleurs. Enduit monocouche pour rapidité, enduit traditionnel à la chaux pour respirabilité, enduit organique (RPE) pour finition moderne. Protection contre l'humidité et les intempéries, garantie 10 ans",
      "Bardage bois et composite : modernisation de façade avec bardage claire-voie ou à emboîtement. Essences : douglas, mélèze, red cedar (bois naturels) ou composite sans entretien. Idéal pour extension, surélévation ou rénovation complète. Pose sur ossature avec lame d'air ventilée",
      "Rénovation énergétique globale BBC : approche complète incluant ITE, isolation toiture/combles, remplacement menuiseries, VMC double-flux. Objectif : atteindre le niveau BBC Rénovation (< 80 kWh/m²/an) pour maximiser les aides et la valeur de votre bien"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "Isolation Thermique Extérieure (ITE) à Villenave-d'Ornon : Performance et Économies",
      description: "L'ITE est la solution la plus performante pour isoler votre maison à Villenave-d'Ornon. ERTF installe des systèmes d'isolation par l'extérieur sur tous types de constructions : maisons individuelles des lotissements (Pont de la Maye, Chambéry, Bocage), pavillons récents, immeubles collectifs. Nous utilisons des isolants certifiés (polystyrène expansé graphité λ=0,032, laine de roche haute densité 140kg/m³, fibre de bois écologique) en épaisseur optimisée (12 à 16cm) pour atteindre R≥5 m².K/W exigée pour MaPrimeRénov'. Résultats concrets : réduction de 60% des déperditions par les murs, gain de 2 à 3 classes DPE (passage de E à B), économies de 500 à 800€/an sur les factures de chauffage pour une maison de 100m². Finitions adaptées : enduit gratté ou taloché (large choix de couleurs), ou bardage bois/composite pour un style contemporain. Chantier clé en main avec échafaudage, protection, nettoyage. Durée : 2 à 4 semaines selon surface."
    },
    {
      title: "Isolation Thermique Intérieure (ITI) pour Maisons Villenavaises",
      description: "L'ITI est la solution privilégiée quand l'ITE est impossible (copropriété refusant l'ITE, mitoyenneté, contraintes techniques). ERTF réalise l'isolation intérieure de vos murs par doublage collé (complexe isolant polystyrène + plaque de plâtre 10+80mm) ou sur ossature métallique (laine minérale 100mm + BA13). Traitement spécifique des ponts thermiques aux jonctions. Finitions soignées prêtes à peindre. Gain énergétique : 25 à 35% de réduction des déperditions, amélioration du confort thermique et acoustique. Perte de surface limitée (8 à 12cm par mur). Idéal pour maisons et appartements villenavais de 50 à 150m². Travaux pièce par pièce possible pour rester habité. Durée : 1 à 2 semaines pour une maison de 100m²."
    },
    {
      title: "Ravalement de Façade à Villenave-d'Ornon : Rénovation Complète",
      description: "Le ravalement de façade redonne un coup de neuf à votre maison villenavaise. ERTF intervient sur toutes les constructions : maisons des années 60-70 (Pont de la Maye, Chambéry), pavillons récents, immeubles collectifs. Notre méthode : nettoyage haute pression ou hydrogommage (élimination salissures, mousses, pollution), réparation des fissures et décollements d'enduit, traitement hydrofuge et anti-mousse préventif, application d'enduit neuf (monocouche ou traditionnel). Large choix de couleurs et textures pour personnaliser votre façade. Protection optimale contre l'humidité et les intempéries du climat océanique. Garantie 10 ans. Revalorisation esthétique et patrimoniale de votre bien. Durée : 2 à 4 semaines selon surface et état."
    },
    {
      title: "Ravalement avec ITE : Solution 2-en-1 pour Villenave-d'Ornon",
      description: "Le ravalement combiné à l'ITE est la solution la plus rentable pour les maisons villenavaises des années 60-80 nécessitant une rénovation complète. Un seul chantier pour deux bénéfices : rénovation esthétique de la façade + isolation thermique haute performance. Économie de temps (1 seul échafaudage) et d'argent (mutualisation des coûts). ERTF réalise : préparation du support (nettoyage, réparation fissures, traitement humidité), pose de l'isolant (PSE graphité ou laine de roche 14cm), sous-couche armée avec treillis, enduit de finition (large choix de couleurs et textures). Résultat : façade neuve + réduction de 60% des déperditions + gain de 2-3 classes DPE. Aides financières maximales. ROI : 8 à 12 ans. Valorisation du bien : +15 à 25%. Durée : 3 à 6 semaines."
    },
    {
      title: "Enduit de Façade Décoratif : Personnalisez Votre Maison Villenavaise",
      description: "ERTF propose une gamme complète d'enduits de façade pour tous les styles architecturaux. Enduit monocouche projeté : rapidité d'exécution (1 seule couche), large choix de teintes (nuancier 200 couleurs) et de finitions (gratté, ribbé, écrasé), idéal pour maisons récentes et rénovations. Enduit traditionnel à la chaux : 3 couches (gobetis, corps d'enduit, finition talochée), respirant et régulateur d'humidité, parfait pour maisons anciennes. Enduit organique (RPE) : finition lisse et moderne, haute résistance aux UV et pollution, large palette de couleurs vives. Tous nos enduits : protection contre l'humidité, résistance aux intempéries du climat océanique, garantie 10 ans. Application sur tous supports (béton, parpaing, brique, ITE). Durée : 1 à 3 semaines."
    },
    {
      title: "Bardage Bois et Composite : Modernisation à Villenave-d'Ornon",
      description: "Le bardage est la solution idéale pour moderniser votre maison à Villenave-d'Ornon, créer une extension ou réaliser une surélévation. ERTF installe tous types de bardages : Bardage bois naturel (douglas, mélèze, red cedar) : esthétique chaleureuse, écologique, finition lasure ou saturateur, entretien tous les 3-5 ans. Bardage composite : imitation bois sans entretien, résistance optimale aux UV et humidité, garantie 10-25 ans, large choix de teintes (gris, brun, anthracite). Bardage PVC : économique, sans entretien, pose rapide. Pose professionnelle sur ossature avec lame d'air ventilée (prévention humidité). Finitions parfaites : habillage menuiseries, angles, soubassement. Possibilité de combiner avec ITE pour isolation + esthétique. Durée : 2 à 4 semaines."
    },
    {
      title: "Aides Financières 2026 à Villenave-d'Ornon : Jusqu'à 75% de Subventions",
      description: "ERTF vous accompagne pour obtenir toutes les aides financières disponibles à Villenave-d'Ornon et maximiser votre budget rénovation. MaPrimeRénov' 2026 : jusqu'à 75€/m² pour l'ITE (ménages modestes), 60€/m² (ménages intermédiaires), 15€/m² (ménages supérieurs). Exemple : ITE 100m² = 7500€ d'aide pour revenus modestes. CEE (Certificats d'Économies d'Énergie) : prime complémentaire de 15 à 30€/m² selon revenus. Éco-PTZ : prêt à taux zéro jusqu'à 50 000€ sur 20 ans (sans condition de ressources). TVA réduite 5,5% : sur main d'œuvre et matériaux pour travaux de rénovation énergétique. Aides Bordeaux Métropole : subventions locales complémentaires. Notre service : calcul précis de vos aides, constitution complète du dossier, suivi jusqu'à versement. Reste à charge réel souvent inférieur à 50% du coût total !"
    },
    {
      title: "Intervention Rapide à Villenave-d'Ornon : Proximité et Réactivité",
      description: "Basés au 81 Boulevard Pierre 1er au Bouscat (15 minutes de Villenave-d'Ornon), ERTF intervient rapidement sur toute la commune : Pont de la Maye, Chambéry, Centre-ville, Bocage, Coteau, Barrière de Toulouse. Notre proximité vous garantit : devis gratuit sous 48h après visite technique, démarrage des travaux rapide (2 à 4 semaines après signature), disponibilité pour suivi de chantier et SAV, coûts de déplacement réduits répercutés sur votre devis. Équipe locale de 2 à 5 professionnels expérimentés, connaissance parfaite des spécificités locales (climat, types de constructions). Disponibles du lundi au samedi 8h-19h. Urgences traitées en priorité."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé à Villenave-d'Ornon",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Intervention rapide sur Villenave-d'Ornon",
    "Équipe de 2 à 5 professionnels expérimentés",
    "4 ans d'expérience en conduite de travaux",
    "Garantie décennale et RC professionnelle",
    "Respect des normes DTU",
    "Matériaux de qualité certifiés",
    "Accompagnement pour les aides financières",
    "Connaissance du parc immobilier villenavais",
    "Chantier propre et sécurisé"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Villenave-d'Ornon Centre",
    "Pont de la Maye",
    "Chambéry",
    "Bocage",
    "Coteau",
    "Barrière de Toulouse",
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
  title: villenaveConfig.title,
  description: villenaveConfig.description,
  keywords: villenaveConfig.keywords,
};

export default function VillenaveDornonPage() {
  return <ServicePage {...villenaveConfig} />;
}
