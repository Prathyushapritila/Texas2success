'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-green-700">
            Texas 2 Success
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition">
              About Us
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/services/erp-crm" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                  Custom ERP & CRM Software
                </Link>
                <Link href="/services/salesforce" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                  Salesforce Development
                </Link>
                <Link href="/services/websites-apps" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                  Websites & Mobile Apps
                </Link>
                <Link href="/services/seo-marketing" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                  SEO & Digital Marketing
                </Link>
              </div>
            </div>
            <Link href="/careers" className="text-gray-700 hover:text-green-600 transition">
              Careers
            </Link>
            <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded">
              About Us
            </Link>
            <Link href="/services/erp-crm" className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded">
              Custom ERP & CRM Software
            </Link>
            <Link href="/services/salesforce" className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded">
              Salesforce Development
            </Link>
            <Link href="/services/websites-apps" className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded">
              Websites & Mobile Apps
            </Link>
            <Link href="/services/seo-marketing" className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded">
              SEO & Digital Marketing
            </Link>
            <Link href="/careers" className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded">
              Careers
            </Link>
            <Link href="/contact" className="block px-4 py-2 bg-green-600 text-white rounded text-center">
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

