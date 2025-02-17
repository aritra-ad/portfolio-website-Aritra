'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  // Languages
  "HTML5", "CSS3", "JavaScript (ES6+)",
  
  // Frontend
  "React.js", "Next.js", "Redux", "Axios", "Framer Motion",
  
  // Styling
  "Tailwind CSS", "Bootstrap",
  
  // Performance
  "Lazy Loading", "Lighthouse", "PageSpeed Insights",
  
  // Build Tools
  "Vite", "Babel", "ESLint", "Prettier",
  
  // Version Control
  "Git", "GitHub",
  
  // Deployment
  "Vercel"
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="skills" className="py-20 bg-gray-700">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }} // Scales up on hover
              className="backdrop-blur-md bg-background/30 rounded-xl p-4 text-center border border-white/10 hover:bg-gradient-to-r from-primary/30 to-secondary/50 transition-all duration-200 ease-in-out"
            >
              <span className="text-text-primary">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
