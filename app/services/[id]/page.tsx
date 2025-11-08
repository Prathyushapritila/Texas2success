'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/siteData'
import { Database, Zap, Smartphone, TrendingUp, Check, ArrowLeft } from 'lucide-react'

const iconMap = {
  Database,
  Zap,
  Smartphone,
  TrendingUp,
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const service = services.find(s => s.id === params.id)

  if (!service) {
    router.push('/services')
    return null
  }

  const Icon = iconMap[service.icon as keyof typeof iconMap] || Database

  return (
    <div className="pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          {/* Background Image using regular img for external URLs */}
          <img
            src={service.backgroundImage}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          {/* Green gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 via-green-700/85 to-green-800/90 z-10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 flex justify-start"
            >
              <Link
                href="/services"
                className="inline-flex items-center text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Services
              </Link>
            </motion.div>

            {/* Service Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto border border-white/30 shadow-lg">
                <Icon className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
            >
              {service.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-md"
            >
              {service.shortDescription}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <Check className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-12 rounded-2xl text-white max-w-3xl mx-auto shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-green-50">
                Contact us today for a free consultation and learn how we can help transform your business.
              </p>
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition inline-block shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
