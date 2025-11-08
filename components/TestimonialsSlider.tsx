'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, Tech Innovations Inc.',
    company: 'Tech Innovations Inc.',
    quote: 'Texas 2 Success transformed our business operations with their custom ERP solution. The team\'s expertise and dedication are unmatched. We\'ve seen incredible results in just six months.',
    photo: '/testimonials/sarah.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, Digital Solutions Group',
    company: 'Digital Solutions Group',
    quote: 'Their Salesforce implementation exceeded our expectations. We\'ve seen a 40% increase in sales productivity since working with them. Highly professional and results-driven.',
    photo: '/testimonials/michael.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Growth Co.',
    company: 'Growth Co.',
    quote: 'The digital marketing campaign they created for us resulted in a 300% increase in qualified leads. Their strategic approach and attention to detail made all the difference.',
    photo: '/testimonials/emily.jpg',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Operations Manager, Retail Excellence',
    company: 'Retail Excellence',
    quote: 'Working with Texas 2 Success was a game-changer. Their project management skills and technical expertise helped us streamline operations and reduce costs significantly.',
    photo: '/testimonials/david.jpg',
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1
    setDirection(newDirection)
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Trusted by Businesses Across Texas
          </h2>
          <p className="text-xl text-gray-600">
            See what our clients have to say
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="relative h-96">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="glass">
                  <Quote className="w-12 h-12 text-green-600" />
                  <p className="text-xl text-gray-700">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-100">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-green-600 w-8'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

