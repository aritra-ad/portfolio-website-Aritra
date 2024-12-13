'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LinkedIn Link */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.linkedin.com/in/aritra-adhikary-69937a1b9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 hover:bg-primary transition-colors"
            >
              <Linkedin size={24} className="text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                <p className="text-gray-400">Connect with me</p>
              </div>
            </motion.a>

            {/* Email Link */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:aritraadhikary@gmail.com"
              className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 hover:bg-primary transition-colors"
            >
              <Mail size={24} className="text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-400">Send me a message</p>
              </div>
            </motion.a>

            {/* GitHub Link */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://github.com/aritra-ad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 hover:bg-primary transition-colors"
            >
              <Github size={24} className="text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-white">GitHub</h3>
                <p className="text-gray-400">Check my repos</p>
              </div>
            </motion.a>

            {/* Phone Link */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+918777293184"
              className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 hover:bg-primary transition-colors"
            >
              <Phone size={24} className="text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-400">+91 8777293184</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
