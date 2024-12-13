'use client'


import { motion } from 'framer-motion'  
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Menu, X } from 'lucide-react'


const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    className="relative text-text-secondary hover:text-text-primary cursor-pointer transition-colors group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
  </ScrollLink>
)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="backdrop-blur-md bg-background/30 border-b border-white/10 px-6 py-4">
        <div className="container mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center space-x-8">
            <NavItem to="home">Home</NavItem>
            <NavItem to="about">About</NavItem>
            <NavItem to="education">Education</NavItem>
            <NavItem to="skills">Skills</NavItem>
            <NavItem to="experience">Experience</NavItem>
            <NavItem to="projects">Projects</NavItem>
            <NavItem to="contact">Contact</NavItem>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex justify-end">
            <button 
              className="text-text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed inset-y-0 right-0 w-64 backdrop-blur-md bg-background/80 p-6 md:hidden`}
      >
        <button 
          className="absolute top-4 right-4 text-text-primary"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
        <div className="flex flex-col space-y-6 mt-16">
          <NavItem to="home">Home</NavItem>
          <NavItem to="about">About</NavItem>
          <NavItem to="education">Education</NavItem>
          <NavItem to="skills">Skills</NavItem>
          <NavItem to="experience">Experience</NavItem>
          <NavItem to="projects">Projects</NavItem>
          <NavItem to="contact">Contact</NavItem>
        </div>
      </motion.div>
    </header>
  )
}
