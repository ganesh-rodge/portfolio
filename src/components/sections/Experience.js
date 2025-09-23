import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useInView } from '../../hooks/useInView';
import Reveal from '../../components/Reveal';
const roles = [
    { period: 'December 2024 — February 2025', title: 'Software Development Engineer Intern', org: 'Central Railway, Mumbai.', desc: 'Gained exposure to the Software Development Life Cycle (SDLC) and Agile methodologies while contributing to development tasks.' },
    { period: 'August 2022 — October 2022', title: 'Front-end Intern', org: 'Technobrilliant Learning Solutions', desc: 'Implemented responsive UI components and contributed to feature development following front-end best practices.' },
];
export default function Experience() {
    return (_jsx("section", { id: "experience", className: "py-24 md:py-32", children: _jsxs("div", { className: "container max-w-5xl mx-auto px-6", children: [_jsx(Reveal, { as: "h2", variant: "slide-up", className: "text-3xl md:text-4xl font-bold", children: "Where I\u2019ve Been" }), _jsx(Reveal, { as: "p", variant: "fade", delay: 100, className: "mt-3 text-neutral-600 dark:text-neutral-300", children: "Roles and impactful milestones." }), _jsxs("div", { className: "mt-10 relative", children: [_jsx(ProgressLine, {}), _jsx("ul", { className: "space-y-8", children: roles.map((r) => (_jsx(RoleItem, Object.assign({}, r), r.title))) })] })] }) }));
}
function ProgressLine() {
    const { ref, inView } = useInView({ threshold: 0.1 });
    return (_jsx("div", { className: "absolute left-4 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 overflow-hidden", children: _jsx("div", { ref: ref, className: (inView ? 'h-full' : 'h-0') + ' w-px bg-gradient-to-b from-fuchsia-500 to-violet-500 transition-all duration-[1500ms]' }) }));
}
function RoleItem({ period, title, org, desc }) {
    const { ref, inView } = useInView({ threshold: 0.2 });
    return (_jsxs("li", { ref: ref, className: (inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3') + ' transition-all duration-700 pl-10', children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-fuchsia-500 absolute left-[3px] mt-3" }), _jsx("div", { className: "text-sm text-neutral-500 dark:text-neutral-400", children: period }), _jsxs("div", { className: "font-semibold", children: [title, " \u00B7 ", org] }), _jsx("p", { className: "mt-1 text-neutral-600 dark:text-neutral-300", children: desc.includes('Gained exposure') ? (_jsxs(_Fragment, { children: ["Gained exposure to the Software Development Life Cycle (SDLC) and Agile methodologies", _jsx("br", { className: "hidden lg:inline" }), " while contributing to development tasks."] })) : desc.includes('Implemented responsive UI components') ? (_jsxs(_Fragment, { children: ["Implemented responsive UI components and contributed to feature development", _jsx("br", { className: "hidden lg:inline" }), " following front-end best practices."] })) : (desc) })] }));
}
