'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { differentiators } from '@/data/siteData'
import { Cloud, Bot, Code, Server, Rocket, Headphones } from 'lucide-react'

const iconMap = {
  Cloud,
  Bot,
  Code,
  Server,
  Rocket,
  Headphones,
}

export default function DifferentiatorsSection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Technology and innovation background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay: Blue (#004AAD) to Orange (#FF7A00) with soft gradient from dark blue (bottom) to light blue (top) */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0, 74, 173, 0.8) 0%, rgba(0, 74, 173, 0.6) 50%, rgba(255, 122, 0, 0.4) 100%)'
          }}
        ></div>
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
            What We Do
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white drop-shadow-md">
            Product Development for Better Business
          </h3>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            We are privileged to work with hundreds of future-thinking businesses, including many of the world's top hardware, software, and brands. Our comprehensive approach combines cutting-edge technology with proven methodologies to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Code
            return (
              <motion.div
                key={index}
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
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
