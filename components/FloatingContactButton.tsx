'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone, Mail } from 'lucide-react'
import ContactModal from './ContactModal'
import { siteConfig } from '@/data/siteData'

export default function FloatingContactButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
    setIsExpanded(false)
  }

  return (
    <>
      <div className="fixed bottom-8 right-8 z-40">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="mb-4 bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-4 border border-gray-200 dark:border-gray-700 min-w-[200px]"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Get in Touch</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setIsModalOpen(true)
                    setIsExpanded(false)
                  }}
                  className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg text-center hover:bg-primary-700 transition-colors text-sm font-medium flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact Form</span>
                </button>
                <button
                  onClick={scrollToContact}
                  className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Section</span>
                </button>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="block w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all"
          aria-label="Contact us"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

