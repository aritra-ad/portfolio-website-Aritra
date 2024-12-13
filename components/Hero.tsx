'use client'

import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  // Define the path animation states here
  const pathVariants = {
    initial: {
      d: "M0 128 C 320 246.78665, 640 146.78665, 960 128 C 1280 103.85602, 1440 174.85864, 1440 128 V 320 H 0 Z"
    },
    moveUp: {
      d: "M0 160 C 320 290, 640 160, 960 160 C 1280 160, 1440 230, 1440 160 V 320 H 0 Z"
    },
    moveDown: {
      d: "M0 128 C 320 246.78665, 640 146.78665, 960 128 C 1280 103.85602, 1440 174.85864, 1440 128 V 320 H 0 Z"
    }
  }

  return (
    <section id="home" className="h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* SVG Wave with Smooth Oscillation */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        animate={["moveUp", "moveDown", "moveUp"]}  // Create the animation sequence here
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
      >
        {/* Define gradient */}
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c6ff" /> {/* Blue */}
            <stop offset="100%" stopColor="#0072ff" /> {/* Purple */}
          </linearGradient>
        </defs>

        {/* Animated Wave Path */}
        <motion.path
          fill="url(#waveGradient)"
          variants={pathVariants}  // Attach the path variants here
          initial="initial"
          animate="moveUp"  // Starts with the "moveUp" state
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse", // Create oscillating effect
          }}
        />
      </motion.svg>

      <div className="container mx-auto text-center text-white relative z-20">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="text-6xl lg:text-7xl font-bold"
        >
          Hello, I&apos;m Aritra
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl lg:text-3xl mt-4"
        >
          A passionate <span className="font-semibold">Front-End Developer</span>
        </motion.p>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 text-2xl lg:text-3xl"
        >
          <Typewriter
            words={['React', 'Next.js', 'Tailwind CSS', 'UI/UX']}
            loop={-1} // Loop indefinitely
            cursor
            cursorColor="#F471B5"
            onDelay={() => 100} // Optional: Delay before typing starts
            deleteSpeed={50} // Optional: Speed of deleting the text
          />
        </motion.div>
      </div>
    </section>
  )
}
