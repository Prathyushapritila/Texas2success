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
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/services"
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </motion.div>

        {/* Header with Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-24 h-24 bg-green-100 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Icon className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 text-center lg:text-left">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
                {service.shortDescription}
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                <Icon className="w-32 h-32 text-green-600 opacity-30" />
              </div>
              {/* Uncomment when you have service images:
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              */}
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
  )
}
