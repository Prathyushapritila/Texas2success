import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import DifferentiatorsSection from '@/components/DifferentiatorsSection'
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
      <TestimonialsSection />
      <ContactSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get a Free Consultation Today</h2>
          <p className="text-xl mb-8 text-green-50 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our IT solutions.
          </p>
          <a
            href="#contact"
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition inline-block"
          >
            Free Consultation Today
          </a>
        </div>
      </section>
    </>
  )
}
