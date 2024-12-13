'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Junior Software Developer",
    company: "Hash Technologies",
    period: "February 2023 – September 2023",
    description: [
      "Optimized 10+ websites, reducing loads by 25% through asset and script improvements.",
      "Led mobile optimization efforts, increasing user engagement by 15% across various devices through testing and adjustments.",
      "Delivered 5+ feature updates and fixed 20+ issues on schedule, ensuring high code quality and efficiency.",
      "Collaborated with design teams to implement UI/UX improvements, boosting user satisfaction by 20% and improving retention rates.",
      "Participated in code reviews and team meetings, streamlining development processes and reducing bugs by 30%."
    ]
  },
  {
    title: "Junior Frontend Developer",
    company: "Pixel Street",
    period: "September 2023 – April 2024",
    description: [
      "Built 12+ mobile-first responsive pages, optimizing load times by 20% with efficient coding practices.",
      "Integrated interactive components (forms, carousels), increasing user interaction by 30% and improving usability.",
      "Ensured cross-browser compatibility and optimized mobile/tablet performance, providing a seamless user experience.",
      "Delivered features and fixes in an agile environment, meeting deadlines and adapting to changing requirements."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        {/* Desktop and Tablet View */}
        <div className="hidden sm:block relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-12 flex justify-between items-center ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}>
                <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                <p className="text-xl text-white mb-2">{exp.company}</p>
                <p className="text-white">{exp.period}</p>
              </div>

              <div className="z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
                >
                  <span className="text-white font-bold">{index + 1}</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="w-5/12"
              >
                <div className="backdrop-blur-md bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-6 border border-white/10">
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-white flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="sm:hidden space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="backdrop-blur-md bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
              <p className="text-lg text-white mb-2">{exp.company}</p>
              <p className="text-white mb-4">{exp.period}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-white flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
