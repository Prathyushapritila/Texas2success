'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Briefcase, 
  Laptop, 
  FolderKanban, 
  Users, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    description: 'Strategic guidance to help you make informed decisions and drive growth.',
    icon: Briefcase,
  },
  {
    id: 'technology-solutions',
    title: 'Technology Solutions',
    description: 'Custom software, cloud infrastructure, and digital transformation services.',
    icon: Laptop,
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Expert project oversight to ensure timely delivery and quality results.',
    icon: FolderKanban,
  },
  {
    id: 'it-staffing',
    title: 'IT Staffing',
    description: 'Connect with top-tier talent to build your dream technology team.',
    icon: Users,
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'End-to-end modernization of your business processes.',
    icon: Sparkles,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions to drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="glass dark:bg-slate-900/50 p-8 rounded-2xl h-full border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:underline group-hover:translate-x-2 transition-transform"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
