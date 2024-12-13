'use client'

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-r from-blue-800 via-indigo-800 to-violet-800 relative overflow-hidden"
      style={{ position: 'relative', zIndex: 10 }} // Explicit relative positioning for section
    >
      {/* Circles Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="circle bg-blue-400"></div>
        <div className="circle bg-indigo-500"></div>
        <div className="circle bg-violet-600"></div>
        <div className="circle bg-teal-500"></div>
        <div className="circle bg-red-400"></div> {/* New circle */}
        <div className="circle bg-yellow-400"></div> {/* New circle */}
        <div className="circle bg-green-400"></div> {/* New circle */}
        <div className="circle bg-pink-400"></div> {/* New circle */}
        <div className="circle bg-purple-400"></div> {/* New circle */}
      </div>

      <div className="container mx-auto px-4 z-20 relative">
        {/* Section Content */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          My <span className="gradient-text ">Education</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="backdrop-blur-md bg-background/30 rounded-2xl p-8 border border-white/10 hover:scale-105 hover:shadow-lg transition-all duration-200">
            <h3 className="text-2xl font-semibold mb-4 text-text-primary">
              Dr. Sudhir Chandra Sur Institute of Technology
            </h3>
            <p className="text-text-secondary mb-2">Kolkata, India</p>
            <p className="text-text-secondary mb-2">B.Tech in Computer Science and Engineering</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-slate-200 font-semibold">CGPA: 8.71</p>
              <p className="text-text-secondary">August 2018 – April 2022</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Styles for Circles Animation */}
      <style jsx>{`
        .circle {
          position: absolute;
          border-radius: 50%;
          animation: moveCircle 10s infinite linear;
        }

        /* Define the new animation */
        @keyframes moveCircle {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          20% {
            transform: translate(200px, 100px);
            opacity: 0.7;
          }
          40% {
            transform: translate(-200px, -150px);
            opacity: 0.5;
          }
          60% {
            transform: translate(150px, -200px);
            opacity: 0.7;
          }
          80% {
            transform: translate(-100px, 150px);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0);
            opacity: 1;
          }
        }

        /* Apply specific size and initial positions to circles */
        .circle:nth-child(1) {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 10%;
          animation-duration: 8s;
          animation-delay: 0s;
          z-index: 0;
        }

        .circle:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 30%;
          left: 40%;
          animation-duration: 12s;
          animation-delay: 2s;
          z-index: 0;
        }

        .circle:nth-child(3) {
          width: 120px;
          height: 120px;
          top: 50%;
          left: 70%;
          animation-duration: 14s;
          animation-delay: 4s;
          z-index: 0;
        }

        .circle:nth-child(4) {
          width: 200px;
          height: 200px;
          top: 20%;
          left: 80%;
          animation-duration: 16s;
          animation-delay: 6s;
          z-index: 0;
        }

        /* New Circles - Modified for continuous movement in random directions */
        .circle:nth-child(5) {
          width: 180px;
          height: 180px;
          top: 70%;
          left: 30%;
          animation-duration: 10s;
          animation-delay: 8s;
          z-index: 0;
        }

        .circle:nth-child(6) {
          width: 140px;
          height: 140px;
          top: 40%;
          left: 10%;
          animation-duration: 13s;
          animation-delay: 5s;
          z-index: 0;
        }

        .circle:nth-child(7) {
          width: 110px;
          height: 110px;
          top: 60%;
          left: 60%;
          animation-duration: 12s;
          animation-delay: 7s;
          z-index: 0;
        }

        .circle:nth-child(8) {
          width: 160px;
          height: 160px;
          top: 80%;
          left: 50%;
          animation-duration: 9s;
          animation-delay: 9s;
          z-index: 0;
        }

        .circle:nth-child(9) {
          width: 120px;
          height: 120px;
          top: 15%;
          left: 80%;
          animation-duration: 14s;
          animation-delay: 6s;
          z-index: 0;
        }
      `}</style>
    </section>
  )
}
