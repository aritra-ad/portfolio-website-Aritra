'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Landing Page with React, Bootstrap, and React Hooks",
    tools: "React.js, Bootstrap, React Hooks",
    description: "A dynamic landing page showcasing responsive design with React and Bootstrap.",
    link: "https://aritra-ad.github.io/web-project-2/",
  },
  {
    title: "Website with React, Tailwind, React Router, and React Hooks",
    tools: "React.js, Tailwind CSS, React Router, React Hooks",
    description: "A music-themed app with dynamic routing and state management using React Router.",
    link: "https://music-fs-jc87.vercel.app/",
  },
  {
    title: "Landing Page with HTML, CSS, Bootstrap, JavaScript",
    tools: "HTML, CSS, Bootstrap, JavaScript",
    description: "A classic landing page with responsive design elements.",
    link: "https://aritra-ad.github.io/web-project-1/",
  },
  {
    title: "Website with React, Tailwind and React Hooks",
    tools: "React.js, Tailwind CSS, React Hooks",
    description: "A health-focused website with fast server-side rendering using Next.js.",
    link: "https://doctor-pro.vercel.app/",
  },
  {
    title: "Landing Page with React, Tailwind, and React Hooks",
    tools: "React.js, Tailwind CSS, React Hooks",
    description: "An educational web app with a modern UI and interactive features.",
    link: "https://edu-web-nine.vercel.app/",
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

