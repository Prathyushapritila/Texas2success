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
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Our Teamwork Approach
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
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

