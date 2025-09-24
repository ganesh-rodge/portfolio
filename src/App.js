import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
// import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { useScrollSpy } from './hooks/useScrollSpy';
export default function App() {
    const sections = [
        { id: 'hero', label: 'Who am I' },
        { id: 'about', label: 'My Story' },
        { id: 'skills', label: 'What I Have' },
        { id: 'projects', label: 'What I Built' },
        { id: 'experience', label: 'Where I’ve Been' },
        { id: 'certifications', label: 'Proof of Work' },
        // { id: 'testimonials', label: 'What People Say' },
        { id: 'contact', label: 'Connect' },
    ];
    const { activeId, scrollTo } = useScrollSpy(sections.map(s => s.id));
    return (_jsxs("div", { className: "min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-500", children: [_jsx(Navbar, { sections: sections, activeId: activeId, onNavigate: scrollTo }), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Experience, {}), _jsx(Certifications, {}), _jsx(Achievements, {}), _jsx(Contact, {}), _jsx(Footer, {})] }), _jsx(ThemeToggle, {})] }));
}
