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
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                  <div className="glass dark:bg-slate-800/50 p-8 rounded-2xl h-full hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <Icon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold">
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
          className="bg-gradient-to-r from-primary-600 to-primary-800 p-12 rounded-2xl text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing a Service?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us for a free consultation and we'll help you determine the best solution for your business needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition inline-block"
          >
            Get Free Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
