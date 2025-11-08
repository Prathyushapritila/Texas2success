'use client'

import { motion } from 'framer-motion'
import { industries } from '@/data/siteData'
import { Heart, Factory, ShoppingCart, DollarSign, GraduationCap, Building } from 'lucide-react'

const iconMap = {
  Heart,
  Factory,
  ShoppingCart,
  DollarSign,
  GraduationCap,
  Building,
}

export default function IndustriesSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions for diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap] || Building
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-green-600" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
                  {industry.name}
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

