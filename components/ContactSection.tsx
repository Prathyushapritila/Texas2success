'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactModal from './ContactModal'
import { siteConfig } from '@/data/siteData'
import { Phone, Mail, MapPin, MessageCircle, Clock, Hand } from 'lucide-react'

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

          {/* Two-Column Layout with Equal Width */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Left Column - Get in Touch */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col h-full"
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-lg h-full flex flex-col">
                {/* Representative Image/Icon at Top */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg">
                    <Hand className="w-12 h-12 md:w-16 md:h-16 text-green-600" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 text-center">Get in Touch</h3>
                <p className="text-gray-600 mb-8 text-center flex-grow">
                  Ready to transform your business? Contact us today for a free consultation.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 mt-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Open Contact Form</span>
                </button>
              </div>
            </motion.div>

            {/* Right Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col h-full"
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-lg h-full flex flex-col space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Phone</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 hover:text-green-600 transition-colors text-base md:text-lg"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-gray-600 hover:text-green-600 transition-colors text-base md:text-lg break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-grow">
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

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-grow">
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

          {/* Completely Restyled Google Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 max-w-6xl mx-auto"
          >
            {/* Map Title */}
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600">We'd love to meet you in person</p>
            </div>

            {/* Custom Map Container */}
            <div className="relative bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-2xl border-4 border-green-200 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
              {/* "Find Us Here" Overlay Badge */}
              <div className="absolute top-6 right-6 z-20 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full shadow-xl flex items-center space-x-2 backdrop-blur-sm border-2 border-white/30">
                <MapPin className="w-5 h-5" />
                <span className="font-bold text-sm md:text-base">Find Us Here</span>
              </div>

              {/* Decorative Top Border */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 z-10"></div>

              {/* Map Container with Padding */}
              <div className="p-4 md:p-6">
                <div className="h-96 md:h-[500px] lg:h-[600px] relative rounded-2xl overflow-hidden bg-gray-100 border-2 border-green-100">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.1234567890!2d-96.7890123!3d33.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDA3JzI0LjQiTiA5NsKwNDcjMjAuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=${encodeURIComponent(siteConfig.contact.fullAddress)}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-xl"
                    title="Texas 2 Success Location"
                  />
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-green-600/20 to-transparent pointer-events-none rounded-br-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-600/20 to-transparent pointer-events-none rounded-tl-3xl"></div>
                </div>
              </div>

              {/* Address Display at Bottom */}
              <div className="bg-white/80 backdrop-blur-sm px-6 py-4 border-t-2 border-green-200">
                <div className="flex items-center justify-center space-x-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">{siteConfig.contact.fullAddress}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
