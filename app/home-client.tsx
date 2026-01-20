'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import GoogleReviewsBanner from '@/components/GoogleReviewsBanner';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';
import { organizationSchema, servicesSchema } from '@/lib/seo-config';

export default function HomeClient() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  
  const servicesData = [
    {
      title: "Isolation Thermique Extérieure",
      subtitle: "ITE de qualité",
      content: "Amélioration de la performance énergétique de votre bâtiment avec notre expertise en isolation thermique par l'extérieur. Matériaux de qualité et conformité aux normes.",
      image: "/prestation-1.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/isolation-thermique-exterieure"
    },
    {
      title: "Isolation Thermique Intérieure",
      subtitle: "ITI performante",
      content: "Solutions d'isolation intérieure adaptées à votre logement pour un confort optimal et des économies d'énergie durables.",
      image: "/prestation-2.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/isolation-thermique-interieure"
    },
    {
      title: "Ravalement de Façade",
      subtitle: "Embellissement et protection",
      content: "Rénovation et embellissement de vos façades avec des techniques professionnelles. Enduits, badigeon et solutions sur mesure.",
      image: "/prestation-3.jpeg",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/ravalement"
    },
    {
      title: "Enduit de Façade",
      subtitle: "Finition et esthétique",
      content: "Application d'enduits de qualité pour une finition parfaite de vos façades, alliant durabilité et esthétique.",
      image: "/prestation-4.png",
      gradientFrom: "#e74c3c",
      gradientTo: "#f39c12",
      href: "/services/enduit-facade"
    },
    {
      title: "Bardage",
      subtitle: "Modernisation et protection",
      content: "Installation de bardage pour moderniser votre façade tout en assurant une protection optimale contre les intempéries.",
      image: "/prestation-5.jpeg",
      gradientFrom: "#3498db",
      gradientTo: "#2980b9",
      href: "/services/bardage"
    },
    {
      title: "Votre Projet",
      subtitle: "Demandez votre devis",
      content: "Vous avez un projet d'isolation ou de façade ? Contactez-nous pour un devis personnalisé et gratuit adapté à vos besoins.",
      image: "",
      gradientFrom: "#ff6b35",
      gradientTo: "#f7931e",
      href: "#contact"
    }
  ];

  const contactInfo = {
    address: "81 Boulevard Pierre 1er\n33110 Le Bouscat\nRayon d'intervention: 150 km",
    phone: "07 83 93 86 94",
    email: "ertftravaux@gmail.com",
    hours: "Lundi - Samedi: 8h00 - 19h00",
    mapEmbedUrl: "https://maps.google.com/maps?q=81+Boulevard+Pierre+1er,+33110+Le+Bouscat&t=&z=15&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      
      <Hero config={config.hero} />
      
      {/* Partenaires - Ils nous font confiance */}
      <LogoCarousel config={config.partners} speed={30} />
      
      {/* Notre Expertise */}
      <AboutSection
        id="expertise"
        smallTitle={config.about.sections[0].smallTitle}
        title={config.about.sections[0].title}
        subtitle={config.about.sections[0].subtitle}
        content={config.about.sections[0].content}
        image={config.about.sections[0].image}
        gradientFrom={config.about.sections[0].gradientFrom}
        gradientTo={config.about.sections[0].gradientTo}
        buttonText={config.about.sections[0].buttonText}
        buttonHref={config.about.sections[0].buttonHref}
        reversed={config.about.sections[0].reversed}
      />
      
      {/* Nos Services */}
      <ServicesSection 
        id="services" 
        title="Nos Services"
        subtitle="Découvrez notre gamme complète de prestations"
        cards={servicesData} 
      />
      
      {/* Nos Réalisations */}
      <ProjectGallery 
        id="realisations" 
        config={config.gallery} 
      />
      
      {/* Nos Spécialités */}
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image={config.about.sections[1].image}
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />

      <TeamSection config={config.team} />
      
      {/* Contactez-nous */}
      <ContactSection 
        title="Contactez-nous"
        subtitle="Parlons de votre projet d'isolation thermique et façade en Gironde"
        contactInfo={contactInfo} 
      />
      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
