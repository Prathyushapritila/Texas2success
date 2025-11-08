'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/siteData'
import { ArrowRight } from 'lucide-react'

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Subtle Logo Watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/logo.png"
            alt="Texas 2 Success Logo Watermark"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group h-full"
            >
              <Link href={`/services/${service.id}`} className="block h-full">
                <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-200">
                  {/* Background Image with Lazy Loading */}
                  <Image
                    src={service.cardBackgroundImage || service.backgroundImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Dark Overlay - 40% opacity black */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/40 transition-opacity duration-300 group-hover:opacity-60"
                    style={{
                      background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))'
                    }}
                  ></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white drop-shadow-lg group-hover:translate-y-[-4px] transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/90 mb-6 text-base md:text-lg drop-shadow-md line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 group-hover:translate-x-2 border border-white/30">
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
