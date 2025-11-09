'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { clients } from '@/data/siteData'

export default function ClientsSection() {
  // Duplicate clients array for seamless infinite scroll (need enough duplicates for smooth loop)
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          <div className="animate-scroll flex items-center">
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 group"
                whileHover={{ scale: 1.15, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Fixed size container for consistent logo appearance */}
                <div className="relative w-48 h-32 md:w-56 md:h-40 flex items-center justify-center cursor-pointer">
                  <Image
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    fill
                    className="object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl group-hover:brightness-110 transition-all duration-200 p-4"
                    sizes="(max-width: 768px) 200px, 250px"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
