'use client'

import { motion } from 'framer-motion'
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
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            What We Do
          </h2>
          <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
            Product Development for Better Business
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We are privileged to work with hundreds of future-thinking businesses, including many of the world's top hardware, software, and brands. Our comprehensive approach combines cutting-edge technology with proven methodologies to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Code
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
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

