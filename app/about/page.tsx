'use client'

import { motion } from 'framer-motion'
import { companyValues, leadership } from '@/data/siteData'
import { siteConfig } from '@/data/siteData'
import { Target, Users, Award, UserCheck } from 'lucide-react'

const valueIcons = {
  Innovation: Target,
  Excellence: Award,
  Partnership: UserCheck,
  Integrity: Users,
}

export default function About() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            About Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {siteConfig.description}
          </p>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass dark:bg-slate-800/50 p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Story
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We are privileged to work with hundreds of future-thinking businesses, including many of the world's top hardware, software, and brands. Our comprehensive approach combines cutting-edge technology with proven methodologies to deliver exceptional results.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                As a boutique IT Staffing consultancy & software development company, we pride ourselves on delivering personalized solutions that drive real business value. Our team of experts brings decades of combined experience in enterprise software, cloud infrastructure, and digital transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Leadership */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
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
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center"
            >
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-400">👤</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                {leader.name}
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium mb-4">
                {leader.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
