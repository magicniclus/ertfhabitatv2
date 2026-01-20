'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const legalLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'CGV', href: '/cgv' },
    { name: 'Contact', href: '/contact' },
    { name: 'Espace pro', href: 'https://app.trouver-mon-chantier.fr' },
  ];

  const servicesLinks = [
    { name: 'Isolation Thermique Extérieure', href: '/services/isolation-thermique-exterieure' },
    { name: 'Isolation Thermique Intérieure', href: '/services/isolation-thermique-interieure' },
    { name: 'Enduit de Façade', href: '/services/enduit-facade' },
    { name: 'Ravalement', href: '/services/ravalement' },
    { name: 'Bardage', href: '/services/bardage' },
  ];

  const zonesLinks = [
    { name: 'Le Bouscat', href: '/ville/le-bouscat' },
    { name: 'Bordeaux', href: '/ville/bordeaux' },
    { name: 'Mérignac', href: '/ville/merignac' },
    { name: 'Pessac', href: '/ville/pessac' },
    { name: 'Talence', href: '/ville/talence' },
    { name: 'Gironde (33)', href: '#contact' },
    { name: 'Rayon de 150 km', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and description */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <motion.div 
                  className="w-16 h-16 rounded-lg bg-white flex items-center justify-center shadow-lg overflow-hidden"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src="/logo.jpeg" 
                    alt="Logo ERTF" 
                    width={56} 
                    height={56} 
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Spécialiste de l'isolation thermique par l'extérieur (ITE), l'isolation intérieure (ITI) et les travaux de façade en Gironde.
              </p>
              <a 
                href="tel:0783938694" 
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                07 83 93 86 94
              </a>
            </motion.div>

            {/* Legal links */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Liens utiles</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services links */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Nos Prestations</h3>
              <ul className="space-y-2">
                {servicesLinks.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:underline"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Zones d'intervention */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Zones d'Intervention</h3>
              <ul className="space-y-2">
                {zonesLinks.map((zone) => (
                  <li key={zone.name}>
                    <a
                      href={zone.href}
                      className="text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:underline"
                    >
                      {zone.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2">
                <a 
                  href="tel:0783938694"
                  className="text-slate-300 hover:text-white text-sm transition-colors duration-200 block flex items-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>07 83 93 86 94</span>
                </a>
                <p className="text-slate-400 text-xs">
                  Service gratuit 7j/7 de 8h à 19h
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p 
              className="text-slate-400 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              © {currentYear} ERTF. Tous droits réservés.
            </motion.p>

            {/* Powered by */}
            <motion.p 
              className="text-slate-500 text-xs text-center md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Site propulsé par{' '}
              <a 
                href="https://trouver-mon-chantier.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-500/80 transition-colors underline"
              >
                trouver-mon-chantier.fr
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
