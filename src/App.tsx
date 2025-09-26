import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Certifications from './components/sections/Certifications'
import Achievements from './components/sections/Achievements'
// import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import Loader from './components/Loader'
import { useScrollSpy } from './hooks/useScrollSpy'


export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  const sections = [
    { id: 'hero', label: 'Who am I' },
    { id: 'about', label: 'My Story' },
    { id: 'skills', label: 'What I Have' },
    { id: 'projects', label: 'What I Built' },
    { id: 'experience', label: 'Where I’ve Been' },
    { id: 'certifications', label: 'Proof of Work' },
    // { id: 'testimonials', label: 'What People Say' },
    { id: 'contact', label: 'Connect' },
  ]
  const { activeId, scrollTo } = useScrollSpy(sections.map(s => s.id))
  
  // Prevent body scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isLoading])
  
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-500">
      <Navbar sections={sections} activeId={activeId} onNavigate={scrollTo} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </main>

      <ThemeToggle />
    </div>
    </>
  );
}
