'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Strategy', 'Innovation', 'Execution']
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWord]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < word.length) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, displayText.length + 1))
      }, 150)
    } else if (!isDeleting && displayText.length === word.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, displayText.length - 1))
      }, 100)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setCurrentWord((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWord, words])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Particle Background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-30"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Building Business Success in the{' '}
            <span className="bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
              Heart of Texas
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Your trusted consultancy for growth, technology, and transformation.
          </motion.p>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl font-semibold mb-12 min-h-[60px] flex items-center justify-center"
          >
            <span className="text-white">We deliver: </span>
            <span className="text-primary-400 ml-3 border-r-2 border-primary-400 pr-2 animate-pulse">
              {displayText}
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={scrollToContact}
              className="group bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all flex items-center space-x-2 shadow-2xl hover:shadow-primary-500/50 mx-auto"
            >
              <span>Let's Talk</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
            >
              <span className="text-sm mb-2">Scroll</span>
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
