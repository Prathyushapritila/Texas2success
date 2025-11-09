'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/siteData'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-green-600 dark:bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            Trusted by businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl hover:border-green-300 dark:hover:border-green-600 cursor-pointer group transition-colors duration-300"
              style={{ willChange: 'transform' }}
            >
              <Quote className="w-10 h-10 text-green-600 mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-sm md:text-base leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-semibold text-gray-900 dark:text-white text-base md:text-lg">
                  {testimonial.name}
                </p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
