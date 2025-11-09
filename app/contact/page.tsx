'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/data/siteData'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get in touch with us. We're here to help transform your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">
                Get in Touch
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass dark:bg-gray-800/50 dark:border-gray-700"
            >
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass dark:bg-gray-800/50 dark:border-gray-700"
            >
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass dark:bg-gray-800/50 dark:border-gray-700"
            >
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.fullAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {siteConfig.contact.address}<br />
                    {siteConfig.contact.city}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass dark:bg-gray-800/50 dark:border-gray-700"
            >
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Business Hours</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden transition-colors duration-300"
        >
          <div className="aspect-w-16 aspect-h-9 h-96">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.fullAddress)}&output=embed&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
