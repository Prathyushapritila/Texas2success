'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactModal from './ContactModal'
import { siteConfig } from '@/data/siteData'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="contact" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Let's Build Your Success Story
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We'd love to hear from you. Drop us a message and our team will respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2 mb-6"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Open Contact Form</span>
                </button>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Click the button above to open the contact form, or use the contact information below.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="glass dark:bg-slate-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass dark:bg-slate-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass dark:bg-slate-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.fullAddress)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {siteConfig.contact.address}<br />
                      {siteConfig.contact.city}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 pt-4">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-xl">in</span>
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <span className="text-xl">𝕏</span>
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-xl">f</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 rounded-2xl overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.1234567890!2d-96.7890123!3d33.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDA3JzI0LjQiTiA5NsKwNDcjMjAuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=${encodeURIComponent(siteConfig.contact.fullAddress)}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Texas 2 Success Location"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

