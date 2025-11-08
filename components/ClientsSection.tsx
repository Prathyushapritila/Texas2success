'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { clients } from '@/data/siteData'

export default function ClientsSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
        </motion.div>

        {/* Simple, prominent client logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="relative w-48 h-32 md:w-56 md:h-40 flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={`${client.name} Logo`}
                fill
                className="object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                sizes="(max-width: 768px) 200px, 250px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
