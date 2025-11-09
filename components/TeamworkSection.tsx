'use client'

import { motion } from 'framer-motion'
import { Users, Target, Award, Hand } from 'lucide-react'

const teamworkValues = [
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "We work closely with your team to understand your unique needs and deliver solutions that align with your business goals."
  },
  {
    icon: Hand,
    title: "Partnership Focus",
    description: "We build long-term relationships, becoming an extension of your team rather than just a service provider."
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Every project starts with clear objectives and ends with measurable results that drive your business forward."
  },
  {
    icon: Award,
    title: "Excellence in Delivery",
    description: "We combine expertise, dedication, and innovation to deliver exceptional results on time and within budget."
  }
]

export default function TeamworkSection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Teamwork and collaboration background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Warm lighting (soft orange accent) with company blue tones, faint gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 122, 0, 0.3) 0%, rgba(0, 74, 173, 0.5) 50%, rgba(0, 74, 173, 0.7) 100%)'
          }}
        ></div>
        {/* Faint gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
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
            Our Teamwork Approach
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            We believe in working together to achieve extraordinary results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamworkValues.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:border-green-300 border-2 border-white/20 text-center cursor-pointer group"
                style={{ willChange: 'transform' }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-all duration-200">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-green-600 group-hover:text-white transition-all duration-200" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                  {item.title}
                </h3>
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
