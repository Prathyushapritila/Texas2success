'use client'

import { motion } from 'framer-motion'
import { Target, Zap, TrendingUp } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              About Texas 2 Success
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Mission Statement */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                At Texas 2 Success, we are dedicated to empowering businesses across Texas and beyond 
                with cutting-edge technology solutions and strategic consulting. Our mission is to be 
                the catalyst for your digital transformation, helping you achieve sustainable growth 
                and competitive advantage in today's rapidly evolving marketplace.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We combine deep industry expertise with innovative thinking to deliver results that 
                matter. Every project we undertake is driven by our commitment to excellence, 
                integrity, and your success.
              </p>
            </motion.div>

            {/* Right: Company Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Founded with a vision to bridge the gap between business needs and technological 
                innovation, Texas 2 Success has grown from a boutique consultancy into a trusted 
                partner for businesses of all sizes. Our boutique approach allows us to provide 
                personalized attention and customized solutions that larger firms simply cannot match.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We pride ourselves on our innovation focus and results-driven mindset. Every 
                solution we deliver is meticulously crafted to address your unique challenges 
                and drive measurable outcomes. From startups to enterprise-level organizations, 
                we've helped hundreds of businesses transform their operations and achieve 
                unprecedented growth.
              </p>
            </motion.div>
          </div>

          {/* Team Photo Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 p-12 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">Meet Our Team</h3>
              <p className="text-primary-100 mb-8">
                A diverse group of experts passionate about driving your success
              </p>
              {/* Placeholder for team photo */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  >
                    <span className="text-4xl">👤</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Target, title: 'Boutique Approach', desc: 'Personalized service tailored to your needs' },
              { icon: Zap, title: 'Innovation Focus', desc: 'Cutting-edge solutions for modern challenges' },
              { icon: TrendingUp, title: 'Results-Driven', desc: 'Measurable outcomes that drive growth' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gray-50 dark:bg-slate-800"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

