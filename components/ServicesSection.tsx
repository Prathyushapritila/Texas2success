'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/data/siteData'
import { Database, Zap, Smartphone, TrendingUp, ArrowRight } from 'lucide-react'

const iconMap = {
  Database,
  Zap,
  Smartphone,
  TrendingUp,
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-24 bg-white">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Database
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col transform hover:border-green-200">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-green-600 group-hover:to-green-500 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow text-sm md:text-base leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center space-x-2 group-hover:underline"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
