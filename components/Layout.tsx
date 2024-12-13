'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="min-h-screen scroll-gradient">
      <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 z-[-1]"
        style={{ backgroundPosition: `50% ${backgroundY}` }}
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50"
        style={{ scaleX }}
      />
      <main className="pt-16">{children}</main> 
    </div>
  )
}
