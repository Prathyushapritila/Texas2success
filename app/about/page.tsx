'use client'

import { motion } from 'framer-motion'
import { companyValues, leadership } from '@/data/siteData'
import { siteConfig } from '@/data/siteData'
import { Target, Users, Award, Hand } from 'lucide-react'

const valueIcons = {
  Innovation: Target,
  Excellence: Award,
  Partnership: Hand,
  Integrity: Users,
}

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white break-words px-4">
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 break-words px-4">
              {siteConfig.description}
            </p>
          </motion.div>

          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg mb-16 transition-colors duration-300"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white break-words">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 break-words">
                We are privileged to work with hundreds of future-thinking businesses, including many of the world's top hardware, software, and brands. Our comprehensive approach combines cutting-edge technology with proven methodologies to deliver exceptional results.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed break-words">
                As a boutique IT Staffing consultancy & software development company, we pride ourselves on delivering personalized solutions that drive real business value. Our team of experts brings decades of combined experience in enterprise software, cloud infrastructure, and digital transformation.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white break-words px-4">
              Our Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 break-words px-4">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {companyValues.map((value, index) => {
              const Icon = valueIcons[value.title as keyof typeof valueIcons] || Target
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900 dark:text-white break-words">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 break-words leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white break-words px-4">
              Leadership Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 break-words px-4">
              Meet the experts driving our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center border border-gray-100 dark:border-gray-700"
              >
                <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-gray-400 dark:text-gray-500">👤</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900 dark:text-white break-words">
                  {leader.name}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-4 break-words">
                  {leader.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-words leading-relaxed">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
