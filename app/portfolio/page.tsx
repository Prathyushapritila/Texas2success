'use client'

import { motion } from 'framer-motion'
import { caseStudies } from '@/data/siteData'
import { TrendingUp, Users, Award } from 'lucide-react'

export default function Portfolio() {
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
            Portfolio & Case Studies
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 break-words px-4">
            Real results from real projects. See how we've helped businesses transform through technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass dark:bg-gray-800/50 dark:border-gray-700">
                {/* Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 dark:from-green-700 dark:to-green-800 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-semibold break-words px-4">{study.category}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400 break-words">
                      {study.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 break-words">
                      {study.client}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white break-words">
                    {study.title}
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 break-words">Challenge:</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 break-words leading-relaxed">{study.challenge}</p>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 break-words">Solution:</h4>
                    <p className="text-gray-600 dark:text-gray-400 break-words leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 break-words">
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 break-words">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-green-600 dark:text-green-400 break-words">100+</div>
            <div className="text-gray-600 dark:text-gray-400 break-words">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-green-600 dark:text-green-400 break-words">50+</div>
            <div className="text-gray-600 dark:text-gray-400 break-words">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-green-600 dark:text-green-400 break-words">15+</div>
            <div className="text-gray-600 dark:text-gray-400 break-words">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
