'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { caseStudies } from '@/data/siteData'
import { ArrowRight, TrendingUp } from 'lucide-react'

export default function PortfolioSection() {
  const featuredStudies = caseStudies.slice(0, 3)

  return (
    <section id="portfolio" className="relative py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Subtle Logo Watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/logo.png"
            alt="Texas 2 Success Logo Watermark"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Portfolio & Case Studies
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Real results from real projects. See how we've helped businesses transform through technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {featuredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-green-200 h-full flex flex-col">
                {/* Image/Icon Section */}
                <div className="h-48 bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <TrendingUp className="w-16 h-16 text-white/80 relative z-10" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
                      {study.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{study.client}</p>
                  
                  <div className="mb-6 flex-grow">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-200">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-green-600">
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

