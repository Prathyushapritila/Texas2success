import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSlider from '@/components/TestimonialsSlider'
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
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSlider />
      <ContactSection />
    </>
  )
}
