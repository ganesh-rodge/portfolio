// import { useTheme } from './context/ThemeContext'
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
import { useScrollSpy } from './hooks/useScrollSpy'


export default function App() {
  // const {  toggleTheme } = useTheme()
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
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-500">
      <Navbar sections={sections} activeId={activeId} onNavigate={scrollTo} />
      <button
        // onClick={toggleTheme}
        className="fixed bottom-5 right-5 z-50 rounded-full px-4 py-2 text-sm font-medium bg-neutral-200 dark:bg-neutral-800 hover:scale-[1.03] active:scale-[0.98] transition-all"
      >
        {/* {theme === 'dark' ? '☾ Dark' : '☼ Light'} */}
      </button>
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
    </div>
  );
}
