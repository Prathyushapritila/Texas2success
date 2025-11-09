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
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Industries background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft gray-blue base with orange accent highlights, diffuse lighting */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(100, 116, 139, 0.7) 0%, rgba(59, 130, 246, 0.6) 50%, rgba(255, 122, 0, 0.3) 100%)'
          }}
        ></div>
        {/* Faint gradient overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
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
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:border-green-300 transition-all duration-300 border-2 border-white/20 cursor-pointer group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-all duration-300">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-green-600 group-hover:text-white transition-all duration-300" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
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
