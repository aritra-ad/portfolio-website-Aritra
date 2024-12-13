import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Layout from '@/components/Layout'
import Header from '@/components/Header'  // Import Header

export default function Home() {
  return (
    <Layout>
      <Header />  {/* Include Header here */}
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  )
}
