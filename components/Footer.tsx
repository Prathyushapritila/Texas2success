'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/data/siteData'
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Highlighted */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className={`inline-flex items-center transition-all duration-300 ${
                        active
                          ? 'text-green-400 dark:text-green-500 font-semibold text-lg'
                          : 'text-gray-400 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-500 hover:translate-x-2'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full mr-2 transition-colors duration-300 ${
                        active 
                          ? 'bg-green-400 dark:bg-green-500' 
                          : 'bg-gray-500 dark:bg-gray-600'
                      }`}></span>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-400 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-500 hover:translate-x-2 transition-all duration-300 inline-flex items-center"
                >
                  <span className={`w-2 h-2 rounded-full mr-2 transition-colors duration-300 ${
                    isActive('/contact')
                      ? 'bg-green-400 dark:bg-green-500'
                      : 'bg-gray-500 dark:bg-gray-600'
                  }`}></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/erp-crm" className="text-gray-400 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-500 transition-colors inline-flex items-center hover:translate-x-1">
                  <span className="mr-2">→</span>
                  ERP & CRM Software
                </Link>
              </li>
              <li>
                <Link href="/services/salesforce" className="text-gray-400 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-500 transition-colors inline-flex items-center hover:translate-x-1">
                  <span className="mr-2">→</span>
                  Salesforce Development
                </Link>
              </li>
              <li>
                <Link href="/services/websites-apps" className="text-gray-400 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-500 transition-colors inline-flex items-center hover:translate-x-1">
                  <span className="mr-2">→</span>
                  Websites & Apps
                </Link>
              </li>
              <li>
                <Link href="/services/seo-marketing" className="text-gray-400 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-500 transition-colors inline-flex items-center hover:translate-x-1">
                  <span className="mr-2">→</span>
                  SEO & Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-green-400 dark:text-green-500 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-gray-400 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-500 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-green-400 dark:text-green-500 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-500 transition-colors break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-green-400 dark:text-green-500 flex-shrink-0" />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-500 transition-colors"
                >
                  {siteConfig.contact.address}<br />
                  {siteConfig.contact.city}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; {currentYear} Texas To Success Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
