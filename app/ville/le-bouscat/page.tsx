import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const lebouscatConfig = {
  // SEO et métadonnées
  title: "Isolation Thermique et Façade au Bouscat - ERTF",
  description: "ERTF, entreprise locale d'isolation thermique (ITE, ITI) et travaux de façade au Bouscat. Ravalement, enduit, bardage. Devis gratuit. Basés au 81 Boulevard Pierre 1er.",
  keywords: ["isolation thermique Le Bouscat", "ITE Le Bouscat", "ravalement façade Le Bouscat", "enduit Le Bouscat", "bardage Le Bouscat", "devis gratuit Le Bouscat", "ERTF Le Bouscat", "entreprise isolation Le Bouscat"],
  
  // Contenu principal
  serviceName: "Isolation et Façade au Bouscat",
  heroImage: "/prestation-2.png",
  heroTitle: "Votre Entreprise Locale au Bouscat",
  heroSubtitle: "ERTF, basée au 81 Boulevard Pierre 1er au Bouscat, est votre spécialiste local en isolation thermique (ITE, ITI), ravalement, enduit et bardage. Proximité et réactivité garanties.",
  
  // Localisation
  sector: "Isolation - Façade",
  location: "Le Bouscat et environs",
  
  // Description détaillée
  mainDescription: "Le Bouscat, c'est notre ville ! ERTF a installé son siège social au 81 Boulevard Pierre 1er, en plein cœur de cette commune résidentielle prisée de 24 000 habitants. Cette implantation locale n'est pas un hasard : Le Bouscat incarne l'excellence de l'habitat bordelais avec ses quartiers bourgeois, ses villas début 20ème siècle et son cadre de vie privilégié. Nous intervenons quotidiennement dans les rues que nous connaissons par cœur : les belles demeures du quartier de l'Hippodrome avec leurs façades en pierre et bow-windows, les maisons de maître de l'avenue du Maréchal Leclerc, les pavillons Art déco du secteur Sainte-Germaine, les villas années 30 de l'Écureuil. Notre connaissance intime du Bouscat nous donne un avantage décisif : nous savons que les maisons du quartier de l'Hippodrome ont souvent des problèmes d'humidité liés aux anciennes écuries transformées, que les villas de l'avenue Pasteur présentent des toitures en ardoise nécessitant une attention particulière, que le secteur du Parc Bordelais regroupe des copropriétés années 70 avec isolation inexistante. Avec un temps d'intervention de 5 à 10 minutes depuis notre siège, nous sommes l'entreprise de proximité par excellence. Notre équipe locale connaît personnellement de nombreux propriétaires bouscatais et a déjà rénové plus de 50 biens dans la commune. Choisir ERTF au Bouscat, c'est choisir une entreprise locale, réactive, qui comprend les spécificités architecturales et les enjeux patrimoniaux de votre quartier.",
  
  // Structure SEO optimisée
  problemSection: {
    title: "Villas Bouscataises et Performance Énergétique : Notre Expertise Locale",
    description: "Le Bouscat, commune résidentielle de 24 000 habitants réputée pour son cadre de vie privilégié, présente un parc immobilier de grande qualité mais vieillissant. Les quartiers de l'Hippodrome, Sainte-Germaine et l'Écureuil regroupent des villas construites entre 1900 et 1940, véritables joyaux architecturaux avec bow-windows, balcons en ferronnerie, toitures en ardoise et façades en pierre. Ces demeures bourgeoises, souvent de 150 à 250m², ont conservé leur charme d'origine mais accusent leur âge sur le plan énergétique. Le quartier du Parc Bordelais concentre des copropriétés années 60-70 en brique rouge typiques de l'époque, aujourd'hui classées E ou F au DPE. L'avenue du Maréchal Leclerc aligne des maisons de maître avec jardins arborés, mais des huisseries d'origine en bois simple vitrage. Le secteur du centre-ville, proche du tramway, mélange immeubles anciens et constructions récentes. Problématique spécifique bouscataise : maintenir le standing architectural tout en améliorant drastiquement les performances énergétiques. Les propriétaires bouscatais, attachés à la qualité de leur cadre de vie, recherchent des solutions haut de gamme qui préservent l'esthétique de leur bien.",
    problems: [
      "Villas de l'Hippodrome : demeures 1900-1930 de 180m² avec consommation énergétique 420 kWh/m²/an, factures annuelles dépassant 5000€",
      "Bow-windows et oriels : éléments architecturaux typiques créant des ponts thermiques majeurs, déperditions estimées à 15% supplémentaires",
      "Toitures en ardoise d'origine : sous-faces non isolées, combles perdus sans isolation, 35% des déperditions totales de la maison",
      "Copropriétés du Parc Bordelais : immeubles années 70 en brique rouge, chauffage collectif fuel, charges explosives (2800€/an pour un T4)",
      "Jardins et espaces verts : contrainte d'accès pour échafaudages, nécessité de préserver végétation lors des travaux ITE",
      "Standing du quartier : obligation de résultat esthétique irréprochable, finitions haut de gamme exigées par les propriétaires",
      "Humidité des anciennes écuries : nombreuses villas avec dépendances transformées présentant remontées capillaires et moisissures",
      "Valorisation immobilière : prix au m² 4500-6000€ au Bouscat, nécessité de préserver voire augmenter la valeur patrimoniale"
    ]
  },
  
  diagnosticSection: {
    title: "Intervention Express depuis Notre Siège du 81 Boulevard Pierre 1er",
    description: "Notre implantation au cœur du Bouscat nous confère un avantage unique : nous connaissons chaque rue, chaque quartier, chaque typologie architecturale de la commune. Nous sommes intervenus sur plus de 50 chantiers bouscatais depuis notre création : villas de l'Hippodrome, maisons de l'avenue Pasteur, copropriétés du Parc Bordelais, pavillons de Sainte-Germaine. Cette expérience locale nous permet d'anticiper les problématiques spécifiques à chaque secteur. Nous savons que les maisons proches de l'Hippodrome ont souvent des caves humides liées à la nappe phréatique, que les villas de l'Écureuil présentent des bow-windows nécessitant un traitement thermique particulier, que les copropriétés de l'avenue Émile Counord ont des problèmes récurrents de chauffage collectif. Notre proximité garantit une réactivité exceptionnelle : visite sous 24h, devis sous 48h, démarrage des travaux sous 2 semaines. Nous privilégions les rendez-vous en fin de journée (18h-20h) pour s'adapter aux horaires des actifs bouscatais.",
    steps: [
      "Prise de rendez-vous immédiate : intervention sous 24h depuis notre siège du Boulevard Pierre 1er, disponibilité soirée pour les actifs",
      "Visite patrimoniale approfondie : analyse architecturale de votre villa (époque, matériaux, éléments remarquables), photos détaillées, relevé des dimensions",
      "Diagnostic thermique ciblé : caméra thermique pour identifier ponts thermiques des bow-windows, oriels, balcons, mesure hygrométrie caves et sous-sols",
      "Étude de valorisation immobilière : estimation de la plus-value apportée par la rénovation énergétique (gain DPE, attractivité locative/revente)",
      "Solutions haut de gamme sur mesure : ITE avec enduit ton pierre pour harmonie quartier, ITI pour préserver façades remarquables, isolation combles perdus",
      "Simulation financière complète : calcul aides MaPrimeRénov' + CEE + éco-PTZ, économies énergétiques annuelles, retour sur investissement, reste à charge",
      "Coordination administrative : constitution dossier aides, déclaration préalable travaux mairie du Bouscat si nécessaire, information copropriété",
      "Devis détaillé sous 48h : chiffrage précis, planning travaux, photos avant/après de réalisations similaires au Bouscat, références clients locaux"
    ]
  },
  
  solutionSection: {
    title: "Solutions Premium Adaptées au Standing Bouscatais",
    description: "Le Bouscat mérite des solutions à la hauteur de son standing. ERTF a développé une offre haut de gamme spécifiquement pensée pour les propriétaires bouscatais exigeants. Nous ne proposons pas de solutions standardisées mais des rénovations sur mesure qui respectent et subliment l'architecture de votre bien. Pour les villas de l'Hippodrome et de Sainte-Germaine, nous privilégions l'ITE avec enduit teinté dans la masse ton pierre de Bordeaux, finition grattée fine pour un rendu élégant. Les bow-windows et oriels font l'objet d'un traitement spécifique avec isolation par l'intérieur des tableaux et pose de menuiseries bois/alu haut de gamme. Pour les copropriétés du Parc Bordelais, nous proposons des rénovations globales incluant ITE, remplacement du chauffage collectif fuel par pompe à chaleur, et création d'espaces vélos sécurisés (obligation 2025). Nos chantiers au Bouscat se distinguent par leur propreté irréprochable, le respect des riverains, et la qualité des finitions. Nous travaillons avec des artisans locaux de confiance et utilisons des matériaux premium (Weber, Parex, Rockwool). Garantie décennale et suivi post-travaux inclus.",
    solutions: [
      "ITE Premium pour villas bourgeoises : isolation 16cm laine de roche, enduit teinté masse ton pierre, finition grattée fine, traitement spécifique bow-windows et oriels, garantie esthétique 10 ans. Gain DPE : passage de F à B. Économies : 2500€/an pour villa 180m². Valorisation : +15% valeur bien",
      "Rénovation énergétique globale villas : ITE + isolation combles 40cm + remplacement menuiseries bois/alu + VMC double-flux + pompe à chaleur air/eau. Objectif BBC Rénovation (<80 kWh/m²/an). Aides cumulées : jusqu'à 35000€. Facture chauffage divisée par 4",
      "ITI haut de gamme immeubles classés : doublage 10cm laine de verre + plaque BA13 haute dureté, traitement acoustique renforcé, finitions lisses prêtes à peindre. Préserve façades remarquables. Gain thermique 30%, gain acoustique 8dB. Idéal appartements centre-ville",
      "Ravalement pierre de Bordeaux technique traditionnelle : nettoyage doux nébulisation (préserve patine), rejointoiement chaux NHL 3.5, réparation pierres dégradées par greffes, hydrofuge incolore respirant. Redonne éclat d'origine aux façades. Durabilité 15-20 ans",
      "Isolation combles perdus soufflage 40cm : laine de roche soufflée R=10, trappe isolée, rehausse plancher bois pour stockage. Chantier 1 journée, propreté garantie. Aides MaPrimeRénov' : 25€/m². Économies : 800€/an pour villa 180m². ROI : 3 ans",
      "Copropriétés Parc Bordelais rénovation complète : ITE 14cm + remplacement chauffage collectif fuel par PAC + isolation toiture + menuiseries PVC. Vote AG accompagné. Aides copropriétés fragiles : 75€/m². Charges divisées par 3. Valorisation appartements +20%",
      "Traitement humidité caves et sous-sols : drainage périphérique, cuvelage étanche, ventilation mécanique, traitement anti-salpêtre. Garantie 10 ans. Assainit espaces annexes des villas. Permet aménagement cave à vin, salle de sport, buanderie"
    ]
  },
  
  // Sous-prestations
  subServices: [
    {
      title: "ITE au Bouscat",
      description: "Isolation thermique par l'extérieur pour maisons et immeubles bouscatais. Réduction des déperditions thermiques et amélioration du confort."
    },
    {
      title: "ITI au Bouscat",
      description: "Solutions d'isolation intérieure adaptées aux contraintes des bâtiments du Bouscat. Idéal pour les copropriétés."
    },
    {
      title: "Ravalement Le Bouscat",
      description: "Ravalement de façade respectueux du caractère résidentiel du Bouscat. Nettoyage, réparation et embellissement."
    },
    {
      title: "Enduit Le Bouscat",
      description: "Application d'enduit de façade avec choix de couleurs adaptées au style bouscatais. Finitions soignées garanties."
    },
    {
      title: "Bardage Le Bouscat",
      description: "Pose de bardage pour moderniser votre maison au Bouscat. Large choix de matériaux et de finitions."
    },
    {
      title: "Proximité",
      description: "Basés au 81 Boulevard Pierre 1er, nous intervenons rapidement chez vous au Bouscat. Disponibilité et réactivité."
    },
    {
      title: "Connaissance Locale",
      description: "Parfaite connaissance des spécificités architecturales et réglementaires du Bouscat pour des travaux adaptés."
    },
    {
      title: "Garanties",
      description: "Garantie décennale et RC professionnelle sur tous nos travaux au Bouscat pour votre tranquillité d'esprit."
    }
  ],
  
  // Avantages
  advantages: [
    "Entreprise locale basée au Bouscat",
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Intervention rapide (proximité)",
    "Tarification transparente",
    "Équipe de 2 à 5 professionnels",
    "4 ans d'expérience",
    "Garantie décennale et RC",
    "Matériaux de qualité",
    "Accompagnement aides financières",
    "Connaissance du secteur",
    "Chantier propre et organisé"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Le Bouscat Centre",
    "Le Bouscat Hippodrome",
    "Le Bouscat Sainte-Germaine",
    "Le Bouscat Écureuil",
    "Bordeaux",
    "Bruges",
    "Eysines",
    "Blanquefort",
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
  title: "Isolation Thermique et Façade Le Bouscat - ERTF | Devis Gratuit",
  description: lebouscatConfig.description,
  keywords: lebouscatConfig.keywords.join(", "),
  authors: [{ name: "ERTF" }],
  creator: "ERTF",
  publisher: "ERTF",
  openGraph: {
    title: "Isolation Thermique et Façade Le Bouscat - ERTF",
    description: lebouscatConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LeBoscatPage() {
  return <ServicePage {...lebouscatConfig} />;
}
