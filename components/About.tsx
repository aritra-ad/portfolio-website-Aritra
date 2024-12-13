'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Zap } from 'lucide-react'

const skills = [
  { icon: Code, title: "Frontend Development", description: "Expertise in React, Next.js, and modern JavaScript" },
  { icon: Palette, title: "UI/UX Development", description: "Turning design concepts into interactive, user-friendly web pages" },
  { icon: Zap, title: "Performance Optimization", description: "Improving load times and overall site performance" },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-secondary mb-8 text-center"
          >
            Frontend Developer focused on creating high-performance, user-centric web applications. 
            Experienced in optimizing user interfaces and improving website functionality using React.js, 
            Next.js, and Tailwind CSS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.10 }}
                transition={{ duration: 0.2 }} // Faster transition for scale
                className="relative rounded-2xl p-6 border border-white/10 bg-gray-700 backdrop-blur-md hover:scale-105 hover:shadow-lg hover:cursor-pointer transition-all duration-200"
              >
                {/* Solid Dark Background (No Gradient) */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 text-primary mb-4 mx-auto transition-transform duration-200" // Faster transition for scale
                >
                  <skill.icon className="w-full h-full" />
                </motion.div>
                <h3 className="text-xl font-semibold text-text-primary mb-2 relative z-10">{skill.title}</h3>
                <p className="text-text-secondary relative z-10">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
