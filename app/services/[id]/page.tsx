'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/data/siteData'
import { Database, Zap, Smartphone, TrendingUp, Check, ArrowLeft } from 'lucide-react'

const iconMap = {
  Database,
  Zap,
  Smartphone,
  TrendingUp,
}

// Enhanced overlay function with stronger dark overlay for better text readability
const getOverlayStyle = (serviceId: string) => {
  switch (serviceId) {
    case 'erp-crm':
      // Dark overlay for ERP/CRM - business analytics theme
      return {
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 74, 173, 0.7) 50%, rgba(0, 0, 0, 0.85) 100%)'
      }
    case 'salesforce':
      // Dark overlay for Salesforce - cloud CRM theme
      return {
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 74, 173, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%)'
      }
    case 'websites-apps':
      // Dark overlay for Websites & Apps - development theme
      return {
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 74, 173, 0.5) 50%, rgba(0, 0, 0, 0.8) 100%)'
      }
    case 'seo-marketing':
      // Dark overlay for SEO & Marketing - analytics theme
      return {
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(255, 122, 0, 0.3) 50%, rgba(0, 0, 0, 0.85) 100%)'
      }
    default:
      return {
        background: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85))'
      }
  }
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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Full-Screen Hero Section with Background Image */}
      <section 
        id={`service-${service.id}`}
        className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center items-center overflow-hidden"
        style={{
          backgroundImage: service.backgroundImage ? `url(${service.backgroundImage})` : 'linear-gradient(to bottom, #1f2937, #111827)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Enhanced Dark Overlay for better text readability - darker in dark mode */}
        <div 
          className="absolute inset-0 z-10 dark:bg-black/60"
          style={getOverlayStyle(service.id)}
        ></div>
        {/* Additional subtle gradient overlay for extra contrast - darker in dark mode */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/40 to-black/60 dark:via-black/50 dark:to-black/70"></div>

        {/* Content Container with proper spacing and centering */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-16 md:py-20 flex flex-col items-center justify-center">
          <div className="max-w-5xl mx-auto text-center w-full">
            {/* Back Button - Positioned at top */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 md:mb-12 flex justify-start w-full"
            >
              <Link
                href="/services"
                className="inline-flex items-center text-white hover:text-white dark:text-white dark:hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-white/20 hover:bg-white/20 dark:bg-white/10 dark:border-white/20"
              >
                <ArrowLeft className="w-5 h-5 mr-2 text-white dark:text-white" />
                <span className="text-sm md:text-base text-white dark:text-white">Back to Services</span>
              </Link>
            </motion.div>

            {/* Service Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6 md:mb-8 flex justify-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 dark:bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 dark:border-white/30 shadow-lg">
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-white dark:text-white" />
              </div>
            </motion.div>

            {/* Title - Premium metallic gradient effect (white and grey) with white fallback */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 drop-shadow-2xl leading-tight px-4 break-words text-white dark:text-white"
              style={{ 
                wordBreak: 'break-word', 
                overflowWrap: 'break-word',
                hyphens: 'auto',
                background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 25%, #d1d5db 50%, #e5e7eb 75%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6))',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                color: 'white', // Fallback color for dark mode
              }}
            >
              {service.title}
            </motion.h1>

            {/* Description - White text with proper visibility */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-lg leading-relaxed px-4 break-words text-white dark:text-white"
              style={{ 
                wordBreak: 'break-word', 
                overflowWrap: 'break-word',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              {service.shortDescription}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section with Proper Spacing */}
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16 md:mb-20"
          >
            <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 break-words text-gray-900 dark:text-white">Overview</h2>
              <p className="text-lg md:text-xl leading-relaxed break-words text-gray-700 dark:text-gray-300">
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
            className="max-w-4xl mx-auto mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center break-words text-gray-900 dark:text-white">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                >
                  <Check className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg break-words text-gray-700 dark:text-gray-300">{feature}</span>
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
            <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 p-12 md:p-16 rounded-2xl max-w-3xl mx-auto shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words text-white dark:text-white">Ready to Get Started?</h2>
              <p className="text-xl md:text-2xl mb-8 break-words text-green-50 dark:text-green-100">
                Contact us today for a free consultation and learn how we can help transform your business.
              </p>
              <Link
                href="/contact"
                className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 dark:hover:bg-gray-700 transition inline-block shadow-lg hover:shadow-xl transform hover:scale-105"
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
