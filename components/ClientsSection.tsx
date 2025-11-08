'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { name: 'Lumen Med', logo: '/clients/lumen-med.png' },
  { name: 'Illinois Valley', logo: '/clients/illinois-valley.png' },
  { name: 'Tech Innovations', logo: '/clients/tech-innovations.png' },
  { name: 'Digital Solutions', logo: '/clients/digital-solutions.png' },
  { name: 'Global Manufacturing', logo: '/clients/global-manufacturing.png' },
  { name: 'Retail Excellence', logo: '/clients/retail-excellence.png' },
]

export default function ClientsSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Trusted by Leading Companies
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with innovative businesses across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex items-center justify-center h-32 md:h-40"
            >
              <div className="relative w-full h-full">
                {/* Client Logo - Using text placeholder for now, replace with actual logos */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 font-semibold text-sm md:text-base text-center">
                    {client.name}
                  </span>
                </div>
                {/* Uncomment when you have client logos:
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain p-4 grayscale hover:grayscale-0 transition-all"
                />
                */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-600 text-sm md:text-base">
            And many more satisfied clients across Texas and beyond
          </p>
        </motion.div>
      </div>
    </section>
  )
}

