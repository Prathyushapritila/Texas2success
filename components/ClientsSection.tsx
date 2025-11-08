'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { clients } from '@/data/siteData'

export default function ClientsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle Logo Watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/logo.png"
            alt="Texas 2 Success Logo Watermark"
            width={300}
            height={300}
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
        </motion.div>

        {/* Soft shapes - rounded rectangles and ovals */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.15, y: -8, rotate: 2 }}
              className={`relative flex items-center justify-center ${
                index % 3 === 0 
                  ? 'w-48 h-32 md:w-56 md:h-40 rounded-[2rem]' // Rounded rectangle
                  : index % 3 === 1
                  ? 'w-44 h-44 md:w-52 md:h-52 rounded-full' // Circle
                  : 'w-52 h-36 md:w-60 md:h-44 rounded-[3rem]' // Oval-like
              } bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100`}
            >
              <Image
                src={client.logo}
                alt={`${client.name} Logo`}
                fill
                className="object-contain filter drop-shadow-md hover:drop-shadow-xl transition-all duration-300 p-4"
                sizes="(max-width: 768px) 200px, 250px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
