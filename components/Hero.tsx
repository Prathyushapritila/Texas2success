'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-green-50 to-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo Section - Beautiful styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              {/* Logo container - no box, just clean image */}
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <Image
                  src="/logo.png"
                  alt="Texas 2 Success Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight"
          >
            Texas 2 Success
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-4 font-medium"
          >
            Comprehensive IT solutions to help you succeed
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Your trusted boutique IT Staffing consultancy & software development company
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={scrollToContact}
              className="group bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Get a Free Consultation Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services"
              className="group bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-10 py-4 rounded-lg font-semibold text-lg transition-all flex items-center space-x-2 shadow-md hover:shadow-lg"
            >
              <span>Our Services</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats or Features with Rounded Borders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-green-600 bg-white shadow-lg mb-3">
                  <div className="text-3xl md:text-4xl font-bold text-green-600">
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
