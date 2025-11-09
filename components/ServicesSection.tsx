'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/siteData'
import { ArrowRight } from 'lucide-react'

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white break-words">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-green-600 dark:bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto break-words">
            Comprehensive IT solutions to help you succeed
          </p>
        </motion.div>

        {/* 2x2 Grid on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              <Link href={`/services/${service.id}`} className="block h-full">
                <div className="relative min-h-[400px] md:min-h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Background Image with Lazy Loading */}
                  <Image
                    src={service.cardBackgroundImage || service.backgroundImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Dark Overlay - 40% opacity black */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/40 transition-opacity duration-300 group-hover:opacity-70"
                    style={{
                      background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))'
                    }}
                  ></div>
                  
                  {/* Content Overlay - More padding and better spacing */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 lg:p-8 z-10">
                    <h3 
                      className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white drop-shadow-lg break-words leading-tight"
                      style={{ 
                        wordBreak: 'break-word', 
                        overflowWrap: 'break-word',
                        hyphens: 'auto',
                        maxWidth: '100%'
                      }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-white/90 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base drop-shadow-md leading-relaxed break-words line-clamp-2 sm:line-clamp-3">
                      {service.shortDescription}
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg text-white font-semibold hover:bg-white/30 transition-all duration-300 group-hover:translate-x-2 text-xs sm:text-sm md:text-base w-fit">
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
