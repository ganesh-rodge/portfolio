import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useInView } from '../../hooks/useInView';
import Reveal from '../../components/Reveal';
import MotionReveal from '../../components/MotionReveal';
import ParallaxSection from '../../components/ParallaxSection';
import { FaNodeJs } from 'react-icons/fa';
const projects = [
    {
        title: 'Unique Fitness',
        desc: 'Your Personal Fitness Companion.',
        stack: ['Node.js', 'Express.js', 'React.js', 'JavaScript', 'MongoDB', 'TailwindCSS', 'REST APIs', 'JWT'],
        github: 'https://github.com/ganesh-rodge/uniquefitness',
        demo: 'https://uniquefitness.vercel.app'
    },
    {
        title: 'VidTube API',
        desc: 'Video Sharing & Microblogging APIs.',
        stack: ['Node.js', 'Express.js', 'JWT', 'Cloudinary', 'JavaScript', 'REST APIs', 'MongoDB'],
        github: 'https://github.com/ganesh-rodge/vidtube'
    },
    {
        title: 'CropNest',
        desc: 'Smart Agri-Marketplace Platform Front-end',
        stack: ['React.js', 'TypeScript', 'React-Router', 'TailwindCSS', 'CSS', 'HTML'],
        github: 'https://github.com/ganesh-rodge/agriconnect'
    },
];
export default function Projects() {
    return (_jsx(ParallaxSection, { id: "projects", className: "py-24 md:py-32", background: _jsx(ProjectBackground, {}), foreground: _jsxs("div", { className: "container max-w-6xl mx-auto px-6", children: [_jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [_jsx(Reveal, { as: "h2", variant: "slide-up", className: "text-3xl md:text-4xl font-bold", children: "What I Built" }), _jsx(MotionReveal, { variant: "fade", delay: 100, children: _jsx("a", { href: "https://github.com/ganesh-rodge", target: "_blank", className: "px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-60 hover:from-fuchsia-400 to-violet-400", children: "View All on GitHub" }) })] }), _jsx(MotionReveal, { as: "p", variant: "fade", delay: 200, className: "mt-3 text-neutral-600 dark:text-neutral-300", children: "Practical applications of my learning and growth." }), _jsx("div", { className: "mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((p, idx) => (_jsx(MotionReveal, { variant: idx % 2 === 0 ? 'right' : 'left', delay: idx * 120, children: _jsx(ProjectCard, { project: p, index: idx }) }, p.title))) })] }) }));
}
function ProjectCard({ project, index }) {
    const { ref, inView } = useInView({ threshold: 0.2 });
    const dir = index % 2 === 0 ? '-translate-x-4' : 'translate-x-4';
    // Determine preview content
    let previewContent;
    if (index === 0)
        previewContent = _jsx("img", { src: "/unique.png", alt: "Unique Fitness", className: "w-full h-full object-cover" });
    else if (index === 1)
        previewContent = (_jsxs("div", { className: "flex items-center justify-center gap-2 bg-green-50 dark:bg-green-900/40 rounded-xl px-3 py-2", children: [_jsx(FaNodeJs, { className: "w-6 h-6 text-green-600 dark:text-green-400" }), _jsx("span", { className: "text-lg font-medium text-green-800 dark:text-green-200", children: "REST APIs" })] }));
    else if (index === 2)
        previewContent = _jsx("img", { src: "/cropnest.png", alt: "CropNest", className: "w-full h-full object-cover" });
    return (_jsxs("article", { ref: ref, className: (inView ? 'opacity-100 translate-x-0' : `opacity-0 ${dir}`) +
            ' transition-all duration-700 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5', children: [_jsx("div", { className: "h-40 rounded-xl bg-gradient-to-tr from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 mb-4 overflow-hidden grid place-items-center", children: previewContent }), _jsx("h3", { className: "font-semibold text-lg", children: project.title }), _jsx("p", { className: "mt-1 text-neutral-600 dark:text-neutral-300 text-sm", children: project.desc }), _jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: project.stack.map((t) => (_jsx("span", { className: "text-xs px-2 py-1 rounded-full border border-neutral-300 dark:border-neutral-700", children: t }, t))) }), _jsxs("div", { className: "mt-4 flex gap-3", children: [project.github && (_jsx("a", { href: project.github, target: "_blank", className: "text-sm underline underline-offset-4 font-medium", children: "GitHub" })), project.demo && (_jsx("a", { href: project.demo, target: "_blank", className: "text-sm underline underline-offset-4 font-medium", children: "Live Demo" }))] })] }));
}
function ProjectBackground() {
    return (_jsxs("div", { className: "absolute inset-0 -z-10 opacity-60", children: [_jsx("div", { className: "absolute -left-10 top-10 w-40 h-40 bg-fuchsia-400/20 rounded-full blur-2xl" }), _jsx("div", { className: "absolute right-0 bottom-0 w-56 h-56 bg-violet-400/20 rounded-full blur-2xl" })] }));
}
