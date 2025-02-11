'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Landing Pages (HTML, CSS, Bootstrap)",
    tools: "HTML, CSS, Bootstrap",
    description: "Created responsive landing pages, improving load times by 15% through asset optimization.",
    link: "https://aritra-ad.github.io/web-project-1/",
  },
  {
    title: "Landing Pages (React.js, Bootstrap)",
    tools: "React.js, Bootstrap, React Hooks",
    description: "Designed and implemented responsive landing pages, boosting conversion rates by 40% for marketing campaigns.",
    link: "https://aritra-ad.github.io/web-project-2/",
  },
  {
    title: "Landing Pages (React.js, Tailwind)",
    tools: "React.js, Tailwind CSS, React Hooks",
    description: "Transformed Figma designs into responsive pages, reducing load times by 18% using Tailwind CSS and React Hooks.",
    link: "https://aritra-ad.github.io/web-project-3/",
  },
  {
    title: "Landing Pages (Next.js, Tailwind)",
    tools: "React.js, Next.js, Tailwind CSS",
    description: "Built SEO-friendly landing pages, increasing organic traffic by 20% post-launch.",
    link: "https://web-project-4.vercel.app/",
  },
  {
    title: " Website Whole (Next.js, Tailwind)",
    tools: "React.js, React-Router, Tailwind CSS",
    description: "Built SEO-friendly Website",
    link: "https://music-f-six.vercel.app/",
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-blue-800 via-indigo-800 to-violet-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          Featured <span className="text-indigo-300">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-gray-300 mb-4">Tools: {project.tools}</p>
              <div className="flex items-center text-gray-400">
                <ExternalLink size={20} className="mr-2" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

