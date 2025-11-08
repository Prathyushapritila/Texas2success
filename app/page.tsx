import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import DifferentiatorsSection from '@/components/DifferentiatorsSection'
import IndustriesSection from '@/components/IndustriesSection'
import TeamworkSection from '@/components/TeamworkSection'
import ClientsSection from '@/components/ClientsSection'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import { siteConfig } from '@/data/siteData'

export const metadata = {
  title: 'Home',
  description: siteConfig.description,
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <DifferentiatorsSection />
      <IndustriesSection />
      <TeamworkSection />
      <ClientsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      
      {/* Enhanced CTA Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            Get a Free Consultation Today
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-green-50 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your business with our IT solutions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-white text-green-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-green-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-110 duration-300"
          >
            <span>Free Consultation Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
