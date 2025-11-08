'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Retail Chain Digital Transformation',
    industry: 'Retail',
    problem: 'Legacy systems causing inventory discrepancies and poor customer experience across 50+ locations.',
    solution: 'Implemented cloud-based ERP system with real-time inventory tracking and integrated POS systems.',
    outcome: 'Increased efficiency by 40%, reduced inventory costs by 25%, and improved customer satisfaction scores by 35%.',
    metrics: [
      { value: '40%', label: 'Efficiency Increase' },
      { value: '25%', label: 'Cost Reduction' },
      { value: '35%', label: 'Customer Satisfaction' },
    ],
    image: '/case-studies/retail.jpg',
  },
  {
    id: 2,
    title: 'Healthcare Provider IT Modernization',
    industry: 'Healthcare',
    problem: 'Outdated patient management system leading to scheduling conflicts and patient data security concerns.',
    solution: 'Deployed HIPAA-compliant cloud platform with automated scheduling, patient portal, and secure data management.',
    outcome: 'Reduced appointment no-shows by 45%, improved patient engagement by 60%, and achieved 99.9% uptime.',
    metrics: [
      { value: '45%', label: 'No-Show Reduction' },
      { value: '60%', label: 'Patient Engagement' },
      { value: '99.9%', label: 'Uptime' },
    ],
    image: '/case-studies/healthcare.jpg',
  },
  {
    id: 3,
    title: 'Manufacturing Process Optimization',
    industry: 'Manufacturing',
    problem: 'Manual processes causing production delays and quality control issues.',
    solution: 'Automated production workflows with IoT sensors and real-time analytics dashboard.',
    outcome: 'Increased production output by 30%, reduced defects by 50%, and cut operational costs by 20%.',
    metrics: [
      { value: '30%', label: 'Output Increase' },
      { value: '50%', label: 'Defect Reduction' },
      { value: '20%', label: 'Cost Savings' },
    ],
    image: '/case-studies/manufacturing.jpg',
  },
]

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real results from real projects
          </p>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={isEven ? 'lg:order-1' : 'lg:order-2'}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 aspect-video flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <div className="text-6xl mb-4">
                        {study.industry === 'Retail' && '🛒'}
                        {study.industry === 'Healthcare' && '🏥'}
                        {study.industry === 'Manufacturing' && '🏭'}
                      </div>
                      <p className="text-2xl font-semibold">{study.industry}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={isEven ? 'lg:order-2' : 'lg:order-1'}
                >
                  <div className="space-y-6">
                    <div>
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <h3 className="text-3xl font-bold mt-4 mb-4 text-gray-900 dark:text-white">
                        {study.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Problem:
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Solution:
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Outcome:
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">{study.outcome}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:underline group">
                      Read More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

