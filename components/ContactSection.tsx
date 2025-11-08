'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactModal from './ContactModal'
import { siteConfig } from '@/data/siteData'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="contact" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              Let's Build Your Success Story
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Drop us a message and our team will respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Form Button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Get in Touch</h3>
                <p className="text-gray-600 mb-6">
                  Ready to transform your business? Contact us today for a free consultation.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Open Contact Form</span>
                </button>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-6"
            >
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Phone</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 hover:text-green-600 transition-colors text-base md:text-lg"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-gray-600 hover:text-green-600 transition-colors text-base md:text-lg break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Address</h3>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.fullAddress)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors text-base md:text-lg"
                    >
                      {siteConfig.contact.address}<br />
                      {siteConfig.contact.city}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Business Hours</h3>
                    <p className="text-gray-600 text-base md:text-lg">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9 h-64 md:h-96">
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
