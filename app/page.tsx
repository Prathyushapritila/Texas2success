import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import DifferentiatorsSection from '@/components/DifferentiatorsSection'
import IndustriesSection from '@/components/IndustriesSection'
import TeamworkSection from '@/components/TeamworkSection'
import ClientsSection from '@/components/ClientsSection'
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
      <TestimonialsSection />
      <ContactSection />
      
      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 text-white transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get a Free Consultation Today</h2>
          <p className="text-xl md:text-2xl mb-8 text-green-50 dark:text-green-100 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our IT solutions.
          </p>
          <a
            href="#contact"
            className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 dark:hover:bg-gray-700 transition inline-block shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Free Consultation Today
          </a>
        </div>
      </section>
    </>
  )
}
