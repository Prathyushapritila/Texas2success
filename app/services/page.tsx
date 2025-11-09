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

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white break-words px-4">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto break-words px-4">
            Comprehensive IT solutions to help you succeed. We provide a full range of services to transform your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Database
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={`/services/${service.id}`}>
                  <div className="glass dark:bg-gray-800/50 dark:border-gray-700 p-6 md:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-10 h-10 md:w-12 md:h-12 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white break-words">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-base md:text-lg break-words">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center text-green-600 dark:text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 p-12 md:p-16 rounded-2xl text-center text-white shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words px-4">Need Help Choosing a Service?</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-green-50 dark:text-green-100 max-w-3xl mx-auto leading-relaxed break-words px-4">
            Contact us for a free consultation and we'll help you determine the best solution for your business needs.
          </p>
          <Link
            href="/contact"
            className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 dark:hover:bg-gray-700 transition inline-block shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Free Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
