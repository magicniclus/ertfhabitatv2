'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, Star, Building2, Phone } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const sectors = [
  { name: 'Bordeaux', slug: 'bordeaux' },
  { name: 'Le Bouscat', slug: 'le-bouscat' },
  { name: 'Mérignac', slug: 'merignac' },
  { name: 'Pessac', slug: 'pessac' },
  { name: 'Talence', slug: 'talence' },
  { name: 'Villenave-d\'Ornon', slug: 'villenave-d-ornon' },
  { name: 'Gradignan', slug: 'gradignan' },
  { name: 'Bègles', slug: 'begles' },
  { name: 'Floirac', slug: 'floirac' },
  { name: 'Cenon', slug: 'cenon' }
];

export default function SecteurIndexClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* Breadcrumb */}
            <div className="flex justify-center mb-6">
              <Breadcrumb 
                items={[
                  { label: 'Accueil', href: '/' },
                  { label: 'Secteurs', current: true }
                ]}
                className="opacity-90"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos villes d'intervention
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Découvrez nos prestations d'isolation thermique en Gironde : 
              ITE, ITI, ravalement de façade, enduit et bardage.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 text-orange-300" />
                <span className="text-sm font-medium">Gironde</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">10 villes couvertes</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Building2 className="h-5 w-5 text-green-300" />
                <span className="text-sm font-medium">Spécialiste isolation thermique</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre ville
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cliquez sur votre ville pour découvrir nos prestations d'isolation thermique spécialisées dans votre zone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link
                  href={`/ville/${sector.slug}`}
                  className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {sector.name}
                    </h3>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    ITE, ITI, ravalement, enduit
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Votre ville n'est pas listée ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nous intervenons dans toute la Gironde pour vos travaux d'isolation thermique. 
            Contactez-nous pour connaître nos possibilités d'intervention dans votre ville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Nous contacter
            </Link>
            <Link
              href="tel:0783938694"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              07 83 49 01 36
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
