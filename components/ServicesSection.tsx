'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/siteData'
import { ArrowRight, Cloud } from 'lucide-react'

export default function ServicesSection() {
  const getOverlayStyle = (overlayType: string) => {
    switch (overlayType) {
      case 'dark':
        // ERP & CRM: Dark overlay rgba(0,0,0,0.5)
        return {
          background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
        }
      case 'blue':
        // Websites & Mobile Apps: Brand blue #004AAD with 60% opacity
        return {
          background: 'linear-gradient(rgba(0, 74, 173, 0.6), rgba(0, 74, 173, 0.6))'
        }
      case 'cloud':
        // Salesforce: Cloud/blur effect
        return {
          background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
          backdropFilter: 'blur(2px)'
        }
      case 'orange':
        // SEO & Digital Marketing: Orange-to-black gradient
        return {
          background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.6) 0%, rgba(0,0,0,0.7) 100%)'
        }
      default:
        return {
          background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))'
        }
    }
  }

  return (
    <section id="services" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Background Image with Lazy Loading */}
                  <Image
                    src={service.cardBackgroundImage || service.backgroundImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Dynamic Overlay based on service type */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                    style={getOverlayStyle(service.overlayType || 'dark')}
                  >
                    {/* Cloud icons for Salesforce service */}
                    {service.overlayType === 'cloud' && (
                      <div className="absolute inset-0 opacity-20">
                        <Cloud className="absolute top-10 left-10 w-16 h-16 text-white" />
                        <Cloud className="absolute top-32 right-16 w-12 h-12 text-white" />
                        <Cloud className="absolute bottom-20 left-1/4 w-14 h-14 text-white" />
                      </div>
                    )}
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="text-white/90 mb-6 text-base md:text-lg drop-shadow-md line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white font-semibold hover:bg-white/30 transition-all duration-300 group-hover:translate-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
